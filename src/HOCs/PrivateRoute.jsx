import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { selectToken } from 'redux/auth/authSelectors';

export const PrivateRoute = ({ children }) => {
  const isLoggedIn = Boolean(useSelector(selectToken));
  return isLoggedIn ? children : <Navigate to="/login" />;
};
