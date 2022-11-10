import { Outlet } from 'react-router-dom';

const DashboardPage = () => {
  return (
    <>
      <div>Dashboard page</div>
      <Outlet />
    </>
  );
};

export default DashboardPage;
