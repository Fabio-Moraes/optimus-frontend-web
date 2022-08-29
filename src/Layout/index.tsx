import { BrowserRouter as Router } from 'react-router-dom';
import { useEffect } from 'react';

import { AppRoutes } from '../Routes';

import { MenuBar } from '../components/MenuBar';
import { SideBar } from '../components/SideBar';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';

import { Container, Wrapper, Main } from './styles';
import { useContexState } from '../hooks/context';

import { Login } from '../Page/Login'
import api from '../services/axios';

export function Layout() {
  const { setLoadingList, loginAccount, setLoginAccount } = useContexState();

  useEffect(() => {
    setLoginAccount({ user: '', password: '' })
    api.get('select', {}).then((responce) => {
      setLoadingList(responce.data);
    });
  }, [])

  return loginAccount.password.length > 1 ? (
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
