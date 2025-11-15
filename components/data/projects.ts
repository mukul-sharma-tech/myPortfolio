export type Project = {
  id: number;
  title: string;
  description: string;
  longDescription: string;
  technologies: string[];
  category: 'AI' | 'Web' | 'Mobile' | string;
  complexity: 'High' | 'Medium' | 'Low';
  liveUrl: string;
  githubUrl: string;
  featured: boolean;
  status: 'Completed' | 'In Development' | 'Planning';
  priority: number;
  image: string;
};

const projects: Project[] = [
  {
    id: 1,
    title: 'AI-Hire',
    description: 'Smart 3D Interview Platform',
    longDescription: 'Handled an ambiguous, broadly defined problem by conceiving, designing, and building an innovative AI-powered platform from scratch.\nIntegrated Generative AI for ATS checker, job preparation tools and subscriptions; received positive user feedback.',
    technologies: ['Next.js', 'TypeScript', 'AI/ML', 'AR/VR'],    
    category: 'AI',
    complexity: 'High',
    liveUrl: 'https://ai-hire-platform.vercel.app/',
    githubUrl: 'https://github.com/mukul-sharma-tech/AI-Hire',
    featured: true,
    status: 'In Development',
    priority: 1,
    image: '/images/aihire.png'
  },
  {
    id: 2,
    title: 'EduniteX',
    description: 'AI-powered educational platform with personalized learning, 3D avatar teacher, voice interaction, and real-time student emotion tracking.',
    longDescription: 'EduniteX transforms classroom learning with AI technology. Features speech recognition, facial emotion analysis, personalized quiz generation, 3D avatar interactions, and comprehensive student performance analytics.',
    technologies: ['Python', 'TensorFlow', 'OpenCV', 'React', 'NLP', 'Computer Vision', 'Speech Recognition'],
    category: 'AI',
    complexity: 'High',
    liveUrl: 'https://edunite-x.vercel.app/',
    githubUrl: 'https://github.com/mukul-sharma-tech/EduniteX',
    featured: true,
    status: 'Completed',
    priority: 2,
    image: '/images/eduassist.png'
  },
  {
    id: 3,
    title: 'Sanskritam',
    description: 'Programming Language & Web-Based IDE',
    longDescription: 'Designed the core compiler, parser, and rules for a complete Sanskrit-based programming language.\nDeveloped a responsive React IDE with an integrated GenAI assistant to translate natural language problems into executable code.',
    technologies: ['React', 'TypeScript', 'Python', 'C++', 'Compiler Design'],
    category: 'Core CS',
    complexity: 'High',
    liveUrl: 'https://sanskritam.vercel.app/', // Add your Live Demo URL
    githubUrl: 'https://github.com/mukul-sharma-tech/Sanskritam', // Add your GitHub URL
    featured: true,
    status: 'Completed',
    priority: 3,
    image: 'https://plus.unsplash.com/premium_photo-1678197251586-6f54bae38803?q=80&w=1147&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' // Update with your image path
  },
  {
    id: 4,
    title: 'Chakra',
    description: 'A Novel Data Structure',
    longDescription: 'Built Chakra, an orbit-based data structure for dynamic sorting and efficient data operations.\nInspired by atomic orbits and the Sudarshan Chakra for a balanced, scalable design.',
    technologies: ['C++'],
    category: 'Core CS',
    complexity: 'Medium',
    liveUrl: 'https://docs.google.com/document/d/176ZmPq2s5GWSt0NOulHgQHkVoSssR-BR54sWMfB6apI/edit?tab=t.0', // Add your Docs URL
    githubUrl: 'https://github.com/mukul-sharma-tech/Chakra', // Add your GitHub URL
    featured: false,
    status: 'Completed',
    priority: 4,
    image: 'https://i.pinimg.com/1200x/da/8a/c2/da8ac29a4c11bf076a251b46a8cdb0bc.jpg' // Update with your image path
  },
  {
    id: 5,
    title: 'CircularChain',
    description: 'Blockchain Marketplace for Industrial Byproducts',
    longDescription: 'Blockchain-powered marketplace where smart contracts ensure trust, payments, and sustainability in trading industrial byproducts.',
    technologies: ['Blockchain', 'Next.js', 'Solidity', 'SepoliaETH'],
    category: 'Web3',
    complexity: 'Medium',
    liveUrl: '#', // Add your Live Demo URL
    githubUrl: '#', // Add your GitHub URL
    featured: false,
    status: 'Completed',
    priority: 5,
    image: 'https://i.pinimg.com/736x/d1/31/fd/d131fde9be28706341d11597d746df2a.jpg' // Update with your image path
  },

  {
    id: 6,
    title: 'Switch: Gender-Safe Social Platform',
    description: 'Revolutionary social media platform with gender-safe spaces, interest-based feeds, and AI-powered content moderation.',
    longDescription: 'Switch creates a safer social media experience with dedicated spaces for different genders, AI-based content filtering, interest-driven feeds, mental health support, and anti-addiction features.',
    technologies: ['React', 'Next.js', 'MongoDB', 'Socket.io', 'AI Moderation', 'Real-time Chat'],
    category: 'Web',
    complexity: 'High',
    liveUrl: 'https://the-switch-app.vercel.app/',
    githubUrl: 'https://github.com/mukul-sharma-tech/The_Switch',
    featured: false,
    status: 'In Development',
    priority: 6,
    image: '/images/switch.png'
  },
  {
    id: 7,
    title: 'LegalMate',
    description: 'AI-Powered Legal Document Analyzer',
    longDescription: 'Designed a secure, AI-powered platform to democratize legal understanding by translating "legalese" into simple, actionable information.\nImplements a "Plain English" summary generator, a key clause highlighter for risks/obligations, and an interactive Q&A chat.\nEmpowers individuals, tenants, and freelancers to analyze complex legal documents.',
    technologies: ['AI/ML', 'Next.js', 'TypeScript'],
    category: 'AI',
    complexity: 'Medium',
    liveUrl: 'https://legal-mate-ai.vercel.app/', // Add your Live Demo URL
    githubUrl: 'https://github.com/mukul-sharma-tech/LegalMate', // Add your GitHub URL
    featured: false,
    status: 'Completed',
    priority: 7,
    image: 'https://i.pinimg.com/1200x/a7/5b/cc/a75bcc88195339696dbb2808f28371d9.jpg' // Update with your image path
  },
  {
    id: 8, // New ID
    title: 'Digital Lessons Generator',
    description: 'AI-powered platform for real-time lesson creation',
    longDescription: 'Engineered a dynamic content platform using Generative AI to create interactive lesson components (e.g., quizzes, code blocks) in real-time.\nIntegrated a react-live sandbox to compile and validate generated TypeScript and React code, ensuring all dynamic UI is error-free before rendering.\nThis project demonstrates building scalable, intuitive user interfaces by combining AI-generated content with a secure, sandboxed frontend environment.',
    technologies: ['Generative AI', 'React', 'TypeScript', 'react-live'],
    category: 'AI',
    complexity: 'High',
    liveUrl: 'https://digital-lessons-generator.vercel.app/', // Add your Live Demo URL
    githubUrl: 'https://github.com/mukul-sharma-tech/Digital-Lessons-Generator', // Add your GitHub URL
    featured: false,
    status: 'Completed',
    priority: 8,
    image: 'https://i.pinimg.com/1200x/f4/cf/89/f4cf89aeb8463ad2f99c131cf18c2a2d.jpg' // Update with your image path
  },
  {
    id: 9,
    title: 'HandPilot: Gesture Controller',
    description: 'Computer vision-based hand gesture recognition system for contactless cursor control using machine learning.',
    longDescription: 'HandPilot enables hands-free computer interaction through advanced computer vision and machine learning algorithms for precise gesture recognition and cursor control.',
    technologies: ['Python', 'OpenCV', 'MediaPipe', 'Machine Learning', 'Computer Vision'],
    category: 'AI',
    complexity: 'Medium',
    liveUrl: '#',
    githubUrl: 'https://github.com/mukul-sharma-tech/HandPilot',
    featured: false,
    status: 'Completed',
    priority: 9,
    // image: '/images/handpilot.png'
    image: 'https://plus.unsplash.com/premium_photo-1711664260521-8abe21e1eace?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
  {
    id: 10,
    title: 'AstroGuard',
    description: 'Asteroid Impact Simulation & Visualization Tool',
    longDescription: 'Developed an interactive platform integrating NASA and USGS datasets to model near-Earth asteroid impact scenarios.\nBuilt features for simulating impact consequences, visualizing affected regions, and evaluating mitigation strategies.\nRendered interactive 3D asteroid trajectories using Three.js.',
    technologies: ['Next.js', 'TypeScript', 'Three.js', 'NASA APIs', 'USGS APIs'],
    category: 'Web',
    complexity: 'High',
    liveUrl: 'https://astro-guard-meteor.vercel.app/',
    githubUrl: 'https://github.com/mukul-sharma-tech/AstroGuard_Meteor', // Add your GitHub URL
    featured: false,
    status: 'Completed',
    priority: 10,
    image: 'https://i.pinimg.com/736x/97/d2/08/97d208b707b1991536595d40efa56bfe.jpg' // Update with your image path
  },
    {
    id: 11,
    title: 'Astro-Cadet Academy',
    description: '100% Offline-First Educational Game',
    longDescription: 'Built a 100% offline-first educational game (using a Service Worker) to teach space science without an internet connection.\nDeveloped a dual-game system: "Astro-Sort" (logic puzzle) and "Cosmic Burst" (reflex game).\nEngineered from scratch with zero dependencies, using localStorage for high scores.',
    technologies: ['Vanilla JavaScript', 'Service Worker', 'HTML5', 'CSS3', 'JSON'],
    category: 'Web',
    complexity: 'Medium',
    liveUrl: 'https://astro-cadet-academy.vercel.app/', // Add your Live Demo URL
    githubUrl: 'https://github.com/mukul-sharma-tech/astro-cadet-academy', // Add your GitHub URL
    featured: false,
    status: 'Completed',
    priority: 11,
    image: 'https://i.pinimg.com/736x/0a/fd/74/0afd74d5ed31747ba3cd827353b600e3.jpg' // Update with your image path
  },
  {
    id: 12,
    title: 'Bhagavad Geeta AI Chatbot',
    description: 'NLP-powered chatbot providing spiritual guidance and answering questions based on Bhagavad Geeta teachings.',
    longDescription: 'An intelligent chatbot that uses natural language processing to understand user queries and provide relevant spiritual guidance from the Bhagavad Geeta scriptures.',
    technologies: ['Python', 'NLP', 'Streamlit', 'Machine Learning', 'Text Processing'],
    category: 'AI',
    complexity: 'Medium',
    liveUrl: 'https://p4-implementation-of-chatbot-by-nlp-bhagwatgeetachatbot.streamlit.app/',
    githubUrl: '#',
    featured: false,
    status: 'Completed',
    priority: 12,
    // image: '/images/geetabot.png',
    image: 'https://shubhmandir.com/wp-content/uploads/2020/03/chapter-1-bhagwat-gita.jpg'
  },
  {
    id: 13,
    title: 'Wind Power Forecasting',
    description: 'Machine learning model for predicting wind power generation using historical weather data and advanced algorithms.',
    longDescription: 'Advanced ML system for accurate wind power generation forecasting using ensemble methods, time series analysis, and weather pattern recognition.',
    technologies: ['Python', 'Scikit-learn', 'Pandas', 'Time Series', 'Machine Learning'],
    category: 'AI',
    complexity: 'Medium',
    liveUrl: '#',
    githubUrl: 'https://github.com/mukul-sharma-tech/FinalSubmission_Wind_Power_Generation_Forecasting',
    featured: false,
    status: 'Completed',
    priority: 13,
    // image: '/images/windpower.png',
    image: 'https://images.unsplash.com/photo-1508791290064-c27cc1ef7a9a?q=80&w=1174&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'

  },
  {
    id: 14,
    title: 'Harry Potter Invisible Cloak',
    description: 'Computer vision project using Python and OpenCV to create an invisible cloak effect like in Harry Potter movies.',
    longDescription: 'Innovative computer vision application that creates a real-time invisible cloak effect using background subtraction and color detection techniques.',
    technologies: ['Python', 'OpenCV', 'Computer Vision', 'Image Processing'],
    category: 'AI',
    complexity: 'Medium',
    liveUrl: '#',
    githubUrl: 'https://github.com/mukul-sharma-tech/harry-potter-invisible-cloak',
    featured: false,
    status: 'Completed',
    priority: 14,
    // image: '/images/invisible-cloak.png'
    image: 'https://c.ndtvimg.com/2024-12/9bkf4c6g_invisible-_625x300_06_December_24.jpg?im=FeatureCrop,algorithm=dnn,width=1200,height=738'

  },
  {
    id: 15,
    title: 'GitHub README File Generator',
    description: 'Automated tool for generating professional README files for GitHub repositories.',
    longDescription: 'Streamlined README generator that creates comprehensive documentation for GitHub projects with templates and customization options.',
    technologies: ['JavaScript', 'GitHub API', 'Markdown', 'Automation'],
    category: 'Web',
    complexity: 'Low',
    liveUrl: '#',
    githubUrl: 'https://github.com/mukul-sharma-tech/README_MAKER',
    featured: false,
    status: 'Completed',
    priority: 15,
    // image: '/images/readme-generator.png'
    image: 'https://camo.githubusercontent.com/cad0700fd2c820a742aac6fda7d758a0fd705d5b6360850693349b391203e260/68747470733a2f2f62756c6c646f676a6f622e636f6d2f73797374656d2f7265616461626c65732f636f766572732f3030302f3030312f3435352f6d61785f7265732f382d31302d323031382e706e67'
  },
];

export { projects };