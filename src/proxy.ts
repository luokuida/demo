import { auth } from "@/auth";
import { NextResponse } from "next/server";

export default auth((req) => {
  const isLogin = !!req.auth;
  const isPritected = req.nextUrl.pathname.startsWith("/orders");

  if (isPritected && !isLogin) {
    return NextResponse.redirect(new URL("/api/auth/signin", req.url))
  }
})

// export const config = {
//     matcher: ["/orders/:path*", "/profile/:path*"],
// }
export const config = {
  matcher: [
    "/((?!api/auth|_next/static|_next/image|favicon.ico).*)",
  ],
}