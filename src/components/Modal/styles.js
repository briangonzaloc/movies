import styled from 'styled-components';
import Device from '../../commons/Device';

export const ModalContainer = styled.div`
  background: #00000075;
  opacity:1;
  position: fixed;
  top: 0;
  left: 0;
  z-index:1300;
  height: 100%;
  width: 100%;
  transition: all .5s;
  cursor:initial;
  display: ${props => !props.visible ? 'none' : 'initial'};
`

export const ModalContent = styled.div`
  border-radius: 12px;
  background-color:#fff;
  position:relative;
  padding:0;
  top:12vh;
  width:50vh;
  height:60vh;
  overflow:overlay;
  position:relative;
  padding: 20px;
  ::-webkit-scrollbar {
    width: 8px;
  }
  
  ::-webkit-scrollbar-track {
    background: #f1f1f1; 
  }
  
  ::-webkit-scrollbar-thumb {
    background: #888; 
  }
  
  ::-webkit-scrollbar-thumb:hover {
    background: #555; 
  }
  
  @media ${Device.xs} {
    & { 
      top:12vh;
      height:75vh;
    }
  }
`;

export const CenterContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`
export const Span = styled.span`
  cursor:pointer;
  position:absolute;
  right:20px;
  top:10px;
  color: black;
  padding:5px;
  font-size:2em;
  color: ${props => props.theme.font.colors.light};
  z-index: 3;
`;

export const H2 = styled.h2`
  padding:20px 20px 0px 0px;
  font-family: ${props => props.theme.font.family};
  color: ${props => props.theme.font.colors.dark};

  @media ${Device.xs} {
    & { 
      font-size: ${props => props.theme.font.sizes.md};
    }
  }
`

export const P = styled.p`
  font-family: ${props => props.theme.font.family};
  color: ${props => props.theme.font.colors.dark};
`

export const Img = styled.img`
  width: 100%;
  height: auto;
`
export const LabelContainer = styled.p`
  display: flex;
  align-items: center;
  font-family: ${props => props.theme.font.family};
  color: ${props => props.theme.font.colors.dark};
  margin: 0px;
`

export const Label = styled.span`
  font-weight: bold;
  margin-left: 10px;
  font-family: ${props => props.theme.font.family};
  color: ${props => props.theme.font.colors.dark};
`