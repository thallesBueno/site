import React from 'react';
import PageTitle from '../../components/pageTitle';
import {
  PageWrapper, ContactsContainer, ContactLink, LinkWrapper,
} from './styles';

const Contact = () => (
  <PageWrapper>
    <div>
      <PageTitle>
        Onde você pode me econtrar?
      </PageTitle>
      <ContactsContainer>
        <LinkWrapper>
          <ContactLink target="_blank" href="https://www.linkedin.com/in/thalles-bueno-721193172">linkedin</ContactLink>
        </LinkWrapper>
        <LinkWrapper>
          <ContactLink target="_blank" href="https://www.instagram.com/buenothalles/">instagram</ContactLink>
        </LinkWrapper>
        <LinkWrapper>
          <ContactLink target="_blank" href="https://github.com/thallesBueno/">github</ContactLink>
        </LinkWrapper>
      </ContactsContainer>
    </div>
  </PageWrapper>
);

export default Contact;
