import React, { Component } from 'react';
import '../css/App.css';
import Markdown from './Markdown';
import Preview from './Preview'

// const marked = require("marked");

class App extends Component {
  constructor(props) {
    super(props);

    // get initial state
    this.state = {
      markdown: ""
    };
  }

  

  render() {
    return (
      <div className="row">
        <Markdown
          markdown={this.state.markdown}
          handleChange={this.handleChange}
        />
        <Preview
          markdown={this.state.markdown}
        />
      </div>
    );
  }
}

export default App;
