import { Dashboard } from 'components/Dashboard/Dashboard';
import { Outlet } from 'react-router-dom';
export const Layout = () => {
  return (
    <>
      <div>Header</div>
      <Dashboard />
      <Outlet />
    </>
  );
};
