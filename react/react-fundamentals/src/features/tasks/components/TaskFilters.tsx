import type { TaskStatus } from '../types';

interface TaskFiltersProps {
  value: TaskStatus;
  onChange: (value: TaskStatus) => void;
}

export function TaskFilters({ value, onChange }: TaskFiltersProps) {
  return (
    <div>
      <button disabled={value === 'all'} onClick={() => onChange('all')}>All</button>
      <button disabled={value === 'active'} onClick={() => onChange('active')}>Active</button>
      <button disabled={value === 'completed'} onClick={() => onChange('completed')}>Completed</button>
    </div>
  );
}