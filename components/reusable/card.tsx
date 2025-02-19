import React from "react";

export default function Card({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`w-full bg-gradient-to-r from-slate-900 to-slate-700 shadow-md p-4 rounded-md hover:shadow-lg 200 hover:bg-opacity-90 cursor-pointer ${className}`}
    >
      {children}
    </div>
  );
}
