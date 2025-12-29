import React from "react";
import "@/app/globals.css";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html>
      <body>
        <div>{children}</div>
      </body>
    </html>
  );
};

export default layout;
