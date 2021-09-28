import React from 'react';
import PropTypes from 'prop-types';
import styles from './FeedbackOptions.module.css';

const FeedbackOptions = ({ options, onBtnClick }) => {
  return (
    <div className={styles.container}>
      {options.map(item => (
        <button
          className={styles.btn}
          key={item}
          type="button"
          name={item}
          onClick={onBtnClick}
        >
          {item[0].toUpperCase() + item.slice(1)}
        </button>
      ))}
    </div>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string),
  onBtnClick: PropTypes.func,
};

export default FeedbackOptions;
