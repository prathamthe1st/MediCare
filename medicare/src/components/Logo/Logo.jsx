import { Box } from '@mui/material'
import React from 'react'
import './Logo.css'

function Logo() {
    return (
        <Box>
            <img 
                src='../../../public/med_white.png' 
                alt='Logo'
                width='70px'
                height='70px'
                className='logo'
            />
        </Box>
    )
}

export default Logo