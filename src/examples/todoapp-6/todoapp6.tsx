import { RenderCounter } from '../components/render-counter';
import { AddTaskForm } from './add-task-form';
import { AppContextProvider } from './app-context';
import { AppLayout } from './app-layout';
import { TasksList } from './tasks-list';

function TodoApp6() {
  return (
    <RenderCounter title="App" color="#ffc0cb">
      <AppContextProvider>
        <AppLayout title="Todo App">
          <AddTaskForm />
          <TasksList />
        </AppLayout>
      </AppContextProvider>
    </RenderCounter>
  );
}

export default TodoApp6;
