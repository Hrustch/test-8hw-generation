import React, { useEffect } from 'react';
import { Section } from './Section';
import { PhonebookForm } from './PhonebookForm';
import { PhonebookContacts } from './PhonebookContacts';
import { PhonebookFilter } from './PhonebookFilter';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from 'redux/contactsOperations';

const App = () => {
  const { contacts } = useSelector(state => state);
  const dispatch = useDispatch()
  
  useEffect(()=>{
    console.log()
    dispatch(fetchContacts())
  },[dispatch])

  return (
    <div>
      <Section title="Phonebook">
        <PhonebookForm />
      </Section>
      <Section title="Contacts">
        {contacts?.length > 0 ? (
          <>
            <PhonebookFilter />
            <PhonebookContacts />{' '}
          </>
        ) : (
          <p>No contacts found yet. Please add a new contact!</p>
        )}
      </Section>
    </div>
  );
};

export default App;
