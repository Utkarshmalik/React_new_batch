



//onLogin 


//action creators are the simple JS functions that actually return the action 
//action is a jS object with type and the data/payload


import { LOGIN_USER_REQUEST_SUCCES } from './actionTypes';

export const onLogin = (user) => {

    return (dispatch) => {
        console.log(user);

        fetch("https://reqres.in/api/login", {
            method: "POST",
            body: JSON.stringify(user),
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if(data.token){
                dispatch({
                    type: LOGIN_USER_REQUEST_SUCCES,
                    payload: user
                })
            }
            })

    }
}

//middlewares : 