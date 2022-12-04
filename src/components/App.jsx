import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import FormContacts from './ContactForm/ContactForm';
import { getContact } from 'redux/slice';
import { useSelector } from 'react-redux';

import css from './App.module.css';

export const App = () => {
  const array = useSelector(getContact);
  return (
    <>
      <div className={css.container}>
        <h1 className={css.titlePhonebook}>Phonebook</h1>
        <FormContacts />
        <h2 className={css.titleContacts}>Contacts</h2>
        {array.length === 0 ? (
          <p className={css.description}>Please, enter your first contact</p>
        ) : (
          <>
            <Filter />
            <ContactList />
          </>
        )}
      </div>
    </>
  );
};
