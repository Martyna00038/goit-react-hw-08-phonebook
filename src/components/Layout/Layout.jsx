import { Outlet } from 'react-router-dom';
import { Navigation } from 'components/Navigation/Navigation';
import useAuth from '../hooks/useAuth';
import LogoutButton from 'components/UserMenu/LogoutButton';

export default function Layout() {
  const { isLoggedIn } = useAuth();

  return (
    <>
      <div>
        <Navigation />
        {isLoggedIn && <LogoutButton />}
      </div>
      <Outlet />
    </>
  );
}
