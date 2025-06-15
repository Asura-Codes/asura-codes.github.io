// Home page translations
export default {
  title: 'Welcome to My Portfolio',
  jobTitle: 'Full-stack Developer',
  jobSubtitle: 'I make reliable solutions in C++, TypeScript, Python, Go, and .NET. My main professional goal has always been to integrate old industrial systems with new technologies.',
  aboutMe: 'About Me',
  aboutIntro: 'As a software developer, I enjoy solving technical problems and making solutions that people can count on.  My experience ranges from low-level system architecture to modern web technologies.',
  aboutJourney: 'I\'ve had the chance to work on important projects in industrial automation and real-time systems throughout my career. Whether I was designing SCADA systems, implementing data acquisition solutions, or making user-friendly interfaces, each project has taught me something new and helped me grow.',
  areasTitle: 'Areas I\'ve Had the Opportunity to Work In',
  contactMe: 'Contact Me',

  // Technology icons shown in the header
  technologyIcons: [
    { name: 'mdi-language-cpp', title: 'C++17/20' },
    { name: 'mdi-widgets', title: 'Qt 6 Framework' },
    { name: 'mdi-language-go', title: 'Go' },
    { name: 'mdi-docker', title: 'Docker' },
    { name: 'mdi-language-python', title: 'Python' },
    { name: 'mdi-nodejs', title: 'Node.js' },
    { name: 'mdi-vuejs', title: 'Vue.js' },
    { name: 'mdi-database', title: 'MongoDB, SQLite' },
    { name: 'mdi-code-json', title: 'JSON/APIs' },
    { name: 'mdi-lightning-bolt', title: 'MQTT, ZeroMQ' },
    { name: 'mdi-memory', title: 'Low-Level Systems' },
    { name: 'mdi-cogs', title: 'CMake, vcpkg' }
  ],

  // Knowledge Cards as an array
  knowledgeCards: [
    {
      id: 'systemArchitecture',
      title: 'System Architecture',
      description: 'I\'ve worked on scalable, modular power plant systems. I work with distributed systems, microservices, and event-driven architectures that prioritize dependability and performance in mission-critical environments.',
      benefits: 'Technical Skills:',
      benefitsDesc: 'C++17/20, Go, event-driven programming, microservice design, concurrent programming, shared memory architectures, Docker containerization',
      icon: 'mdi-hexagon-multiple'
    },
    {
      id: 'dataEngineering',
      title: 'Data Management',
      description: 'Created and put into action systems for gathering, processing, and storing industrial time-series data. My solutions include effective storage methods for both current and past data access, along with strong guarantees of data integrity.',
      benefits: 'Technical Skills:',
      benefitsDesc: 'Database design (SQL & NoSQL), custom file-mapped storage, time-series data handling, multi-threaded data access patterns, MongoDB, SQLite, ObjectBox, RethinkDB, PostgreSQL',
      icon: 'mdi-database'
    },
    {
      id: 'uiDevelopment',
      title: 'Interface Development',
      description: 'Used both desktop and web technologies to make graphical interfaces for industrial systems. These interfaces let operators see complicated processes, set up systems, and work with data from equipment.',
      benefits: 'Technical Skills:',
      benefitsDesc: 'Qt, MFC, Vue.js, Model-View-Controller implementations, cross-platform development, BCGControlBar Pro, internationalization',
      icon: 'mdi-monitor-dashboard'
    },
    {
      id: 'communicationProtocols',
      title: 'Communication Systems',
      description: 'Used different messaging and communication protocols to send and receive data in real time in industrial settings. I make sure that field devices, backend services, and user interfaces can all work together in safe and efficient ways.',
      benefits: 'Technical Skills:',
      benefitsDesc: 'MQTT, ZeroMQ, WebSockets, REST APIs, industrial protocols (Modbus, IEC104, Siemens S7), TCP/IP networking, secure API design (JWT)',
      icon: 'mdi-access-point-network'
    },
    {
      id: 'systemIntegration',
      title: 'System Integration',
      description: 'Specialized in connecting old industrial systems with new technologies. As part of my integration work, I convert binary formats, translate protocols, and make middleware components that can work with each other.',
      benefits: 'Technical Skills:',
      benefitsDesc: 'C#/.NET integration with native code, multi-language systems (C++/Go/C#), binary deserialization, character encoding conversion, API gateway development',
      icon: 'mdi-puzzle'
    }
  ]
};
