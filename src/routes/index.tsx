import { Route, Routes } from 'react-router-dom';
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
      path="/"
      element={
        <PublicRoute>
          <Login />
        </PublicRoute>
      }
    />
    <Route
      path="/signup"
      element={
        <PublicRoute>
          <SignUp />
        </PublicRoute>
      }
    />

    <Route
      path="/dashboard"
      element={
        <PublicRoute>
          <Dashboard />
        </PublicRoute>
      }
    />
    <Route
      path="/my-performance"
      element={
        <PublicRoute>
          <Performance />
        </PublicRoute>
      }
    />
    <Route
      path="/articles"
      element={
        <PrivateRoute>
          <Articles />
        </PrivateRoute>
      }
    />
  </Routes>
);

export default Router;
