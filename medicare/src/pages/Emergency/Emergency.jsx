import React from 'react'
import { useState, useEffect } from 'react'
import { Box, Typography } from '@mui/material'
import { motion } from 'framer-motion'
import './Emergency.css'
import { useMediaQuery } from '@mui/material'
import IconedEmergency from '../../components/IconedEmergency/IconedEmergency'
import WhatshotIcon from '@mui/icons-material/Whatshot';
import ReactMapGL, { Source, Layer } from 'react-map-gl';
import { db } from '../../config/firebase';
import { getFirestore, collection, getDocs } from "firebase/firestore";
import { useNavigate } from 'react-router-dom'

const emergencybox1Animation = {
    hidden: {
        opacity: 0,
    },
    visible: {
        opacity: 1,
        transition: {
            type: "tween",
            delay: 0.7,
            duration: 1,
        }
    }
}
const emergencybox2Animation = {
    hidden: {
        opacity: 0,
    },
    visible: {
        opacity: 1,
        transition: {
            type: "tween",
            delay: 0.8,
            duration: 1,
        }
    }
}
const emergencybox3Animation = {
    hidden: {
        opacity: 0,
    },
    visible: {
        opacity: 1,
        transition: {
            type: "tween",
            delay: 0.9,
            duration: 1,
        }
    }
}
const emergencybox4Animation = {
    hidden: {
        opacity: 0,
    },
    visible: {
        opacity: 1,
        transition: {
            type: "tween",
            delay: 1,
            duration: 1,
        }
    }
}
const emergencybox5Animation = {
    hidden: {
        opacity: 0,
    },
    visible: {
        opacity: 1,
        transition: {
            type: "tween",
            delay: 1.1,
            duration: 1,
        }
    }
}
const emergencybox6Animation = {
    hidden: {
        opacity: 0,
    },
    visible: {
        opacity: 1,
        transition: {
            type: "tween",
            delay: 1.2,
            duration: 1,
        }
    }
}
const emergencybox7Animation = {
    hidden: {
        opacity: 0,
    },
    visible: {
        opacity: 1,
        transition: {
            type: "tween",
            delay: 1.3,
            duration: 1,
        }
    }
}
const mapAnimation = {
    hidden: {
        opacity: 0,
        x: '100vw'
    },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            type: "tween",
            delay: 1.4,
            duration: 1,
        }
    }
}

function Emergency() {
    // const [selected, setSelected] = useState('ENTs')
    const breakpoint = useMediaQuery('(max-width: 840px)')
    const navigate = useNavigate()

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

    useEffect(() => {
        if (hospitals.length > 0) {
            setViewport({
                latitude: hospitals[0].latitude,
                longitude: hospitals[0].longitude,
                zoom: 9
            });
        }
    }, [hospitals]);

    const [viewport, setViewport] = useState({
        latitude: 0,
        longitude: 0,
        zoom: 10
    });
    const geojson = {
        type: 'FeatureCollection',
        features: hospitals.map(hospital => {
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
        pinImage.src = 'PIN.png';
    };
    return (

        <Box sx={{
            background: 'linear-gradient(to bottom , #6bff84, transparent)',
            height: !breakpoint ? '70vh' : '150vh',
            maxWidth: 1000,
            margin: '50px auto',
            borderRadius: '30px',
            boxShadow: '0px 5px 10px 0px rgba(0, 0, 0, 0.5)',
            display: 'flex',
            flexDirection: !breakpoint ? 'row' : 'column',
            justifyContent: 'space-between',
            alignItems: 'center',
        }}>
            <Box
                display='flex'
                flexDirection='column'
                justifyContent='center'
                alignItems='center'
                sx={{
                    padding: !breakpoint ? '50px' : '30px',
                    m: '20px'
                }}
            >
                <Typography
                    sx={{
                        color: '#000000',
                        fontFamily: 'Poppins',
                        fontSize: '15px',
                    }}
                >
                    Please enter type of emergency
                </Typography>
                <Box display='flex' flexDirection='row' justifyContent='center' alignItems='center'>
                    <motion.div
                        variants={emergencybox1Animation}
                        initial='hidden'
                        animate='visible'
                    >
                        <IconedEmergency icon={'../../../public/ENT.svg'} text='Surgeon' click={() => { navigate('/surgeon') }} />
                    </motion.div>
                    <motion.div
                        variants={emergencybox2Animation}
                        initial='hidden'
                        animate='visible'
                    >
                        <IconedEmergency icon={'../../../public/Brain.svg'} text='Neurologist' click={() => { navigate('/neuro') }} />
                    </motion.div>
                </Box>
                <Box display='flex' flexDirection='row' justifyContent='center' alignItems='center'>
                    <motion.div
                        variants={emergencybox3Animation}
                        initial='hidden'
                        animate='visible'
                    >
                        <IconedEmergency icon={'../../../public/vet.svg'} text='Veterinarians' click={() => { navigate('/vet') }} />
                    </motion.div>
                    <motion.div
                        variants={emergencybox4Animation}
                        initial='hidden'
                        animate='visible'
                    >
                        <IconedEmergency icon={'../../../public/cardiac.svg'} text='Cardiologists' click={() => { navigate('/cardiac') }} />
                    </motion.div>
                </Box>
                <Box display='flex' flexDirection='row' justifyContent='center' alignItems='center'>
                    <motion.div
                        variants={emergencybox5Animation}
                        initial='hidden'
                        animate='visible'
                    >
                        <IconedEmergency icon={'../../../public/baby.svg'} text='Pediatricians' click={() => { navigate('/pedia') }} />
                    </motion.div>
                    <motion.div
                        variants={emergencybox6Animation}
                        initial='hidden'
                        animate='visible'
                    >
                        <IconedEmergency icon={'../../../public/pregnanr.svg'} text='Gynecologists' click={() => { navigate('/gynec') }} />
                    </motion.div>
                </Box>
            </Box>
            <Box
                width={!breakpoint ? '2px' : '60%'}
                height={!breakpoint ? '60vh' : '2px'}
                sx={{
                    background: '#fff',
                }}
            />
            <Box
                display='flex'
                flexDirection='column'
                justifyContent='center'
                alignItems='center'
                sx={{
                    // mr: '50px',
                    // padding: !breakpoint ? '50px' : '30px' ,
                    paddingTop: !breakpoint ? '0px' : '-30px',
                    m: !breakpoint ? '80px' : '100px',
                }}
            >
                <Typography
                    sx={{
                        color: '#000000',
                        fontFamily: 'Poppins',
                        fontSize: '15px',
                        m: '10px',
                    }}
                >
                    Location of Nearby Hospitals
                </Typography>
                <motion.div
                    variants={mapAnimation}
                    initial='hidden'
                    animate='visible'
                >
                    <ReactMapGL {...viewport}
                        mapboxAccessToken="pk.eyJ1IjoicHJhdGhhbXRoZTFzdCIsImEiOiJjbGZ3czN0aXUwazlkM2VxdWljcmt3MjhzIn0.45U1YoK40iFNEeQey6iBOA"
                        mapStyle={"mapbox://styles/mapbox/streets-v11"}
                        style={{ width: '300px', height: '300px' }}
                        onViewportChange={viewport => {
                            setViewport(viewport);
                        }}
                        onLoad={onLoad}
                    >
                        <Source id="places" type="geojson" data={geojson}>
                            <Layer {...layerStyle} />
                        </Source>
                    </ReactMapGL>
                </motion.div>
            </Box>
        </Box>
    )
}

export default Emergency