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
                    p: '10px 60px',
                    borderRadius: 30,
                    backgroundColor: '#b91bff',
                    color: '#fff'
                }}
                onClick={click}
            >
                {text}
            </Button>
        </>
    );
}

export default UserButton