import { Flex, Link } from '@chakra-ui/react';
import StyledText from './StyledText';

function Header() {
  return (
    <Flex
      justifyContent='space-between'
      alignItems='center'
      px={2}
      w='min(96%, 860px)'
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
