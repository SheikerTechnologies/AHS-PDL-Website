/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 *
 * POST /api/interior-design-inquiry
 * Saves interior design consultation requests to MongoDB.
 */

import { NextRequest, NextResponse } from 'next/server';
import { getCollection, isMongoConfigured } from '@/lib/mongodb';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, phone, email, projectType, message } = body;

    // Validate required fields
    if (!name || !phone || !email || !projectType) {
      return NextResponse.json(
        { error: 'Missing required fields: name, phone, email, projectType' },
        { status: 400 }
      );
    }

    const inquiry = {
      name,
      phone,
      email,
      projectType,
      message: message || '',
      source: 'interior-design-page',
      createdAt: new Date(),
    };

    if (isMongoConfigured()) {
      const collection = await getCollection('interior_inquiries');
      await collection.insertOne(inquiry);
    } else {
      // Graceful fallback: log to console for development
      console.log('[interior-design-inquiry]', JSON.stringify(inquiry, null, 2));
    }

    return NextResponse.json(
      { success: true, message: 'Inquiry received. We will contact you within 24 hours.' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error processing interior design inquiry:', error);
    return NextResponse.json(
      { error: 'Internal server error. Please try again.' },
      { status: 500 }
    );
  }
}
