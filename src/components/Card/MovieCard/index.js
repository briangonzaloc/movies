import React, {useState} from 'react';
import PropTypes from 'prop-types';
import { Card, ImageBackground, Title, TitleContainer } from './styles';
import Modal from '../../Modal';

const MovieCard = ({title, imageUrl, overview, releaseDate, backdropPath, voteAverage}) => {
  const [ open, setOpen] = useState(false);

  return (
    <>
      <Card onClick={()=>setOpen(true)}>
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
      <Modal 
        visible={open}
        onClose={()=>{
          setOpen(false);
        }}
        title={title}
        overview={overview}
        releaseDate={releaseDate}
        backdropPath={backdropPath}
        voteAverage={voteAverage}
      />
    </>
  )
}

export default MovieCard;

MovieCard.propTypes = {
	title: PropTypes.string,
  imageUrl: PropTypes.string,
  overview: PropTypes.string,
  releaseDate: PropTypes.string,
  backdropPath: PropTypes.string,
  voteAverage: PropTypes.number
}
