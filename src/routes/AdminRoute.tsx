import { type ReactElement } from 'react';
import { Navigate } from 'react-router-dom';
import { ROLES } from '@/enums/roles';
import { COMMON_ROUTES } from '@/enums/routes';
import useAuthStore from '@/store/useAuthStore';

interface AdminRouteProps {
  children: ReactElement;
}

const AdminRoute: React.FC<AdminRouteProps> = ({ children }) => {
  const { role } = useAuthStore((state) => ({
    role: state.role,
  }));

  return role === ROLES.ADMIN ? children : <Navigate to={COMMON_ROUTES.HOME} />;
};

export default AdminRoute;
