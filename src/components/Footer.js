import { Box, Button, Grid, Icon } from '@mui/material'
import React from 'react'
import FavoriteIcon from '@mui/icons-material/Favorite';
function Footer() {
  return (
    <>
      <Grid  sx={{
        display:{xs:'none',sm:'flex',md:'flex',xl:'flex',lg:'flex'},
        width:'80%',
        height:'20px',
        margin:'auto',
        marginTop:{xs:'10px',sm:'-50px',md:'-70px',xl:'100px',lg:'20px'},
        gap:'2%',
        marginLeft:{sx:'',sm:'300px',md:'200px'}
        
      }}>

        <Box sx={{
          boxSizing:'border-box',
          width:'50%',
          height:'100%',
          margin:'auto',
          fontSize:'6px',
          padding:'auto',
          // color:'#4FD1C5',
          color:'gray',
          paddingLeft:'10px',
          display:'-ms-inline-flexbox'

        }}>
          <Box sx={{width:{xs:'none',sm:'100%',md:'80%'},height:'100%',marginLeft:{sm:'10px',md:'60px',xl:'100px',lg:'100px'},boxSizing:'border-box'}}>          @ 2021, Made with <FavoriteIcon sx={{ fontSize:'6px',color:'red',}}/> By<Button sx={{ fontSize:'6px',color:'#4FD1C5',textDecoration:'none',border:'0px',padding:'0'}}>Creative Team</Button>&<Button sx={{ fontSize:'6px',color:'#4FD1C5'}}>Simmmple</Button>for a better web. </Box>
</Box>
        <Box sx={{
          display:'flex',
          width:'45%',
          height:'100%',
          marginLeft:'100px',


        }}>

          <Button sx={{fontSize:'8px',color:'gray'}}>Create team</Button>
          <Button sx={{fontSize:'8px',color:'gray'}}>Simmmple</Button>
          <Button sx={{fontSize:'8px',color:'gray'}}>Blog</Button>
          <Button sx={{fontSize:'8px',color:'gray'}}>Liscence</Button>




        </Box>


        
      </Grid>
    </>
  )
}

export default Footer