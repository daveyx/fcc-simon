'use strict';

import React, {Component} from 'react';
import ReactDOM from "react-dom";
import {Row, Col} from 'react-bootstrap';
import '../../css/styles.css';
import Control from './control';

export default class SimonGame extends Component {
  constructor(props) {
    super();
    this.state = {
      strictMode: false,
      gameRunning: false,
      moves: 0
    };
    this.toggleStrictMode = this.toggleStrictMode.bind(this);
    this.startGame = this.startGame.bind(this);
    this.stopGame = this.stopGame.bind(this);
    this.restartGame = this.restartGame.bind(this);
    this.play1 = this.play1.bind(this);
    this.play2 = this.play2.bind(this);
    this.play3 = this.play3.bind(this);
    this.play4 = this.play4.bind(this);
    this.sleep = this.sleep.bind(this);
  }

  async startGame() {
    this.setState({
      gameRunning: true
    });

    this.play1();
    await this.sleep(500);
    this.play2();
  }

  stopGame() {
    this.setState({
      gameRunning: false
    });
  }

  restartGame() {

  }

  sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  async play1() {
    const pad = ReactDOM.findDOMNode(this.refs.redpad);
    pad.style.opacity = 1;
    var audio = new Audio('https://s3.amazonaws.com/freecodecamp/simonSound1.mp3');
    audio.play();
    await this.sleep(300);
    pad.style.opacity = 0.5;
  }

  async play2() {
    const pad = ReactDOM.findDOMNode(this.refs.greenpad);
    pad.style.opacity = 1;
    var audio = new Audio('https://s3.amazonaws.com/freecodecamp/simonSound2.mp3');
    audio.play();
    await this.sleep(300);
    pad.style.opacity = 0.5;
  }

  play3() {
    const pad = ReactDOM.findDOMNode(this.refs.greenpad);
    pad.style.opacity = 1;
    var audio = new Audio('https://s3.amazonaws.com/freecodecamp/simonSound3.mp3');
    audio.play();
    await this.sleep(300);
    pad.style.opacity = 0.5;
  }

  play4() {
    const pad = ReactDOM.findDOMNode(this.refs.greenpad);
    pad.style.opacity = 1;
    var audio = new Audio('https://s3.amazonaws.com/freecodecamp/simonSound4.mp3');
    audio.play();
    await this.sleep(300);
    pad.style.opacity = 0.5;
  }

  toggleStrictMode() {
    if (this.state.strictMode) {
      this.setState({
        strictMode: false
      });
    } else {
      this.setState({
        strictMode: true
      });
    }
  }

  render() {
    return(
      <div>
        <Row>
          <Col xs={12}>
            <div className="simon">
              <div className="pad red" ref="redpad"></div>
              <div className="pad green" ref="greenpad"></div>
              <div className="pad yellow" ref="yellowpad"></div>
              <div className="pad blue" ref="bluepad"></div>
              <div className="display" id="display">
                {this.state.moves}
              </div>
            </div>
          </Col>
        </Row>
        <Row>
          <Col xs={12}>
            <Control
              strictMode={this.state.strictMode}
              toggleStrictMode={this.toggleStrictMode}
              gameRunning={this.state.gameRunning}
              startGame={this.startGame}
              stopGame={this.stopGame}
              restartGame={this.restartGame}
            />
          </Col>
        </Row>
      </div>
    );
  }
}
