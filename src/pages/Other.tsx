import { UnorderedList, VStack } from '@chakra-ui/react';
import StyledText from '../components/StyledText';

function Other() {
  return (
    <>
      <VStack
        alignItems='stretch'
        gap={4}
        w={{
          base: 'min(96%, 888px)',
          lg: 'min(96%, 1000px)',
          xl: 'min(96%, 1200px)',
        }}
      >
        <VStack alignItems='stretch' gap={1}>
          <StyledText>
            This page was created to share a glimpse of my hobbies and tastes.
          </StyledText>
          <StyledText>
            If you happen to like something from the list below, let's be
            friends!
          </StyledText>
        </VStack>
        <VStack gap={1} alignItems='stretch'>
          <StyledText as='h2' fontSize='xl' fontWeight='bold'>
            MOVIES
          </StyledText>
          <UnorderedList>
            <StyledText as='li'>GATTACA (1997)</StyledText>
            <StyledText as='li'>The Shawshank Redemption (1994)</StyledText>
            <StyledText as='li'>Whiplash (2014)</StyledText>
            <StyledText as='li'>Big Fish (2003)</StyledText>
            <StyledText as='li'>
              Everything Everywhere All At Once (2022)
            </StyledText>
            <StyledText as='li'>Decision to Leave (2022)</StyledText>
          </UnorderedList>
        </VStack>
        <VStack gap={1} alignItems='stretch'>
          <StyledText as='h2' fontSize='xl' fontWeight='bold'>
            GAMES
          </StyledText>
          <UnorderedList>
            <StyledText as='li'>
              The Legend of Zelda: Breath of the Wild (2017)
            </StyledText>
            <StyledText as='li'>
              The Legend of Zelda: Tears of the Kingdom (2023)
            </StyledText>
            <StyledText as='li'>The Mario Kart Series</StyledText>
          </UnorderedList>
        </VStack>
        <VStack gap={1} alignItems='stretch'>
          <StyledText as='h2' fontSize='xl' fontWeight='bold'>
            BOOKS
          </StyledText>
          <UnorderedList>
            <StyledText as='li'>
              No Longer Human - Osamu Dazai (1973)
            </StyledText>
            <StyledText as='li'>De Profundis - Oscar Wilde (1973)</StyledText>
            <StyledText as='li'>
              A Person Innocent to Me - Choi Eunyoung (1890)
            </StyledText>
            <StyledText as='li'>
              A Christmas Carol - Charles Dickens (1843)
            </StyledText>
          </UnorderedList>
        </VStack>
      </VStack>
    </>
  );
}

export default Other;
