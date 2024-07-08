import { type ReactElement } from 'react';
import { Navigate } from 'react-router';
import { STUDENT_ROUTES } from '@/enums/routes';
import useAuthStore from '@/store/useAuthStore';

interface Props {
  children: ReactElement;
}

const PublicRoute: React.FC<Props> = ({ children }) => {
  const { isAuthenticated } = useAuthStore((state) => state);

  return isAuthenticated ? (
    <Navigate to={STUDENT_ROUTES.DASHBOARD} />
  ) : (
    children
  );
};

export default PublicRoute;
