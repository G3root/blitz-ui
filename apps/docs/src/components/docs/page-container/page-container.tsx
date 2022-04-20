import * as React from 'react';
import { useRouter } from 'next/router';
import { Header } from '~/components/docs';
import { Footer } from '../footer';
import { TableOfContent } from '../table-of-content';
import { ActiveAnchor, MenuStateProvider } from '~/contexts';
import { NextSeo } from 'next-seo';

export interface Heading {
  level: 'h2' | 'h3';
  text: string;
  id: string;
}

function useHeadingFocusOnRouteChange() {
  const router = useRouter();

  React.useEffect(() => {
    const onRouteChange = () => {
      const [heading] = Array.from(document.getElementsByTagName('h1'));
      heading?.focus();
    };
    router.events.on('routeChangeComplete', onRouteChange);
    return () => {
      router.events.off('routeChangeComplete', onRouteChange);
    };
  }, [router.events]);
}

export interface PageContainerProps {
  frontMatter: {
    slug?: string;
    title: string;
    description?: string;
    editUrl: string;
    version?: string;
    headings?: Heading[];
  };
  children: React.ReactNode;
  sidebar?: React.ReactElement;
  pagination?: React.ReactElement;
}

export function PageContainer(props: PageContainerProps) {
  const { frontMatter, children, sidebar, pagination } = props;
  useHeadingFocusOnRouteChange();

  if (!frontMatter) return <></>;

  const { title, description, editUrl, headings = [] } = frontMatter;

  return (
    <div className="nextra-container main-container flex flex-col">
      <NextSeo title={title} description={description} />
      <MenuStateProvider>
        <Header />
        <ActiveAnchor>
          <div className="max-w-[90rem] w-full mx-auto">
            <div className="flex flex-1 h-full">
              {sidebar}
              <article className="nextra-body relative pb-8 w-full max-w-full flex min-w-0 pr-[calc(env(safe-area-inset-right)-1.5rem)]">
                <main className="mx-auto max-w-4xl px-6 md:px-8 pt-4 z-10 min-w-0 w-full">
                  <div className="text-sm font-normal flex mt-2.5 text-gray-500 transition-colors cursor-default overflow-hidden">
                    {/* <div className="transition-colors hover:text-gray-900 dark:hover:text-gray-200 text-ellipsis whitespace-nowrap overflow-hidden min-w-[24px]">
                      Docs
                    </div>
                    <span className="mx-2 select-none">/</span>
                    <div className="transition-colors hover:text-gray-900 dark:hover:text-gray-200 text-gray-600 dark:text-gray-400">
                      Getting Started
                    </div> */}
                  </div>
                  {children}
                  {pagination}
                </main>
                <TableOfContent editUrl={editUrl} headings={headings} />
              </article>
            </div>
          </div>
        </ActiveAnchor>
        <Footer />
      </MenuStateProvider>
    </div>
  );
}
