import React, { useState } from 'react'
import { useNavigate } from 'react'
// import Logo from '../../components/Logo/Logo'
import { motion } from 'framer-motion'
import './Profile.css'
import AccessibilityIcon from '@mui/icons-material/Accessibility';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import ElderlyWomanIcon from '@mui/icons-material/ElderlyWoman';
import EmailIcon from '@mui/icons-material/Email';
import PersonIcon from '@mui/icons-material/Person';
import BloodtypeIcon from '@mui/icons-material/Bloodtype';
import LockOpenIcon from '@mui/icons-material/LockOpen';
import { Link } from 'react-router-dom'
import { Box, Typography, useMediaQuery, TextField, Button, InputAdornment, IconButton, Checkbox, MenuItem } from '@mui/material'
import Logo from '../../components/Logo/Logo'
// import { auth, db, analytics, googleauth } from '../../config/firebase'
// import { signInWithEmailAndPassword } from 'firebase/auth'

const container = {
    hidden: {
        opacity: 1,
        scale: 0
    },
    visible: {
        opacity: 1,
        scale: 1,
        transition: {
            type: 'tween',
            // delay: 0.5,
            // duration: 0.3,
            delayChildren: 0.3,
            staggerChildren: 0.3
        }
    },
};


const item1 = {
    hidden: { y: 20, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1,
        transition: {
            type: 'tween',
            // delay: 1,
            // duration: 0.3,
        }
    }
};
const item2 = {
    hidden: { y: 20, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1,
        transition: {
            type: 'tween',
            delay: 1.2,
            duration: 0.3,
        }
    }
};
const item3 = {
    hidden: { y: 20, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1,
        transition: {
            type: 'tween',
            delay: 1.4,
            duration: 0.3,
        }
    }
};
const item4 = {
    hidden: { y: 20, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1,
        transition: {
            type: 'tween',
            delay: 1.6,
            duration: 0.3,
        }
    }
};
const item5 = {
    hidden: { y: 20, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1,
        transition: {
            type: 'tween',
            delay: 1.8,
            duration: 0.3,
        }
    }
};
function Signup() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const handleLogin = () => {

    }
    const breakpoint = useMediaQuery("(max-width:720px)")
    return (
        <motion.div
            width='max-content'
            className='container'
            variants={container}
            initial='hidden'
            animate='visible'
        >
            <Box sx={{
                backgroundColor: 'transparent',
                height: !breakpoint ? '80vh' : '110vh',
                maxWidth: 800,
                margin: '50px auto',
                borderRadius: '30px',
                boxShadow: '0px 5px 10px 0px rgba(0, 0, 0, 0.5)',
            }}>
                <Box display='flex' alignItems='center' flexDirection='column' height='100%'>
                    <Box height='10px' />
                    <Logo />
                    <Box display='flex' flexDirection='column' textAlign='center' width='100%'>
                        <motion.div
                            className="item1"
                            variants={item1}
                            initial='hidden'
                            animate='visible'
                        >
                            <Typography
                                variant='h6'
                                m='20px'
                                sx={{
                                    fontWeight: 'bold',
                                }}
                            >
                                Signup
                            </Typography>
                        </motion.div>
                        <motion.div
                            variants={item2}
                            initial='hidden'
                            animate='visible'
                        >
                            <Box m='20px 20px 0 20px'
                                display='flex'
                                flexDirection={!breakpoint ? 'row' : 'column'}
                                justifyContent='space-evenly'
                            >
                                <TextField
                                    variant='outlined'
                                    className='field'
                                    type='email'
                                    placeholder='Email'
                                    sx={{
                                        '& .MuiOutlinedInput-root': {
                                            '&:hover fieldset': {
                                                transition: '0.2s',
                                                borderColor: 'back',
                                            },
                                        },
                                        "& .Mui-focused .MuiOutlinedInput-notchedOutline": {
                                            border: "1px solid #484850",
                                            borderRadius: "5px 5px 0 0",
                                        },
                                        m: '10px',
                                        borderRadius: '0 !important',
                                    }}
                                    size='small'
                                    onChange={(e) => setUsername(e.target.value)}
                                    InputProps={{
                                        startAdornment: (
                                            <InputAdornment position="start">
                                                <IconButton sx={{
                                                    color: '#000000'
                                                }}>
                                                    <EmailIcon />
                                                </IconButton>
                                            </InputAdornment>
                                        )
                                    }}
                                />
                                <TextField
                                    variant='outlined'
                                    className='field'
                                    type='password'
                                    placeholder='Password'
                                    sx={{
                                        '& .MuiOutlinedInput-root': {
                                            '&:hover fieldset': {
                                                transition: '0.2s',
                                                borderColor: 'back',
                                            },
                                        },
                                        "& .Mui-focused .MuiOutlinedInput-notchedOutline": {
                                            border: "1px solid #484850",
                                            borderRadius: "5px 5px 0 0",
                                        },
                                        m: '10px',
                                        borderRadius: '0 !important',
                                    }}
                                    size='small'
                                    onChange={(e) => setUsername(e.target.value)}
                                    InputProps={{
                                        startAdornment: (
                                            <InputAdornment position="start">
                                                <IconButton sx={{
                                                    color: '#000000'
                                                }}>
                                                    <LockOpenIcon />
                                                </IconButton>
                                            </InputAdornment>
                                        )
                                    }}
                                />
                            </Box>
                        </motion.div>
                        <motion.div
                            variants={item3}
                            initial='hidden'
                            animate='visible'
                        >
                            <Box m='20px'
                                display='flex'
                                flexDirection={!breakpoint ? 'row' : 'column'}
                                justifyContent='space-evenly'
                            >
                                <TextField
                                    select
                                    variant='outlined'
                                    className='field'
                                    // placeholder='Blood Group'
                                    // label='Blood Group'
                                    sx={{
                                        '& .MuiOutlinedInput-root': {
                                            '&:hover fieldset': {
                                                transition: '0.2s',
                                                borderColor: 'black',
                                            },
                                        },
                                        "& .Mui-focused .MuiOutlinedInput-notchedOutline": {
                                            border: "1px solid #484850",
                                            borderRadius: "5px 5px 0 0",
                                        },
                                        m: '10px',
                                        borderRadius: '0 !important',
                                        'width': !breakpoint ? '250px' : '438px'
                                    }}
                                    size='small'
                                    value={'A+'}
                                    onChange={(e) => setPassword(e.target.value)}
                                    InputProps={{
                                        startAdornment: (
                                            <InputAdornment position="start">
                                                <IconButton
                                                    sx={{
                                                        color: '#000000'
                                                    }}
                                                >
                                                    <BloodtypeIcon />
                                                </IconButton>
                                            </InputAdornment>
                                        )
                                    }}
                                >
                                    <MenuItem value='A+'>A+</MenuItem>
                                    <MenuItem value='B+'>B+</MenuItem>
                                    <MenuItem value='AB+'>AB+</MenuItem>
                                    <MenuItem value='O+'>O+</MenuItem>
                                    <MenuItem value='O-'>O-</MenuItem>
                                    <MenuItem value='A'>A</MenuItem>
                                    <MenuItem value='AB-'>AB-</MenuItem>
                                    <MenuItem value='A-'>A-</MenuItem>
                                </TextField>
                                <TextField
                                    variant='outlined'
                                    className='field'
                                    type='number'
                                    placeholder='Age'
                                    sx={{
                                        '& .MuiOutlinedInput-root': {
                                            '&:hover fieldset': {
                                                transition: '0.2s',
                                                borderColor: 'black',
                                            },
                                        },
                                        "& .Mui-focused .MuiOutlinedInput-notchedOutline": {
                                            border: "1px solid #484850",
                                            borderRadius: "5px 5px 0 0",
                                        },
                                        m: '10px',
                                        borderRadius: '0 !important',
                                    }}
                                    size='small'
                                    onChange={(e) => setPassword(e.target.value)}
                                    InputProps={{
                                        startAdornment: (
                                            <InputAdornment position="start">
                                                <IconButton
                                                    sx={{
                                                        color: '#000000'
                                                    }}
                                                >
                                                    <ElderlyWomanIcon />
                                                </IconButton>
                                            </InputAdornment>
                                        )
                                    }}
                                />
                            </Box>
                            <motion.div
                                variants={item2}
                                initial='hidden'
                                animate='visible'
                            >
                                <Box m='20px'
                                    display='flex'
                                    flexDirection={!breakpoint ? 'row' : 'column'}
                                    justifyContent='space-evenly'
                                >
                                    <TextField
                                        variant='outlined'
                                        className='field'
                                        type='email'
                                        placeholder='Email'
                                        sx={{
                                            '& .MuiOutlinedInput-root': {
                                                '&:hover fieldset': {
                                                    transition: '0.2s',
                                                    borderColor: 'back',
                                                },
                                            },
                                            "& .Mui-focused .MuiOutlinedInput-notchedOutline": {
                                                border: "1px solid #484850",
                                                borderRadius: "5px 5px 0 0",
                                            },
                                            m: '10px',
                                            borderRadius: '0 !important',
                                        }}
                                        size='small'
                                        onChange={(e) => setUsername(e.target.value)}
                                        InputProps={{
                                            startAdornment: (
                                                <InputAdornment position="start">
                                                    <IconButton sx={{
                                                        color: '#000000'
                                                    }}>
                                                        <EmailIcon />
                                                    </IconButton>
                                                </InputAdornment>
                                            )
                                        }}
                                    />
                                    <TextField
                                        variant='outlined'
                                        className='field'
                                        type='password'
                                        placeholder='Password'
                                        sx={{
                                            '& .MuiOutlinedInput-root': {
                                                '&:hover fieldset': {
                                                    transition: '0.2s',
                                                    borderColor: 'back',
                                                },
                                            },
                                            "& .Mui-focused .MuiOutlinedInput-notchedOutline": {
                                                border: "1px solid #484850",
                                                borderRadius: "5px 5px 0 0",
                                            },
                                            m: '10px',
                                            borderRadius: '0 !important',
                                        }}
                                        size='small'
                                        onChange={(e) => setUsername(e.target.value)}
                                        InputProps={{
                                            startAdornment: (
                                                <InputAdornment position="start">
                                                    <IconButton sx={{
                                                        color: '#000000'
                                                    }}>
                                                        <LockOpenIcon />
                                                    </IconButton>
                                                </InputAdornment>
                                            )
                                        }}
                                    />
                                </Box>
                            </motion.div>
                        </motion.div>
                        <motion.div
                            variants={item4}
                            initial='hidden'
                            animate='visible'
                        >
                            <Box display='flex' flexDirection='row' alignItems='center' justifyContent='space-evenly'>
                                <Typography
                                    sx={{
                                        display: 'flex',
                                        justifyContent: 'center',
                                        alignItems: 'center'
                                    }}
                                >
                                    <Checkbox />
                                    Remember me
                                </Typography>
                                <Link
                                    to='/'
                                    style={{
                                        textDecoration: 'none',
                                        color: '#000000'
                                    }}
                                >
                                    <Typography>
                                        Forgot Password
                                    </Typography>
                                </Link>
                            </Box>
                        </motion.div>
                        <motion.div
                            variants={item5}
                            initial='hidden'
                            animate='visible'
                        >
                            <Box m='20px'>
                                <Button
                                    className='button'
                                    variant='contained'
                                    type='submit'
                                    sx={{
                                        // '&':{
                                        //     transition: 'all 0.3s ease-in-out',
                                        // },
                                        // '&:hover': {
                                        //     transition: 'all 0.3s ease-in-out',
                                        //     background: 'linear-gradient(45deg, #fc7e17, #e8a976) !important',
                                        //     boxShadow: 'none !important',
                                        // },
                                        p: '10px 100px',
                                        borderRadius: 12,
                                        backgroundColor: '#CE7FD9',
                                        // backgroundColor: '#ffffff',
                                        color: '#000000'
                                    }}
                                // onClick={handleLogin}
                                >
                                    Signup
                                </Button>
                            </Box>
                        </motion.div>
                    </Box>
                </Box>
            </Box>
        </motion.div>
    )
}

export default Signup