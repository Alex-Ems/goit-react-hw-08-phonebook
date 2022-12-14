import { useSelector, useDispatch } from 'react-redux';
import { getAuth } from 'redux/Auth/authSlice';
import { registerUser } from 'redux/Auth/authOperations';
import css from '../ContactForm/ContactForm.module.css';
import { Loader } from '../Loader/Loader';

const RegisterForm = () => {
  const dispatch = useDispatch();

  const { isLoading } = useSelector(getAuth);

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      registerUser({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <div className={css.container}>
      <form
        className={css.formStyles}
        onSubmit={handleSubmit}
        autoComplete="off"
      >
        <label className={css.labelStyles}>
          Name
          <input
            type="text"
            name="name"
            className={css.inputStyles}
            placeholder="Nick Name"
          />
        </label>
        <label className={css.labelStyles}>
          Email
          <input
            type="email"
            name="email"
            className={css.inputStyles}
            placeholder="mango@mail.com"
          />
        </label>
        <label className={css.labelStyles}>
          Password
          <input
            type="password"
            name="password"
            className={css.inputStyles}
            placeholder="You password"
          />
        </label>
        {!isLoading ? (
          <button type="submit" className={css.btnLog}>
            Sign Up
          </button>
        ) : (
          <Loader />
        )}
      </form>
    </div>
  );
};

export default RegisterForm;
