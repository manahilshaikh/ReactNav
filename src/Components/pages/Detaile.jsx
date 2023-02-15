import { Grid ,Button} from "@mui/material";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import React from "react";
import { useLocation } from "react-router-dom";

export const Detaile = () => {
  const location = useLocation();
  const data = location.state;

  const handleAdd=()=>{}

  console.log(location);
  return (
    <React.Fragment>
      <Grid container>
        <Grid item xs={6}>
          <img src={data.image} alt="" height={500} width={500} />
        </Grid>
        <Grid item xs={6}>
          <h1>Title:{data.title}</h1>
          <h3>Description :{data.description}</h3>
          <h4>price : {data.price}</h4>
          <h2>
            <span>
              <RemoveIcon 
               className="add"/>
            </span>
            {data.userQuantity}
            <span>
              <AddIcon  className="add" />
            </span >
          </h2>
          <Button variant ="contained">Add to cart</Button>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};