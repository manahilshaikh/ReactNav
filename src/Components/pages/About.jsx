import { padding } from "@mui/system";
import React, { useState } from "react";
import { Subabout } from "./Subabout";


export const About =()  =>{
    const [text ,setText]=useState("Hello World")

    const handelchange =(value)=>{
        setText(value)

    }
    return (
        <div>
            <h1>Parent about</h1>
            <input value={text} onChange={(e)=>setText(e.target.value)}

            style={{width:"500px",padding:"20px",}} />
            <Subabout text={text} handelchange={handelchange}/>
        </div>
    )
}