import { useDispatch } from 'react-redux';
import { logout } from '../../redux/auth/operations';

export default function LogoutButton() {
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(logout());
  };
  return <button onClick={handleLogout}>Logout</button>;
}
