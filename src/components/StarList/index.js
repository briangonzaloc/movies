import React, { useState, useEffect } from 'react';
import { List } from './styles';
import PropTypes from 'prop-types'
import { connect } from 'react-redux';
import StarIcon from '../Icons/Star';
import { filterMovies } from '../../redux/movies/actions';
import { resetStars } from '../../redux/stars/actions';
import { resetedStars } from '../../redux/stars/selectors';

const StarList = ({count = 5, filterMovies, resetStars, resetedStars}) => {
  const [ starSelected, setStarSelected] = useState(null);

  useEffect(()=>{
    if(resetedStars){
      setStarSelected(null)
    }
  },[resetedStars, setStarSelected])

  const renderList = () => {
    return [...Array(count)].map( (i, index) => ( 
      <StarIcon 
        key={index} 
        selected = { starSelected !== null && index <= starSelected}
        onClick={event => { 
          event.preventDefault();
          resetStars(false)
          if( starSelected === index ){
            setStarSelected(null);
            filterMovies();
          }else{
            setStarSelected(index);
            filterMovies({start: index*2, end: index*2+2});
          }
        }
      }/>
    ));
  }

  return (
    <List>
      {renderList()}
    </List>
  )
  
}

const mapStateToProps = state => ({
  resetedStars: resetedStars(state)
})

const mapDispatchToProps = dispatch => ({
  filterMovies: payload => filterMovies(dispatch, payload),
  resetStars: payload => resetStars(dispatch, payload)
})

export default connect(mapStateToProps, mapDispatchToProps)(StarList);

StarList.propTypes = {
	count: PropTypes.number,
}
