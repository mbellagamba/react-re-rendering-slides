import { memo } from 'react';
import { RenderCounter } from '../components/render-counter';

export const AdsBanner = memo(function AdsBanner() {
  const now = performance.now();
  while (performance.now() - now < 500) {
    // Artificial delay
  }
  return (
    <RenderCounter title="AdsBanner" color="#ffdab9">
      <div className="ads-banner">🚀 Buy this AMAZING product NOW!!! 🚀</div>
    </RenderCounter>
  );
});
