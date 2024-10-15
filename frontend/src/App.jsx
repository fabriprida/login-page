import { Route, Routes, Navigate } from 'react-router-dom';
import RegisterPage from './pages/RegisterPage';
import LoginPage from './pages/LoginPage';
import WelcomePage from './pages/WelcomePage';
import logo from '../assets/ray_logo.png'
import { Box, Image } from '@chakra-ui/react';


function App() {

  return (
    <Box 
      bg="gray.100"   // Color de fondo fuera del contenedor
      minH="100vh"    // Hace que el contenedor cubra toda la altura de la pantalla
      p={5}           // Añade padding global
    >
      <Box 
        maxW="md" 
        mx="auto" 
        mt={10} 
        p={5} 
        borderWidth={1} 
        borderRadius="lg" 
        textAlign="center"
        bg="white"    // Color de fondo del contenedor
        color="brand.900"  // Color del texto dentro del contenedor
        boxShadow="lg"    // Añade sombra para darle estilo
        >
        <Image src={logo} alt="Ray Logo" boxSize="100px" mx="auto" mb={4} />
        <Routes>
          <Route path="/" element={<Navigate to="/login" />} />
          <Route path='register' element={<RegisterPage/>} />
          <Route path='login' element={<LoginPage/>} />
          <Route path='welcome' element={<WelcomePage/>} />
      </Routes>
      </Box>
    </Box>
    
    
  )
}

export default App
