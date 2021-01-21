import styled from 'styled-components'

export const HeaderContainer = styled.header`
  display: flex;
	align-items: center;
	flex-flow: row wrap;
	min-height: 38px;
	border-bottom: 3px ${props => props.theme.header.colors.border} solid;
	background-color: ${props => props.theme.header.colors.background};
	position: fixed;
	z-index: 1000;
	width: 100%;
	top: 0;
`