'use strict';

import React, {Component} from 'react';
import ReactDOM from "react-dom";
import {Row, Col} from 'react-bootstrap';
import '../../css/styles.css';
import Control from './control';
import Pad from './pad';
import {sleep, random} from '../functions'

export default class SimonGame extends Component {
  constructor(props) {
    super();
    this.state = {
      strictMode: false,
      gameRunning: false,
      moves: [2]
    };
    this.toggleStrictMode = this.toggleStrictMode.bind(this);
    this.startGame = this.startGame.bind(this);
    this.stopGame = this.stopGame.bind(this);
    this.restartGame = this.restartGame.bind(this);
    this.computerMove = this.computerMove.bind(this);
  }

  computerMove() {
    const moves = this.state.moves;
    moves.push(random());
    this.setState({
      moves: moves
    }, async () => {
      for (var i = 0; i < this.state.moves.length; i++) {
        const pad = this.state.moves[i];
         this.refs["pad" + pad].play();
         await sleep(1000);
      }
    });
  }

  startGame() {
    this.setState({
      gameRunning: true
    });
    this.computerMove();
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
                {this.state.moves.length}
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
