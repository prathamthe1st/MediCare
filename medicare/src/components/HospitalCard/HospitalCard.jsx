import { Typography } from '@mui/material'
import React from 'react'

function HospitalCard() {
    return (
        <Box
            sx={{
                maxWidth: 300,
                height: '50vh',
                borderRadius: '30px',
                boxShadow: '0px 5px 10px 0px rgba(0, 0, 0, 0.5)',
                background: 'linear-gradient(to bottom , #01570c , #019114 , transparent)'
            }}
        >
            <Box
                width='100%'
                textAlign='center'
            >
                <Typography
                    variant='h4'
                    sx={{
                        color: 'white',
                        textTransform: 'uppercase',
                    }}
                >
                    Hospital Name
                </Typography>
                <br />
                <Typography
                    variant='h6'
                    sx={{
                        color: 'white',
                        textTransform: 'uppercase',
                        fontF
                    }}
                >
                    Address
                </Typography>
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        width: '100%',
                    }}
                >
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'flex-start',
                            alignItems: 'center',
                            m: '20px',
                        }}
                    >
                        <Typography
                            variant='h6'
                            sx={{
                                color: 'white',
                                textTransform: 'uppercase',
                            }}
                        >
                            Contact Information: 1234567890
                        </Typography>
                        <Typography
                            variant='h6'
                            sx={{
                                color: 'white',
                                textTransform: 'uppercase',
                            }}
                        >
                            Speciality : ENT
                        </Typography>
                        <Typography
                            variant='h6'
                            sx={{
                                color: 'white',
                                textTransform: 'uppercase',
                            }}
                        >
                            Contact Information 2: 1234567890
                        </Typography>
                        <Typography
                            variant='h6'
                            sx={{
                                color: 'white',
                                textTransform: 'uppercase',
                            }}
                        >
                            Distance : 10km
                        </Typography>
                        <Box
                            sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'center',
                                alignItems: 'center',
                            }}
                        >
                            <Typgraphy
                                variant='h6'
                                sx={{
                                    color: 'white',
                                    textTransform: 'uppercase',
                                    textDecoration: 'underline',
                                    m: '10px',
                                }}
                            >
                                Available Beds : 1000
                            </Typgraphy>
                        </Box>
                    </Box>
                    <Box
                        sx={{
                            width: '2px',
                            height: '60vh',
                            background: 'white',
                        }}
                    />
                    <Box>
                        
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}

export default HospitalCard