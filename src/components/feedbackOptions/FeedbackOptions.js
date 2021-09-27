import React from 'react';

const FeedbackOptions = ({ options, onBtnClick }) => {
  return (
    <>
      {options.map(item => (
        <button key={item} type="button" data-type={item} onClick={onBtnClick}>
          {item[0].toUpperCase() + item.slice(1)}
        </button>
      ))}
    </>
  );
};

export default FeedbackOptions;
