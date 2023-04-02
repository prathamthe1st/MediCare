import React from 'react'
import { createContext } from 'react'
import { Box, Typography, Grid } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import UserButton from '../../components/Button/UserButton'
import { motion } from 'framer-motion'
import './Home.css'
import { useMediaQuery } from 'react'
import { useTheme } from '@mui/material/styles'
import Animatedlogo from '../../components/Animatedlogo/Animatedlogo'


const button1Animations = {
    hidden: {
        opacity: 0,
        x: '-200vw'
    },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            type: 'spring',
            delay: 0.9,
            duration: 1.3
        }
    },
}
const text1Animations = {
    hidden: {
        opacity: 0,
        x: '-200vw'
    },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            type: 'spring',
            delay: 0.7,
            duration: 1.3
        }
    },
}
const button2Animations = {
    hidden: {
        opacity: 0,
        x: '-200vw'
    },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            type: 'spring',
            delay: 1.3,
            duration: 1.3
        }
    },
}
const text2Animations = {
    hidden: {
        opacity: 0,
        x: -200
    },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            type: 'spring',
            delay: 1.1,
            duration: 1.3
        }
    },
}
const imgAnimations = {
    hidden: {
        opacity: 0,
        x: '100vw'
    },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            type: 'spring',
            delay: 0.5,
            duration: 1.3
        }
    },
}

function Home() {
    const navigate = useNavigate()
    return (
        <Box>
            <Box display='flex' flexDirection='row' justifyContent='space-between' alignItems='center'>
                <Box m='20px' display='flex' flexDirection='column' alignItems='flex-start'>
                    <motion.div
                        variants={text1Animations}
                        initial='hidden'
                        animate='visible'
                    >
                        <Typography
                            variant='h3'
                            sx={{
                                fontFamily: 'Poppins',
                                textTransform: 'capitalize',
                            }}
                        >
                            <span style={{
                                fontWeight: 'bold',
                            }}>Saving Lives</span><br />
                            a
                            minute
                            at a
                            <br />
                            time
                        </Typography>
                        <Typography
                            variant='h6'
                            sx={{
                                fontSize: '1rem',
                                fontFamily: 'Poppins',
                                color: '#999',
                            }}
                        >
                            In times of emergencies, it is understandable to feel anxious and
                            worried. However, it is important to remember that help is available,
                            and that responders are working hard to ensure everyone's safety.
                            Take a deep breath, stay positive, and focus on taking the
                            necessary steps to stay safe. Together, we can overcome any
                            challenge that comes our way.
                        </Typography>
                    </motion.div>
                    <Box height='20px' />
                    <Box
                        display='flex'
                        flexDirection='row'
                        justifyContent='space-between'
                    >
                        <motion.div
                            variants={button1Animations}
                            initial='hidden'
                            animate='visible'
                        >
                            <Box
                                m='20px'
                            >
                                <UserButton text='Emergency' click={() => navigate('/emergency')} />
                            </Box>
                        </motion.div>
                        <Box height='40px' />
                        <motion.div
                            variants={text2Animations}
                            initial='hidden'
                            animate='visible'
                        >
                            {/* <Box>
                        <Typography
                            variant='h6'
                            sx={{
                                fontSize: '1rem',
                                color: '#000000',
                                fontFamily: 'Poppins',
                            }}
                        >
                            A blood bank is a medical facility that collects, tests,
                            processes.
                        </Typography>
                    </Box> */}
                        </motion.div>
                        <Box height='20px' />
                        <motion.div
                            variants={button2Animations}
                            initial='hidden'
                            animate='visible'
                        >
                            <Box
                                m='20px'
                            >
                                <UserButton text='Blood Bank' click={() => navigate('/bloodbank')} />
                            </Box>
                        </motion.div>
                    </Box>
                </Box>
                <motion.div
                    variants={imgAnimations}
                    initial='hidden'
                    animate='visible'
                >
                    <img src='/ambulance.png' />
                </motion.div>
            </Box>
            <Box height='30px' />
            <Box
                textAlign='center'
            >
                <Typography
                    variant="h4"
                    m='20px'
                    color='#000000'
                    fontFamily='Poppins'
                >
                    About Medicare
                </Typography>
                <Typography
                    variant='h6'
                    fontFamily='Poppins'
                    m='30px'
                    color='#999'
                >
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Et explicabo doloremque rerum
                    placeat officia adipisci incidunt possimus fugiat nulla aperiam voluptatibus, enim odio dolorum, eligendi omnis! Corporis consequuntur iusto voluptatem.
                </Typography>
            </Box>
            <Grid container sx={{
                justifyContent: 'center',
                alignItems: 'center',
                marginLeft: '50px',
            }}>
                <Grid item xs={12} sm={6} md={4} lg={3}>
                    <Box
                        sx={{
                            width: '250px',
                            height: '250px',
                            border: '5px solid black',
                            borderRadius: '25px',
                            // textAlign: 'center',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}
                    >
                        <img src='/Brain.svg' width='200px' height='200px' margin='0' />
                    </Box>
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={3}>
                    <Box
                        sx={{
                            width: '250px',
                            height: '250px',
                            borderRadius: '25px',
                            border: '5px solid black',
                            // textAlign: 'center',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}
                    >
                        <img src='/cardiac.svg' width='200px' height='200px' margin='0' />
                    </Box>
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={3}>
                    <Box
                        sx={{
                            width: '250px',
                            height: '250px',
                            borderRadius: '25px',
                            border: '5px solid black',
                            // textAlign: 'center',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}
                    >
                        <img src='/baby.svg' width='200px' height='200px' margin='0' />
                    </Box>
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={3}>
                    <Box
                        sx={{
                            width: '250px',
                            height: '250px',
                            borderRadius: '25px',
                            border: '5px solid black',
                            // textAlign: 'center',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            // padding:'20px'
                        }}
                    >
                        <img src='/vet.svg' width='200px' height='200px' margin='0' />
                    </Box>
                </Grid>
            </Grid>
        </Box>
    )
}

export default Home