import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import useAuth from '../hooks/useAuth';
import { refreshUser } from '../../redux/auth/operations';
import css from './app.module.css';

import Home from 'components/Home/Home';
import Layout from 'components/Layout/Layout';
import LoginForm from 'components/LoginForm/LoginForm';
import Phonebook from 'components/Phonebook/Phonebook';
import PrivateRoute from 'components/PrivateRoute/PrivateRoute';
import ProtectedRoute from 'components/ProtectedRoute/ProtectedRoute';
import RegisterForm from '../RegisterForm/RegisterForm';

export default function App() {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  if (isRefreshing) {
    return <p>loading...</p>;
  }

  return (
    <div className={css.appContainer}>
      <BrowserRouter basename="/goit-react-hw-08-phonebook">
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route
              path="register"
              element={
                <PrivateRoute
                  Component={<RegisterForm />}
                  redirecTo="/contacts"
                />
              }
            />
            <Route
              path="contacts"
              element={
                <ProtectedRoute Component={<Phonebook />} redirecTo="/" />
              }
            />
            <Route
              path="login"
              element={
                <PrivateRoute Component={<LoginForm />} redirecTo="/contacts" />
              }
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
