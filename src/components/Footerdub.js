import { Box, Button, Grid } from '@mui/material'
import React from 'react'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';


function Footerdub() {
  return (
    <Grid sx={{
        display:{xs:'block',sm:'none',md:'none',xl:'none',lg:'none'},
        width:'100%',
        height:'100px',
        margin:'auto',
        marginTop:'2000px',
        marginLeft:'250px'
       
          

        
        
        
        }}>


<Box sx={{
          boxSizing:'border-box',
          width:'100%',
          height:'50%',
          margin:'auto',
          fontSize:'12px',
          padding:'auto',
          // color:'#4FD1C5',
          color:'gray',
          paddingLeft:'10px',
          display:'-ms-inline-flexbox',
          marginLeft:'12%'

        }}>
          <Box sx={{width:{xs:'none',sm:'100%',md:'80%'},height:'100%',marginLeft:{sm:'10px',md:'60px',xl:'100px',lg:'100px'},boxSizing:'border-box'}}>          @ 2021, Made with <FavoriteBorderIcon sx={{ fontSize:'12px',color:'red'}}/> By<Button sx={{ fontSize:'12px',color:'#4FD1C5',textDecoration:'none',border:'0px',padding:'0'}}>Creative Team</Button>&<Button sx={{ fontSize:'12px',color:'#4FD1C5'}}>Simmmple</Button>for a better web. </Box>
</Box>
        <Box sx={{
          display:'flex',
          width:'100%',
          height:'50%',
          margin:'auto',
          marginLeft:'25%'



        }}>

          <Button sx={{fontSize:'8px',color:'gray'}}>Create team</Button>
          <Button sx={{fontSize:'8px',color:'gray'}}>Simmmple</Button>
          <Button sx={{fontSize:'8px',color:'gray'}}>Blog</Button>
          <Button sx={{fontSize:'8px',color:'gray'}}>Liscence</Button>




        </Box>

          
    </Grid>
  )
}

export default Footerdub