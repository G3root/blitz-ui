import * as React from "react";

export interface ComponentContainerProps {
  children: React.ReactNode;
  className?: string;
}

export function ComponentContainer({
  children,
  className,
}: ComponentContainerProps) {
  return (
    <div
      className={`p-4 border rounded-xl mt-6 mb-4 border-neutral-4 ${className}`}
    >
      {children}
    </div>
  );
}
