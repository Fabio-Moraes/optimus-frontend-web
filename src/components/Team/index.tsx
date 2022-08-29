import React from 'react';

import { Container, Item } from './styles';

interface Props {
  elements: React.ReactNode[];
  title: string;
}

export function Team({ elements, title }: Props) {
  return (
    <Container>
        <Item>
          <h1>{title}</h1>
        </Item>
        {elements?.map((element, index) => (
          <Item key={index}>{element}</Item>
        ))}
    </Container>
  );
}
