import React from 'react';
import {
  PageWrapper, Title, TitleContainer, ContactsContainer, ContactLink,
} from './ContactStyles';

const Contact = () => (
  <PageWrapper>
    <TitleContainer>
      <Title>
        Where you can
        <br />
        find me?
      </Title>
      <ContactsContainer>
        <ContactLink target="_blank" href="https://www.linkedin.com/in/thalles-bueno-721193172">linkedin</ContactLink>
        <ContactLink target="_blank" href="https://www.instagram.com/buenothalles/">instagram</ContactLink>
        <ContactLink target="_blank" href="https://github.com/thallesBueno/">github</ContactLink>
      </ContactsContainer>
    </TitleContainer>
  </PageWrapper>
);

export default Contact;
