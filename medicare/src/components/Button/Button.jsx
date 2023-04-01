import React from 'react'
import {Button} from '@mui/material'
function Button() {
    return (
<>
<Button
variant='contained'
type='submit'
sx={{
    p: '10px 100px',
    borderRadius: 0,
    backgroundColor: '#b91bff',
    color: '#fff'
}}
onClick={handleLogin}>
Login</Button>
</>
    );
}

export default Button