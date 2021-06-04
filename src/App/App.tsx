import React, {useState} from 'react';
import './App.css';
import AddressBook from 'components/AddressBook';
import NewContacts from 'components/NewContacts';

// currently im defining a context api object with few contacts and passing it down to address book component;
// but in a real project this data will the coming from backend server and sotored in the redux store if threre is a use case for it
export const currentContacts = [
  {
    name: {title: 'Mr', first: 'Robin', last: 'Johnson'},
    picture: {
      large: 'https://randomuser.me/api/portraits/men/56.jpg',
      medium: 'https://randomuser.me/api/portraits/med/men/56.jpg',
      thumbnail: 'https://randomuser.me/api/portraits/thumb/men/56.jpg',
    },
    phone: '123-456-7883',
  },
  {
    name: {title: 'Mrs', first: 'Robin', last: 'Johnson'},
    picture: {
      large: 'https://randomuser.me/api/portraits/thumb/women/11.jpg',
    },
    phone: '123-456-7885',
  },
  {
    name: {title: 'Mr', first: 'David', last: 'Robertson'},
    picture: {},
    phone: '123-456-7889',
  },
];

const App: React.FC = () => {
  const [addressBook, setAddressBook] = useState(currentContacts);
  const updateBook = (newContact: any) => {
    setAddressBook([...addressBook, newContact]);
  };
  return (
    <div className="App">
      <header className="App-header">Address Book</header>
      <h4>
        You are currently looking at address book of all your current contacts. Click on a contact thumbnail below to see more details...
      </h4>
      <AddressBook currentContacts={addressBook} />
      <h4>You can also add a new contact from the recommended contact list below</h4>
      <NewContacts handleNew={updateBook} />
    </div>
  );
};

export default App;
