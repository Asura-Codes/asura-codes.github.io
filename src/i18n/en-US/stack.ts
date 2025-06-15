// Stack page translations - Structured version with skillCards array
export default {
  title: 'My Technology Stack',
  frontendTitle: 'Frontend',
  backendTitle: 'Backend',
  databaseTitle: 'Databases',
  toolsTitle: 'Tools & DevOps',

  // Page details
  pageTitle: 'Technology Stack & Expertise',
  introduction: 'As a software developer, my main goal is to create reliable, high-performing solutions. I\'ve worked on cross-platform GUI development, event-driven architecture, shared memory systems, and modern C++ (C++20/17). I\'ve had the chance to put effective data archiving solutions into place and create distributed systems with real-time communication capabilities. An outline of my core competencies and technology stack is provided below. These were honed via a variety of software development projects, such as distributed control systems, cross-platform apps, and data acquisition and archiving solutions.',

  skillCards: [
    {
      id: 'coreLanguages',
      title: 'Core Programming Languages',
      skills: [
        {
          id: 'cpp',
          name: 'C++20 / C++17',
          description: 'High-performance, type-safe, contemporary systems programming'
        },
        {
          id: 'csharp',
          name: 'C#',
          description: 'Native interop, API design, and integration',
          subSkills: [
            {
              id: 'aspNetWebApi',
              name: 'ASP.NET Web API',
              description: 'Building RESTful services'
            }
          ]
        },
        {
          id: 'typescript',
          name: 'TypeScript / JavaScript',
          description: 'Full-stack application development, including SPAs (Vue 2/3, Quasar, Bootstrap) and Node.js backend services.'
        },
        {
          id: 'python',
          name: 'Python',
          description: 'Backend services for general automation scripting, simulation.'
        },
        {
          id: 'nodejs',
          name: 'Node.js',
          description: 'Backend development for microservices, real-time apps, and API services, especially for Internet of Things platforms.'
        },
        {
          id: 'golang',
          name: 'Go (Golang)',
          description: 'Backend development for distributed systems and microservices architecture.'
        }
      ]
    },
    {
      id: 'frameworks',
      title: 'Key Frameworks & Libraries',
      skills: [
        {
          id: 'qt',
          name: 'Qt (Widgets, Signals/Slots)',
          description: 'Cross-platform GUI, visualization, and user interaction for industrial control panels'
        },
        {
          id: 'boost',
          name: 'Boost Libraries',
          subSkills: [
            {
              id: 'asio',
              name: 'boost::asio',
              description: 'Asynchronous I/O, networking, and coroutines'
            },
            {
              id: 'serialization',
              name: 'boost::serialization',
              description: 'Object serialization and STL container stack construction'
            },
            {
              id: 'interprocess',
              name: 'boost::interprocess',
              description: 'Shared memory and interprocess synchronization'
            },
            {
              id: 'fusion',
              name: 'boost::fusion, boost::mpl',
              description: 'Heterogeneous containers and metaprogramming'
            },
            {
              id: 'thread',
              name: 'boost::thread / boost::mutex',
              description: 'Threading and synchronization primitives'
            },
            {
              id: 'container',
              name: 'boost::container',
              description: 'STL-compatible specialized containers'
            },
            {
              id: 'bimap',
              name: 'Boost.Bimap',
              description: 'Bidirectional maps for efficient key-value lookups'
            },
            {
              id: 'lexicalCast',
              name: 'Boost.Lexical_Cast',
              description: 'Type-safe conversions between strings and other types'
            },
            {
              id: 'algorithm',
              name: 'Boost.Algorithm',
              description: 'Collection of generic algorithms for C++'
            },
            {
              id: 'multiIndex',
              name: 'boost::multi_index',
              description: 'Containers with multiple search and sorting criteria'
            },
            {
              id: 'propertyTree',
              name: 'Boost.PropertyTree',
              description: 'Storing and manipulating hierarchical data, especially XML serialization'
            },
            {
              id: 'dateTime',
              name: 'Boost.DateTime',
              description: 'Date and time manipulation and calculations'
            }
          ]
        },
        {
          id: 'json',
          name: 'nlohmann::json',
          description: 'Modern C++ JSON parsing and serialization'
        },
        {
          id: 'poco',
          name: 'Poco Framework',
          description: 'Threading, networking, HTTP/WebSocket servers, MQTT integration, and database abstraction'
        },
        {
          id: 'messaging',
          name: 'Messaging Systems',
          subSkills: [
            {
              id: 'zeromq',
              name: 'ZeroMQ (zmq, cppzmq)',
              description: 'High-performance asynchronous messaging with patterns like DEALER/ROUTER'
            },
            {
              id: 'mqtt',
              name: 'MQTT (mosqpp, Paho)',
              description: 'Publish/subscribe messaging protocol with Mosquitto C++ integration'
            }
          ]
        },
        {
          id: 'mongodb',
          name: 'MongoDB C++ Driver (mongocxx)',
          description: 'NoSQL database integration'
        },
        {
          id: 'openssl',
          name: 'OpenSSL',
          description: 'Secure communication and asynchronous cryptographic operations'
        },
        {
          id: 'iconvpp',
          name: 'iconvpp',
          description: 'Character encoding conversions for legacy systems integration (CP852 to UTF-8)'
        },
        {
          id: 'sqlite',
          name: 'SQLite with Poco Data',
          description: 'Embedded database with ORM-like features for configuration management'
        },
        {
          id: 'mfc',
          name: 'MFC (Microsoft Foundation Classes)',
          description: 'Windows desktop application development with MDI architecture'
        },
        {
          id: 'bcgControlBar',
          name: 'BCGControlBar Pro',
          description: 'Advanced UI components for MFC applications including ribbons and dockable panels'
        },
        {
          id: 'objectBox',
          name: 'ObjectBox',
          description: 'High-performance event logging and embedded database'
        },
        {
          id: 'rethinkDb',
          name: 'RethinkDB',
          description: 'Optional NoSQL database for real-time applications'
        },
        {
          id: 'eCharts',
          name: 'ECharts',
          description: 'Data visualization library for dashboards'
        },
        {
          id: 'snap7',
          name: 'Snap7',
          description: 'Siemens S7 protocol library for industrial communication'
        },
        {
          id: 'libmodbus',
          name: 'libmodbus',
          description: 'Modbus TCP protocol library for industrial devices'
        },
        {
          id: 'proster',
          name: 'Proster',
          description: 'Custom protocol for industrial hardware integration'
        },
        {
          id: 'bootstrapVue',
          name: 'Bootstrap-Vue',
          description: 'Frontend framework for responsive design in Vue.js applications'
        },
        {
          id: 'pinia',
          name: 'Pinia',
          description: 'State management library for Vue.js applications'
        },
        {
          id: 'expressJs',
          name: 'Express.js',
          description: 'Web framework for Node.js, used for building APIs'
        },
        {
          id: 'socketIo',
          name: 'Socket.IO',
          description: 'Library for real-time, bidirectional communication'
        },
        {
          id: 'ginGolang',
          name: 'Gin (Go)',
          description: 'HTTP web framework for building APIs in Go'
        }
      ]
    },
    {
      id: 'architecture',
      title: 'Architectural & Technical Skills',
      skills: [
        {
          id: 'eventDriven',
          name: 'Event-Driven Architecture',
          description: 'Designing and implementing systems that effectively handle, filter, and process analog and binary signals is known as event-driven architecture'
        },
        {
          id: 'realTime',
          name: 'Real-Time Communication',
          description: 'Using messaging protocols to quickly gather data, send commands, and receive event notifications'
        },
        {
          id: 'multithreading',
          name: 'Multithreading & Concurrency',
          description: 'Using mutexes, scoped locks, condition variables, and atomic operations to manage resources thread-safely'
        },
        {
          id: 'sharedMemory',
          name: 'Shared Memory Architecture',
          description: ' Implementing high-performance shared memory segments to enable multiple processes to quickly and concurrently access real-time data is known as shared memory architecture'
        },
        {
          id: 'fileMapped',
          name: 'File-Mapped Storage',
          description: 'Custom file-mapped indexing for effective archiving of substantial amounts of time-series data is known as file-mapped storage'
        },
        {
          id: 'dynamicConfig',
          name: 'Dynamic Configuration',
          description: 'The ability to load and manage configuration information from project files and shared memory'
        },
        {
          id: 'eventManagement',
          name: 'Event & Alarm Management',
          description: 'Using sophisticated logic to identify alarm states based on thresholds and state transitions is known as event and alarm management'
        },
        {
          id: 'serialization',
          name: 'Serialization & Data Conversion',
          description: 'Data conversion and serialization, including binary deserialization and C-struct mapping, are processes that convert old binary data into contemporary structured data'
        },
        {
          id: 'protocol',
          name: 'Protocol Integration',
          description: ' Support for multiple protocols (Modbus, Siemens, IEC104, SNMP, OPC UA) and the creation of custom protocols are examples of protocol integration'
        },
        {
          id: 'dataIntegrity',
          name: 'Data Integrity & Recovery',
          description: 'Data Recovery & Integrity Methods for mission-critical applications\' data recovery, backup, and validation'
        },
        {
          id: 'crossPlatform',
          name: 'Cross-Platform Development',
          description: 'Writing code for embedded platforms (Compute Module), Linux, and Windows'
        },
        {
          id: 'microservices',
          name: 'Microservices Architecture',
          description: 'Designing loosely coupled services that are each Docker-contained for scalability and maintainability is known as microservices architecture'
        },
        {
          id: 'secureApis',
          name: 'Secure API Design',
          description: 'Implementing RESTful APIs with JWT authentication and API key security is known as "secure API design"'
        },
        {
          id: 'modelView',
          name: 'Model-View Architecture',
          description: 'Data models, views, and controller logic are separated in a model-view architecture to improve maintainability'
        },
        {
          id: 'nativeInterop',
          name: 'Native Interoperability',
          description: 'Calling native C++ functions from managed C# code using P/Invoke (DllImport)'
        }
      ]
    },
    {
      id: 'build',
      title: 'Build, Tooling & DevOps',
      skills: [
        {
          id: 'cmake',
          name: 'CMake',
          description: 'Cross-platform build system and project configuration'
        },
        {
          id: 'vcpkg',
          name: 'vcpkg',
          description: 'C++ package manager for dependency installation and management'
        },
        {
          id: 'vs',
          name: 'Visual Studio 2022',
          description: 'Primary IDE for C++/C# development'
        },
        {
          id: 'platformSpecific',
          name: 'Platform-Specific Integration',
          description: 'Experience with Windows API for file and process management, threading, and event logging'
        },
        {
          id: 'docker',
          name: 'Docker',
          description: 'Containerization for consistent deployment and service isolation'
        },
        {
          id: 'fabric',
          name: 'Fabric (Python)',
          description: 'Automation scripts for deployment and service management'
        },
        {
          id: 'systemd',
          name: 'systemd',
          description: 'Service management for Linux environments'
        },
        {
          id: 'devcontainers',
          name: 'VS Code Devcontainers',
          description: 'Consistent and reproducible development environments using Docker'
        },
        {
          id: 'swagger',
          name: 'Swagger/OpenAPI',
          description: 'API documentation and specification'
        },
        {
          id: 'cicd',
          name: 'CI/CD Pipelines',
          description: 'Continuous integration and deployment workflows'
        },
        {
          id: 'powershell',
          name: 'PowerShell',
          description: 'Scripting for Windows environments and automation'
        },
        {
          id: 'make',
          name: 'Make',
          description: 'Build automation tool for Linux/Unix environments'
        }
      ]
    },
    {
      id: 'domain',
      title: 'Domain Knowledge',
      skills: [
        {
          id: 'softwareArch',
          name: 'Software Architecture',
          description: 'Creating dependable, modular systems for real-time control and monitoring'
        },
        {
          id: 'dataAcquisition',
          name: 'Data Acquisition',
          description: 'Designing high-performance systems for dependable measurement data collection, processing, and long-term archiving is known as data acquisition'
        },
        {
          id: 'appDev',
          name: 'Application Development',
          description: 'Application development is the process of putting solutions in place'
        },
        {
          id: 'legacy',
          name: 'Legacy System Modernization',
          description: 'Legacy Converting legacy data files into contemporary, structured formats with character encoding translation is known as system modernization.'
        },
        {
          id: 'visualization',
          name: 'Visualization Tools',
          description: 'Development of graphical editors for data visualization, control panels, and process diagrams'
        },
        {
          id: 'secure',
          name: 'Secure Systems',
          description: 'Putting in place tamper-evident, secure storage to meet audit and compliance standards'
        },
        {
          id: 'crossPlatformDev',
          name: 'Cross-Platform Development',
          description: 'Creating cross-platform visualization and control systems'
        },
        {
          id: 'dataManagement',
          name: 'Data Management',
          description: 'Specialized systems for gathering and tracking data'
        },
        {
          id: 'industrialProtocols',
          name: 'Industrial Protocol Integration',
          description: 'Experience with hardware integration and industrial communication protocols'
        },
        {
          id: 'databaseSystems',
          name: 'Database Systems Design',
          description: 'Designing database systems includes creating query interfaces and tools for database exploration'
        }
      ]
    },
    {
      id: 'projects',
      title: 'Project Highlights',
      skills: [
        {
          id: 'scada',
          name: 'SCADA System',
          description: 'used C++20 to create a modular, real-time industrial automation control and monitoring system. Features include thread-safe data handling, dynamic configuration, alarm management, event-driven signal processing architecture, real-time communication through MQTT and ZeroMQ, and a Qt-based graphical user interface (GUI) with visualization capabilities'
        },
        {
          id: 'dataAcquisition',
          name: 'Data Acquisition & Archiving System',
          description: 'developed a C++20 system for gathering, analyzing, and storing power plant measurement data over an extended period of time. robust data integrity procedures, file-mapped storage for time-series data archiving, shared memory architecture for concurrent data access, and thorough indexing for quick time-range queries'
        },
        {
          id: 'distributed',
          name: 'Distributed SCADA Platform',
          description: 'designed a scalable platform using a Go backend and a C++20 data ingestion service. Binary deserialization for modernizing legacy data, Docker containerization for microservices architecture, JWT for secure APIs, SQLite and ObjectBox for embedded storage, and OpenAPI/Swagger for automated documentation are some of the salient features'
        },
        {
          id: 'visualization',
          name: 'Graphical Editor for SCADA Schematics',
          description: 'a cross-platform C++17 graphical editor for industrial control interfaces was created. The program comes with a model editor for making process diagrams and control panels, as well as Boost for XML serialization.Model-View architecture, PropertyTree, and cross-platform compatibility'
        },
        {
          id: 'middleware',
          name: 'Middleware API for Protocol Bridging',
          description: 'a .NET Web API middleware between RESTful interfaces and proprietary protocols was developed as a middleware API for protocol bridging. Among the features are dynamic configuration, data structure marshalling, optimized batch processing, robust resource management, and native C++ interoperability through P/Invoke'
        },
        {
          id: 'databaseTool',
          name: 'Database Exploration Tool',
          description: 'using MFC, a C++20 Windows desktop application for SQLite database administration was created. Data visualization features, database connection management, an integrated SQL editor, a Multi-Document Interface for multiple views, and sophisticated UI elements via BCGControlBar Pro are all included in the tool'
        },
        {
          id: 'modularPlatform',
          name: 'Modular Data Acquisition Platform',
          description: 'designed a microservices-based industrial data collection system. Multiple protocol integrations (S7, Modbus, Proster), a TypeScript/Express.js API layer, MongoDB and SQLite storage, C++, Node.js, and Python services, and a Vue.js dashboard with real-time visualization are all included in the solution'
        }
      ]
    },
    {
      id: 'softSkills',
      title: 'Soft Skills & Approach',
      skills: [
        {
          id: 'cleanCode',
          name: 'Clean, Maintainable Code',
          description: 'The codebase is divided into distinct modules in accordance with best practices for concern separation'
        },
        {
          id: 'modernCpp',
          name: 'Modern C++ Features',
          description: 'Proficiency in utilizing smart pointers, type safety, constexpr, and other contemporary C++ features to enhance code security'
        },
        {
          id: 'modular',
          name: 'Modular Architecture',
          description: 'Designing extensible systems that can change to meet new needs is known as modular architecture'
        },
        {
          id: 'reliability',
          name: 'Reliability Focus',
          description: 'Implementing thorough error handling, logging, and system recovery procedures is the focus of reliability'
        },
        {
          id: 'performance',
          name: 'Performance Optimization',
          description: 'Proficiency in low-latency, high-performance systems for real-time applications'
        },
        {
          id: 'ux',
          name: 'User Experience',
          description: 'Developing user-friendly interfaces for sophisticated software programs'
        },
        {
          id: 'learning',
          name: 'Continuous Learning',
          description: 'Adapting to best practices and new technologies in quickly changing ecosystems'
        },
        {
          id: 'crossDisciplinary',
          name: 'Cross-Disciplinary Integration',
          description: 'The capacity to collaborate across various platforms and programming languages to produce coherent solutions is known as cross-disciplinary integration'
        }
      ]
    }
  ]
};
