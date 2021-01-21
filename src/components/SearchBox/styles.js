import styled from 'styled-components'
import Device from '../../commons/Device';

export const StyledSearchBox = styled.div`
  width: 75%;
	height: 80%;
`

export const Span = styled.span`
  display: flex;
  height: 100%;
`

export const StyledIcon = styled.i`
  display: flex;
  justify-content: center;
  align-items: center;

  svg {
    fill: #dbdbdb;
    width: 1.5em;
    height: 1.5em;
    display: inline-block;
  }

  @media ${Device.xs} {
    svg {
      width: 1em;
      height: 1em;
    }
	}
  
`

export const Input = styled.input`
  width: 100%;
  padding-left: 10px;
  font-size: ${props => props.theme.searchBox.font.sizes.lg};
  color: ${props => props.theme.searchBox.font.color};
  font-family: ${props => props.theme.searchBox.font.family};
  border: 0px;
  &:focus {
		outline: none;
	}

  @media ${Device.xs} {
		& {
			min-height: 20px;
			font-size: ${props => props.theme.searchBox.font.sizes.xs};
		}
  }
`