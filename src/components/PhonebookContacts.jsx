import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'redux/contactsOperations';


export const PhonebookContacts = () => {
  const dispatch = useDispatch()
  const {contacts, filter} = useSelector(state =>(state))



  const getFilteredContacts = () => {
    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  const deleteContactById = (id) => {
    dispatch(deleteContact(id))
  };

  return (
    <ul>
        {getFilteredContacts().map((contact)=>{
        return <li key={contact.id}>{contact.name}: {contact.number}<button onClick={()=>{deleteContactById(contact.id)}}>x</button></li>        
        })}
    </ul>
  );
};
