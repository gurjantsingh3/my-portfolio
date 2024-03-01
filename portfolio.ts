import emoji from 'react-easy-emoji';
import {
  EducationType,
  ExperienceType,
  FeedbackType,
  ProjectType,
  SkillsSectionType,
  SkillBarsType,
  SEODataType,
  SocialLinksType,
  GreetingsType,
} from './types/sections';

export const greetings: GreetingsType = {
  name: 'Gurjant Singh',
  title: "Hello, I'm Gurjant Singh",
  description:
    "A backend developer with expertise in Node.js, Nest.js, Express.js, and Django. I specialize in architecting robust APIs that power seamless interactions. With a 2 year of experience in coding, Passionate about delivering high-quality web solutions with a strong foundation in Node.js. Committed to writing clean code, providing exceptional user experiences, and staying updated with industry trends for innovative solutions. Let's work together to shape the future with efficient APIs.",
  // resumeLink:
  // 'https://drive.google.com/file/d/1k2fUTUHaRaSZv1jbIhlfMrDThBZL-aQR/view?pli=1',
};

export const openSource = {
  githubUserName: 'gurjant1',
};

export const contact = {};

export const socialLinks: SocialLinksType = {
  // url: 'https://1hanzla100.github.io/',
  linkedin: 'https://www.linkedin.com/in/gurjant-singh-539b47198/',
  github: 'https://github.com/trgurjantsingh',
  instagram: 'https://www.instagram.com/gurichahal_315',
  gmail: 'mailto:tr.gurjant@gmail.com',
  // facebook: 'https://www.facebook.com/1hanzla100',
  // twitter: 'https://twitter.com/1hanzla100',
};

export const skillsSection: SkillsSectionType = {
  title: 'What I do',
  subTitle: 'CRAZY WEB DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK',
  data: [
    {
      title: 'Web Development',
      lottieAnimationFile: '/lottie/skills/fullstack.json', // Path of Lottie Animation JSON File
      skills: [
        emoji(
          '⚡ Building RESTful APIs in Nest.js & Express.js with MongoDB & PostgreSQL'
        ),
        emoji(
          '⚡Integrated Sentry for monitoring the server and to keep track of errors.'
        ),
        emoji('⚡ Building RESTful APIs in Django & Django REST Framework'),
      ],
      softwareSkills: [
        {
          skillName: 'HTML-5',
          iconifyTag: 'vscode-icons:file-type-html',
        },
        {
          skillName: 'CSS-3',
          iconifyTag: 'vscode-icons:file-type-css',
        },
        {
          skillName: 'JavaScript',
          iconifyTag: 'logos:javascript',
        },
        {
          skillName: 'Reactjs',
          iconifyTag: 'vscode-icons:file-type-reactjs',
        },
        {
          skillName: 'TypeScript',
          iconifyTag: 'logos:typescript',
        },
        {
          skillName: 'Python',
          iconifyTag: 'logos:python',
        },
        {
          skillName: 'Django',
          iconifyTag: 'vscode-icons:file-type-django',
        },
        {
          skillName: 'NodeJs',
          iconifyTag: 'vscode-icons:file-type-node',
        },

        {
          skillName: 'NestJs',
          iconifyTag: 'logos:nestjs',
        },
      ],
    },
    {
      title: 'Cloud Infra-Architecture',
      lottieAnimationFile: '/lottie/skills/cloudinfra.json', // Path of Lottie Animation JSON File
      skills: [
        emoji('⚡ Experience of working on multiple cloud platforms'),
        emoji(
          '⚡ Hosting and maintaining websites on virtual machine instances along with integration of databases'
        ),
        emoji(
          '⚡ Building CI/CD pipelines for automated testing & deployment using Github Actions'
        ),
      ],
      softwareSkills: [
        // ? Check README To get icon details
        {
          skillName: 'AWS',
          iconifyTag: 'logos:aws',
        },
        {
          skillName: 'GraphQL',
          iconifyTag: 'logos:graphql',
        },
        {
          skillName: 'Stripe',
          iconifyTag: 'logos:stripe',
        },
        {
          skillName: 'PostgreSQL',
          iconifyTag: 'logos:postgresql',
        },
        {
          skillName: 'Github',
          iconifyTag: 'akar-icons:github-fill',
        },
        {
          skillName: 'Docker',
          iconifyTag: 'logos:docker-icon',
        },
        {
          skillName: 'MySql',
          iconifyTag: 'logos:mysql',
        },
        {
          skillName: 'MongoDB',
          iconifyTag: 'logos:mongodb',
        },
        // {
        //   skillName: 'Nginx',
        //   iconifyTag: 'logos:nginx',
        // },
        {
          skillName: 'Sentry',
          iconifyTag: 'logos:sentry-icon',
        },
      ],
    },
    // {
    //   title: 'Blockchain',
    //   lottieAnimationFile: '/lottie/skills/ethereum.json', // Path of Lottie Animation JSON File
    //   skills: [
    //     emoji(
    //       '⚡ Experience in developing Smart Contract using Solidity & Ethereum'
    //     ),
    //     emoji(
    //       '⚡ Building Scripts for automated testing & deployment of Smart Contracts using Brownie & Infura'
    //     ),
    //     emoji(
    //       '⚡ Experience of using Openzeppelin Smart Contract Standards & Chainlink Oracles'
    //     ),
    //     emoji('⚡ Developing NFT Smart Contracts using ERC-721 Token Standard'),
    //     emoji(
    //       '⚡ Building Dapps with React.js & Solidity using Web3.js, Moralis & IPFS'
    //     ),
    //   ],
    //   softwareSkills: [
    //     {
    //       skillName: 'Ethereum',
    //       iconifyTag: 'logos:ethereum',
    //     },
    //     {
    //       skillName: 'Solidity',
    //       iconifyTag: 'logos:solidity',
    //     },
    //     {
    //       skillName: 'Web3js',
    //       iconifyTag: 'logos:web3js',
    //     },
    //     {
    //       skillName: 'Metamask',
    //       iconifyTag: 'logos:metamask-icon',
    //     },
    //     {
    //       skillName: 'Ganache',
    //       iconifyTag: 'logos:ganache-icon',
    //     },
    //   ],
    // },
  ],
};

export const SkillBars: SkillBarsType[] = [
  // {
  //   Stack: 'Frontend/Design', //Insert stack or technology you have experience in
  //   progressPercentage: '90', //Insert relative proficiency in percentage
  // },
  // {
  //   Stack: 'Backend',
  //   progressPercentage: '70',
  // },
  // {
  //   Stack: 'Programming',
  //   progressPercentage: '60',
  // },
];

export const educationInfo: EducationType[] = [
  {
    schoolName: 'Ruhelkhand University',
    subHeader: 'Pursuing BA',
    duration: 'present',
    desc: '',
    grade: '',
    descBullets: [
      // 'Lorem ipsum dolor sit amet, consectetur adipdfgiscing elit',
      // 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    ],
  },
  {
    schoolName: 'SBS Public Inter College',
    subHeader: 'Intermediate',
    duration: '2015-2018',
    desc: '',
    grade: '',
    descBullets: [
      // 'Lorem ipsum dolor sit amet, consectetur adipdfgiscing elit',
      // 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    ],
  },
];

export const experience: ExperienceType[] = [
  {
    role: 'Backend Developer',
    company: 'MPS Infotech',
    companyLogo: '/img/icons/common/mps.jpeg',
    date: 'Aug 2022 – current',
    desc: `
    As a Backend Developer at MPS Infotech since August 2022, I am immersed in a continuous learning curve, progressing from foundational knowledge to actively contributing to live projects. Proficient in Node.js (Nest.js and Express.js) and Python (Django), I specialize in database management, seamlessly handling PostgreSQL, MySQL, and MongoDB. Additionally, I leverage Docker for efficient deployment. This journey reflects my dedication to ongoing improvement and the application of versatile skills in real-world scenarios.`,
  },
  {
    role: 'Backend Intern',
    company: 'SFS Solution',
    companyLogo: '/img/icons/common/sfs.jpeg',
    date: 'Feb 2022 – July 2022',
    desc: 'I initiated my coding journey at SunFocus Solutions, where I underwent training as a Backend Developer. As a Backend Intern, I immersed myself in hands-on experiences with Node.js, a widely used JavaScript library for user interface development. Throughout my internship, I actively contributed to diverse tasks within larger projects, enabling me to not only apply my existing Node.js knowledge but also acquire new skills in the realm of backend development. This foundational experience at SunFocus Solutions marked the beginning of my coding career and laid the groundwork for my subsequent professional growth.',
    // descBullets: [
    // 	"Lorem ipsum dolor sit amet, consdfgectetur adipiscing elit",
    // 	"Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    // ],
  },
  // {
  //   role: 'Full Stack Developer',
  //   company: 'Bleed-AI',
  //   companyLogo: '/img/icons/common/bleedAI.jpg',
  //   date: 'Sept 2021 - Oct 2021',
  //   desc: 'Worked as django web developer to create a website in which I integrated computer vision AI model (built by the team of BleedAI) to process YouTube URLs and show Real Time processing on Website using Django Channels WebSockets , threading for running multiple instances of AI Model, jQuery for UI rendering and deployed it on Heroku server.',
  // },
  // {
  //   role: 'Backend Developer',
  //   company: 'Wapidu',
  //   companyLogo: '/img/icons/common/wapidu.jpg',
  //   date: 'Sept 2021',
  //   desc: 'Worked as a Django Developer to integrate Stripe payment gateway in wapidu.com and Created REST APIs using Django REST Framework to integrate Django Stripe backend to Vue.js Frontend and Deployed it on Azure based Docker container registry.',
  // },
];

export const projects: ProjectType[] = [
  {
    image: '/img/icons/common/ng.png',
    name: 'Notarize-Genie',
    desc: 'As Backend Developer for Notarize-Genie, I actively shaped the development of a cutting-edge web application facilitating Remote Online Notarization. The platform seamlessly connects signers with notaries through live audio/video technology across various devices. My role involved the integration of Dolby.io for high-quality video processing and recording, enhancing the overall user experience. Additionally, I implemented a secure and efficient monthly subscription system for plan packages, utilizing the Stripe gateway for seamless transactions.',
    // github: 'https://github.com/1hanzla100/developer-portfolio',
    link: 'https://www.notarizegenie.com/',
  },
  {
    image: '/img/icons/common/str.png',
    name: 'Backup-Manager',
    desc: 'I played a pivotal role in the development of Backup Manager, a robust web application designed to streamline billing, reporting, and reseller management. Leveraging a tech stack that includes Next.js, Django, and Django REST Framework, I actively contributed to server-side data mapping for resellers and clients. The deployment was facilitated through Docker, ensuring scalability and efficiency. Notably, I integrated Stripe for seamless monthly billing processes for resellers, adding a secure and user-friendly payment gateway. ',
    link: 'https://www.notarizegenie.com/',
  },
  {
    image: '/img/icons/common/mtb.png',
    name: 'MTB-Application',
    desc: `As the backend developer for the MTB Application (MyTrueBank), I spearheaded the implementation of Django Admin and Django Rest Framework APIs for data management. My focus involved assigning banks' data to users based on pin codes, countries, states, and company names within the Django admin panel. I established a comprehensive database structure and provided an essential service for manual data import/export. Additionally, I ensured the seamless deployment of the application using Docker. MyTrueBank showcases my proficiency in backend development, database management, and deployment strategies.`,
    link: 'https://www.notarizegenie.com/',
  },
  {
    image: '/img/icons/common/erdf.png',
    name: 'Executor-Exchange  ',
    desc: 'In my role as a backend developer, I contributed significantly to the success of the Executor Exchange project, leveraging Directus as the primary backend framework. My responsibilities included intricate backend development tasks, ensuring the seamless functioning of the platform. Notably, I spearheaded the integration of a dynamic map feature for efficient county selection, enhancing the overall user experience. This project showcases my proficiency in backend development and underscores my ability to integrate complex functionalities seamlessly.',
    link: 'https://www.notarizegenie.com/',
  },
  // {
  //   name: 'Technota (Forum)',
  //   desc: 'Get hands-on experience in technical skills with Technota',
  //   github: 'https://github.com/1hanzla100/django-react-forum',
  // },
  // {
  //   name: 'Shopaza (Ecommerce)',
  //   desc: 'Now your reach to all your favorite entertainment and luxury items is just one touch apart',
  //   github: 'https://github.com/1hanzla100/Django-ecommerce',
  // },
];

export const feedbacks: FeedbackType[] = [
  // {
  //   name: 'John Smith',
  //   feedback:
  //     'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi, vel illo. Eum magnam beatae ratione eos natus accusamus unde pariatur fugiat at facilis, modi molestiae? Labore odio sit eligendi. Tenetur.',
  // },
  // {
  //   name: 'John Smith',
  //   feedback:
  //     'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi, vel illo. Eum magnam beatae ratione eos natus accusamus unde pariatur fugiat at facilis, modi molestiae? Labore odio sit eligendi. Tenetur.',
  // },
];

// option to hide or show the ContactUs component
export const showContactUs: boolean = true;

// See object prototype on /types/section.ts page
export const seoData: SEODataType = {
  title: 'Gurjant Singh',
  description: 'A passionate Backend Developer with 1+ years of experience.',
  author: 'Gurjant Singh',
  image: '',
  url: 'https://gurjant-portfolio.vercel.app/',
  keywords: [
    'Gurjant',
    'Gurjant Singh',
    '@trgurjant',
    'trgurjant',
    'Portfolio',
    'Gurjant Portfolio ',
    'Gurjant Singh Portfolio',
  ],
};
