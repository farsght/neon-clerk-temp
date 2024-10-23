import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

// Define a function to check if a route is public
// createRouteMatcher creates a function that checks if a given route matches any of the provided patterns
const isPublicRoute = createRouteMatcher([
  "/", // The root route
  "/sign-in(.*)", // Any route starting with /sign-in
  "/sign-up(.*)", // Any route starting with /sign-up
  "/book(.*)", // Any route starting with /book
]);

// Export the Clerk middleware configuration
export default clerkMiddleware(async (auth, request) => {

  if (!isPublicRoute(request)) {
    await auth.protect()
  }


})

// Export the Next.js middleware configuration
export const config = {
  // Define which routes this middleware should run on
  matcher: [
    // This complex regex matches all routes except:
    // - Next.js internals (routes starting with _next)
    // - Static files (with extensions like .html, .css, .js, .jpg, etc.)
    // However, it will match these if they are found in search params (after a ?)
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",

    // Always run the middleware for API routes
    // This includes both /api and /trpc routes (likely for API and tRPC endpoints)
    "/(api|trpc)(.*)",
  ],
};