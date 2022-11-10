import { Dashboard } from 'components/Dashboard/Dashboard';
import { Navigation } from 'components/Navigation/Navigation';
import { StyledNavLink } from 'components/StyledNavLink/StyledNavLink';
import { Outlet } from 'react-router-dom';
export const Layout = () => {
  return (
    <>
      <Navigation />
      <div>Header</div>
      <Dashboard />
      <Outlet />
    </>
  );
};
