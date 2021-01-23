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
	}, [getMovies])
	
	useEffect(()=>{
		let params;
		if( search.length){
			params = {query: search};
		}
		getMovies(params);
	}, [search, getMovies])
  
  return (
    <StyledSearchBox>
      <Span>
				<StyledIcon>
					<SearchIcon />
				</StyledIcon>
				<Input
					value={search}
					placeholder="Search"
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