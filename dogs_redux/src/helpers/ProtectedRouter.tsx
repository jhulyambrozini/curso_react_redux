import { Navigate } from 'react-router-dom';
import { PropsWithChildren } from 'react';
import { useSelector } from 'react-redux';
import { RootReducer } from '../store';

const ProtectedRouter = ({ children }: PropsWithChildren) => {
  const {login} = useSelector((state: RootReducer) => state.user)
  return login ? children : <Navigate to="/login" />;
};

export default ProtectedRouter;
