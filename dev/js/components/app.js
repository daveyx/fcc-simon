'use strict';

import React, {Component} from 'react';
import {Grid, Row, Col} from 'react-bootstrap';
import '../../css/styles.css';
import SimonGame from './simonGame'

export default class App extends Component {
  constructor(props) {
    super();
  }

  render() {
    return(
      <div className="wrapper">
        <Grid className="content app">
          <Row>
            <Col xs={10} xsOffset={1}>
              <p className="text-center">
                Free Code Camp
              </p>
            </Col>
          </Row>
          <Row>
            <Col xs={10} xsOffset={1}>
              <h1 className="text-center">
                Simon Game<br />
                <small>by <a href="http://www.daveyx.ga" target="_blank" title="daveyx">daveyx</a></small>
              </h1>
              <h2 className="text-center">
                Remember 20 moves to win!
              </h2>
            </Col>
          </Row>
          <Row>
            <Col xs={8} xsOffset={2}>
              <SimonGame />
            </Col>
          </Row>
          <Row>
            <Col xs={12}>
              <hr />
              <footer className="text-center">
                Sourcecode at github.com: <a href="https://github.com/daveyx/fcc-simon" title="Sourcecode" target="_blank">click</a><br />
                Demo at github.com: <a href="https://daveyx.github.io/fcc-simon/" title="Demo" target="_blank">click</a>
              </footer>
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}
