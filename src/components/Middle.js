import { Box, Grid, Icon, Typography } from '@mui/material'
import React from 'react'
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import Icondown from '../assets/images/Icondown.png'
import { red } from '@mui/material/colors';
import Iconuparowswer from '../assets/images/Iconuparowswer.png'


function Middle() {
  return (
    <Grid sx={{

        display:{xs:'block',sm:'flex',md:'flex',xl:'flex',lg:'flex',},
        position:'absolute',
        width:{xs:'180%',sm:'130%',md:'70%',xl:'78%',lg:'78%',},
        height:{xs:'80%',sm:'40%',md:'40%',xl:'40%',lg:'40%',},
        top:{xs:'160%',sm:'55%'},
        left:{xs:'20px',sm:'275px',md:'275px',xl:'275px',lg:'275px',},
        borderRadius:'10px',
        gap:'2%',
        backgroundColor:'#fff'
    }}>
          
          <Box sx={{

                  width:{xs:'100%',sm:'49%',md:'49%',xl:'49%',lg:'49%',},
                  height:'60%',
                //   border:'1px solid black',
                  borderRadius:'10px',
                  backgroundColor:'#fff',
                  
                  justifyContent:'space-around',
          }}>
            {/* box1---------------------------------- */}

            <Box><Typography sx={{
                 fontWeight:'bold',
                 fontSize:{xs:'20px',sm:'13px'},
                 color:'gray',
                 marginLeft:'5px',
            }}>Billing Information</Typography></Box>

            <Box sx={{
                display:'flex',
                width:'100%',
                height:'60px',
                // border:'1px solid black',
                marginTop:'10px',
                backgroundColor:'#F8F9FA',
                borderRadius:'5px',
                justifyContent:'space-between',
                


            }}>

                <Box sx={{
                    width:'40%',
                    height:'100%',
                    // border:'1px solid black',
                    marginLeft:'5px',
                }}>
                    <Typography sx={{
                        fontWeight:'bold',
                        fontSize:'12px',
                        color:'#2D3748',

                    }}>Oliver Liam</Typography>

                    <Typography sx={{
                        fontSize:'10px',
                        color:'#2D3748',

                    }}>Company Name: Vikking Burrito</Typography>

                      <Typography sx={{
                        fontSize:'10px',
                        color:'#2D3748',

                    }}>Email Address: oliver@burrito.com</Typography>

                       <Typography sx={{
                        fontSize:'10px',
                        color:'#2D3748',

                    }}>VAT Number: FRB1235476</Typography>



                </Box>

                <Box sx={{
                    display:'flex',
                    width:'30%',
                    height:'100%',
                    // border:'1px solid black',
                    marginRight:'5px',
                    gap:'10px'
                }}>

                    <Typography sx={{
                        fontWeight:'bold',
                        fontSize:'10px',
                        color:'red',

                    }}><Icon><DeleteIcon sx={{color:'red', fontSize:'15px',}}/></Icon> Delete </Typography>
                   
                   <Typography sx={{
                        fontWeight:'bold',
                        fontSize:'10px',
                        color:'red',

                    }}><Icon><EditIcon sx={{color:'red', fontSize:'15px',}}/></Icon> Delete </Typography>

                </Box>

            </Box>

            <Box sx={{
                display:'flex',
                width:'100%',
                height:'60px',
                // border:'1px solid black',
                marginTop:'10px',
                backgroundColor:'#F8F9FA',
                borderRadius:'5px',
                justifyContent:'space-between',



            }}>
                <Box sx={{
                    width:'40%',
                    height:'100%',
                    // border:'1px solid black',
                    marginLeft:'5px',
                }}>
                    <Typography sx={{
                        fontWeight:'bold',
                        fontSize:'12px',
                        color:'#2D3748',

                    }}>Oliver Liam</Typography>

                    <Typography sx={{
                        fontSize:'10px',
                        color:'#2D3748',

                    }}>Company Name: Vikking Burrito</Typography>

                      <Typography sx={{
                        fontSize:'10px',
                        color:'#2D3748',

                    }}>Email Address: oliver@burrito.com</Typography>

                       <Typography sx={{
                        fontSize:'10px',
                        color:'#2D3748',

                    }}>VAT Number: FRB1235476</Typography>



                </Box>

                <Box sx={{
                    display:'flex',
                    width:'30%',
                    height:'100%',
                    // border:'1px solid black',
                    marginRight:'5px',
                    gap:'10px'
                }}>

                    <Typography sx={{
                        fontWeight:'bold',
                        fontSize:'10px',
                        color:'red',

                    }}><Icon><DeleteIcon sx={{color:'red', fontSize:'15px',}}/></Icon> Delete </Typography>
                   
                   <Typography sx={{
                        fontWeight:'bold',
                        fontSize:'10px',
                        color:'red',

                    }}><Icon><EditIcon sx={{color:'red', fontSize:'15px',}}/></Icon> Delete </Typography>

                </Box>

            </Box>

            <Box sx={{
                display:'flex',
                width:'100%',
                height:'60px',
                // border:'1px solid black',
                marginTop:'10px',
                backgroundColor:'#F8F9FA',
                borderRadius:'5px',
                justifyContent:'space-between'


            }}>

<Box sx={{
                    width:'40%',
                    height:'100%',
                    // border:'1px solid black',
                    marginLeft:'5px',
                }}>
                    <Typography sx={{
                        fontWeight:'bold',
                        fontSize:'12px',
                        color:'#2D3748',

                    }}>Oliver Liam</Typography>

                    <Typography sx={{
                        fontSize:'10px',
                        color:'#2D3748',

                    }}>Company Name: Vikking Burrito</Typography>

                      <Typography sx={{
                        fontSize:'10px',
                        color:'#2D3748',

                    }}>Email Address: oliver@burrito.com</Typography>

                       <Typography sx={{
                        fontSize:'10px',
                        color:'#2D3748',

                    }}>VAT Number: FRB1235476</Typography>



                </Box>

                <Box sx={{
                    display:'flex',
                    width:'30%',
                    height:'100%',
                    // border:'1px solid black',
                    marginRight:'5px',
                    gap:'10px'
                }}>

                    <Typography sx={{
                        fontWeight:'bold',
                        fontSize:'10px',
                        color:'red',

                    }}><Icon><DeleteIcon sx={{color:'red', fontSize:'15px',}}/></Icon> Delete </Typography>
                   
                   <Typography sx={{
                        fontWeight:'bold',
                        fontSize:'10px',
                        color:'red',

                    }}><Icon><EditIcon sx={{color:'red', fontSize:'15px',}}/></Icon> Delete </Typography>

                </Box>

            </Box>



            {/* box1-------------------------- */}


          </Box>
          <Box sx={{
             width:{xs:'100%',sm:'49%',md:'49%',xl:'49%',lg:'49%',},
             height:{xs:'70%',sm:'100%',md:'100%',xl:'100%',lg:'100%',},
            //  border:'1px solid black',
             borderRadius:'10px',
             backgroundColor:'#fff',
             marginTop:{xs:'20px',sm:'0px'}
          }}>
             {/* box2------------------------------ */}

             <Box sx={{
                display:'flex',
                width:'100%',
                height:'10%',
                // border:'1px solid black',
                justifyContent:'space-between',

             }}>

                <Box sx={{
                    width:'200px',
                    height:'100%',
                    // border:'1px solid black',
                    marginLeft:'5px',

                }}><Typography sx={{
                    fontWeight:'bold',
                    font:'Helvetica',
                    fontSize:'13px',
                    color:'gray',
                }} >Your Transaction</Typography></Box>



                <Box sx={{marginTop:'-6px',marginRight:'10px'}}>
                    <Typography sx={{
                        fontWeight:'bold',
                        font:'Helvetica',
                        fontSize:'13px',
                        color:'gray',
                    }}><Icon><CalendarMonthIcon sx={{fontSize:'15px',marginTop:'-4px'}} /></Icon>20-23 March 2020</Typography>
                </Box>


             </Box>

             <Box sx={{
                    width:'100%',
                    height:'5%',
                    // border:'1px solid black',
                 }}>
                     <Typography sx={{
                        fontWeight:'bold',
                        font:'Helvetica',
                        fontSize:'8px',
                        color:'gray',
                        marginLeft:'5px'
                     }}>Newest</Typography>
             </Box>
             <Box sx={{
                     display:'flex',
                    width:'100%',
                    height:'15%',
                    // border:'1px solid black',
                    justifyContent:'space-between',
                 }}>
                  {/* Image contane and netflix----------------------- */}
                    <Box sx={{
                        display:'flex',
                        width:'150px',
                        height:'100%',
                        // border:'1px solid black',
                    }}>
                        <Box sx={{
                            width:'25px',
                            height:'80%',
                            marginRight:'10px'
                            // border:'1px solid black',
                        }}><img width={'100%'}height={'100%'} src={Icondown}/></Box>

                        <Box sx={{
                            width:'115px',
                            height:'100%',
                            // border:'1px solid black',
                        }}>
                            
                        <Typography sx={{
                        fontWeight:'bold',
                        font:'Helvetica',
                        fontSize:'10px',
                        marginLeft:'5px'
                        }}>Netflix</Typography>

                     <Typography sx={{
                        fontWeight:'bold',
                        font:'Helvetica',
                        fontSize:'8px',
                        marginLeft:'5px'
                        }}>27 March 2020 ,at 12:30 PM</Typography>

                        </Box>

                    </Box>
                    <Box sx={{
                            width:'75px',
                            height:'100%',
                            // border:'1px solid black',
                        }}>

                            <Typography sx={{
                                fontWeight:'bold',
                                font:'Helvetica',
                                fontSize:'8px',
                                marginLeft:'5px',
                                color:'red',
                                marginLeft:'30px',
                                marginTop:'10px',

                            }} >-$2500</Typography>
                    </Box>


                </Box>



                <Box sx={{
                     display:'flex',
                    width:'100%',
                    height:'15%',
                    // border:'1px solid black',
                    justifyContent:'space-between',
                 }}>
                  {/* Image contane and netflix----------------------- */}
                    <Box sx={{
                        display:'flex',
                        width:'150px',
                        height:'100%',
                        // border:'1px solid black',
                    }}>
                        <Box sx={{
                           width:'25px',
                           height:'80%',
                           marginRight:'10px'
                            // border:'1px solid black',
                        }}><img width={'100%'}height={'100%'} src={Iconuparowswer}/></Box>

                        <Box sx={{
                            width:'115px',
                            height:'100%',
                            // border:'1px solid black',
                        }}>
                            
                        <Typography sx={{
                        fontWeight:'bold',
                        font:'Helvetica',
                        fontSize:'10px',
                        marginLeft:'5px'
                        }}>Apple</Typography>

                     <Typography sx={{
                        fontWeight:'bold',
                        font:'Helvetica',
                        fontSize:'8px',
                        marginLeft:'5px'
                        }}>27 March 2020 ,at 12:30 PM</Typography>

                        </Box>

                    </Box>
                    <Box sx={{
                            width:'75px',
                            height:'100%',
                            // border:'1px solid black',
                        }}>

                            <Typography sx={{
                                fontWeight:'bold',
                                font:'Helvetica',
                                fontSize:'8px',
                                marginLeft:'5px',
                                color:'green',
                                marginLeft:'30px',
                                marginTop:'10px',

                            }} >+$2500</Typography>
                    </Box>


                </Box>

                <Box sx={{
                    width:'100%',
                    height:'5%',
                    // border:'1px solid black',
                 }}>
                     <Typography sx={{
                        fontWeight:'bold',
                        font:'Helvetica',
                        fontSize:'8px',
                        color:'gray',
                        marginLeft:'5px'
                     }}>Yesturday</Typography>
             </Box>

             
             <Box sx={{
                     display:'flex',
                    width:'100%',
                    height:'15%',
                    // border:'1px solid black',
                    justifyContent:'space-between',
                 }}>
                  {/* Image contane and netflix----------------------- */}
                    <Box sx={{
                        display:'flex',
                        width:'150px',
                        height:'100%',
                        // border:'1px solid black',
                    }}>
                        <Box sx={{
                           width:'25px',
                           height:'80%',
                           marginRight:'10px'
                            // border:'1px solid black',
                        }}><img width={'100%'}height={'100%'} src={Iconuparowswer}/></Box>

                        <Box sx={{
                            width:'115px',
                            height:'100%',
                            // border:'1px solid black',
                        }}>
                            
                        <Typography sx={{
                        fontWeight:'bold',
                        font:'Helvetica',
                        fontSize:'10px',
                        marginLeft:'5px'
                        }}>Stripe</Typography>

                     <Typography sx={{
                        fontWeight:'bold',
                        font:'Helvetica',
                        fontSize:'8px',
                        marginLeft:'5px'
                        }}>27 March 2020 ,at 13:45 PM</Typography>

                        </Box>

                    </Box>
                    <Box sx={{
                            width:'75px',
                            height:'100%',
                            // border:'1px solid black',
                        }}>

                            <Typography sx={{
                                fontWeight:'bold',
                                font:'Helvetica',
                                fontSize:'8px',
                                marginLeft:'5px',
                                color:'green',
                                marginLeft:'30px',
                                marginTop:'10px',

                            }} >+$800</Typography>
                    </Box>


                </Box>


                <Box sx={{
                     display:'flex',
                    width:'100%',
                    height:'15%',
                    // border:'1px solid black',
                    justifyContent:'space-between',
                 }}>
                  {/* Image contane and netflix----------------------- */}
                    <Box sx={{
                        display:'flex',
                        width:'150px',
                        height:'100%',
                        // border:'1px solid black',
                    }}>
                        <Box sx={{
                            width:'25px',
                            height:'80%',
                            marginRight:'10px'
                            // border:'1px solid black',
                        }}><img width={'100%'}height={'100%'} src={Iconuparowswer}/></Box>

                        <Box sx={{
                            width:'115px',
                            height:'100%',
                            // border:'1px solid black',
                        }}>
                            
                        <Typography sx={{
                        fontWeight:'bold',
                        font:'Helvetica',
                        fontSize:'10px',
                        marginLeft:'5px'
                        }}>Hubspot</Typography>

                     <Typography sx={{
                        fontWeight:'bold',
                        font:'Helvetica',
                        fontSize:'8px',
                        marginLeft:'5px'
                        }}>27 March 2020 ,at 13:45 PM</Typography>

                        </Box>

                    </Box>
                    <Box sx={{
                            width:'75px',
                            height:'100%',
                            // border:'1px solid black',
                        }}>

                            <Typography sx={{
                                fontWeight:'bold',
                                font:'Helvetica',
                                fontSize:'8px',
                                marginLeft:'5px',
                                color:'green',
                                marginLeft:'30px',
                                marginTop:'10px',

                            }} >+$2600</Typography>
                    </Box>


                </Box>

                <Box sx={{
                     display:'flex',
                    width:'100%',
                    height:'15%',
                    // border:'1px solid black',
                    justifyContent:'space-between',
                 }}>
                  {/* Image contane and netflix----------------------- */}
                    <Box sx={{
                        display:'flex',
                        width:'150px',
                        height:'100%',
                        // border:'1px solid black',
                    }}>
                        <Box sx={{
                            width:'25px',
                            height:'80%',
                            marginRight:'10px'
                            // border:'1px solid black',
                        }}><img width={'100%'}height={'100%'} src={Icondown}/></Box>

                        <Box sx={{
                            width:'115px',
                            height:'100%',
                            // border:'1px solid black',
                        }}>
                            
                        <Typography sx={{
                        fontWeight:'bold',
                        font:'Helvetica',
                        fontSize:'10px',
                        marginLeft:'5px'
                        }}>Microsoft</Typography>

                     <Typography sx={{
                        fontWeight:'bold',
                        font:'Helvetica',
                        fontSize:'8px',
                        marginLeft:'5px'
                        }}>27 March 2020 ,at 12:30 PM</Typography>

                        </Box>

                    </Box>
                    <Box sx={{
                            width:'75px',
                            height:'100%',
                            // border:'1px solid black',
                        }}>

                            <Typography sx={{
                                fontWeight:'bold',
                                font:'Helvetica',
                                fontSize:'8px',
                                marginLeft:'5px',
                                color:'red',
                                marginLeft:'30px',
                                marginTop:'10px',

                            }} >-$987</Typography>
                    </Box>


                </Box>


                



            {/* box2------------------------------ */}
          </Box>



    </Grid>
  )
}

export default Middle