import { Route, Routes } from 'react-router-dom';

import HomePage from 'pages/HomePage/HomePage';
import StatisticPage from 'pages/StatisticPage/StatisticPage';
import LoginPage from 'pages/LoginPage/LoginPage';
import RegisterPage from 'pages/RegisterPage/RegisterPage';
import CurrencyPage from 'pages/CurrencyPage/CurrencyPage';
import { Layout } from './Layout/Layout';
import { useMedia } from 'react-use';

export const App = () => {
  const isMobile = useMedia('(max-width: 768px)');
  return (
    <Routes>
      <Route path="login" element={<LoginPage />} />
      <Route path="register" element={<RegisterPage />} />
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="statistic" element={<StatisticPage />} />
        {isMobile && <Route path="currency" element={<CurrencyPage />} />}
        <Route path="*" element={<HomePage />} />
      </Route>
    </Routes>
  );
};
