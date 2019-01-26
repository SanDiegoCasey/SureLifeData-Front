import axios from 'axios';
import { GET_CONTACTS, DELETE_CONTACT, ADD_CONTACT, ITEMS_LOADING} from './types';

export const getContacts = () => dispatch => {
  dispatch(setContactsLoading);
  axios
    .get('/api/contacts/')
    .then(res =>
      dispatch({
        type: GET_CONTACTS,
        payload: res.data
      }
    )
  )
};

export const addContact = contact => dispatch => {
  axios
    .post('/api/contacts', contact)
    .then(res => dispatch({
      type: ADD_CONTACT,
      payload: res.data
    }))
  }

export const deleteContact = (id) => dispatch => {
  axios.delete(`api/contacts/${id}`).then(res =>
    dispatch({
      type: DELETE_CONTACT,
      payload: id
    }))
}

export const setContactsLoading = () => {
  return {
    type: ITEMS_LOADING
  }
}
