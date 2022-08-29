import {
  Forehead,
  LogoImage,
  ProfileInfo,
  MenuHeader,
  HomeIcon,
  SupportIcon,
  OnlineInfo,
  ExitIcon,
  ListIcon,
  Title,
  Button,
} from './styles';

import { useNavigate, useLocation } from 'react-router-dom';
import { useContexState } from '../../hooks/context'

export function Header() {
  const navigate = useNavigate();
  const location = useLocation();

  const { setLoginAccount } = useContexState();

  return (
    <>
      <Forehead>
        <ProfileInfo>
          <LogoImage />
          <div>
            <strong>OPTIMUS</strong>
            <span>Whatsapp Chatbot</span>
          </div>
        </ProfileInfo>

        <OnlineInfo>
          <strong>💈 Barbearia Irmão James 💈</strong>
          {/* <span>online</span> */}
        </OnlineInfo>
      </Forehead>

      <MenuHeader>
        <Button
          path={'/'}
          onClick={() => {
            window.scrollTo(0, 0);
            navigate('/');
          }}
        >
          <HomeIcon />
          <Title>Inicio</Title>
        </Button>

        <Button
          path={'/cadastros'}
          onClick={() => {
            window.scrollTo(0, 0);
            navigate('/cadastros');
          }}
        >
          <ListIcon />
          <Title>Agendamentos</Title>
        </Button>

        <Button
          path={'/suporte'}
          onClick={() => {
            window.scrollTo(0, 0);
            navigate('/suporte');
          }}
        >
          <SupportIcon />
          <Title>Suporte</Title>
        </Button>

        <Button
          path={'/login'}
          onClick={() => {
            setLoginAccount({ user: '', password: '' })
          }}
        >
          <ExitIcon />
          <Title>Sair</Title>
        </Button>
      </MenuHeader>
    </>
  );
}
