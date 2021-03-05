import React,{createContext,useState} from 'react';

export const ThemeContext=createContext();


 const ThemeContextProvider=(props)=>{
     console.log(props);

     const [theme,changeTheme]=useState("dark");

     const onThemeChange=()=>
     {
         if(theme==="light")
         changeTheme("dark");
         else if(theme==="dark")
         changeTheme("light");

     }

    return (
        <div>
        <ThemeContext.Provider  value={{theme:theme,onThemeChange:()=>onThemeChange()}} >
        {props.children}
        </ThemeContext.Provider>    
        </div>
    );
}

export default ThemeContextProvider;