import { InlineCode } from "@/once-ui/components";

const person = {
  firstName: "Quentin",
  lastName: "WAROQUET",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role:      'Developer web',
  avatar:    '/images/avatar.jpg',
  location:  'Europe/Paris',        // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ['Français', 'English']  // optional: Leave the array empty if you don't want to display languages
};

const newsletter = {
  display: false,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: (
    <>
      I occasionally write about design, technology, and share thoughts on the intersection of
      creativity and engineering.
    </>
  ),
};

const social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  {
    name: 'GitHub',
    icon: 'github',
    link: 'https://github.com/Yamnyr/',
  },
  {
    name: 'LinkedIn',
    icon: 'linkedin',
    link: 'https://www.linkedin.com/in/quentin-waroquet-017008203/',
  },
  {
    name: 'X',
    icon: 'x',
    link: '',
  },
  {
    name: 'Email',
    icon: 'email',
    link: 'mailto:q.waroquet@gmail.com',
  },
]

const home = {
  label: "Accueil",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio Quentin WAROQUET ${person.role}`,
  headline: <>Developpeur web</>,
  subline: (
      <>💻 Passionné de développement web <br/>
        🎓 Étudiant à <InlineCode>l'école IPSSI</InlineCode> en Mastère Big Data & IA <br/>
        Développeur, aspirant CEO chez <InlineCode>Hurlea</InlineCode> (un jour... peut-être 😄)
      </>
  ),
};

const about = {
  label: 'A propos de moi',
  title: 'A propos de moi',
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: true
  },
  avatar: {
    display: true
  },
  calendar: {
    display: false,
    link: 'https://cal.com'
  },
  intro: {
    display: true,
    title: 'Introduction',
    description: <>Je suis un développeur web passionné par la création d'applications web innovantes et performantes.
      Mon expertise s'étend du développement front-end au back-end, en passant par l'optimisation des performances et l'expérience utilisateur,
      toujours avec le souci du détail que j'ai développé à travers mes formations et mes expériences professionnels.
      Actuellement en alternance à l'école IPSSI en M1 développeur IA & Bigdata

    </>
  },
  work: {
    display: true, // set to false to hide this section
    title: 'Experience pro',
    experiences: [
      {
        company: 'DFB',
        timeframe: '2023 - Present',
        role: 'Developpeur web',
        achievements: [
          <>Création d'une plateforme e-commerce multi-vendeurs, incluant un système de comparaison de produits, sous Symfony.</>,
          <>développement de site sur mesure</>,
          <>Réalisation et maintenance de sites Wordpress</>,
          <>développement d'un outil de gestion de projets adaptés a l'entreprise</>,
        ],
        images: [
          {
            src: '/images/experiences/dfb.png',
            alt: 'DFB',
            width: 4,
            height: 4
          }
        ]
      },
      {
        company: 'Netcreative',
        timeframe: '2023',
        role: 'Developpeur web',
        achievements: [
          <>Confection / refonte de sites internet sous Wordpress</>,
          <>Création, modification de scripts en PHP / JS</>,
          <>réalisation de plugins Wordpress</>,
        ],
        images: [
          {
            src: '/images/experiences/netcreative.png',
            alt: 'Netcreative',
            width: 4,
            height: 4
          }
        ]
      },
      {
        company: 'Anetsys',
        timeframe: '2022',
        role: 'Developpeur web',
        achievements: [
          <>Développement de scripts php pour une interface rest api</>,
          <>Création de documentations complètes/ schéma / algorigramme afin de présenter le projet réalisé durant ce stage</>,
          <>Développement sous wordpress</>,
        ],
        images: [
          {
            src: '/images/experiences/anetsys.png',
            alt: 'Anetsys',
            width: 4,
            height: 4
          }
        ]
      }
    ]
  },
  studies: {
    display: true,
    title: 'Formations',
    institutions: [
      {
        name: 'Mastère Dev bigdata & IA',
        description: <>IPSSI</>,
        images: [
          {
            src: '/images/studies/ipssi.png',
            alt: 'IPSSI Logo',
            width: 4,
            height: 4
          }
        ]
      },
      {
        name: 'Bachelor Dév fullstack & DevOps',
        description: <>IPSSI</>,
        images: [
          {
            src: '/images/studies/ipssi.png',
            alt: 'IPSSI Logo',
            width: 4,
            height: 4
          }
        ]
      },
      {
        name: 'Licence pro WIMSI',
        description: <>IUT de Reims</>,
        images: [
          {
            src: '/images/studies/iut.png',
            alt: 'iut Logo',
            width: 4,
            height: 4
          }
        ]
      },
      {
        name: 'BTS SIO option SLAM',
        description: <>Lycée Franklin Roosevelt</>,
        images: [
          {
            src: '/images/studies/franklin-roosevelt.jpg',
            alt: 'Franklin Roosevelt Logo',
            width: 4,
            height: 4
          }
        ]
      }
    ]
  },
  technical: {
    display: true,
    title: 'Compétences',

    skills: [
      {
        title: 'Langages de développement',
        description: <>HTML, CSS, JavaScript, PHP, Python, SQL</>,
        images: [
          {
            src: '/images/competences/html.png',
            alt: 'html',
            width: 4,
            height: 4
          },
          {
            src: '/images/competences/css.png',
            alt: 'css',
            width: 4,
            height: 4
          },
          {
            src: '/images/competences/js.png',
            alt: 'js',
            width: 4,
            height: 4
          },
          {
            src: '/images/competences/typescript.png',
            alt: 'typescript',
            width: 4,
            height: 4
          },
          {
            src: '/images/competences/php.png',
            alt: 'php',
            width: 4,
            height: 4
          },
          {
            src: '/images/competences/python.png',
            alt: 'python',
            width: 4,
            height: 4
          },
          {
            src: '/images/competences/sql.png',
            alt: 'sql',
            width: 4,
            height: 4
          }
        ]
      },
      {
        title: 'Git',
        description: <>Contrôle de version et développement collaboratif avec Git et GitHub.</>,
        images: [
          {
            src: '/images/competences/git.png',
            alt: 'git',
            width: 4,
            height: 4
          },
          {
            src: '/images/competences/gitlab.png',
            alt: 'gitlab',
            width: 4,
            height: 4
          },
          {
            src: '/images/competences/github.png',
            alt: 'github',
            width: 4,
            height: 4
          }
        ]
      },
      {
        title: 'MySQL/PostgreSQL',
        description: <>Gestion de bases de données relationnelles avec requêtes avancées et optimisation.</>,
        images: [
          {
            src: '/images/competences/postgresql.png',
            alt: 'postgresql',
            width: 4,
            height: 4
          },
          {
            src: '/images/competences/mysql.png',
            alt: 'mysql',
            width: 4,
            height: 4
          },
          {
            src: '/images/competences/mongodb.png',
            alt: 'MongoDB',
            width: 4,
            height: 4
          }
        ]
      },
      {
        title: 'Symfony',
        description: <>Création d'applications PHP robustes avec le Framework Symfony et Doctrine ORM.</>,
        images: [
          {
            src: '/images/competences/symfony.png',
            alt: 'Symfony',
            width: 4,
            height: 4
          }
        ]
      },
      {
        title: 'React / react native',
        description: <>Création d'interfaces utilisateur dynamiques et réactives avec l'écosystème React.<br/>
          Développement d'applications mobiles multiplateformes pour iOS et Android.</>,
        images: [
          {
            src: '/images/competences/react.png',
            alt: 'react',
            width: 4,
            height: 4
          }
        ]
      },
      // {
      //     title: 'React Native',
      //     description: <>Développement d'applications mobiles multiplateformes pour iOS et Android.</>,
      //     images: [
      //         {
      //             src: '/images/competences/react.png',
      //             alt: 'react-native',
      //             width: 4,
      //             height: 4
      //         }
      //     ]
      // },
      {
        title: 'Vue.js',
        description: <>Développement d'interfaces utilisateur progressives et modulaires avec Vue.js.</>,
        images: [
          {
            src: '/images/competences/vue.png',
            alt: 'vue',
            width: 4,
            height: 4
          }
        ]
      },
      {
        title: 'Angular',
        description: <>Développement d'applications web robustes avec le framework Angular de Google.</>,
        images: [
          {
            src: '/images/competences/angular.png',
            alt: 'angular',
            width: 4,
            height: 4
          }
        ]
      },
      {
        title: 'Flutter',
        description: <>Développement d'applications multiplateformes performantes avec le SDK Flutter de Google.</>,
        images: [
          {
            src: '/images/competences/flutter.png',
            alt: 'flutter',
            width: 4,
            height: 4
          }
        ]
      },
      {
        title: 'Node.js',
        description: <>Création d'applications serveur scalables et haute performance avec Node.js.</>,
        images: [
          {
            src: '/images/competences/node-js.png',
            alt: 'node-js',
            width: 4,
            height: 4
          }
        ]
      },
      {
        title: 'ExpressJS',
        description: <>Construction d'APIs backend évolutives et d'applications web avec Node.js.</>,
        images: [
          {
            src: '/images/competences/express.png',
            alt: 'Symfony',
            width: 4,
            height: 4
          }
        ]
      },
      {
        title: 'Docker',
        description: <>Conteneurisation d'applications pour des déploiements rapides et efficaces avec Docker.</>,
        images: [
          {
            src: '/images/competences/docker.png',
            alt: 'Docker',
            width: 4,
            height: 4
          }
        ]
      },
      {
        title: 'Figma',
        description: <>Création et gestion de conteneurs pour simplifier le déploiement des applications.</>,
        images: [
          {
            src: '/images/competences/figma.png',
            alt: 'figma',
            width: 4,
            height: 4
          }
        ]
      },
      {
        title: 'Streamlit',
        description: <>Développement rapide d’applications web interactives pour la data science.</>,
        images: [
          {
            src: '/images/competences/streamlit.png',
            alt: 'Streamlit',
            width: 4,
            height: 4
          }
        ]
      },
    ]
  }
}


const blog = {
  label: "Blog",
  title: "Writing about design and tech...",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work = {
  label: 'Projets',
  title: 'My projects',
  description: `Design and dev projects by ${person.name}`
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
}


const gallery = {
  label: "Gallery",
  title: "My photo gallery",
  description: `A photo collection by ${person.name}`,
  // Images from https://pexels.com
  images: [
    {
      src: "/images/gallery/img-01.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-02.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-03.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-04.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-05.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-06.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-07.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-08.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-09.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-10.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-11.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-12.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-13.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-14.jpg",
      alt: "image",
      orientation: "horizontal",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
