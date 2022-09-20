import { BrowserRouter as Router } from 'react-router-dom';
import { useEffect } from 'react';

import { AppRoutes } from '../Routes';

import { MenuBar } from '../components/MenuBar';
import { SideBar } from '../components/SideBar';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';

import { Container, Wrapper, Main } from './styles';
import { useContexState } from '../hooks/context';

import api from '../services/axios';

import { Login } from '../Page/Login'

interface Repository {
  name: string;
  service: string;
  service_date: string;
  service_time: string;
  phone: string;
  identifier: string;
  employee: string;
}

export function Layout() {
  const { setLoadingList, loginAccount } = useContexState();

  useEffect(() => {
    if (loginAccount.business !== '') {
      api.get('select', {
        params: {
          user: loginAccount.user,
          password: loginAccount.password
        }
      })
        .then(({ data: repositories }: { data: Repository[] }) => {
          if (loginAccount.business !== '') setLoadingList(repositories);
        })
        .catch((err: Error) => {
          console.log(err);
        })
    }
  }, [loginAccount])

  return loginAccount.business !== '' ? (
    <Router>
      <Container>
        <Wrapper>
          <MenuBar />
          <Main>
            <Header />
            <AppRoutes />
            <Footer />
          </Main>
          <SideBar />
        </Wrapper>
      </Container>
    </Router>
  ) : (
    <Router>
      <Login />
    </Router>
  );
}
