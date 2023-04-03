interface ProjectObject {
  title: string;
  description: string;
  stack: string[];
  image: string;
  link: {
    demo?: string;
    code?: string;
  };
}

export const projects: ProjectObject[] = [
  {
    title: 'Compcar project',
    description:
      'FARM stack application to search used car with data visualization',
    stack: ['React', 'FastAPI', 'MongoDB', 'Python', 'JavaScript'],
    image: '/projects/compcar.jpg',
    link: {
      demo: 'https://compcar-front.onrender.com',
      code: 'https://github.com/Hongseoupyun/compcar-ui',
    },
  },
  {
    title: 'Music player',
    description: 'Music player desktop application with Electron',
    stack: ['JavaScript', 'Electron', 'jQuery'],
    image: '/projects/musicPlayer.jpg',
    link: { code: 'https://github.com/nhistory/electron-music-player' },
  },
  {
    title: 'Project manage app',
    description:
      'A MERN stack application to manage clients and project data that can make CRUD functionality with simple web page.',
    stack: ['React', 'NodeJS', 'express', 'MongoDB'],
    image: '/projects/compcar.jpg',
    link: { code: 'https://github.com/nhistory/project-manage-app' },
  },
];
