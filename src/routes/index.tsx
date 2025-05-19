import { createBrowserRouter } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import ProtectedRoute from '@/components/auth/ProtectedRoute';

import HomePage from '@/pages/home/HomePage';
import TimetablePage from '@/pages/timetable/TimetablePage';
import NoticePage from '@/pages/notice/NoticePage';
import BoothPage from '@/pages/booth/BoothPage';
import BoothDetailPage  from '@/pages/booth/BoothDetailPage';
import WaitingPage from '@/pages/waiting/WaitingPage';
import NotFoundPage from '@/pages/not-found/NotFoundPage';
import AdminPage from '@/pages/admin/AdminPage';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: 'timetable', element: <TimetablePage /> },
      { path: 'notice', element: <NoticePage /> },
      { path: 'booth', element: <BoothPage /> },
      { path: 'booth/:id', element: <BoothDetailPage /> },
      { path: 'waiting', element: <WaitingPage /> },
      {
        path: 'admin',
        element: <ProtectedRoute />,
        children: [{ index: true, element: <AdminPage /> }],
      },
      { path: '*', element: <NotFoundPage /> },
    ],
  },
]);