import { RenderCounter } from '../components/render-counter';
import { AddTaskForm } from './add-task-form';
import { AppLayout } from './app-layout';
import { InputProvider } from './input-context';
import { TasksProvider } from './tasks-context';
import { TasksList } from './tasks-list';
import { ThemeProvider } from './theme-context';

function TodoApp7() {
  return (
    <RenderCounter title="App" color="#ffc0cb">
      <ThemeProvider>
        <TasksProvider>
          <InputProvider>
            <AppLayout title="Todo App">
              <AddTaskForm />
              <TasksList />
            </AppLayout>
          </InputProvider>
        </TasksProvider>
      </ThemeProvider>
    </RenderCounter>
  );
}

export default TodoApp7;
