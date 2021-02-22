import logo from './logo.svg';
import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import FullUser from './Components/FullUser';

import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom';
import UserList from './Components/UsersList';



const App = () => {


    return (
        <Router>
            <div className="App">
                <ul style={{ display: "flex", justifyContent: "space-around", width: "20%", border: "3px solid red", color: "white", backgroundColor: "black" }} >
                    <li><Link to="/home">Home</Link> </li>
                    <li><Link to="/users">Users</Link> </li>
                </ul>
                <Switch>
                    <Route exact path='/'>
                        <h1>Landing Page</h1>
                    </Route>

                    <Route path='/home'>
                        <h1>Home Page</h1>
                    </Route>
                    <Route exact path='/users/'>
                        <UserList />
                    </Route>

                    <Route path='/users/:id'>
                        <FullUser />
                    </Route>
                </Switch>
            </div>
        </Router>
    )
}



export default App;

