export const ADD_TASK_FORM = `import { useState } from 'react';
import { RenderCounter } from './render-counter';

type FormProps = { onSubmit: (newTask: string) => void };

export function AddTaskForm({ onSubmit }: FormProps) {
  const [inputValue, setInputValue] = useState('');
  const onInputChange = (ev: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(ev.target.value);
  };
  const handleSubmit = (ev: React.FormEvent<HTMLFormElement>) => {
    ev.preventDefault();
    onSubmit(inputValue);
    setInputValue('');
  };
  return (
    <RenderCounter title="AddTaskForm" color="#dff2bf">
      <form className="task-form" onSubmit={handleSubmit}>
        <label className="add-task-label">
          <span className="visually-hidden">Task</span>
          <input
            name="task"
            type="text"
            placeholder="Add a task..."
            className="add-task-input"
            value={inputValue}
            onChange={onInputChange}
            required
          />
        </label>
        <input className="add-task-button" type="submit" value="Add" />
      </form>
    </RenderCounter>
  );
}`;

export const COMPOSITION_1_PART_1 = `<div className="card">
  <form className="task-form" onSubmit={onAddTask}>
    <label className="add-task-label">
      <span className="visually-hidden">Task</span>
      <input
        name="task"
        type="text"
        placeholder="Add a task..."
        className="add-task-input"
        value={inputValue}
        onChange={onInputChange}
        required
      />
    </label>
    <input className="add-task-button" type="submit" value="Add" />
  </form>
  ...
</div>`;

export const COMPOSITION_1_PART_2 = `<div className="card">
  <AddTaskForm onSubmit={onAddTask} />
  ...
</div>`;

export const COMPOSITION_1_FINAL = `import { useState } from 'react';
import { AdsBanner } from '../components/ads-banner';
import { RenderCounter } from '../components/render-counter';
import initialTasks from '../data/initial-tasks';
import { AddTaskForm } from '../components/add-task-form';

let nextTaskId = initialTasks.length + 1;

function TodoApp() {
  const [theme, setTheme] = useState('dawn');
  const [tasks, setTasks] = useState(initialTasks);

  const onAddTask = (newTask: string) => {
    setTasks((prevValues) => [
      ...prevValues,
      { id: nextTaskId++, text: newTask, completed: false },
    ]);
  };

  const onToogleTask = (taskId: number) => {
    setTasks((prevValues) =>
      prevValues.map((currentTask) =>
        currentTask.id === taskId
          ? { ...currentTask, completed: !currentTask.completed }
          : currentTask,
      ),
    );
  };

  return (
    <RenderCounter title="App" color="#ffc0cb">
      <div className={\`app \${theme}\`}>
        <div className="header">
          <h1>Todo App</h1>
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
        <div className="card">
          <AddTaskForm onSubmit={onAddTask} />
          <ul className="task-list">
            {tasks.map((task) => (
              <li
                key={task.id}
                className={
                  'task-item' + (task.completed ? ' task-item--completed' : '')
                }
              >
                <label>
                  <input
                    name="done"
                    type="checkbox"
                    checked={task.completed}
                    onChange={() => onToogleTask(task.id)}
                  />
                  {task.text}
                </label>
              </li>
            ))}
          </ul>
        </div>
        <AdsBanner />
      </div>
    </RenderCounter>
  );
}

export default TodoApp;`;

export const APP_LAYOUT = `import { useState } from 'react';
import { RenderCounter } from './render-counter';

type AppLayoutProps = React.PropsWithChildren<{ title: string }>;

export function AppLayout({ children, title }: AppLayoutProps) {
  const [theme, setTheme] = useState('dawn');
  return (
    <RenderCounter title="AppLayout" color="#f6f4a8">
      <div className={\`app \${theme}\`}>
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
}`;

export const COMPOSITION_2_PART_1 = `return(
  <div className={\`app \${theme}\`}>
    <div className="header">
      <h1>Todo App</h1>
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
    ...
  </div>
);`;

export const COMPOSITION_2_PART_2 = `return (
  <AppLayout title="Todo App">
    ...
  </AppLayout>
);`;

export const COMPOSITION_2_FINAL = `import { useState } from 'react';
import { AdsBanner } from '../components/ads-banner';
import { RenderCounter } from '../components/render-counter';
import initialTasks from '../data/initial-tasks';
import { AddTaskForm } from '../components/add-task-form';
import { AppLayout } from '../components/app-layout';

let nextTaskId = initialTasks.length + 1;

function TodoApp() {
  const [tasks, setTasks] = useState(initialTasks);

  const onAddTask = (newTask: string) => {
    setTasks((prevValues) => [
      ...prevValues,
      { id: nextTaskId++, text: newTask, completed: false },
    ]);
  };

  const onToogleTask = (taskId: number) => {
    setTasks((prevValues) =>
      prevValues.map((currentTask) =>
        currentTask.id === taskId
          ? { ...currentTask, completed: !currentTask.completed }
          : currentTask,
      ),
    );
  };

  return (
    <RenderCounter title="App" color="#ffc0cb">
      <AppLayout title="Todo App">
        <AddTaskForm onSubmit={onAddTask} />
        <ul className="task-list">
          {tasks.map((task) => (
            <li
              key={task.id}
              className={
                'task-item' + (task.completed ? ' task-item--completed' : '')
              }
            >
              <label>
                <input
                  name="done"
                  type="checkbox"
                  checked={task.completed}
                  onChange={() => onToogleTask(task.id)}
                />
                {task.text}
              </label>
            </li>
          ))}
        </ul>
        <AdsBanner />
      </AppLayout>
    </RenderCounter>
  );
}

export default TodoApp;`;

export const TASKS_VIEW = `import { useState } from 'react';
import initialTasks from '../data/initial-tasks';
import { AddTaskForm } from '../components/add-task-form';
import { RenderCounter } from './render-counter';

let nextTaskId = initialTasks.length + 1;

export function TasksView() {
  const [tasks, setTasks] = useState(initialTasks);

  const onAddTask = (newTask: string) => {
    setTasks((prevValues) => [
      ...prevValues,
      { id: nextTaskId++, text: newTask, completed: false },
    ]);
  };

  const onToogleTask = (taskId: number) => {
    setTasks((prevValues) =>
      prevValues.map((currentTask) =>
        currentTask.id === taskId
          ? { ...currentTask, completed: !currentTask.completed }
          : currentTask,
      ),
    );
  };
  return (
    <RenderCounter title="TasksView" color="#add8e6">
      <AddTaskForm onSubmit={onAddTask} />
      <ul className="task-list">
        {tasks.map((task) => (
          <li
            key={task.id}
            className={
              'task-item' + (task.completed ? ' task-item--completed' : '')
            }
          >
            <label>
              <input
                name="done"
                type="checkbox"
                checked={task.completed}
                onChange={() => onToogleTask(task.id)}
              />
              {task.text}
            </label>
          </li>
        ))}
      </ul>
    </RenderCounter>
  );
}`;

export const COMPOSITION_3_FINAL = `import { AdsBanner } from '../components/ads-banner';
import { RenderCounter } from '../components/render-counter';
import { AppLayout } from '../components/app-layout';
import { TasksView } from '../components/tasks-view';

function TodoApp() {
  return (
    <RenderCounter title="App" color="#ffc0cb">
      <AppLayout title="Todo App">
        <TasksView />
        <AdsBanner />
      </AppLayout>
    </RenderCounter>
  );
}

export default TodoApp;`;
