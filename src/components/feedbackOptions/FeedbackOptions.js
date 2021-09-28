import React from 'react';
import PropTypes from 'prop-types';

const FeedbackOptions = ({ options, onBtnClick }) => {
  return (
    <>
      {options.map(item => (
        <button key={item} type="button" name={item} onClick={onBtnClick}>
          {item[0].toUpperCase() + item.slice(1)}
        </button>
      ))}
    </>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string),
  onBtnClick: PropTypes.func,
};

export default FeedbackOptions;
