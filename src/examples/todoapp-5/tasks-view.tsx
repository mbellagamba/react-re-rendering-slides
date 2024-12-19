import { useState } from 'react';
import initialTasks from '../data/initial-tasks';
import { AddTaskForm } from './add-task-form';
import { RenderCounter } from '../components/render-counter';

let nextTaskId = initialTasks.length + 1;

export function TasksView() {
  const [tasks, setTasks] = useState(initialTasks);

  const onAddTask = (newTask: string) => {
    setTasks((prevValues) => [
      ...prevValues,
      { id: nextTaskId++, text: newTask, completed: false },
    ]);
  };

  const onToggleTask = (taskId: number) => {
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
                onChange={() => onToggleTask(task.id)}
              />
              {task.text}
            </label>
          </li>
        ))}
      </ul>
    </RenderCounter>
  );
}
