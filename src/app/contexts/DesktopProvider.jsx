import React from 'react'
import {createContext, useContext, useState} from 'react';

export const DesktopContext = createContext();

export const DesktopProvider = ({children}) => {
    const [ tryContext, setTryContext ] = useState('ozan')
    //* sidebar open/close
    //* modal open/close
    //* guide message

    const data = {
        tryContext,
        setTryContext
     }

  return (
    <DesktopContext.Provider value={data}>
       {children} 
    </DesktopContext.Provider>
  )
}

export const useStateContext = () => useContext(DesktopContext);