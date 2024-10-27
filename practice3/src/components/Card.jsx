import React from 'react';
import styled from '@emotion/styled';

const Card = ({ name, englishName }) => {
  return (
    <CardContainer>
      <CardName>{name}</CardName>
      <p>{englishName}</p>
    </CardContainer>
  );
};

export default Card;

const CardContainer = styled.div`
  font-size: 30px;
`;

const CardName = styled.h1`
  color: purple;
  font-size: 100px;
`;
