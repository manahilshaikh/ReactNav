import React,{useState} from "react";
 import { Button } from "@mui/material";




export const Comp =() =>{
     const [data,setdata] =useState (0)
     const handleClick =(val) =>{
        setdata(data+val)
     }
     
    return (
        <div>
            <h1>Counter</h1>
                <h1>Counter Value:{data}</h1>
                    <Button variant="contained"color="error"onClick={()=>handleClick(+1)}ss>
                        + 
                    </Button>
        </div>
    )
}