
import { useRef, useState, type FormEvent } from 'react';
import { Button } from '../../../components/Button/Button';
import type { CreateTaskInput } from '../types';

interface TaskFormProps {
  onSubmit: (input: CreateTaskInput) => Promise<void>;
}

export function TaskForm({ onSubmit }: TaskFormProps) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const titleInputRef = useRef<HTMLInputElement | null>(null);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!title.trim()) {
      titleInputRef.current?.focus();
      return;
    }

    try {
      setSubmitting(true);
      await onSubmit({ title, description });
      setTitle('');
      setDescription('');
      titleInputRef.current?.focus();
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        ref={titleInputRef}
        value={title}
        onChange={(event) => setTitle(event.target.value)}
        placeholder="Task title"
      />

      <textarea
        value={description}
        onChange={(event) => setDescription(event.target.value)}
        placeholder="Task description"
      />

      <Button type="submit" disabled={submitting}>
        {submitting ? 'Adding...' : 'Add Task'}
      </Button>
    </form>
  );
}