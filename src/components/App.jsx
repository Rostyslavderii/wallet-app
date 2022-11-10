import { Route, Routes } from 'react-router-dom';
import DashboardPage from 'pages/DashboardPage/DashboardPage';
import HomePage from 'pages/HomePage/HomePage';
import StatisticPage from 'pages/StatisticPage/StatisticPage';
import LoginPage from 'pages/LoginPage/LoginPage';
import RegisterPage from 'pages/RegisterPage/RegisterPage';
import { Layout } from './Layout/Layout';

export const App = () => {
  return (
    <Routes>
      <Route path="authorization" element={<Layout />}>
        <Route path="login" element={<LoginPage />} />
        <Route path="register" element={<RegisterPage />} />
      </Route>
      <Route path="/" element={<DashboardPage />}>
        <Route index element={<HomePage />} />
        <Route path="statistic" element={<StatisticPage />} />
      </Route>
    </Routes>
  );
};
