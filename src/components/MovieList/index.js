import React from 'react';
import { List} from './styles';
import { connect } from 'react-redux';
import { movies } from '../../redux/movies/selectors';
import MovieCard from '../Card/MovieCard';

const MovieList = ({movies}) => {

  const renderCards = () => {
    return movies.map((movie, index) => (
      <MovieCard 
        key={index}
        imageUrl={`${process.env.REACT_APP_IMAGE_URL}${movie.poster_path}`} 
        title={movie.title} 
        overview={movie.overview}
        releaseDate={movie.release_date}
        backdropPath={`${process.env.REACT_APP_IMAGE_URL}${movie.backdrop_path}`}
        voteAverage={movie.vote_average}
      />
    ))
  }
  
  
  return (
    <List>
      {renderCards()}
    </List>
  )
};

const mapStateToProps = state => ({
  movies: movies(state)
});

export default connect(mapStateToProps, null)(MovieList);