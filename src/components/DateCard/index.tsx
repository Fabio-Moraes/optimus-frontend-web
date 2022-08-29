import {
  Container,
  Body,
  Content,
  Description,
} from './styles';

import { useNavigate } from 'react-router-dom';
import { useContexState } from '../../hooks/context'

interface propsType {
  date: string;
  quantity: string
}

export function DateCard(props: propsType) {
  const { setSearch } = useContexState();
  const navigate = useNavigate();

  return (
    <Container
      onClick={() => {
        setSearch(props.date)
        navigate('/cadastros');
        ;
      }}
    >
      <Body>
        <Content>
          <Description
            day={props.date}
          >
            <p>Data: {props.date}</p>
            <p>Agendamentos: {props.quantity}</p>
          </Description>
        </Content>
      </Body>
    </Container >
  );
}
