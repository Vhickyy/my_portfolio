import { FaCss3, FaHome, FaHtml5, FaNodeJs } from 'react-icons/fa';
import {IoLogoJavascript } from "react-icons/io";
import {BiLogoTypescript } from "react-icons/bi";
import Calculator from "@/images/calculator.jpeg"
import Notes from "@/images/notes.png"
import Kel from "@/images/kel.png"

// colors
export const colors = [
    {
        color: "#c34a3e",
        gradient: "#ff806e"
    },
    {
        color: "#2b942d",
        gradient: "#81942B"
    },
    {
        // color: "#A87607",
        // gradient: "#a99e06"
        color: "#8d8801",
        gradient: "#c9be26"
    },
    {
        color: "#a8072d",
        gradient: "#ed587b"
    },
    {
        // color: "#02485a",
        color: "#7d07a8",
        gradient: "#cf58ed"
    },
]

// nav
export const navLinks = [
    {
        name:"home",
        link:"/",
        icon: <FaHome />
    },
    {
        name:"about",
        link:"/",
        icon: <FaHome />
    },
    {
        name:"experience",
        link:"/",
        icon: <FaHome />
    },
    {
        name:"project",
        link:"/",
        icon: <FaHome />
    },
    {
        name:"contact",
        link:"/",
        icon: <FaHome />
    },
    // {
    //     name:"article",
    //     link:"/"
    // }
]

// skills
export const skills = [
    {
        icon: <FaHtml5 className="text-yellow-500 h-[2rem] w-[2rem]"/>,
        name: "HTML5"
    },
    {
        icon: <FaCss3 className="text-yellow-500 h-[2rem] w-[2rem]"/>,
        name: "CSS3"
    },
    {
        icon: <IoLogoJavascript className="text-blue-900 h-[2rem] w-[2rem]"/>,
        name: "JavaScript"
    },
    {
        icon: <FaNodeJs className="text-green-900 h-[2rem] w-[2rem]"/>,
        name: "CSS3"
    },
    {
        icon: <BiLogoTypescript className="text-blue-900 h-[2rem] w-[2rem]"/>,
        name: "CSS3"
    },
    {
        icon: <FaHtml5 className="text-yellow-500 h-[2rem] w-[2rem]"/>,
        name: "HTML5"
    },
    {
        icon: <FaCss3 className="text-yellow-500 h-[2rem] w-[2rem]"/>,
        name: "CSS3"
    },
    {
        icon: <IoLogoJavascript className="text-blue-900 h-[2rem] w-[2rem]"/>,
        name: "JavaScript"
    },
    {
        icon: <FaNodeJs className="text-green-900 h-[2rem] w-[2rem]"/>,
        name: "CSS3"
    },
    {
        icon: <FaNodeJs className="text-green-900 h-[2rem] w-[2rem]"/>,
        name: "CSS3"
    },
]

export const projects = [
    {
        title:"Calculator",
        description: "A basic calculator that shows history of calcutions made",
        techstack: "React Typescript",
        img: Calculator
    },
    {
        title:"Calculator",
        description: "A basic calculator that shows history of calcutions made",
        techstack: "React Typescript",
        img: Notes
    },
    {
        title:"Calculator",
        description: "A basic calculator that shows history of calcutions made",
        techstack: "React Typescript",
        img: Kel
    },
    {
        title:"Calculator",
        description: "A basic calculator that shows history of calcutions made",
        techstack: "React Typescript",
        img: Calculator
    },
]