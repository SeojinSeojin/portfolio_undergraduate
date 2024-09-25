import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  config: {
    initialColorMode: 'white', //'dark',
    useSystemColorMode: false,
  },
  fonts: {
    heading: "'Victor Mono Variable', monospace",
    body: "'Victor Mono Variable', monospace",
  },
  styles: {
    global: {
      'li::marker': {
        color: 'black', //color: 'white',
      },
      html: {
        fontSize: {
          base: '9px',
          sm: '14px',
          md: '16px',
          lg: '18px',
          xl: '20px',
        },
      },
      body: {
        color: 'black', //color: 'white',
      },
      'a:hover': {
        bgColor: 'gray.100', // 'gray.700',
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
