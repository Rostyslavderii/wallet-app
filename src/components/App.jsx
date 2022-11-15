import { useEffect, lazy } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import { useMedia } from 'react-use';
import { useDispatch, useSelector } from 'react-redux';

import { PrivateRoute } from 'HOCs/PrivateRoute';
import { PublicRoute } from 'HOCs/PublicRoute';
import LoginPage from 'pages/LoginPage/LoginPage';
import RegisterPage from 'pages/RegisterPage/RegisterPage';

import { DashboardPage } from 'pages/DashboardPage/DashboardPage';
import {
  selectIsFetching,
  selectIsLoadingUser,
} from 'redux/auth/authSelectors';
import { fetchCurrentUser } from 'redux/auth/authOperations';
import { Loader } from './Loader/Loader';

const HomePage = lazy(() => import('../pages/HomePage/HomePage'));
const StatisticPage = lazy(() =>
  import('../pages/StatisticPage/StatisticPage')
);
const CurrencyPage = lazy(() => import('../pages/CurrencyPage/CurrencyPage'));

export const App = () => {
  const isMobile = useMedia('(max-width: 768px)');
  const isFetching = useSelector(selectIsFetching);
  const isLoading = useSelector(selectIsLoadingUser);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCurrentUser());
  }, [dispatch]);

  return isFetching || isLoading ? (
    <Loader />
  ) : (
    <Routes>
      <Route
        path="/login"
        element={
          <PublicRoute restricted>
            <LoginPage />
          </PublicRoute>
        }
      />
      <Route
        path="/register"
        element={
          <PublicRoute restricted>
            <RegisterPage />
          </PublicRoute>
        }
      />
      <Route path="/" element={<DashboardPage />}>
        <Route
          index
          element={
            <PrivateRoute>
              <HomePage />
            </PrivateRoute>
          }
        />
        <Route
          path="statistic"
          element={
            <PrivateRoute>
              <StatisticPage />
            </PrivateRoute>
          }
        />
        {isMobile && (
          <Route
            path="currency"
            element={
              <PrivateRoute>
                <CurrencyPage />
              </PrivateRoute>
            }
          />
        )}
        <Route path="*" element={<Navigate to="/" />} />
      </Route>
    </Routes>
  );
};
