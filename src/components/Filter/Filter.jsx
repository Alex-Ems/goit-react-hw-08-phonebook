import { useDispatch, useSelector } from 'react-redux';
import { filterContacts } from 'redux/Contacts/filterSlice';

import css from './Filter.module.css'

export const Filter = () => {
  const name = useSelector(state => state.filter.data);
  const dispatch = useDispatch();

  const handlerFilter = evt => {
    dispatch(filterContacts(evt.target.value));
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
