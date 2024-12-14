import { AdsBanner } from '../components/ads-banner';
import { AppLayout } from '../components/app-layout';
import { RenderCounter } from '../components/render-counter';
import { TasksView } from './tasks-view';

function TodoApp5() {
  return (
    <RenderCounter title="App" color="#ffc0cb">
      <AppLayout title="Todo App">
        <TasksView />
        <AdsBanner />
      </AppLayout>
    </RenderCounter>
  );
}

export default TodoApp5;
