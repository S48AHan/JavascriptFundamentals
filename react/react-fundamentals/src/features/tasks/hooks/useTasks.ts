import { useCallback, useEffect, useMemo, useReducer, useState } from 'react';
import { createTask, deleteTask, getTasks, updateTask } from '../api/taskApi';
import { initialTaskState, taskReducer } from '../reducer/taskReducer';
import type { CreateTaskInput, TaskStatus, UpdateTaskInput } from '../types';

export function useTasks() {
  const [state, dispatch] = useReducer(taskReducer, initialTaskState);
  const [filter, setFilter] = useState<TaskStatus>('all');

  useEffect(() => {
    const controller = new AbortController();

    async function loadTasks() {
      try {
        dispatch({ type: 'FETCH_START' });
        const data = await getTasks(controller.signal);
        dispatch({ type: 'FETCH_SUCCESS', payload: data });
      } catch (error) {
        if (error instanceof DOMException && error.name === 'AbortError') {
          return;
        }

        dispatch({ type: 'FETCH_ERROR', payload: 'Failed to load tasks.' });
      }
    }

    loadTasks();

    return () => {
      controller.abort();
    };
  }, []);

  const addTask = useCallback(async (input: CreateTaskInput) => {
    const newTask = await createTask(input);
    dispatch({ type: 'ADD_TASK', payload: newTask });
  }, []);

  const editTask = useCallback(async (id: string, input: UpdateTaskInput) => {
    const updatedTask = await updateTask(id, input);
    dispatch({ type: 'UPDATE_TASK', payload: updatedTask });
  }, []);

  const removeTask = useCallback(async (id: string) => {
    await deleteTask(id);
    dispatch({ type: 'DELETE_TASK', payload: id });
  }, []);

  const filteredTasks = useMemo(() => {
    if (filter === 'active') {
      return state.tasks.filter(task => !task.completed);
    }

    if (filter === 'completed') {
      return state.tasks.filter(task => task.completed);
    }

    return state.tasks;
  }, [state.tasks, filter]);

  return {
    tasks: filteredTasks,
    allTasks: state.tasks,
    loading: state.loading,
    error: state.error,
    filter,
    setFilter,
    addTask,
    editTask,
    removeTask,
  };
}