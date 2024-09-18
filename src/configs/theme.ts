import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  config: {
    initialColorMode: 'dark',
    useSystemColorMode: false,
  },
  fonts: {
    heading: "'Victor Mono Variable', monospace",
    body: "'Victor Mono Variable', monospace",
  },
  styles: {
    global: {
      'li::marker': {
        color: 'white',
      },
      body: {
        color: 'white',
      },
      'a:hover': {
        bgColor: 'gray.700',
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
