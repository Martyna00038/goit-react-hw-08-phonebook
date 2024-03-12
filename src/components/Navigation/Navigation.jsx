import { NavLink } from 'react-router-dom';
import useAuth from '../hooks/useAuth';
import css from './navigation.module.css';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();
  return (
    <nav>
      <NavLink className={css.navLink} to="/">
        Home
      </NavLink>
      {isLoggedIn && (
        <>
          <NavLink className={css.navLink} to="/contacts">
            Phonebook
          </NavLink>
        </>
      )}
      {!isLoggedIn && (
        <>
          <NavLink className={css.navLink} to="/register">
            Register
          </NavLink>
          <NavLink className={css.navLink} to="/login">
            Log In
          </NavLink>
        </>
      )}
    </nav>
  );
};
