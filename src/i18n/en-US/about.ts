// About me page translations
export default {
  title: 'About me',

  jobTitle: 'Software Engineer',
  jobSubtitle:
    'I design and build software that connects industrial hardware with modern systems. My main languages are C++, TypeScript, Python, and Go. I focus on reliability, performance, and code the next person can maintain.',

  aboutMe: 'About me',
  aboutIntro:
    'My work spans low-level system code, industrial SCADA, web applications, and local LLM experiments. I like understanding how things work and making them simpler.',
  aboutJourney:
    'Over the years I have worked on industrial automation, real-time data acquisition, SCADA visualizations, and the middleware that ties them together. Each project reinforced that clear architecture and maintainable code matter more than chasing trends.',

  areasTitle: 'Areas I work in',

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
    { name: 'mdi-memory', title: 'Low-level systems' },
    { name: 'mdi-cogs', title: 'CMake, vcpkg' },
  ],

  // Knowledge Cards as an array
  knowledgeCards: [
    {
      id: 'systemArchitecture',
      title: 'System architecture',
      description:
        'I design systems for power plants and industrial sites: distributed, event-driven, and modular enough to reason about. Reliability and performance come before cleverness.',
      benefits: 'Technical skills:',
      benefitsDesc:
        'C++17/20, Go, event-driven programming, microservice design, concurrent programming, shared memory architectures, Docker containerization',
      icon: 'mdi-hexagon-multiple',
    },
    {
      id: 'dataEngineering',
      title: 'Data management',
      description:
        'I build pipelines that collect, process, and store industrial time-series data. The focus is on fast access, solid integrity, and storage that holds up under load.',
      benefits: 'Technical skills:',
      benefitsDesc:
        'Database design (SQL & NoSQL), custom file-mapped storage, time-series data handling, multi-threaded data access patterns, MongoDB, SQLite, ObjectBox, RethinkDB, PostgreSQL',
      icon: 'mdi-database',
    },
    {
      id: 'uiDevelopment',
      title: 'Interface development',
      description:
        'I write desktop and web interfaces that let operators work with complex industrial data. Qt, Vue, and enough MFC to appreciate modern tooling.',
      benefits: 'Technical skills:',
      benefitsDesc:
        'Qt, MFC, Vue.js, Model-View-Controller implementations, cross-platform development, BCGControlBar Pro, internationalization',
      icon: 'mdi-monitor-dashboard',
    },
    {
      id: 'communicationProtocols',
      title: 'Communication systems',
      description:
        'I connect field devices, backends, and UIs over MQTT, ZeroMQ, WebSockets, REST, and industrial protocols like Modbus, IEC104, and Siemens S7.',
      benefits: 'Technical skills:',
      benefitsDesc:
        'MQTT, ZeroMQ, WebSockets, REST APIs, industrial protocols (Modbus, IEC104, Siemens S7), TCP/IP networking, secure API design (JWT)',
      icon: 'mdi-access-point-network',
    },
    {
      id: 'systemIntegration',
      title: 'System integration',
      description:
        'Much of my work sits between layers: translating protocols, converting binary formats, and writing middleware so legacy systems can integrate with modern ones.',
      benefits: 'Technical skills:',
      benefitsDesc:
        'C#/.NET integration with native code, multi-language systems (C++/Go/C#), binary deserialization, character encoding conversion, API gateway development',
      icon: 'mdi-puzzle',
    },
  ],

  socialTitle: 'Find me online',
  contactTitle: 'Leave me a message',

  nameLabel: 'Name',
  messageLabel: 'Message',
  submitButton: 'Send message',
  thankYouMessage: 'Thank you for your message!',
  errorMessage: 'An error occurred. Please try again later.',
  redirectInfo: 'Submitting will redirect you to Google Forms to complete your message.',
};
