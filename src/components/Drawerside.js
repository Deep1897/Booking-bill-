import React, { useState } from 'react'
import { Box, Drawer, IconButton, List, ListItemButton, ListItemIcon, ListItemText,useMediaQuery } from '@mui/material'
 import ListIcon from '@mui/icons-material/List';



function Drawerside() {
    const[Opendraw,setOpendraw]=useState(false)
    const matches = useMediaQuery('(min-width:600px)');


  return (
    <Box sx={{
        position:'absolute',
        color :'#fff',
        top:'-10px',
        left:'50%',
        zIndex:'1',
        
    }} > menu

        <Drawer   open={Opendraw} onClose={()=>setOpendraw(false)}
        >
                 <List>
                    <ListItemButton>

                        <ListItemIcon>

                            <ListItemText>

                                Dashboard
                            </ListItemText>


                        </ListItemIcon>


                    </ListItemButton>



                    <ListItemButton>

                        <ListItemIcon>

                            <ListItemText>

                                Profile
                            </ListItemText>


                        </ListItemIcon>


                    </ListItemButton>


                    <ListItemButton>

                        <ListItemIcon>

                            <ListItemText>

                                SignIn
                            </ListItemText>


                        </ListItemIcon>


                    </ListItemButton>


                    <ListItemButton>

                        <ListItemIcon>

                            <ListItemText>

                                Signup
                            </ListItemText>


                        </ListItemIcon>


                    </ListItemButton>





                 </List>


        </Drawer>

        <IconButton  sx={{
            display:{md:'none',xl:'none',lg:'none',sm:'none',xs:'block'},  color:'white'

           
        }} onClick={()=>setOpendraw(!Opendraw)}>

            {/* <ListIcon/> */}

            <ListIcon sx={{color:'black',zIndex:'1',fontSize:'40px'}}/> 
        </IconButton>


    </Box>
  )
}

export default Drawerside