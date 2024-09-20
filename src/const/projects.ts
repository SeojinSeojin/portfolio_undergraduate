export const projects: {
  title: string;
  desc: string;
  organization: string;
  role: string[];
  tags: string[];
  githubLink?: string;
  videoLink?: string;
  otherLinks?: { name: string; link: string }[];
}[] = [
  {
    title: 'Physical Temple Run',
    organization: 'SKKU Software Engineering Capstone Design',
    tags: ['Physical-Computing', 'Arduino', 'Unity', 'Capstone-Grand-Prize'],
    desc: 'An indoor fitness game utilizing serial communication between Arduino and the Unity game engine, enhancing running workouts with engaging gameplay elements.',
    role: [
      'Planned and designed the project, including setting game rules and 3D game elements',
      'Developed an endless running game with events for jumping, turning, stopping, and moving forward',
      'Created a serial communication module between Arduino and Unity to integrate sensor data with the game',
      'Handled error detection and management for Arduino sensors and serial communication issues',
    ],
    githubLink: 'https://github.com/PhysicalTempleRun',
    videoLink: 'https://www.youtube.com/watch?v=7_ejrTCwenI',
  },
  {
    title: 'ProfAIssor',
    organization: 'SKKU Software Engineering Capstone Design',
    tags: ['Generative-AI', 'Education', 'Capstone-Excellence-Prize'],
    desc: 'An online tutoring platform where virtual professors assist students with class-related queries.',
    role: [
      'Led idea proposal, project scheduling, and backend API testing',
      'Developed front-end UI for retrieving and playing video responses from the server when users ask virtual professors questions',
    ],
    githubLink: 'https://github.com/Team-Acappella',
    videoLink: 'https://www.youtube.com/watch?v=9yDRMeOF41M',
  },
  {
    title: 'CKMC Graduate Exhibition',
    organization: 'ChungKang College of Cultural Industries, CK',
    tags: ['React', 'Express', 'AWS', 'Full-Stack', 'Sole-Developer'],
    desc: 'A web platform for the 2022 Graduation Exhibition of the Comic Creation Department at ChungKang College of Cultural Industries.',
    role: [
      'Sole developer responsible for the full-stack development of both the student back-office and public exhibition site',
      'Implemented session-based authentication and an admin page for students to manage profiles and works',
      'Developed a fully responsive UI for external-facing pages, including the homepage, event, guestbook, and exhibition sections',
      'Managed and optimized the platform’s database using MongoDB Atlas, and deployed the application on AWS EC2 with Nginx for reliable server performance',
    ],
    githubLink: 'https://github.com/SeojinSeojin/CKMC_CLIENT',
  },
  {
    title: 'Duxcord',
    organization: 'Naver Boostcamp Web/Mobile',
    tags: [
      'React',
      'Express',
      'Socket.IO',
      'WebRTC',
      'Full-Stack',
      'Top-Starred-Repo',
    ],
    desc: 'A clone project integrating real-time user chat and video conferencing features of Discord, group/channel management from Slack, and real-time messaging during video calls from Zoom.',
    role: [
      'Led project planning, design, and full-stack development',
      'Designed ERD for relational database and defined TypeORM entities',
      'Developed a feature for screen capture during video calls and converting it into a photo booth-style collage',
      'Developed and integrated APIs for group management, channels, profiles, threads, and real-time chat reactions, handling both the server-side logic and front-end client implementation with responsive layouts',
    ],
    githubLink: 'https://github.com/boostcampwm-2021/web09-Duxcord',
    videoLink: 'https://www.youtube.com/watch?v=OPiExP7wHHU',
  },
  {
    title: 'MyRecipic',
    organization: 'Depromeet: When the Designer and the Programmer Meet',
    tags: ['Android', 'Kotlin', 'Mobile'],
    desc: 'An mobile application for storing custom Subway recipes.',
    role: [
      'Led Android development using the MVVM-C architecture for a modular, object-oriented structure',
      'Implemented layouts for viewing recommended and saved recipes, with server-side integration',
      'Developed side navigation for store switching and a view for corporate requests',
      'Created bottom navigation bar for seamless app navigation',
    ],
    otherLinks: [
      {
        name: 'Google Play Store (currently offline due to server maintenance)',
        link: 'https://play.google.com/store/apps/details?id=com.def.custom',
      },
    ],
  },
];
