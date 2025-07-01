// Work page translations
export default {
  title: 'My Work',
  projectsTitle: 'Projects',
  experienceTitle: 'Experience',

  // Page details
  pageTitle: 'Industrial Software Development',
  pageSubtitle: 'Software for data systems, automation, and critical infrastructure',
  btnDetails: 'Details',
  btnClose: 'Close',
  keyFeatures: 'Key Features:',
  technologiesUsed: 'Technologies Used:',
  projectSize: 'Project Size:',

  // Project size definitions
  sizes: {
    large: 'Large',
    medium: 'Medium',
    small: 'Small'
  },

  // Size tooltips for better context
  sizeTooltips: {
    large: 'Complex project with extensive scope and multiple components',
    medium: 'Moderate complexity with balanced development effort',
    small: 'Focused project with limited scope'
  },

  // Rating scale explanation
  difficultyScale: 'Project complexity rating (1-3)',

  // Size not specified indicators
  sizeNotSpecified: 'Size not specified',
  sizeNotSpecifiedTooltip: 'Project size information is not available',

  // Categories
  categories: {
    softwareFramework: 'Software Framework',
    dataSystems: 'Data Systems',
    iotEdge: 'IoT & Edge',
    apiIntegration: 'API & Integration',
    modernization: 'Modernization',
    realTimeSystems: 'Real-Time Systems',
    industrialSolutions: 'Industrial Solutions'
  },

  // Projects
  projects: [
    {
      title: "SCADA System",
      tech: "C++20, Qt 6, Event-Driven Architecture",
      keywords: "Real-Time Control, MQTT, ZeroMQ, Alarm Management, Thread Safety",
      description: "I participated in the development of a modular industrial automation control and monitoring system. The system reliably handles binary and analog signals thanks to its event-driven architecture. It has tools for managing alarms, dynamic configuration, and industrial process visualization.",
      size: "large",
      keyFeatures: [
        { title: "Event-Driven Architecture", desc: "To help guarantee dependable system responses, I worked on signal processing using validation, parsing, and queuing." },
        { title: "Real-Time Communication", desc: "I implemented MQTT and ZeroMQ protocols to facilitate communication between field devices and back-end servers." },
        { title: "Dynamic Configuration", desc: "Contributed to the development of the ability to load configuration without system interruption from shared memory and project files." },
        { title: "Alarm Management", desc: "I developed logic that uses configurable thresholds and state changes to identify and alert users to abnormal conditions." },
        { title: "Thread Safety", desc: "I implemented synchronization mechanisms and lock-free algorithms to ensure data integrity in multi-threaded environments." },
        { title: "Modular Design", desc: "The system was designed to be extensible, allowing for easy addition of new protocols and features." }

      ],
      technologies: "C++20, Qt 6 (Widgets, Core, Network, SQL, Charts), BCGControlBar Pro, Boost (asio, serialization, fusion, interprocess, thread), Poco, MQTT (mosquitto), ZeroMQ, nlohmann::json, MongoDB C++ Driver, CMake, vcpkg"
    },
    {
      title: "Data Acquisition and Archiving System",
      tech: "C++20, Boost, Shared Memory, File-Mapped Storage",
      keywords: "Data Acquisition, Indexing, Thread Safety, Power Plant",
      description: "I contributed to the creation of a C++20-based system for gathering and storing power plant measurement data. For both real-time and historical access, the system was made to function well while preserving data integrity.",
      size: "large",
      keyFeatures: [
        { title: "Efficient Storage Design", desc: "I designed a high-performance storage system that optimizes read/write operations while maintaining data integrity for historical measurements." },
        { title: "Data Acquisition", desc: "I developed connectivity to Siemens, Modbus TCP, and other control systems to effectively gather analog and digital measurements." },
        { title: "Shared Memory Architecture", desc: "To enable simultaneous access to data by several processes (acquisition, archiving, and visualization), I use shared memory." },
        { title: "Archiving Solution", desc: "I store time-series data using a file-mapped approach to facilitate speedy retrieval by time period." },
        { title: "Data Integrity", desc: "I included additional validation procedures and recovery capabilities to help safeguard crucial operational data." },
        { title: "Modular Design", desc: "The system was designed to be extensible, allowing for easy addition of new protocols and features." },
        { title: "Performance Optimization", desc: "I implemented custom indexing and caching strategies to maintain sub-millisecond data retrieval speeds even with millions of archived measurements." },
        { title: "Real-Time and Historical Access", desc: "The system supports both real-time data acquisition and historical data retrieval, ensuring comprehensive monitoring capabilities." },
        { title: "Cross-Platform Compatibility", desc: "The system is designed to run on both Windows and Linux platforms, ensuring flexibility in deployment." },
        { title: "Extensive Logging", desc: "I implemented detailed logging mechanisms to track data acquisition processes and system performance." },
        { title: "Self-Healing Services", desc: "I implemented a watchdog mechanism that automatically restarts services when they fail, ensuring continuous data acquisition even during unexpected errors." },
      ],
      technologies: "C++20, Boost (Interprocess, Asio, DateTime), Poco (Net, Util), ZeroMQ (cppzmq), MQTT (Paho), nlohmann::json, Custom file-mapped storage, CMake"
    },
    {
      title: "Distributed SCADA Platform",
      tech: "C++20, Go, Docker, Microservices",
      keywords: "Legacy Data Modernization, Containerization, Secure APIs, SQLite, ObjectBox",
      description: "I contributed to the development of an operations communication platform that links contemporary and legacy systems. This included a Poco-based backend and a C++ service to handle legacy data, with an emphasis on ensuring the components functioned well together.",
      size: "large",
      keyFeatures: [
        { title: "Legacy Data Handling", desc: "I developed a C++20 program to translate character encoding in older industrial data files and convert them into more contemporary formats." },
        { title: "Microservice Approach", desc: "Assisting in the division of the platform into distinct containerized services for communication, storage, and core functions." },
        { title: "API Development", desc: "I developed RESTful APIs with WebSocket support for real-time updates and authentication using JWT and API keys." },
        { title: "Storage Solutions", desc: "To strike a balance between flexibility and performance requirements, I used ObjectBox for event logging and SQLite for configuration settings." },
        { title: "Real-Time Data", desc: "I implemented WebSocket-based live data streaming to provide operators with immediate visibility into system changes and critical events." },
        { title: "Security Implementation", desc: "I developed a comprehensive security model with role-based access control, encrypted communication channels, and audit logging to protect sensitive industrial data." },
        { title: "Containerization", desc: "I implemented Docker-based deployment solutions to ensure consistent operation across development, testing, and production environments while simplifying scaling." },
        { title: "Cross-System Integration", desc: "I built adapters to connect with multiple industrial control systems, enabling unified monitoring and control across previously isolated operational technology environments." },
        { title: "Configuration Management", desc: "I developed a centralized configuration system that allows administrators to manage settings across distributed components from a single interface." },
        { title: "Monitoring Dashboard", desc: "I created visualization components that provide real-time status updates and historical trend analysis for operational metrics." },
        { title: "Fault Tolerance", desc: "I implemented redundancy mechanisms and failover protocols to ensure continuous operation even when individual services experience problems." },
      ],
      technologies: "Go (Gin), C++20, Docker, SQLite, ObjectBox, REST APIs, WebSockets, JWT, Poco, nlohmann::json, OpenAPI/Swagger"
    },
    {
      title: "Graphical Editor for SCADA Schematics",
      tech: "C++17, Qt, Boost, Model-View Architecture",
      keywords: "Industrial Framework, Component Architecture, Multi-Platform",
      description: "I developed a graphical editor for interfaces of industrial control systems. Using an intuitive design approach, the application assists operators in producing visual representations of their equipment and processes.",
      size: "medium",
      keyFeatures: [
        { title: "Interactive Editing", desc: "Developed tools for building and modifying visual models that allow for property configuration, grouping, and manipulation." },
        { title: "Data Serialization", desc: "Boost was used to implement XML-based loading and saving.Project data will be preserved across sessions with PropertyTree." },
        { title: "Cross-Platform Support", desc: "Assisted in making sure the program functions dependably on both specialized embedded platforms and Windows systems." },
        { title: "Clean Architecture", desc: "Model-View design patterns were used to divide issues and make the code easier to maintain." }
      ],
      technologies: "C++17, Qt (Widgets, Signals & Slots), Boost (Bimap, MPL, Serialization, Lexical_Cast, Algorithm), CMake, vcpkg"
    },
    {
      title: "Middleware API for REST and Proprietary Protocol Bridging",
      tech: ".NET Framework, C#, Native Interop",
      keywords: "REST Bridge, Proprietary Protocol, Device Communication",
      description: "Created a middleware solution to connect modern web applications with specialized industrial systems using their proprietary protocols. The API translates between standard REST requests and the specific communication methods needed by the hardware.",
      size: "small",
      keyFeatures: [
        { title: "Native Integration", desc: "Used P/Invoke to connect .NET code with existing C++ device libraries, allowing for efficient data exchange." },
        { title: "Configurable Connections", desc: "Built a system to manage connection settings through Web.config for adaptable deployment in different environments." },
        { title: "Data Structure Mapping", desc: "Created C# representations of native data structures with proper marshalling to maintain compatibility." },
        { title: "Optimized Data Handling", desc: "Implemented batching for signal processing to improve performance when dealing with large data sets." }
      ],
      technologies: ".NET Framework 4.8, C#, ASP.NET Web API, P/Invoke, Microsoft SQL Server, MariaDB/MySQL, Web.config"
    },
    {
      title: "Database Exploration Tool",
      tech: "C++20, MFC, BCGControlBar Pro, SQLite",
      keywords: "Database Management, SQL Editor, Data Visualization, MDI Architecture",
      description: "I created a desktop application to facilitate SQLite database interaction. Through an interface that allows working with multiple database views at once, the tool offers an easy-to-use method for viewing data, running queries, and visualizing results.",
      size: "medium",
      keyFeatures: [
        { title: "Multi-Document Interface", desc: "Developed an interface that enables users to manipulate query results, tables, and charts in different application windows." },
        { title: "Database Connection Manager", desc: "Developed features to store and control database connection configurations for simpler access to various data sources." },
        { title: "SQL Query Editor", desc: "To improve query writing efficiency, a code editor was added with useful features like syntax highlighting and suggestions." },
        { title: "Flexible Architecture", desc: "To improve maintainability, the code was arranged to divide data access, business logic, and user interface components." }
      ],
      technologies: "C++20, MFC (Microsoft Foundation Classes), BCGControlBar Pro, SQLite, WinSock, Visual Studio 2022"
    },
    {
      title: "Modular Data Acquisition Platform",
      tech: "C++17/20, Node.js, Vue.js, Docker, Microservices",
      keywords: "Protocol Integration, Edge Computing, Microservices, Frontend SPA, DevOps",
      description: "I helped develop a system that gathers and analyzes data from industrial machinery. The platform combines multiple technologies to provide a modern monitoring interface and a versatile solution that can be tailored to various measurement requirements.",
      size: "large",
      keyFeatures: [
        { title: "Distributed Design", desc: "Assisted in putting into place a system of interoperable containerized services that communicate with one another via ZeroMQ." },
        { title: "Hardware Integration", desc: "Developed C++ protocol adapters to connect to various industrial equipment types via both standard and unique protocols." },
        { title: "Backend Services", desc: "Developed the Node.js server, which offers configuration and data access APIs with appropriate security controls." },
        { title: "User Interface", desc: "Using Vue.js, a browser-based dashboard that shows real-time data and enables system management was developed." }
      ],
      technologies: "C++17/20, Node.js (TypeScript, Express), Vue.js, Pinia, Bootstrap-Vue, ECharts, SQLite, MongoDB, RethinkDB, ZeroMQ, Docker, Snap7, libmodbus, JWT, WebSockets"
    }
  ]
};
