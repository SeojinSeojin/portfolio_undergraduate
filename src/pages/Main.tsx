import { Center } from '@chakra-ui/react';
import { Outlet } from 'react-router-dom';
import Header from '../components/Header';

function Main() {
  return (
    <Center
      bgColor='white' //'gray.900'
      flexDirection='column'
      gap={4}
      minH='100vh'
      justifyContent='flex-start'
    >
      <Header />
      <Outlet />
    </Center>
  );
}

export default Main;
