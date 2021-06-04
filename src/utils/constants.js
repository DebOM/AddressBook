//Reuseable customs and env variables to be used to prevent potential bug
const queryString = require('query-string');

export const randomUserAPI_URL = 'https://randomuser.me/api/';

//This can be used as dynamic query builder for Url string, which takes a url and supplied filters
export const buildUserFilterQuery = (url, filters) => {
  const queryBuilder = queryString.stringifyUrl({
    url,
    query: {
      ...filters,
    },
  });
  return queryBuilder;
};
