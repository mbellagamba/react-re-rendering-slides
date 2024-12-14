import { ReactNode } from 'react';

import './SyntaxHighlight.css';

interface SyntaxHighlightProps {
  children?: ReactNode;
  lineNumbers?: string | boolean;
  language?: string;
  fullScreen?: boolean;
  animationId?: string;
  className?: string;
}
export const SyntaxHighlight = ({
  children,
  lineNumbers,
  language,
  animationId,
  fullScreen,
  className,
}: SyntaxHighlightProps) => {
  return (
    <pre data-id={animationId} className={className}>
      <code
        data-trim
        data-noescape
        data-line-numbers={lineNumbers}
        className={`hljs ${language} ${fullScreen ? 'full-screen' : ''}`}
      >
        {children}
      </code>
    </pre>
  );
};
