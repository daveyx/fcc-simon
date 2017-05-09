'use strict';

import React, {Component} from 'react';
import '../../css/styles.css';
import {Button, Checkbox} from 'react-bootstrap';

export default class Control extends Component {
  constructor(props) {
    super();
    this.state = {
    };
  }

  render() {
    return(
      <div className="control text-center">
        <Checkbox
          checked={this.props.strictMode}
          onChange={this.props.toggleStrictMode}
          disabled={this.props.gameRunning}>
          Strict
        </Checkbox>
        <Button onClick={this.props.gameRunning ? this.props.restartGame : this.props.startGame}>
          {this.props.gameRunning ? "Restart" : "Start"}
        </Button>
        {this.props.gameRunning === true ? <Button onClick={this.props.stopGame}>Stop</Button> : null}
      </div>
    );
  }
}
