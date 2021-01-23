import React, { useState } from 'react';
import StarIcon from '../Icons/Star';
import PropTypes from 'prop-types'

const StarList = ({count = 5}) => {
  const [ starSelected, setStarSelected] = useState(null);
  
  return [...Array(count)].map( (i, index) => ( 
    <StarIcon 
      key={index} 
      selected = { starSelected && index <= starSelected}
      onClick={event => { 
        event.preventDefault();
        if( starSelected === index ){
          setStarSelected(null)
        }else{
          setStarSelected(index);
        }
      }
    }/>
  ));
}

export default StarList;

StarList.propTypes = {
	count: PropTypes.number,
}
