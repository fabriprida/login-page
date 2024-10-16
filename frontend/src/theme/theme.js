import { extendTheme } from '@chakra-ui/react';

const colors = {
    brand: {
        50: '#e4f0ff', 
        100: '#bbd3ff',
        200: '#8fb6ff',
        300: '#6098ff',
        400: '#397dff',
        500: '#155fcf', 
        600: '#114ba1',
        700: '#0c3774',
        800: '#07224a',
        900: '#03101f', 
    },
    gray: {
        50: '#f7f7f7', 
        900: '#171717', 
    }
};

const theme = extendTheme({
    colors,
    fonts: {
        heading: 'Poppins, sans-serif', 
        body: 'Inter, sans-serif', 
    }
});

export default theme;
