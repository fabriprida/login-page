import React from 'react';
import { FormControl, FormLabel, Input } from '@chakra-ui/react';
import PropTypes from 'prop-types'; 

const InputField = ({ id, label, type, value, onChange, placeholder }) => {
    return (
        <FormControl isRequired mb={3}>
            <FormLabel htmlFor={id} color='brand.600'> {label} </FormLabel>
            <Input 
                id={id} 
                type={type} 
                value={value} 
                onChange={onChange} 
                placeholder={placeholder} 
                borderColor="brand.500" 
                focusBorderColor="brand.300" 
                _placeholder={{ color: 'gray.400' }} 
                bg="gray.50" 
            />
        </FormControl>
    );
};

InputField.propTypes = {
    id: PropTypes.string.isRequired,       
    label: PropTypes.string.isRequired,    
    type: PropTypes.string.isRequired,     
    value: PropTypes.string.isRequired,    
    onChange: PropTypes.func.isRequired,   
    placeholder: PropTypes.string,         
};

export default InputField;
