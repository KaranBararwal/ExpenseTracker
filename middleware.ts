import { clerkMiddleware } from '@clerk/nextjs/server';

export default clerkMiddleware();

// Specify Node.js runtime for the middleware
export const config = {
  runtime: 'nodejs',  // Switch to Node.js runtime
  matcher: [
    // Exclude static files and Next.js internals
    '/((?!_next/static|_next/image|favicon.ico|static).*)',
    '/api/(.*)',
  ],
};
