import { type ReactElement } from 'react';
import { Navigate } from 'react-router';
import { ADMIN_ROUTES, STUDENT_ROUTES } from '@/enums/routes';
import useAuthStore from '@/store/useAuthStore';

interface Props {
  children: ReactElement;
}

const PublicRoute: React.FC<Props> = ({ children }) => {
  const { role } = useAuthStore((state) => state);

  return role === 'Student' ? (
    <Navigate to={STUDENT_ROUTES.DASHBOARD} />
  ) : role === 'Admin' ? (
    <Navigate to={ADMIN_ROUTES.DASHBOARD} />
  ) : (
    children
  );
};

export default PublicRoute;
