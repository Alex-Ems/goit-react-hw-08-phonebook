import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getAuth } from 'redux/Auth/authSlice';
import { logoutUser } from 'redux/Auth/authOperations';
import { NavLink, useNavigate } from 'react-router-dom';
import css from '../UserMenu/UserMenu.module.css';

export const UserMenu = () => {
  const { contacts, isLoggedIn } = useSelector(getAuth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onLogoutClick = () => {
    dispatch(logoutUser());
    navigate('/login');
  };

  const getClassName = ({ isActive }) => {
    return isActive ? `${css.link} ${css.active}` : css.link;
  };

  return (
    <nav className={css.navigate}>
      {isLoggedIn && (
        <NavLink className={css.link} to="/contacts">
          Contacts
        </NavLink>
      )}
      {isLoggedIn ? (
        <div className={css.userNav}>
          <p className={css.greeting}>{`Welcome, ${contacts.name}!`}</p>
          <button className={css.link} type="button" onClick={onLogoutClick}>
            Log Out
          </button>
        </div>
      ) : (
        <div className={css.loginNav}>
          <NavLink className={getClassName} to="/register">
            Sign Up
          </NavLink>
          <NavLink className={getClassName} to="/login">
            Log In
          </NavLink>
        </div>
      )}
    </nav>
  );
};
