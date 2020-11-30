import React from 'react'
import { Route,Link, useParams } from 'react-router-dom';
import{Box, Grid, Paper} from '@material-ui/core';
import Card from '@material-ui/core/Card';

import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import useWebAnimations,{pulse} from "@wellyshen/use-web-animations";
import {Main} from './App'
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import CardActionArea from '@material-ui/core/CardActionArea';
const useStyles = makeStyles((theme) => ({
  root: {
      marginTop:'20px',
    maxWidth: '5400px',
        marginBottom:'20px',

    "&:hover":{
transform:'rotate(8deg)',
transition:'1s ease-in out',
                boxShadow:'3px 2px 6px 3px #ff7d19',
[theme.breakpoints.down('xs')]: {
    marginTop:'0px',
    
}
    },
  },
  adBox:{
      background:'rgb(150,0,81)',
      background:'linear-gradient(90deg, rgba(150,0,81,1) 0%, rgba(113,0,164,1) 74%, rgba(171,0,223,1) 100%)',
      marginTop:'40px',
      marginBottom:'10px'

  },
  adSub:{
      
      marginTop:'20px',
      marginBottom:'20px',
backgroundColor:'white',
'&:hover':{
    boxShadow:'3px 2px 6px 3px #ff7d19',
    transform:'rotate(8deg)',
    transition:'1s ease-in out'
},
[theme.breakpoints.down('xs')]: {
    margin:'0px',

    
}
  },
  image:{
      
  },
  media: {
      width:'100%',
    height: '170px',
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },

}));
const shoes = {
  "air-jordan-3-valor-blue": {
    name: "VALOUR BLUE",
    img:
      "https://secure-images.nike.com/is/image/DotCom/CT8532_104_A_PREM?$SNKRS_COVER_WD$&align=0,1"
  },
  "jordan-mars-270-london": {
    name: "JORDAN MARS 270 LONDON",
    img:
      "https://secure-images.nike.com/is/image/DotCom/CV3042_001_A_PREM?$SNKRS_COVER_WD$&align=0,1"
  },
  "air-jordan-1-zoom-racer-blue": {
    name: "RACER BLUE",
    img:
      "https://toppng.com/uploads/preview/air-max-270-total-orange-best-nike-shoes-2018-11563158984sfliparwuo.png"
  }
};
function ShopPage(){

    return(
        <div style={{background:'black',width:'100%'}}>
This is shop page
<Link to='/items'>
   <h1 style={{color:'white',textAlign:'center'}}>
       Items
       </h1> 
</Link>
      <img src='https://cdn.britannica.com/50/213250-050-02322AA8/Nike-logo.jpg'height='600px'width='100%'/>
       

        </div>
      
    )
}
function Item(){
 
        const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);
    return(
        <div>
<Grid container spacing={1}>

    {Object.entries(shoes).map(([slug,{name,img}])=>(  
        <Grid item lg={4} md={4} sm={6} xs={12} className='box'>
        <Link to={slug} style={{ textDecoration: 'none' }}>
             <Card className={classes.root} >
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={img}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2" style={{fontWeight:'600',fontFamily:'fantasy'}}>
            {name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
            across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
    
    </Card>
                    
        </Link>      
       </Grid>            
    ))}


</Grid>
        </div>
    )
}
function ItemBar(props){
        const classes = useStyles();


    const{img,name} = props
    return(
<Grid container className={classes.adBox}>
    <Grid item lg={2} md={2} sm={1} xs={false}/>
   
<Grid item lg={3} md={3} sm={4} xs={12} className={classes.adSub}>
    <img src={img} className={classes.image} height='100%'width='100%'/>
</Grid>
    

<Grid item  lg={4} md={4} sm={5} xs={12} className={classes.adSub}>
 
    <h1 style={{marginLeft:'10px',textDecoration:'underline',textAlign:'left',fontWeight:'700',fontFamily:'fantasy',fontSize:'45px'}}>{name}</h1>
<p style={{marginLeft:'10px',fontSize:'20px' ,fontWeight:'500',}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam quo eos eaque nihil quae sed sequi ipsa hic. Voluptatum voluptatem doloribus voluptatibus minus perferendis labore, eaque vitae hic amet debitis.</p>
</Grid>
    
    <Grid item lg={2} md={2} sm={1} xs={false}/>

</Grid>
    )
}
function ItemBox(props){
     const{match} =props
    const{params} = match
    const{slug} = params
    const userData = slug
    const shoe = shoes[userData]
    
if(!shoe){
    return<div>NO SHOE FOUND!!</div>
}
const{name,img}= shoe;
    return(
        <div>
   <Main img={img}/>
<ItemBar name={name}img={img}/>

        </div>
)
}
export{
Item,  ItemBox,  ShopPage
};