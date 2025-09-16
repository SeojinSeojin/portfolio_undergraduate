import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  config: {
    initialColorMode: 'white', //'dark',
    useSystemColorMode: false,
  },
  styles: {
    global: {
      'li::marker': {
        color: 'black', //color: 'white',
      },
      html: {
        fontSize: {
          base: '9px',
          sm: '12px',
          md: '15px',
          lg: '18px',
          xl: '20px',
        },
      },
      body: {
        color: 'black', //color: 'white',
      },
      'a:hover': {
        bgColor: 'gray.200', // 'gray.700',
      },
      img: {
        borderRadius: '50%',
        borderWidth: 1,
        borderColor: 'gray.700',
        borderStyle: 'solid',
      },
    },
  },
});

export default theme;
