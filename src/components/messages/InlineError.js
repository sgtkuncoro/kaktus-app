import React from 'react';
import PropTypes from 'prop-types';

const InlineError = ({text}) => <span style={{color: "#ae5856"}}>{text}</span>;

// propTypes not equal proptypes
InlineError.protoType = {
    text: PropTypes.string.isRequired
}

export default InlineError;