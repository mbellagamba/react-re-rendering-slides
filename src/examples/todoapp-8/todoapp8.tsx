import { AppLayout } from '../components/app-layout';
import { RenderCounter } from '../components/render-counter';
import { AdsBanner } from './ads-banner';
import { TasksView } from './tasks-view';

function TodoApp8() {
  return (
    <RenderCounter title="App" color="#ffc0cb">
      <AppLayout title="Todo App">
        <TasksView />
        <AdsBanner />
      </AppLayout>
    </RenderCounter>
  );
}

export default TodoApp8;
