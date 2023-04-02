import React from 'react'
import { Button } from '@mui/material'
import { useState, useEffect } from 'react'
import axios from 'axios'

function UserButton({text , click}) {

    return (
        <>
            <Button
                variant='contained'
                type='submit'
                sx={{
                    '&:hover': {
                        backgroundColor: '#ff0000',
                    },
                    p: '10px 60px',
                    borderRadius: 30,
                    backgroundColor: 'transparent',
                    color: '#000000'
                }}
                onClick={click}
            >
                {text}
            </Button>
        </>
    );
}

export default UserButton