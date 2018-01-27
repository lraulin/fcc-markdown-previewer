import React, { Component } from 'react';

class Input extends Component {
  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({ markdown: e.target.value });
  }

  render() {
    return (
      <div className="col-md-6">
        <h1>Markdown</h1>
        <textarea
          value={this.props.markdown}
          rows="10"
          style={{ width: "300" }}
          onChange={(e) => this.handleChange(e)}
        />
      </div>
    );
  }
}

export default Input;
