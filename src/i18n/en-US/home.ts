// Home page translations - open source focused landing
export default {
  title: 'Open source labs & tools',

  heroTitle: 'Open source labs & tools',
  heroSubtitle:
    'I publish experiments on GitHub: small labs and tools in Go, C++, Python, and TypeScript. They cover messaging, embedded systems, data pipelines, protocol tooling, and local LLMs.',
  heroSignature: '— Asura Codes',

  interestsTitle: 'What I explore',
  interests: [
    {
      id: 'distributedMessaging',
      title: 'Distributed messaging',
      description:
        'I run labs with MQTT, NATS JetStream, and ZeroMQ to study how resilient messaging behaves under load.',
      icon: 'mdi-swap-horizontal',
    },
    {
      id: 'embeddedSystems',
      title: 'Embedded systems',
      description:
        'ESP32, RP2040, STM32, nRF. A containerized MCU workspace with reproducible toolchains so setup does not get in the way.',
      icon: 'mdi-chip',
    },
    {
      id: 'dataPipelines',
      title: 'Data pipelines',
      description:
        'PostgreSQL, Fluent Bit, and time-series patterns for understanding how data moves and where it fails.',
      icon: 'mdi-database',
    },
    {
      id: 'protocolTooling',
      title: 'Protocol tooling',
      description:
        'Small utilities for Modbus, SPI/I2C/UART, and other protocols used by embedded and industrial hardware.',
      icon: 'mdi-console-network',
    },
    {
      id: 'agenticApps',
      title: 'Agentic apps',
      description:
        'agentic-lab is a full-stack playground for integrating LLMs into real workflows: Django, Vue 3, WebSockets, and local models.',
      icon: 'mdi-robot',
    },
  ],

  projectsTitle: 'Featured projects',
  projects: [
    {
      id: 'agentic-lab',
      title: 'agentic-lab',
      description:
        'A lab for wiring LLMs into real workflows. Django + Vue 3, WebSocket streaming, ChromaDB for RAG, LangGraph patterns, and multi-provider support.',
      tags: ['Python', 'Django', 'Vue 3', 'LLM', 'RAG'],
      link: 'https://github.com/Asura-Codes/agentic-lab',
    },
    {
      id: 'small-models-lab',
      title: 'small-models-lab',
      description:
        'Evaluate small language models on CPU for RAG, function calling, and safety — no GPU needed. Python with llama.cpp/ONNX, FastAPI, and pytest.',
      tags: ['Python', 'llama.cpp', 'ONNX', 'FastAPI', 'pytest'],
      link: 'https://github.com/Asura-Codes/small-models-lab',
    },
    {
      id: 'ft232rl-protocol-probe',
      title: 'ft232rl-protocol-probe',
      description:
        'Turn an FT232RL breakout into a synchronous bit-bang protocol probe for I2C, SPI, UART, Modbus, and more via CLI or REST API.',
      tags: ['C++', 'POCO', 'libftdi1', 'USB', 'CMake'],
      link: 'https://github.com/Asura-Codes/ft232rl-protocol-probe',
    },
    {
      id: 'mcu-lab',
      title: 'mcu-lab',
      description:
        'Containerized MCU workspace with DevContainer builds, VS Code tasks, and templates for ESP32, RP2040, STM32, and nRF.',
      tags: ['C', 'C++', 'ESP-IDF', 'Pico SDK', 'Docker'],
      link: 'https://github.com/Asura-Codes/mcu-lab',
    },
    {
      id: 'go-zeromq-labs',
      title: 'go-zeromq-labs',
      description:
        '24 standalone labs exploring distributed patterns with ZeroMQ and Go: XPUB/XSUB, ROUTER-DEALER, Curve25519, consensus, and failover.',
      tags: ['Go', 'ZeroMQ', 'Docker', 'Networking'],
      link: 'https://github.com/Asura-Codes/go-zeromq-labs',
    },
    {
      id: 'nats-jetstream-laboratory',
      title: 'nats-jetstream-laboratory',
      description:
        '30 experiments with NATS and JetStream: persistence, deduplication, sagas, event sourcing, stream mirroring, and observability.',
      tags: ['Go', 'NATS', 'JetStream', 'Distributed Systems'],
      link: 'https://github.com/Asura-Codes/nats-jetstream-laboratory',
    },
    {
      id: 'mosquitto-go-explorations',
      title: 'mosquitto-go-explorations',
      description:
        '18 labs for learning MQTT with Eclipse Mosquitto and Go: QoS, session persistence, bridging, TLS, WebSockets, and external authentication.',
      tags: ['Go', 'MQTT', 'Mosquitto', 'Docker'],
      link: 'https://github.com/Asura-Codes/mosquitto-go-explorations',
    },
    {
      id: 'fluentbit-replication-lab',
      title: 'fluentbit-replication-lab',
      description:
        'Containerized Fluent Bit pipeline lab with Go producers, syslog routing, and automated verification for log replication scenarios.',
      tags: ['Go', 'Fluent Bit', 'Docker', 'Observability'],
      link: 'https://github.com/Asura-Codes/fluentbit-replication-lab',
    },
    {
      id: 'go-postgres-explorations',
      title: 'go-postgres-explorations',
      description:
        '20 experiments mastering advanced PostgreSQL from the Go side: indexing, locking, partitioning, and replication.',
      tags: ['Go', 'PostgreSQL', 'SQL', 'Docker'],
      link: 'https://github.com/Asura-Codes/go-postgres-explorations',
    },
  ],

  viewProject: 'View on GitHub',
  moreProjects: 'See all projects',
  moreProjectsLink: '/github',
};
