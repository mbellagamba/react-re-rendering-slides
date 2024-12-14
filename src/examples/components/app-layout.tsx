import { useState } from 'react';
import { RenderCounter } from './render-counter';

type AppLayoutProps = React.PropsWithChildren<{ title: string }>;

export function AppLayout({ children, title }: AppLayoutProps) {
  const [theme, setTheme] = useState('dawn');
  return (
    <RenderCounter title="AppLayout" color="#f6f4a8">
      <div className={`app ${theme}`}>
        <div className="header">
          <h1>{title}</h1>
          <label>
            <small className="visually-hidden">Theme</small>
            <select
              className="theme-select"
              value={theme}
              onChange={(ev) => setTheme(ev.target.value)}
            >
              <option value="dawn">Dawn</option>
              <option value="noon">Noon</option>
              <option value="sunset">Sunset</option>
              <option value="midnight">Midnight</option>
            </select>
          </label>
        </div>
        <div className="card">{children}</div>
      </div>
    </RenderCounter>
  );
}
