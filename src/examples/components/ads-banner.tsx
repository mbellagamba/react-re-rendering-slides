import { RenderCounter } from './render-counter';

export function AdsBanner() {
  const startTime = performance.now();
  while (performance.now() - startTime < 500) {
    // Artificial delay - 500ms
  }
  return (
    <RenderCounter title="AdsBanner" color="#ffdab9">
      <div className="ads-banner">🚀 Buy this AMAZING product NOW!!! 🚀</div>
    </RenderCounter>
  );
}
