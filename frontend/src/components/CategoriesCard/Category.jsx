import React from "react";
import earthIcon from "../assets/earth-icon.png";
import { useNavigate } from "react-router-dom";
import "./Category.css";
import { makeStyles } from "@material-ui/core/styles";
import apiClient from "../services/apiClient";
import Heart from "react-heart" 

import Favorite from "@material-ui/icons/FavoriteOutlined";
import FavoriteBorder from "@material-ui/icons/FavoriteBorder";
import {
  Card,
  CardActionArea,
  CardMedia,
  CardActions,
  Button,
  Typography,
  CardContent,
} from "@material-ui/core";
import { useState } from "react";
import { useAuthContext } from "../contexts/auth";
import { useEffect } from "react";
const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
});

function Category({
  continent,
  Icon,
  description,
  id,
  country_id,
  setCountry_id,
}) {
  const navigate = useNavigate();
  const classes = useStyles();

  const handleOnSubmit = () => {
    // console.log("country_id",id)
    setCountry_id(id);
    navigate("/instructions");
  };
  

  const { appState} = useAuthContext();
  const [active, setActive] = useState(false)
  const [datum,setData]= useState()

  const handleOnclick = async ()=>{
    if(active)
    {
      const { data, err } = await apiClient.deleteFavorite(datum);
      if (data)
      {
        console.log("deleted",data)

      }
      else{
        console.log("couldn't delete",err)
      }
      


    }
    else{
      if(!active)
      {
        const {data,err}= await apiClient.createFavorite(id)
        if(data)
        {
          console.log("Yes added",data)

        }
        else{
          console.log("Error",err)
        }
      }
    }
    setActive(!active)
  }

  useEffect( ()=>{
    const fetchData = async () => {
      const { data, err } = await apiClient.fetchCategory(id);
      setData(data)
    }

    fetchData()
   
  },[])

  useEffect (()=>{
  if (datum?.favorite)
  {
    console.log(datum)
  }

  },[datum])

 


  return (
    <div className="category">
      <Card className={classes.root}>
        <CardActionArea>
          {/* image display in card */}
          <CardMedia
            component="img"
            alt="Contemplative Reptile"
            height="180"
            // gets icon props
            image={Icon}
            title="Contemplative Reptile"
          />
          <CardContent className="category-color">
            {/* Generates a card with title from props and template description */}
            <Typography
              className="continent"
              gutterBottom
              variant="h5"
              component="h2"
            >
              {continent}
            </Typography>
            <div>
              <Typography variant="body2" className="description" component="p">
                {description}
              </Typography>
            </div>
          </CardContent>
       
        </CardActionArea>
        <div className="buttons-below">
        <CardActions className="category-but">
          <Button
            size="small"
            color="secondary"
            onClick={handleOnSubmit}
            className="buttons"
          >
            Play
          </Button>
          <div style={{ width: "2rem" }}>
			<Heart isActive={active} onClick={handleOnclick}/>
		</div>
        </CardActions>
        </div>
      </Card>
    </div>
  );
}

export default Category;
