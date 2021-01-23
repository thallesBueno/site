import React from 'react';
import PropTypes from 'prop-types';
import ChildrenWrapper from './DefaultLayoutStyles';

const DeafaultLayout = ({ children }) => (
  <ChildrenWrapper>
    {children}
  </ChildrenWrapper>
);

DeafaultLayout.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element),
  ]).isRequired,
};

export default DeafaultLayout;
