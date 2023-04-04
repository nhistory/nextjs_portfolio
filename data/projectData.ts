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
        'Developed front end design with back-end services and databases to help used car search and comparison with 2 scattered charts and price patterns from 500+ used car models.',
        'Designed and modified backend APIs and REST architectures using Python with testable, efficient code.',
        'Worked on CI-CD process, and container-based architectures to establish a development environment and contributed technical architecture for DevOps.',
        'Followed Agile development methodology with GIT repos and maintained readable project documentation.',
        'Wrote unit test automation and how can share the development environment by Docker.',
        'Interacted with 3 team members to plan and estimate development tasks.',
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
      type: 'Private Project',
      keyFunc: 'Play next, previous songs as a desktop app',
      stack: 'Electron, JavaScript, jQuery, CSS',
      build: [],
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
        'Built backend with expressjs and handled by using graphQL mutation.',
        'Used graphiql for checking graphql schema on the browser.',
        'Made cloud-based database by using mongodb atlas and controled with mongodb compass.',
        'Build client side with React and apollo, graphql, react-router-dom, react-icons packages.',
      ],
    },
  },
];
