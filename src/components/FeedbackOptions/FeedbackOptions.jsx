import React from 'react';
import css from './FeedbackOptions.module.css';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  const keys = Object.keys(options);
  return (
    <div>
      <p className={css.text}>Please leave feedback</p>
      {keys.map(key => (
        <button
          className={css.button}
          key={key}
          name={key}
          type="button"
          onClick={onLeaveFeedback}
        >
          {key}
        </button>
      ))}
    </div>
  );
};

export default FeedbackOptions;
