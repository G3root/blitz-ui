import * as React from "react";
import { Heading } from "~/components/docs";
import cn from "clsx";
import { useActiveAnchor } from "~/contexts";
import scrollIntoView from "scroll-into-view-if-needed";

export interface TableOfContentProps {
  headings: Heading[];
  editUrl: string;
}
interface ItemProps {
  text: string;
  isActive?: boolean;
  level: Heading["level"];
  id: string;
}

const Item = ({ text, isActive, level, id }: ItemProps) => {
  const ref = React.useRef<HTMLLIElement>(null);

  React.useEffect(() => {
    const el = ref.current;
    const toc = document.getElementsByClassName("nextra-toc")[0];
    if (isActive && el && toc) {
      scrollIntoView(el, {
        behavior: "smooth",
        block: "center",
        inline: "center",
        scrollMode: "always",
        boundary: toc,
      });
    }
  }, [isActive]);
  return (
    <li
      className={cn("scroll-py-6 scroll-my-6", level === "h3" && "ml-4")}
      key={id}
      ref={ref}
    >
      <a
        href={`#${id}`}
        className={cn(
          "no-underline inline-block",
          level === "h3" ? "font-semibold" : "",
          isActive
            ? "text-prime-500 subpixel-antialiased"
            : "text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-300"
        )}
        aria-current={isActive ? "true" : undefined}
      >
        {text}
      </a>
    </li>
  );
};

export function TableOfContent(props: TableOfContentProps) {
  const { headings, editUrl } = props;

  const activeAnchor = useActiveAnchor();
  return (
    <div className="nextra-toc w-64 hidden xl:block text-sm px-4">
      <div className="overflow-y-auto pr-4 -mr-4 sticky max-h-[calc(100vh-4rem-env(safe-area-inset-bottom))] top-16 pt-8">
        <ul>
          {headings.map(({ id, level, text }) => {
            const isActive = activeAnchor[id]?.isActive;
            return (
              <Item
                text={text}
                level={level}
                id={id}
                key={id}
                isActive={isActive}
              />
            );
          })}
        </ul>

        <div className="border-t mt-8 pt-8 shadow-[0_-12px_16px_white] dark:shadow-[0_-12px_16px_#111] bg-white dark:bg-dark sticky pb-8 bottom-0 dark:border-neutral-800">
          {/* <a
            className="text-xs font-medium no-underline block text-gray-500 mb-2 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100"
            href="https://github.com/vercel/turborepo/issues/new?title=Feedback%20for%20%E2%80%9CGetting%20Started%20%7C%20Turborepo%E2%80%9D&labels="
            target="_blank"
            rel="noreferrer"
          >
            Question? Give us feedback →
          </a> */}
          <a
            className="text-xs font-medium no-underline block text-gray-500 mb-2 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100"
            href={editUrl}
            target="_blank"
            rel="noreferrer"
          >
            Edit this page on GitHub
          </a>
        </div>
      </div>
    </div>
  );
}
