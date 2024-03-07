import { Outlet } from 'react-router-dom';
import { Navigation } from 'components/Navigation/Navigation';
import UserMenu from 'components/UserMenu/UserMenu';
import useAuth from '../hooks/useAuth';

export default function Layout() {
  const { isLoggedIn } = useAuth();

  return (
    <>
      <div>
        <Navigation />
        {isLoggedIn && <UserMenu />}
      </div>
      <Outlet />
    </>
  );
}
