import React, { Component } from 'react';
import FeedbackOptions from './feedbackOptions/FeedbackOptions';
import Notification from './notification/Notification';
import Section from './section/Section';
import Statistics from './statistics/Statistics';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onBtnClick = evt => {
    const currentBtn = evt.target.dataset.type;
    this.setState({ [currentBtn]: this.state[currentBtn] + 1 });
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = () => {
    const percentage = Math.round(
      (this.state.good * 100) / this.countTotalFeedback(),
    );
    return percentage ? percentage : 0;
  };

  render() {
    const { good, neutral, bad } = this.state;
    return (
      <>
        <Section title={'Please leave Your feedback'}>
          <FeedbackOptions onBtnClick={this.onBtnClick} />
        </Section>
        {!this.countTotalFeedback() && (
          <Section>
            <Notification msg={'No feedback given'} />
          </Section>
        )}
        {!!this.countTotalFeedback() && (
          <Section title={'Statistics'}>
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              countTotalFeedback={this.countTotalFeedback}
              countPositiveFeedbackPercentage={
                this.countPositiveFeedbackPercentage
              }
            />
          </Section>
        )}
      </>
    );
  }
}

export default App;
