import React from 'react';
import PropTypes from 'prop-types';

const Notification = ({ msg }) => <p>{msg}</p>;

Notification.propTypes = {
  msg: PropTypes.string,
};

export default Notification;
