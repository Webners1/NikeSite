
import './App.css';
import { BrowserRouter as Router,Route,Switch,Link,Outlet} from 'react-router-dom'
import { Grid} from '@material-ui/core';
import {ShopPage,Item,ItemBox} from './ShopPage'
import {Card,CardDeck} from 'react-bootstrap'
import useWebAnimations,{bounce,pulse} from "@wellyshen/use-web-animations";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  textTag: {
   marginTop:'50px',
    [theme.breakpoints.down('md')]: {
      marginTop: '30px'
    },
    [theme.breakpoints.down('sm')]: {
      marginTop: '20px'
    },
    [theme.breakpoints.down('xs')]: {
      marginTop:'10px'
    },
   
  },
 
}));
function MainShopPage() {
  return (<div>

    <Main/>
    <Shop/>
  </div>
    )
}
function App() {
  return (
<Switch>
      <Route path='/' exact component={Home}/>
        <Route path='/shop' exact component={MainShopPage}/>
        
          
      <Route path='/:slug' exact render={(props) => <ItemBox{...props}/>}/>
      
</Switch>
  );
}
function Main(props) {
  const{img} = props
  const classes = useStyles();
  const { ref, playState, getAnimation } = useWebAnimations({ ...bounce })

  const play = () => {

    getAnimation().play();
  }

  return (
    <div style={{ width: '100%' }}>
      <nav className='nav' style={{ textAlign: 'center', width: '100%', height: '70px', display: 'flex', background: 'transparent', boxShadow: '2px 2px 6px 4px black' }}>
        <Link to='/'><img src="https://pngimg.com/uploads/nike/nike_PNG5.png" style={{ margin: '10px 10px 20px 20px' }} width='130px' height='60px' /></Link>
        <Link to='/' style={{ textDecoration: 'none' }}>
          <h2 style={{ color: 'black', margin: '20px', textAlign: 'center' }}>
            Home
          </h2>
        </Link>
        <Link to='/shop' style={{ textDecoration: 'none' }}>
          <h2 style={{ background: 'white', color: 'black', margin: '20px', textAlign: 'center' }}>
            Shop
          </h2>
        </Link>
      </nav>
      <Grid container className='mainContainer'>

        <Grid item lg={2} md={2} sm={1} xs={1} />
        <Grid item lg={4} md={4} sm={5} xs={10} className={classes.textTag}>
          <h1 style={{ color: 'white', marginBottom: '5px', marginTop: '50px', fontSize: '50px', fontWeight: '700', fontFamily: 'fantasy' }}>IGNITE YOUR LOOKS</h1>
          <div style={{ color: 'white', fontSize: '45px', fontWeight: '700', fontFamily: 'serif' }}>It's Not Just Shoes its<span style={{ margin: '5px', fontSize: '45px', fontFamily: 'fantasy', color: '#780027', textDecoration: 'underline' }}>NIKE</span></div>
          <div style={{ color: 'white', margin: '5px', fontSize: '20px' }}>"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt e</div>
        </Grid>
        <Grid item lg={4} md={4} sm={5} xs={10}>
          <img src='https://freepngimg.com/thumb/shoes/28530-3-nike-shoes-transparent.png' onMouseOver={() => play()} ref={ref} height='500px' width='100%' />

        </Grid>
        <Grid item lg={2} md={2} sm={1} xs={false} />

      </Grid>
      <div>

      </div>
      

    </div>
  )
}
function Home(){

  const classes = useStyles();
  const {ref,playState,getAnimation} = useWebAnimations({...bounce})

  const play=()=>{

    getAnimation().play();
  }
 
  return(
    <div style={{width:'100%'}}>
      <nav className='nav' style={{textAlign:'center',width:'100%',height:'70px',display:'flex',background:'transparent',boxShadow:'2px 2px 6px 4px black'}}>
        <Link to='/'> <img src="https://pngimg.com/uploads/nike/nike_PNG5.png" style={{ margin: '10px 10px 20px 20px' }} width='130px' height='60px' /></Link>
        <Link to='/' style={{ textDecoration: 'none' }}>
          <h2 style={{ color: 'black',margin:'20px',textAlign:'center'}}>
        Home
          </h2>
        </Link>
        <Link to='/shop' style={{ textDecoration: 'none' }}>
          <h2 style={{ background:'white',width:'70px',height:'40px',color:'black',margin: '20px', textAlign: 'center' }}>
          Shop
          </h2>
          </Link>
      </nav>
      <Grid container className='mainContainer'>
       
        <Grid item lg={2} md={2} sm={1} xs={1}/>
        <Grid item lg={4} md={4} sm={5} xs={10} className={classes.textTag}>
        <h1 style={{ color:'white',marginBottom:'5px',marginTop:'50px',fontSize:'50px',fontWeight:'700',fontFamily:'fantasy'}}>IGNITE YOUR LOOKS</h1>
          <div style={{ color: 'white', fontSize: '45px', fontWeight: '700', fontFamily: 'serif' }}>It's Not Just Shoes its<span style={{ margin: '5px', fontSize: '45px', fontFamily: 'fantasy', color: '#780027',textDecoration:'underline' }}>NIKE</span></div>
          <div style={{ color: 'white',margin:'5px',fontSize:'20px'}}>"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt e</div>
        </Grid>
        <Grid item lg={4} md={4} sm={5} xs={10}>
          <img src='https://freepngimg.com/thumb/shoes/28530-3-nike-shoes-transparent.png' onMouseOver={()=>play()} ref={ref} height='500px'width='100%'/>

        </Grid>
        <Grid item lg={2} md={2} sm={1} xs={false}/>

      </Grid>
        <div>

        <Link to='/shop' style={{ textDecoration: 'none' }}><h1 className='shop'style={{
          textAlign: 'center', fontSize: '45px', fontWeight: '700', color: 'white', }}>SHOP</h1></Link>
        </div>
     <Shop/>
    
    </div>
  )
}
function Shop(){
  return(
    <Grid container direction="column" className='shopContain'>

      <Grid item>

      </Grid>
      <Grid item container>
        <Grid item xs={1} sm={2} />
        <Grid item xs={10} sm={8}>
          <Item />


        </Grid>
        <Grid item xs={1} sm={2} />

      </Grid>
    </Grid>
  )
}


export {
  App,Home,Main

} 
