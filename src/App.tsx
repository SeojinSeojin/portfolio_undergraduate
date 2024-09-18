import { ChakraProvider } from '@chakra-ui/react';
import '@fontsource-variable/victor-mono';

import { RouterProvider } from 'react-router-dom';
import router from './configs/router';
import theme from './configs/theme';

function App() {
  return (
    <>
      <ChakraProvider theme={theme}>
        <RouterProvider router={router} />
      </ChakraProvider>
    </>
  );
}

export default App;
