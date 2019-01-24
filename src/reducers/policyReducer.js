import uuid from 'uuid';
import { GET_POLICIES, ADD_POLICY, DELETE_POLICY, EDIT_POLICY, POLICIES_LOADING } from '../actions/types';

const initialState = {
  policies:  [],
  loading: false
}

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_POLICIES:
      return {
        ...state,
        items: action.payload,
        loading: false
      }
    case DELETE_POLICY:
      return {
        ...state,
        policies: state.policies.filter(policy => policy.id !== action.payload)
      }
    case ADD_POLICY:
      return {
        ...state,
        policies: [action.payload, ...state.policies]
      }
    case POLICIES_LOADING:
      return {
        ...state,
        loading: true
      }
    default:
      return state;
  }
}
