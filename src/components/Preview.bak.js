import React from 'react';

const marked = require("marked");

class Preview extends React.Component {
  render() {
    return (
      <div className="col-md-6">
        <h1>Preview</h1>
        <div
          dangerouslySetInnerHTML={ __html: marked(this.props.markdown) }
        />
      </div>
    )
  }
}

export default Preview;
