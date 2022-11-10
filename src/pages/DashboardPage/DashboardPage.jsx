import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Dashboard } from 'components/Dashboard/Dashboard';
import { Header } from 'components/Header/Header';

export const DashboardPage = () => {
  return (
    <>
      <Header />
      <Dashboard />
      <Suspense fallback={<div>loading...</div>}>
        <Outlet />
      </Suspense>
    </>
  );
};
