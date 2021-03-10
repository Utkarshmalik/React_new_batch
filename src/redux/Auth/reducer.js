




const initialState={
    user:"utkarsh"
};

export const currentUSerReducer=(state=initialState,action)=>
{
    switch(action.type)
    {
        case"login_user_request_success":{

             const {payload}=action;
            return  {user:payload};
        }

        default:{
            return {...state}
        }
    }
}