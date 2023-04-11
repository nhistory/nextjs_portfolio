interface ProjectObject {
  title: string;
  description: string;
  stack: string[];
  image: string;
  link: {
    demo?: string;
    code?: string;
  };
  modal: {
    image: string;
    type: string;
    part?: string;
    keyFunc: string;
    stack: string;
    build: string[];
  };
}

export const projects: ProjectObject[] = [
  {
    title: 'Compcar project',
    description:
      'FARM stack application to search used car with data visualization',
    stack: ['React', 'FastAPI', 'MongoDB', 'Python'],
    image: '/projects/compcar.jpg',
    link: {
      demo: 'https://compcar-front.onrender.com',
      code: 'https://github.com/nhistory/compcar-ui',
    },
    modal: {
      image: '/projects/compcar.gif',
      type: 'Team Project',
      part: 'Lead & Backend Developer',
      keyFunc: 'Used car search and comparison with chart',
      stack:
        'React, FastAPI, MongoDB, Python, ChartJS, Selenium, Docker, Pytest',
      build: [
        'Developed and implemented a front-end design that integrated with back-end services and databases to enable efficient searching and comparison of over 500 used car models, using two scatter charts and price patterns.',
        'Designed and optimized RESTful APIs and backend architectures using Python, creating testable and efficient code.',
        'Spearheaded the establishment of a container-based architecture and CI/CD process, contributing to the technical architecture for DevOps and ensuring a streamlined development environment.',
        'Followed Agile development methodology, utilizing GIT repositories and maintaining comprehensive project documentation to ensure project success.',
        'Automated unit testing and implemented Docker to enable efficient sharing of development environments.',
        'Collaborated with a team of three to plan and estimate development tasks, ensuring project milestones were met.',
      ],
    },
  },
  {
    title: 'Music player',
    description: 'Music player desktop application with Electron',
    stack: ['JavaScript', 'Electron', 'jQuery'],
    image: '/projects/musicPlayer.jpg',
    link: { code: 'https://github.com/nhistory/electron-music-player' },
    modal: {
      image: '/projects/musicPlayer.gif',
      type: 'Toy Project',
      keyFunc: 'Play next, previous songs as a desktop app',
      stack: 'Electron, JavaScript, jQuery, CSS',
      build: [
        'Designed and developed a music player desktop application using ElectronJS v20, featuring the ability to play, rewind, and fast-forward mp3 formats with ease.',
        'Utilized preload script to effectively communicate between channels and enable context-isolated processes within the application.',
        'Leveraged Javascript fs and music-metadata libraries to effectively manage music files on local devices, ensuring seamless functionality of the music player.'
      ],
    },
  },
  {
    title: 'Project manage app',
    description:
      'A MERN stack application to manage clients and project data for CRUD functionality with simple web page.',
    stack: ['React', 'NodeJS', 'express', 'MongoDB'],
    image: '/projects/manage.jpg',
    link: { code: 'https://github.com/nhistory/project-manage-app' },
    modal: {
      image: '/projects/manage.gif',
      type: 'Private Project',
      keyFunc: 'CRUD employee and project information',
      stack: 'React, NodeJS, express, MongoDB, Bootstrap, GraphQL',
      build: [
        'Developed a robust backend utilizing ExpressJS, while leveraging graphQL mutation to enhance performance and data handling capabilities.',
        'Utilized GraphiQL to effectively check the GraphQL schema on the browser, ensuring seamless functionality of the application.',
        'Created a cloud-based database using MongoDB Atlas and effectively controlled it with MongoDB Compass, ensuring seamless data management capabilities.',
        'Built an efficient client-side application using React, Apollo, GraphQL, react-router-dom, and react-icons packages, resulting in a user-friendly and responsive application.',
      ],
    },
  },
];
