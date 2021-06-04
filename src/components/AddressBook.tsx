import React from 'react';
import ContactCard from 'components/ContactCard';
import styled from 'styled-components';
import {List, Divider} from '@material-ui/core';
import ErrorBoundary from 'components/ErrorBoundary';
import {Container} from 'components/styledComponents';
interface Props {
  currentContacts: Array<userType>;
}

interface userType {
  name: {
    title: string;
    first: string;
    last: string;
  };
  picture: any;
  phone: string;
}

const ContactWrapper = styled(List)`
  width: 100%;
  max-width: 360px;
  background-color: #fff;
`;

const AddressBook: React.FC<Props> = ({currentContacts}) => {
  return (
    <React.Fragment>
      Book
      <Container maxHeight={'330px'}>
        <ErrorBoundary>
          {currentContacts &&
            currentContacts.map((user: userType) => (
              <ContactWrapper key={user.phone}>
                <ContactCard {...user} isSuggestion={false} />
                <Divider variant="inset" component="li" />
              </ContactWrapper>
            ))}
        </ErrorBoundary>
      </Container>
    </React.Fragment>
  );
};

export default AddressBook;
