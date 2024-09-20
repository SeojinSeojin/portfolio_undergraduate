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
import ProfileImage from '../components/ProfileImage';
import StyledText from '../components/StyledText';

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
          Hello, I'm Seojin Kim, a student from Korea who believes in the
          synergy between innovative ideas and engineering skills. I recently
          graduated from Sungkyunkwan University with a degree in Computer
          Education and an additional major in Applied Artificial Intelligence.
          I am eager to further explore software engineering, with key interests
          in programming languages, formal verification, and fault localization.
        </StyledText>
        <Box>
          <StyledText as='h1' fontSize='2xl' fontWeight='bold'>
            EDUCATION
          </StyledText>
          <Flex justifyContent='space-between'>
            <StyledText as='h2' fontSize='xl'>
              SUNGKYUNKWAN UNIVERSITY (SKKU)
            </StyledText>
            <StyledText fontStyle='italic'>2019.03-2024.08</StyledText>
          </Flex>
          <UnorderedList>
            <StyledText as='li'>
              BACHELOR of SCIENCE in COMPUTER EDUCATION
            </StyledText>
            <StyledText as='li'>
              BACHELOR of APPLIED ARTIFICIAL INTELLIGENCE
            </StyledText>
          </UnorderedList>
          <StyledText as='h2' fontSize='xl'>
            HONORS
          </StyledText>
          <UnorderedList>
            <StyledText as='li'>SKKU SUMMA CUM LAUDE</StyledText>
            <ListItem>
              <Flex justifyContent='space-between' w='100%'>
                <StyledText>
                  NATIONAL SCIENCE and ENGINEERING SCHOLARSHIP (FULL RIDE)
                </StyledText>
                <Link
                  href='https://www.kosaf.go.kr/ko/scholar.do?pg=scholarship05_06_01'
                  target='_blank'
                >
                  KOSAF
                </Link>
              </Flex>
            </ListItem>
          </UnorderedList>
        </Box>
        <Box>
          <StyledText as='h1' fontSize='2xl' fontWeight='bold'>
            WORK EXPERIENCE
          </StyledText>
          <Flex justifyContent='space-between'>
            <StyledText as='h2' fontSize='xl'>
              AIPro, Co.
            </StyledText>
            <StyledText fontStyle='italic'>2023.07-2024.04</StyledText>
          </Flex>
          <UnorderedList>
            <StyledText as='li'>
              SOFTWARE ENGINEER INTERN at AI-Box Team
            </StyledText>
          </UnorderedList>
          <Flex justifyContent='space-between'>
            <StyledText as='h2' fontSize='xl'>
              VoyagerX, Inc.
            </StyledText>
            <StyledText fontStyle='italic'>2022.03-2022.12</StyledText>
          </Flex>
          <UnorderedList>
            <StyledText as='li'>
              SOFTWARE ENGINEER INTERN at Vrew Team
            </StyledText>
          </UnorderedList>
          <Flex justifyContent='space-between'>
            <StyledText as='h2' fontSize='xl'>
              Multimedia Computing Science Lab : MCSL
            </StyledText>
            <StyledText fontStyle='italic'>2020.12-2021.07</StyledText>
          </Flex>
          <UnorderedList>
            <StyledText as='li'>STUDENT RESEARCH INTERN</StyledText>
          </UnorderedList>
        </Box>
        <Box>
          <StyledText as='h1' fontSize='2xl' fontWeight='bold'>
            TEACHING EXPERIENCE
          </StyledText>
          <Grid templateColumns='60px auto auto'>
            <StyledText>2024</StyledText>
            <StyledText>
              GENERATIVE AI WORKSHOP for PROFESSORS, TA & Head Workshop
              Organizer
            </StyledText>
            <StyledText align='right'>SKKU</StyledText>
            <StyledText>2024</StyledText>
            <StyledText>Programming(C Language), Teaching Practice</StyledText>
            <StyledText align='right'>SSGHS</StyledText>
            <StyledText>2023</StyledText>
            <StyledText>DATA STRUCTURE, TA</StyledText>
            <StyledText align='right'>SKKU</StyledText>
            <StyledText>2023</StyledText>
            <StyledText>DATABASE SYSTEM, Student Mentor</StyledText>
            <StyledText align='right'>SKKU</StyledText>
            <StyledText>2021</StyledText>
            <StyledText>
              WRITING IN THE LIBERAL ARTS & SCIENCES WITH PYTHON, TA
            </StyledText>
            <StyledText align='right'>SKKU</StyledText>
            <StyledText>2021</StyledText>
            <StyledText>INTRODUCTION TO PROGRAMMING, TA</StyledText>
            <StyledText align='right'>SKKU</StyledText>
          </Grid>
        </Box>
        <Box>
          <StyledText as='h1' fontSize='2xl' fontWeight='bold'>
            AWARDS
          </StyledText>
          <Grid templateColumns='60px auto auto'>
            <StyledText>2023</StyledText>
            <StyledText>
              🥇🥈 SKKU AI-EDUCATION CAPSTONE DESIGN COMPETITION
            </StyledText>
            <StyledText align='right'>College of Education, SKKU</StyledText>
            <StyledText>2023</StyledText>
            <StyledText>🥈 SKKU AI-EDUCATION HACKATHON</StyledText>
            <StyledText align='right'>College of Education, SKKU</StyledText>
            <StyledText>2021</StyledText>
            <StyledText>🥈 SKKU AI-EDUCATION HACKATHON</StyledText>
            <StyledText align='right'>College of Education, SKKU</StyledText>
            <StyledText>2020</StyledText>
            <StyledText>🥇 SKKU CHANGERS</StyledText>
            <StyledText align='right'>SKKU Campus Town</StyledText>
            <StyledText>2020</StyledText>
            <StyledText>
              🥈 The 4th Industrial Revolution HR Development Festival
            </StyledText>
            <StyledText align='right'>SKKU Link+</StyledText>
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
              <Link href='https://makers.sopt.org/'>
                <Image
                  src='https://avatars.githubusercontent.com/u/113594441?s=200&v=4'
                  alt='SOPT Makers'
                  w={6}
                />
              </Link>
              <Link href='https://www.sopt.org/'>
                <Image
                  src='https://media.licdn.com/dms/image/v2/D560BAQFUHzKt0-CDGA/company-logo_200_200/company-logo_200_200/0/1723768577886/sopt_official_logo?e=2147483647&v=beta&t=8rtt4HTZoGNxcbn2J3dULOMdTTIBonP5B9u0HV2Zt6k'
                  alt='sopt'
                  w={6}
                />
              </Link>
              <Link href='https://boostcamp.connect.or.kr/program_wm.html'>
                <Image
                  src='https://avatars.githubusercontent.com/u/84498910?s=200&v=4'
                  alt='Naver Boostcamp'
                  w={6}
                />
              </Link>
              <Link href='https://cmc.makeus.in/'>
                <Image
                  src='https://avatars.githubusercontent.com/u/84928276?s=200&v=4'
                  alt='MakeUs'
                  w={6}
                />
              </Link>
              <Link href='https://www.depromeet.com/'>
                <Image
                  src='https://avatars.githubusercontent.com/u/18240792?s=200&v=4'
                  alt='Depromeet'
                  w={6}
                />
              </Link>
              <Link href='https://likelion.university/univ'>
                <Image
                  src='https://avatars.githubusercontent.com/u/79002165?s=200&v=4'
                  alt='LikeLion'
                  w={6}
                />
              </Link>
              <Link href='https://github.com/comeducmd'>
                <Image
                  src='https://avatars.githubusercontent.com/u/68145103?s=200&v=4'
                  alt='CMD'
                  w={6}
                />
              </Link>
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
