import React from 'react';
import { List} from './styles';
import { connect } from 'react-redux';
import { movies } from '../../redux/movies/selectors';
import MovieCard from '../Card/MovieCard';

const MovieList = ({movies}) => {

  const renderCards = () => {
    return movies.map((movie, index) => (
      <MovieCard imageUrl={`https://image.tmdb.org/t/p/original${movie.poster_path}`} title={movie.title} key={index}/>
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