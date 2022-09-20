import { Container, Box, Input, PasswordIcon, UserIcon, Button } from './styles';
import { useContexState } from '../../hooks/context';
import { useState } from 'react';

import api from '../../services/axios';

interface Repository {
  password: string;
  business: string;
}

export function Login() {
  const { setLoginAccount } = useContexState();

  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');

  const [textError, setTextError] = useState('');
  const [isChecked, setIsChecked] = useState(false);
  const [isFetching, setIsFetching] = useState(false);

  const ButtonLogin = () => {
    setIsFetching(true);
    api.get('validate', { params: { user, password } })
      .then(({ data: repositories }: { data: Repository[] }) => {
        console.log(repositories);
        if (repositories[0].password === password) {
          console.log(repositories[0].business);
          setLoginAccount({ user, password, business: repositories[0].business });
        } else setTextError('error');
      })
      .catch((err: Error) => {
        console.log(err);
      })
      .finally(() => {
        setIsFetching(false);
      })
  }

  return (
    <Container>
      <Box>
        <div>
          <Input
            onKeyDown={(e: { key: string }) => {
              e.key === 'Enter' && ButtonLogin()
            }}

            textError={textError}
            type="text"
            value={user}
            onChange={e => {
              setTextError('');
              setUser(e.target.value)
            }}
            placeholder="Usuario"
          />
          <UserIcon />

          <Input
            onKeyDown={(e: { key: string }) => {
              e.key === 'Enter' && ButtonLogin()
            }}

            textError={textError}
            type={isChecked ? "text" : "password"}
            value={password}
            onChange={e => {
              setTextError('');
              setPassword(e.target.value)
            }}
            placeholder="Senha"
          />
          <PasswordIcon />

        </div>

        <p>{textError === 'error' ? 'Login ou Senha Inválido' : ''}</p>
        <Button
          onClick={() => {
            window.scrollTo(0, 0);
            ButtonLogin();
          }}
        >
          <span>Conectar</span>
        </Button>
        <div>
          <input type="checkbox" defaultChecked={isChecked} onChange={e => {
            setIsChecked(isChecked ? false : true)
            console.log(isChecked)
          }} />
          <p>Mostrar senha</p>
        </div>
      </Box>

    </Container>
  );
}
