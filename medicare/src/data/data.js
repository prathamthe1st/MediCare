import React, { useState, useEffect } from 'react';
import axios from 'axios';

function apicall() {
    const [data, setData] = useState([]);
  
    useEffect(() => {
      axios.get('https://django-hack-api.vercel.app/hospital/')
        .then(response => {
          setData(response.data);
        });
    }, []);
    console.log(data)
    console.log(setData)
}
