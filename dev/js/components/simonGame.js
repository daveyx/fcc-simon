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
    this.play = this.play.bind(this);
    this.sleep = this.sleep.bind(this);
  }

  async startGame() {
    this.setState({
      gameRunning: true
    });

    this.play(1);
    await this.sleep(500);
    this.play(2);
    await this.sleep(500);
    this.play(3);
    await this.sleep(500);
    this.play(4);
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

  async play(id) {
    const pad = ReactDOM.findDOMNode(this.refs["pad" + id]);
    pad.style.opacity = 1;
    var audio = new Audio('https://s3.amazonaws.com/freecodecamp/simonSound' + id + '.mp3');
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
              <div className="pad red" ref="pad1"></div>
              <div className="pad green" ref="pad2"></div>
              <div className="pad yellow" ref="pad3"></div>
              <div className="pad blue" ref="pad4"></div>
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
