import { memo } from 'react';
import { RenderCounter } from '../components/render-counter';

interface Task {
  id: number;
  text: string;
  completed: boolean;
}

interface TaskItemProps {
  task: Task;
  onToggleTask: (taskId: number) => void;
}

export const TaskItem = memo(function TaskItem({
  task,
  onToggleTask,
}: TaskItemProps) {
  return (
    <li
      className={'task-item' + (task.completed ? ' task-item--completed' : '')}
    >
      <RenderCounter title="TaskItem" color="#cba6e9">
        <label>
          <input
            name="done"
            type="checkbox"
            checked={task.completed}
            onChange={() => onToggleTask(task.id)}
          />
          {task.text}
        </label>
      </RenderCounter>
    </li>
  );
});
