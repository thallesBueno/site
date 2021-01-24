import styled from 'styled-components';

const PageWrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const TitleContainer = styled.div`
  text-align: center;
`;

const Title = styled.h1`
  font-weight: 600;
  margin-bottom: 64px;
  font-size: 48px;
  letter-spacing: 8px;
  text-transform: uppercase;
`;

const ContactsContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ContactLink = styled.a`
  font-size: 20px;
  letter-spacing: 4px;
  text-transform: capitalize;
  text-decoration: none;
`;

export {
  PageWrapper,
  Title,
  TitleContainer,
  ContactsContainer,
  ContactLink,
};
