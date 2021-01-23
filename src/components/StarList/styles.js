import styled from 'styled-components'
import Device from '../../commons/Device';

export const List = styled.div`
  width: 30%;
  text-align: right;
  box-sizing: border-box;
  padding-right: 40px;

  @media ${Device.xs} {
		& {
			padding-right: 0px;
		}
  }
`;