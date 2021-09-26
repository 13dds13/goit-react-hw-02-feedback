import React from 'react';

const Statistics = ({
  countTotalFeedback,
  countPositiveFeedbackPercentage,
  good,
  neutral,
  bad,
}) => {
  return (
    <>
      <p>Good: {good}</p>
      <p>Neutral: {neutral}</p>
      <p>Bad: {bad}</p>
      <p>Total {countTotalFeedback()}</p>
      <p>PositiveFeedback {countPositiveFeedbackPercentage()}%</p>
    </>
  );
};

export default Statistics;
