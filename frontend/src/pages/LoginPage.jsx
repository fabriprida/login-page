import React, { useState } from 'react'
import { Box, Button } from '@chakra-ui/react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import InputField from '../components/InputField';
import FormWrapper from '../components/FormWrapper';


const LoginPage = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')
    const [success, setSuccess] = useState('')
    const navigate = useNavigate(); 


    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log('Formulario enviado', {email, password});

        try {
            const response = await axios.post('http://localhost:3000/login', {
                email,
                password,
            });

            if(response.status === 200){
                localStorage.setItem('token', response.data.token);
                setSuccess('Login successful');
                setError('');
                navigate('/welcome');
            }
            console.log(response.data);
        } catch (e) {
            console.error('Error at login', e);
            setSuccess('');
            if (e.response) {
                console.log('Error: ', e.response.data.message);
                setError(e.response.data.message); 
            } else {
                setError('Error at login'); 
            }
        }
    }

  return (
    <FormWrapper title='Login'>
        <form onSubmit={handleSubmit}>
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
            > Login </Button>
        </form>
        
        {success && <Box color='green.500' mt={4}>{success}</Box>}  
        {error && <Box color='red.500' mt={4}>{error}</Box>}  

        <Box mt={4} color='brand.700'>
            <span>Do not have an account? </span>
            <Link to= '/register' style={{textDecoration: 'underline' }}>Sign up</Link>
        </Box>
    </FormWrapper>
  )
}

export default LoginPage