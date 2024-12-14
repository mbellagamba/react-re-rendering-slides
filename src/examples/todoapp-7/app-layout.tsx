import { useTheme } from './theme-context';
import { RenderCounter } from '../components/render-counter';

type AppLayoutProps = {
  title: string;
  children: React.ReactNode;
};

export function AppLayout({ title, children }: AppLayoutProps) {
  const { theme, setTheme } = useTheme();
  return (
    <RenderCounter title="AppLayout" color="#fff0e5">
      <div className={`app ${theme}`}>
        <div className="header">
          <h1>{title}</h1>
          <label>
            <span className="visually-hidden">Theme</span>
            <select value={theme} onChange={(ev) => setTheme(ev.target.value)}>
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
