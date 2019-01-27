import axios from 'axios';
import { GET_POLICIES, ADD_POLICY, DELETE_POLICY, ITEMS_LOADING } from './types';

export const getPolicies = () => dispatch => {
  dispatch(setItemsLoading);
  axios
    .get('http://localhost:8080/api/policies/')
    .then(res =>
          dispatch({
        type: GET_POLICIES,
        payload: res.data
      }
    )
  )
};

export const addPolicy = policy => dispatch => {
  axios
    .post('http://localhost:8080/api/policies', policy)
    .then(res => dispatch({
      type: ADD_POLICY,
      payload: res.data
    }))
}

export const deletePolicy = (id) => dispatch => {
  axios.delete(`http://localhost:8080/api/policies/${id}`).then(res =>
    dispatch({
    type: DELETE_POLICY,
    payload: id
  })
  )
};


export const setItemsLoading = () => {
  return {
    type: ITEMS_LOADING
  }
}
