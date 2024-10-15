import { extendTheme } from '@chakra-ui/react';

// Aquí defines los colores personalizados basados en los de Ray
const colors = {
    brand: {
        50: '#e4f0ff', // Tonos claros
        100: '#bbd3ff',
        200: '#8fb6ff',
        300: '#6098ff',
        400: '#397dff',
        500: '#155fcf', // Azul principal de Ray
        600: '#114ba1',
        700: '#0c3774',
        800: '#07224a',
        900: '#03101f', // Tonos oscuros
    },
    gray: {
        50: '#f7f7f7', // Gris claro
        900: '#171717', // Gris oscuro casi negro
    }
};

// Extender el tema de Chakra UI
const theme = extendTheme({
    colors,
    fonts: {
        heading: 'Poppins, sans-serif', // Puedes usar la fuente de Ray si la identificas
        body: 'Inter, sans-serif', // Cambiar la fuente de cuerpo
    }
});

export default theme;
