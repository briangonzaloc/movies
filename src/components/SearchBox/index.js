import React, {useState, useEffect} from 'react';
import { connect } from 'react-redux';
import { StyledSearchBox, Span, StyledIcon, Input } from './styles';
import SearchIcon from '../Icons/Search';
import { getMovies } from '../../redux/movies/actions';

const SearchBox = ({getMovies}) => {
  const [ search, setSearch ] = useState('');
  const searchData = () => {}

  useEffect(()=>{
    getMovies();
    console.log('aaaaaaaaaaaaas')
  }, [])
  
  return (
    <StyledSearchBox>
      <Span>
				<StyledIcon>
					<SearchIcon />
				</StyledIcon>
				<Input
					value={search}
					placeholder="Buscar"
					onChange={e => {
						setSearch(e.target.value)
					}}
					onKeyPress={e => {
						if (e.key === 'Enter') {
							searchData(search)
						}
					}}
				/>
			</Span>
    </StyledSearchBox>
  )
};

const mapDispatchToProps = dispatch => ({
  getMovies: payload => getMovies(dispatch, payload)
})

export default connect(null, mapDispatchToProps)(SearchBox);