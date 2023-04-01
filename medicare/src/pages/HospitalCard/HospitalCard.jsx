import React from 'react'
import './HospitalCard.css'
import { Link } from 'react-router-dom'
import { Box, Typography, useMediaQuery } from '@mui/material'

function HospitalCard() {
    const breakpoint = useMediaQuery('(min-width:800px)')
    return (
        <motion.div>
            <Box
            sx={{
                maxWidth: 800,
                height: breakpoint ? '70vh' : '150vh',
                m: '40px auto',
                borderRadius: '30px',
                boxShadow: '0px 5px 10px 0px rgba(0, 0, 0, 0.5)',
                background: 'linear-gradient(to bottom , #01570c , #019114 , transparent)'
            }}
        >
            <Box
                width='100%'
                height='100%'
                textAlign='center'
            >
                <Typography
                    variant='h6'
                    sx={{
                        color: 'white',
                        fontFamily: 'Poppins',
                        fontWeight: 'bold',
                        pt: '20px',
                    }}
                >
                    Hospital Name
                </Typography>
                <br />
                <Typography
                    variant='h6'
                    sx={{
                        color: 'white',
                        fontSize: '15px',
                        fontFamily: 'Poppins',
                    }}
                >
                    Address
                </Typography>
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: breakpoint ? 'row' : 'column',
                        justifyContent: breakpoint ? 'space-between' : 'center',
                        alignItems: breakpoint ? 'flex-start' : 'center',
                        width: '100%',
                    }}
                >
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'flex-start',
                            alignItems: 'flex-start',
                            m: '25px',
                            height: '50vh',
                            width: '300px',
                            borderRadius: '30px',
                            boxShadow: '0px 5px 10px 0px rgba(0, 0, 0, 0.5)',
                            background: 'linear-gradient(to bottom , #01570c , #019114 , transparent)'
                        }}
                    >
                        <Typography
                            variant='h6'
                            sx={{
                                fontFamily: 'Poppins',
                                color: 'white',
                                fontSize: '12px',
                                mt: '20px',
                                ml: '20px',
                            }}
                        >
                            Contact Information: 1234567890
                        </Typography>
                        <Typography
                            variant='h6'
                            sx={{
                                fontFamily: 'Poppins',
                                color: 'white',
                                fontSize: '12px',
                                // m: '10px'
                                mt: '10px',
                                ml: '20px',
                            }}
                        >
                            Speciality : ENT
                        </Typography>
                        <Typography
                            variant='h6'
                            sx={{
                                fontFamily: 'Poppins',
                                color: 'white',
                                fontSize: '12px',
                                // m: '10px',
                                mt: '10px',
                                ml: '20px',
                            }}
                        >
                            Contact Information 2: 1234567890
                        </Typography>
                        <Typography
                            variant='h6'
                            sx={{
                                fontFamily: 'Poppins',
                                color: 'white',
                                fontSize: '12px',
                                mt: '10px',
                                ml: '20px',
                            }}
                        >
                            Distance : 10km
                        </Typography>
                        <Link to='/'>
                            <Typography
                                variant='h6'
                                sx={{
                                    fontFamily: 'Poppins',
                                    color: 'white',
                                    fontSize: '12px',
                                    mt: '10px',
                                    ml: '20px',
                                }}
                            >
                                www.hospitalname.com
                            </Typography>
                        </Link>
                        <Box
                            sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'center',
                                alignItems: 'center',
                                padding: '30px',
                            }}
                        >
                            <Typography
                                variant='h6'
                                sx={{
                                    fontFamily: 'Poppins',
                                    color: 'white',
                                    fontSize: '15px',
                                    textDecoration: 'underline',
                                    ml: '40px',
                                }}
                            >
                                Available Beds : 1000
                            </Typography>
                        </Box>
                    </Box>
                    <Box
                        p={7}
                    >
                        <img src='../../../public/temp-image-map.png' className='map' width='300px' height='300px' alt='map' />
                    </Box>
                </Box>
            </Box>
        </Box>
        </motion.div>

    )
}

export default HospitalCard