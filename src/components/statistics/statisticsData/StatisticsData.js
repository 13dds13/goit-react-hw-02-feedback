import React from 'react';

const StatisticsData = ({
  countTotalFeedback,
  countPositiveFeedbackPercentage,
  good,
  neutral,
  bad,
}) => {
  return (
    <div>
      <p>Good: {good}</p>
      <p>Neutral: {neutral}</p>
      <p>Bad: {bad}</p>
      <p>Total {countTotalFeedback()}</p>
      <p>PositiveFeedback {countPositiveFeedbackPercentage()}%</p>
    </div>
  );
};

export default StatisticsData;
