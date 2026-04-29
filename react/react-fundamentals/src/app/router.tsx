import { lazy, Suspense } from 'react';
import { createBrowserRouter, Navigate } from 'react-router-dom';

// eslint-disable-next-line react-refresh/only-export-components
const TasksPage = lazy(() =>
  import('../features/tasks/pages/TasksPage').then(module => ({
    default: module.TasksPage,
  }))
);

// eslint-disable-next-line react-refresh/only-export-components
const TaskDetailsPage = lazy(() =>
  import('../features/tasks/pages/TaskDetailsPage').then(module => ({
    default: module.TaskDetailsPage,
  }))
);

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Navigate to="/tasks" replace />,
  },
  {
    path: '/tasks',
    element: (
      <Suspense fallback={<p>Loading page...</p>}>
        <TasksPage />
      </Suspense>
    ),
  },
  {
    path: '/tasks/:id',
    element: (
      <Suspense fallback={<p>Loading page...</p>}>
        <TaskDetailsPage />
      </Suspense>
    ),
  },
]);