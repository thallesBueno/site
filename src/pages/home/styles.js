import styled from 'styled-components';

const PageWrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ContentContainer = styled.div`
  text-align: center;
`;

const Title = styled.h1`
  font-weight: 700;
  font-size: 80px;
  text-transform: capitalize;
  color: transparent;
  letter-spacing: 2px;
  -webkit-text-stroke: 2px ${({ theme }) => theme.colors.textColor};
`;

const Subtitle = styled.p`
  padding: 1px 8px;
  margin-bottom: 8px;
  font-weight: 300;
  font-size: 24px;
  letter-spacing: 2px;
  text-transform: capitalize;

  &:hover {
    font-weight: 600;
    cursor: pointer;
  }
`;

export {
  PageWrapper,
  ContentContainer,
  Title,
  Subtitle,
};
