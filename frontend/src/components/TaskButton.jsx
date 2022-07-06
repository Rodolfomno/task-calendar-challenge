import React from 'react';
import PropTypes from 'prop-types';

function TaskButton({ isDisabled, btnText, btnType, className }) {
  return (
    <div>
      <button
        className={ className }
        type={ btnType }
        disabled={ true }
      >
        { btnText }
      </button>
    </div>
  );
}

export default TaskButton;

TaskButton.propTypes = {
  className: PropTypes.string.isRequired,
  btnType: PropTypes.string.isRequired,
  btnText: PropTypes.string.isRequired,
  isBtnDisabled: PropTypes.bool,
};