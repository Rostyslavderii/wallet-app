import { Dashboard } from 'components/Dashboard/Dashboard';
import { StyledNavLink } from 'components/StyledNavLink/StyledNavLink';
import { Outlet } from 'react-router-dom';
export const Layout = () => {
  return (
    <>
      <StyledNavLink />
      <div>Header</div>
      <Dashboard />
      <Outlet />
    </>
  );
};
