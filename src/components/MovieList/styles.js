import styled from 'styled-components';
import Device from '../../commons/Device';

export const List = styled.section`
	display: flex;
	justify-content: center;
	align-items: stretch;
	flex-flow: row wrap;
	padding: 5% 3%;

	@media ${Device.xs} {
		padding: 50px 10px;
	}
`;