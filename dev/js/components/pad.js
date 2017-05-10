'use strict';

import React, {Component} from 'react';
import ReactDOM from "react-dom";
import '../../css/styles.css';
import {sleep} from '../functions'

export default class Pad extends Component {
  constructor(props) {
    super();
  }

  async play() {
    const pad = ReactDOM.findDOMNode(this.refs["pad" + this.props.id]);
    pad.style.opacity = 1;
    var audio = new Audio('https://s3.amazonaws.com/freecodecamp/simonSound' + this.props.id + '.mp3');
    audio.play();
    await sleep(300);
    pad.style.opacity = 0.5;
  }

  render() {
    return(
      <div className={`pad ${this.props.color}`} ref={`pad${this.props.id}`}></div>
    );
  }
}
