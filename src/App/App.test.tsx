import React from 'react';
import {render, screen, waitFor} from '@testing-library/react';
import App from './App';

test('testing initial rendering of the app which will show loading  indicator caused by code Spliting', () => {
  render(<App />);
  const linkElement = screen.getByText(/Loading/i);
  expect(linkElement).toBeInTheDocument();
});

test('testing initial rendering of the app. This time It will render the Address Book page', async () => {
  await waitFor(() => {
    // using Await here to becasue delay is expect due to code spliting
    render(<App />);
  });
  const headerText = await screen.findByText('Address Book');
  expect(headerText).toBeInTheDocument();
});
