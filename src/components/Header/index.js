import React from 'react';
import { HeaderContainer } from './styles';
import SearchBox from '../SearchBox';
import StarList from '../StarList';

const Header = () => (
  <HeaderContainer>
    <SearchBox />
    <StarList />
  </HeaderContainer>
);

export default Header;