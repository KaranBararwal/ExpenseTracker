import { clerkMiddleware } from '@clerk/nextjs/server';

export default clerkMiddleware();

// Configuring middleware to match routes
export const config = {
  matcher: [
    // Exclude static files and Next.js internals
    '/((?!_next/static|_next/image|favicon.ico|static).*)',
    // Always include API routes
    '/api/(.*)',
  ],
};
