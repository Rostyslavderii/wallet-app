import { Suspense, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { Dashboard } from 'components/Dashboard/Dashboard';
import { Header } from 'components/Header/Header';
import { useDispatch } from 'react-redux';
import { fetchTransactions } from 'redux/transactions/transactionOperation';

export const DashboardPage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchTransactions());
  }, [dispatch]);

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
