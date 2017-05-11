'use strict';

import React, {Component} from 'react';
import '../../css/styles.css';
import {Modal, Button} from 'react-bootstrap';

export default class UserInfo extends Component {
  constructor(props) {
    super();
    this.state = {
      showModal: false
    };
  }

  componentWillReceiveProps(newProps) {
    if (this.props.showModal !== newProps.showModal) {
      this.setState({
        showModal: newProps.showModal
      });
    }
  }

  render() {
    return(
        <Modal show={this.state.showModal} onHide={this.props.closeModal}>
          <Modal.Header closeButton>
            <Modal.Title>{this.props.modalTitle}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {this.props.modalMessage}
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.props.closeModal}>Close</Button>
          </Modal.Footer>
        </Modal>
    );
  }
}
