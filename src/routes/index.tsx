import { Route, Routes } from 'react-router-dom';
import { ADMIN_ROUTES, COMMON_ROUTES, STUDENT_ROUTES } from '@/enums/routes';
import AdminDashboard from '@/pages/Admin/AdminDashboard';
import Dashboard from '@/pages/Dashboard';
import Login from '@/pages/Login';
import Performance from '@/pages/Performance';
import SignUp from '@/pages/SignUp';
import Articles from '../pages/Articles';
import AdminRoute from './AdminRoute';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';

const Router = () => (
  <Routes>
    <Route
      path={COMMON_ROUTES.HOME}
      element={
        <PublicRoute>
          <Login />
        </PublicRoute>
      }
    />
    <Route
      path={COMMON_ROUTES.SIGN_UP}
      element={
        <PublicRoute>
          <SignUp />
        </PublicRoute>
      }
    />

    <Route
      path={COMMON_ROUTES.SIGN_UP}
      element={
        <PrivateRoute>
          <Articles />
        </PrivateRoute>
      }
    />

    {/* Student Routes */}
    <Route
      path={STUDENT_ROUTES.DASHBOARD}
      element={
        <PrivateRoute>
          <Dashboard />
        </PrivateRoute>
      }
    />
    <Route
      path={STUDENT_ROUTES.MY_PERFORMANCE}
      element={
        <PrivateRoute>
          <Performance />
        </PrivateRoute>
      }
    />

    {/* Admin Routes */}

    <Route
      path={ADMIN_ROUTES.DASHBOARD}
      element={
        <AdminRoute>
          <AdminDashboard />
        </AdminRoute>
      }
    />
  </Routes>
);

export default Router;
