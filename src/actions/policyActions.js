import { GET_POLICIES, ADD_POLICY, DELETE_POLICY, EDIT_POLICY } from './types';

export const getPolicies = () => {
  return {
    type: GET_POLICIES,
  };
};

export const deletePolicy = (id) => {
  return {
    type: DELETE_POLICY,
    payload: id
  };
};
