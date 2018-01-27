import React from 'react';
import { createMarkup } from '../helpers';
const marked = require('marked');

class Preview extends React.Component {

  createMarkup() {
    return {__html: 'First &middot; Second'}
  }

  render() {
    return (
      <div className="col-md-6">
        <h1>Preview</h1>
        <div>
          <span dangerouslySetInnerHTML={ createMarkup(marked(this.props.markdown)) }></span>
        </div>
      </div>
    )
  }
}

export default Preview;
