import React from 'react'
import earthIcon from '../assets/earth-icon.png'
import {useNavigate } from "react-router-dom"
import "./Category.css"
import { makeStyles } from '@material-ui/core/styles'
import { Card,CardActionArea,CardMedia,CardActions,Button,Typography ,CardContent} from '@material-ui/core';
const useStyles = makeStyles({
    root: {
      maxWidth: 345,
    },
  });



function Category({continent, Icon ,description,id,country_id,setCountry_id}) {
  const navigate = useNavigate();
    const classes = useStyles();

    const handleOnSubmit =()=>{
      // console.log("country_id",id)
      setCountry_id(id)
      navigate("/instructions");

    }
  return (
    <div className="category">
          <Card className={classes.root}>
      <CardActionArea >
        {/* image display in card */}
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          height="180"
          // gets icon props
          image={Icon}
          title="Contemplative Reptile"
        />
        <CardContent className="category-color" >
        {/* Generates a card with title from props and template description */}
          <Typography className='continent' gutterBottom variant="h5" component="h2">
            {continent}
          </Typography>
          <div >
          <Typography variant="body2" className='description'  component="p">
            
            {description}
          
          </Typography>
          </div>
        
        </CardContent>
      </CardActionArea >
      <CardActions className='category-color'>
      {/* when they hit play navigate to instructions */}
        <Button size="small" color="secondary" onClick={handleOnSubmit} className="buttons">
          Play
        </Button>
        
      </CardActions>
    </Card>
    </div>
  )
}

export default Category