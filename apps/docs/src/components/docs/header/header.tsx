import * as React from 'react';
import { Heading, IconButton } from '@blitz-ui/react';
import Link from 'next/link';
import cn from 'clsx';
import { MoonIcon, SunIcon } from '@heroicons/react/solid';
import { useTheme } from 'next-themes';
import { useMenu, useMenuSet } from '~/contexts';

export interface IHeaderProps {}

export function Header(props: IHeaderProps) {
  const menu = useMenu();
  const setMenu = useMenuSet();
  const { theme, setTheme } = useTheme();
  return (
    <div className="nextra-nav-container z-20 sticky top-0 bg-transparent w-full">
      <div className="nextra-nav-container-blur absolute w-full h-full bg-white/75 dark:bg-dark pointer-events-none" />
      <nav className="flex max-w-[90rem] mx-auto items-center left-0 right-0 h-16 pl-[max(env(safe-area-inset-left),1.5rem)] pr-[max(env(safe-area-inset-right),1.5rem)]">
        <div className="w-full flex items-center mr-2">
          <Link href="/">
            <a className="no-underline text-current inline-flex items-center hover:opacity-75">
              <Heading as="span">Blitz UI</Heading>
            </a>
          </Link>
        </div>
        <Link href="/docs">
          <a className="no-underline whitespace-nowrap mr-4 hidden md:inline-block text-neutral-11">
            Docs
          </a>
        </Link>

        <div className="flex items-center gap-2">
          <IconButton
            aria-label="github link"
            color="neutral"
            variant="ghost"
            size="sm"
            className="text-hiContrast"
            icon={
              <svg
                height={24}
                viewBox="2 2 20 20"
                fill="none"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M12 3C7.0275 3 3 7.12937 3 12.2276C3 16.3109 5.57625 19.7597 9.15374 20.9824C9.60374 21.0631 9.77249 20.7863 9.77249 20.5441C9.77249 20.3249 9.76125 19.5982 9.76125 18.8254C7.5 19.2522 6.915 18.2602 6.735 17.7412C6.63375 17.4759 6.19499 16.6569 5.8125 16.4378C5.4975 16.2647 5.0475 15.838 5.80124 15.8264C6.51 15.8149 7.01625 16.4954 7.18499 16.7723C7.99499 18.1679 9.28875 17.7758 9.80625 17.5335C9.885 16.9337 10.1212 16.53 10.38 16.2993C8.3775 16.0687 6.285 15.2728 6.285 11.7432C6.285 10.7397 6.63375 9.9092 7.20749 9.26326C7.1175 9.03257 6.8025 8.08674 7.2975 6.81794C7.2975 6.81794 8.05125 6.57571 9.77249 7.76377C10.4925 7.55615 11.2575 7.45234 12.0225 7.45234C12.7875 7.45234 13.5525 7.55615 14.2725 7.76377C15.9937 6.56418 16.7475 6.81794 16.7475 6.81794C17.2424 8.08674 16.9275 9.03257 16.8375 9.26326C17.4113 9.9092 17.76 10.7281 17.76 11.7432C17.76 15.2843 15.6563 16.0687 13.6537 16.2993C13.98 16.5877 14.2613 17.1414 14.2613 18.0065C14.2613 19.2407 14.25 20.2326 14.25 20.5441C14.25 20.7863 14.4188 21.0746 14.8688 20.9824C16.6554 20.364 18.2079 19.1866 19.3078 17.6162C20.4077 16.0457 20.9995 14.1611 21 12.2276C21 7.12937 16.9725 3 12 3Z"
                  fill="currentColor"
                />
              </svg>
            }
          />
          <IconButton
            aria-label="switch theme"
            color="neutral"
            variant="ghost"
            size="sm"
            className="text-hiContrast"
            onClick={() => {
              if (theme === 'dark') {
                setTheme('light');
              } else {
                setTheme('dark');
              }
            }}
            icon={
              theme === 'dark' ? (
                <SunIcon className="h-5 w-5" />
              ) : (
                <MoonIcon className="h-5 w-5" />
              )
            }
          />
          <IconButton
            aria-label="mobile menu"
            color="neutral"
            variant="ghost"
            size="sm"
            className="text-hiContrast nextra-menu-icon block md:hidden"
            onClick={setMenu}
            icon={
              <svg
                fill="none"
                width={20}
                height={20}
                viewBox="0 0 24 24"
                stroke="currentColor"
                className={cn({ open: menu })}
              >
                <g>
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16"
                  />
                </g>
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 12h16"
                />
                <g>
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 18h16"
                  />
                </g>
              </svg>
            }
          />
        </div>

        <div className="-mr-2" />
      </nav>
    </div>
  );
}
