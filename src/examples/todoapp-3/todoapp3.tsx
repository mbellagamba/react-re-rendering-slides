import { useState } from 'react';
import { AdsBanner } from '../components/ads-banner';
import { AppLayout } from '../components/app-layout';
import { RenderCounter } from '../components/render-counter';
import initialTasks from '../data/initial-tasks';
import { AddTaskForm } from '../todoapp-4/add-task-form';

let nextTaskId = initialTasks.length + 1;

function TodoApp3() {
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

export default TodoApp3;
