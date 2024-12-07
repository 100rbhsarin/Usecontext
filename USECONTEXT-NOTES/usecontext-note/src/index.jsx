


// import React, {createContext, useContext } from "react";
import {createContext, useContext } from "react";


// Step 1: Create the BioContext
export const BioContext = createContext();
 
// Step 2: Create the BioProvider
export const BioProvider = ({ children }) => {
  const myName = "Vinod";
  const myAge = 30;
  console.log(children)

  return (
    <BioContext.Provider value={{ myName, myAge }}>
      {children}
    </BioContext.Provider>
  );
};

// Step 3: Create a custom hook for consuming the context
export const useBioContext = () => {
  const context = useContext(BioContext);
  if (!context) {
    throw new Error("Component must be wrapped with BioProvider");
  }
  return context;
};
