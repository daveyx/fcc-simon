'use strict';

import React, {Component} from 'react';
import {Row, Col} from 'react-bootstrap';
import '../../css/styles.css';
import Control from './control';

export default class SimonGame extends Component {
  constructor(props) {
    super();
    this.state = {
      strictMode: false,
      gameRunning: false
    };
    this.toggleStrictMode = this.toggleStrictMode.bind(this);
    this.startGame = this.startGame.bind(this);
    this.stopGame = this.stopGame.bind(this);
    this.restartGame = this.restartGame.bind(this);
  }

  startGame() {
    this.setState({
      gameRunning: true
    });
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
              <div className="pad red" ></div>
              <div className="pad green" ></div>
              <div className="pad yellow" ></div>
              <div className="pad blue" ></div>
              <div className="display" id="display"></div>
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
