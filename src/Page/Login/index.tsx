import { Container, Box, Input, PasswordIcon, UserIcon, Button } from './styles';
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

  const [textError, setTextError] = useState('');
  const [isChecked, setIsChecked] = useState(false);

  const ButtonClick = () => {
    if (validLogins[user as keyof typeof validLogins] === password) {
      setLoginAccount({ user, password });
    } else {
      console.log('no123');
      setTextError('error');
    }
  }

  return (
    <Container>
      <Box>
        <div>
          <Input
            onKeyDown={(e: { key: string }) => {
              e.key === 'Enter' && ButtonClick()
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
              e.key === 'Enter' && ButtonClick()
            }}

            textError={textError}
            type={isChecked ? "text" : "password" }
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
            ButtonClick();
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
