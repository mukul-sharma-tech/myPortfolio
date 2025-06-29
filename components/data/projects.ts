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
    title: 'AI-Hire: AI-Driven Interview Platform',
    description: 'Advanced AI-powered video conferencing interview platform with 3D virtual interviewer, resume analysis, and real-time feedback system.',
    longDescription: 'AI-Hire revolutionizes the interview process with cutting-edge AI technology. Features include real-time speech analysis, facial expression recognition, 3D AR interviewer, resume-job matching algorithms, and comprehensive scoring system.',
    technologies: ['React', 'Next.js', 'Three.js', 'OpenAI', 'TensorFlow', 'Computer Vision', 'NLP'],
    category: 'AI',
    complexity: 'High',
    liveUrl: 'https://ai-hire-tau.vercel.app/',
    githubUrl: 'https://github.com/mukul-sharma-tech/AIHire',
    featured: true,
    status: 'In Development',
    priority: 1,
    image: '/images/aihire.png'
  },
  {
    id: 2,
    title: 'EduAssist: Smart Learning Assistant',
    description: 'AI-powered educational platform with personalized learning, 3D avatar teacher, voice interaction, and real-time student emotion tracking.',
    longDescription: 'EduAssist transforms classroom learning with AI technology. Features speech recognition, facial emotion analysis, personalized quiz generation, 3D avatar interactions, and comprehensive student performance analytics.',
    technologies: ['Python', 'TensorFlow', 'OpenCV', 'React', 'NLP', 'Computer Vision', 'Speech Recognition'],
    category: 'AI',
    complexity: 'High',
    liveUrl: 'https://edu-assist-alpha.vercel.app/',
    githubUrl: 'https://github.com/mukul-sharma-tech/EduAssist',
    featured: true,
    status: 'Completed',
    priority: 2,
    image: '/images/eduassist.png'
  },
  {
    id: 3,
    title: 'Switch: Gender-Safe Social Platform',
    description: 'Revolutionary social media platform with gender-safe spaces, interest-based feeds, and AI-powered content moderation.',
    longDescription: 'Switch creates a safer social media experience with dedicated spaces for different genders, AI-based content filtering, interest-driven feeds, mental health support, and anti-addiction features.',
    technologies: ['React', 'Next.js', 'MongoDB', 'Socket.io', 'AI Moderation', 'Real-time Chat'],
    category: 'Web',
    complexity: 'High',
    liveUrl: 'https://switch-peach.vercel.app/',
    githubUrl: 'https://github.com/mukul-sharma-tech/Switch',
    featured: true,
    status: 'In Development',
    priority: 3,
    image: '/images/switch.png'
  },
  {
    id: 4,
    title: 'FarmerAssist: Smart Farming Dashboard',
    description: 'Comprehensive farming solution with weather integration, crop management, and data-driven agricultural insights.',
    longDescription: 'FarmerAssist empowers farmers with modern technology including real-time weather data, crop health monitoring, irrigation scheduling, and market price tracking.',
    technologies: ['React', 'Node.js', 'Weather API', 'MongoDB', 'Chart.js', 'Express.js'],
    category: 'Web',
    complexity: 'Medium',
    liveUrl: 'https://farmer-dr37.onrender.com/',
    githubUrl: '#',
    featured: false,
    status: 'Completed',
    priority: 4,
    // image: '/images/farmerassist.png'
    image: 'https://plus.unsplash.com/premium_photo-1661420226112-311050ce30da?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
  {
    id: 5,
    title: 'AI Interview Calling Platform',
    description: 'Advanced AI-powered interview platform with resume analysis and candidate screening capabilities.',
    longDescription: 'Comprehensive interview solution featuring AI-driven candidate assessment, resume parsing, and automated screening processes.',
    technologies: ['AI/ML', 'React', 'Resume Analysis', 'Video Calling'],
    category: 'AI',
    complexity: 'High',
    liveUrl: 'https://ai-hiring-beta.vercel.app/',
    githubUrl: '#',
    featured: false,
    status: 'Completed',
    priority: 5,
    // image: '/images/ai-interview-call.png'
    image: 'https://images.unsplash.com/photo-1573497620053-ea5300f94f21?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'

  },
  {
    id: 6,
    title: 'ApnaTour: Travel Planner',
    description: 'Comprehensive travel planning platform with itinerary generation, booking integration, and personalized recommendations.',
    longDescription: 'Full-featured travel planning application with destination discovery, itinerary creation, budget tracking, and integrated booking services.',
    technologies: ['React', 'Next.js', 'MongoDB', 'Travel APIs', 'Payment Integration'],
    category: 'Web',
    complexity: 'Medium',
    liveUrl: 'https://apna-tour.vercel.app/',
    githubUrl: '#',
    featured: false,
    status: 'Completed',
    priority: 6,
    // image: '/images/apnatour.png'
    image: 'https://images.unsplash.com/photo-1530789253388-582c481c54b0?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
  {
    id: 7,
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
    priority: 7,
    // image: '/images/handpilot.png'
    image: 'https://plus.unsplash.com/premium_photo-1711664260521-8abe21e1eace?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
  {
    id: 8,
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
    priority: 8,
    // image: '/images/geetabot.png',
    image: 'https://shubhmandir.com/wp-content/uploads/2020/03/chapter-1-bhagwat-gita.jpg'
  },
  {
    id: 9,
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
    priority: 9,
    // image: '/images/windpower.png',
    image: 'https://images.unsplash.com/photo-1508791290064-c27cc1ef7a9a?q=80&w=1174&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'

  },
  {
    id: 10,
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
    priority: 10,
    // image: '/images/invisible-cloak.png'
    image: 'https://c.ndtvimg.com/2024-12/9bkf4c6g_invisible-_625x300_06_December_24.jpg?im=FeatureCrop,algorithm=dnn,width=1200,height=738'

  },
  {
    id: 11,
    title: 'Beautiful Home Page with Assistant',
    description: 'Modern homepage design with integrated AI assistant for enhanced user interaction and support.',
    longDescription: 'Elegant homepage featuring a built-in AI assistant that provides real-time help and guidance to users navigating the website.',
    technologies: ['React', 'Next.js', 'AI Integration', 'Modern UI/UX'],
    category: 'Web',
    complexity: 'Medium',
    liveUrl: 'https://credex-assignment-lime.vercel.app/',
    githubUrl: '#',
    featured: false,
    status: 'Completed',
    priority: 11,
    image: 'https://images.unsplash.com/photo-1642132652860-471b4228023e?q=80&w=1460&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    // image: '/images/windpower.png'

  },
  {
    id: 12,
    title: 'Real Time Tic Tac Toe Game',
    description: 'Interactive multiplayer Tic Tac Toe game with real-time gameplay and modern UI design.',
    longDescription: 'Engaging real-time multiplayer Tic Tac Toe game featuring smooth animations, responsive design, and instant gameplay updates.',
    technologies: ['React', 'Socket.io', 'Real-time Gaming', 'JavaScript'],
    category: 'Web',
    complexity: 'Low',
    liveUrl: 'https://tic-tac-toe-chi-eight-29.vercel.app/',
    githubUrl: '#',
    featured: false,
    status: 'Completed',
    priority: 12,
    // image: '/images/windpower.png'
    image: 'https://images.unsplash.com/photo-1668901382969-8c73e450a1f5?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
  {
    id: 13,
    title: 'URL Shortener',
    description: 'Fast and reliable URL shortening service with analytics and custom short links.',
    longDescription: 'Comprehensive URL shortening platform with click analytics, custom aliases, and QR code generation for easy sharing.',
    technologies: ['Node.js', 'Express.js', 'MongoDB', 'Analytics'],
    category: 'Web',
    complexity: 'Low',
    liveUrl: 'https://url-shortener-gsbj.onrender.com',
    githubUrl: '#',
    featured: false,
    status: 'Completed',
    priority: 13,
    image: 'https://plus.unsplash.com/premium_photo-1683865776032-07bf70b0add1?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    // image: '/images/windpower.png'

  },
  {
    id: 14,
    title: 'Image Size Reducer',
    description: 'Web-based tool for compressing and resizing images while maintaining quality.',
    longDescription: 'Efficient image compression tool that reduces file sizes without compromising visual quality, supporting multiple formats.',
    technologies: ['JavaScript', 'Canvas API', 'Image Processing', 'Web APIs'],
    category: 'Web',
    complexity: 'Low',
    liveUrl: 'https://image-size-reduce-v9f2.onrender.com',
    githubUrl: '#',
    featured: false,
    status: 'Completed',
    priority: 14,
    image: 'https://images.unsplash.com/photo-1747677490171-58f43fdb9cc0?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    // image: '/images/windpower.png'

  },
  {
    id: 15,
    title: 'Your AI Friend',
    description: 'Conversational AI companion designed to provide friendly interactions and support.',
    longDescription: 'Interactive AI chatbot that serves as a virtual friend, offering conversations, advice, and emotional support through natural language processing.',
    technologies: ['AI/ML', 'NLP', 'Chatbot', 'Python'],
    category: 'AI',
    complexity: 'Medium',
    liveUrl: 'https://aifriend-1.onrender.com',
    githubUrl: '#',
    featured: false,
    status: 'Completed',
    priority: 15,
    image: 'https://images.unsplash.com/photo-1507146153580-69a1fe6d8aa1?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    // image: '/images/windpower.png'

  },
  {
    id: 16,
    title: 'Real-Time Collaborative Editor',
    description: 'Multi-user collaborative text editor with real-time synchronization and live cursor tracking.',
    longDescription: 'Advanced collaborative editing platform enabling multiple users to edit documents simultaneously with real-time updates and conflict resolution.',
    technologies: ['React', 'Socket.io', 'Real-time Sync', 'Collaborative Tools'],
    category: 'Web',
    complexity: 'High',
    liveUrl: 'https://mukul-sharma-wasserstoff-front-end-intern-task-z3wj.vercel.app/',
    githubUrl: '#',
    featured: false,
    status: 'Completed',
    priority: 16,
    image: 'https://images.unsplash.com/photo-1663662426323-7ba7aeb4f831?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    // image: '/images/windpower.png'

  },
  {
    id: 17,
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
    priority: 17,
    // image: '/images/readme-generator.png'
    image: 'https://camo.githubusercontent.com/cad0700fd2c820a742aac6fda7d758a0fd705d5b6360850693349b391203e260/68747470733a2f2f62756c6c646f676a6f622e636f6d2f73797374656d2f7265616461626c65732f636f766572732f3030302f3030312f3435352f6d61785f7265732f382d31302d323031382e706e67'
  },
];

export { projects };