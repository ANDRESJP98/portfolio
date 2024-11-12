import EnelXCol from './assets/Enel X Colombia.png'
import Simulator from './assets/Simulator.png'
import Overview from './assets/Overview.png'
import Comsuptions from './assets/Comsuptions.png'
import HistoricalBills from './assets/HistoricalBills.png'
import EnelXBra from './assets/Enel X Brasil.png'
import Chatbot from './assets/Enel X Chatbot.png'
import Payment from './assets/Payment.png'
import API from './assets/API.png'
import Users from './assets/Users.png'
import Data from './assets/Data.png'
import Solicitud from './assets/Solicitud.png'
import Admin from './assets/Admin.png'
import Automatizaciontarifas from './assets/Automatizacion tarifas.png'
import pythonWeb from './assets/pythonWeb.png'
import NPS from "./assets/NPS.png"
import pageViews from './assets/pageViews.png'
import Efficiency from './assets/efficiency.png'

const projectsData = [
  {
    id: "Enel X Colombia",
    imgSrc: [EnelXCol,Simulator,Overview,Comsuptions, HistoricalBills, Payment, Users, API, Data, Solicitud, Admin, pythonWeb, pythonWeb,pythonWeb, pageViews,  pageViews, NPS],
    title: "Enel X Colombia",
    overview: "Enel X Colombia, a leader in digital energy commercialization for B2B clients, revolutionizes energy management with a state-of-the-art platform. We offer competitive rates and real-time consumption data, empowering large companies to make smarter, data-driven energy decisions.",
    texts: [
      {
        feature: 'Context of the Company',
        description: "As a key player in Colombia's B2B energy sector, Enel X Colombia leverages technology to commercialize energy efficiently. Our platform is designed to empower clients by offering dynamic data insights into their energy usage, enabling significant cost savings and energy management optimization.",
      },
      {
        feature: 'Simulator for Competitor Rate Comparison',
        description: "The public zone includes a simulator that analyzes competitors' rates, allowing potential clients to determine their monthly savings based on their bill and location, which drives client acquisition.",
      },
      {
        feature: 'Consumption Overview',
        description: "In the private zone, clients can access a summary of their energy consumption, including how much they're saving with Enel X, and view details like high-consumption accounts and peak usage hours.",
      },
      {
        feature: 'Detailed Consumption Tracking',
        description: "Clients can monitor their hourly, daily, and monthly energy usage through dynamic charts, helping them optimize consumption patterns across different energy types.",
      },
      {
        feature: 'Historical Bills Management',
        description: "Users can view all past bills, including payment dates, amounts, methods, and banks used, allowing for easy tracking of financial transactions across accounts.",
      },
      {
        feature: 'Payment Module',
        description: "A module is available for clients to pay current bills directly through the platform, simplifying the payment process and improving user convenience.",
      },
      {
        feature: 'User and Access Management',
        description: "Clients can create multiple users within the platform and assign specific permissions, enhancing security and ensuring that roles are clearly defined.",
      },
      {
        feature: 'API Integration',
        description: "The platform allows for API access, enabling clients to automatically receive real-time consumption and billing data to integrate into their internal systems for more accurate financial planning.",
      },
      {
        feature: 'Data Analysis Module',
        description: "A module dedicated to in-depth data analysis helps clients understand the reasons behind their energy consumption patterns and make decisions to reduce costs.",
      },
      {
        feature: 'PQRS and Savings Analysis',
        description: "Clients can submit inquiries, requests, and complaints (PQRS), while a savings module compares their current costs to competitors, further emphasizing the platform's cost-effectiveness.",
      },
      {
        feature: 'Admin Dasboard',
        description: "Admins can oversee transaction history, user management, NPS scores, and analyze client behaviors, helping improve the company's services and user satisfaction.",
      },
      {feature: 'Tech Stack Overview',
        description: "The Enel X Colombia platform was developed using a robust tech stack that includes React for the front end and Python for the back end, facilitating efficient management of real-time consumption data and energy simulations. This combination enhances user experience and service delivery.",
      },
      {feature: 'Tech Stack Overview',
        description: "Our infrastructure is built on AWS, utilizing services such as Lambda for serverless computing and S3 for scalable storage solutions. The implementation of Adobe Experience Manager (AEM) further allows us to manage and optimize digital content effectively, providing seamless integration with our services.",
      },
      {feature: 'Tech Stack Overview',
        description: "The project team consisted of a diverse group of specialists, including one Senior Front-End Developer, one Senior Back-End Developer, one DevOps Engineer, one Infrastructure Engineer (AWS expert), one UX/UI Designer, one AEM Developer, and myself as the Product Manager. This collaborative effort resulted in a scalable architecture that has drawn interest from other Enel countries seeking to replicate our success across Latin America.",
      },
      {feature: 'Outcomes',
        description: "The Enel X Colombia platform achieved significant growth in key business metrics, with website views per semester rising dramatically from 46,000 to 141,000. This increase demonstrates the effectiveness of our digital marketing strategies and user engagement initiatives, successfully attracting a wider audience.",
      },
      {feature: 'Outcomes',
        description: "Customer support incidents were reduced from 40 to fewer than 5, showcasing our commitment to service excellence and reliability. This reduction in incidents reflects the platform's stability and performance, enhancing our reputation in the market.",
      },
      {feature: 'Outcomes',
        description: "Client satisfaction reached a remarkable score of 9 out of 10, as measured by our NPS module. This indicates that technological improvements in our offerings were a top priority for our clients. Furthermore, our innovative energy simulator became a key differentiator, empowering clients to analyze competitor rates and project potential savings, thereby attracting new contracts and driving revenue growth throughout Latin America.",
      },
    ],
    
  },
    {
      id: "AI Chatbot",
      imgSrc: [Chatbot, Chatbot, Chatbot, Chatbot, pythonWeb, Efficiency],
      title: "AI Chatbot",
      overview: "The AI project focused on enhancing customer engagement for Enel X by developing a Natural Language Processing (NLP) chatbot. This innovative solution streamlines interactions, allows customers to receive personalized offers based on their consumption and provides immediate support.",
      texts: [
        {
          feature: 'Context and Need',
          description: "Enel X recognized the growing demand for instant communication channels among its customer base. With an increasing number of inquiries and a diverse range of client needs, there was a critical need for a solution that could efficiently handle customer interactions, answer questions, and provide information quickly. The chatbot addresses this need by offering three distinct paths for users, allowing them to find information relevant to their specific circumstances.",
        },
        {
          feature: 'Chatbot Path. I am a client',
          description: "AThis path serves existing customers by providing tailored assistance. Users can inquire about their accounts, current services, comsuptions and billing information, facilitating quicker resolutions to common issues without needing to speak to a representative.",
        },
        {
          feature: 'Chatbot Path. I want to be a client',
          description: "Potential customers can navigate this path to learn about Enel X's offerings. The chatbot guides them through the process of becoming a client, answering questions about services, pricing and making a formal document with the final offer.",
        },
        {
          feature: 'Chatbot Path. I want to know general information about the energy sector',
          description: "This option allows users to access general information about the energy sector. The chatbot can provide insights into market trends, energy efficiency tips, and regulations, thereby positioning Enel X as a knowledgeable leader in the industry.",
        }, 
        {
          feature: 'Tech Stack Overview',
          description: "The AI project focused on enhancing customer engagement for Enel X by developing a Natural Language Processing (NLP) chatbot. This innovative solution streamlines interactions, enables customers to receive new offers instantly, and provides immediate support. Built on Dialogflow, Vertex AI, and Gen AI for document handling, the project utilizes Python and leverages an AWS database to ensure robust data management and processing capabilities.",
        },
        {
          feature: 'Outcomes',
          description: "The implementation of the AI-driven chatbot has greatly enhanced customer engagement and operational efficiency at Enel X. Utilizing insights from Voice of the Customer interviews, we increased customer satisfaction by 30% through tailored energy solutions and chatbot improvements. Launched as Colombia’s first AI-driven chatbot with Dialogflow CX and Vertex AI, this initiative boosted lead generation by 20% while ensuring rapid response times for customer inquiries.",
        }
        
      ],
    },
    
    {
      id: "RateBot",
      imgSrc: [Automatizaciontarifas, pythonWeb, Efficiency],
      title: "RateBot",
      overview: "The RateBot is an automation tool I developed for Enel X Colombia to streamline the collection and analysis of competitor energy rates. By scraping data from around 18 competitors, this tool enhances our competitive intelligence, enabling informed pricing strategies based on market dynamics.",
      texts: [
        {feature: 'Functionality',
          description: "The RateBot automates the collection of approximately 5,600 individual data points related to competitor rates, providing structured information in Excel format for analysis in Power BI. This functionality allows our team to visualize trends and insights in the energy market, facilitating quicker and more strategic responses to pricing changes.",
        },
        {feature: 'Tech Stack Overview:',
          description: "Developed by me, the RateBot employs a tech stack that includes Python libraries such as Selenium for web scraping, Pandas for data manipulation, and Beautiful Soup for HTML parsing. This combination of tools ensures efficient extraction and organization of data from various competitor websites.",
        },
        {feature: 'Outcomes',
          description: "The implementation of the RateBot has drastically reduced the time spent by business analysts on manually collecting competitor rates, saving them valuable hours each week. This efficiency leads to faster decision-making and enhances our agility in adapting to market changes, ultimately strengthening our competitive position in the energy sector.",
        },
      ],
      
    },
    {
      id: "Enel Brasil",
      imgSrc: [EnelXBra, Automatizaciontarifas, Automatizaciontarifas],
      title: "Enel Brasil",
      overview: "Responsive E-commerce website created for Teesa S.A.S., a company dedicated to the commercialization of food equipment",
      texts: [
        {
          feature: 'Feature 1: User Login',
          description: 'Allows users to securely log in to the app using email and password.',
        },
        {
          feature: 'Feature 2: Dashboard',
          description: 'Displays key metrics and analytics in a user-friendly interface.',
        },
        {
          feature: 'Feature 3: AI Assistant',
          description: 'Uses AI to assist users in navigating the app and answering questions.',
        },
      ],
      outcomes:'This app was developed by a team of 7 full-stack developers, where I actively participated in the back-end team. My responsibilities involved creating various models and routes to efficiently handle items and user data, as well as implementing cart functionalities for users using optimized search algorithms in Node.js, Sequelize, and PostgreSQL. Additionally, I contributed to the integration of the payment method and developed different middlewares to safeguard routes from unauthorized access. In the front-end team, I focused on enhancing the cart experience using React, Tailwind CSS, HTML, and JavaScript. Through this project, the company was able to explore new avenues for selling their products, leading to increased revenue and brand improvement.',
    }
  ];
  export default projectsData