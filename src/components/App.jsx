import { Route, Routes, Navigate } from 'react-router-dom';
import { lazy } from 'react';
import { useMedia } from 'react-use';

// import { PrivateRoute } from './HOCs/PrivateRoute';
import { PublicRoute } from './HOCs/PublicRoute';
import LoginPage from 'pages/LoginPage/LoginPage';
import RegisterPage from 'pages/RegisterPage/RegisterPage';
import CurrencyPage from 'pages/CurrencyPage/CurrencyPage';
import { DashboardPage } from 'pages/DashboardPage/DashboardPage';

const HomePage = lazy(() => import('../pages/HomePage/HomePage'));
const StatisticPage = lazy(() =>
  import('../pages/StatisticPage/StatisticPage')
);

export const App = () => {
  const isMobile = useMedia('(max-width: 768px)');
  return (
    <Routes>
      <Route
        path="login"
        element={
          <PublicRoute restricted>
            <LoginPage />
          </PublicRoute>
        }
      />
      <Route
        path="register"
        element={
          <PublicRoute restricted>
            <RegisterPage />
          </PublicRoute>
        }
      />
      <Route path="/" element={<DashboardPage />}>
        <Route index element={<HomePage />} />
        <Route path="statistic" element={<StatisticPage />} />
        {isMobile && <Route path="currency" element={<CurrencyPage />} />}
        <Route path="*" element={<Navigate to="/" />} />
      </Route>
    </Routes>
  );
};
