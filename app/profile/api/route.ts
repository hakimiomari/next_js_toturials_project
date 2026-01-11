import { cookies } from "next/headers";

export const GET = async (request: Request) => {
  (await cookies()).set("user", "John Doe", { path: "/", httpOnly: true });
  (await cookies()).set("theme", "light", { path: "/", httpOnly: true });
  return new Response("<h1>User profile API</h1>", {
    headers: {
      "Content-Type": "text/html",
    },
  });
};
