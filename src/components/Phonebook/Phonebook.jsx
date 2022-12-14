import { ContactForm } from './ContactForm/ContactForm';
import React from 'react';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import css from './Phonebook.module.css';

const Phonebook = () => {
  return (
    <>
      <div className={css.container}>
        <h1 className={css.titlePhonebook}>Phonebook</h1>
        <ContactForm />
        <h2 className={css.titleContacts}>Contacts</h2>
        <>
          <Filter />
          <ContactList />
        </>
      </div>
    </>
  );
};

export default Phonebook;
