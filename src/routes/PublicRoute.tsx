import { type ReactElement } from 'react';
import { Navigate } from 'react-router';
import { ROLES } from '@/enums/roles';
import { ADMIN_ROUTES, STUDENT_ROUTES } from '@/enums/routes';
import useAuthStore from '@/store/useAuthStore';

interface Props {
  children: ReactElement;
}

const PublicRoute: React.FC<Props> = ({ children }) => {
  const { role } = useAuthStore((state) => state);

  return role === ROLES.STUDENT ? (
    <Navigate to={STUDENT_ROUTES.DASHBOARD} />
  ) : role === ROLES.ADMIN ? (
    <Navigate to={ADMIN_ROUTES.DASHBOARD} />
  ) : (
    children
  );
};

export default PublicRoute;
