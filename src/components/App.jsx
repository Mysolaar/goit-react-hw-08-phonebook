import { useEffect, lazy } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { PrivateRoute } from '../utils/PrivateRoute';
import { RestrictedRoute } from '../utils/RestrictedRoute';
import { refreshUser } from 'redux/auth/operations';
import { Layout } from './Layout/Layout';
import { useAuth } from '../hooks/useAuth';

const HomePage = lazy(() => import('../pages/Home.jsx'));
const RegisterPage = lazy(() => import('../pages/Register.jsx'));
const LoginPage = lazy(() => import('../pages/Login.jsx'));
const ContactsPage = lazy(() => import('../pages/Contacts.jsx'));

export const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <b>Refreshing user...</b>
  ) : (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route
          path="/register"
          element={
            <RestrictedRoute redirectTo="/contacts" component={<RegisterPage />} />
          }
        />
        <Route
          path="/login"
          element={
            <RestrictedRoute redirectTo="/contacts" component={<LoginPage />} />
          }
        />
        <Route
          path="/contacts"
          element={
            <PrivateRoute redirectTo="/login" component={<ContactsPage />} />
          }
        />
        </Route>
      <Route path="*" element={<HomePage />} />
    </Routes>
  );
};