import React from 'react';
import { Box, Heading } from '@chakra-ui/react';

const WelcomePage = () => {
    return (
        <Box 
            maxW='md' 
            mx='auto' 
            mt={10} 
            p={5} 
            borderWidth={1} 
            borderRadius={'lg'}
            color='brand.700'
        >
            <Heading as='h2' size='lg' mb='4' color='brand.500'>Welcome!</Heading>
            <p>You have successfully logged in.</p>
        </Box>
    );
};

export default WelcomePage;
