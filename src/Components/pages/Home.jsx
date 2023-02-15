import React, { useState, useEffect } from "react";
import { Grid, Card, CardContent, Button, TextField, Badge} from "@mui/material";
import axios from "axios";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useNavigate } from "react-router-dom";
import { addQuantity, handleAddQtay, handleRemove } from "../Utility";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
export const Home = () => {
  const [data, setData] = useState([]);
  const [copyData,setCopyData]=useState([])
  const [addToCart,setAddToCart]=useState([])
  const [category,setCategory] =useState ([])
  const [search,setSearch] =useState('')
  const navigate =useNavigate ()




  async function addData() {
    const getData = await axios.get("https://fakestoreapi.com/products");
    setData(addQuantity(getData.data));
    setCopyData(addQuantity(getData.data));
    const res =await axios .get ('https://fakestoreapi.com/products/categories')
    setCategory([...res.data,"All"])
  
    console.log(getData.data);
  }

  const handleAddtoCart=(item)=>{
    const duplicateCart=addToCart.some((elem)=>elem.id==item)
      if(!duplicateCart){
        setAddToCart([...addToCart,item])
      }
  }

  const handleFilter =(value)=>{
    const searchData=copyData.filter((item)=> item.title.toUpperCase().includes(value.toUpperCase()))
    setData(searchData)
  }

  const handleButtonSearch=(userCategory)=>{
    if("All" == userCategory){
      setData(copyData)
    }else{
      const search = copyData.filter((item)=>item.category.includes(userCategory))
      setData(search)
    }
  }
  const handleClick =(item)=>{
    navigate("/detaile",{state:item})
    console.log(item)
  }
 const handleIncrement=(id) =>{
  const res =handleAddQtay(copyData,id)
  setData(res)
  setCopyData(res)
 };

 const handleDecrement=(id) =>{
  const res =handleRemove(copyData,id)
  setData(res)
  setCopyData(res)
 };

  useEffect(() => {
    addData();
  }, []);
  useEffect (()=>{
    const searchData=copyData.filter((item)=>item.toUpperCase().inculdes(search.toUpperCase()))
    setData(searchData)
  console.log(search)
  },[search])
  // const res=handleAdd(data,2)


   return (
    <div>
      <Grid container spacing={4} style={{ marginTop: 1 }}>



        {category.map((item)=>{
          return (
            <Grid item xs={item=="All"? 1: 2} className="Button-container">
          <Button variant="contained" onClick={()=>handleButtonSearch(item)}>{item}</Button>
        </Grid>

          )
        })}
               
        
        <Grid item xs={2} className="Button-container">
          <TextField label="search" fullWidth onChange={(e)=>handleFilter(e.target.value)}/>
        </Grid>
        <Grid item xs={1} className="Button-container">
        <Badge color="secondary" badgeContent={addToCart.length} showZero>
        <ShoppingCartIcon style={{ color: "#1976d2", fontSize: 40, cursor: "pointer" }}/>
        </Badge>
        </Grid>
        {data.map((item, index) => {
          return (
            <Grid item xs={3} key={index}>
              <Card sx={{ height: 350 }}>
                <CardContent>
                  <img
                    src={item.image}
                    width={200}
                    height={200}
                    style={{ position: "relative", left: 40 }}
                  />
                  <h3>
                    Title : {item.title.substring(0, 20)}
                    {item.title.length > 20 && "..."}
                  </h3>
                  <h4>Price : ${item.price}</h4>
                  <h2>
            <span  >
              <RemoveIcon 
               className="add" 
        onClick={()=> item.userQuantity>0 &&  handleDecrement(item.id)}
               />
            </span>
            {item.userQuantity}
            <span>
              <AddIcon  className="add" onClick={()=>handleIncrement(item.id)}/>
            </span >
          </h2>
                  <Button variant="contained" color="error" onClick={()=>handleClick(item)}>
                    Detaile
                  </Button>
                  <Button
                    variant="contained"
                    sx={{ position: "relative", left: 90 }}
                    onClick={()=>handleAddtoCart(item)}
                  >
                    Add to Card
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
};