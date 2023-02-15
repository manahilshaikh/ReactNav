import { padding } from "@mui/system";
import React from "react";
import { About } from "./About";



export const Subabout =(props) =>{
    const {text ,handelchange} =props
    return (
        <div>
            <h1>sub child</h1>
            <input value={text} onChange={(e)=>handelchange(e.target.value)}
            style={{width:"500px",padding:"20px"}}/>
           <About />
        </div>
    )
}