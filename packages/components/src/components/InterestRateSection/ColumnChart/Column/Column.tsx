import React from 'react';
import { Wrapper, Row, ColumnItem, TextContainer, LabelText, LabelNumber } from './styles';

const Column = ({ height, background, player }): any => (
  <Wrapper>
    <Row>
      <TextContainer color={background}>
        <LabelText>{player.name}</LabelText>
        <LabelNumber>{`${player.number}%`}</LabelNumber>
      </TextContainer>
    </Row>
    <Row>
      <ColumnItem height={height} color={background} />
    </Row>
  </Wrapper>
);

export default Column;
