'use strict';

import React, {Component} from 'react';
import '../../css/styles.css';

export default class SimonGame extends Component {
  constructor(props) {
    super();
    this.state = {
    };
  }

  render() {
    return(
      <div className="simon">
        <div className="pad red" ></div>
        <div className="pad green" ></div>
        <div className="pad yellow" ></div>
        <div className="pad blue" ></div>
        <div className="display" id="display"></div>
      </div>
    );
  }
}
