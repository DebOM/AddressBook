import React, {useEffect, useState} from 'react';
import ContactCard from 'components/ContactCard';
import styled from 'styled-components';
import {List, Divider, ButtonGroup, Button} from '@material-ui/core';
import {randomUserAPI_URL, buildUserFilterQuery} from 'utils/constants';
import Loader from 'components/Loader';
import ErrorBoundary from 'components/ErrorBoundary';
import {Container} from 'components/styledComponents';

const ContactWrapper = styled(List)`
  width: 100%;
  max-width: 360px;
  background-color: #fff;
`;

const NewContacts = ({handleNew}) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  const [filters, setFilters] = useState({
    nat: 'us',
    page: 1,
    results: 4,
    inc: 'name, phone, picture, cell, id, location, gender, email, dob',
    seed: 'abc',
  });

  const handleNext = () => {
    setFilters({...filters, page: filters.page + 1});
  };
  const handlePrev = () => {
    setFilters({...filters, page: filters.page - 1});
  };
  useEffect(() => {
    fetch(buildUserFilterQuery(randomUserAPI_URL, filters))
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err);
      });
  }, [filters]);

  const {results = []} = data;

  if (error) {
    return <ErrorBoundary>{error}</ErrorBoundary>;
  }

  return (
    <>
      Suggestions
      <Container>
        <ErrorBoundary>
          {loading ? (
            <Loader message={'Loading'} />
          ) : (
            <>
              {results &&
                results.map((user) => (
                  <ContactWrapper key={user.phone}>
                    <ContactCard {...user} isSuggestion={true} handleNew={handleNew} />
                    <Divider variant="inset" component="li" />
                  </ContactWrapper>
                ))}
              <ButtonGroup style={{backgroundColor: '#ffffff4d'}} disableElevation variant="contained" color="primary">
                <Button disabled={filters.page === 1} onClick={handlePrev}>
                  Previous Page
                </Button>
                <Button color="primary" onClick={handleNext}>
                  Next Page
                </Button>
              </ButtonGroup>
            </>
          )}
        </ErrorBoundary>
      </Container>
    </>
  );
};

export default NewContacts;
