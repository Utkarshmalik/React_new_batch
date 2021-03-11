
import {LOGIN_USER_REQUEST_SUCCES} from './actionTypes.js'



const initialState={
    user:null,
};

export const currentUSerReducer=(state=initialState,action)=>
{
    switch(action.type)
    {
        case LOGIN_USER_REQUEST_SUCCES:{

             const {payload}=action;
            return  {user:payload};
        }

        default:{
            return {...state}
        }
    }
}