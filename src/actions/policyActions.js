import axios from 'axios';
import { GET_POLICIES, ADD_POLICY, DELETE_POLICY, EDIT_POLICY, POLICIES_LOADING } from './types';

export const getPolicies = () => dispatch => {
  dispatch(setPoliciesLoading());
  axios
    .get('http/api/policies')
    .then(res =>
      dispatch({
        type: GET_POLICIES,
        payload: res.data
      }))
};

export const deletePolicy = (id) => {
  return {
    type: DELETE_POLICY,
    payload: id
  };
};

export const addPolicy = policy => {
  return {
    type: ADD_POLICY,
    payload: policy
  }
}

export const setPoliciesLoading = () => {
  return {
    type: POLICIES_LOADING
  }
}
