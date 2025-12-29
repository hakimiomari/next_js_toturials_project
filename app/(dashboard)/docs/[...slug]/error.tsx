"use client";
// import { useRouter } from "next/router";
import { useRouter } from "next/navigation";
import { startTransition } from "react";

const ErrorBoundary = ({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) => {
  const router = useRouter();
  const reload = () => {
    startTransition(() => {
      router.refresh();
      reset();
    });
  };
  return (
    <div>
      <h1>Something went wrong</h1>
      <button className="bg-amber-400 p-2 rounded" onClick={reload}>
        Try again
      </button>
    </div>
  );
};

export default ErrorBoundary;
