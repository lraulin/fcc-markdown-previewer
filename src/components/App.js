import React, { Component } from 'react';
import '../css/App.css';
import Markdown from './Markdown';
import Preview from './Preview'


class App extends Component {
  constructor(props) {
    super(props);

    this.updateText = this.updateText.bind(this);

    // get initial state
    this.state = {
      markdown:
`Heading
=======

Sub-heading
-----------

### Another deeper heading

Paragraphs are separated
by a blank line.

Leave 2 spaces at the end of a line to do a
line break

Text attributes *italic*, **bold**,
\`monospace\`, ~~strikethrough~~ .

Shopping list:

  * apples
  * oranges
  * pears

Numbered list:

  1. apples
  2. oranges
  3. pears

The rain---not the reign---in
Spain.

 *[Herman Fassett](https://freecodecamp.com/hermanfassett)*`
    };
  }

  updateText(newText) {
    this.setState({ markdown: newText });
  }

  render() {
    return (
      <div className="row">
        <Markdown
          markdown={this.state.markdown}
          updateText={this.updateText}
        />
        <Preview
          markdown={this.state.markdown}
        />
      </div>
    );
  }
}

export default App;
