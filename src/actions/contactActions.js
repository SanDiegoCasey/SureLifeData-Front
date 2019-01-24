import axios from 'axios';
import { GET_CONTACTS, DELETE_CONTACT, ADD_CONTACT, CONTACTS_LOADING} from './types';

export const getContacts = () => dispatch => {
  dispatch(setContactsLoading());
  axios
    .get('/api/contacts')
    .then(res =>
      dispatch({
        type: GET_CONTACTS,
        payload: res.data
      }))
};

export const deleteContact = (id) =>  {
  return {
    type: DELETE_CONTACT,
    payload: id
  }
}

export const addContact = contact => {
  return {
    type: ADD_CONTACT,
    payload: contact
  }
}

export const setContactsLoading = () => {
  return {
    type: CONTACTS_LOADING
  }
}
