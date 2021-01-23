import React from 'react';
import { Card, ImageBackground, Title, TitleContainer } from './styles';

const MovieCard = ({title, imageUrl}) => (
  <Card>
    <ImageBackground
      style={{
        backgroundImage: `url(${imageUrl})`
      }}
    >
      <TitleContainer>
        <Title>{title}</Title>
      </TitleContainer>
    </ImageBackground>
  </Card>
);

export default MovieCard;