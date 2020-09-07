import React from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { connect } from 'react-redux';
import styles from './ContactList.module.css';
import ContactItem from '../contactItem/ContactItem';


const ContactList = ({ contacts }) => {
  return (
    <TransitionGroup component="ul" className={styles.list}>
      {contacts.map(({ id }) => (
        <CSSTransition key={id} timeout={250} classNames={styles}>
          <ContactItem id={id} />
        </CSSTransition>
      ))}
    </TransitionGroup>
  );
};

const mapStateToProps = state => ({
  contacts: state.contacts.items.filter(contact =>
    contact.name.toLowerCase().includes(state.contacts.filter.toLowerCase()),
  ),
});

export default connect(mapStateToProps)(ContactList);
