import React from 'react'
import earthIcon from '../assets/earth-icon.png'
import "./Category.css"
import { makeStyles } from '@material-ui/core/styles';
import { Card,CardActionArea,CardMedia,CardActions,Button,Typography ,CardContent} from '@material-ui/core';
const useStyles = makeStyles({
    root: {
      maxWidth: 345,
    },
  });



function Category({continent}) {
    const classes = useStyles();
  return (
    <div className="category">
          <Card className={classes.root}>
      <CardActionArea >
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          height="180"
          image={earthIcon}
          title="Contemplative Reptile"
        />
        <CardContent className="category-color" >
          <Typography className='continent' gutterBottom variant="h5" component="h2">
            {continent}
          </Typography>
          <div >
          <Typography variant="body2" className='description'  component="p">
            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
            across all continents except Antarctica
          </Typography>
          </div>
        
        </CardContent>
      </CardActionArea >
      <CardActions className='category-color'>
        <Button size="small" color="secondary">
          Play
        </Button>
        
      </CardActions>
    </Card>
    </div>
  )
}

export default Category