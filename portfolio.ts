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
  title: "Hi all, I'm Gurjant",
  description:
    "Meet Gurjant Singh, with a year immersed in coding realms, I specialize in backend brilliance. Proficient in Nest.js , Express.js & Django REST Framework, I architect robust APIs that power seamless interactions. Node.js is my playground for high-performance server-side magic, From optimizing data flow to ensuring top-notch security, I engineer solutions that align code with functionality. Let's code the future together—one efficient API at a time.",
  resumeLink:
    'https://drive.google.com/file/d/1k2fUTUHaRaSZv1jbIhlfMrDThBZL-aQR/view?pli=1',
};

export const openSource = {
  githubUserName: 'trgurjantsingh',
};

export const contact = {};

export const socialLinks: SocialLinksType = {
  // url: 'https://1hanzla100.github.io/',
  linkedin: 'https://www.linkedin.com/in/gurjant-singh-539b47198/',
  github: 'https://github.com/trgurjantsingh',
  instagram: 'https://www.instagram.com/gurichahal_315',
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
        // {
        //   skillName: 'Reactjs',
        //   iconifyTag: 'vscode-icons:file-type-reactjs',
        // },
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
        // {
        //   skillName: 'Azure',
        //   iconifyTag: 'logos:microsoft-azure',
        // },
        // {
        //   skillName: 'Heroku',
        //   iconifyTag: 'logos:heroku-icon',
        // },
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
        // {
        //   skillName: 'Cloudinary',
        //   iconifyTag: 'logos:cloudinary',
        // },
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
    desc: 'I worked as API Engineer on a Kale App. Kale is a community platform for the creation of social reviews based on verified transactions. I built Fully Optimized and High Performance RESTful APIs using Django, DjangoRESTFramework, PostgresSQL, JWT Authentication, AWS, Integrated Plaid APIs for Fetching Bank Transactions, Integrated Sentry for monitoring Django Server and deployed the API on Heroku Server.',
  },
  {
    role: 'Backend Intern',
    company: 'SFS Solution',
    companyLogo: '/img/icons/common/sfs.jpeg',
    date: 'Feb 2022 – July 2022',
    desc: 'I worked as a Backend Intern where I had the opportunity to gain hands-on experience with Nodejs, a popular JavaScript library for building user interfaces. During my internship, I worked on various tasks as part of a larger project. This allowed me to apply my knowledge of Nodejs and learn new skills related to back-end development.',
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
    desc: 'Web application that enables Remote Online Notarization connects signers to notaries via LIVE audio/video technology on a computer, tablet or mobile device.',
    // github: 'https://github.com/1hanzla100/developer-portfolio',
    link: 'https://www.notarizegenie.com/',
  },
  {
    image: '/img/icons/common/str.png',
    name: 'Backup-Manager',
    desc: 'A web application that manage billing, reports, and reseller. It build with Next.js, Django & Django REST Framework. Mapping resellers & clients  data on server side .',
    link: 'https://www.notarizegenie.com/',
  },
  {
    image: '/img/icons/common/mtb.png',
    name: 'MTB-Application',
    desc: 'A web application that manage billing, reports, and reseller. It build with Next.js, Django & Django REST Framework. Mapping resellers & clients  data on server side .',
    link: 'https://www.notarizegenie.com/',
  },
  {
    image: '/img/icons/common/exc.jpeg',
    name: 'Executer-Exchange  ',
    desc: 'A web application that manage billing, reports, and reseller. It build with Next.js, Django & Django REST Framework. Mapping resellers & clients  data on server side .',
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
