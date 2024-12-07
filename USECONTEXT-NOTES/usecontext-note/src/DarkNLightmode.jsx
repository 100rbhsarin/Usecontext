import { Children, createContext, useContext, useState } from "react"



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
<div style={{ background: mode === "light" ? "#fff" : "#333", color: mode === "light" ? "#000" : "#fff", height: "100vh", textAlign: "center" }}>
<h1>Dark and light mood website </h1>
<p> hii this is react  🚀 </p>
<button onClick={HandleToggle}>{mode === "dark" ? "change to light mode" : " change to dark mode"}</button>

            </div>
            
            </>
        )

    }