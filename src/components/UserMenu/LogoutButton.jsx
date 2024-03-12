import { useDispatch } from 'react-redux';
import { logout } from '../../redux/auth/operations';
import css from './logoutbutton.module.css';

export default function LogoutButton() {
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(logout());
  };
  return (
    <button className={css.logoutButton} onClick={handleLogout}>
      Logout
    </button>
  );
}
