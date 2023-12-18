import React from 'react'
import Sidebar from '../components/Sidebar'
import { Box } from '@mui/material'
import Navbar from '../components/Navbar'
import Cardsection from '../components/Cardsection'
import Middle from '../components/Middle'
import Footer from '../components/Footer'
import Footerdub from '../components/Footerdub'
import Drawerside from '../components/Drawerside'

function Billscreen() {
  return (
   <Box sx={{
    width:{xs:'99%',sm:'99%',md:'99%',xl:'99%',lg:'99%',},
    height:{xs:'99%',sm:'99%',md:'99%',xl:'99%',lg:'99%',},
    // backgroundColor:' #F8F9FA',

    margin:'auto',
   }}>
    <Drawerside/>
   <Sidebar/>
   <Navbar/>
   <Cardsection/>
   <Middle/>
   <Footer/>
   <Footerdub/>
 


   </Box>

   
   
  )
}

export default Billscreen