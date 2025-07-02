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
        { title: "Modular Design", desc: "The system was designed to be extensible, allowing for easy addition of new protocols and features." },
        { title: "Event Store for Auditing", desc: "To develop an unchangeable audit trail for compliance and analysis, I put in place a special event store that records all important system events, including operator actions, alarm acknowledgements, and configuration updates." },
        { title: "Syslog Integration for Centralized Logging", desc: "For centralized monitoring and troubleshooting, I built a logging service that uses the Syslog protocol to capture and forward system messages. This allows for seamless integration with enterprise-level log management and analysis tools." },
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
        { title: "Interactive Editing", desc: "I have developed tools for creating and editing visual models that enable property configuration, grouping, and manipulation." },
        { title: "Data Serialization", desc: "I implemented XML-based loading and saving using Boost. Throughout PropertyTree sessions, project data will be maintained." },
        { title: "Cross-Platform Support", desc: "Assisted in making sure the program functions dependably on both specialized embedded platforms and Windows systems." },
        { title: "Clean Architecture", desc: "Patterns of Model-View design I used to separate problems and simplify code maintenance." },
        { title: "Component-Based Design", desc: "I created a library of reusable graphical components, to speed up the creation of schematics." },
        { title: "Dynamic Behavior", desc: "In order to make schematics responsive, I put in place a system for specifying animations and state changes in graphical elements based on current data conditions." },
        { title: "Optimized Rendering", desc: "Even with large and intricate schematics, I concentrated on streamlining the rendering pipeline to guarantee seamless navigation and interaction." },
        { title: "User-Friendly Interface", desc: "To improve user experience, I added a drag-and-drop interface for simple component placement and configuration." },
        { title: "Custom Graphics Items", desc: "I created unique subclasses of QGraphicsItem to represent industrial components, allowing for specialized appearance and behavior." },
        { title: "Zoom and Pan Navigation", desc: "To make navigating large-scale schematics simple, I've added smooth zoom and pan capabilities to QGraphicsView." },
      ],
      technologies: "C++17, Qt (Widgets, Signals & Slots), Boost (Bimap, MPL, Serialization, Lexical_Cast, Algorithm), CMake, vcpkg"
    },
    {
      title: "Middleware API for REST and Proprietary Protocol Bridging",
      tech: ".NET Framework, C#, Native Interop",
      keywords: "REST Bridge, Proprietary Protocol, Device Communication",
      description: "I designed a middleware solution to use the proprietary protocols of specialized industrial systems to link them with contemporary web apps. The API converts standard REST requests into the particular communication protocols that the hardware requires.",
      size: "small",
      keyFeatures: [
        { title: "Native Integration", desc: "I've used P/Invoke to connect .NET code with existing C++ device libraries, allowing for efficient data exchange." },
        { title: "Configurable Connections", desc: "I've built a system to manage connection settings through Web.config for adaptable deployment in different environments." },
        { title: "Data Structure Mapping", desc: "I've created C# representations of native data structures with proper marshalling to maintain compatibility. " },
        { title: "Optimized Data Handling", desc: "I've implemented batching for signal processing to improve performance when dealing with large data sets." },
        { title: "Asynchronous Processing", desc: "In order to provide clients with a responsive experience, I have employed asynchronous patterns to manage lengthy device operations without preventing the API from functioning." },
        { title: "Robust Error Handling", desc: "By converting proprietary device errors into standard HTTP status codes and implementing thorough error logging, I've made it simpler for web clients to gracefully handle problems." },
        { title: "Interactive API Documentation", desc: "Swagger/OpenAPI was used to create API documentation that gave developers using the REST endpoints clear, interactive instructions." },
        { title: "Secure Endpoint Access", desc: "To protect API endpoints and make sure that only authorized clients can communicate with the underlying industrial systems, I have implemented token-based authentication." },
        { title: "System Health Monitoring", desc: "I've put in place a specific health check endpoint that confirms the middleware's condition and its link to the proprietary system underneath." },
        { title: "Performance Caching", desc: "In order to improve response times for common queries and lessen the strain on the underlying proprietary system, I implemented a caching layer to store frequently accessed data." },
        { title: "Data Transformation and Normalization", desc: "I've put logic in place to transform proprietary data formats into standardized JSON so that web clients can easily consume them. In order to present information consistently and in a way that was easy to understand, this involved managing various data types, byte orders." },
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
        { title: "Multi-Document Interface", desc: "I developed an interface that lets users work with tables, charts, and query results in various application windows." },
        { title: "Database Connection Manager", desc: "For easier access to multiple data sources, I designed features to store and manage database connection configurations." },
        { title: "SQL Query Editor", desc: "I added a code editor with helpful features like syntax highlighting and suggestions to increase the efficiency of writing queries." },
        { title: "Flexible Architecture", desc: "I organized the code to separate the user interface, business logic, and data access components to make it easier to maintain." },
        { title: "Data Visualization", desc: "In order to help users see trends and patterns in their data, I included a charting component to display query results." },
        { title: "Data Export Functionality", desc: "I added functionality that allows table data and query results to be exported to popular formats like CSV and XML for outside analysis." },
        { title: "Schema Tree View", desc: "In order to facilitate user navigation of database schemas, including tables, views, and indexes, I developed a tree-view component." },
        { title: "Transaction Management", desc: "To maintain data integrity during intricate operations, I put in place controls for manually managing database transactions (BEGIN, COMMIT, ROLLBACK)." },
      ],
      technologies: "C++20, MFC (Microsoft Foundation Classes), BCGControlBar Pro, SQLite, WinSock, Visual Studio 2022"
    },
    {
      title: "Modular Data Acquisition Platform",
      tech: "C++17/20, Node.js, Python3, Vue.js, Docker, Microservices",
      keywords: "Protocol Integration, Edge Computing, Microservices, Frontend SPA, DevOps",
      description: "I helped develop a system that gathers and analyzes data from industrial machinery. The platform combines multiple technologies to provide a modern monitoring interface and a versatile solution that can be tailored to various measurement requirements.",
      size: "large",
      keyFeatures: [
        { title: "Distributed Design", desc: "I implemented an interoperable containerized service system that uses ZeroMQ to communicate with each other." },
        { title: "Hardware Integration", desc: "In order to connect to different kinds of industrial equipment using both common and proprietary protocols, I created C++ protocol adapters." },
        { title: "Backend Services", desc: "I developed the Node.js server, which provides data access and configuration APIs with suitable security measures." },
        { title: "User Interface", desc: "I make use of Vue.js, a browser-based dashboard designed to facilitate system management and display real-time data." },
        { title: "Configuration Management", desc: "In order to enable dynamic updates and service hot-reloading without downtime, I created a centralized configuration system that is controlled by a REST API." },
        { title: "Simulation Environment", desc: "In order to enable reliable development, testing, and CI/CD pipelines without the need for physical equipment, I developed a simulation service that imitates real hardware behavior." },
        { title: "DevOps and Deployment", desc: "I ensured consistent and repeatable deployments across various environments by implementing Docker-based containerization and automated build scripts for all services." },
        { title: "Data Import/Export", desc: "Through the API, I created a versatile data management system that allows configurations and measurement data to be imported and exported in a variety of formats." },
        { title: "High-Availability Load Balancer", desc: "By automatically rerouting traffic from inactive nodes, I was able to distribute requests across multiple servers using a Node.js load balancer, which ensures high availability and fault tolerance." },
        { title: "Industrial Protocol Servers", desc: "To enable the system to expose its data to external PLCs and control systems, I developed server implementations for Siemens S7, Modbus TCP, and proprietary protocols." },
        { title: "Low-Latency Data Sharing", desc: "In order to facilitate ultra-low-latency data exchange between crucial C++ and Node.js services, I used shared memory for inter-process communication." },
        { title: "Automated Deployment and Management", desc: "For efficient SSH deployments, I developed Python-based automation scripts with Fabric, and for reliable service management in production settings, I developed installer." },
        { title: "Real-Time Data Broadcasting", desc: "For fast, low-latency updates, I put in place threaded data sender modules that broadcast processed data to clients via UDP/Radio and push it to internal queues." },
        { title: "Redundant Data Clients", desc: "In order to ensure dependable data reception even in difficult network conditions, I designed data clients that support both TCP and UDP and have optional radio/UDP modes for redundancy." },
        { title: "Secure User and Access Management", desc: "To safeguard sensitive API endpoints and system configurations, I put in place a thorough security layer that included role-based access control, user management, and authentication." },
        { title: "Advanced Monitoring and Visualization", desc: "In addition to a shared memory preview tool for low-level diagnostics, I developed web-based dashboards for real-time system status, event logs, and measurement data." },
        { title: "Automated Execution Daemon", desc: "In order to automate system startup, I designed a Python-based service that managed databases with backup and restore tools, loaded configurations, and initialized hardware modules." },
        { title: "Node.js C++ Addons", desc: "To bridge the gap between low-level system resources and high-level JavaScript, I developed native C++ addons for Node.js using `node-gyp`. This greatly enhanced performance for data-intensive operations by enabling direct, fast access to industrial protocol libraries and shared memory from the Node.js backend." },
        { title: "Python C++ Extensions for Automation", desc: "To make the essential features of the C++ services accessible to automation and management scripts, I developed C++ extensions for Python. Combining Python's user-friendliness with C++'s speed, this allowed Python scripts to effectively communicate with the system's shared memory and carry out configuration tasks." },
        { title: "Cross-Platform Build System", desc: "Using CMake and shell scripts, I established a complete build system that facilitates cross-compilation for ARM architectures. This keeps the build process consistent across all platforms and allows the deployment of performance-critical C++ services on embedded devices." },
        { title: "Multi-Format Data Serialization", desc: "I used a variety of formats to implement effective data serialization, such as MessagePack for small, fast network communication, BSON for database storage, and nlohmann/json for human-readable configuration. This adaptability improved system-wide performance and interoperability." },
        { title: "Dynamic PDF Report Generation", desc: "Using libraries like `pdfkit`, I developed a feature that allows it to dynamically generate PDF reports of measurement data and system status. This made it possible for users to export expertly formatted documents straight from the web interface for analysis and documentation." }
      ],
      technologies: "C++17/20, Node.js (TypeScript, Express), Python3, Vue.js, Pinia, Bootstrap-Vue, ECharts, SQLite, MongoDB, RethinkDB, ZeroMQ, Docker, Snap7, libmodbus, JWT, WebSockets, Flask, Fabric, CMake"
    }
  ]
};
