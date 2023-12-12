"use client"
import { ReactNode, useContext, createContext, useState } from "react";
import { colors } from "@/data/data";

interface IPortfolio{
    color:number
    toggleColor:(index?:number)=>void
    showColor:boolean
}

const PortfolioContext = createContext({} as IPortfolio);

export const PortfolioContextProvider = ({children}:{children:ReactNode}) => {
    const [color,setColor] = useState(0);
    const [showColor,setShowColor] = useState(false);

    const toggleColor = (index?:number) => {
        setShowColor(pre=>!pre);
        if(index || index == 0){
            setColor(index);
        }
    }
    return(
        <PortfolioContext.Provider value={{color,toggleColor,showColor}}>
            {children}
        </PortfolioContext.Provider>
    )
}

export const usePortfolioContext = () => {
    return useContext(PortfolioContext);
}