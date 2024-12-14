import { useState } from 'react';
import { RenderCounter } from '../components/render-counter';

type FormProps = { onSubmit: (newTask: string) => void };

export function AddTaskForm({ onSubmit }: FormProps) {
  const [inputValue, setInputValue] = useState('');
  const onInputChange = (ev: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(ev.target.value);
  };
  const handleSubmit = (ev: React.FormEvent<HTMLFormElement>) => {
    ev.preventDefault();
    onSubmit(inputValue);
    setInputValue('');
  };
  return (
    <RenderCounter title="AddTaskForm" color="#dff2bf">
      <form className="task-form" onSubmit={handleSubmit}>
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
