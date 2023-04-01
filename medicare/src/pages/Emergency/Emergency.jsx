import React from 'react'
import { useState } from 'react'
import { Box, Typography } from '@mui/material'
import { motion } from 'framer-motion'
import './Emergency.css'
import { useMediaQuery } from '@mui/material'
import IconedEmergency from '../../components/IconedEmergency/IconedEmergency'
import WhatshotIcon from '@mui/icons-material/Whatshot';

const emergencybox1Animation = {
    hidden: {
        opacity: 0,
    },
    visible: {
        opacity: 1,
        transition: {
            type: "tween",
            delay: 0.7,
            duration: 1,
        }
    }
}
const emergencybox2Animation = {
    hidden: {
        opacity: 0,
    },
    visible: {
        opacity: 1,
        transition: {
            type: "tween",
            delay: 0.8,
            duration: 1,
        }
    }
}
const emergencybox3Animation = {
    hidden: {
        opacity: 0,
    },
    visible: {
        opacity: 1,
        transition: {
            type: "tween",
            delay: 0.9,
            duration: 1,
        }
    }
}
const emergencybox4Animation = {
    hidden: {
        opacity: 0,
    },
    visible: {
        opacity: 1,
        transition: {
            type: "tween",
            delay: 1,
            duration: 1,
        }
    }
}
const emergencybox5Animation = {
    hidden: {
        opacity: 0,
    },
    visible: {
        opacity: 1,
        transition: {
            type: "tween",
            delay: 1.1,
            duration: 1,
        }
    }
}
const emergencybox6Animation = {
    hidden: {
        opacity: 0,
    },
    visible: {
        opacity: 1,
        transition: {
            type: "tween",
            delay: 1.2,
            duration: 1,
        }
    }
}
const emergencybox7Animation = {
    hidden: {
        opacity: 0,
    },
    visible: {
        opacity: 1,
        transition: {
            type: "tween",
            delay: 1.3,
            duration: 1,
        }
    }
}
const mapAnimation = {
    hidden: {
        opacity: 0,
        x: '100vw'
    },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            type: "tween",
            delay: 1.4,
            duration: 1,
        }
    }
}



function Emergency() {
    const [selected, setSelected] = useState('ENTs')
    const breakpoint = useMediaQuery('(max-width: 840px)')

    return (
        <Box sx={{
            background: 'linear-gradient(to bottom , #01570c , #019114 , transparent)',
            height: !breakpoint ? '70vh' : '150vh',
            maxWidth: 1000,
            margin: '50px auto',
            borderRadius: '30px',
            boxShadow: '0px 5px 10px 0px rgba(0, 0, 0, 0.5)',
            display: 'flex',
            flexDirection: !breakpoint ? 'row' : 'column',
            justifyContent: 'space-between',
            alignItems: 'center',
        }}>
            <Box
                display='flex'
                flexDirection='column'
                justifyContent='center'
                alignItems='center'
                sx={{
                    // ml: '63px',
                    // width: '400px',
                    padding: !breakpoint ? '50px' : '30px',
                    m: '20px'
                }}
            >
                <Typography
                    sx={{
                        color: '#fff',
                        fontSize: '15px',
                    }}
                >
                    Please enter type of emergency
                </Typography>
                <Box display='flex' flexDirection='row' justifyContent='center' alignItems='center'>
                    <motion.div
                        variants={emergencybox1Animation}
                        initial='hidden'
                        animate='visible'
                    >
                        <IconedEmergency icon={'../../../public/ENT.svg'} text='ENTs' click={() => setSelected('ENTs')} />
                    </motion.div>
                    <motion.div
                        variants={emergencybox2Animation}
                        initial='hidden'
                        animate='visible'
                    >
                        <IconedEmergency icon={'../../../public/Brain.svg'} text='Neurologist' click={() => setSelected('Neurologists')} />
                    </motion.div>
                </Box>
                <Box display='flex' flexDirection='row' justifyContent='center' alignItems='center'>
                    <motion.div
                        variants={emergencybox3Animation}
                        initial='hidden'
                        animate='visible'
                    >
                        <IconedEmergency icon={'../../../public/vet.svg'} text='Veterinarians' click={() => setSelected('Veterinarians')} />
                    </motion.div>
                    <motion.div
                        variants={emergencybox4Animation}
                        initial='hidden'
                        animate='visible'
                    >
                        <IconedEmergency icon={'../../../public/cardiac.svg'} text='Cardiologists' click={() => setSelected('Cardiologists')} />
                    </motion.div>
                </Box>
                <Box display='flex' flexDirection='row' justifyContent='center' alignItems='center'>
                    <motion.div
                        variants={emergencybox5Animation}
                        initial='hidden'
                        animate='visible'
                    >
                        <IconedEmergency icon={'../../../public/baby.svg'} text='Pediatricians' click={() => setSelected('Pediatricians')} />
                    </motion.div>
                    <motion.div
                        variants={emergencybox6Animation}
                        initial='hidden'
                        animate='visible'
                    >
                        <IconedEmergency icon={'../../../public/pregnanr.svg'} text='Gynecologists' click={() => setSelected('Gynecologists')} />
                    </motion.div>
                </Box>
            </Box>
            <Box
                width={!breakpoint ? '2px' : '60%'}
                height={!breakpoint ? '60vh' : '2px'}
                sx={{
                    background: '#fff',
                }}
            />
            <Box
                display='flex'
                flexDirection='column'
                justifyContent='center'
                alignItems='center'
                sx={{
                    // mr: '50px',
                    // padding: !breakpoint ? '50px' : '30px' ,
                    paddingTop: !breakpoint ? '0px' : '-30px',
                    m: !breakpoint ? '80px' : '100px',
                }}
            >
                <Typography
                    sx={{
                        color: '#fff',
                        fontSize: '15px',
                        m: '10px',
                    }}
                >
                    Location of Nearby Hospitals
                </Typography>
                <motion.div
                    variants={mapAnimation}
                    initial='hidden'
                    animate='visible'
                >
                    <img src='../../../public/temp-image-map.png' width='300px' height='300px' />
                </motion.div>
            </Box>
        </Box>
    )
}

export default Emergency