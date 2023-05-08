import React from 'react'
import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import { Box, Typography } from "@mui/material"
const Footer = () => {
  return (
   <>
   <Box sx={{textAlign:'center' , bgcolor:'#1a1a19',color:'white', p:3}}>
    <Box sx={{my:3,"& svg":{
        fontSize :"60px",
        cursor:"pointer",
        mr:2,
    },
    "& svg:hover":{
        color:"goldenrod",
        transform:"translatex(5px)",
        transition:'all 400ms',
    },
    
    
    }}>
     <GitHubIcon/>
     <TwitterIcon/>
     <YouTubeIcon/>
    </Box>
    <Typography variant='h5' >
        All Rights Reserved &copy; Techinfo  YT
    </Typography>
   </Box>
   </>
  )
}

export default Footer