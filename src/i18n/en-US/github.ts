// Github page translations
export default {
  title: 'My Creative Projects & Original Content',
  description: 'Explore the projects and resources I have crafted to express my creativity and passion for technology.',

  // Sections
  sections: {
    articles: 'Articles & Resources',
    applications: 'Projects'
  },

  // Articles
  articles: {
    title: 'Articles & Resources',
    description: 'Comprehensive articles and easy-to-use reference manuals for a range of development methodologies and technologies.',
    entries: [
      {
        title: 'Remote GDB for Raspberry Pi',
        description: 'Configure remote debugging with GDB for Raspberry Pi Compute Module 4.',
        topics: ['Environment Setup', 'Configuration', 'Troubleshooting'],
        link: 'https://pisanie.dev/cheetsheets/RemoteGDB/%C5%9Brodowisko-i-konfiguracja.html',
        language: 'Polish'
      },
      {
        title: 'Introduction to C Programming',
        description: 'Comprehensive guide to C programming fundamentals.',
        topics: ['Syntax', 'Memory Management', 'Standard Library'],
        link: 'https://pisanie.dev/wprowadzenie-do-c/',
        language: 'Polish'
      }
    ]
  },

  // Applications
  applications: {
    title: 'Projects',
    description: "Projects and code implementations I've developed to solve various challenges.",
    entries: [
      {
        title: 'TypeScript with Vuetify 3 Block Components',
        description: 'Building block-based interfaces with TypeScript and Vuetify 3.',
        technologies: [
          'Vue 3',
          'TypeScript',
          'Vuetify 3',
          'Vite',
          'Emscripten',
          'WebAssembly',
          'Vitest',
          'ESLint',
          'Prettier',
          'Monorepo'
        ],
        topics: [
          'Component Architecture',
          'TypeScript Integration',
          'Responsive Design',
          'WebAssembly Integration',
          'Monorepo Tooling',
          'Testing & Linting'
        ],
        link: 'https://pisanie.dev/ts-vuetify3-blocks-vm/'
      },
      {
        title: 'Thingiverse 3D Designs',
        description: 'Collection of my original 3D printable designs and models published on Thingiverse.',
        technologies: [
          'Blender',
          '3D Modeling',
          'Ultimaker',
          '3D Printing'
        ],
        topics: [
          'Functional household items and gadgets',
          'Creative solutions for everyday problems',
          'Open-source designs for community use',
          'Optimized for FDM 3D printing'
        ],
        link: 'https://www.thingiverse.com/asuracodes/designs'
      },
      {
        title: 'MQTT Lab Series with Mosquitto & Go',
        description: 'A structured series of 18 standalone laboratories for mastering MQTT using the Eclipse Mosquitto broker and Go. Labs progress from basic messaging through QoS, session persistence, broker bridging, TLS security, high availability topologies, and external authentication integration.',
        technologies: [
          'Go',
          'Eclipse Mosquitto',
          'Paho MQTT',
          'Docker',
          'Docker Compose',
          'PowerShell'
        ],
        topics: [
          'MQTT Messaging Patterns',
          'Quality of Service (QoS)',
          'Session Persistence',
          'TLS/SSL Security',
          'Broker Bridging & Topologies',
          'Authentication & ACLs',
          'MQTT v5',
          'WebSockets'
        ],
        link: 'https://github.com/Asura-Codes/mosquitto-go-explorations'
      },
      {
        title: 'NATS & JetStream Laboratory',
        description: 'A collection of 30 standalone laboratories exploring NATS and JetStream beyond basic usage. Topics include distributed transactions, event sourcing, disaster recovery, multi-tenancy, observability, and MQTT interoperability.',
        technologies: [
          'Go',
          'NATS',
          'JetStream',
          'Docker',
          'Docker Compose',
          'PowerShell'
        ],
        topics: [
          'JetStream Persistence & Deduplication',
          'Distributed Transactions (Saga Pattern)',
          'Event Sourcing',
          'Disaster Recovery & Stream Mirroring',
          'Multi-Tenancy & Security',
          'Distributed Tracing (OpenTelemetry)',
          'MQTT Interoperability'
        ],
        link: 'https://github.com/Asura-Codes/nats-jetstream-laboratory'
      },
      {
        title: 'Advanced Distributed Systems with ZeroMQ & Go',
        description: 'A curriculum of 24 standalone laboratories exploring advanced distributed system patterns with ZeroMQ and Go, covering real-world scenarios from high-frequency data pipelines and microservices orchestration to transport security and distributed consensus.',
        technologies: [
          'Go',
          'ZeroMQ',
          'libzmq',
          'Docker',
          'Docker Compose',
          'PowerShell'
        ],
        topics: [
          'Advanced Messaging Patterns (XPUB/XSUB, ROUTER-DEALER)',
          'Reliability & Circuit Breaking',
          'Transport Security (Curve25519 / Ironhouse)',
          'Distributed Consensus & Leader Election',
          'Zero-Copy Networking',
          'Load Balancing & Active-Passive Failover'
        ],
        link: 'https://github.com/Asura-Codes/go-zeromq-labs'
      },
      {
        title: 'MCU Lab',
        description: 'Multi-platform microcontroller workspace with build templates, VS Code workspaces and a DevContainer containing preinstalled toolchains (ESP-IDF, Pico SDK, Zephyr). Build in-container, flash on Windows and use provided tasks, scripts and OpenOCD variants.',
        technologies: [
          'C',
          'C++',
          'ESP-IDF',
          'Pico SDK',
          'Zephyr',
          'PlatformIO',
          'CMake',
          'OpenOCD',
          'Docker'
        ],
        topics: [
          'Firmware templates (ESP32, RP2040, STM32, nRF)',
          'DevContainer builds & reproducible toolchains',
          'Flashing & OpenOCD workflows',
          'Serial monitor and debugging (GDB)',
          'Platform-specific build tasks'
        ],
        link: 'https://github.com/Asura-Codes/mcu-lab'
      },
      {
        title: 'FT232RL Protocol Probe (Synchronous Bit-Bang)',
        description: 'C++ tool that turns an FT232RL breakout into a protocol probe. Uses synchronous bit-bang mode for deterministic timing and supports I2C, SPI, UART and higher-level protocols. Includes CLI, REST API, pin discovery and capture/decoding utilities.',
        technologies: [
          'C++',
          'POCO Framework',
          'libftdi1',
          'CMake',
          'vcpkg',
          'USB',
          'UART'
        ],
        topics: [
          'Synchronous Bit-Bang probing',
          'Automated pin discovery',
          'SPI/I2C/UART capture & decoding',
          'CLI and REST API',
          'Building with vcpkg & cross-platform setups'
        ],
        link: 'https://github.com/Asura-Codes/ft232rl-protocol-probe'
      }
    ]
  },

  // Common
  viewResource: 'View Resource',
  viewProject: 'View Project',
  viewOnGitHub: 'View on GitHub',

  // Language map for flags and names
  languages: {
    english: { name: 'English', flag: '🇬🇧' },
    polish: { name: 'Polish', flag: '🇵🇱' },
    spanish: { name: 'Spanish', flag: '🇪🇸' },
    german: { name: 'German', flag: '🇩🇪' },
    french: { name: 'French', flag: '🇫🇷' }
    // Add more as needed
  }
};
