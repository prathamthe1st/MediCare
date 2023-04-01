import React from 'react'
import { Button } from '@mui/material'
import { useState, useEffect } from 'react'
import axios from 'axios'

function UserButton() {

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
            >
                Login</Button>
        </>
    );
}

export default UserButton