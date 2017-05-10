'use strict';

import React, {Component} from 'react';
import ReactDOM from "react-dom";
import '../../css/styles.css';

export default class Pad extends Component {
  constructor(props) {
    super();
    this.play = this.play.bind(this);
  }

  sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  async play() {
    const pad = ReactDOM.findDOMNode(this.refs["pad" + this.props.id]);
    pad.style.opacity = 1;
    var audio = new Audio('https://s3.amazonaws.com/freecodecamp/simonSound' + this.props.id + '.mp3');
    audio.play();
    await this.sleep(300);
    pad.style.opacity = 0.5;
  }

  render() {
    return(
      <div className={`pad ${this.props.color}`} ref={`pad${this.props.id}`}></div>
    );
  }

}
