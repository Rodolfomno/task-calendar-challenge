import React from 'react';
import PropTypes from 'prop-types';

function TaskButton({ isDisabled, btnText, btnType, className, handleClick }) {
  return (
    <div>
      <button
        className={ className }
        type={ btnType }
        disabled={ isDisabled }
        onClick={ handleClick }
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
  isDisabled: PropTypes.bool,
};