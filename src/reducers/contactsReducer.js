import uuid from 'uuid';
import { GET_CONTACTS, ADD_CONTACT, DELETE_CONTACT } from '../actions/types';

const initialState = {
  contacts: [
    {id: uuid(),
      img: './square-man1.jpg',
      name: 'John Smith'
    },
    {
      id: uuid(),
      img: './square-man2.jpg',
      name: 'johan Smith'
    },
    {
      id: uuid(),
      img: './square-woman.jpg',
      name: 'Jane Smith'
    }
  ]
}

export default function(state = initialState, action) {
  switch (action.type) {
      case GET_CONTACTS:
        return {
          ...state
        }
      case DELETE_CONTACT:
        return {
            ...state,
            contacts: state.contacts.filter(contact => contact.id !== action.payload)
        }
      case ADD_CONTACT:
        return {
          ...state,
          contacts: [action.payload, ...state.contacts]
        }
      default:
        return state;
  }
}
