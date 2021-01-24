import React from 'react';
import ProTypes from 'prop-types';
import styled from 'styled-components';
import { Link } from 'react-scroll';

import useScrollPosition from '../../utils/hooks/useScrollPosition';

const Container = styled.div`
  border: none;
  background: transparent;
  outline: none;
  position: fixed;
  top: 50%;
  right: 24px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  transform: translate(0%, -50%);
`;

const Circle = styled.div`
  position: absolute;
  right: -20px;
  top: calc(${({ topOffset }) => topOffset * 0.91}% + 12px);
  width: 8px;
  height: 8px;
  transform: translate(-50%,-50%);
  border-radius: 50%;
  background: ${({ theme }) => theme.colors.mainColorContrast};  
`;

const StyledLink = styled(Link)`
  position: relative;
  font-size: 20px;
  color: ${({ theme }) => theme.colors.textColor};
  transition: transform 0.5s;
  margin-bottom: 32px;

  &:last-of-type {
    margin-bottom: 0px;
  }

  &:hover {
    cursor: pointer;
    font-weight: 600;
  }

  &.active {
    font-weight: 700;
    transition: transform 0.5s;
  }
`;

const LateralNavBar = ({ pages }) => {
  const scrollPosition = useScrollPosition(0);

  return (
    <Container>
      <Circle topOffset={scrollPosition} />
      {pages.map((page) => (
        <StyledLink
          activeClass="active"
          to={page.pageId}
          spy
          smooth="linear"
          duration={(distance) => ((Math.abs(distance) / 800) * 50) + 200}
          key={page.pageId}
        >
          {page.pageName}
        </StyledLink>
      ))}
    </Container>
  );
};

LateralNavBar.propTypes = {
  pages: ProTypes.arrayOf(ProTypes.objectOf(ProTypes.any)).isRequired,
};

export default LateralNavBar;
