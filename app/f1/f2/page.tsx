import Link from "next/link";
import React from "react";

const F2 = () => {
  return (
    <div>
      <h2 className="text-3xl font-bold">F2 Page</h2>
      <Link href="/f1">F1 Page</Link>
    </div>
  );
};

export default F2;
