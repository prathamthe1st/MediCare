import React from 'react'
import { createContext } from 'react'
import { Box, Typography } from '@mui/material'
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
        <Box display='flex' flexDirection='row' justifyContent='space-between' alignItems='center'>
            <Box m='20px' display='flex' flexDirection='column' alignItems='flex-start'>
                <motion.div
                    variants={text1Animations}
                    initial='hidden'
                    animate='visible'
                >
                    <Typography
                        variant='h6'
                        sx={{
                            // fontSize: 30,
                            color: '#000000',
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
                <motion.div
                    variants={button1Animations}
                    initial='hidden'
                    animate='visible'
                >
                    <Box>
                        <UserButton text='Emergency' click={() => navigate('/emergency')} />
                    </Box>
                </motion.div>
                <Box height='40px' />
                <motion.div
                    variants={text2Animations}
                    initial='hidden'
                    animate='visible'
                >
                    <Box>
                        <Typography
                            variant='h6'
                            sx={{
                                color: '#000000',
                            }}
                        >
                            A blood bank is a medical facility that collects, tests,
                            processes, and stores blood and blood products for transfusion
                            to patients in need. The donated blood is screened for various
                            nfections, including HIV, hepatitis B and C, syphilis, and other
                            blood-borne diseases, to ensure that the blood is safe for transfusion.
                        </Typography>
                    </Box>
                </motion.div>
                <Box height='20px' />
                <motion.div
                    variants={button2Animations}
                    initial='hidden'
                    animate='visible'
                >
                    <Box>
                        <UserButton text='Blood Bank' click={() => navigate('/bloodbank')} />
                    </Box>
                </motion.div>
            </Box>
            <motion.div
                variants={imgAnimations}
                initial='hidden'
                animate='visible'
            >
                <img src='../../../public/ambulance.png' />
            </motion.div>
        </Box>
    )
}

export default Home