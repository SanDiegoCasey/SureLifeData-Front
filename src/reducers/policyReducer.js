import uuid from 'uuid';
import { GET_POLICIES, ADD_POLICY, DELETE_POLICY, EDIT_POLICY } from '../actions/types';

const initialState = {
  policies:  [
      {id: uuid(),
        company: 'Thug Life',
        typeofins: 'whole life',
        policynum: "234234",
        contactnum: "23423423",
        value: "$500,000"
      },
      {id: uuid(),
        company: 'Mollies Policies',
        typeofins: 'term',
        policynum: "whodat",
        contactnum: "dere",
        value: "1 Million dollars bwahahaha"
      },
      {id: uuid(),
        company: 'Fo Surance',
        typeofins: 'disability',
        policynum: "asdfasfasdf",
        contactnum: "u2b34",
        value: "bout tree fity"
      }
    ]
}

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_POLICIES:
      return {
        ...state
      }
    default:
      return state;
  }
}
