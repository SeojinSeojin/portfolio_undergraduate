import {
  Box,
  Flex,
  Grid,
  HStack,
  Image,
  Link,
  Tag,
  UnorderedList,
  VStack,
} from '@chakra-ui/react';
import ProfileImage from '../components/ProfileImage';
import StyledText from '../components/StyledText';
import { frameworkBadges, languageBadges } from '../const/badges';
import { projects } from '../const/projects';

function Badge({ src, alt }: { src: string; alt: string }) {
  return (
    <Image
      src={src}
      alt={alt}
      borderRadius={4}
      h={{ base: '16px', sm: '28px', xl: '36px' }}
    />
  );
}

function ProjectCard({
  title,
  desc,
  organization,
  tags,
  role,
  githubLink,
  videoLink,
  otherLinks,
}: {
  title: string;
  desc: string;
  organization: string;
  tags: string[];
  role: string[];
  githubLink?: string;
  videoLink?: string;
  otherLinks?: { name: string; link: string }[];
}) {
  return (
    <Box
      borderBottomWidth={1}
      borderStyle='solid'
      borderColor='gray.400'
      pb={4}
    >
      <StyledText as='h2' fontSize='lg' fontWeight='bold'>
        {title}
      </StyledText>
      <HStack spacing={1} wrap='wrap' p={2}>
        {tags.map((tag, tIdx) => (
          <Tag key={tIdx} bgColor='gray.600' color='white'>
            #{tag}
          </Tag>
        ))}
      </HStack>
      <Grid
        templateColumns={{ base: '1fr', sm: '152px auto' }}
        rowGap={2}
        columnGap={4}
        px={2}
      >
        <StyledText>Description</StyledText>
        <StyledText>{desc}</StyledText>
        <StyledText>Role</StyledText>
        <UnorderedList>
          {role.map((role, rIdx) => (
            <StyledText as='li' key={rIdx}>
              {role}
            </StyledText>
          ))}
        </UnorderedList>
        <StyledText>Organization</StyledText>
        <StyledText fontStyle='italic'>{organization}</StyledText>
        <StyledText>Links</StyledText>
        <HStack>
          {githubLink && (
            <Link href={githubLink} target='_blank'>
              <Image
                src='/icons/github-mark-black.svg'
                alt='GitHub'
                w={{ base: '16px', sm: '24px', lg: '32px' }}
              />
            </Link>
          )}
          {videoLink && (
            <Link href={videoLink} target='_blank'>
              <Image
                src='/icons/youtube-app-black-icon.svg'
                alt='Youtube'
                w={{ base: '16px', sm: '24px', lg: '32px' }}
                borderRadius={4}
              />
            </Link>
          )}
          {otherLinks?.map(({ name, link }, lIdx) => (
            <Link key={lIdx} href={link} target='_blank'>
              {name}{' '}
            </Link>
          ))}
        </HStack>
      </Grid>
    </Box>
  );
}

function Project() {
  return (
    <>
      <ProfileImage src='/assets/DSC09543.webp' />
      <VStack
        alignItems='stretch'
        gap={4}
        w={{
          base: 'min(96%, 888px)',
          lg: 'min(96%, 1000px)',
          xl: 'min(96%, 1200px)',
        }}
        pb={12}
      >
        <StyledText>
          As an undergraduate student with a strong passion for coding and a
          curiosity for entrepreneurship, I have worked on various side projects
          with people from diverse groups and interests.
        </StyledText>
        <VStack gap={1} alignItems='stretch'>
          <StyledText as='h1' fontSize='xl' fontWeight='bold'>
            Programming Languages and Frameworks
          </StyledText>
          <Flex gap={1} wrap='wrap'>
            {languageBadges.map((badge) => (
              <Badge key={badge.alt} {...badge} />
            ))}
          </Flex>
          <Flex gap={1} wrap='wrap'>
            {frameworkBadges.map((badge) => (
              <Badge key={badge.alt} {...badge} />
            ))}
          </Flex>
        </VStack>
        <VStack gap={1} alignItems='stretch'>
          <StyledText as='h1' fontSize='xl' fontWeight='bold'>
            Projects
          </StyledText>
          {projects.map((project, pIdx) => (
            <ProjectCard {...project} key={pIdx} />
          ))}
        </VStack>
      </VStack>
    </>
  );
}

export default Project;
