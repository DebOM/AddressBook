import {render, screen} from '@testing-library/react';
import AddressBook from './AddressBook';
import {currentContacts} from 'App/App';

test('should display text Book when the Address Book component is rendered', () => {
  render(<AddressBook currentContacts={[]} />);
  const header = screen.getByText(/Book/i);
  expect(header).toBeInTheDocument();
});

test('should not display any contact when address book is rendered with zero contacts', async () => {
  render(<AddressBook currentContacts={[]} />);
  const contact = screen.queryByText('Mr Robin');
  expect(contact).toBeNull(); // it doesn't exist
});

test('should the contact RObin when address book is rendered with few users', async () => {
  render(<AddressBook currentContacts={[...currentContacts]} />);
  const contact = await screen.findByText(/Mr Robin Johnson/i);
  expect(contact).toBeInTheDocument();
});
