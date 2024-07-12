import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
/*
import { authMiddleware, matcher } from '@jenify_ai/app-sdk-router';
import * as routings from '@/src/routing/index.config';
// import { getBackend } from '@/web/backend';
import { initialize, Client } from '@echopf/sdk';
*/

export async function middleware(request: NextRequest): Promise<NextResponse> {
  return NextResponse.next();
}

/*
export async function middleware(request: NextRequest): Promise<NextResponse> {
  const client = initialize(
          process.env.API_ENDPOINT,
          process.env.API_APP_ID, 
          process.env.API_APP_KEY,
  );

  // return await authMiddleware(getBackend(), request, {});
}

export const config = {
  runtime: 'experimental-edge', // for Edge API Routes only
  unstable_allowDynamic: [
    '/node_modules/@echopf/**',
  ],
}
*/

