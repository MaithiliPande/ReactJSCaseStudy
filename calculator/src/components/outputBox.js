import React from 'react';

class OutputBox extends React.Component {
  render() {
    return (
      <input type="text" disabled="disabled" value={this.props.result} />
    );
  }
}

export default OutputBox;