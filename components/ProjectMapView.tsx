/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

'use client';

import { useEffect, useRef } from 'react';
import { DevelopmentProject } from '@/lib/types';
import { titleToSlug } from '@/lib/slugs';

// Coordinates for project areas (approximate Jolshiri and Nayapaltan locations in Dhaka)
const AREA_COORDS: Record<string, [number, number]> = {
  'Jolshiri Abashon': [23.7556, 90.4632],
  'Nayapaltan': [23.7381, 90.4085],
};

interface ProjectMapViewProps {
  projects: DevelopmentProject[];
}

export default function ProjectMapView({ projects }: ProjectMapViewProps) {
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<L.Map | null>(null);
  const markersRef = useRef<L.Marker[]>([]);

  useEffect(() => {
    let L: typeof import('leaflet') | null = null;

    const initMap = async () => {
      if (!mapRef.current || mapInstanceRef.current) return;

      try {
        const leaflet = await import('leaflet');
        L = leaflet;

        // Fix Leaflet icon paths
        delete (L.Icon.Default.prototype as any)._getIconUrl;
        L.Icon.Default.mergeOptions({
          iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
          iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
          shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
        });

        const map = L.map(mapRef.current, {
          zoomControl: true,
          scrollWheelZoom: true,
        }).setView([23.746, 90.435], 12);

        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
          attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
          maxZoom: 19,
        }).addTo(map);

        mapInstanceRef.current = map;

        // Add markers for each project
        projects.forEach((project) => {
          const coords = AREA_COORDS[project.area];
          if (!coords) return;

          const marker = L!.marker(coords, {
            title: project.title,
          }).addTo(map);

          const slug = titleToSlug(project.title);

          marker.bindPopup(`
            <div style="font-family: system-ui, sans-serif; min-width: 180px;">
              <strong style="font-size: 13px; display: block; margin-bottom: 2px;">${project.title}</strong>
              <span style="font-size: 11px; color: #666;">${project.location}</span>
              <div style="margin-top: 6px; display: flex; gap: 8px; font-size: 11px;">
                <span>${project.type}</span>
                <span>•</span>
                <span>${project.status === 'ONGOING' ? 'Ongoing' : 'Completed'}</span>
              </div>
              <a href="/projects/${slug}" style="display: inline-block; margin-top: 8px; padding: 4px 12px; background: #b84822; color: white; text-decoration: none; border-radius: 999px; font-size: 11px; font-weight: 600;">
                View Details
              </a>
            </div>
          `);

          markersRef.current.push(marker);
        });

        // Fit bounds to show all markers
        if (markersRef.current.length > 0) {
          const group = L.featureGroup(markersRef.current);
          map.fitBounds(group.getBounds().pad(0.2));
        }
      } catch (err) {
        console.error('Failed to load Leaflet map:', err);
      }
    };

    initMap();

    return () => {
      if (mapInstanceRef.current) {
        mapInstanceRef.current.remove();
        mapInstanceRef.current = null;
        markersRef.current = [];
      }
    };
  }, [projects]);

  return (
    <div
      ref={mapRef}
      className="w-full h-[400px] md:h-[500px] rounded-2xl overflow-hidden border border-border-main shadow-sm z-0"
      style={{ zIndex: 0 }}
    />
  );
}
