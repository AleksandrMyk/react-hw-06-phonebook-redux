import React from 'react';
import { connect } from 'react-redux';
import styles from './ContactItem.module.css';
import Actions from '../redux/Actions';

const ContactItem = ({ name, number, onRemoveContact }) => {
  return (
    <li className={styles.item}>
      <div className={styles.contactBox}>
        <div className={styles.text}>
          <p>
            {name}: {number}
          </p>
        </div>
        <div>
          <button
            className={styles.itemBtn}
            onClick={onRemoveContact}
            type="button"
          >
            Delete
          </button>
        </div>
      </div>
    </li>
  );
};

const mapStateToProps = (state, ownProps) => {
  console.log(state);
  const item = state.contacts.items.find(item => item.id === ownProps.id);

  return {
    ...item,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  onRemoveContact: () => dispatch(Actions.removeContact(ownProps.id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactItem);
