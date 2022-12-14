import React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { deleteContact } from 'redux/Contacts/operations';
import css from './Contacts.module.css';

export const ContactItem = ({ data }) => {
  const dispatch = useDispatch();

  const { id, name, number } = data;

  const onDeleteClick = (e, id) => {
    if (id === e.target.id) {
      e.target.textContent = 'Deleting...';
      e.target.setAttribute('disabled', 'true');
    }
    dispatch(deleteContact(id));
  };
  return (
      <li className={css.listContactsItem}>
        <p className={css.contactText}>
          {name.toUpperCase()}: {number}
        </p>
        <button
          type="button"
          className={css.btnDelete}
          id={id}
          onClick={e => onDeleteClick(e, id)}
        >
          Delete
        </button>
      </li>
  );
};

ContactItem.propTypes = {
  data: PropTypes.objectOf(PropTypes.string.isRequired),
};
