// import { selectIsLoggedIn } from 'redux/auth/selectors';
import LogoutButton from './LogoutButton';
import useAuth from 'components/hooks/useAuth';

export default function UserMenu() {
  const { user, isLoggedIn } = useAuth();
  if (!isLoggedIn) return null;
  return (
    <div>
      <p>Hi {user.name}!</p>
      <LogoutButton />
    </div>
  );
}
