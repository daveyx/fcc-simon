'use strict';

import React, {Component} from 'react';
import ReactDOM from "react-dom";
import '../../css/styles.css';
import {sleep} from '../functions';

export default class Pad extends Component {
  constructor(props) {
    super();
    this.state = {
      audio: new Audio('./mp3/simonSound' + props.id + '.mp3')
    }
    this.clickHandler = this.clickHandler.bind(this);
  }

  async play() {
    const pad = ReactDOM.findDOMNode(this.refs["pad" + this.props.id]);
    pad.style.opacity = 1;
    this.state.audio.play();
    await sleep(300);
    pad.style.opacity = 0.5;
  }

  clickHandler() {
    this.play();
    this.props.padClicked(this.props.id);
  }

  render() {
    return(
      <div
        className={`pad ${this.props.color}`}
        ref={`pad${this.props.id}`}
        onClick={this.props.gameRunning === true && this.props.computerRunning === false ? this.clickHandler : null}
      />
    );
  }
}
