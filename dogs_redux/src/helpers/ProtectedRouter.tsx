import { Navigate } from 'react-router-dom';
import { PropsWithChildren } from 'react';
import { useUser } from '../context/UserContext';

const ProtectedRouter = ({ children }: PropsWithChildren) => {
  const { login } = useUser();
  return login ? children : <Navigate to="/login" />;
};

export default ProtectedRouter;
