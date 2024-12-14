import { useAppContext } from './app-context';
import { RenderCounter } from '../components/render-counter';

type AppLayoutProps = {
  title: string;
  children: React.ReactNode;
};

export function AppLayout({ title, children }: AppLayoutProps) {
  const [state, dispatch] = useAppContext();
  const { theme } = state;
  function onThemeChange(theme: string) {
    dispatch({ type: 'changeTheme', theme });
  }
  return (
    <RenderCounter title="AppLayout" color="#fff0e5">
      <div className={`app ${theme}`}>
        <div className="header">
          <h1>{title}</h1>
          <label>
            <span className="visually-hidden">Theme</span>
            <select
              value={theme}
              onChange={(ev) => onThemeChange(ev.target.value)}
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
