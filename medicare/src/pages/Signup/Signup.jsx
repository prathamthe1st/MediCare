import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
// import Logo from '../../components/Logo/Logo'
import { motion } from 'framer-motion'
import './Signup.css'
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
import UserButton from '../../components/Button/UserButton';
import CoronavirusIcon from '@mui/icons-material/Coronavirus';
import { auth, db, analytics, googleauth } from '../../config/firebase'
import { createUserWithEmailAndPassword } from 'firebase/auth'

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
    // const navigate = useNavigate()
    const [error,setError] = useState(false)
    const [user, setUser] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [allergy, setAllergy] = useState('')
    const navigate = useNavigate()
    const [age, setAge] = useState('')
    const [bg, setbg] = useState('')
    const [phone, setPhone] = useState('')
    const handleSignup = async () => {
        try {
            await createUserWithEmailAndPassword(auth, email, password)
            setError(false)
            setUser(auth.currentUser)
            navigate('/')
        }
        catch (err) {
            setError(true)
            console.log(err)
        }
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
                height: !breakpoint ? '70vh' : '110vh',
                maxWidth: 800,
                margin: '50px auto',
                borderRadius: '30px',
                boxShadow: '0px 5px 10px 0px rgba(0, 0, 0, 0.5)',
            }}>
                <Box display='flex' alignItems='center' flexDirection='column' height='100%'>
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
                                color: 'black',
                                fontSize: '1.5rem',
                                textTransform: 'uppercase',
                                fontWeight: 'bold',
                            }}
                        >
                            Signup
                        </Typography>
                        {error && <Box
                            sx={{
                                backgroundColor: 'red',
                                color: 'white',
                                borderRadius: '5px',
                                padding: '5px',
                                margin: '10px 0',
                                width: '100%',
                                textAlign: 'center',
                            }}
                        >Error 404 Not Found
                            </Box>}
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
                                value={email}
                                onChange = {(e) => setEmail(e.target.value)}
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
                                value={password}
                                onChange = {(e) => setPassword(e.target.value)}
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
                                value={bg}
                                onChange = {(e) => setbg(e.target.value)}
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
                                value={age}
                                onChange = {(e) => setAge(e.target.value)}
                                typ='number'
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
                                    type=''
                                    value={phone}
                                    onChange = {(e) => setPhone(e.target.value)}
                                    placeholder='Phone no.'
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
                                    // onChange={(e) => setUsername(e.target.value)}
                                    InputProps={{
                                        startAdornment: (
                                            <InputAdornment position="start">
                                                <IconButton sx={{
                                                    color: '#000000'
                                                }}>
                                                    <LocalPhoneIcon />
                                                </IconButton>
                                            </InputAdornment>
                                        )
                                    }}
                                />
                                <TextField
                                    variant='outlined'
                                    className='field'
                                    value={allergy}
                                    onChange = {(e) => setAllergy(e.target.value)}
                                    type='text'
                                    placeholder='Allergies'
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
                                    InputProps={{
                                        startAdornment: (
                                            <InputAdornment position="start">
                                                <IconButton sx={{
                                                    color: '#000000'
                                                }}>
                                                    <CoronavirusIcon />
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
                        <Link
                            to='/login'
                            style={{
                                textDecoration: 'none',
                                color: '#000000'
                            }}
                        >
                            <Typography
                                sx={{
                                    fontFamily: 'Poppins',
                                }}
                            >
                                Already have an account? Login
                            </Typography>
                        </Link>
                    </motion.div>
                    <motion.div
                        variants={item5}
                        initial='hidden'
                        animate='visible'
                    >
                        <Box m='20px'>
                            <UserButton text='Signup' click={handleSignup} />
                        </Box>
                    </motion.div>

                </Box>
            </Box>
        </motion.div>
    )
}

export default Signup