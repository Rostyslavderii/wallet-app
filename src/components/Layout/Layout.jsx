import { Dashboard } from 'components/Dashboard/Dashboard';
import { Outlet } from 'react-router-dom';
import { Header } from 'components/Header/Header';
import { Suspense } from 'react';
import { Loader } from 'components/Loader/Loader';

export const Layout = () => {
  return (
    <>
      <Header />
      <Dashboard />
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </>
  );
};
