import { memo } from 'react';
import { RenderCounter } from '../components/render-counter';

type FormProps = { onSubmit: (newTask: string) => void };

interface AddTasksControlsCollection extends HTMLFormControlsCollection {
  task: HTMLInputElement;
}

interface AddTasksFormElement extends HTMLFormElement {
  readonly elements: AddTasksControlsCollection;
}

export const AddTaskForm = memo(function AddTaskForm({ onSubmit }: FormProps) {
  const handleSubmit = (ev: React.FormEvent<AddTasksFormElement>) => {
    ev.preventDefault();
    // Get form values from the submit event
    onSubmit(ev.currentTarget.elements.task.value);
    // Reset the form
    ev.currentTarget.reset();
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
            required
          />
        </label>
        <input className="add-task-button" type="submit" value="Add" />
      </form>
    </RenderCounter>
  );
});