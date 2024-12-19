export const MEMO_ADS_BANNER = `export const MemoAdsBanner = memo(AdsBanner)`;

export const MEMO_ADD_TASK_FORM = `export const MemoAddTaskForm = memo(AddTaskForm)`;

export const TASK_ITEM = `import { memo } from 'react';
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
});`;

export const MEMOIZED_TASK_VIEW = `import { useCallback, useState } from 'react';
import initialTasks from '../data/initial-tasks';
import { AddTaskForm } from './add-task-form';
import { RenderCounter } from '../components/render-counter';
import { TaskItem } from './task-item';

let nextTaskId = initialTasks.length + 1;

export function TasksView() {
  const [tasks, setTasks] = useState(initialTasks);

  const onAddTask = useCallback((newTask: string) => {
    setTasks((prevValues) => [
      ...prevValues,
      { id: nextTaskId++, text: newTask, completed: false },
    ]);
  }, []);

  const onToggleTask = useCallback((taskId: number) => {
    setTasks((prevValues) =>
      prevValues.map((currentTask) =>
        currentTask.id === taskId
          ? { ...currentTask, completed: !currentTask.completed }
          : currentTask,
      ),
    );
  }, []);
  return (
    <RenderCounter title="TasksView" color="#add8e6">
      <AddTaskForm onSubmit={onAddTask} />
      <ul className="task-list">
        {tasks.map((task) => (
          <TaskItem key={task.id} task={task} onToggleTask={onToggleTask} />
        ))}
      </ul>
    </RenderCounter>
  );
}`;
