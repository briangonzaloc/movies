import styled from 'styled-components';
import Device from '../../../commons/Device';

export const Svg = styled.svg`
	width: ${props => (props.size === 'small' ? '14px' : '24px')};
	height: ${props => (props.size === 'small' ? '14px' : '24px')};
	fill: transparent;
	stroke: ${props => props.color || props.theme.font.colors.dark};
  padding-right: 5px;
	fill: ${ props => props.selected ? '#ff0' : '#FFF'};

	&:hover {
		cursor: pointer;
	}

    @media ${Device.xs}{
      & {
        width: 14px;
        height: 14px;
      }
  }
`
