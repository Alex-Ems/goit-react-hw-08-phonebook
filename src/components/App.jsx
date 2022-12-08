import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import FormContacts from './ContactForm/ContactForm';
import { useSelector } from 'react-redux';

import { Loader } from './Loader/Loader';
import css from './App.module.css';

export const App = () => {
  const loading = useSelector(state => state.contacts.isLoading);

  return (
    <>
      <div className={css.container}>
        <h1 className={css.titlePhonebook}>Phonebook</h1>
        <FormContacts />
        <h2 className={css.titleContacts}>Contacts</h2>
        <>
          <Filter />
          <ContactList />
          {loading && <Loader />}
        </>
      </div>
    </>
  );
};
