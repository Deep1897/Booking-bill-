import { Box, Button, Grid, Icon, InputAdornment, TextField, Typography } from '@mui/material'
import React from 'react'
import Backgroundcardback from '../assets/images/Backgroundcardback.png'
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import Logopaypal from '../assets/images/Logopaypal.png'
import ModeEditOutlineIcon from '@mui/icons-material/ModeEditOutline';
import Iconmastercard from '../assets/images/Iconmastercard.png'
import DescriptionIcon from '@mui/icons-material/Description';
import Detailscard from '../assets/images/Detailscard.png'
  import Circlescircle from '../assets/images/Circlescircle.png'
function Cardsection() {
  return (
    <Grid sx={{
        display:{xs:'block',sm:'flex',md:'flex',xl:'flex',lg:'flex',},
        position:'absolute',
        width:{xs:'120%',sm:'130%',md:'70%',xl:'78%',lg:'78%',},
        height:{xs:'80%',sm:'40%',md:'40%',xl:'40%',lg:'40%',},
        // border:'1px solid black',
        top:'70px',
        left:{xs:'20px',sm:'275px',md:'275px',xl:'275px',lg:'275px',},
        borderRadius:'10px',
        gap:'2%'
    }}>  


         <Box sx={{
            display:'flex',
             width:{xs:'150%',sm:'58%',md:'58%',xl:'58%',lg:'58%',},
             height:'100%',
            //  border:'1px solid black',
             borderRadius:'10px',
             backgroundColor:'#F8F9FA',
             
             justifyContent:'space-around',

             


         }}>
            {/* box1---------------------------------------------- */}


            <Box sx={{
                 position:'relative',
                  width:'50%',
                  height:'60%',
                //   border:'1px solid black',
                  borderRadius:'10px',
                  

            }}>
               
                <img height={'100%'} width={'100%'} position={'relative'} src={Backgroundcardback}/>
                <Box sx={{
                  display:'flex',
                  position:'absolute',
                  width:'95%',
                  height:'20%',
                  // border:'1px solid white',
                  top:'20px',
                  left:'5px',
                  justifyContent:'space-between',
                }}>
                  <Typography sx={{
                    fontWeight:'bold',
                    color:'#fff',
                    fontSize:{xs:'20px',sm:'10px'},
                    marginTop:'8px'
                  }}>Purity UI</Typography>
                  
                  <Box sx={{
                    width:{xs:'70px',sm:'40px'},
                    height:'100%',
                  }}><img width={'100%'} height={'100%'} src={Circlescircle} /></Box>

                </Box>
            
            </Box>

            <Box sx={{
                  display:'flex',
                  position:'absolute',
                  width:{xs:'40%',sm:'20%'},
                  height:'10%',
                  top:{xs:'150px',sm:'75px'},
                  left:'20px',
                  justifyContent:'space-between',
                }}>

                  <Typography sx={{
                    font:'Helvetica',
                    fontWeight:'bold',
                    fontSize:{xs:'20px',sm:'13px'},
                    color:'#fff',
                  }}>7812 2139 0823 xxxx</Typography>
                </Box>



                <Box sx={{
                  display:'flex',
                  position:'absolute',
                  width:{xs:'40%',sm:'20%'},
                  height:'18%',
                  // border:'1px solid #fff',
                  top:{xs:'200px',sm:'95px'},
                  left:'20px',
                }}>

                  <Box sx={{
                    width:{xs:'100px',sm:'60px'},
                    height:'100%',
                    // border:'1px solid #fff'
                  }}>
                    <Typography sx={{color:'#fff',fontSize:{xs:'13px',sm:'8px'}}}>
                      VALID THRU
                    </Typography>
                    <Typography sx={{color:'#fff',fontSize:{xs:'16px',sm:'13px'}}}>
                      05/24
                    </Typography>

                  </Box>



                  <Box sx={{
                    width:{xs:'100px',sm:'60px'},
                    height:'100%',
                    // border:'1px solid #fff'
                  }}>
                    <Typography sx={{color:'#fff',fontSize:{xs:'13px',sm:'8px'}}}>
                      cvv
                    </Typography>
                    <Typography sx={{color:'#fff',fontSize:{xs:'16px',sm:'13px'}}}>
                      09x
                    </Typography>

                  </Box>


                </Box>




                


            <Box sx={{
                  width:'24%',
                  height:'60%',
                  // border:'1px solid black',
                  borderRadius:'10px',
                  boxShadow:{xs:'0px 0px 0.2px 0.2px',sm:'0.3px 0.3px 0.5px 0.5px'}

            }}>
                
                {/* salary */}

                <Box sx={{

                    width:{xs:'90px',sm:'50px'},
                    height:{xs:'90px',sm:'50px'},
                    // border:'1px solid black',
                    borderRadius:'10px',
                    margin:'auto',
                    marginTop:{xs:'60px',sm:'20px'},
                    backgroundColor:'#4FD1C5',


                }}>
                    <BusinessCenterIcon sx={{color:'#fff',marginLeft:{xs:'30px',sm:'12px'},marginTop:{xs:'30px',sm:'10px'}}}/>
                    



                </Box>

                <Box sx={{
                    boxSizing:'border-box',
                     width:'100px',
                     height:'60px',
                    //  border:'1px solid black',
                     margin:'auto',
                     textAlign:'center',
                     marginTop:{xs:'30px',sm:'0px'}

                    
                }}>
                    <Typography sx={{
                        fontWeight:'bold',
                        fontSize:'15px',
                        color:'#2D3748',

                    }}>Salary</Typography>

                      <Typography sx={{
                        fontWeight:'bold',
                        fontSize:'8px',
                        color:'#2D3748',

                       }}>Belong Interactive</Typography>

                       <hr sx={{color:'gray',backgroundColor:'white',width:'40px'}}/>
                       <Typography sx={{
                        fontWeight:'bold',
                        fontSize:'12px',
                        color:'#2D3748',
                        marginTop:'-10px'

                       }}>+$2000</Typography>
                </Box>
            
            </Box>

            <Box sx={{
                  width:'24%',
                  height:'60%',
                  // border:'1px solid black',
                  borderRadius:'10px',
                  alignItems:'center',
                  boxShadow:{xs:'0px 0px 0.2px 0.2px',sm:'0.3px 0.3px 0.5px 0.5px'},

                  

            }}>
                
                 {/* paypal */}

                 <Box sx={{
                    position:'relative',
                    width:{xs:'90px',sm:'50px'},
                    height:{xs:'90px',sm:'50px'},
                    //   border:'1px solid black',
                      borderRadius:'10px',
                      margin:'auto',
                      marginTop:{xs:'60px',sm:'20px'},
                      backgroundColor:'#4FD1C5',
                      margin:'auto',
                 }}>
                    <Box sx={{ 
                      position:'absolute',
                      width:'20px',
                      height:'20px',
                    //   border:'1px solid black',
                      left:{xs:'30px',sm:'13px'},
                      top:{xs:'35px',sm:'10px'},
                      
                    //   marginLeft:'13px',

                      }}><img src={Logopaypal}/></Box>

                 </Box>

                 <Box sx={{
                    boxSizing:'border-box',
                     width:'100px',
                     height:'60px',
                    //  border:'1px solid black',
                     margin:'auto',
                     textAlign:'center',
                     marginTop:{xs:'30px',sm:'0px'}


                    
                }}>
                    <Typography sx={{
                        fontWeight:'bold',
                        fontSize:'15px',
                        color:'#2D3748',

                    }}>Paypal</Typography>

                      <Typography sx={{
                        fontWeight:'bold',
                        fontSize:'8px',
                        color:'#2D3748',

                       }}>Freelance Payment</Typography>

                       <hr sx={{color:'gray',backgroundColor:'white',width:'40px'}}/>
                       <Typography sx={{
                        fontWeight:'bold',
                        fontSize:'12px',
                        color:'#2D3748',
                        marginTop:'-10px'

                       }}>$455</Typography>
                </Box>
                 
                 </Box>





         </Box>
         <Box sx={{
            
            width:{xs:'150%',sm:'40%',md:'40%',xl:'40%',lg:'40%',},
             height:{xs:'70%',sm:'100%',md:'100%',xl:'100%',lg:'100%',},
            //  border:'1px solid black',
             borderRadius:'10px',
             backgroundColor:'#F8F9FA',
             marginTop:{xs:'20px',sm:'0px'}



         }}>
            {/* box2---------------------------------------------- */}

              <Box sx={{
                display:'flex',
                width:'100%',
                height:{xs:'60px',sm:'30px'},
                // border:'1px solid black',
                marginTop:'5px',
                justifyContent:'space-between'
              }}>  

                <Box sx={{marginLeft:'5px'}}>
                      <Typography sx={{
                        fontWeight:'bold',
                        fontSize:{xs:'20px',sm:'13px'},
                      }}>Invoice</Typography>

                </Box>
                <Box sx={{marginRight:'5px'}}>

                    <Button variant='outlined' sx={{
                        fontWeight:'bold',
                        fontSize:{xs:'20px',sm:'8px'},
                        color:'black',

                    }}>View all</Button>


                </Box>






              </Box>

              <Box sx={{
                display:'flex',
                width:'100%',
                height:{xs:'60px',sm:'30px'},
                // border:'1px solid black',
                marginTop:'5px',
                justifyContent:'space-between'
              }}> 
                   
                   <Box>
                    <Typography sx={{
                        fontWeight:'bold',
                        fontSize:{xs:'16px',sm:'10px'},
                    }}>March, 01, 2020</Typography>

                    <Typography sx={{
                        fontSize:{xs:'15px',sm:'8px'}
                    }}>#MS-515646</Typography>


                   </Box>
                   <Box sx={{marginRight:'8px',display:'flex'}}>

                    <Typography sx={{
                        fontWeight:'bold',
                        fontSize:{xs:'13px',sm:'8px'},
                        marginTop:'10px',
                    }}>$180</Typography>
                    <Typography sx={{
                        fontWeight:'bold',
                        fontSize:{xs:'16px',sm:'10px'},
                        marginTop:{xs:'-0px',sm:'-5px'},
                    }}>
                        <Icon><DescriptionIcon sx={{fontSize:'15px'}}/></Icon> pdf
                    </Typography>


                   </Box>
              
               </Box>

               <Box sx={{
                display:'flex',
                width:'100%',
                height:{xs:'60px',sm:'30px'},
                // border:'1px solid black',
                marginTop:'5px',
                justifyContent:'space-between'
              }}> 
                   
                   <Box>
                    <Typography sx={{
                        fontWeight:'bold',
                        fontSize:{xs:'16px',sm:'10px'},
                    }}>March, 01, 2020</Typography>

                    <Typography sx={{
                        fontSize:{xs:'15px',sm:'8px'}
                    }}>#MS-515646</Typography>


                   </Box>
                   <Box sx={{marginRight:'8px',display:'flex'}}>

                    <Typography sx={{
                        fontWeight:'bold',
                        fontSize:{xs:'13px',sm:'8px'},
                        marginTop:'10px',
                    }}>$180</Typography>
                    <Typography sx={{
                        fontWeight:'bold',
                        fontSize:{xs:'16px',sm:'10px'},
                        marginTop:{xs:'-0px',sm:'-5px'},
                    }}>
                        <Icon><DescriptionIcon sx={{fontSize:'15px'}}/></Icon> pdf
                    </Typography>


                   </Box>
              
               </Box>

               <Box sx={{
                display:'flex',
                width:'100%',
                height:{xs:'60px',sm:'30px'},
                // border:'1px solid black',
                marginTop:'5px',
                justifyContent:'space-between'
              }}> 
                   
                   <Box>
                    <Typography sx={{
                        fontWeight:'bold',
                        fontSize:{xs:'16px',sm:'10px'},
                    }}>March, 01, 2020</Typography>

                    <Typography sx={{
                        fontSize:{xs:'15px',sm:'8px'}
                    }}>#MS-515646</Typography>


                   </Box>
                   <Box sx={{marginRight:'8px',display:'flex'}}>

                    <Typography sx={{
                        fontWeight:'bold',
                        fontSize:{xs:'13px',sm:'8px'},
                        marginTop:'10px',
                    }}>$180</Typography>
                    <Typography sx={{
                        fontWeight:'bold',
                        fontSize:{xs:'16px',sm:'10px'},
                        marginTop:{xs:'-0px',sm:'-5px'},
                    }}>
                        <Icon><DescriptionIcon sx={{fontSize:'15px'}}/></Icon> pdf
                    </Typography>


                   </Box>
              
               </Box>

               <Box sx={{
                display:'flex',
                width:'100%',
                height:{xs:'60px',sm:'30px'},
                // border:'1px solid black',
                marginTop:'5px',
                justifyContent:'space-between'
              }}> 
                   
                   <Box>
                    <Typography sx={{
                        fontWeight:'bold',
                        fontSize:{xs:'16px',sm:'10px'},
                    }}>March, 01, 2020</Typography>

                    <Typography sx={{
                        fontSize:{xs:'15px',sm:'8px'}
                    }}>#MS-515646</Typography>


                   </Box>
                   <Box sx={{marginRight:'8px',display:'flex'}}>

                    <Typography sx={{
                        fontWeight:'bold',
                        fontSize:{xs:'13px',sm:'8px'},
                        marginTop:'10px',
                    }}>$180</Typography>
                    <Typography sx={{
                        fontWeight:'bold',
                        fontSize:{xs:'16px',sm:'10px'},
                        marginTop:{xs:'-0px',sm:'-5px'},
                    }}>
                        <Icon><DescriptionIcon sx={{fontSize:'15px'}}/></Icon> pdf
                    </Typography>


                   </Box>
              
               </Box>

               <Box sx={{
                display:'flex',
                width:'100%',
                height:{xs:'60px',sm:'30px'},
                // border:'1px solid black',
                marginTop:'5px',
                justifyContent:'space-between'
              }}> 
                   
                   <Box>
                    <Typography sx={{
                        fontWeight:'bold',
                        fontSize:{xs:'16px',sm:'10px'},
                    }}>March, 01, 2020</Typography>

                    <Typography sx={{
                        fontSize:{xs:'15px',sm:'8px'}
                    }}>#MS-515646</Typography>


                   </Box>
                   <Box sx={{marginRight:'8px',display:'flex'}}>

                    <Typography sx={{
                        fontWeight:'bold',
                        fontSize:{xs:'13px',sm:'8px'},
                        marginTop:'10px',
                    }}>$180</Typography>
                    <Typography sx={{
                        fontWeight:'bold',
                        fontSize:{xs:'16px',sm:'10px'},
                        marginTop:{xs:'-0px',sm:'-5px'},
                    }}>
                        <Icon><DescriptionIcon sx={{fontSize:'15px'}}/></Icon> pdf
                    </Typography>


                   </Box>
              
               </Box>

               {/* -------------------------------------------- */}

         </Box>

         <Box sx={{
            position:'absolute',
            width:{xs:'150%',sm:'57%',md:'57%',xl:'57%',lg:'57%',},
            height:'32%',
            // border:'1px solid black',
            top:'65%',
            left:'0.5%',
            borderRadius:'10px',

         }}>


            <Box sx={{
                display:'flex',
                 width:'100%',
                 height:'40%',
                 justifyContent:'space-between',
                 borderRadius:'5px',
                 marginBottom:'5px'
            }}>

                <Box>
                    <Typography sx={{fontSize:'13px',color:'#2D3748',marginLeft:'20px',fontWeight:'bold'}}>Payment Method</Typography>
                </Box>
                <Box>
                    <Button variant='contained' sx={{textDecoration:'none',height:'100%',backgroundColor:'#313860','&:hover':{backgroundColor:'#313860'},width:'130px',fontSize:'10px',fontWeight:'bold'}}>Add a new card</Button>
                </Box>





            </Box>

            <Box sx={{
                display:'flex',
                gap:'5%',
                justifyContent:'space-between',
                marginTop:{xs:'20px',sm:'0px'},
                
                }}>

          <TextField 
         size='small'
        InputProps={{
            startAdornment: (
                <InputAdornment position="start">
                  <img src={Iconmastercard}/>
                </InputAdornment>
              ),
          endAdornment: (
            <InputAdornment position="start">
              <ModeEditOutlineIcon fontSize='15px'/>
            </InputAdornment>
          ),
        }}
      />              



<TextField 
         size='small'
        InputProps={{
            startAdornment: (
                <InputAdornment position="start">
                  <img src={Iconmastercard}/>
                </InputAdornment>
              ),
          endAdornment: (
            <InputAdornment position="start">
              <ModeEditOutlineIcon fontSize='15px'/>
            </InputAdornment>
          ),
        }}
      />


            </Box>

     
         </Box>




    </Grid>
  )
}

export default Cardsection