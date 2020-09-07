import { v4 as uuid } from 'uuid';
import { createAction } from '@reduxjs/toolkit';

/* redux toolkit--------------------------------------*/

const addContact = createAction('contact/add', (name, number) => ({
  payload: {
    contact: {
      id: uuid(),
      name: name,
      number: number,
    },
  },
}));

const removeContact = createAction('contact/remove');
const changeFilter = createAction('contact/filter');

/*без toolkit------------------------------*/

// const addContact = (name, number) => ({
//   type: actionTypes.ADD,
//   payload: {
//     contact: {
//       id: uuid(),
//       name: name,
//       number: number,
//     },
//   },
// });

// const removeContact = id => ({
//   type: actionTypes.REMOVE,
//   payload: {
//     id,
//   },
// });

// const showAlert = alert => ({
//   type: actionTypes.ALERT,
//   payload: {
//     alert,
//   },
// });

// const changeFilter = filter => ({
//   type: actionTypes.FILTER,
//   payload: {
//     filter,
//   },
// });

export default {
  addContact,
  removeContact,
  // showAlert,
  changeFilter,
};
