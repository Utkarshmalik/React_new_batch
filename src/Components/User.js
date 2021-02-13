import React from 'react';


const User=(props)=>
{
    const {email,firstName,lastName,picture}=props.userDetails;

    return(
        <div style={{border:"5px solid black",display:"inline-block",textAlign:'center',padding:"20px",margin:"10px"}} >
        <img src={picture} />
        <h4>{firstName + " " + lastName}</h4>
        <p>{email}</p>
        </div>
    )
}


export default User;
