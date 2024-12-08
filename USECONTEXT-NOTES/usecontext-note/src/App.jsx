import React from "react";
import { BioProvider } from ".";
import { Home } from "./Home";
import { About } from "./About";
import { Services } from "./Services";
import { DarkLight, ThemeChange } from './DarkNLightmode'

export const App = () => {
  return (
    <>
    <BioProvider>
      <Home />
      <About />
      <Services />
    </BioProvider>
    <ThemeChange>
    <DarkLight/>
    </ThemeChange>
   
   
     </>
  );
};
