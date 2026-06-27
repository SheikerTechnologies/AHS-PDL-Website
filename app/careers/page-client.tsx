'use client';

import { useState } from 'react';
import CareerHero from '@/components/careers/CareerHero';
import JobStats from '@/components/careers/JobStats';
import DepartmentFilter from '@/components/careers/DepartmentFilter';
import JobListing from '@/components/careers/JobListing';
import GeneralApplicationForm from '@/components/careers/GeneralApplicationForm';

export default function CareersPageClient() {
  const [departmentFilter, setDepartmentFilter] = useState('All');

  return (
    <div className="min-h-screen bg-surface">
      <CareerHero />
      <JobStats />
      <div className="max-w-7xl mx-auto px-6 md:px-8 pt-10 pb-2">
        <DepartmentFilter selected={departmentFilter} onSelect={setDepartmentFilter} />
      </div>
      <JobListing departmentFilter={departmentFilter} />
      <GeneralApplicationForm />
    </div>
  );
}
