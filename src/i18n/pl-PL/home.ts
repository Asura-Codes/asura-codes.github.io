// Tłumaczenia strony głównej - landing page z projektami open source
export default {
  title: 'Laboratoria i narzędzia open source',

  heroTitle: 'Laboratoria i narzędzia open source',
  heroSubtitle:
    'Publikuję eksperymenty na GitHubie: małe laboratoria i narzędzia w Go, C++, Pythonie i TypeScript. Dotyczą komunikacji, systemów wbudowanych, potoków danych, narzędzi protokołowych i lokalnych LLM.',
  heroSignature: '— Asura Codes',

  interestsTitle: 'Czym się zajmuję',
  interests: [
    {
      id: 'distributedMessaging',
      title: 'Komunikacja rozproszona',
      description:
        'Prowadzę laboratoria z MQTT, NATS JetStream i ZeroMQ, żeby badać, jak odporne systemy przesyłania wiadomości zachowują się pod obciążeniem.',
      icon: 'mdi-swap-horizontal',
    },
    {
      id: 'embeddedSystems',
      title: 'Systemy wbudowane',
      description:
        'ESP32, RP2040, STM32, nRF. Kontenerowe środowisko MCU z powtarzalnymi toolchainami, żeby konfiguracja nie stała na przeszkodzie.',
      icon: 'mdi-chip',
    },
    {
      id: 'dataPipelines',
      title: 'Potoki danych',
      description:
        'PostgreSQL, Fluent Bit i wzorce szeregów czasowych po to, by rozumieć, jak dane płyną i gdzie się psują.',
      icon: 'mdi-database',
    },
    {
      id: 'protocolTooling',
      title: 'Narzędzia protokołowe',
      description:
        'Małe narzędzia do Modbusa, SPI/I2C/UART i innych protokołów używanych przez sprzęt wbudowany i przemysłowy.',
      icon: 'mdi-console-network',
    },
    {
      id: 'agenticApps',
      title: 'Aplikacje agentowe',
      description:
        'agentic-lab to full-stackowe pole do testów: integrowanie LLM z realnymi przepływami pracy, Django, Vue 3, WebSockety i lokalne modele.',
      icon: 'mdi-robot',
    },
  ],

  projectsTitle: 'Wybrane projekty',
  projects: [
    {
      id: 'agentic-lab',
      title: 'agentic-lab',
      description:
        'Laboratorium do podpinania LLM do realnych przepływów pracy. Django + Vue 3, streaming WebSocket, RAG w ChromaDB, wzorce LangGraph i wsparcie wielu dostawców.',
      tags: ['Python', 'Django', 'Vue 3', 'LLM', 'RAG'],
      link: 'https://github.com/Asura-Codes/agentic-lab',
    },
    {
      id: 'small-models-lab',
      title: 'small-models-lab',
      description:
        'Ocena małych modeli językowych na CPU pod kątem RAG, function calling i bezpieczeństwa — bez GPU. Python z llama.cpp/ONNX, FastAPI i pytest.',
      tags: ['Python', 'llama.cpp', 'ONNX', 'FastAPI', 'pytest'],
      link: 'https://github.com/Asura-Codes/small-models-lab',
    },
    {
      id: 'ft232rl-protocol-probe',
      title: 'ft232rl-protocol-probe',
      description:
        'Zamień moduł FT232RL w synchroniczny analizator protokołów bit-bang dla I2C, SPI, UART, Modbus i innych przez CLI lub REST API.',
      tags: ['C++', 'POCO', 'libftdi1', 'USB', 'CMake'],
      link: 'https://github.com/Asura-Codes/ft232rl-protocol-probe',
    },
    {
      id: 'mcu-lab',
      title: 'mcu-lab',
      description:
        'Kontenerowe środowisko MCU z budowaniami w DevContainer, zadaniami VS Code i szablonami dla ESP32, RP2040, STM32 i nRF.',
      tags: ['C', 'C++', 'ESP-IDF', 'Pico SDK', 'Docker'],
      link: 'https://github.com/Asura-Codes/mcu-lab',
    },
    {
      id: 'go-zeromq-labs',
      title: 'go-zeromq-labs',
      description:
        '24 samodzielne laboratoria eksplorujące rozproszone wzorce z ZeroMQ i Go: XPUB/XSUB, ROUTER-DEALER, Curve25519, konsensus i failover.',
      tags: ['Go', 'ZeroMQ', 'Docker', 'Networking'],
      link: 'https://github.com/Asura-Codes/go-zeromq-labs',
    },
    {
      id: 'nats-jetstream-laboratory',
      title: 'nats-jetstream-laboratory',
      description:
        '30 eksperymentów z NATS i JetStream: trwałość, deduplikacja, sagas, event sourcing, replikacja strumieni i obserwowalność.',
      tags: ['Go', 'NATS', 'JetStream', 'Systemy rozproszone'],
      link: 'https://github.com/Asura-Codes/nats-jetstream-laboratory',
    },
    {
      id: 'mosquitto-go-explorations',
      title: 'mosquitto-go-explorations',
      description:
        '18 laboratoriów do nauki MQTT z brokerem Eclipse Mosquitto i Go: QoS, trwałość sesji, mostkowanie, TLS, WebSockety i zewnętrzne uwierzytelnianie.',
      tags: ['Go', 'MQTT', 'Mosquitto', 'Docker'],
      link: 'https://github.com/Asura-Codes/mosquitto-go-explorations',
    },
    {
      id: 'fluentbit-replication-lab',
      title: 'fluentbit-replication-lab',
      description:
        'Kontenerowe laboratorium potoku Fluent Bit z producentami w Go, routingiem syslog i automatyczną weryfikacją scenariuszy replikacji logów.',
      tags: ['Go', 'Fluent Bit', 'Docker', 'Obserwowalność'],
      link: 'https://github.com/Asura-Codes/fluentbit-replication-lab',
    },
    {
      id: 'go-postgres-explorations',
      title: 'go-postgres-explorations',
      description:
        '20 eksperymentów mających na celu opanowanie zaawansowanych zagadnień PostgreSQL z perspektywy Go: indeksy, blokady, partycjonowanie i replikacja.',
      tags: ['Go', 'PostgreSQL', 'SQL', 'Docker'],
      link: 'https://github.com/Asura-Codes/go-postgres-explorations',
    },
  ],

  viewProject: 'Zobacz na GitHub',
  moreProjects: 'Zobacz wszystkie projekty',
  moreProjectsLink: '/github',
};
