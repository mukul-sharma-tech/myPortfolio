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
    title: 'Agento',
    description: 'An enterprise-grade, privacy-first Agentic RAG engine featuring multi-modal visual reasoning and autonomous planning',
    longDescription: 'An enterprise-grade, privacy-first Agentic RAG engine featuring multi-modal visual reasoning and autonomous planning',
    technologies: ['Streamlit', 'Python', 'Azure', 'GenAI', 'RAG'],    
    category: 'AI',
    complexity: 'High',
    liveUrl: 'https://the-agento.vercel.app/',
    githubUrl: 'https://github.com/mukul-sharma-tech/The-Agento',
    featured: true,
    status: 'Completed',
    priority: 1,
    image: 'https://plus.unsplash.com/premium_vector-1726335456102-3c56334cda90?q=80&w=909&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D/'
  },
  {
    id: 2,
    title: 'AI-Hire',
    description: 'Smart 3D Interview Platform',
    longDescription: 'Handled an ambiguous, broadly defined problem by conceiving, designing, and building an innovative AI-powered platform from scratch.\nIntegrated Generative AI for ATS checker, job preparation tools and subscriptions; received positive user feedback.',
    technologies: ['Next.js', 'TypeScript', 'AI/ML', 'AR/VR'],    
    category: 'AI',
    complexity: 'High',
    liveUrl: 'https://ai-hire-platform.vercel.app/',
    githubUrl: 'https://github.com/mukul-sharma-tech/AI-Hire',
    featured: true,
    status: 'Completed',
    priority: 2,
    image: '/images/aihire.png'
  },
  {
    id: 3,
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
    priority: 3,
    image: '/images/eduassist.png'
  },
  {
    id: 4,
    title: 'Sanskritam',
    description: 'Programming Language',
    longDescription: 'Designed the core compiler, parser, and rules for a complete Sanskrit-based programming language.\nDeveloped a responsive React IDE with an integrated GenAI assistant to translate natural language problems into executable code.',
    technologies: ['React', 'TypeScript', 'Python', 'C++', 'Compiler Design'],
    category: 'Core CS',
    complexity: 'High',
    liveUrl: 'https://sanskritam.vercel.app/', // Add your Live Demo URL
    githubUrl: 'https://github.com/mukul-sharma-tech/Sanskritam', // Add your GitHub URL
    featured: true,
    status: 'Completed',
    priority: 4,
    image: 'https://plus.unsplash.com/premium_photo-1678197251586-6f54bae38803?q=80&w=1147&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' // Update with your image path
  },
  {
    id: 5,
    title: 'Chakra',
    description: 'A Novel Data Structure',
    longDescription: 'Built Chakra, an orbit-based data structure for dynamic sorting and efficient data operations.\nInspired by atomic orbits and the Sudarshan Chakra for a balanced, scalable design.',
    technologies: ['C++'],
    category: 'Core CS',
    complexity: 'Medium',
    liveUrl: 'https://docs.google.com/document/d/176ZmPq2s5GWSt0NOulHgQHkVoSssR-BR54sWMfB6apI/edit?tab=t.0', // Add your Docs URL
    githubUrl: 'https://github.com/mukul-sharma-tech/Chakra', // Add your GitHub URL
    featured: true,
    status: 'Completed',
    priority: 5,
    image: 'https://i.pinimg.com/1200x/da/8a/c2/da8ac29a4c11bf076a251b46a8cdb0bc.jpg' // Update with your image path
  },
  {
    id: 6,
    title: 'CircularChain',
    description: 'Blockchain Marketplace for Industrial Byproducts',
    longDescription: 'Blockchain-powered marketplace where smart contracts ensure trust, payments, and sustainability in trading industrial byproducts.',
    technologies: ['Blockchain', 'Next.js', 'Solidity', 'SepoliaETH'],
    category: 'Web3',
    complexity: 'Medium',
    liveUrl: 'https://circular-chain.vercel.app/', // Add your Live Demo URL
    githubUrl: 'https://github.com/mukul-sharma-tech/CircularChain', // Add your GitHub URL
    featured: true,
    status: 'Completed',
    priority: 6,
    image: 'https://i.pinimg.com/736x/d1/31/fd/d131fde9be28706341d11597d746df2a.jpg' // Update with your image path
  },

  {
    id: 7,
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
    priority: 7,
    image: '/images/switch.png'
  },
  {
    id: 8,
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
    priority: 8,
    image: 'https://i.pinimg.com/1200x/a7/5b/cc/a75bcc88195339696dbb2808f28371d9.jpg' // Update with your image path
  },
  {
    id: 9,
    title: 'AgenticIQ',
    description: 'AI-powered platform for real-time lesson creation',
    longDescription: 'Engineered a dynamic content platform using Generative AI to create interactive lesson components (e.g., quizzes, code blocks) in real-time.\nIntegrated a react-live sandbox to compile and validate generated TypeScript and React code, ensuring all dynamic UI is error-free before rendering.\nThis project demonstrates building scalable, intuitive user interfaces by combining AI-generated content with a secure, sandboxed frontend environment.',
    technologies: ['Generative AI', 'React', 'TypeScript', 'react-live'],
    category: 'AI',
    complexity: 'High',
    liveUrl: 'https://agentic-iq.vercel.app/', // Add your Live Demo URL
    githubUrl: 'https://github.com/mukul-sharma-tech/AgenticIQ', // Add your GitHub URL
    featured: false,
    status: 'Completed',
    priority: 9,
    image: 'https://i.pinimg.com/1200x/f4/cf/89/f4cf89aeb8463ad2f99c131cf18c2a2d.jpg' // Update with your image path
  },
  {
    id: 10,
    title: 'Knox Neural Shield',
    description: 'AI Intrusion Detection System with real-time threat detection and LLM-powered automated response.',
    longDescription: 'Developed a real-time AI intrusion detection system using an RF–Autoencoder ensemble on the UNSW-NB15 dataset for detecting DoS, zero-day attacks, and anomalies. Implemented SHAP-based explainability to highlight key malicious traffic features. Built an LLM-powered automated response system to generate readable security alerts and trigger network isolation upon threats.',
    technologies: ['Python', 'SHAP', 'LLM', 'Scikit-learn', 'RF-Autoencoder'],
    category: 'AI',
    complexity: 'High',
    liveUrl: 'https://knox-neural-shield.vercel.app/',
    githubUrl: 'https://github.com/mukul-sharma-tech/Knox-Neural-Shield',
    featured: false,
    status: 'Completed',
    priority: 10,
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1170&auto=format&fit=crop'
  },
  {
    id: 11,
    title: 'Synapsee',
    description: 'AI Market Validator with real-time analytics dashboard for instant startup validation.',
    longDescription: 'Architected a comprehensive analytics dashboard visualizing real-time metrics (Google Trends, Competitor Pricing) and Safe Batch Size calculations using interactive charts. Engineered a modular report interface that aggregates multi-source insights (User Pain Points, Raw Material Feasibility) into actionable UI cards for instant startup validation.',
    technologies: ['Next.js', 'MongoDB', 'TypeScript', 'Jina', 'Google Trends', 'AI/ML'],
    category: 'AI',
    complexity: 'High',
    liveUrl: 'https://synapsee.vercel.app/',
    githubUrl: 'https://github.com/mukul-sharma-tech/Synapsee',
    featured: false,
    status: 'Completed',
    priority: 11,
    image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=1170&auto=format&fit=crop'
  },
  {
    id: 12,
    title: 'FluxMeter',
    description: 'AI SEO Blog Engine that converts keywords into high-ranking SEO blogs via a multi-stage pipeline.',
    longDescription: 'Built a scalable AI-powered blog engine converting keywords into high-ranking SEO blogs using a multi-stage pipeline with trend analysis, competitor scraping, and automated validation. Engineered a ~30s generation pipeline with retry logic, 7-dimension SEO scoring, and AI-driven improvement loops. Developed a full-stack system with real-time UI and AI chat editor, enabling live content editing, SERP gap analysis, and persistent analytics via Supabase.',
    technologies: ['Next.js', 'Supabase', 'Node.js', 'AI/ML', 'Ollama', 'Groq'],
    category: 'AI',
    complexity: 'High',
    liveUrl: 'https://fluxmeter.vercel.app/',
    githubUrl: 'https://github.com/mukul-sharma-tech/FluxMeter',
    featured: false,
    status: 'Completed',
    priority: 12,
    image: 'https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?q=80&w=1174&auto=format&fit=crop'
  },
  {
    id: 13,
    title: 'QueryGenius',
    description: 'GenAI platform that converts natural language questions into optimized MongoDB queries for government datasets.',
    longDescription: 'Built a secure data analysis platform to help non-technical users understand large government datasets. Created a natural language system that converts English questions into optimized MongoDB queries. Used Ollama-based local LLMs and offline setup to ensure data privacy and zero external data leakage.',
    technologies: ['GenAI', 'Machine Learning', 'MongoDB', 'Ollama', 'LLMs'],
    category: 'AI',
    complexity: 'High',
    liveUrl: 'https://query-genius.vercel.app/',
    githubUrl: 'https://github.com/mukul-sharma-tech/QueryGenius',
    featured: false,
    status: 'Completed',
    priority: 13,
    image: 'https://images.unsplash.com/photo-1518186285589-2f7649de83e0?q=80&w=1174&auto=format&fit=crop'
  },
  {
    id: 14,
    title: 'AI Gossip Hub',
    description: 'Multi-Agent AI web platform where multiple LLM chatbots interact with each other via shared context.',
    longDescription: 'Built a web platform with multiple AI chatbots that users can interact with separately. Implemented a shared context system so bots can talk to each other without user input. Tested how multi-AI systems can support basic analysis and coordination tasks.',
    technologies: ['Multi-Agent AI', 'LLMs', 'Web App'],
    category: 'AI',
    complexity: 'Medium',
    liveUrl: '#',
    githubUrl: 'https://github.com/mukul-sharma-tech/AI-Gossip-Hub',
    featured: false,
    status: 'Completed',
    priority: 14,
    image: 'https://images.unsplash.com/photo-1677442135703-1787eea5ce01?q=80&w=1332&auto=format&fit=crop'
  },
  {
    id: 15,
    title: 'UlkaDrishti',
    description: "Earth's Sentinel — interactive 3D asteroid orbit visualizer using real-time NASA Sentry data.",
    longDescription: 'Built an interactive web app to visualize asteroid orbits and planetary defense scenarios using real-time NASA Sentry data. Implemented 3D simulations for impact prediction, crater estimation, and trajectory deflection using Three.js and WebGL. Developed a user-friendly platform to make space science concepts accessible to non-technical users. Built for NASA International Space Apps Challenge 2025.',
    technologies: ['React', 'Three.js', 'WebGL', 'NASA APIs'],
    category: 'Web',
    complexity: 'High',
    liveUrl: 'https://ulka-drishti.vercel.app/',
    githubUrl: 'https://github.com/mukul-sharma-tech/UlkaDrishti',
    featured: false,
    status: 'Completed',
    priority: 15,
    image: 'https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?q=80&w=1172&auto=format&fit=crop'
  },
  {
    id: 16,
    title: 'GigFlow',
    description: 'Full-featured gig economy platform with role-based dashboards, real-time chat, and escrow payments.',
    longDescription: 'Built a full-featured gig economy platform with role-based dashboards for clients and freelancers. Developed real-time chat, proposal submission, contract management, and escrow payments using Next.js, Socket.io, and MongoDB. Designed a responsive, mobile-first UI with TailwindCSS and Framer Motion. Implemented secure authentication, email verification, and RBAC-based access control using NextAuth.js.',
    technologies: ['Next.js', 'TypeScript', 'TailwindCSS', 'Socket.io', 'MongoDB', 'NextAuth.js'],
    category: 'Web',
    complexity: 'High',
    liveUrl: 'https://gigflow.vercel.app/',
    githubUrl: 'https://github.com/mukul-sharma-tech/GigFlow',
    featured: false,
    status: 'Completed',
    priority: 16,
    image: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=1170&auto=format&fit=crop'
  },
  {
    id: 17,
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
    priority: 17,
    image: 'https://plus.unsplash.com/premium_photo-1711664260521-8abe21e1eace?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
  {
    id: 18,
    title: 'AstroGuard',
    description: 'Asteroid Impact Simulation & Visualization Tool',
    longDescription: 'Developed an interactive platform integrating NASA and USGS datasets to model near-Earth asteroid impact scenarios.\nBuilt features for simulating impact consequences, visualizing affected regions, and evaluating mitigation strategies.\nRendered interactive 3D asteroid trajectories using Three.js.',
    technologies: ['Next.js', 'TypeScript', 'Three.js', 'NASA APIs', 'USGS APIs'],
    category: 'Web',
    complexity: 'High',
    liveUrl: 'https://astro-guard-meteor.vercel.app/',
    githubUrl: 'https://github.com/mukul-sharma-tech/AstroGuard_Meteor',
    featured: false,
    status: 'Completed',
    priority: 18,
    image: 'https://i.pinimg.com/736x/97/d2/08/97d208b707b1991536595d40efa56bfe.jpg'
  },
  {
    id: 19,
    title: 'Astro-Cadet Academy',
    description: '100% Offline-First Educational Game',
    longDescription: 'Built a 100% offline-first educational game (using a Service Worker) to teach space science without an internet connection.\nDeveloped a dual-game system: "Astro-Sort" (logic puzzle) and "Cosmic Burst" (reflex game).\nEngineered from scratch with zero dependencies, using localStorage for high scores.',
    technologies: ['Vanilla JavaScript', 'Service Worker', 'HTML5', 'CSS3', 'JSON'],
    category: 'Web',
    complexity: 'Medium',
    liveUrl: 'https://astro-cadet-academy.vercel.app/',
    githubUrl: 'https://github.com/mukul-sharma-tech/astro-cadet-academy',
    featured: false,
    status: 'Completed',
    priority: 19,
    image: 'https://i.pinimg.com/736x/0a/fd/74/0afd74d5ed31747ba3cd827353b600e3.jpg'
  },
  {
    id: 20,
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
    priority: 20,
    image: 'https://shubhmandir.com/wp-content/uploads/2020/03/chapter-1-bhagwat-gita.jpg'
  },
  {
    id: 21,
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
    priority: 21,
    image: 'https://images.unsplash.com/photo-1508791290064-c27cc1ef7a9a?q=80&w=1174&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
  {
    id: 22,
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
    priority: 22,
    image: 'https://c.ndtvimg.com/2024-12/9bkf4c6g_invisible-_625x300_06_December_24.jpg?im=FeatureCrop,algorithm=dnn,width=1200,height=738'
  },
  {
    id: 23,
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
    priority: 23,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrKHvWNCoL5zeLIGS8fRRuemESBUY6YNgtvQ&s'
  },
];

export { projects };