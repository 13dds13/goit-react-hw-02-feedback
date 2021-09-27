import React from 'react';

const FeedbackOptions = ({ options, onBtnClick }) => {
  console.log(options);
  return (
    <>
      {options.map(item => (
        <button type="button" data-type={item} onClick={onBtnClick}>
          {item[0].toUpperCase() + item.slice(1, item.length)}
        </button>
      ))}
      {/* <button type="button" data-type="good" onClick={onBtnClick}>
        Good
      </button>
      <button type="button" data-type="neutral" onClick={onBtnClick}>
        Neutral
      </button>
      <button type="button" data-type="bad" onClick={onBtnClick}>
        Bad
      </button> */}
    </>
  );
};

export default FeedbackOptions;
