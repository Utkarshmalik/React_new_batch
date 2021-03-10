import logo from './logo.svg';
import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom';
import HomePage from './Components/HomePage';
import ThemeContextProvider from './Contexts/ThemeContextProvider';
import Login from './Components/Form';
import {Provider} from 'react-redux';
import {store} from './Store';

const App = () => {
    return (
        <Router>
        <Provider store={store}>
        <ThemeContextProvider>
            <div className="App">
                <ul style={{ display: "flex", justifyContent: "space-around", width: "20%", border: "3px solid red", color: "white", backgroundColor: "black" }} >
                    <li><Link to="/home">Home</Link> </li>
                   
                </ul>
                <Switch>
                    <Route exact path='/'>
                        <h1>Landing Page</h1>
                    </Route>

                    <Route path='/login'>
                       <Login/>
                    </Route>

                    <Route path='/home'>
                       <HomePage/>
                    </Route>
                    {
                    // <Route exact path='/products'>
                    //     <UserList />
                    // </Route>

                    // <Route path='/users/:id'>
                    //     <FullUser />
                    // </Route>
                    }
                </Switch>
            </div>
            </ThemeContextProvider>
            </Provider>
        </Router>
    )
}



export default App;

