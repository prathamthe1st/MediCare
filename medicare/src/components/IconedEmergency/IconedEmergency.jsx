import { Box, IconButton, Typography } from '@mui/material'
import React from 'react'
import './IconedEmergency.css'


function IconedEmergency({ icon, text , click }) {
    return (
        <Box
            className='iconed-emergency-box'
            sx={{
                width: '140px',
                height: '120px',
                border: '2px solid black',
                borderRadius: '10px',
                margin: '10px',
                boxShadow: '0 9px #000000',
            }}
            display='flex'
            flexDirection='column'
            justifyContent='center'
            alignItems='center'
            onClick={click}
        >
            <IconButton
                size='large'
                className='iconed-emergency-icon'
                sx={{
                    color: '#000000',
                }}
            >
                <img src={icon} width='50px' height='50px' alt='icon' />
            </IconButton>
            <Typography
                sx={{
                    color: '#000000',
                    fontSize: '15px',
                    fontWeight: 'bold', 
                }}
            >
                {text}
            </Typography>
        </Box>
    )
}

export default IconedEmergency