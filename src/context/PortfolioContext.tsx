"use client"
import { ReactNode, useContext, createContext, useState, useEffect } from "react";
// import { colors } from "@/data/data";

interface IPortfolio{
    color:number
    toggleColor:(index?:number)=>void
    showColor:boolean
    toggleTheme: () => void
    theme:boolean
}

const PortfolioContext = createContext({} as IPortfolio);

export const PortfolioContextProvider = ({children}:{children:ReactNode}) => {
    const [color,setColor] = useState(0);
    const [showColor,setShowColor] = useState(false);
    const [theme, setTheme] = useState(false)

    const getTheme = () => {
        const localTheme = JSON.parse(localStorage.getItem("veeTheme") as string) === true;
        document.body.classList.toggle("dark", localTheme);
        setTheme(localTheme)
        return localTheme;
    }

    useEffect(()=>{
        getTheme()
    },[])

    const toggleTheme = () => {
        setTheme(theme => !theme)
        localStorage.setItem("veeTheme",JSON.stringify(!theme));
        document.body.classList.toggle("dark",!theme);
    }

    const toggleColor = (index?:number) => {
        setShowColor(pre=>!pre);
        if(index || index == 0){
            setColor(index);
        }
    }
    return(
        <PortfolioContext.Provider value={{color,toggleColor,showColor, toggleTheme,theme}}>
            {children}
        </PortfolioContext.Provider>
    )
}

export const usePortfolioContext = () => {
    return useContext(PortfolioContext);
}