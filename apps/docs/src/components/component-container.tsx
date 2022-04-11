import * as React from 'react';

export interface ComponentContainerProps {
  children: React.ReactNode;
}

export function ComponentContainer({ children }: ComponentContainerProps) {
  return (
    <div className="p-4 border rounded-xl mt-6 mb-4 border-neutral-4">
      {children}
    </div>
  );
}
