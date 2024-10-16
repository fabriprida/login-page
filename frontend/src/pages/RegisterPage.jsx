import React, { useState } from 'react';
import { Box, Button, FormControl, FormLabel, Heading, Input } from '@chakra-ui/react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

const RegisterPage = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')
    const [success, setSuccess] = useState('')
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log('Formulario enviado', {name, email, password});

        try {
            const response = await axios.post('http://localhost:3000/register', {
                name, 
                email,
                password,
            });

            if(response.status === 201){
                setSuccess('Registered successfully! Logging in...');
                setError('');
                setTimeout(() => {
                    navigate('/login'); 
                }, 1000); 
            }
            console.log(response.data);
        } catch (e) {
            console.error('Error at register', e);
            setSuccess('');
            if (e.response) {
                console.log('Error: ', e.response.data.message);
                setError(e.response.data.message); 
            } else {
                setError('Error when trying to reach server');
            }
        }
    }

  return (
    <Box 
        maxW='md' 
        mx='auto' 
        mt={10} 
        p={5} 
        borderWidth={1} 
        borderRadius={'lg'}
        bg="gray.100"   
        color="brand.900" 
        boxShadow="lg"    
    >
        <Heading as='h2' size='lg' mb='4' color="brand.500"> Register </Heading>
        <form onSubmit={handleSubmit}>
            <FormControl isRequired mb={3}>
                <FormLabel  htmlFor='name' color='brand.600'> Name </FormLabel>
                <Input 
                    id='name' 
                    type='text' 
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    borderColor="brand.500"
                    placeholder='Enter name'
                    focusBorderColor="brand.300" 
                    _placeholder={{ color: 'gray.400' }}
                    bg="gray.50"
                >
                </Input>
            </FormControl>
            <FormControl isRequired mb={3}>
                <FormLabel  htmlFor='email' color='brand.600'> Email </FormLabel>
                <Input 
                    id='email' 
                    type='email' 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    borderColor="brand.500"
                    placeholder='Enter email'
                    focusBorderColor="brand.300"  
                    _placeholder={{ color: 'gray.400' }} 
                    bg="gray.50"
                >
                </Input>
            </FormControl>
            <FormControl isRequired mb={3}>
                <FormLabel  htmlFor='password' color='brand.600'> Password </FormLabel>
                <Input 
                    id='password' 
                    type='password' 
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder='Enter password'
                    borderColor="brand.500"
                    focusBorderColor="brand.300" 
                    _placeholder={{ color: 'gray.400' }} 
                    bg="gray.50"
                >
                </Input>
            </FormControl>
            <Button 
                colorScheme="brand"  
                type="submit" 
                width="full"
                bg="brand.500"   
                color="white"      
                _hover={{ bg: 'brand.600' }}  
            >
            Register</Button>
        </form>
        
        {success && <Box color= 'green.500' mt={4}>{success}</Box>}  
        {error && <Box color="red.500" mt={4}>{error}</Box>}  

        <Box mt={4} color="brand.700">
            <span>Already have an account? </span>
            <Link to= '/login' style={{ textDecoration: 'underline' }}>Login</Link>
        </Box>
    </Box>
  )
}

export default RegisterPage