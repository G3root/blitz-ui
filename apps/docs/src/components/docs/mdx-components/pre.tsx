import * as React from 'react';
import copy from 'copy-text-to-clipboard';
import { IconButton } from '@blitz-ui/react';
import cx from 'clsx';

export interface PreProps {
  children: JSX.Element;
  className: string;
}

export function Pre({ children, className, ...props }: PreProps) {
  const preRef = React.useRef<HTMLPreElement>(null);

  const [copied, setCopied] = React.useState(false);

  React.useEffect(() => {
    const timer = setTimeout(() => setCopied(false), 2000);

    return () => clearTimeout(timer);
  }, [copied]);

  const onClick = async () => {
    if (preRef.current?.innerText) {
      copy(preRef.current.innerText);
      setCopied(true);
    }
  };
  return (
    <div className="relative">
      <pre ref={preRef} {...props}>
        {children}
      </pre>
      <IconButton
        onClick={onClick}
        variant="outline"
        aria-label={copied ? 'copied' : 'copy'}
        size="xs"
        className="absolute top-0 right-0 mt-2 mr-2"
        icon={
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className={cx('h-4 w-4 pointer-events-none')}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2"
              className={cx({ block: !copied, hidden: copied })}
            />

            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 13l4 4L19 7"
              className={cx({ block: copied, hidden: !copied })}
            />
          </svg>
        }
      />
    </div>
  );
}
