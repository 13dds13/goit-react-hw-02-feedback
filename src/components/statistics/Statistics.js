import React from 'react';
import Notification from '../notification/Notification';
import StatisticsData from './statisticsData/StatisticsData';

const Statistics = ({
  countTotalFeedback,
  countPositiveFeedbackPercentage,
  good,
  neutral,
  bad,
  msg,
}) => {
  return countTotalFeedback() ? (
    <StatisticsData
      good={good}
      neutral={neutral}
      bad={bad}
      countTotalFeedback={countTotalFeedback}
      countPositiveFeedbackPercentage={countPositiveFeedbackPercentage}
    />
  ) : (
    <Notification msg={msg} />
  );
};

export default Statistics;
