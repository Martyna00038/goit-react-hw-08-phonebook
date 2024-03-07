import { NavLink } from 'react-router-dom';
import useAuth from '../hooks/useAuth';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();
  return (
    <nav>
      <NavLink to="/">Home</NavLink>
      {isLoggedIn && (
        <>
          <NavLink to="/phonebook">Register</NavLink>
        </>
      )}
      {!isLoggedIn && (
        <>
          <NavLink to="/register">Register</NavLink>
          <NavLink to="/login">Log In</NavLink>
        </>
      )}
    </nav>
  );
};
