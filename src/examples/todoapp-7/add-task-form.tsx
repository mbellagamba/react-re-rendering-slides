import { useInput } from './input-context';
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
