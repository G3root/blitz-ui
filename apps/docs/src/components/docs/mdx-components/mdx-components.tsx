/* eslint-disable react/display-name */
import * as React from 'react';
import 'intersection-observer';
import { ActiveAnchor, useActiveAnchorSet } from '~/contexts';
import { Pre } from './pre';
import { ComponentContainer } from './component-container';
import * as Blitz from '@blitz-ui/react';

export interface LinkedHeadingProps {
  as: React.ElementType;
  id: string;
  children: React.ReactNode;
  context: { index: number };
}

let observer: IntersectionObserver;
let setActiveAnchor: (
  value: ActiveAnchor | ((prevState: ActiveAnchor) => ActiveAnchor)
) => void;
const slugs = new WeakMap();

if (typeof window !== 'undefined') {
  observer =
    observer! ||
    new IntersectionObserver(
      (entries) => {
        const headers: [string, number, boolean, boolean][] = [];

        for (let i = 0; i < entries.length; i++) {
          const entry = entries[i];
          if (entry && entry.rootBounds && slugs.has(entry.target)) {
            const [slug, index] = slugs.get(entry.target);
            const aboveHalfViewport =
              entry.boundingClientRect.y + entry.boundingClientRect.height <=
              entry.rootBounds.y + entry.rootBounds.height;
            const insideHalfViewport = entry.intersectionRatio > 0;

            headers.push([slug, index, aboveHalfViewport, insideHalfViewport]);
          }
        }

        setActiveAnchor((f) => {
          const ret: ActiveAnchor = { ...f };

          for (const header of headers) {
            ret[header[0]] = {
              index: header[1],
              aboveHalfViewport: header[2],
              insideHalfViewport: header[3]
            };
          }

          let activeSlug = '';
          let smallestIndexInViewport = Infinity;
          let largestIndexAboveViewport = -1;
          for (let s in ret) {
            ret[s].isActive = false;
            if (
              ret[s].insideHalfViewport &&
              ret[s].index < smallestIndexInViewport
            ) {
              smallestIndexInViewport = ret[s].index;
              activeSlug = s;
            }
            if (
              smallestIndexInViewport === Infinity &&
              ret[s].aboveHalfViewport &&
              ret[s].index > largestIndexAboveViewport
            ) {
              largestIndexAboveViewport = ret[s].index;
              activeSlug = s;
            }
          }

          if (ret[activeSlug]) ret[activeSlug].isActive = true;
          return ret;
        });
      },
      {
        rootMargin: '0px 0px -50%',
        threshold: [0, 1]
      }
    );
}

export function LinkedHeading({
  children,
  id,
  as,
  context
}: LinkedHeadingProps) {
  setActiveAnchor = useActiveAnchorSet();
  const obRef = React.useRef<HTMLSpanElement>(null);
  const slug = id;
  const anchor = <span className="subheading-anchor" id={slug} ref={obRef} />;
  const Comp = as;
  const index = context.index++;

  React.useEffect(() => {
    const ref = obRef;
    if (!ref.current) return;

    slugs.set(ref.current, [slug, index]);
    if (ref.current) observer.observe(ref.current);

    return () => {
      observer.disconnect();
      slugs.delete(ref.current!);
      setActiveAnchor((f) => {
        const ret: ActiveAnchor = { ...f };
        delete ret[slug];
        return ret;
      });
    };
  }, []);

  return (
    <Comp className="docs">
      {anchor}
      <a href={'#' + slug} className="text-current no-underline no-outline">
        {children}
        <span className="anchor-icon" aria-hidden>
          #
        </span>
      </a>
    </Comp>
  );
}

interface HeadingProps {
  children?: React.ReactNode;
  id: string;
}

const H2 =
  (context: { index: number }) =>
  ({ children, ...props }: HeadingProps) => {
    return (
      <LinkedHeading as="h2" context={context} {...props}>
        {children}
      </LinkedHeading>
    );
  };

const H3 =
  (context: { index: number }) =>
  ({ children, ...props }: HeadingProps) => {
    return (
      <LinkedHeading as="h3" context={context} {...props}>
        {children}
      </LinkedHeading>
    );
  };

const H4 =
  (context: { index: number }) =>
  ({ children, ...props }: HeadingProps) => {
    return (
      <LinkedHeading as="h4" context={context} {...props}>
        {children}
      </LinkedHeading>
    );
  };

export const MDXComponents = (context: { index: number }) => ({
  h1: ({ children, ...rest }: any) => (
    <h1 className="docs" {...rest}>
      {children}
    </h1>
  ),
  h2: H2(context),
  h3: H3(context),
  h4: H4(context),
  h5: ({ children, ...rest }: any) => (
    <h5 className="docs" {...rest}>
      {children}
    </h5>
  ),
  h6: ({ children, ...rest }: any) => (
    <h6 className="docs" {...rest}>
      {children}
    </h6>
  ),
  pre: (props: any) => <Pre {...props} />,
  p: ({ children, ...rest }: any) => (
    <p className="docs" {...rest}>
      {children}
    </p>
  ),
  a: ({ children, ...rest }: any) => (
    <a className="docs" {...rest}>
      {children}
    </a>
  ),
  ComponentContainer: ({ children, ...rest }: any) => (
    <ComponentContainer {...rest}>{children}</ComponentContainer>
  ),
  ...Blitz
});
