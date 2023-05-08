import React,{useState}from 'react'
import { AppBar, Box, Divider, Drawer, IconButton, Toolbar, Typography } from "@mui/material"
import BusinessIcon from '@mui/icons-material/Business';
import { Link } from "react-router-dom";
import "../../styles/HeaderStyles.css";
import MenuIcon from '@mui/icons-material/Menu';


const Header = () => {
  const[mobileopen ,setMobileopen]=useState(false)

  const handleDrawToggle=()=>{
    setMobileopen(!mobileopen)
  }
  const deower=(
    <Box onClick={handleDrawToggle} sx={{textAlign:"center"}}>
        <Typography color={"goldenrod"} variant='h6' component="div" sx={{flexGrow:1}}>
            <BusinessIcon/>
            Future Company
          </Typography>
         
           <ul className='mobile-navgaion'>
            <li>
              <Link to={'/'}> Home</Link>
            </li>
            <li>
              <Link to={'/ about'}>About</Link>
            </li>
           </ul>
           
           <a href='https://twitter.com'target='-blank'>Go to twitter</a>
    
    </Box>
  )
  
  return (
    <>
    
      <Box>
        <AppBar component={'nav'} sx={{bgcolor: 'black'}} >
          <Toolbar>
            <IconButton color='inherit' aria-label='open deower'
            edge="start" sx={{mr:2 ,
            display:{sm:""}}}
            onClick={handleDrawToggle}>
           <MenuIcon/>

            </IconButton>
          <Typography color={"goldenrod"} variant='h6' component="div" sx={{flexGrow:1}}>
            <BusinessIcon/>
            Future Company
          </Typography>
          <Divider/>
          <Box sx={{display:{xs:'', sm:"black"}}}>
           <ul className='navigation-menu'>
            <li>
              <Link to={'/'}> Home</Link>
            </li>
            <li>
              <Link to={'/ about'}>About</Link>
            </li>
           </ul>
          </Box>
          </Toolbar>
        </AppBar>
        <Box component="nav">
          <Drawer variant='temporary' open={mobileopen} 
          onClose={handleDrawToggle}
           sx={{display:{xs:'black'},sm:''}}>
                  {deower}      
          </Drawer>
        </Box>
        <Box>
        <Toolbar/>
        </Box>
       
      </Box>
     

     
      

      <h2>Infosys Technologies</h2>
     <h3>Infosys Technologies Limited
Infosys is India's second largest software and Services Company with approximately 103905employees on board as on june30, 2009. The key highlights are:

One of the pioneers in the development and adoption of the now famous 'Global Delivery Model'.

Focus on continuous employee training & progression on IT value chain.

"One Infy" service, an initiative to combine different service offerings and go to market strategy for its top 30 clients, helped bring in five large banking orders.</h3>
      
      </>
      
  )
}

export default Header