import { useDispatch, useSelector } from 'react-redux';
import { filterContact, getFilter } from 'redux/slice';

import css from './Filter.module.css'

export const Filter = () => {
  const name = useSelector(getFilter);
  const dispatch = useDispatch();

  const handlerFilter = evt => {
    dispatch(filterContact(evt.target.value));
  };

  return (
    <form>
      <label className={css.filterLabelStyles}>
        Find Contacts by name or number!
        <input
          className={css.filterInputStyles}
          type="text"
          name="name"
          value={name}
          onChange={handlerFilter}
        />
      </label>
    </form>
  );
};
