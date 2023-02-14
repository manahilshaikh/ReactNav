// import { ListItem } from '@mui/material'
import React,{useState} from 'react'
import axios from 'axios'


export const AssinAwait=()=>{
    const [here,sethere]=useState([])

    const getshop=async()=>{
        const shopp=await axios.get("http://api.escuelajs.co/api/v1/products")
        console.log(shopp.here)
        sethere(shopp.here)
    }
    getshop()
    return (
        <div>
            <h1>Shopping here</h1>
            <button onClick={getshop}>get shop</button>
            {here.map((item)=>{
                return(
                    <img src={item.images}/>
                )
            })}
        </div>
    )
}