import {  createContext, useContext, useState } from "react"
import { LuSunMoon } from "react-icons/lu";
import { IoSunny } from "react-icons/io5";


export const MoodContext = createContext()

export const ThemeChange = ({children}) =>{

    const [mode,setMode] = useState("light")


    const HandleToggle = ()=>{
return setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
    }


    return (
        <MoodContext.Provider value={{mode, HandleToggle}}>
           {children}

        </MoodContext.Provider>
    )}


    export const DarkLight = ()=>{


        const {mode, HandleToggle} = useContext(MoodContext)

        return(
            <>
<div style={{ 
    background: mode === "light" ? "#fff" : "#333", 
             color: mode === "light" ? "#000" : "#fff", 
              height: "100vh",
                  textAlign: "center" 
                  }}>

<h1>Dark and light mood website </h1>
<p> hii this is react {mode === "dark" ? <LuSunMoon />:  <IoSunny/>}</p>
<button onClick={HandleToggle}> {mode === "dark" ? <LuSunMoon />:  <IoSunny/>}</button>

            </div>
            
            </>
        )

    }