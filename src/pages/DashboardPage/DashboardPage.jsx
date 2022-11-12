import { Suspense, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { Dashboard } from 'components/Dashboard/Dashboard';
import { Header } from 'components/Header/Header';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTransactions } from 'redux/transactions/transactionOperation';
import { selectIsAuth } from 'redux/auth/authSelectors';
import { Container } from 'utils/GlobalStyle';
import { FlexWrapper } from './DashboardPage.styled';
import { Loader } from 'components/Loader/Loader';

export const DashboardPage = () => {
  const dispatch = useDispatch();
  const isAuth = useSelector(selectIsAuth);
  useEffect(() => {
    if (isAuth) {
      dispatch(fetchTransactions());
    }
  }, [dispatch, isAuth]);

  return (
    <>
      <Header />
      <Container>
        <FlexWrapper>
          <Dashboard />
          <Suspense fallback={<Loader />}>
            <Outlet />
          </Suspense>
        </FlexWrapper>
      </Container>
      {/* <Loader /> */}
    </>
  );
};
