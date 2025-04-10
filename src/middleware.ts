import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { createServerClient } from "@supabase/ssr";

export async function middleware(req: NextRequest) {
  const res = NextResponse.next();

  // TEMPORARY: Authentication checks disabled for development
  // This allows access to all dashboards for testing purposes
  // TODO: Re-enable authentication checks when auth is implemented
  console.log("Auth checks temporarily disabled for development");
  return res;

  /* AUTHENTICATION CODE COMMENTED OUT FOR DEVELOPMENT
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  // Skip Supabase auth checks if credentials aren't available
  if (!supabaseUrl || !supabaseKey) {
    // Only log once to avoid console spam
    if (req.nextUrl.pathname === "/") {
      console.warn(
        "Supabase credentials not configured - auth checks disabled",
      );
    }
    return res;
  }

  const supabase = createServerClient(supabaseUrl, supabaseKey, {
    cookies: {
      get(name) {
        return req.cookies.get(name)?.value;
      },
      set(name, value, options) {
        res.cookies.set({
          name,
          value,
          ...options,
        });
      },
      remove(name, options) {
        res.cookies.set({
          name,
          value: "",
          ...options,
        });
      },
    },
  });

  const {
    data: { session },
  } = await supabase.auth.getSession();

  // Check if the user is authenticated
  if (!session) {
    // If the user is not authenticated and trying to access a protected route, redirect to login
    if (
      req.nextUrl.pathname.startsWith("/dashboard") ||
      req.nextUrl.pathname.startsWith("/admin") ||
      req.nextUrl.pathname.startsWith("/collector")
    ) {
      return NextResponse.redirect(new URL("/", req.url));
    }
    return res;
  }

  // Get the user's role from their metadata
  const userRole = session.user?.user_metadata?.role || "member";

  // Check if the user is trying to access admin routes but doesn't have admin role
  if (req.nextUrl.pathname.startsWith("/admin") && userRole !== "admin") {
    // Redirect to dashboard if they're a member, or to collector dashboard if they're a collector
    if (userRole === "collector") {
      return NextResponse.redirect(new URL("/collector", req.url));
    }
    return NextResponse.redirect(new URL("/dashboard", req.url));
  }

  // Check if the user is trying to access collector routes but doesn't have collector role
  if (
    req.nextUrl.pathname.startsWith("/collector") &&
    userRole !== "collector" &&
    userRole !== "admin"
  ) {
    // Admins can access collector routes, but members cannot
    return NextResponse.redirect(new URL("/dashboard", req.url));
  }

  // Check if the user is trying to access member dashboard but is an admin or collector
  if (
    req.nextUrl.pathname.startsWith("/dashboard") &&
    (userRole === "admin" || userRole === "collector")
  ) {
    // Redirect to the appropriate dashboard based on role
    if (userRole === "admin") {
      return NextResponse.redirect(new URL("/admin", req.url));
    }
    return NextResponse.redirect(new URL("/collector", req.url));
  }
  */

  return res;
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - public (public files)
     */
    "/((?!_next/static|_next/image|favicon.ico|public).*)",
  ],
};
