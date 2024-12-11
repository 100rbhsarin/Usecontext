import React from "react";
import { BioProvider } from ".";
import { Home } from "./Home";
import { About } from "./About";
import { Services } from "./Services";
import { DarkLight, ThemeChange } from './DarkNLightmode'
import { UseReducer } from "./Usereducer/Reducer";
import { ReactMemo } from "./Memo/ReactMemo";
import MemoagainCount from "./Memo/Usememo";
import {Parent} from "./Memo/ReactMemoExample"
import {Usememoexample} from "./Memo/UsEMemoExample"
import {ParentCallBackExample} from  "./Memo/UsecallbackExample"


export const App = () => {
  return (
    <>
     
    {/* <BioProvider>
      <Home />
      <About />
      <Services />
    </BioProvider> */}
    {/* <ThemeChange>
    <DarkLight/>
    </ThemeChange> */}

    {/* <UseReducer/>   */}

    {/* <ReactMemo/> */}

{/* <MemoagainCount/> */}
{/* <Parent/> */}
{/* // <Usememoexample/> */}
   <ParentCallBackExample/>
     </>
  );
};
