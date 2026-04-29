import { useCallback } from 'react';
import { TaskFilters } from '../components/TaskFilters';
import { TaskForm } from '../components/TaskForm';
import { TaskList } from '../components/TaskList';
import { useTasks } from '../hooks/useTasks';

export function TasksPage() {
  const {
    tasks,
    loading,
    error,
    filter,
    setFilter,
    addTask,
    editTask,
    removeTask,
  } = useTasks();

  const handleToggle = useCallback((id: string, completed: boolean) => {
    editTask(id, { completed });
  }, [editTask]);

  const handleDelete = useCallback((id: string) => {
    removeTask(id);
  }, [removeTask]);

  return (
    <main>
      <h1>Smart Task Manager</h1>

      <TaskForm onSubmit={addTask} />

      <TaskFilters value={filter} onChange={setFilter} />

      {loading && <p>Loading tasks...</p>}
      {error && <p role="alert">{error}</p>}

      {!loading && !error && (
        <TaskList
          tasks={tasks}
          onToggle={handleToggle}
          onDelete={handleDelete}
        />
      )}
    </main>
  );
}