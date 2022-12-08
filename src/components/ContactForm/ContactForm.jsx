import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addContacts } from 'redux/Contacts/operations';

import css from './ContactForm.module.css';

export default function FormContacts() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const contacts = useSelector(state => state.contacts.contacts);
  const dispatch = useDispatch();

  const handleChange = evt => {
    const { name, value } = evt.target;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        return;
    }
  };

  const handleSubmit = evt => {
    evt.preventDefault();

    const contactFilter = contacts?.some(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );

    if (contactFilter) {
      alert(`${name} is already in contacts.`);
      return;
    }

    const user = { name, number };
    console.log(user);

    dispatch(addContacts(user));
    setName('');
    setNumber('');
  };

  return (
    <>
      <form className={css.formStyles} onSubmit={handleSubmit}>
        <label className={css.labelStyles}>
          Name
          <input
            className={css.inputStyles}
            type="text"
            name="name"
            value={name}
            onChange={handleChange}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            placeholder="Alex"
            required
          />
        </label>
        <label className={css.labelStyles}>
          Number
          <input
            className={css.inputStyles}
            type="tel"
            name="number"
            value={number}
            onChange={handleChange}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            placeholder="111-22-33"
            required
          />
        </label>
        <button className={css.btnAdd} type="submit">
          Add contact
        </button>
      </form>
    </>
  );
}
