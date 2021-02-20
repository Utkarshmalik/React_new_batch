import React from 'react';
import '../App.css';
import UserComponent from './User';
import {Spinner} from 'react-bootstrap';

import {BrowserRouter as Router ,Link,Switch,Route} from 'react-router-dom';



const renderUserData = () => {

return this.state.allUsers.map((user) => {
    return <UserComponent key={user.id} userDetails={user} />;
})
}

class App extends React.Component {

constructor(props) {
    super(props);
    console.log("Inside Constructor");

    //state - is a JS object where we store key value pairs that belongs to my component 
    //any data in my application resides in my state

    this.state = {
        textField: "",
        allUsers:null,
        currentUsers:null
    }
}



componentDidMount()
{
    console.log('Inside Component Did Mount');
    
    fetch("https://dummyapi.io/data/api/user",{
        method:"GET",
        headers:{"app-id":"5fca5a3236a334a6a8f40cc7"}
    }).then(data=>data.json())
    .then(data=>{
        const users=data.data;
        this.setState({allUsers:users,currentUsers:users});
    }
    );
}


onEditUser=(id,newFirstname)=>
{
    console.log(id);
    console.log(newFirstname);


    const updatedUsers=[...this.state.currentUsers];

    updatedUsers.forEach((user)=>
    {
        if(user.id===id)
        {
            user.firstName=newFirstname;
        }
    });

    return updatedUsers;
}




onDeleteUser = (id) => {
    console.log(id);

    const updatedUsers=this.state.currentUsers.filter((user)=>
    {
        return user.id!==id;
    });

    this.setState({currentUsers:updatedUsers});
}



renderUserData() {
    return this.state.currentUsers.map((user) => {
        return <UserComponent 
        key={user.id} 
        userDetails={user} 
        onDeleteUser={(id) => this.onDeleteUser(id)}
        onEditUser={(id,newFirstname)=>this.onEditUser(id,newFirstname)} />
    })
}

onInputChange(e) {

    const value = e.target.value;

    this.setState({ textField: value });


    const updatedUsers = this.state.allUsers.filter((user) => {
        const fullName = user.firstName + " " + user.lastName;
        return fullName.toLowerCase().startsWith(value);
    });

    this.setState({ currentUsers: updatedUsers });


}

onResetUsers() {
    this.setState({ currentUsers: this.state.allUsers });
}


onSortUsers() {
    function compare(user1, user2) {
        const name1 = user1.firstName.toLowerCase();
        const name2 = user2.firstName.toLowerCase();
        if (name1 < name2) {
            return -1;
        }
        if (name1 > name2) {
            return 1;
        }
        return 0;
    }

    const currentUsersCopy = [...this.state.currentUsers];

    currentUsersCopy.sort(compare);

    console.log(currentUsersCopy);

    this.setState({ currentUsers: currentUsersCopy });
}

render() {
    console.log('Inside Render Menthod');
    return (
        <div className="App">
            <h2>User Data</h2>

            <div>
                <input type="text" style={{ width: "400px", height: "25px" }} placeholder="Enter Text Here" value={this.state.textField} onChange={(e) => this.onInputChange(e)} />
                <button onClick={() => this.onSortUsers()} style={{ border: "3px solid black", margin: "0 10px", padding: "8px 30px", cursor: "pointer" }}>Sort Users</button>
                <button onClick={() => this.onResetUsers()} style={{ border: "3px solid black", margin: "0 10px", padding: "8px 30px", cursor: "pointer" }}>Reset Users</button>

            </div>

            {(this.state.allUsers)?this.renderUserData():<Spinner animation="border" />};
        </div>
    )
}

}



export default App;


