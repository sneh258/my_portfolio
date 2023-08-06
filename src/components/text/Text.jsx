import React from 'react';
import PropTypes from 'prop-types';

function Text({ text }) {
  return (
    <div className='border-2 border-orange-600 h-fit w-fit inline-block p-2'>{text}
    </div>
  );
}

Text.propTypes = {
  text: PropTypes.string.isRequired,

};

export default Text;