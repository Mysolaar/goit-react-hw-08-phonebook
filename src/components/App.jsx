import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from "react";

import Container from './Container/Container';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';

import { fetchContacts } from 'redux/operations';
import { selectIsLoading, selectError } from 'redux/selectors.js';
import css from "./App.module.css";

export const App = () => {
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts())
  }, [dispatch]);

  return (
  <>
    {error && <p>{error}</p>}

      {isLoading ? (<div className={css.app__container} >
            <Container>
              <h1>Phonebook</h1>
              <ContactForm />
              <h2>Contacts</h2>
              <Filter />
              <p className={css.loading}>Wait while contacts are loading... </p>
            </Container>
          </div>)
        :
        (
          <div className={css.app__container} >
            <Container>
              <h1>Phonebook</h1>
              <ContactForm />
              <h2>Contacts</h2>
              <Filter />
              <ContactList />
            </Container>
          </div>
        )
      };
  </>
  )
};