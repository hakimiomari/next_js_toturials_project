export const dynamic = "force-static";
export const GET = async (request: Request) => {
  return Response.json({ time: new Date().toLocaleTimeString() });
};
