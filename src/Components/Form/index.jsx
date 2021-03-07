import React,{useState} from 'react';

function LoginForm(props) {

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

        const user={userName,password};

        localStorage.setItem("user",JSON.stringify(user));

    
    }


    return (
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
    );
}

export default LoginForm;