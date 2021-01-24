import React from 'react';
import ProTypes from 'prop-types';
import styled from 'styled-components';

const StyledButton = styled.button`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  border: none;
  background: ${({ theme }) => theme.colors.textColor};
  outline: none;
  position: fixed;
  top: 16px;
  right: 16px;

  &:hover {
    cursor: pointer;
  }
`;

const ThemeSwitch = ({ onClick }) => (
  <StyledButton onClick={onClick} />
);

ThemeSwitch.propTypes = {
  onClick: ProTypes.func.isRequired,
};

export default ThemeSwitch;
