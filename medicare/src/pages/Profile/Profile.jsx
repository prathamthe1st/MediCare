import React from "react";

function Profile() {
  return (
    <>
      {/* 
        // <motion.div>
        //     <Box
        //     sx= {{
                         maxWidth: 800,
                height: breakpoint ? '70vh' : '150vh',
                m: '40px auto',
                borderRadius: '30px',
                boxShadow: '0px 5px 10px 0px rgba(0, 0, 0, 0.5)',
                background: 'linear-gradient(to bottom , #01570c , #019114 , transparent)'
                
        //     }}
            <Box
                width='100%'
                height='100%'
                textAlign='center'
            >
            <Typography
                    variant='h6'
                    sx={{
                        color: 'white',
                        fontFamily: 'Poppins',
                        fontWeight: 'bold',
                        pt: '20px',
                    }}
                >
                    Hello User,  
                    // props
                </Typography>
                 <br />
                Box
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
                            background: 'linear-gradient(to bottom , #01570c , #019114 , transparent)'
                        }}
                    >
                        <Typography
                            variant='h6'
                            sx={{
                                fontFamily: 'Poppins',
                                color: 'white',
                                fontSize: '12px',
                                mt: '20px',
                                ml: '20px',
                            }}
                        >
                            Name: Surabhi Bhagatkar
                        </Typography>
                        <Typography
                            variant='h6'
                            sx={{
                                fontFamily: 'Poppins',
                                color: 'white',
                                fontSize: '12px',
                                // m: '10px'
                                mt: '10px',
                                ml: '20px',
                            }}
                        >
                            Bloodtype : B+
                        </Typography>
                        <Typography
                            variant='h6'
                            sx={{
                                fontFamily: 'Poppins',
                                color: 'white',
                                fontSize: '12px',
                                // m: '10px',
                                mt: '10px',
                                ml: '20px',
                            }}
                        >
                            Age: 17
                        </Typography>
                        <Typography
                            variant='h6'
                            sx={{
                                fontFamily: 'Poppins',
                                color: 'white',
                                fontSize: '12px',
                                mt: '10px',
                                ml: '20px',
                            }}
                        >
                            Allergy : [Peanut, G6PD]
                        </Typography>
                        <Link to='/'>
                            <Typography
                                variant='h6'
                                sx={{
                                    fontFamily: 'Poppins',
                                    color: 'white',
                                    fontSize: '12px',
                                    mt: '10px',
                                    ml: '20px',
                                }}
                            >
                               Contact No./Email: 9930875121
                            </Typography>
                        </Link>
                        
                    </Box>
                    <Box
                        p={7}
                    >
                        <img src='../../../public/temp-image-map.png' className='map' width='300px' height='300px' alt='map' />
                    </Box>                    
        // </motion.div> */}
    </>
  );
}

export default Profile;
