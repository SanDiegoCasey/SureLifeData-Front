import axios from 'axios';
import { GET_CONTACTS, DELETE_CONTACT, ADD_CONTACT, ITEMS_LOADING} from './types';

export const getContacts = () => dispatch => {
  dispatch(setContactsLoading);
  axios
    .get('http://localhost:8080/api/contacts/')
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
    .post('http://localhost:8080/api/contacts', contact)
    .then(res => dispatch({
      type: ADD_CONTACT,
      payload: res.data
    }))
  }

export const deleteContact = (id) => dispatch => {
  axios.delete(`http://localhost:8080/api/contacts/${id}`).then(res =>
    dispatch({
      type: DELETE_CONTACT,
      payload: id
    }))
}

export const inviteUser = (email) => dispatch => {
  window.open(`mailto:${email}?subject=Invitation%20to%20SureLifeData&body=I just signed up for SureLifeData and I would like to share my life insurance policy information with you.  Please create an account at surelifedata.com`);
}

export const setContactsLoading = () => {
  return {
    type: ITEMS_LOADING
  }
}
