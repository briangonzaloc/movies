import React, {useState} from 'react';
import { StyledSearchBox, Span, StyledIcon, Input } from './styles';
import SearchIcon from '../Icons/Search';

const SearchBox = () => {
  const [ search, setSearch ] = useState('');
  const searchData = () => {}
  
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

export default SearchBox;