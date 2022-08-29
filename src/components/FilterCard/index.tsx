import { ItemContainer, Thumbnail } from './styles';

interface PropsCard {
  name: string;
  service: string;
  service_date: string;
  service_time: string;
  phone: string;
  identifier: string;
  employee: string;
}

export function FilterCard(props: PropsCard) {
  return (
    <ItemContainer>
      {/* <Thumbnail src={props.image} /> */}
      <div>
        <strong>Nome: {props.name}</strong>
        <strong>Serviço: {props.service}</strong>
        <strong>Telefone: {props.phone}</strong>
        <strong>Cabeleireiro: {props.employee}</strong>
        <strong>Data e hora: {props.service_date} as {props.service_time}</strong>
        <strong>protocolo:  {props.identifier}</strong>
      </div>
    </ItemContainer>
  );
}
