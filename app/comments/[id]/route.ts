import { comments } from "../data";

export const GET = async (
  _request: Request,
  { params }: { params: Promise<{ id: string }> }
) => {
  const { id } = await params;
  const comment = comments.find((c) => c.id === Number(id));
  if (!comment) {
    return Response.json({ message: "Comment not found" });
  }
  return Response.json(comment);
};

export const PATCH = async (
  _request: Request,
  { params }: { params: Promise<{ id: string }> }
) => {
  const { id } = await params;
  const newComment = await _request.json();
  const comment = comments.find((c) => c.id === Number(id));
  if (!comment) {
    return Response.json({ message: "Comment not found" });
  }
  const updatedComment = {
    ...comment,
    text: newComment.text,
    author: newComment.author,
    date: new Date().toISOString(),
  };
  comments.splice(comments.indexOf(comment), 1, updatedComment);
  return Response.json(updatedComment);
};

export const DELETE = async (
  _request: Request,
  {
    params,
  }: {
    params: Promise<{ id: string }>;
  }
) => {
  const { id } = await params;
  const comment = comments.find((c) => c.id === parseInt(id));
  if (!comment) {
    return Response.json({ message: "Comment not found" });
  }
  comments.splice(comments.indexOf(comment), 1);
  return Response.json({ message: "Comment deleted" });
};
