import { ListItemText } from "@mui/material"

export const addQuantity =(arr) =>{
    const res =arr.map((item)=>{
        return {...item,Quantity :10,userQuantity:0}
    })
    return res
}
export const handleAddQtay=(arr,id) =>{
    const res =arr .map((item)=>{
        if(item.id==id) {
            return {...item,userQuantity:item.userQuantity+1}
        }else{
            return item
        }
    })
    return res
}
export const handleRemove=(arr,id) =>{
    const res =arr.map((item)=>{
        if(item.id==id){
            return {...item,userQuantity :item.userQuantity-1}
        }else{
            return item
        }
    })
    return res
    
}