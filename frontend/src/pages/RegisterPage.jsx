import React, { useState } from 'react';
import { Box, Button } from '@chakra-ui/react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import InputField from '../components/InputField';
import FormWrapper from '../components/FormWrapper';

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
    <FormWrapper title='Register'>
        <form onSubmit={handleSubmit}>
            <InputField 
                id='name'
                label='Name' 
                type='text'
                value={name} 
                onChange={(e) => setName(e.target.value)} 
                placeholder='Enter name' 
            />
            <InputField 
                id='email'
                label='Email'
                type='email'
                value={email} 
                onChange={(e) => setEmail(e.target.value)} 
                placeholder='Enter email'
            />
            <InputField 
                id='password'
                label='Password'
                type='password'
                value={password} 
                onChange={(e) => setPassword(e.target.value)} 
                placeholder='Enter password'
            />
            <Button 
                colorScheme='brand' 
                type='submit'
                width='full'
                bg='brand.500'
                color='white'  
                _hover={{ bg: 'brand.600' }}  
            >
            Register</Button>
        </form>
        
        {success && <Box color= 'green.500' mt={4}>{success}</Box>}  
        {error && <Box color='red.500' mt={4}>{error}</Box>}  

        <Box mt={4} color='brand.700'>
            <span>Already have an account? </span>
            <Link to= '/login' style={{ textDecoration: 'underline' }}>Login</Link>
        </Box>
    </FormWrapper>
  )
}

export default RegisterPage