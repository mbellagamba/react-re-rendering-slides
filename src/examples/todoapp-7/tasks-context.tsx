import { createContext, Dispatch, useReducer, useContext } from 'react';
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

export { TasksProvider, useTasks, useTasksDispatch };
