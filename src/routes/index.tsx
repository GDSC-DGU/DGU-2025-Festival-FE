import { createBrowserRouter } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import ProtectedRoute from "@/components/auth/ProtectedRoute";
import { Role } from "@/pages/admin/types/role";
import HomePage from "@/pages/home/HomePage";
import TimetablePage from "@/pages/timetable/TimetablePage";
import NoticePage from "@/pages/notice/NoticePage";
import BoothPage from "@/pages/booth/BoothPage";
import WaitingPage from "@/pages/waiting/WaitingPage";
import NotFoundPage from "@/pages/not-found/NotFoundPage";
import NoticeDetailPage from "@/pages/notice-detail/NoticeDetailPage";
import LostDetailPage from "@/pages/lost-detail/LostDetailPage";
import BoothDetailPage from "@/pages/booth/BoothDetailPage";

import AdminLoginPage from "@/pages/admin/AdminPage";
import BoothAdminEntry from "@/pages/admin/booth";
import AdminNoticePage from "@/pages/admin/notice";
import WritePage from "@/pages/admin/write";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "timetable", element: <TimetablePage /> },
      { path: "notice", element: <NoticePage /> },
      { path: "notice/:id", element: <NoticeDetailPage /> },
      { path: "notice/lost/:id", element: <LostDetailPage /> },
      { path: "booth", element: <BoothPage /> },
      { path: "booth/:id", element: <BoothDetailPage /> },
      { path: "waiting", element: <WaitingPage /> },
      { path: "*", element: <NotFoundPage /> },
    ],
  },
  {
    path: "/admin",
    element: <Layout />,
    children: [
      { index: true, element: <AdminLoginPage /> },
      {
        path: "booth",
        element: (
          <ProtectedRoute allowedRoles={[Role.ADPUB]}>
            <BoothAdminEntry />
          </ProtectedRoute>
        ),
      },
      {
        path: "notice",
        element: (
          <ProtectedRoute allowedRoles={[Role.ADFESTA]}>
            <AdminNoticePage />
          </ProtectedRoute>
        ),
      },
      {
        path: "notice/:id",
        element: (
          <ProtectedRoute allowedRoles={[Role.ADFESTA]}>
            <NoticeDetailPage />
          </ProtectedRoute>
        ),
      },
      {
        path: "notice/lost/:id",
        element: (
          <ProtectedRoute allowedRoles={[Role.ADFESTA]}>
            <LostDetailPage />
          </ProtectedRoute>
        ),
      },
      {
        path: "write",
        element: (
          <ProtectedRoute allowedRoles={[Role.ADFESTA]}>
            <WritePage />
          </ProtectedRoute>
        ),
      },
      {
        path: "edit/:id",
        element: (
          <ProtectedRoute>
            <WritePage />
          </ProtectedRoute>
        ),
      },
    ],
  },
]);
