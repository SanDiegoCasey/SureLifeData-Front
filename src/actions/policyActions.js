import axios from 'axios';
import { GET_POLICIES, ADD_POLICY, DELETE_POLICY, ITEMS_LOADING } from './types';

export const getPolicies = () => dispatch => {
  dispatch(setItemsLoading);
  axios
    .get('https://desolate-escarpment-23385.herokuapp.com/api/policies/')
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
    .post('https://desolate-escarpment-23385.herokuapp.com/api/policies', policy)
    .then(res => dispatch({
      type: ADD_POLICY,
      payload: res.data
    }))
}

export const deletePolicy = (id) => dispatch => {
  axios.delete(`https://desolate-escarpment-23385.herokuapp.com/api/policies/${id}`).then(res =>
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
