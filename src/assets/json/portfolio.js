const mainHeroIcons = [
  {
    iconPath: '/img/whiteinstagram.svg',
    iconLink: 'https://www.instagram.com/mar.quis/',
  },
  {
    iconPath: '/img/whitelinkedin.svg',
    iconLink: 'https://www.linkedin.com/in/marquis-laron-mitchell',
  },
  {
    iconPath: '/img/whitegithub.svg',
    iconLink: 'https://www.github.com/mardotquis',
  },
];

// icons are from https://icons8.com/ and https://www.flaticon.com/
const backgroundIcons = [
  {
    iconPath: '/img/icons/reactjs.svg',
    iconCaption: 'React.js',
  },
  {
    iconPath: '/img/icons/javascript.svg',
    iconCaption: 'JavaScript (ES6+)',
  },
  {
    iconPath: '/img/icons/typescript.svg',
    iconCaption: 'TypeScript',
  },
  {
    iconPath: '/img/icons/nodejs.svg',
    iconCaption: 'Node.js',
  },
  {
    iconPath: '/img/icons/python.svg',
    iconCaption: 'Python',
  },
  {
    iconPath: '/img/icons/aws.svg',
    iconCaption: 'Amazon Web Services',
  },
  {
    iconPath: '/img/icons/html5.svg',
    iconCaption: 'Semantic HTML5',
  },
  {
    iconPath: '/img/icons/css3.svg',
    iconCaption: 'CSS3',
  },
  {
    iconPath: '/img/icons/sass.png',
    iconCaption: 'Sass',
  },
  {
    iconPath: '/img/icons/graphql.svg',
    iconCaption: 'GraphQL',
  },
  {
    iconPath: '/img/icons/mysql.svg',
    iconCaption: 'MySQL',
  },
  {
    iconPath: '/img/icons/mongodb.svg',
    iconCaption: 'MongoDB',
  },
  {
    iconPath: '/img/icons/git.svg',
    iconCaption: 'Git/GitHub',
  },
];

const CDNLink = 'https://d3umk6exgg3emi.cloudfront.net';
const projectInformation = [
  {
    projectName: 'Be Well Therapy',
    projectDescription:
      "Freelance project for a local therapist business. A full stack, server-side rendered web application leveraging Next.js + Serverless. I'm currently the sole maintainer of this website for the therapist business.",
    projectImgPath: `${CDNLink}/bewelltherapy.png`,
    githubLink: 'https://github.com/Mardotquis/be-well-therapy',
    websiteLink: 'https://bewelltherapy.org',
  },
  {
    projectName: 'World Countries Data',
    projectDescription:
      'A project is written in React.js while utilizing Taildwind CSS and Fuse.js under the hood. It helped me practice presenting and searching large collections of data.',
    projectImgPath: `${CDNLink}/word-countries-data.png`,
    githubLink: 'https://github.com/Mardotquis/world-countries-data',
    websiteLink: 'https://incredible-belekoy-5f6927.netlify.app/',
  },
  {
    projectName: 'Guessing Game',
    projectDescription: 'Fun guessing game built using React! 🍪',
    projectImgPath: `${CDNLink}/guessinggame.png`,
    githubLink: 'https://github.com/Mardotquis/guessing_game',
    websiteLink: 'https://mardotquis.github.io/guessing_game/',
  },
  {
    projectName: 'Bot-O-Mat',
    projectDescription:
      'Originally an interview project for Red Ventures built using React.js to help practice fundametals and using state inside an app.',
    projectImgPath: `${CDNLink}/botomat.png`,
    githubLink: 'https://github.com/Mardotquis/bot-o-mat',
    websiteLink: 'https://botomat.netlify.app/',
  },
  {
    projectName: 'MyMove',
    projectDescription:
      'Road To Hire midterm project using static HTML + CSS. Built based on a Sketch file provided to practice developing based on a mockup.',
    projectImgPath: `${CDNLink}/mymove.png`,
    githubLink: 'https://github.com/Mardotquis/MyMove-Project',
    websiteLink: 'https://mardotquis.github.io/MyMove-Project/',
  },
];

const challenges = [
  {
    projectName: 'Node API',
    projectDescription:
      'Add CRUD functionality to a Node API built using Express',
    projectImgPath: '/img/nodeapicarbonlong.png',
  },
  {
    projectName: 'International Space Station API',
    projectDescription:
      'Connect to an API and use either current location or inputed latitude and longitude to find out when International Space Station will fly over your location.',
    projectImgPath: '/img/ajaxapicarbon.png',
  },
];

module.exports = {
  backgroundIcons,
  projectInformation,
  mainHeroIcons,
  challenges,
};
