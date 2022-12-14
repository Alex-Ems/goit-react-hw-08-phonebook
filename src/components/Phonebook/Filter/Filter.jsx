import React from 'react';
import { nanoid } from 'nanoid';
import { useDispatch, useSelector } from 'react-redux';
import { filterContacts } from 'redux/Contacts/filterSlice';

import css from './Filter.module.css';

export const Filter = () => {
  const dispatch = useDispatch();
  const name = useSelector(state => state.filter.data);


  const handlerFilter = evt => {
    dispatch(filterContacts(evt.target.value));
  };

  const filterId = nanoid();

  return (
    <form className={css.container}>
      <label htmlFor={filterId} className={css.filterLabelStyles}>
        Find Contacts by name or number!
        <input
          id={filterId}
          className={css.filterInputStyles}
          type="text"
          name="filter"
          value={name}
          onChange={handlerFilter}
          placeholder="Enter find of name or number"
        />
      </label>
    </form>
  );
};
