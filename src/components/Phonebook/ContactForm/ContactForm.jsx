import { useState } from 'react';
import { nanoid } from 'nanoid';
import { toast } from 'react-toastify';
import { addContact } from 'redux/Contacts/operations';
import { useSelector, useDispatch } from 'react-redux';

import css from './ContactForm.module.css';

export const ContactForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const contacts = useSelector(state => state.contacts.contacts);
  const dispatch = useDispatch();


  const handleChange = e => {
    const { name, value } = e.target;

    switch (name) {
      case 'contactName':
        setName(value);
        break;
      case 'contactNumber':
        setNumber(value);
        break;
      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();

    if (
      contacts?.find(
        contact => contact.name.toLocaleLowerCase() === name.toLocaleLowerCase()
      )
    ) {
      return toast.error(`${name} is already in Phonebook`);
    }
    dispatch(addContact({ name, number }));
    setName('');
    setNumber('');
  };

  const nameId = nanoid();
  const numberId = nanoid();

  return (
    <div className={css.container}>
      <form className={css.formStyles} onSubmit={handleSubmit}>
        <label className={css.labelStyles}>
          Name
          <input
            id={nameId}
            className={css.inputStyles}
            type="text"
            name="contactName"
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
            id={numberId}
            className={css.inputStyles}
            type="tel"
            name="contactNumber"
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
    </div>
  );
};
