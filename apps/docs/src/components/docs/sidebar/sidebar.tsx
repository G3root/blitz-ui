import * as React from 'react';
import { useMenu, useMenuSet } from '~/contexts';
import cn from 'clsx';
import { RouteItem } from '~/utils';
import { useRouter } from 'next/router';
import sortBy from 'lodash.sortby';
import Slugger from 'github-slugger';
import { Collapse } from './collapse';
import { ArrowRight } from '~/icons';
import Link from 'next/link';

const TreeState: Record<string, boolean> = {};

export interface SidebarProps {
  routes: RouteItem[];
  anchors: { [key: string]: string[] };
}

export type SidebarContentProps = {
  routes: RouteItem[];
  anchors: { [key: string]: string[] };
};

interface FolderProps {
  item: RouteItem;
  anchors: { [key: string]: string[] };
}

const Folder = React.memo(FolderImpl);
function FolderImpl({ item, anchors }: FolderProps) {
  const { asPath } = useRouter();

  const route = asPath.split('#')[0];
  const path = item.path ?? '/docs/' + item.title.toLowerCase();
  const active = route === path || route + '/' === path;
  const activeRouteInside = active || route.startsWith('/docs/');
  // route.startsWith("/docs/");

  const open =
    typeof TreeState[path] !== 'undefined'
      ? TreeState[path]
      : active || activeRouteInside;

  const rerender = React.useState({})[1];

  React.useEffect(() => {
    if (activeRouteInside) {
      TreeState[path] = true;
    }
  }, [activeRouteInside]);

  const link = (
    <a
      className="cursor-pointer"
      onClick={(e) => {
        const clickedToggleIcon = ['svg', 'path'].includes(
          (e.target as HTMLElement).tagName.toLowerCase()
        );
        if (clickedToggleIcon) {
          e.preventDefault();
        }

        if (active) return;
        TreeState[path] = !open;

        rerender({});
      }}
    >
      <span className="flex items-center justify-between">
        {item.title}
        <ArrowRight
          height="1em"
          className={
            'ml-2 p-[2px] rounded-sm min-w-[18px] h-[18px] dark:hover:bg-gray-100 hover:bg-gray-800 hover:bg-opacity-5 dark:hover:bg-opacity-5'
          }
          childProps={{
            className: cn(
              'transition-transform origin-center',
              open ? 'rotate-90' : ''
            )
          }}
        />
      </span>
    </a>
  );

  return (
    <li className={cn({ open, active })}>
      {link}
      <Collapse open={open}>
        {Array.isArray(item.routes) && (
          <SidebarContent routes={item.routes} anchors={anchors} />
        )}
      </Collapse>
    </li>
  );
}
interface FileProps {
  item: RouteItem;
  anchors: { [key: string]: string[] };
}
function File({ item }: FileProps) {
  const { asPath } = useRouter();
  const path = item.path as string;
  const route = asPath.split('#')[0];
  const active = route === path || route + '/' === path;
  const setMenu = useMenuSet();

  const title = item.title;

  return (
    <li className={active ? 'active' : ''}>
      <Link href={item.path ?? ''}>
        <a
          onClick={() => {
            setMenu();
          }}
        >
          {title}
        </a>
      </Link>
    </li>
  );
}

function SidebarContent({ routes, anchors }: SidebarContentProps) {
  return (
    <ul>
      {routes.map((item) => {
        if (item.routes && item.routes.length) {
          return <Folder key={item.title} item={item} anchors={anchors} />;
        }
        return <File key={item.title} item={item} anchors={anchors} />;
      })}
    </ul>
  );
}
export function Sidebar(props: SidebarProps) {
  const { routes, anchors } = props;
  const menu = useMenu();
  React.useEffect(() => {
    if (menu) {
      document.body.classList.add('overflow-hidden', 'md:overflow-auto');
    } else {
      document.body.classList.remove('overflow-hidden', 'md:overflow-auto');
    }
  }, [menu]);
  return (
    <aside
      className={cn(
        'nextra-sidebar-container fixed flex-shrink-0 w-full md:w-64 md:sticky z-[15] top-16 self-start overflow-y-auto transform-none h-[calc(100vh-4rem)]',
        'md:block',
        { open: menu }
      )}
    >
      <div className="nextra-sidebar select-none w-full h-full md:h-auto pl-[calc(env(safe-area-inset-left)-1.5rem)]">
        <div className="p-4 min-h-[calc(100vh-4rem-61px)]">
          <div className="nextra-sidebar-search mb-4 block md:hidden">
            {/* {config.customSearch ||
              (config.search ? (
                config.unstable_flexsearch ? (
                  <Flexsearch />
                ) : (
                  <Search directories={flatDirectories} />
                )
              ) : null)} */}
          </div>
          <div className="hidden md:block">
            <SidebarContent routes={routes} anchors={anchors} />
          </div>
          <div className="md:hidden">
            <SidebarContent routes={routes} anchors={anchors} />
            {/* <Menu
              directories={fullDirectories}
              anchors={
                // Always show the anchor links on mobile (`md`).
                anchors
              }
            /> */}
          </div>
        </div>

        <div className="nextra-sidebar-menu mx-4 border-t dark:border-neutral-800 shadow-[0_-12px_16px_white] dark:shadow-[0_-12px_16px_#111]">
          <div className="bg-white dark:bg-dark py-4 flex gap-1 pb-4">
            {/* {config.i18n ? (
              <div className="flex-1 relative">
                <LocaleSwitch options={config.i18n} />
              </div>
            ) : null}
            {config.darkMode ? (
              <>
                <div
                  className={cn("relative md:hidden", {
                    locale: config.i18n,
                    "flex-1": !config.i18n,
                  })}
                >
                  <ThemeSwitch lite={false} />
                </div>
                <div
                  className={cn(
                    "relative hidden md:block",
                    {
                      locale: config.i18n,
                    },
                    config.i18n ? "grow-0" : "flex-1"
                  )}
                >
                  <ThemeSwitch lite={!!config.i18n} />
                </div>
              </>
            ) : null} */}
          </div>
        </div>
      </div>
    </aside>
  );
}
