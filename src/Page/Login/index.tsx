import { Container, Box, Input, SearchIcon, Button } from './styles';
import { useContexState } from '../../hooks/context';
import { useState } from 'react';


const validLogins = {
  Fabio: 'Asd123',
  James: '123',
}

export function Login() {
  const { setLoginAccount } = useContexState();

  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');

  const ButtonClick = () => {
    if (validLogins[user as keyof typeof validLogins] === password) {
      setLoginAccount({ user, password });
    } else {
      console.log('no123');
    }
  }

  return (
    <Container>
      <Box>
        <div>
          <Input
            type="search"
            value={user}
            onChange={e => setUser(e.target.value)}
            placeholder="Usuario"
          />
          <SearchIcon />
        </div>

        <div>
          <Input
            type="search"
            value={password}
            onChange={e => setPassword(e.target.value)}
            placeholder="Senha"
          />
          <SearchIcon />
        </div>

        <Button
          onClick={() => {
            window.scrollTo(0, 0);
            ButtonClick();
          }}
        >
          <span>Conectar</span>
        </Button>
      </Box>
    </Container>
  );
}
