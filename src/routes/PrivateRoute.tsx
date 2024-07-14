import { type ReactElement } from 'react';
import { Navigate } from 'react-router';
import { ROLES } from '@/enums/roles';
import { COMMON_ROUTES } from '@/enums/routes';
import useAuthStore from '@/store/useAuthStore';

interface Props {
  children: ReactElement;
}

const PrivateRoute: React.FC<Props> = ({ children }) => {
  const { role } = useAuthStore((state) => ({
    role: state.role,
  }));

  return role === ROLES.STUDENT ? (
    children
  ) : (
    <Navigate to={COMMON_ROUTES.HOME} />
  );
};

export default PrivateRoute;
