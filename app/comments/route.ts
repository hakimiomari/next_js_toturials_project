import { NextRequest } from "next/server";
import { comments } from "./data";
import { headers } from "next/headers";

export const GET = async (_request: NextRequest) => {
  const searchParams = _request.nextUrl.searchParams;
  const headerList = await headers();
  console.log("header -->", headerList.get("Authorization"));
  const query = searchParams.get("query");
  const filterComments = query
    ? comments.filter((comment) => comment.text.includes(query))
    : comments;
  return Response.json(filterComments);
};
export const POST = async (request: Request) => {
  const comment = await request.json();
  const newComment = {
    id: comments.length + 1,
    text: comment.text,
    author: comment.author,
    date: new Date().toISOString(),
  };
  comments.push(newComment);
  return Response.json(comments);
};
