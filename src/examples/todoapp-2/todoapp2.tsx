import { useState } from 'react';
import { AdsBanner } from '../components/ads-banner';
import { RenderCounter } from '../components/render-counter';
import initialTasks from '../data/initial-tasks';
import { AddTaskForm } from '../todoapp-4/add-task-form';

let nextTaskId = initialTasks.length + 1;

function TodoApp2() {
  const [theme, setTheme] = useState('dawn');
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
      <div className={`app ${theme}`}>
        <div className="header">
          <h1>Todo App</h1>
          <label>
            <small className="visually-hidden">Theme</small>
            <select
              className="theme-select"
              value={theme}
              onChange={(ev) => setTheme(ev.target.value)}
            >
              <option value="dawn">Dawn</option>
              <option value="noon">Noon</option>
              <option value="sunset">Sunset</option>
              <option value="midnight">Midnight</option>
            </select>
          </label>
        </div>
        <div className="card">
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
        </div>
        <AdsBanner />
      </div>
    </RenderCounter>
  );
}

export default TodoApp2;
