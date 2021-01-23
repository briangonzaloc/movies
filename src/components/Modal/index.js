import React from 'react';
import PropTypes from 'prop-types';
import { ModalContainer, ModalContent, Span, H2, CenterContainer, P, Img, LabelContainer, Label } from './styles';

const Modal = ({visible, onClose, title, overview, releaseDate, backdropPath, voteAverage}) => (
  <ModalContainer visible={visible}>
    <CenterContainer>
      <ModalContent>
        <Span onClick={onClose}>&times;</Span>
        <H2>{title}</H2>
        <Img src={backdropPath} alt={'Backdrop'}/>
        <P>{overview}</P>
        <LabelContainer>Release Date:<Label> {releaseDate}</Label></LabelContainer>
        <LabelContainer>Vote average:<Label> {voteAverage}</Label></LabelContainer>
      </ModalContent>
    </CenterContainer>
  </ModalContainer>
);

export default Modal;

Modal.propTypes = {
  visible: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
	title: PropTypes.string,
  overview: PropTypes.string,
  releaseDate: PropTypes.string,
  backdropPath: PropTypes.string,
  voteAverage: PropTypes.number
}