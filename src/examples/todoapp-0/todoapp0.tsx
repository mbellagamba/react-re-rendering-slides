import { useState } from 'react';
import { RenderCounter } from '../components/render-counter';
import initialTasks from '../data/initial-tasks';

import '../styles.css';

let nextTaskId = initialTasks.length + 1;

function TodoApp0() {
  const [theme, setTheme] = useState('dawn');
  const [inputValue, setInputValue] = useState('');
  const [tasks, setTasks] = useState(initialTasks);

  const onInputChange = (ev: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(ev.target.value);
  };

  const onAddTask = (ev: React.FormEvent<HTMLFormElement>) => {
    ev.preventDefault();
    setTasks((prevValues) => [
      ...prevValues,
      { id: nextTaskId++, text: inputValue, completed: false },
    ]);
    setInputValue('');
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
        </div>
      </div>
    </RenderCounter>
  );
}

export default TodoApp0;
