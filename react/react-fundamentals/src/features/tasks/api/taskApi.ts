import type { CreateTaskInput, Task, UpdateTaskInput } from "../types";


let tasks: Task[] = [
  {
    id: '1',
    title: 'Learn React fundamentals',
    description: 'Understand components, props, state, and hooks.',
    completed: false,
    createdAt: new Date().toISOString(),
  },
  {
    id: '2',
    title: 'Learn TypeScript with React',
    description: 'Use interfaces, props typing, events, and generics.',
    completed: true,
    createdAt: new Date().toISOString(),
  },
];

const wait = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

export async function getTasks(signal?: AbortSignal): Promise<Task[]> {
  await wait(700);

  if (signal?.aborted) {
    throw new DOMException('Request aborted', 'AbortError');
  }

  return [...tasks];
}

export async function getTaskById(id: string, signal?: AbortSignal): Promise<Task | undefined> {
  await wait(500);

  if (signal?.aborted) {
    throw new DOMException('Request aborted', 'AbortError');
  }

  return tasks.find(task => task.id === id);
}

export async function createTask(input: CreateTaskInput): Promise<Task> {
  await wait(300);

  const newTask: Task = {
    id: crypto.randomUUID(),
    title: input.title,
    description: input.description,
    completed: false,
    createdAt: new Date().toISOString(),
  };

  tasks = [newTask, ...tasks];
  return newTask;
}

export async function updateTask(id: string, input: UpdateTaskInput): Promise<Task> {
  await wait(300);

  const existingTask = tasks.find(task => task.id === id);

  if (!existingTask) {
    throw new Error('Task not found');
  }

  const updatedTask: Task = {
    ...existingTask,
    ...input,
  };

  tasks = tasks.map(task => task.id === id ? updatedTask : task);

  return updatedTask;
}

export async function deleteTask(id: string): Promise<void> {
  await wait(300);
  tasks = tasks.filter(task => task.id !== id);
}