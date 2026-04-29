import { memo } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../../../components/Button/Button';
import type { Task } from '../types';

interface TaskItemProps {
  task: Task;
  onToggle: (id: string, completed: boolean) => void;
  onDelete: (id: string) => void;
}

function TaskItemComponent({ task, onToggle, onDelete }: TaskItemProps) {
  return (
    <li>
      <h3>{task.title}</h3>
      <p>{task.description}</p>

      <label>
        <input
          type="checkbox"
          checked={task.completed}
          onChange={(event) => onToggle(task.id, event.target.checked)}
        />
        Completed
      </label>

      <Link to={`/tasks/${task.id}`}>View details</Link>

      <Button variant="danger" onClick={() => onDelete(task.id)}>
        Delete
      </Button>
    </li>
  );
}

export const TaskItem = memo(TaskItemComponent);