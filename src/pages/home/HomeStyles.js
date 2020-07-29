import styled from 'styled-components';

const PageWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${({ theme }) => theme.colors.mainColorContrast};
`;

const TitleContainer = styled.div`
  text-align: center;
`;

const Title = styled.h1`
  font-weight: 600;
  margin-bottom: 24px;
  font-size: 64px;
  letter-spacing: 8px;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.textColorContrast};
`;

const Subtitle = styled.p`
  font-weight: 300;
  font-size: 24px;
  margin-bottom: 4px;
  letter-spacing: 4px;
  text-transform: capitalize;
  color: ${({ theme }) => theme.colors.textColorContrast};

  &:hover {
    font-weight: 600;
  }
`;

export {
  PageWrapper,
  Title,
  TitleContainer,
  Subtitle,
};