import { Box, Button, Grid, InputAdornment, TextField, Typography } from '@mui/material'
import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import PersonIcon from '@mui/icons-material/Person';
import SettingsApplicationsIcon from '@mui/icons-material/SettingsApplications';
import NotificationsIcon from '@mui/icons-material/Notifications';


function Navbar() {
  return (
    <Grid sx={{
        position:'absolute',
        width:{xs:'200%',sm:'150%',md:'80%',xl:'79%',lg:'78%'},
        height:'50px',
        // border:'1px solid black',
        top:'10px',
        left:{xs:'5px',sm:'275px',md:'275px',xl:'275px',lg:'275px',},
        backgroundColor:'#F8F9FA',
        borderRadius:'10px',

    }}>
       

            <Box sx={{
                boxSizing:'border-box',
                width:'200px',
                height:'100%',
                // border:'1px solid red',
            }}>

                <Grid sx={{marginLeft:'50px'}}>

                <Box sx={{marginTop:'-8px',fontSize:'8px'}}>
                <p sx={{}}>Page/Billing</p>
                
                </Box>

                <Box sx={{marginTop:'-10px'}}><h6>Billing</h6></Box>

                </Grid>


            </Box>
{/* 
            box2-------------------------------------- */}

            <Box sx={{
                display:'flex',
               position:'absolute',
               justifyContent:'space-around',
               width:'370px',
               height:'50px',
            //    border:'1px solid red',
               marginLeft:'auto',
               top:'0px',
               left:{xs:'400px',sm:'500px',md:'300px',xl:'300px',lg:'600px',}
                

            }}>
          <TextField 
             size='small'
             placeholder='Type here'
            sx={{borderRadius:'10px'}}
              InputProps={{
              startAdornment: (
              <InputAdornment position="start">
              <SearchIcon/>
            </InputAdornment>
          ),
        }}
      />

                <Grid sx={{
                    width:'200px',
                    height:'100%',
                    // border:'1px solid black',
                    display:'flex',
                    justifyContent:'space-between'
                }}>
                     
                    
                  
                    <Button startIcon={<PersonIcon/>} sx={{fontSize:'10px'}} variant='p'>Signin</Button>
                    <SettingsApplicationsIcon sx={{marginTop:'15px',fontSize:'15px'}}/>
                    <NotificationsIcon sx={{marginTop:'15px',fontSize:'15px'}}/>

                
                  
                </Grid>


            </Box>



       

    </Grid>


  )
}

export default Navbar