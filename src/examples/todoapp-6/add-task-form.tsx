import { useAppContext } from './app-context';
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
}
