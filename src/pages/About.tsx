import {
  Box,
  Flex,
  Grid,
  Image,
  Link,
  ListItem,
  SimpleGrid,
  UnorderedList,
  VStack,
} from '@chakra-ui/react';
import React from 'react';
import ProfileImage from '../components/ProfileImage';
import StyledText from '../components/StyledText';

const education = [
  {
    school: 'North Carolina State University (NCSU)',
    period: '2025.08-2027.05 (Expected)',
    degrees: ['Master of Science in Computer Science'],
  },
  {
    school: 'SUNGKYUNKWAN UNIVERSITY (SKKU)',
    period: '2019.03-2024.08',
    degrees: [
      'Bachelor of Science in Computer Education',
      'Bachelor of Applied Artificial Intelligence',
    ],
  },
];

const honors = [
  'SKKU Summa Cum Laude',
  {
    text: 'National Science and Engineering Scholarship (Full Ride)',
    link: {
      href: 'https://www.kosaf.go.kr/ko/scholar.do?pg=scholarship05_06_01',
      label: 'KOSAF',
    },
  },
];

const workExperience = [
  {
    company: 'Lilys AI, Inc.',
    period: '2024.11-2025.04',
    roles: ['Remote Part-time Software Engineer'],
  },
  {
    company: 'AIPro, Co.',
    period: '2023.07-2024.04',
    roles: ['Software Engineer Intern at AI-Box Team'],
  },
  {
    company: 'VoyagerX, Inc.',
    period: '2022.03-2022.12',
    roles: ['Software Engineer Intern at Vrew Team'],
  }
];

const teachingExperience = [
  { year: '2024', desc: 'Generative AI Workshop for Professors, TA & Head Workshop Organizer', place: 'SKKU' },
  { year: '2024', desc: 'Programming(C Language), Teaching Practice', place: 'SSGHS' },
  { year: '2023', desc: 'Data Structure, TA', place: 'SKKU' },
  { year: '2023', desc: 'Database System, Student Mentor', place: 'SKKU' },
  { year: '2021', desc: 'Writing in the Liberal Arts & Sciences with Python, TA', place: 'SKKU' },
  { year: '2021', desc: 'Introduction to Programming, TA', place: 'SKKU' },
];

const awards = [
  { year: '2023', desc: '🥇🥈 SKKU AI-Education Capstone Design Competition', place: 'College of Education, SKKU' },
  { year: '2023', desc: '🥈 SKKU AI-Education Hackathon', place: 'College of Education, SKKU' },
  { year: '2021', desc: '🥈 SKKU AI-Education Hackathon', place: 'College of Education, SKKU' },
  { year: '2020', desc: '🥇 SKKU Changers', place: 'SKKU Campus Town' },
  { year: '2020', desc: '🥈 The 4th Industrial Revolution HR Development Festival', place: 'SKKU Link+' },
];

const organizations = [
  {
    href: 'https://makers.sopt.org/',
    src: 'https://avatars.githubusercontent.com/u/113594441?s=200&v=4',
    alt: 'SOPT Makers',
  },
  {
    href: 'https://www.sopt.org/',
    src: 'https://media.licdn.com/dms/image/v2/D560BAQFUHzKt0-CDGA/company-logo_200_200/company-logo_200_200/0/1723768577886/sopt_official_logo?e=2147483647&v=beta&t=8rtt4HTZoGNxcbn2J3dULOMdTTIBonP5B9u0HV2Zt6k',
    alt: 'SOPT',
  },
  {
    href: 'https://boostcamp.connect.or.kr/program_wm.html',
    src: 'https://avatars.githubusercontent.com/u/84498910?s=200&v=4',
    alt: 'Naver Boostcamp',
  },
  {
    href: 'https://cmc.makeus.in/',
    src: 'https://avatars.githubusercontent.com/u/84928276?s=200&v=4',
    alt: 'MakeUs',
  },
  {
    href: 'https://www.depromeet.com/',
    src: 'https://avatars.githubusercontent.com/u/18240792?s=200&v=4',
    alt: 'Depromeet',
  },
  {
    href: 'https://likelion.university/univ',
    src: 'https://avatars.githubusercontent.com/u/79002165?s=200&v=4',
    alt: 'LikeLion',
  },
  {
    href: 'https://github.com/comeducmd',
    src: 'https://avatars.githubusercontent.com/u/68145103?s=200&v=4',
    alt: 'CMD',
  },
];

function About() {
  return (
    <>
      <ProfileImage src='/assets/YES06675.webp' />
      <VStack
        alignItems='stretch'
        gap={4}
        w={{
          base: 'min(96%, 888px)',
          lg: 'min(96%, 1000px)',
          xl: 'min(96%, 1200px)',
        }}
      >
        <StyledText>
          Hello, I'm Seojin Kim, a Master of Computer Science student 
          at North Carolina State University. 
          I am passionate about bridging industry and academia in software engineering, 
          with a particular interest in automating repetitive development tasks. 
          My goal is to enhance developer productivity by reducing manual effort, 
          allowing engineers to focus on creative and impactful work.
        </StyledText>
        <Box>
          <StyledText as='h1' fontSize='2xl' fontWeight='bold'>
            EDUCATION
          </StyledText>
          <VStack gap='8px' alignItems='flex-start'>
          {education.map((edu) => (
            <Box key={edu.school} w='100%'>
              <Flex justifyContent='space-between'>
                <StyledText as='h2' fontSize='xl'>
                  {edu.school}
                </StyledText>
                <StyledText fontStyle='italic'>{edu.period}</StyledText>
              </Flex>
              <UnorderedList>
                {edu.degrees.map((deg) => (
                  <StyledText as='li' key={deg}>{deg}</StyledText>
                ))}
              </UnorderedList>
            </Box>
          ))}</VStack>
          <StyledText as='h2' fontSize='xl'>
            HONORS
          </StyledText>
          <UnorderedList>
            {honors.map((honor, i) =>
              typeof honor === 'string' ? (
                <StyledText as='li' key={honor}>{honor}</StyledText>
              ) : (
                <ListItem key={i}>
                  <Flex justifyContent='space-between' w='100%'>
                    <StyledText>{honor.text}</StyledText>
                    <Link href={honor.link.href} target='_blank'>
                      {honor.link.label}
                    </Link>
                  </Flex>
                </ListItem>
              )
            )}
          </UnorderedList>
        </Box>
        <Box>
          <StyledText as='h1' fontSize='2xl' fontWeight='bold'>
            PUBLICATION
          </StyledText>
          <VStack alignItems='flex-start' gap={0}>
            <StyledText fontWeight='semibold'>
              Debun: Detecting Bundled JavaScript Libraries on Web using Property-Order Graphs (Accepted)
            </StyledText>
            <StyledText>
              Seojin Kim *, Sungmin Park*, and Jihyeok Park (* equally contributed)
            </StyledText>
            <Link href='https://conf.researchr.org/details/ase-2025/ase-2025-papers/3/Debun-Detecting-Bundled-JavaScript-Libraries-on-Web-using-Property-Order-Graphs' target='_blank'>
              ASE 2025 (IEEE/ACM International Conference on Automated Software Engineering)
            </Link>
          </VStack>
        </Box>
        <Box>
          <StyledText as='h1' fontSize='2xl' fontWeight='bold'>
            WORK EXPERIENCE
          </StyledText>
          <VStack gap='8px' alignItems='flex-start'>
          {workExperience.map((exp) => (
            <Box key={exp.company} w='100%'>
              <Flex justifyContent='space-between'>
                <StyledText as='h2' fontSize='xl'>
                  {exp.company}
                </StyledText>
                <StyledText fontStyle='italic'>{exp.period}</StyledText>
              </Flex>
              <UnorderedList>
                {exp.roles.map((role) => (
                  <StyledText as='li' key={role}>{role}</StyledText>
                ))}
              </UnorderedList>
            </Box>
          ))}
          </VStack>
        </Box>
        <Box>
          <StyledText as='h1' fontSize='2xl' fontWeight='bold'>
            TEACHING EXPERIENCE
          </StyledText>
          <Grid
            templateColumns={{ base: '44px auto auto', md: '60px auto auto' }}
          >
            {teachingExperience.map((item, idx) => (
              <React.Fragment key={idx}>
                <StyledText>{item.year}</StyledText>
                <StyledText>{item.desc}</StyledText>
                <StyledText align='right'>{item.place}</StyledText>
              </React.Fragment>
            ))}
          </Grid>
        </Box>
        <Box>
          <StyledText as='h1' fontSize='2xl' fontWeight='bold'>
            AWARDS
          </StyledText>
          <Grid
            templateColumns={{ base: '44px auto auto', md: '60px auto auto' }}
          >
            {awards.map((award, idx) => (
              <React.Fragment key={idx}>
                <StyledText>{award.year}</StyledText>
                <StyledText>{award.desc}</StyledText>
                <StyledText align='right'>{award.place}</StyledText>
              </React.Fragment>
            ))}
          </Grid>
        </Box>
        <Box>
          <StyledText as='h1' fontSize='2xl' fontWeight='bold'>
            EXTRA-CURRICULAR ACTIVITIES
          </StyledText>
          <Flex gap={2}>
            <StyledText flexShrink={0}>
              Joined 7+ Coding & Side Project Organizations :
            </StyledText>
            <SimpleGrid columns={7} spacing={1}>
              {organizations.map((org) => (
                <Link href={org.href} key={org.href}>
                  <Image src={org.src} alt={org.alt} w={6} />
                </Link>
              ))}
            </SimpleGrid>
          </Flex>
          <Flex gap={1}>
            <StyledText>
              If you want more information, please refer to the
            </StyledText>
            <Link href='/projects'>
              <StyledText> [Project Page]</StyledText>
            </Link>
          </Flex>
        </Box>
      </VStack>
      <Box h={12} />
    </>
  );
}

export default About;
