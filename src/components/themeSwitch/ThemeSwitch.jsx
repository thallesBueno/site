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
  top: 32px;
  right: 32px;
  cursor: pointer;
  transition: 0.2s;
  transform: translate(50%, -50%);


  &:hover {
    width: 36px;
    height: 36px;
    transition: 0.2s;
  }
`;

const ThemeSwitch = ({ onClick }) => (
  <StyledButton onClick={onClick} />
);

ThemeSwitch.propTypes = {
  onClick: ProTypes.func.isRequired,
};

export default ThemeSwitch;
