import logo from './logo.svg';
import React from 'react';
import './App.css';
import Heading from './heading';
import UserComponent from './Components/User';



const UserList = [
    {
        "id": "0F8JIqi4zwvb77FGz6Wt",
        "lastName": "Fiedler",
        "firstName": "Heinz-Georg",
        "email": "heinz-georg.fiedler@example.com",
        "title": "mr",
        "picture": "https://randomuser.me/api/portraits/men/81.jpg"
    },
    {
        "id": "0P6E1d4nr0L1ntW8cjGU",
        "picture": "https://randomuser.me/api/portraits/women/74.jpg",
        "lastName": "Hughes",
        "email": "katie.hughes@example.com",
        "title": "miss",
        "firstName": "Katie"
    },
    {
        "id": "1Lkk06cOUCkiAsUXFLMN",
        "title": "mr",
        "lastName": "Aasland",
        "firstName": "Vetle",
        "picture": "https://randomuser.me/api/portraits/men/97.jpg",
        "email": "vetle.aasland@example.com"
    },
    {
        "id": "1OuR3CWOEsfISTpFxsG7",
        "picture": "https://randomuser.me/api/portraits/men/66.jpg",
        "lastName": "Vasquez",
        "email": "dylan.vasquez@example.com",
        "title": "mr",
        "firstName": "Dylan"
    },
    {
        "id": "1pRsh5nXDIH3pjEOZ17A",
        "lastName": "Vicente",
        "title": "miss",
        "firstName": "Margarita",
        "email": "margarita.vicente@example.com",
        "picture": "https://randomuser.me/api/portraits/women/5.jpg"
    },
    {
        "id": "3JAf8R85oIlxXd58Piqk",
        "email": "joey.oliver@example.com",
        "title": "mr",
        "firstName": "Joey",
        "lastName": "Oliver",
        "picture": "https://randomuser.me/api/portraits/men/61.jpg"
    },
    {
        "id": "5aZRSdkcBOM6j3lkWEoP",
        "picture": "https://randomuser.me/api/portraits/women/50.jpg",
        "email": "lilja.lampinen@example.com",
        "lastName": "Lampinen",
        "firstName": "Lilja",
        "title": "ms"
    },
    {
        "id": "5tVxgsqPCjv2Ul5Rc7gw",
        "email": "abigail.liu@example.com",
        "lastName": "Liu",
        "title": "miss",
        "picture": "https://randomuser.me/api/portraits/women/83.jpg",
        "firstName": "Abigail"
    },
    {
        "id": "6wy6UNkZueJfIUfq88d5",
        "picture": "https://randomuser.me/api/portraits/women/32.jpg",
        "firstName": "Melanie",
        "email": "melanie.pilz@example.com",
        "title": "miss",
        "lastName": "Pilz"
    },
    {
        "id": "7DbXNPWlNDR4QYVvFZjr",
        "email": "evan.carlson@example.com",
        "firstName": "Evan",
        "picture": "https://randomuser.me/api/portraits/men/80.jpg",
        "lastName": "Carlson",
        "title": "mr"
    },
    {
        "id": "8RQd4OVqvmV0I4UlWETQ",
        "email": "kitty.steward@example.com",
        "title": "ms",
        "firstName": "Kitty",
        "picture": "https://randomuser.me/api/portraits/women/78.jpg",
        "lastName": "Steward"
    },
    {
        "id": "8UfTdB7ctWt3Fl87d88Q",
        "firstName": "Vanessa",
        "picture": "https://randomuser.me/api/portraits/women/33.jpg",
        "email": "vanessa.ramos@example.com",
        "lastName": "Ramos",
        "title": "ms"
    },
    {
        "id": "8YL1aG0vwRBXTzeZ0jRC",
        "picture": "https://randomuser.me/api/portraits/women/85.jpg",
        "firstName": "Olaí",
        "email": "olai.gomes@example.com",
        "title": "mrs",
        "lastName": "Gomes"
    },
    {
        "id": "9N03J6vQj6MFq2UpUanW",
        "email": "constance.bourgeois@example.com",
        "lastName": "Bourgeois",
        "firstName": "Constance",
        "title": "miss",
        "picture": "https://randomuser.me/api/portraits/women/87.jpg"
    },
    {
        "id": "CNYttp1Jrgg3I2zfSeS4",
        "email": "kenneth.carter@example.com",
        "picture": "https://randomuser.me/api/portraits/men/40.jpg",
        "lastName": "Carter",
        "firstName": "Kenneth",
        "title": "mr"
    },
    {
        "id": "EiYwv4wPYXfKgEKyTUyN",
        "title": "mr",
        "firstName": "Sigmund",
        "picture": "https://randomuser.me/api/portraits/men/61.jpg",
        "lastName": "Myran",
        "email": "sigmund.myran@example.com"
    },
    {
        "id": "EvXSjRCdYryxUp3j1Akj",
        "picture": "https://randomuser.me/api/portraits/women/3.jpg",
        "email": "josefina.calvo@example.com",
        "lastName": "Calvo",
        "title": "mrs",
        "firstName": "Josefina"
    },
    {
        "id": "FLgxIsydJ28gBIIKZeMg",
        "email": "annabel.somby@example.com",
        "title": "ms",
        "firstName": "Annabel",
        "picture": "https://randomuser.me/api/portraits/women/35.jpg",
        "lastName": "Somby"
    },
    {
        "id": "FOxy7zUy2SiEN14mQazD",
        "lastName": "Brand",
        "title": "mr",
        "firstName": "Friedrich-Karl",
        "picture": "https://randomuser.me/api/portraits/men/7.jpg",
        "email": "friedrich-karl.brand@example.com"
    },
    {
        "id": "G19Ya7yxByl6bUXITXzT",
        "email": "sibylle.leibold@example.com",
        "firstName": "Sibylle",
        "picture": "https://randomuser.me/api/portraits/women/89.jpg",
        "title": "mrs",
        "lastName": "Leibold"
    }
]




const renderUserData = () => {

    return UserList.map((user) => {
        return <UserComponent key={user.id} userDetails={user} />;
    })
}

class App extends React.Component {

    constructor(props) {
        super(props);

        //state - is a JS object where we store key value pairs that belongs to my component 
        //any data in my application resides in my state

        this.state = {
            textField: "",
            currentUsers: UserList
        }
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


        const updatedUsers = UserList.filter((user) => {
            const fullName = user.firstName + " " + user.lastName;
            return fullName.toLowerCase().startsWith(value);
        });

        this.setState({ currentUsers: updatedUsers });


    }

    onResetUsers() {
        this.setState({ currentUsers: UserList });
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

        return (
            <div className="App">
                <h2>User Data</h2>

                <div>
                    <input type="text" style={{ width: "400px", height: "25px" }} placeholder="Enter Text Here" value={this.state.textField} onChange={(e) => this.onInputChange(e)} />
                    <button onClick={() => this.onSortUsers()} style={{ border: "3px solid black", margin: "0 10px", padding: "8px 30px", cursor: "pointer" }}>Sort Users</button>
                    <button onClick={() => this.onResetUsers()} style={{ border: "3px solid black", margin: "0 10px", padding: "8px 30px", cursor: "pointer" }}>Reset Users</button>

                </div>

                {this.renderUserData()};
            </div>
        )
    }

}



export default App;





/*
functional Components -> cannot use state
 Class Based Components -> actually allows the usage of state in that component
*/


/*
State and props
Button is clicked -> UI should be updated
UI Update -> to Change the State -> setState
*/