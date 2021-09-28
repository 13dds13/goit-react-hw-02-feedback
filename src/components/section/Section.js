import React from 'react';
import PropTypes from 'prop-types';
import styles from './Section.module.css';

const Section = ({ children, title }) => {
  return (
    <section className={styles.container}>
      {title && <h2 className={styles.title}>{title}</h2>}
      {children}
    </section>
  );
};

Section.propTypes = {
  children: PropTypes.node,
  title: PropTypes.string,
};

export default Section;
