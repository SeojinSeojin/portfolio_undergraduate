import { Center, Image, Link } from '@chakra-ui/react';
import StyledText from './StyledText';

function ProfileImage({ src }: { src: string }) {
  return (
    <>
      <Image src={src} w={{ base: '160px', lg: '200px', xl: '224px' }} />
      <Center gap={2}>
        <Link href='https://github.com/seojinseojin' target='_blank'>
          <StyledText>[Github]</StyledText>
        </Link>
        <Link
          href='https://www.linkedin.com/in/%EC%84%9C%EC%A7%84-%EA%B9%80-0363aa259/'
          target='_blank'
        >
          <StyledText>[LinkedIn]</StyledText>
        </Link>
      </Center>
    </>
  );
}

export default ProfileImage;
