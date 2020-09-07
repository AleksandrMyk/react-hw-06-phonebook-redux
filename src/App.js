import React from 'react';
import { CSSTransition } from 'react-transition-group';
import style from './App.module.css';
import ContactForm from './contactForm/ContactForm';
import ContactList from './contactList/ContactList.js';
import ContactFilter from './contactFilter/ContactFilter.js';

export default function App() {
  return (
    <section className={style.sec}>
      <div className={style.box}>
        <CSSTransition
          in={true}
          appear={true}
          classNames={style}
          timeout={1500}
        >
          <h1 className={style.mainTitle}>Phonebook</h1>
        </CSSTransition>
        <ContactForm />
        <ContactFilter />
        <ContactList />
      </div>
    </section>
  );
}
