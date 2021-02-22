import React, { useState, useEffect } from 'react';
import '../App.css';
import UserComponent from './User';
import { Spinner } from 'react-bootstrap';
import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom';





const UserList = () => {



    const [textField, changeTextField] = useState("");
    const [allUsers, changeAllUsers] = useState(null);
    const [currentUsers, changeCurrentUsers] = useState(null);


    useEffect(() => {

        console.log("use Effect called");
        fetch("https://dummyapi.io/data/api/user/", {
            method: "GET",
            headers: { "app-id": "5fca5a3236a334a6a8f40cc7" }
        }).then(data => data.json())
            .then(data => {
                const users = data.data;
                changeAllUsers(users);
                changeCurrentUsers(users);
            });

        return () => {
            console.log("COmponent will unmount");
        }
    }, [])

    const {onSortUsers,onResetUsers,renderUserData,onInputChange}=useUserListHook(allUsers,changeAllUsers,currentUsers,changeCurrentUsers,changeTextField);
  

    return (
        <div className="App">
            <h2>User Data</h2>

            <div>
                <input type="text" style={{ width: "400px", height: "25px" }} placeholder="Enter Text Here" value={textField} onChange={(e) => onInputChange(e)} />
                <button onClick={() => onSortUsers()} style={{ border: "3px solid black", margin: "0 10px", padding: "8px 30px", cursor: "pointer" }}>Sort Users</button>
                <button onClick={() => onResetUsers()} style={{ border: "3px solid black", margin: "0 10px", padding: "8px 30px", cursor: "pointer" }}>Reset Users</button>

            </div>

            {
                (currentUsers) ? renderUserData() : <Spinner animation="border" />

            };
        </div>
    )
}

const useUserListHook=(allUsers,changeAllUsers,currentUsers,changeCurrentUsers,changeTextField)=>
{
    const onEditUser = (id, newFirstname) => {
        console.log(id);
        console.log(newFirstname);


        const updatedUsers = [...currentUsers];

        updatedUsers.forEach((user) => {
            if (user.id === id) {
                user.firstName = newFirstname;
            }
        });

        return updatedUsers;
    }

    const onDeleteUser = (id) => {
        console.log(id);

        const updatedUsers = currentUsers.filter((user) => {
            return user.id !== id;
        });

        changeAllUsers(updatedUsers);
    }



    const renderUserData = () => {

        console.log(currentUsers);
        return currentUsers.map((user) => {
            return <UserComponent
                key={user.id}
                userDetails={user}
                onDeleteUser={(id) => onDeleteUser(id)}
                onEditUser={(id, newFirstname) => onEditUser(id, newFirstname)} />
        })
    }



    const onInputChange = (e) => {

        const value = e.target.value;

        changeTextField(value);


        const updatedUsers = allUsers.filter((user) => {
            const fullName = user.firstName + " " + user.lastName;
            return fullName.toLowerCase().startsWith(value);
        });

        changeCurrentUsers(updatedUsers);

    }

    const onResetUsers = () => {
        changeCurrentUsers(allUsers);
    }


    const onSortUsers = () => {
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

        const currentUsersCopy = [...currentUsers];

        currentUsersCopy.sort(compare);

        console.log(currentUsersCopy);

        changeCurrentUsers(currentUsersCopy);

    }


    return {onSortUsers,onResetUsers,renderUserData,onInputChange};
}



export default UserList;


