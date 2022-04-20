import * as React from 'react';
import {
  findRouteByPath,
  removeFromLast,
  getRouteContext,
  RouteItem
} from '~/utils';
import { componentsSidebar } from '~/configs';
import { PageContainer, Pagination } from '~/components/docs';
import { FindAnchors } from '~/utils';
import { Sidebar } from '~/components/docs/sidebar';

export interface DocsLayoutProps {
  frontMatter: any;
  children: React.ReactNode;
  anchors: ReturnType<typeof FindAnchors>;
}

export function DocsLayout(props: DocsLayoutProps) {
  const { frontMatter, children, anchors } = props;
  const { routes } = componentsSidebar;
  const route = findRouteByPath(
    removeFromLast(frontMatter.slug, '#'),
    routes
  ) as RouteItem;
  const routeContext = getRouteContext(route, routes);

  return (
    <PageContainer
      frontMatter={frontMatter}
      sidebar={<Sidebar anchors={anchors} routes={routes} />}
      pagination={
        <Pagination
          next={routeContext.nextRoute}
          previous={routeContext.prevRoute}
        />
      }
    >
      {children}
    </PageContainer>
  );
}
