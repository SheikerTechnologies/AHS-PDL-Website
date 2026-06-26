/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * Converts a project title to a URL-friendly slug.
 * E.g., "AHS Jolshiri Central 16" → "ahs-jolshiri-central-16"
 */
export function titleToSlug(title: string): string {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

/**
 * Slug-to-ID lookup map. Since projects have opaque IDs like "proj-147-intl2",
 * we build a map from slug → project ID on initialization.
 */
import { DEVELOPMENT_PROJECTS } from './data';

export interface SlugMap {
  slugToId: Record<string, string>;
  idToSlug: Record<string, string>;
}

let _slugMap: SlugMap | null = null;

export function getSlugMap(): SlugMap {
  if (_slugMap) return _slugMap;

  const slugToId: Record<string, string> = {};
  const idToSlug: Record<string, string> = {};

  for (const project of DEVELOPMENT_PROJECTS) {
    const slug = titleToSlug(project.title);
    // Handle potential slug collisions by appending a suffix
    let uniqueSlug = slug;
    let counter = 1;
    while (slugToId[uniqueSlug] && slugToId[uniqueSlug] !== project.id) {
      uniqueSlug = `${slug}-${counter}`;
      counter++;
    }
    slugToId[uniqueSlug] = project.id;
    idToSlug[project.id] = uniqueSlug;
  }

  _slugMap = { slugToId, idToSlug };
  return _slugMap;
}

export function getProjectIdBySlug(slug: string): string | undefined {
  return getSlugMap().slugToId[slug];
}

export function getSlugByProjectId(id: string): string | undefined {
  return getSlugMap().idToSlug[id];
}

export function getAllProjectSlugs(): string[] {
  return Object.keys(getSlugMap().slugToId);
}
