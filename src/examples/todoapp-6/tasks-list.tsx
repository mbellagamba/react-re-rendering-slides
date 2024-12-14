import { useAppContext } from './app-context';
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
}
