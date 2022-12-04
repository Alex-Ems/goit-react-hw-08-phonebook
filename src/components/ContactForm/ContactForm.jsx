import { useDispatch, useSelector } from 'react-redux';
import { addUserData, getContact } from 'redux/slice';

import { nanoid } from 'nanoid';
import css from './ContactForm.module.css';
import { useState } from 'react';

export default function FormContacts() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const contacts = useSelector(getContact);
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
      option => option.name.toLowerCase() === name.toLowerCase()
    );

    if (contactFilter) {
      alert(`${name} is already in contacts.`);
      return;
    }
    const id = nanoid();
    const user = { name, number, id };

    dispatch(addUserData(user));
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
