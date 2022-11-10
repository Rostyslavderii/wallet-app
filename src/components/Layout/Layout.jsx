import { Dashboard } from 'components/Dashboard/Dashboard';
import { Outlet } from 'react-router-dom';
import { Header } from 'components/Header/Header';
export const Layout = () => {
  return (
    <>
      <Header />
      <Dashboard />
      <Outlet />
    </>
  );
};
