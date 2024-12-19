import { useCallback, useState } from 'react';
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
}
