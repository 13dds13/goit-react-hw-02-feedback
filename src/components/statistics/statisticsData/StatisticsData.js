import React from 'react';
import PropTypes from 'prop-types';
import styles from './StatisticalData.module.css';

const StatisticsData = ({
  countTotalFeedback,
  countPositiveFeedbackPercentage,
  good,
  neutral,
  bad,
}) => {
  return (
    <div className={styles.container}>
      <p>Good: {good}</p>
      <p>Neutral: {neutral}</p>
      <p>Bad: {bad}</p>
      <p>Total: {countTotalFeedback()}</p>
      <p>PositiveFeedback: {countPositiveFeedbackPercentage()}%</p>
    </div>
  );
};

StatisticsData.propTypes = {
  countTotalFeedback: PropTypes.func,
  countPositiveFeedbackPercentage: PropTypes.func,
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
};

export default StatisticsData;
