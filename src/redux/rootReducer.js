import {combineReducers} from 'redux';
import {currentUSerReducer} from './Auth/reducer';


export default combineReducers({
    currentUser:currentUSerReducer
})