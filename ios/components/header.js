import React from 'react';
import { 
  Header,
  Body,
  Title
} from 'native-base';

const HeaderArtic = ({ title }) => (
  <Header>
    <Body>
      <Title>{title}</Title>
    </Body>
  </Header>
)

export default HeaderArtic;