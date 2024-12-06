import { BioContext, BioProvider } from "."
import { Home } from "./Home"
import {About} from './About'



export const App = () =>{


  return (
    <>
    <BioProvider>
    <Home/>
    <About/>
    </BioProvider>
   
    
 </>
  )
}