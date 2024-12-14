import { createContext, useContext, useReducer } from 'react';
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

export { AppContextProvider, useAppContext };
