import React from 'react';
import PropTypes from 'prop-types';

const OutputBox = props => (
  <input type="text" disabled="disabled" value={props.result} />
);

OutputBox.propTypes = {
  result: PropTypes.string.isRequired,
};
export default OutputBox;
