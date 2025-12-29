import React from "react";

const ComplexDashboardLayout = ({
  children,
  users,
  notifications,
  revenue,
  login,
}: {
  children: React.ReactNode;
  users: React.ReactNode;
  notifications: React.ReactNode;
  revenue: React.ReactNode;
  login: React.ReactNode;
}) => {
  const isLogedeIn = false;
  return isLogedeIn ? (
    <html>
      <body>
        <div className="p-3">
          <div>{children}</div>
          <div className="flex">
            <div className="flex flex-col">
              <div>{users}</div>
              <div>{revenue}</div>
            </div>
            <div className="flex flex-1">{notifications}</div>
          </div>
        </div>
      </body>
    </html>
  ) : (
    <html>
      <body>
        <div className="p-3">
          <div>{children}</div>
          <div className="flex">
            <div className="flex flex-col">
              <div>{login}</div>
              <div>{revenue}</div>
            </div>
            <div className="flex flex-1">{notifications}</div>
          </div>
        </div>
      </body>
    </html>
  );
};

export default ComplexDashboardLayout;
