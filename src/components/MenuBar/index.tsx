import {
  Container,
  Topside,
  SupportIcon,
  ExitIcon,
  ListIcon,
  Button,
  HomeIcon
} from './styles';

import { useNavigate, useLocation } from 'react-router-dom';
import { useContexState } from '../../hooks/context'

export function MenuBar() {
  const { setLoginAccount } = useContexState();

  const navigate = useNavigate();
  const location = useLocation();
  return (
    <Container>
      <Topside>
        {/* <Logo/> */}

        <Button
          path={'/'}
          onClick={() => {
            window.scrollTo(0, 0);
            navigate('/');
          }}
        >
          <HomeIcon />
          <span>Inicio</span>
        </Button>

        <Button
          path={'/cadastros'}
          onClick={() => {
            window.scrollTo(0, 0);
            navigate('/cadastros');
          }}
        >
          <ListIcon />
          <span>Agendamentos</span>
        </Button>

        <Button
          path={'/suporte'}
          onClick={() => {
            window.scrollTo(0, 0);
            navigate('/suporte');
          }}
        >
          <SupportIcon />
          <span>Suporte</span>
        </Button>

        <Button
          path={'/login'}
          onClick={() => {
            setLoginAccount({ user: '', password: '', business: '' })
          }}
        >
          <ExitIcon />
          <span>Sair</span>
        </Button>
      </Topside>

      {/* <Botside>
        <Avatar />
        <ProfileData>
          <strong>Software</strong>
          <span>Optimus</span>
        </ProfileData>
      </Botside> */}
    </Container>
  );
}/*  */
