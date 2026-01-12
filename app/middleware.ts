import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export const middleware = async (request: NextRequest) => {
  return NextResponse.redirect(new URL("/", request.url));
};

// export const config = {
//   matcher: "/profile",
// };
