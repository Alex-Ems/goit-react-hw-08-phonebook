import { useSelector, useDispatch } from 'react-redux';
import { ContactItem } from './ContactItem';
import css from './Contacts.module.css';
import { useEffect } from 'react';
import { fetchContacts } from 'redux/Contacts/operations';

export const ContactList = () => {
  const contacts = useSelector(state => state.contacts.contacts);
  const dispatch = useDispatch();
  const filter = useSelector(state => state.filter.data);

   useEffect(() => {
     dispatch(fetchContacts());
   }, [dispatch]);

  const getFilteredContacts = () => {
    if (!filter) {
      return contacts;
    }
    return contacts.filter(
      ({ name, number }) =>
        name.toLocaleLowerCase().includes(filter.toLocaleLowerCase()) ||
        number.includes(filter)
    );
  };

  const contactsToRender = getFilteredContacts();
  
  return (
    <div className={css.container}>
      <ul className={css.listContacts}>
        {contactsToRender?.map(item => (
          <ContactItem key={item.id} data={item} />
        ))}
      </ul>
    </div>
  );
};
