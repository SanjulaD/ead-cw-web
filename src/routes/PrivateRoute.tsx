import { type ReactElement } from 'react';
import { Navigate } from 'react-router';
import { COMMON_ROUTES } from '@/enums/routes';
import useAuthStore from '@/store/useAuthStore';

interface Props {
  children: ReactElement;
}

const PrivateRoute: React.FC<Props> = ({ children }) => {
  const { role } = useAuthStore((state) => ({
    role: state.role,
  }));

  return role === 'Student' ? children : <Navigate to={COMMON_ROUTES.HOME} />;
};

export default PrivateRoute;
