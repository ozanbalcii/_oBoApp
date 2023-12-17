import { createContext, useContext, useState } from "react";

export const ButtonNameContext = createContext();

export const HeaderButtonsProvider = ({ children }) => {
    const [buttonName, setButtonName] = useState('denemeeeee');
    const data = {
        buttonName,
        setButtonName,
    };
    return (
        <ButtonNameContext.Provider value={data}>
            {children}
        </ButtonNameContext.Provider>
    );
}
export const useButtonValueContext = () => useContext(ButtonNameContext);