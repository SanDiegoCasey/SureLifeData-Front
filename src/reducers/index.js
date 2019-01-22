import {combineReducers} from 'redux'
import user from './user';
import policyReducer from './policyReducer';
import contactsReducer from './contactsReducer';

const rootReducer = combineReducers({
    user,
    policy: policyReducer,
    contact: contactsReducer
})

export default rootReducer
