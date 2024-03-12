import LogoutButton from './LogoutButton';
import useAuth from 'components/hooks/useAuth';
// import css from './usermenu.module.css';

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
