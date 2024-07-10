import { Route, Routes } from 'react-router-dom';
import { ADMIN_ROUTES, COMMON_ROUTES, STUDENT_ROUTES } from '@/enums/routes';
import AdminDashboard from '@/pages/Admin/AdminDashboard';
import Dashboard from '@/pages/Dashboard';
import Login from '@/pages/Login';
import Performance from '@/pages/Performance';
import SignUp from '@/pages/SignUp';
import Articles from '../pages/Articles';
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
        <PublicRoute>
          <Dashboard />
        </PublicRoute>
      }
    />
    <Route
      path={STUDENT_ROUTES.MY_PERFORMANCE}
      element={
        <PublicRoute>
          <Performance />
        </PublicRoute>
      }
    />

    {/* Admin Routes */}

    <Route
      path={ADMIN_ROUTES.DASHBOARD}
      element={
        <PublicRoute>
          <AdminDashboard />
        </PublicRoute>
      }
    />
  </Routes>
);

export default Router;
