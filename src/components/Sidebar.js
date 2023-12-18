import React from 'react'
import Grid from '@mui/material/Grid'
import { Box, Button } from '@mui/material'
import Shapepure from '../assets/images/Shapepure.png'
import QuestionMarkIcon from '@mui/icons-material/QuestionMark';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import TableRowsIcon from '@mui/icons-material/TableRows';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import BuildIcon from '@mui/icons-material/Build';
import PersonIcon from '@mui/icons-material/Person';
import DescriptionIcon from '@mui/icons-material/Description';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';

function Sidebar() {
  return (
    <Grid  sx={{
     display:{xs:'none',sm:'block'},
     position:'relative',
     width:'250px',
     height:{xs:'0px',sm:'700px',md:'700px',xl:'700px',lg:'550px',},
    //  border:'1px solid black',
     borderRadius:'8px',
     backgroundColor:' #F8F9FA',
     textAlign:'center',

    }} direction={'column'} >

        <Box sx={{
            boxSizing:'border-box',
            display:{xs:'none',sm:'flex',md:'flex'},
            width:'auto',
            padding:'2px',
            height:'20px',
            marginTop:'10px',
            marginLeft:'20px'
         }}>
            {/* 1 */}
             <img color={'white'} height={'10px'}  src={Shapepure}/>
            <Button sx={{
                fontWeight:'bold',
                fontSize:{xs:'10px',sm:'10px',md:'10px'},
                marginLeft:'-5px',
                marginTop:'-5px'
             }} variant='plain' size='small'>Purity Ui Dashboard</Button>

        </Box>

          {/* dashboard------------------------------------ */}

        <Box sx={{
            boxSizing:'border-box',
            display:{xs:'none',sm:'flex',md:'flex'},
            width:'150px',
            padding:'2px',
            height:'40px',
            marginTop:'20px',
            marginLeft:'20px',
            backgroundColor:' #fff',
            borderRadius:'8px',
           
         }}>
            {/* 1 */}
         
             {/* <img color={'white'} height={'10px'}  src={Shapepure}/> */}
            <Button sx={{
               

                fontWeight:'bold',
                fontSize:{xs:'10px',sm:'10px',md:'10px'},
                marginLeft:'0px',
                marginTop:'0px',
                gap:'5px'

             }} variant='plain' size='small' >
                
                <Box
            sx={{
                width:'20px',
                height:'20px',
                // border:'1px solid black',
                borderRadius:'10px',
                backgroundColor:'#4FD1C5',
            }}>

                <HomeRoundedIcon sx={{fontSize:"20px",color:'white'}} />

            </Box>
                
                  Dashboard</Button>

        </Box>

       {/* table------------------------------------------------------ */}

       <Box sx={{
            boxSizing:'border-box',
            display:{xs:'none',sm:'flex',md:'flex'},
            width:'auto',
            padding:'2px',
            height:'20px',
            marginTop:'20px',
            marginLeft:'20px',
         }}>
            {/* 1 */}
         
             {/* <img color={'white'} height={'10px'}  src={Shapepure}/> */}
            <Button sx={{
               

                fontWeight:'bold',
                fontSize:{xs:'8px',sm:'8px',md:'8px'},
                marginLeft:'5px',
                marginTop:'-40px',
                gap:'5px'

             }} variant='plain' size='small' >
                
                <Box
            sx={{
                width:'17px',
                height:'17px',
                // border:'1px solid black',
                borderRadius:'10px',
                backgroundColor:'#4FD1C5',

            }}>

                <TableRowsIcon sx={{fontSize:'15px',color:'#fff'}}/>

            </Box>
                
                  Table</Button>

        </Box>

        {/* billing--------------------------------- */}
        <Box sx={{
            boxSizing:'border-box',
            display:{xs:'none',sm:'flex',md:'flex'},
            width:'auto',
            padding:'2px',
            height:'20px',
            marginTop:'20px',
            marginLeft:'20px',
         }}>
            {/* 1 */}
         
             {/* <img color={'white'} height={'10px'}  src={Shapepure}/> */}
            <Button sx={{
               

                fontWeight:'bold',
                fontSize:{xs:'8px',sm:'8px',md:'8px'},
                marginLeft:'5px',
                marginTop:'-40px',
                gap:'5px'

             }} variant='plain' size='small' >
                
                <Box
            sx={{
                width:'17px',
                height:'17px',
                // border:'1px solid black',
                borderRadius:'10px',
                backgroundColor:'#4FD1C5',

            }}>

                <CreditCardIcon sx={{fontSize:'15px',color:'white'}}/>

            </Box>
                
                  Billing</Button>

        </Box>
        {/* rtl-------------------------------------------- */}

        <Box sx={{
            boxSizing:'border-box',
            display:{xs:'none',sm:'flex',md:'flex'},
            width:'auto',
            padding:'2px',
            height:'20px',
            marginTop:'20px',
            marginLeft:'20px',
         }}>
            {/* 1 */}
         
             {/* <img color={'white'} height={'10px'}  src={Shapepure}/> */}
            <Button sx={{
               

                fontWeight:'bold',
                fontSize:{xs:'8px',sm:'8px',md:'8px'},
                marginLeft:'5px',
                marginTop:'-40px',
                gap:'5px'

             }} variant='plain' size='small' >
                
                <Box
            sx={{
                width:'17px',
                height:'17px',
                // border:'1px solid black',
                borderRadius:'10px',
                backgroundColor:'#4FD1C5',

            }}>

                <BuildIcon sx={{fontSize:'15px',color:'#fff'}}/>

            </Box>
                
                  RTL</Button>

        </Box>
           <Box sx={{
            marginTop:'-30px',
            marginLeft:'-30px'
           }}>

           <h6 marginTop="-100px">ACCOUNT PAGES</h6>
           </Box>
        

        {/* profile------------------------------------- */}

        <Box sx={{
            boxSizing:'border-box',
            display:{xs:'none',sm:'flex',md:'flex'},
            width:'auto',
            padding:'2px',
            height:'20px',
            marginTop:'30px',
            marginLeft:'20px',
         }}>
            {/* 1 */}
         
             {/* <img color={'white'} height={'10px'}  src={Shapepure}/> */}
            <Button sx={{
               

                fontWeight:'bold',
                fontSize:{xs:'8px',sm:'8px',md:'8px'},
                marginLeft:'5px',
                marginTop:'-40px',
                gap:'5px'

             }} variant='plain' size='small' >
                
                <Box
            sx={{
                width:'17px',
                height:'17px',
                // border:'1px solid black',
                borderRadius:'10px',
                backgroundColor:'#4FD1C5',

            }}>

                <DescriptionIcon sx={{fontSize:'15px',color:'#fff'}}/>

            </Box>
                
                  Profile</Button>

        </Box>
        {/* signin---------------------------------------- */}

        <Box sx={{
            boxSizing:'border-box',
            display:{xs:'none',sm:'flex',md:'flex'},
            width:'auto',
            padding:'2px',
            height:'20px',
            marginTop:'20px',
            marginLeft:'20px',
         }}>
            {/* 1 */}
         
             {/* <img color={'white'} height={'10px'}  src={Shapepure}/> */}
            <Button sx={{
               

                fontWeight:'bold',
                fontSize:{xs:'8px',sm:'8px',md:'8px'},
                marginLeft:'5px',
                marginTop:'-40px',
                gap:'5px'

             }} variant='plain' size='small' >
                
                <Box
            sx={{
                width:'17px',
                height:'17px',
                // border:'1px solid black',
                borderRadius:'10px',
                backgroundColor:'#4FD1C5',

            }}>

               <PersonIcon sx={{fontSize:'15px',color:'#fff'}}/>



            </Box>
                
                  Signin</Button>

        </Box>

        {/* signup---------------------------- */}

        <Box sx={{
            boxSizing:'border-box',
            display:{xs:'none',sm:'flex',md:'flex'},
            width:'auto',
            padding:'2px',
            height:'20px',
            marginTop:'20px',
            marginLeft:'20px',
         }}>
            {/* 1 */}
         
             {/* <img color={'white'} height={'10px'}  src={Shapepure}/> */}
            <Button sx={{
               

                fontWeight:'bold',
                fontSize:{xs:'8px',sm:'8px',md:'8px'},
                marginLeft:'5px',
                marginTop:'-40px',
                gap:'5px'

             }} variant='plain' size='small' >
                
                <Box
            sx={{
                width:'17px',
                height:'17px',
                // border:'1px solid black',
                borderRadius:'10px',
                backgroundColor:'#4FD1C5',

            }}>

               <RocketLaunchIcon sx={{fontSize:'15px',color:'#fff'}}/>


            </Box>
                
                  Sign up</Button>

        </Box>

        {/* grrnbox-------------------------------------------- */}

        <Box sx={{
            position:'relative',
            width:'218px',
            height:'170.6px',
            backgroundColor:'#4FD1C5',
            margin:'auto',
            borderRadius:'10px',

            
         }}>

            <Box sx={{
                position:'absolute',
                width:"40px",
                height:'40px',
                top:'10px',
                left:'15px',
                borderRadius:'10px',
                backgroundColor:'#fff'
                
             }}>
                <Box sx={{width:'20px',height:'20px',borderRadius:'10px',margin:'auto',position:'absolute',top:'9px',left:'9px',backgroundColor:'#4FD1C5'}}><QuestionMarkIcon sx={{fontSize:'20px',color:'#fff'}} /></Box>
               
            </Box>

            <Box sx={{
                position:'absolute',
                left:'15px',
                top:'40px',
                color:'white'


        
        }}>
            <h6 >Need help ?</h6>
            </Box>


            
            <Box sx={{
                position:'absolute',
                left:'15px',
                top:'70px',
                color:'white'


        
        }}>
            <p>Please check our docs</p>
            </Box>


                  
            <Box sx={{
                position:'absolute',
                left:'40px',
                top:'120px',
                color:'white'


        
        }}>

            <Button variant='contained' sx={{
                backgroundColor:'#fff',
                color:'black',
                borderRadius:'8px',
                fontWeight:'bold',
                fontSize:'11px',
                '&:hover':{
                    backgroundColor:'#fff'
                }
                
                }}>Documentation</Button>
            </Box>
            


        </Box>


        



    </Grid>
  )
}

export default Sidebar