import { Suspense, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { Dashboard } from 'components/Dashboard/Dashboard';
import { Header } from 'components/Header/Header';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTransactions } from 'redux/transactions/transactionOperation';
import { getCategories } from 'redux/categories/categoriesOperations';
import { selectIsAuth } from 'redux/auth/authSelectors';
import { Container } from 'utils/GlobalStyle';
import { FlexWrapper, Section } from './DashboardPage.styled';
import { Loader } from 'components/Loader/Loader';
import { useMedia } from 'react-use';
import { Button } from 'components/Button/Button';

export const DashboardPage = () => {
  const isMobile = useMedia('(max-width: 767px)');
  const dispatch = useDispatch();
  const isAuth = useSelector(selectIsAuth);
  useEffect(() => {
    if (isAuth) {
      dispatch(fetchTransactions());
      dispatch(getCategories());
    }
  }, [dispatch, isAuth]);

  return (
    <>
      <Header />
      <Button></Button>
      <Button primary></Button>
      {isMobile ? (
        <Container>
          <FlexWrapper>
            <Dashboard />
            <Suspense fallback={<Loader />}>
              <Outlet />
            </Suspense>
          </FlexWrapper>
        </Container>
      ) : (
        <Section>
          <Container>
            <FlexWrapper>
              <Dashboard />
              <Suspense fallback={<Loader />}>
                <Outlet />
              </Suspense>
            </FlexWrapper>
          </Container>
        </Section>
      )}
    </>
  );
};
