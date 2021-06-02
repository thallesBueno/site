import styled from 'styled-components';

const PageWrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ContactsContainer = styled.div`
  display: flex;
  width: 500px;
  margin-top: 64px;
`;

const ContactLink = styled.a`
  font-size: 16px;
  text-transform: capitalize;
  text-decoration: none;
  text-align: center;

  &:hover {
    font-weight: 700;
  }
`;

const LinkWrapper = styled.div`
  height: 20px;
  flex: 1;
  display: flex;
  justify-content: center;
`;

export {
  PageWrapper,
  ContactsContainer,
  ContactLink,
  LinkWrapper,
};
