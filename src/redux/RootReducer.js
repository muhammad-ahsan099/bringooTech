

import {combineReducers} from 'redux';

import AuthReducer from './reducers/AuthReducer';
import RateReducer from './reducers/RateReducer'
const RootReducer =   combineReducers({
    AuthReducer,
    RateReducer
})

export default RootReducer;