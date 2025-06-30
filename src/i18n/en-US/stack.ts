// Stack page translations - Structured version with skillCards array
export default {
  title: 'Technology Stack',
  frontendTitle: 'Frontend',
  backendTitle: 'Backend',
  databaseTitle: 'Databases',
  toolsTitle: 'Tools & DevOps',

  // Page details
  pageTitle: 'Technology Stack',
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
      id: 'cppLibraries',
      title: 'C++ Frameworks & Libraries',
      skills: [
        {
          id: 'qt',
          name: 'Qt (Widgets, Signals/Slots)',
          description: 'Cross-platform GUI, visualization, and user interaction for industrial control panels',
          subSkills: [
            { id: 'qtCore', name: 'QtCore', description: 'Core non-GUI functionality: event loop, signals/slots, containers, threading' },
            { id: 'qtGui', name: 'QtGui', description: '2D graphics, imaging, fonts, and windowing system integration' },
            { id: 'qtWidgets', name: 'QtWidgets', description: 'Traditional desktop widgets and UI controls' },
            { id: 'qtNetwork', name: 'QtNetwork', description: 'Networking: TCP/UDP sockets, HTTP, SSL, and network protocols' },
            { id: 'qtTest', name: 'QtTest', description: 'Unit testing framework for Qt applications' },
            { id: 'qtConcurrent', name: 'QtConcurrent', description: 'High-level APIs for parallel programming' },
            { id: 'qtSql', name: 'QtSql', description: 'SQL database integration and ORM-like features' },
            { id: 'qtXml', name: 'QtXml', description: 'XML parsing and manipulation' },
            { id: 'qtSvg', name: 'QtSvg', description: 'SVG rendering and manipulation' },
            { id: 'qtMultimedia', name: 'QtMultimedia', description: 'Audio, video, and multimedia support' },
            { id: 'qtCharts', name: 'QtCharts', description: 'Charting and data visualization' },
            { id: 'qtSerialPort', name: 'QtSerialPort', description: 'Serial port communication' },
            { id: 'qtWebSockets', name: 'QtWebSockets', description: 'WebSocket protocol support' },
            { id: 'qtWebEngine', name: 'QtWebEngine', description: 'Web content rendering using Chromium engine' }
          ]
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
          description: 'Threading, networking, HTTP/WebSocket servers, MQTT integration, and database abstraction',
          subSkills: [
            { id: 'pocoNet', name: 'Poco::Net', description: 'Networking, HTTP, WebSocket, TCP/UDP, SMTP, FTP, and SSL support' },
            { id: 'pocoData', name: 'Poco::Data', description: 'Database abstraction and ORM-like features for SQL databases' },
            { id: 'pocoUtil', name: 'Poco::Util', description: 'Application utilities, configuration, and command-line parsing' },
            { id: 'pocoJSON', name: 'Poco::JSON', description: 'JSON parsing, serialization, and manipulation' },
            { id: 'pocoXML', name: 'Poco::XML', description: 'XML parsing and DOM manipulation' },
            { id: 'pocoMQTT', name: 'Poco::MQTT', description: 'MQTT protocol support for IoT and messaging' },
            { id: 'pocoFoundation', name: 'Poco::Foundation', description: 'Core classes: threading, file system, logging, events, and utilities' },
            { id: 'pocoCrypto', name: 'Poco::Crypto', description: 'Cryptography, SSL, and certificate management' },
            { id: 'pocoZip', name: 'Poco::Zip', description: 'ZIP archive creation and extraction' },
          ]
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
          id: 'libiconv',
          name: 'libiconv',
          description: 'Standard C library for character set conversion (encoding transformations, e.g., CP852 to UTF-8)'
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
          description: 'Advanced UI components for MFC applications including ribbons and dockable panels',
          subSkills: [
            { id: 'customization', name: 'Customization', description: 'Advanced customization techniques for BCGControlBar components' },
            { id: 'ribbonIntegration', name: 'Ribbon Integration', description: 'Creating and managing ribbons in MFC applications' },
            { id: 'dockablePanels', name: 'Dockable Panels', description: 'Implementing and managing dockable panels' },
            { id: 'controlBar', name: 'Control Bar', description: 'Developing and customizing toolbars and menus' },
            { id: 'themeCustomization', name: 'Theme Customization', description: 'Creating custom themes for BCG components' },
            { id: 'eventHandling', name: 'Event Handling', description: 'Managing events and inter-component communication' },
            { id: 'accessibility', name: 'Accessibility', description: 'Ensuring accessibility compliance for components' }
          ]
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
          id: 'arrow',
          name: 'Apache Arrow',
          description: 'Columnar in-memory analytics and data interchange format',
          subSkills: [
            { id: 'dataTransformation', name: 'Data Transformation', description: 'Transforming data into columnar format' },
            { id: 'performanceOptimization', name: 'Performance Optimization', description: 'Improving query and data operation performance' },
            { id: 'integration', name: 'Integration', description: 'Integrating with existing systems and data streams' }
          ]
        },
        {
          id: 'cppzmq',
          name: 'cppzmq',
          description: 'C++ binding for ZeroMQ messaging library'
        },
        {
          id: 'duckdb',
          name: 'DuckDB',
          description: 'In-process SQL OLAP database management system',
          subSkills: [
            { id: 'sqlQueries', name: 'SQL Queries', description: 'Writing and optimizing SQL queries for DuckDB' },
            { id: 'dataImportExport', name: 'Data Import/Export', description: 'Importing and exporting data to/from DuckDB' },
            { id: 'performanceTuning', name: 'Performance Tuning', description: 'Optimizing DuckDB database performance' }
          ]
        },
        {
          id: 'fmt',
          name: 'fmt',
          description: 'Modern formatting library for C++'
        },
        {
          id: 'gtest',
          name: 'GoogleTest (gtest)',
          description: 'Unit testing framework for C++'
        },
        {
          id: 'libbson',
          name: 'libbson',
          description: 'BSON library for binary JSON serialization'
        },
        {
          id: 'libuv',
          name: 'libuv',
          description: 'Cross-platform asynchronous I/O library'
        },
        {
          id: 'libwebsockets',
          name: 'libwebsockets',
          description: 'Lightweight C library for WebSockets'
        },
        {
          id: 'mosquitto',
          name: 'Mosquitto',
          description: 'MQTT broker and C/C++ client library'
        },
        {
          id: 'protobuf',
          name: 'Protobuf',
          description: 'Google Protocol Buffers serialization library'
        },
        {
          id: 'pthreads',
          name: 'pthreads',
          description: 'POSIX threads for multithreading support'
        },
        {
          id: 'python3',
          name: 'Python3 (C++ API)',
          description: 'Embedding and extending Python in C++ applications'
        },
        {
          id: 'rapidjson',
          name: 'RapidJSON',
          description: 'Fast JSON parser/generator for C++'
        },
        {
          id: 'snappy',
          name: 'Snappy',
          description: 'Fast compression/decompression library by Google'
        },
        {
          id: 'spdlog',
          name: 'spdlog',
          description: 'Fast C++ logging library'
        },
        {
          id: 'utf8proc',
          name: 'utf8proc',
          description: 'UTF-8 processing library for Unicode'
        },
        {
          id: 'zlib',
          name: 'zlib',
          description: 'Compression library for data streams'
        },
        {
          id: 'zstd',
          name: 'Zstandard (zstd)',
          description: 'Fast compression algorithm by Facebook'
        }
      ]
    },
    {
      id: 'nodePackages',
      title: 'Node.js Packages',
      description: 'Key Node.js packages and libraries used for frontend, backend, utilities, security, and development tooling.',
      skills: [
        {
          id: 'coreFramework',
          name: 'Core Framework & State Management',
          subSkills: [
            { id: 'vue', name: 'vue', description: 'Progressive JavaScript framework for building user interfaces.' },
            { id: 'vueRouter', name: 'vue-router', description: 'Official router for Vue.js, enabling navigation between pages.' },
            { id: 'pinia', name: 'pinia', description: 'State management library for Vue.js applications.' }
          ]
        },
        {
          id: 'uiVisualization',
          name: 'UI & Visualization',
          subSkills: [
            { id: 'bootstrapVue', name: 'bootstrap-vue', description: 'Bootstrap components for Vue.js.' },
            { id: 'vueSidebarMenu', name: 'vue-sidebar-menu', description: 'Sidebar navigation menu for Vue.js.' },
            { id: 'vueNotification', name: 'vue-notification', description: 'Notification system for Vue.js.' },
            { id: 'vueEcharts', name: 'vue-echarts', description: 'ECharts charting library for Vue.js.' }
          ]
        },
        {
          id: 'utilitiesHttp',
          name: 'Utilities & HTTP',
          subSkills: [
            { id: 'axios', name: 'axios', description: 'Promise-based HTTP client for browser and Node.js.' },
            { id: 'lodash', name: 'lodash', description: 'Utility library for data manipulation and functional programming.' }
          ]
        },
        {
          id: 'buildTools',
          name: 'Build Tools & Packaging',
          subSkills: [
            { id: 'vite', name: 'vite', description: 'Next-generation frontend build tool.' },
            { id: 'archiver', name: 'archiver', description: 'Module for creating archives (zip, tar, etc.).' }
          ]
        },
        {
          id: 'typeSafetyLinting',
          name: 'Type Safety & Linting',
          subSkills: [
            { id: 'typescript', name: 'typescript', description: 'Typed superset of JavaScript for safer code.' },
            { id: 'eslint', name: 'eslint', description: 'Pluggable JavaScript linter for code quality.' },
            { id: 'eslintPluginVue', name: 'eslint-plugin-vue', description: 'ESLint plugin for Vue.js code style and best practices.' }
          ]
        },
        {
          id: 'coreServer',
          name: 'Core & Server-Side Libraries',
          subSkills: [
            { id: 'express', name: 'express', description: 'Fast, unopinionated, minimalist web framework for Node.js.' },
            { id: 'bodyParser', name: 'body-parser', description: 'Node.js body parsing middleware.' },
            { id: 'cors', name: 'cors', description: 'Express middleware for enabling CORS.' },
            { id: 'morgan', name: 'morgan', description: 'HTTP request logger middleware for Node.js.' },
            { id: 'nocache', name: 'nocache', description: 'Disable client-side caching in Express.' },
            { id: 'multer', name: 'multer', description: 'Middleware for handling multipart/form-data (file uploads).' },
            { id: 'requestIp', name: 'request-ip', description: 'Middleware to retrieve client IP address.' }
          ]
        },
        {
          id: 'securityValidation',
          name: 'Security & Validation',
          subSkills: [
            { id: 'ajv', name: 'ajv', description: 'JSON schema validator for JavaScript objects.' },
            { id: 'ajvCli', name: 'ajv-cli', description: 'Command-line interface for Ajv JSON schema validator.' },
            { id: 'bcryptjs', name: 'bcryptjs', description: 'Password hashing library.' },
            { id: 'expressJwt', name: 'express-jwt', description: 'JWT authentication middleware for Express.' },
            { id: 'expressJwtPermissions', name: 'express-jwt-permissions', description: 'Permissions middleware for JWT in Express.' },
            { id: 'expressUnless', name: 'express-unless', description: 'Conditionally skip middleware in Express.' },
            { id: 'expressValidator', name: 'express-validator', description: 'Express middleware for validation of request data.' },
            { id: 'jsonwebtoken', name: 'jsonwebtoken', description: 'Implementation of JSON Web Tokens.' }
          ]
        },
        {
          id: 'databaseData',
          name: 'Database & Data Handling',
          subSkills: [
            { id: 'betterSqlite3', name: 'better-sqlite3', description: 'Fast and simple SQLite3 library for Node.js.' },
            { id: 'mongodb', name: 'mongodb', description: 'Official MongoDB driver for Node.js.' },
            { id: 'bson', name: 'bson', description: 'BSON parser and serializer.' },
            { id: 'ioredis', name: 'ioredis', description: 'Robust Redis client for Node.js.' },
            { id: 'rethinkdbTs', name: 'rethinkdb-ts', description: 'RethinkDB driver for TypeScript/Node.js.' }
          ]
        },
        {
          id: 'serializationMessaging',
          name: 'Serialization & Messaging',
          subSkills: [
            { id: 'msgpack', name: '@msgpack/msgpack', description: 'Fast MessagePack implementation for JavaScript.' },
            { id: 'ws', name: 'ws', description: 'Simple WebSocket library for Node.js.' },
            { id: 'zeromq', name: 'zeromq', description: 'High-performance asynchronous messaging library.' }
          ]
        },
        {
          id: 'utilities',
          name: 'Utilities',
          subSkills: [
            { id: 'axios', name: 'axios', description: 'Promise-based HTTP client.' },
            { id: 'bluebird', name: 'bluebird', description: 'Fully featured promise library.' },
            { id: 'csv', name: 'csv', description: 'CSV parsing and stringifying for Node.js.' },
            { id: 'dotenv', name: 'dotenv', description: 'Loads environment variables from .env file.' },
            { id: 'lodash', name: 'lodash', description: 'Utility library for JavaScript.' },
            { id: 'moduleAlias', name: 'module-alias', description: 'Create custom module aliases in Node.js.' },
            { id: 'sprintfJs', name: 'sprintf-js', description: 'JavaScript sprintf implementation for string formatting.' }
          ]
        },
        {
          id: 'pdfArchive',
          name: 'PDF & Archive Generation',
          subSkills: [
            { id: 'archiver', name: 'archiver', description: 'Module for creating archives.' },
            { id: 'jspdf', name: 'jspdf', description: 'PDF generation library for JavaScript.' },
            { id: 'jspdfAutotable', name: 'jspdf-autotable', description: 'Plugin for jsPDF to generate tables in PDFs.' },
            { id: 'pdfkit', name: 'pdfkit', description: 'PDF document generation library for Node.js.' },
            { id: 'pdfkitTable', name: 'pdfkit-table', description: 'Table generation plugin for PDFKit.' }
          ]
        },
        {
          id: 'devTools',
          name: 'Dev Tools & Scripts',
          subSkills: [
            { id: 'copyfiles', name: 'copyfiles', description: 'Copy files easily in npm scripts.' },
            { id: 'httpServer', name: 'http-server', description: 'Simple, zero-configuration command-line HTTP server.' },
            { id: 'nodemon', name: 'nodemon', description: 'Monitor for changes and automatically restart Node.js apps.' },
            { id: 'rimraf', name: 'rimraf', description: 'Deep deletion (rm -rf) for Node.js.' },
            { id: 'tsNode', name: 'ts-node', description: 'TypeScript execution environment for Node.js.' },
            { id: 'tsNodeDev', name: 'ts-node-dev', description: 'TypeScript/Node.js development tool with auto-restart.' },
            { id: 'tsconfigPaths', name: 'tsconfig-paths', description: 'Load TypeScript path mappings at runtime.' }
          ]
        },
        {
          id: 'typescriptTypes',
          name: 'TypeScript & Types',
          subSkills: [
            { id: 'typescript', name: 'typescript', description: 'TypeScript language for type safety.' },
            { id: 'types', name: '@types/*', description: 'TypeScript type definitions for JavaScript libraries.' }
          ]
        },
        {
          id: 'quasarNode',
          name: 'Quasar Framework',
          subSkills: [
            { id: 'quasar', name: 'quasar', description: 'UI framework for Vue.js for responsive web and mobile apps.' }
          ]
        }
      ]
    },
    {
      id: 'pythonPackages',
      title: 'Python Packages',
      description: 'Key Python packages and libraries used for backend development, scripting, testing, automation, and hardware integration.',
      skills: [
        {
          id: 'envMgmt',
          name: 'Environment & Dependency Management',
          subSkills: [
            { id: 'pip', name: 'pip', description: 'The Python package installer.' },
            { id: 'setuptools', name: 'setuptools', description: 'Build system and package management for Python projects.' },
            { id: 'wheel', name: 'wheel', description: 'Built-package format for Python.' },
            { id: 'pycWheel', name: 'pyc-wheel', description: 'Wheel support for compiled Python extensions.' },
            { id: 'virtualenv', name: 'virtualenv', description: 'Tool to create isolated Python environments.' },
            { id: 'venv', name: 'venv', description: 'Standard library module for creating virtual environments.' }
          ]
        },
        {
          id: 'lintingFormatting',
          name: 'Linting & Formatting',
          subSkills: [
            { id: 'pylint', name: 'pylint', description: 'Python static code analysis tool.' },
            { id: 'mypy', name: 'mypy', description: 'Optional static typing for Python.' }
          ]
        },
        {
          id: 'testing',
          name: 'Testing & Coverage',
          subSkills: [
            { id: 'pytest', name: 'pytest', description: 'Testing framework for Python.' },
            { id: 'pytestQt', name: 'pytest-qt', description: 'pytest support for PyQt and PySide applications.' },
            { id: 'coverage', name: 'coverage', description: 'Code coverage measurement for Python.' },
            { id: 'py', name: 'py', description: 'Library for Python code and test discovery.' }
          ]
        },
        {
          id: 'webFrameworks',
          name: 'Web Frameworks',
          subSkills: [
            { id: 'flask', name: 'flask', description: 'Micro web framework for Python.' },
            { id: 'flaskCors', name: 'flask-cors', description: 'CORS support for Flask.' },
            { id: 'fastapi', name: 'FastAPI', description: 'Modern, fast web framework for building APIs.' },
            { id: 'gevent', name: 'gevent', description: 'Coroutine-based networking library.' }
          ]
        },
        {
          id: 'dataScience',
          name: 'Data Science & Visualization',
          subSkills: [
            { id: 'numpy', name: 'numpy', description: 'Fundamental package for scientific computing.' },
            { id: 'pandas', name: 'pandas', description: 'Data analysis and manipulation tool.' },
            { id: 'scipy', name: 'scipy', description: 'Scientific and technical computing library.' },
            { id: 'matplotlib', name: 'matplotlib', description: 'Comprehensive library for creating static, animated, and interactive visualizations.' },
            { id: 'jupyter', name: 'jupyter', description: 'Interactive computing notebooks.' },
            { id: 'notebook', name: 'notebook', description: 'Jupyter interactive notebook server.' },
          ]
        },
        {
          id: 'database',
          name: 'Database & ORM',
          subSkills: [
            { id: 'rethinkdb', name: 'rethinkdb', description: 'Python driver for RethinkDB.' },
            { id: 'redis', name: 'redis', description: 'Python client for Redis key-value store.' }
          ]
        },
        {
          id: 'excel',
          name: 'Excel & Office',
          subSkills: [
            { id: 'openpyxl', name: 'openpyxl', description: 'Read/write Excel 2010 xlsx/xlsm/xltx/xltm files.' },
          ]
        },
        {
          id: 'networking',
          name: 'Networking & Communication',
          subSkills: [
            { id: 'requests', name: 'requests', description: 'HTTP library for Python.' },
            { id: 'paramiko', name: 'paramiko', description: 'SSH2 protocol library for Python.' },
            { id: 'ping3', name: 'ping3', description: 'Pure Python3 version of ICMP ping.' }
          ]
        },
        {
          id: 'hardware',
          name: 'Hardware & IoT',
          subSkills: [
            { id: 'smbus2', name: 'smbus2', description: 'SMBus/I2C interface for Python.' },
            { id: 'rpiGpio', name: 'rpi.gpio', description: 'GPIO interface for Raspberry Pi.' }
          ]
        },
        {
          id: 'gui',
          name: 'GUI & Desktop',
          subSkills: [
            { id: 'pyqt5', name: 'pyqt5', description: 'Python bindings for Qt5.' }
          ]
        },
        {
          id: 'packaging',
          name: 'Packaging & Distribution',
          subSkills: [
            { id: 'pyinstaller', name: 'pyinstaller', description: 'Bundle Python applications into stand-alone executables.' }
          ]
        },
        {
          id: 'parsing',
          name: 'Parsing & Web Scraping',
          subSkills: [
            { id: 'lxml', name: 'lxml', description: 'Powerful and Pythonic XML and HTML processing library.' },
            { id: 'htmlgenerator', name: 'htmlgenerator', description: 'HTML generation for Python.' }
          ]
        },
        {
          id: 'utilities',
          name: 'Utilities & Misc',
          subSkills: [
            { id: 'pythonDateutil', name: 'python-dateutil', description: 'Extensions to the standard datetime module.' },
            { id: 'invoke', name: 'invoke', description: 'Pythonic task execution tool & library.' }
          ]
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
