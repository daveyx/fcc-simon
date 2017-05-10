'use strict';

import React, {Component} from 'react';
import ReactDOM from "react-dom";
import {Row, Col} from 'react-bootstrap';
import '../../css/styles.css';
import Control from './control';
import Pad from './pad';
import sleep from '../sleep'

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
  }

  async startGame() {
    this.setState({
      gameRunning: true
    });

    this.refs.pad1.play();
    await sleep(500);
    this.refs.pad2.play();
    await sleep(500);
    this.refs.pad3.play();
    await sleep(500);
    this.refs.pad4.play();
  }

  stopGame() {
    this.setState({
      gameRunning: false
    });
  }

  restartGame() {

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
              <Pad color="red" id="1" ref="pad1"></Pad>
              <Pad color="green" id="2" ref="pad2"></Pad>
              <Pad color="yellow" id="3" ref="pad3"></Pad>
              <Pad color="blue" id="4" ref="pad4"></Pad>
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
