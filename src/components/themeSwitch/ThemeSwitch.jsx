import React from 'react';
import ProTypes from 'prop-types';
import styled from 'styled-components';

const StyledButton = styled.button`
  width: 24px;
  height: 24px;
  border-radius: 50%;
  border: none;
  background: ${({ theme }) => theme.colors.textColor};
  outline: none;
  position: fixed;
  top: 16px;
  right: 32px;
`;

const ThemeSwitch = ({ onClick }) => (
  <StyledButton onClick={onClick} />
);

ThemeSwitch.propTypes = {
  onClick: ProTypes.func.isRequired,
};

export default ThemeSwitch;
