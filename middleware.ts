import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { authMiddleware } from '@jenify_ai/app-sdk-router';
import appConfig from '@/src/routing/TwitterLikeApp/app';
import routes from '@/src/routing/TwitterLikeApp/routes';
import { backend } from '@/web/backend';

export async function middleware(request: NextRequest): Promise<NextResponse> {
    return await authMiddleware(backend, request, appConfig, routes);
}

export const config = {
  matcher: routes.map((route) => route?.web?.url),
};