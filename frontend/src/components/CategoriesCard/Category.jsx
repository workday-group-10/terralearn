import React from "react";
import earthIcon from "../assets/earth-icon.png";
import { useNavigate } from "react-router-dom";
import "./Category.css";
import { makeStyles } from "@material-ui/core/styles";
import apiClient from "../services/apiClient";

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
  const [show, setShow] = useState(true);
  const [FavBor,setFavBor]=useState("FavBorHide")
  const [Fav,setFav]= useState("Fav")
  const [error,setErrors] = useState(null)

  const { appState} = useAuthContext();
  


  const handleFavorite = async () => {
  setShow(prev => !prev)

  if (show)
  {
     setFavBor("FavBor")
     setFav("FavHide")


     const { data, error } = await apiClient.createFavorite({
      category_id : id,
      userId: appState.user.id
  })
  if (error)
  {

    setErrors(error)  
    console.error(error)
  }
  
 


  }
  if(!show)
  {
    setFavBor("FavBorHide")
    setFav("Fav")


    const { data, error } = await apiClient.deleteFavorite({
      category_id : id,
      userId: appState.user.id
  })
  if (error)
  {
   

    setErrors(error)  
    console.error(error)
  }

  }

  }

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
          <span className="material-icons">
            <Button className={Fav}  onClick={handleFavorite} >
              <FavoriteBorder  />
            </Button>
            <Button   className={FavBor}  onClick={handleFavorite}>
              <Favorite   />
            </Button>
          </span>
        </CardActions>
        </div>
      </Card>
    </div>
  );
}

export default Category;
