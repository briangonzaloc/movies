import styled from 'styled-components';

export const Card = styled.div`
  display: inline-block;
	box-sizing: border-box;
	position: relative;
	margin: 10px;
	width: 256px;
  &:hover {
		cursor: pointer;
	}
`;

export const ImageBackground = styled.div`
  background-position: center center;
  background-size: contain;
  background-repeat: no-repeat;
  min-height: 380px;
`;

export const Title = styled.p`
  font-family: 'SF UI';
  font-weight: 700;
  font-size: 1em;
  color: #FFF;
  display: flex;
  justify-content: center;
  text-align: center;
  margin: 8px 0px 0px 0px; 
`;

export const TitleContainer = styled.div`
  width: 100%;
  background-color: #000000a3;
  height: 55px;
  position: absolute;
  bottom: 0px;
`