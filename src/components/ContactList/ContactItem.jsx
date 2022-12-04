import PropTypes from 'prop-types';
import css from './Contacts.module.css';

export const ContactItem = ({ id, name, number, onDelete }) => {
  return (
    <li className={css.listContactsItem} key={id}>
      <p>
        {name.toUpperCase()}: {number}
      </p>
      <button className={css.btnDelete} onClick={() => onDelete(id)}>
        Delete
      </button>
    </li>
  );
};

ContactItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
};
