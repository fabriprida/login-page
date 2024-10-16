import React from 'react';
import { Box, Heading } from '@chakra-ui/react';
import PropTypes from 'prop-types'; 

const FormWrapper = ({ title, children }) => {
    return (
        <Box 
            maxW="md" 
            mx="auto" 
            mt={10} 
            p={5} 
            borderWidth={1} 
            borderRadius="lg" 
            bg="gray.100"   
            color="brand.900"  
            boxShadow="lg"
        >
            <Heading as='h2' size='lg' mb='4' color="brand.500"> {title} </Heading>
            {children}
        </Box>
    );
};

FormWrapper.propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
};


export default FormWrapper;
