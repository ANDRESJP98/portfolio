import pokemon from './assets/pokemon.png'
import tessa from './assets/tessa.png'
import tessa2 from './assets/tessa 2.png'
import tessa3 from './assets/tessa 3.png'
import portfolio from './assets/portfolio.png'
import portfolio2 from './assets/portfolio 2.png'
import portfolio3 from './assets/portfolio 3.png'

const projectsData = [
    {
      id: "teesa",
      imgSrc: tessa,
      images:[tessa, tessa2, tessa3],
      title: "Teesa S.A.S.",
      description: "Responsive E-commerce website created for Teesa S.A.S., a company dedicated to the commercialization of food equipment",
      Logros:"",
      githubLink: "https://github.com/LauraCayuelaT/PFTeesa_Front",
      websiteLink: "https://pf-teesa-front.vercel.app/home",
      logros:'This app was developed by a team of 7 full-stack developers, where I actively participated in the back-end team. My responsibilities involved creating various models and routes to efficiently handle items and user data, as well as implementing cart functionalities for users using optimized search algorithms in Node.js, Sequelize, and PostgreSQL. Additionally, I contributed to the integration of the payment method and developed different middlewares to safeguard routes from unauthorized access. In the front-end team, I focused on enhancing the cart experience using React, Tailwind CSS, HTML, and JavaScript. Through this project, the company was able to explore new avenues for selling their products, leading to increased revenue and brand improvement.',
    },
    {
      id: "portfolio",
      imgSrc: portfolio,
      images:[portfolio, portfolio2, portfolio3],
      title: "Portfolio",
      description: "Online portfolio responsive to showcase my frontend and backend web development projects. You're here! Thank you for visiting.",
      githubLink: "https://github.com/ANDRESJP98/portfolio",
      websiteLink: "https://portfolio-andresjp98.vercel.app/#aboutme",
      logros:'This app was developed by me using React, Tailwind CSS, and HTML for the front-end, while Node.js, Sequelize, and PostgreSQL were utilized for the back-end. The main objective of the back-end was to store the emails of individuals interested in my services. On the front-end, I incorporated a navigation system and React components to facilitate seamless transitions between sections. Users can explore different information about me, such as my skills, projects, curriculum, certificates, and contact details. The app showcases my abilities as a developer and offers a comprehensive overview of my professional profile.'
    },
    {
      id: "pokemon",
      imgSrc: pokemon,
      images:[pokemon],
      title: "Pokemon",
      description: "My first Website as a full stack developer, using front-end and back-end skills to create, search, filter the pokemon's details",
      githubLink: "https://github.com/ANDRESJP98/pokemon-front",
      websiteLink: "https://pokemon-front-6si4.vercel.app/",
      logros:'During the development of my first app, I had the opportunity to enhance my expertise in various technologies, including React, CSS, HTML, Node.js, Sequelize, and PostgreSQL. The knowledge and skills I acquired from the Soy Henry bootcamp were invaluable as I implemented fundamental functionalities like item creation, search, and filtering. Moreover, I successfully utilized Axios to fetch data from a REST API and learned how to deploy projects effectively. Additionally, I explored methods to store and manage diverse information, expanding my capabilities as a developer. This experience has played a crucial role in strengthening my proficiency in web development and has provided me with a solid foundation to tackle more ambitious projects in the future'
    },
  ];
  export default projectsData