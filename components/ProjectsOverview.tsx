/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useMemo } from 'react';
import { DevelopmentProject } from '@/lib/types';
import { DEVELOPMENT_PROJECTS } from '@/lib/data';
import { PROJECT_EXTRAS, getDefaultExtras } from '@/lib/projectExtras';
import ProjectGrid from './ProjectGrid';
import ProjectDetailHero from './ProjectDetailHero';
import ProjectAccreditationsSection from './ProjectAccreditationsSection';
import ProjectAgentSection from './ProjectAgentSection';
import ProjectBookingForm from './ProjectBookingForm';

interface ProjectsOverviewProps {
  onInquire: (title: string) => void;
}

export default function ProjectsOverview({ onInquire }: ProjectsOverviewProps) {
  // Grid view state
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedArea, setSelectedArea] = useState('All');
  const [selectedStatus, setSelectedStatus] = useState('All');
  const [savedProjects, setSavedProjects] = useState<string[]>([]);

  // Detail view state
  const [activeProject, setActiveProject] = useState<DevelopmentProject | null>(null);
  const [selectedUnitIndex, setSelectedUnitIndex] = useState(0);
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  // Stable random booking ref, generated once per mount
  const [bookingRef] = useState(() => Math.floor(Math.random() * 900000 + 100000));

  // Computed values
  const projectImages = activeProject?.images || [activeProject?.image || ''];
  const toggleSave = (id: string, e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    setSavedProjects(prev =>
      prev.includes(id) ? prev.filter(pId => pId !== id) : [...prev, id]
    );
  };

  const filteredProjects = useMemo(() =>
    DEVELOPMENT_PROJECTS.filter(project => {
      const matchesSearch = searchQuery === '' ||
        project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.description.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesArea = selectedArea === 'All' || project.area === selectedArea;
      const matchesStatus = selectedStatus === 'All' ||
        (selectedStatus === 'Ongoing' && project.status === 'ONGOING') ||
        (selectedStatus === 'Completed' && project.status === 'COMPLETED');

      return matchesSearch && matchesArea && matchesStatus;
    }),
    [searchQuery, selectedArea, selectedStatus]
  );

  const handleBackToGrid = () => {
    setActiveProject(null);
    setSelectedUnitIndex(0);
    setActiveImageIndex(0);
    window.scrollTo({ top: 400, behavior: 'smooth' });
  };

  const handleProjectClick = (project: DevelopmentProject) => {
    setActiveProject(project);
    setSelectedUnitIndex(0);
    setActiveImageIndex(0);
    window.scrollTo({ top: 400, behavior: 'instant' });
  };

  // Detail View
  if (activeProject) {
    const extras = PROJECT_EXTRAS[activeProject.id] || getDefaultExtras();
    const selectedUnitObj = extras.units[selectedUnitIndex] || extras.units[0];
    const agentName = extras.coBroker || 'Junaid Nuzeebun';
    const agentTel = agentName === 'Yalda Sheri' ? '01625-555700' : '01725-555700';
    const agentEmail = 'ahspropertiesdevelopmentltd@gmail.com';
    const agentPhoto = agentName === 'Yalda Sheri'
      ? 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80'
      : 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=400&q=80';

    return (
      <div className="flex flex-col gap-12 w-full max-w-7xl mx-auto py-4 select-none font-sans animate-in fade-in slide-in-from-bottom-6 duration-300">
        <ProjectDetailHero
          project={activeProject}
          images={projectImages}
          activeImageIndex={activeImageIndex}
          setActiveImageIndex={setActiveImageIndex}
          scheme={extras.scheme}
          completion={extras.completion}
          isSaved={savedProjects.includes(activeProject.id)}
          onToggleSave={() => toggleSave(activeProject.id)}
          onBack={handleBackToGrid}
        />
        <ProjectAccreditationsSection
          projectTitle={activeProject.title}
          projectDescription={activeProject.description}
          images={projectImages}
          activeImageIndex={activeImageIndex}
        />
        <ProjectAgentSection
          agentName={agentName}
          agentTel={agentTel}
          agentEmail={agentEmail}
          agentPhoto={agentPhoto}
        />
        <ProjectBookingForm
          key={activeProject.id}
          projectTitle={activeProject.title}
          agentName={agentName}
          selectedUnitName={selectedUnitObj.name}
          scheme={extras.scheme}
          onInquire={onInquire}
          onBackToGrid={handleBackToGrid}
          bookingRef={bookingRef}
        />
      </div>
    );
  }

  // Grid View
  return (
    <ProjectGrid
      searchQuery={searchQuery}
      setSearchQuery={setSearchQuery}
      selectedArea={selectedArea}
      setSelectedArea={setSelectedArea}
      selectedStatus={selectedStatus}
      setSelectedStatus={setSelectedStatus}
      filteredProjects={filteredProjects}
      savedProjects={savedProjects}
      toggleSave={toggleSave}
      onProjectClick={handleProjectClick}
    />
  );
}
