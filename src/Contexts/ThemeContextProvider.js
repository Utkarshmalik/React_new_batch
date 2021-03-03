import React,{createContext,useState} from 'react';

export const ThemeContext=createContext();


 const ThemeContextProvider=(props)=>{
     console.log(props);

     const [theme,changeTheme]=useState("dark");

    return (
        <div>
        <ThemeContext.Provider  value={theme} >
        {props.children}
        </ThemeContext.Provider>    
        </div>
    );
}

export default ThemeContextProvider;