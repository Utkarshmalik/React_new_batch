import React,{useState,useEffect} from 'react';

import {Link,useRouteMatch} from 'react-router-dom';



const User=(props)=>{

    let match=useRouteMatch();


    const [isEditMode,changeIsEditMode]=useState(false);
    const [textField,changeTextField]=useState("");

   const  onEdit = () => {
    changeIsEditMode(true);
    changeTextField(props.userDetails.firstName)


    }

   const onSave=()=>
    {
        changeIsEditMode(false);
        props.onEditUser(props.userDetails.id,textField);
    }
   const onTextFieldChange=(e)=>
    {
        changeTextField(e.target.value);
    }

   
       const { email, firstName, lastName, picture, id } =props.userDetails;
        const { onDeleteUser,onEditUser } = props;

        return (
            <Link to={`${match.url}/${id}/`} >
            <div  style={{ border: "5px solid black", display: "inline-block", textAlign: 'center', padding: "20px", margin: "10px" }} >
            
                <img src={picture} />

                {

                    (isEditMode)? <input type="text" value={textField} onChange={(e)=>onTextFieldChange(e)} />  :<h4>{firstName}</h4>

                }

                <p>{email}</p>
                {
                    (isEditMode)?<button onClick={() => onSave()} style={{ border: "3px solid black", margin: "0 10px", padding: "8px 30px", cursor: "pointer" }}>Save User</button>
                    :<button onClick={() => onEdit()} style={{ border: "3px solid black", margin: "0 10px", padding: "8px 30px", cursor: "pointer" }}>Edit User</button>
                }
                <button onClick={() => onDeleteUser(id)} style={{ border: "3px solid black", margin: "0 10px", padding: "8px 30px", cursor: "pointer" }}>Delete User</button>
            </div>
            </Link>

        )

}


export default User;
