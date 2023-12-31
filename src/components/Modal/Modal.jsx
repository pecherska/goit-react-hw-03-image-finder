import { Component } from 'react';
import { createPortal } from 'react-dom';
import { ModalBackdrope, ModalContent } from './Modal.styled';
const modalRoot = document.querySelector('#modal-root');

export default class Modal extends Component {
  componentDidMount() {
    console.log('Modal componentDidMount');
    window.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    console.log('Modal componentWillUnmount');
    window.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown = e => {
    if (e.code === 'Escape') {
      this.props.onClose();
    }
  };

  handleBackdropeClick = e => {
    if (e.currentTarget === e.target) {
      this.props.onClose();
    }
  };
  render() {
    return createPortal(
      <ModalBackdrope onClick={this.handleBackdropeClick}>
        <ModalContent>{this.props.children}</ModalContent>
      </ModalBackdrope>,
      modalRoot
    );
  }
}
