import React from 'react';
import css from './Notification.module.css';

const Notification = ({ message }) => {
  return <div className={css.message}>{message}</div>;
};

export default Notification;
