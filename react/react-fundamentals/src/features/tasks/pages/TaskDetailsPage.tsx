import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { getTaskById } from '../api/taskApi';
import type { Task } from '../types';

export function TaskDetailsPage() {
  const { id } = useParams<{ id: string }>();
  const [task, setTask] = useState<Task | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!id) return;

    const controller = new AbortController();

    async function loadTask() {
      try {
        setLoading(true);
        setError(null);

        const data = await getTaskById(id!, controller.signal);

        if (!data) {
          setError('Task not found.');
          return;
        }

        setTask(data);
      } catch (error) {
        if (error instanceof DOMException && error.name === 'AbortError') {
          return;
        }

        setError('Failed to load task.');
      } finally {
        setLoading(false);
      }
    }

    loadTask();

    return () => {
      controller.abort();
    };
  }, [id]);

  if (loading) return <p>Loading task...</p>;
  if (error) return <p role="alert">{error}</p>;
  if (!task) return <p>Task unavailable.</p>;

  return (
    <main>
      <Link to="/tasks">Back to tasks</Link>
      <h1>{task.title}</h1>
      <p>{task.description}</p>
      <p>Status: {task.completed ? 'Completed' : 'Active'}</p>
      <p>Created: {new Date(task.createdAt).toLocaleString()}</p>
    </main>
  );
}