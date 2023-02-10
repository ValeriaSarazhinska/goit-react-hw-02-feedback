import React, { Component } from 'react';
import Statistics from '../Statistics/Statistics';
import FeedbackOptions from '../FeedbackOptions/FeedbackOptions';
import Notification from '../Notification/Notification';
import css from './Feedback.module.css';

class Feedback extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleClick = key => {
    this.setState(prevState => {
      return {
        [key]: prevState[key] + 1,
      };
    });
  };

  countTotalFeedback() {
    return this.state.good + this.state.neutral + this.state.bad;
  }

  countPositiveFeedbackPercentage() {
    const total = this.countTotalFeedback();
    return Math.round((this.state.good / total) * 100 || 0);
  }

  render() {
    const total = this.countTotalFeedback();
    const positiveFeedback = this.countPositiveFeedbackPercentage();
    return (
      <main>
        <div className={css.section}>
          <FeedbackOptions
            options={this.state}
            onLeaveFeedback={this.handleClick}
          />{' '}
          <p className={css.title}>Statistics</p>
          {total ? (
            <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={total}
              positiveFeedback={positiveFeedback}
            />
          ) : (
            <Notification message="There is no feedback" />
          )}
        </div>
      </main>
    );
  }
}

export default Feedback;
