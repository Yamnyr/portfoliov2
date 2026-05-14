import { InlineCode } from "@/once-ui/components";

const person = {
  firstName: "Quentin",
  lastName: "WAROQUET",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: 'Data Scientist',
  avatar: '/images/avatar.jpg',
  location: 'Europe/Paris',        // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
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
  headline: <>Data Engineer</>,
  subline: (
    <>💻 Passionné de Data Science et IA<br />
      🎓 Étudiant à <InlineCode>l'école IPSSI</InlineCode> en Mastère Big Data & IA <br />
      🚀 Toujours motivé par la conception et la mise en œuvre de projets ambitieux
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
    description: <>Je suis un Data Analyst et Data Scientist passionné, avec un solide background en développement web.
      Mon expertise couvre l’exploration, la préparation et l’analyse de données, la modélisation statistique et le machine learning,
      jusqu’au développement de systèmes intelligents pour extraire des insights et optimiser les décisions.
      <br></br>
      Actuellement en alternance à l’IPSSI en M2 Big Data & IA, je conçois des solutions data-driven en Python. Curieux et rigoureux,
      j’aime transformer des données complexes en insights utiles,
      et mettre à profit mon expérience en développement web pour créer des applications analytiques efficaces et intuitives.

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
          <>Conception d’une plateforme e-commerce multi-vendeurs (Symfony,
            React, MySQL)</>,
          <>Intégration d’un système de comparaison de produits basé sur des
            données MySQL</>,
          <>développement d'un outil de gestion de projets adapté à l'entreprise</>,
          <>Participation à la gestion d’équipe : coordination des tâches, suivi de
            l’avancement, organisation de réunions.
          </>,
          <>Mise en place et utilisation d’outils de productivité (Notion) pour
            structurer les processus internes et améliorer la communication.
          </>,
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
          <>Création de documentations complètes/ schéma / algorigramme</>,
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
        title: "Analyse de données & Statistiques",
        description: (
          <>Techniques essentielles pour explorer, préparer et analyser les données afin d’en extraire des insights fiables.</>
        ),
        tags: [
          { name: "Python", icon: "Python" },
          { name: "R", icon: "R" },
          { name: "SQL", icon: "SQL" },
          { name: "Pandas", icon: "Pandas" },
          { name: "NumPy", icon: "NumPy" },
          { name: "Data Cleaning", icon: "Data Cleaning" },
          { name: "Statistical Analysis", icon: "Statistical Analysis" }
        ]
      },
      {
        title: "Visualisation & Business Intelligence",
        description: (
          <>Compétences dédiées à la création de visualisations claires et de tableaux de bord interactifs pour faciliter la prise de décision.</>
        ),
        tags: [
          { name: "Tableau", icon: "Tableau" },
          { name: "Plotly", icon: "Plotly" },
          { name: "Matplotlib", icon: "Matplotlib" },
          { name: "Seaborn", icon: "Seaborn" },
          { name: "Dashboards interactifs", icon: "Dashboards interactifs" },
          // {name: "Data Storytelling", icon: "Data Storytelling"},
          // {name: "Reporting automatisé", icon: "Reporting automatisé"},
          { name: "Streamlit", icon: "Streamlit" }
        ]
      },
      {
        title: "Machine Learning",
        description: (
          <>Méthodes supervisées et non supervisées pour la construction, l’entraînement et l’optimisation de modèles prédictifs.</>
        ),
        tags: [
          { name: "Scikit-learn", icon: "Scikit-learn" },
          { name: "Régression linéaire / logistique", icon: "Regression" },
          { name: "Arbres de Décision", icon: "Decision Tree" },
          { name: "Random Forest", icon: "Random Forest" },
          { name: "K-Means", icon: "K-Means" },
          { name: "Feature Engineering", icon: "Feature Engineering" },
          // {name: "Feature Selection", icon: "Feature Selection" },
          // {name: "Évaluation des modèles", icon: "Évaluation des modèles"},
          // {name: "Pipelines ML", icon: "Pipelines ML"},
          // {name: "NLP (bases)", icon: "NLP"}
        ]
      },
      {
        title: "Deep Learning",
        description: (
          <>Frameworks et techniques avancées pour concevoir et entraîner des réseaux de neurones modernes.</>
        ),
        tags: [
          { name: "TensorFlow", icon: "TensorFlow" },
          { name: "PyTorch", icon: "PyTorch" },
          { name: "Modèles Convolutifs", icon: "CNN" },
          { name: "Modèles Récurrents", icon: "RNN" },
          { name: "Modèles Génératifs", icon: "Modèles Génératifs" },
          { name: "Reinforcement Learning", icon: "Reinforcement Learning" },
          // {name: "Modèles Génétiques", icon: "NEAT"},
          // {name: "Transfer Learning", icon: "Transfer Learning"}
        ]
      },
      {
        title: "Data Engineering léger",
        description: (
          <>Outils essentiels pour automatiser des flux de données, travailler avec des environnements techniques et structurer des pipelines simples.</>
        ),
        tags: [
          { name: "ETL", icon: "ETL" },
          { name: "APIs", icon: "API" },
          { name: "Docker", icon: "Docker" },
          { name: "Git", icon: "Git" },
          { name: "Jupyter Notebook", icon: "Jupyter Notebook" },
          // {name: "Google Colab", icon: "Google Colab"}
        ]
      }
    ]
  }
};

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
