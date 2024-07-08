import { type ReactElement } from 'react';
import { Navigate } from 'react-router-dom';
import { COMMON_ROUTES } from '@/enums/routes';
import useAuthStore from '@/store/useAuthStore';

interface AdminRouteProps {
  children: ReactElement;
}

const AdminRoute: React.FC<AdminRouteProps> = ({ children }) => {
  const { isAuthenticated, isAdmin } = useAuthStore();

  return isAuthenticated && isAdmin ? (
    children
  ) : (
    <Navigate to={COMMON_ROUTES.HOME} />
  );
};

export default AdminRoute;
