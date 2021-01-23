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
  left: 16px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  transform: translate(0%, ${({ topOffset }) => -topOffset}%);
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
    font-weight: 700;
  }

  &.active {
    font-weight: 600;
    transform: translate(24px, 0px);
    transition: transform 0.5s;
  }
`;

const LateralNavBar = ({ pages }) => {
  const scrollPosition = useScrollPosition(0);

  return (
    <Container topOffset={scrollPosition}>
      {pages.map((page) => (
        <StyledLink
          activeClass="active"
          to={page.pageId}
          spy
          smooth="linear"
          duration={(distance) => ((Math.abs(distance) / 800) * 150)}
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
