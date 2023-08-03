import { useState, createContext } from "react";
import { ContextType, ContextProps } from "../types/types";

export const Context = createContext<ContextType | null>(null);

export default function ContextProvider ({children}: ContextProps) {
    const [ gradient, setGradient ] = useState({
        colors : [
            {hexa: "#3d6bec", position: 15},
            {hexa: "#eb5151", position: 16.5}
        ],
        angle: 45
    })
    
    return (
        <Context.Provider value={{gradient, setGradient}}>
            {children}
        </Context.Provider>
    )
}