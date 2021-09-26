import React from 'react';

const FeedbackOptions = ({ onBtnClick }) => {
  return (
    <>
      <button type="button" data-type="good" onClick={onBtnClick}>
        Good
      </button>
      <button type="button" data-type="neutral" onClick={onBtnClick}>
        Neutral
      </button>
      <button type="button" data-type="bad" onClick={onBtnClick}>
        Bad
      </button>
    </>
  );
};

export default FeedbackOptions;
