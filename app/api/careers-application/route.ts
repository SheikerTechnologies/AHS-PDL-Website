/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 *
 * POST /api/careers-application
 * Accepts multipart form data with resume file upload.
 * Stores resume locally and saves application data + file URL to MongoDB.
 */

import { NextRequest, NextResponse } from 'next/server';
import { writeFile, mkdir } from 'fs/promises';
import { existsSync } from 'fs';
import path from 'path';
import { getCollection, isMongoConfigured } from '@/lib/mongodb';

const UPLOADS_DIR = path.join(process.cwd(), 'public', 'uploads', 'resumes');

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();

    const name = formData.get('name') as string | null;
    const email = formData.get('email') as string | null;
    const phone = formData.get('phone') as string | null;
    const department = formData.get('department') as string | null;
    const message = formData.get('message') as string | null;
    const jobSlug = formData.get('jobSlug') as string | null; // optional: job-specific application
    const resumeFile = formData.get('resume') as File | null;

    // Validate required fields
    if (!name || !email || !phone) {
      return NextResponse.json(
        { error: 'Missing required fields: name, email, phone' },
        { status: 400 }
      );
    }

    let resumeUrl: string | null = null;

    // Handle resume file upload
    if (resumeFile && resumeFile.size > 0) {
      // Validate file type
      const allowedTypes = ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'];
      if (!allowedTypes.includes(resumeFile.type)) {
        return NextResponse.json(
          { error: 'Invalid file type. Only PDF, DOC, and DOCX files are accepted.' },
          { status: 400 }
        );
      }

      // Validate file size (max 10MB)
      const maxSize = 10 * 1024 * 1024;
      if (resumeFile.size > maxSize) {
        return NextResponse.json(
          { error: 'File too large. Maximum size is 10MB.' },
          { status: 400 }
        );
      }

      // Create uploads directory if it doesn't exist
      if (!existsSync(UPLOADS_DIR)) {
        await mkdir(UPLOADS_DIR, { recursive: true });
      }

      // Generate unique filename
      const timestamp = Date.now();
      const ext = path.extname(resumeFile.name) || '.pdf';
      const safeName = `${timestamp}-${resumeFile.name.replace(/[^a-zA-Z0-9._-]/g, '_')}`;
      const filePath = path.join(UPLOADS_DIR, safeName);

      // Write file to disk
      const buffer = Buffer.from(await resumeFile.arrayBuffer());
      await writeFile(filePath, buffer);

      resumeUrl = `/uploads/resumes/${safeName}`;
    }

    const application = {
      name,
      email,
      phone,
      department: department || '',
      message: message || '',
      jobSlug: jobSlug || '',
      resumeUrl,
      source: jobSlug ? 'job-specific' : 'general',
      createdAt: new Date(),
    };

    if (isMongoConfigured()) {
      const collection = await getCollection('career_applications');
      await collection.insertOne(application);
    } else {
      // Graceful fallback: log to console for development
      console.log('[careers-application]', JSON.stringify(application, null, 2));
    }

    return NextResponse.json(
      { success: true, message: 'Application received. We will be in touch.' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error processing career application:', error);
    return NextResponse.json(
      { error: 'Internal server error. Please try again or email us directly.' },
      { status: 500 }
    );
  }
}
