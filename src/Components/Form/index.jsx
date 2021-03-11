import React,{useState} from 'react';
import {Redirect} from 'react-router';
import {useDispatch,useSelector} from 'react-redux';
import {onLogin} from '../../redux/Auth/actionCreators'


function LoginForm(props) {

    const dispatch=useDispatch();

    const currentUser=useSelector(state=>state.currentUser);

    console.log(currentUser);



    const [userName,changeUserName]=useState("");
    const [password,changePassword]=useState("");

    const onchangeUserName=(e)=>
    {
        changeUserName(e.target.value);
    }

    const onChangePassword=(e)=>
    {
        changePassword(e.target.value);
    }

    const onSubmit=()=>
    {
        // local sotorage 

        const user={email:userName,password};

        //dispatching the action
        dispatch(onLogin(user));
    }


    return (
        <div>

        {
            (currentUser.user)?<Redirect to='/home'/>: 
            <div style={{display:"flex", flexDirection:"column",padding:"10px",justifyContent:"space-between",alignItems:"center", border:"3px solid black",width:"30%",margin:"0 auto"}} >
            <h3>Login</h3>
            <div>
            <label>UserName</label>
            <input value={userName} onChange={(e)=>onchangeUserName(e)}  type="text"></input>
            </div>
            <div>
            <label>Password</label>
            <input value={password}  onChange={(e)=>onChangePassword(e)}   type="password"></input> 
            </div>
            <input style={{width:"30%",margin:"0 auto"}} type="submit" value="Submit" onClick={()=>onSubmit()}  />
            </div>

        }

        </div>
        
      
    );
}

export default LoginForm;