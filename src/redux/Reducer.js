import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import Actions from './Actions';

/* redux toolkit--------------------------------------*/
const onAddContact = (state, action) => {
  if (
    state &&
    state.find(contact => action.payload.contact.name === contact.name)
  ) {
    alert('Contact is already on board!!!');
  } else if (
    action.payload.contact.name === '' ||
    action.payload.contact.number === ''
  ) {
    alert(`Be calm and field all fields`);
    return state;
  } else {
    return [...state, action.payload.contact];
  }
};
const onRemoveContact = (state, action) =>
  state.filter(contact => contact.id !== action.payload);

const items = createReducer([], {
  [Actions.addContact]: onAddContact,
  [Actions.removeContact]: onRemoveContact,
});
const filter = createReducer('', {
  [Actions.changeFilter]: (state, action) => action.payload,
});

export default combineReducers({
  items,
  filter,
});

/* без toolkit------------------------------*/
// const items = (state = [], { type, payload }) => {
//   switch (type) {
//     case Actions.addContact:
//       return [...state, payload.contact];

//     case Actions.removeContact.type:
//       return state.filter(contact => contact.id !== payload);

//     default:
//       return state;
//   }
// };

// const filter = (state = '', { type, payload }) => {
//   switch (type) {
//     case Actions.changeFilter.type:
//       return payload;

//     default:
//       return state;
//   }
// };
