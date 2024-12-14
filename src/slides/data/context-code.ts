export const TODO_APP_6 = `import { RenderCounter } from '../components/render-counter';
import { AddTaskForm } from './add-task-form';
import { AppContextProvider } from './app-context';
import { AppLayout } from './app-layout';
import { TasksList } from './tasks-list';

function TodoApp() {
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

export default TodoApp;`;

export const APP_CONTEXT = `import { createContext, useContext, useReducer } from 'react';
import initialTasks from '../data/initial-tasks';

const initialState = {
  theme: 'dawn',
  tasks: initialTasks,
  inputValue: '',
};
type Task = { id: number; text: string; completed: boolean };
type State = {
  theme: string;
  tasks: Task[];
  inputValue: string;
};
type Action =
  | { type: 'addTask'; text: string }
  | { type: 'toggleComplete'; taskId: number }
  | { type: 'changeTheme'; theme: string }
  | { type: 'editNewTask'; text: string };

let nextTaskId = initialTasks.length + 1;
function reducer(state: State, action: Action) {
  switch (action.type) {
    case 'addTask':
      return {
        ...state,
        tasks: state.tasks.concat({
          id: nextTaskId++,
          text: action.text,
          completed: false,
        }),
      };
    case 'editNewTask':
      return { ...state, inputValue: action.text };
    case 'changeTheme':
      return { ...state, theme: action.theme };
    case 'toggleComplete': {
      const taskIndex = state.tasks.findIndex((t) => t.id === action.taskId);
      if (taskIndex > -1) {
        const task = state.tasks[taskIndex];
        return {
          ...state,
          tasks: state.tasks
            .slice(0, taskIndex)
            .concat({ ...task, completed: !task.completed })
            .concat(state.tasks.slice(taskIndex + 1)),
        };
      }
      return state;
    }
    default:
      return state;
  }
}
type TodoAppContextType = [State, React.Dispatch<Action>];

const TodoAppContext = createContext<TodoAppContextType>([
  initialState,
  () => {},
]);

function useAppContext() {
  const context = useContext(TodoAppContext);
  if (!context) {
    throw new Error('useAppContext must be used within a TodoAppProvider');
  }
  return context;
}

function AppContextProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <TodoAppContext.Provider value={[state, dispatch]}>
      {children}
    </TodoAppContext.Provider>
  );
}

export { AppContextProvider, useAppContext };`;

export const CONTEXT_ADD_TASK_FORM = `import { useAppContext } from './app-context';
import { RenderCounter } from '../components/render-counter';

export function AddTaskForm() {
  const [state, dispatch] = useAppContext();
  const { inputValue } = state;
  function onAddTask(ev: React.FormEvent<HTMLFormElement>) {
    ev.preventDefault();
    dispatch({ type: 'addTask', text: inputValue });
    dispatch({ type: 'editNewTask', text: '' });
  }
  function onInputChange(ev: React.ChangeEvent<HTMLInputElement>) {
    dispatch({ type: 'editNewTask', text: ev.target.value });
  }
  return (
    <RenderCounter title="AddTaskForm" color="#dff2bf">
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
    </RenderCounter>
  );
}`;

export const CONTEXT_TASKS_LIST = `import { useAppContext } from './app-context';
import { RenderCounter } from '../components/render-counter';

export function TasksList() {
  const [state, dispatch] = useAppContext();
  const { tasks } = state;
  function onToogleTask(taskId: number) {
    dispatch({ type: 'toggleComplete', taskId });
  }
  return (
    <RenderCounter title="TasksList" color="#add8e6">
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

export const TODO_APP_7 = `import { RenderCounter } from '../components/render-counter';
import { AddTaskForm } from './add-task-form';
import { AppLayout } from './app-layout';
import { InputProvider } from './input-context';
import { TasksProvider } from './tasks-context';
import { TasksList } from './tasks-list';
import { ThemeProvider } from './theme-context';

function TodoApp() {
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

export default TodoApp;`;

export const THEME_CONTEXT = `import { Dispatch, createContext, useState, useContext } from 'react';

const initialTheme = 'dawn';
type ThemeContextType = {
  theme: string;
  setTheme: Dispatch<React.SetStateAction<string>>;
};
const ThemeContext = createContext<ThemeContextType>({
  theme: initialTheme,
  setTheme: () => {},
});

function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState(initialTheme);
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ColorProvider');
  }
  return context;
}

export { ThemeProvider, useTheme };`;

export const TASKS_CONTEXT = `import { createContext, Dispatch, useReducer, useContext } from 'react';
import initialTasks from '../data/initial-tasks';

type Task = { id: number; text: string; completed: boolean };
type Action =
  | { type: 'addTask'; text: string }
  | { type: 'toggleComplete'; taskId: number };

let nextTaskId = initialTasks.length + 1;
function reducer(state: Task[], action: Action) {
  switch (action.type) {
    case 'addTask':
      return state.concat({
        id: nextTaskId++,
        text: action.text,
        completed: false,
      });
    case 'toggleComplete': {
      const taskIndex = state.findIndex((t) => t.id === action.taskId);
      if (taskIndex > -1) {
        const task = state[taskIndex];
        return state
          .slice(0, taskIndex)
          .concat({ ...task, completed: !task.completed })
          .concat(state.slice(taskIndex + 1));
      }
      return state;
    }
    default:
      return state;
  }
}

const TasksContext = createContext<Task[]>(initialTasks);
const TasksDispatch = createContext<Dispatch<Action>>(() => {});

function TasksProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(reducer, initialTasks);
  return (
    <TasksContext.Provider value={state}>
      <TasksDispatch.Provider value={dispatch}>
        {children}
      </TasksDispatch.Provider>
    </TasksContext.Provider>
  );
}

function useTasks() {
  const context = useContext(TasksContext);
  if (!context) {
    throw new Error('useTasks must be used within a TasksProvider');
  }
  return context;
}
function useTasksDispatch() {
  const context = useContext(TasksDispatch);
  if (!context) {
    throw new Error('useTasksDispatch must be used within a TasksProvider');
  }
  return context;
}

export { TasksProvider, useTasks, useTasksDispatch };`;

export const CONTEXT_ADD_TASK_FORM_2 = `import { useInput } from './input-context';
import { useTasksDispatch } from './tasks-context';
import { RenderCounter } from '../components/render-counter';

export function AddTaskForm() {
  const { text: inputValue, setText } = useInput();
  const dispatch = useTasksDispatch();
  function onAddTask(ev: React.FormEvent<HTMLFormElement>) {
    ev.preventDefault();
    dispatch({ type: 'addTask', text: inputValue });
    setText('');
  }
  function onInputChange(ev: React.ChangeEvent<HTMLInputElement>) {
    setText(ev.target.value);
  }
  return (
    <RenderCounter title="AddTaskForm" color="#dff2bf">
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
    </RenderCounter>
  );
}
`;
