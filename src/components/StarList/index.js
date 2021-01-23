import React from 'react';
import StarIcon from '../Icons/Star';

const StarList = ({count = 5}) => {
  return [...Array(count)].map( (i, index) => <StarIcon key={index} onClick={event => { event.preventDefault(); }}/>);
}

export default StarList;