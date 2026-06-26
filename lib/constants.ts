/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

// Application-wide constants
export const APP_NAME = 'AHS Properties & Development Ltd.';
export const APP_DESCRIPTION = 'Premium real estate in beautiful Bangladesh';

// Pagination constants
export const ITEMS_PER_PAGE = 6;
export const PROJECTS_PER_PAGE = 12;

// Filter defaults
export const DEFAULT_COAST = 'All Locations';
export const DEFAULT_PROPERTY_TYPE = 'All Property Types';

// Navigation routes
export const ROUTES = {
  HOME: '/',
  PROPERTIES: '/properties',
  PROJECTS: '/projects',
  NEWS: '/news',
  ABOUT: '/about',
  CONTACT: '/contact',
  RESOURCES: '/resources',
  LAYOUT: '/layout',
  SERVICES: '/services',
  LANDOWNERS: '/landowners',
  BLOG: '/blog',
} as const;

// API endpoints (if needed for future backend integration)
export const API_ROUTES = {
  PROPERTIES: '/api/properties',
  PROJECTS: '/api/projects',
  AGENTS: '/api/agents',
} as const;

// UI constants
export const MOBILE_BREAKPOINT = 768;
export const TABLET_BREAKPOINT = 1024;