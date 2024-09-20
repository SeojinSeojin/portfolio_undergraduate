import { Flex, Link } from '@chakra-ui/react';
import StyledText from './StyledText';

function Header() {
  return (
    <Flex
      justifyContent='space-between'
      alignItems='center'
      px={2}
      w={{
        base: 'min(96%, 888px)',
        lg: 'min(96%, 1000px)',
        xl: 'min(96%, 1200px)',
      }}
    >
      <StyledText as='h1' fontSize='3xl' fontWeight='bold'>
        SEOJIN KIM
      </StyledText>
      <Flex gap={4}>
        <Link href='/' px={2}>
          About
        </Link>
        <Link href='/projects' px={2}>
          Projects
        </Link>
      </Flex>
    </Flex>
  );
}

export default Header;
