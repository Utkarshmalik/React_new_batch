import React from 'react';





class User extends React.Component {

    constructor(props) {
        super(props);


        this.state = {
            isEditMode: false,
            textField:""
        }
    }

    onEdit = () => {
        console.log(this.props);
        this.setState({isEditMode:true,textField:this.props.userDetails.firstName});

    }

    onSave=()=>
    {
        this.setState({isEditMode:false});

        console.log(this.props.userDetails.id);
        console.log(this.state.textField);


        this.props.onEditUser(this.props.userDetails.id,this.state.textField);
    }

    onTextFieldChange(e)
    {
        this.setState({textField:e.target.value});
    }


    render() {
        const { email, firstName, lastName, picture, id } = this.props.userDetails;
        const { onDeleteUser,onEditUser } = this.props;

        return (
            <div style={{ border: "5px solid black", display: "inline-block", textAlign: 'center', padding: "20px", margin: "10px" }} >
                <img src={picture} />

                {

                    (this.state.isEditMode)? <input type="text" value={this.state.textField} onChange={(e)=>this.onTextFieldChange(e)} />  :<h4>{firstName}</h4>

                }

                <p>{email}</p>
                {
                    (this.state.isEditMode)?<button onClick={() => this.onSave()} style={{ border: "3px solid black", margin: "0 10px", padding: "8px 30px", cursor: "pointer" }}>Save User</button>
                    :<button onClick={() => this.onEdit()} style={{ border: "3px solid black", margin: "0 10px", padding: "8px 30px", cursor: "pointer" }}>Edit User</button>
                }
                <button onClick={() => onDeleteUser(id)} style={{ border: "3px solid black", margin: "0 10px", padding: "8px 30px", cursor: "pointer" }}>Delete User</button>
            </div>
        )

    }

}


export default User;
