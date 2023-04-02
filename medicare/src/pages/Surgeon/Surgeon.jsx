import React from 'react'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import { Box, Typography } from '@mui/material'
import { motion } from 'framer-motion'
import './Surgeon.css'
import { useMediaQuery } from '@mui/material'
import IconedEmergency from '../../components/IconedEmergency/IconedEmergency'
import WhatshotIcon from '@mui/icons-material/Whatshot';
import ReactMapGL, { Source, Layer } from 'react-map-gl';
import { db } from '../../config/firebase';
import { getFirestore, collection, getDocs } from "firebase/firestore";
import { useNavigate } from 'react-router-dom'

function Surgeon() {
    const [hospitals, setHospitals] = useState([]);
    useEffect(() => {
        const getFirebaseData = async () => {
            const hospitalDataRef = collection(db, 'HospitalData');
            const hospitalDataSnapshot = await getDocs(hospitalDataRef);
            const hospitals = hospitalDataSnapshot.docs.map(doc => doc.data());
            setHospitals(hospitals);
        };
        getFirebaseData();
    }, []);

    const surgeon = hospitals.filter((hospital) => hospital.Speciality === 'Surgeon');

    useEffect(() => {
        if (surgeon.length > 0) {
            setViewport({
                latitude: surgeon[0].latitude,
                longitude: surgeon[0].longitude,
                zoom: 9
            });
        }
    }, [surgeon]);

    const [viewport, setViewport] = useState({
        latitude: 0,
        longitude: 0,
        zoom: 10
    });
    const geojson = {
        type: 'FeatureCollection',
        features: surgeon.map(hospital => {
            return {
                type: 'Feature',
                geometry: {
                    type: 'Point',
                    coordinates: [hospital.longitude, hospital.latitude]
                },
                properties: {
                    name: hospital.Name,
                    address: hospital.Address,
                    email: hospital.Email,
                    speciality: hospital.Speciality,
                    capacity: hospital.Capacity,
                    available: hospital.Available,
                    rating: hospital.Rating
                }
            };
        })
    };



    const layerStyle = {
        id: 'hospitals-markers',
        type: 'symbol',
        source: 'hospitals',
        layout: {
            'icon-image': 'pin',
            'icon-size': 0.3
        }
        // paint: {
        //   // Set the color of the marker icon
        //   'icon-color': '#78546'
        // }
    };


    const onLoad = (event) => {
        // Get the map instance from the event object
        const map = event.target;
        // Create a new image element to load the pin image
        const pinImage = new Image();
        // Set an onload handler for the image element
        pinImage.onload = () => {
            // Add the image to the map with the id 'pin'
            map.addImage('pin', pinImage);
        };
        // Set the source of the image element to the pin image file
        pinImage.src = '/PIN.png';
    };
    const breakpoint = useMediaQuery('(min-width:800px)')
    return (
        <motion.div>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column'
                }}
            >
                {surgeon.map((hospital) => (
                    <Box
                        key={hospital.index}
                        sx={{
                            maxWidth: 800,
                            height: breakpoint ? '70vh' : '150vh',
                            m: '40px auto',
                            borderRadius: '30px',
                            boxShadow: '0px 5px 10px 0px rgba(0, 0, 0, 0.5)',
                            background: 'linear-gradient(to bottom , #6bff84, transparent)',
                        }}
                    >
                        <Box
                            width='100%'
                            height='100%'
                            textAlign='center'
                        >
                            <Typography
                                variant='h5'
                                sx={{
                                    color: 'black',
                                    fontFamily: 'Poppins',
                                    fontWeight: 'bold',
                                    pt: '20px',
                                }}
                            >
                                {hospital.Name}
                            </Typography>
                            <br />
                            <Typography
                                variant='h6'
                                sx={{
                                    color: 'black',
                                    fontSize: '15px',
                                    fontFamily: 'Poppins',
                                }}
                            >
                                Rating: {hospital.Rating}
                            </Typography>
                            <Box
                                sx={{
                                    display: 'flex',
                                    flexDirection: breakpoint ? 'row' : 'column',
                                    justifyContent: breakpoint ? 'space-between' : 'center',
                                    alignItems: breakpoint ? 'flex-start' : 'center',
                                    width: '100%',
                                }}
                            >
                                <Box
                                    sx={{
                                        display: 'flex',
                                        flexDirection: 'column',
                                        justifyContent: 'flex-start',
                                        alignItems: 'flex-start',
                                        m: '25px',
                                        height: '50vh',
                                        width: '300px',
                                        borderRadius: '30px',
                                        boxShadow: '0px 5px 10px 0px rgba(0, 0, 0, 0.5)',
                                        background: 'linear-gradient(to bottom , #6bff84, transparent)',
                                    }}
                                >
                                    <Typography
                                        variant='h6'
                                        sx={{
                                            fontFamily: 'Poppins',
                                            color: 'black',
                                            fontSize: '12px',
                                            mt: '20px',
                                            ml: '20px',
                                        }}
                                    >
                                        Contact Information: {hospital.Contact}
                                    </Typography>
                                    <Typography
                                        variant='h6'
                                        sx={{
                                            fontFamily: 'Poppins',
                                            color: 'black',
                                            fontSize: '12px',
                                            // m: '10px'
                                            mt: '10px',
                                            ml: '20px',
                                        }}
                                    >
                                        Speciality : {hospital.Speciality}
                                    </Typography>
                                    <Link to='/'>
                                        <Typography
                                            variant='h6'
                                            sx={{
                                                fontFamily: 'Poppins',
                                                color: 'black',
                                                fontSize: '12px',
                                                mt: '10px',
                                                ml: '20px',
                                            }}
                                        >
                                            Email: {hospital.Email}
                                        </Typography>
                                        <Typography
                                            variant='h6'
                                            sx={{
                                                fontFamily: 'Poppins',
                                                color: 'black',
                                                fontSize: '12px',
                                                mt: '10px',
                                                ml: '20px',
                                            }}
                                        >
                                            Latitude: {hospital.latitude}
                                        </Typography>
                                        <Typography
                                            variant='h6'
                                            sx={{
                                                fontFamily: 'Poppins',
                                                color: 'black',
                                                fontSize: '12px',
                                                mt: '10px',
                                                ml: '20px',
                                            }}
                                        >
                                            Longitude: {hospital.longitude}
                                        </Typography>
                                    </Link>
                                    <Box
                                        sx={{
                                            display: 'flex',
                                            flexDirection: 'column',
                                            justifyContent: 'center',
                                            alignItems: 'center',
                                            padding: '30px',
                                        }}
                                    >
                                        <Typography
                                            variant='h6'
                                            sx={{
                                                fontFamily: 'Poppins',
                                                color: 'black',
                                                fontSize: '15px',
                                                textDecoration: 'underline',
                                                ml: '40px',
                                            }}
                                        >
                                            Available Beds : {hospital.Available}
                                        </Typography>
                                    </Box>
                                </Box>
                                <Box
                                    p={7}
                                >
                                    <ReactMapGL {...viewport}
    mapboxAccessToken="pk.eyJ1IjoicHJhdGhhbXRoZTFzdCIsImEiOiJjbGZ3czN0aXUwazlkM2VxdWljcmt3MjhzIn0.45U1YoK40iFNEeQey6iBOA"
    mapStyle={"mapbox://styles/mapbox/streets-v11"}
    style={{width: '300px', height: '300px'}}
    onViewportChange={viewport => {
      setViewport(viewport);
    }}
    onLoad={onLoad}
  >
    <Source id="places" type="geojson" data={geojson}>
        <Layer {...layerStyle} />
    </Source>

  </ReactMapGL>
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                ))}
            </Box >
        </motion.div>
    )
}

export default Surgeon