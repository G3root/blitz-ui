import * as React from 'react';

export interface FooterProps {}

export function Footer(props: FooterProps) {
  return (
    <footer className="bg-gray-100 dark:bg-neutral-900 pb-[env(safe-area-inset-bottom)]">
      <div className="max-w-[90rem] mx-auto pl-[max(env(safe-area-inset-left),1.5rem)] pr-[max(env(safe-area-inset-right),1.5rem)] py-12">
        <div className="flex justify-between flex-col-reverse md:flex-row items-center md:items-end">
          Proudly made in 🇱🇰 by Nafees Nazik.
          <div className="mt-6" />
        </div>
      </div>
    </footer>
  );
}
