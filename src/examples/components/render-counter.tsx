import * as React from 'react';

type Props = React.PropsWithChildren<{ title: string; color: string }>;

export function RenderCounter({ color, children, title }: Props) {
  const count = useRenderCountInStrictMode();
  const textColor = getContrastColor(color);
  return (
    <div className="render-counter-wrapper" style={{ borderColor: color }}>
      {children}
      <span
        className="render-counter-badge"
        style={{ backgroundColor: color, color: textColor }}
      >
        {title}: {count}
      </span>
    </div>
  );
}

function useRenderCountInStrictMode() {
  const countRef = React.useRef(0);
  countRef.current += 1;
  // @ts-expect-error `process.env` is injected by RsPack
  if (process.env.NODE_ENV === 'development') {
    // do not count double rendering due to strict mode
    return Math.floor(countRef.current / 2);
  }
  return countRef.current;
}

function getContrastColor(hexColor: string) {
  // Get black or white depending on the background color
  const threshold = 128;
  const r = parseInt(hexColor.substring(1, 2), 16);
  const g = parseInt(hexColor.substring(3, 2), 16);
  const b = parseInt(hexColor.substring(5, 2), 16);
  const brightness = r * 0.299 + g * 0.587 + b * 0.114;
  return brightness > threshold ? '#000000' : '#ffffff';
}
