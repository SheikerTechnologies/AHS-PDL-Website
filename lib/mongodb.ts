/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 *
 * MongoDB client singleton for Next.js App Router.
 * Uses lazy initialization — the client is only created on first use,
 * so this module can be safely imported even when MONGODB_URI is not configured.
 */

import { MongoClient } from 'mongodb';

const MONGODB_URI = process.env.MONGODB_URI as string | undefined;
const DB_NAME = process.env.MONGODB_DB || 'ahspdl';

if (!MONGODB_URI && typeof window === 'undefined') {
  console.warn(
    'MONGODB_URI is not defined in environment variables. API routes that require a database will fall back gracefully.'
  );
}

declare global {
  // eslint-disable-next-line no-var
  var _mongoClientPromise: Promise<MongoClient> | undefined;
}

let cachedPromise: Promise<MongoClient> | null = null;

async function createClient(): Promise<MongoClient> {
  if (!MONGODB_URI) {
    throw new Error('MONGODB_URI environment variable is not set');
  }
  const client = new MongoClient(MONGODB_URI, {
    maxPoolSize: 10,
    serverSelectionTimeoutMS: 5000,
    socketTimeoutMS: 30000,
  });
  return client.connect();
}

/**
 * Get a connected MongoClient instance (lazy).
 * The client is created on first call, not at module import time.
 * Throws if MONGODB_URI is not configured.
 */
export async function getClient(): Promise<MongoClient> {
  if (process.env.NODE_ENV === 'development') {
    if (!global._mongoClientPromise) {
      global._mongoClientPromise = createClient();
    }
    return global._mongoClientPromise;
  }

  if (!cachedPromise) {
    cachedPromise = createClient();
  }
  return cachedPromise;
}

/**
 * Get a reference to the application database.
 */
export async function getDb() {
  const client = await getClient();
  return client.db(DB_NAME);
}

/**
 * Get a reference to a specific collection.
 */
export async function getCollection(name: string) {
  const db = await getDb();
  return db.collection(name);
}

/**
 * Check if MongoDB is configured (useful for graceful fallbacks).
 */
export function isMongoConfigured(): boolean {
  return !!MONGODB_URI;
}
