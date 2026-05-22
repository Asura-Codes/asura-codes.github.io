// Tłumaczenia strony GitHub
export default {
  title: 'Moje kreatywne projekty i autorskie treści',
  description: 'Poznaj projekty i materiały, które wykonałem, by wyrazić swoją kreatywność i pasję do technologii.',

  // Sekcje
  sections: {
    articles: 'Artykuły i Zasoby',
    applications: 'Projekty'
  },

  // Artykuły
  articles: {
    title: 'Artykuły i Zasoby',
    description: 'Wszechstronne artykuły i łatwe w użyciu podręczniki referencyjne dotyczące szeregu metodologii i rozwiązań programistycznych.',
    entries: [
      {
        title: 'Zdalny GDB dla Raspberry Pi',
        description: 'Konfiguracja zdalnego debugowania z GDB dla Raspberry Pi Compute Module 4.',
        topics: ['Konfiguracja środowiska', 'Konfiguracja', 'Rozwiązywanie problemów'],
        link: 'https://pisanie.dev/cheetsheets/RemoteGDB/%C5%9Brodowisko-i-konfiguracja.html',
        language: 'polish'
      },
      {
        title: 'Wprowadzenie do programowania w C',
        description: 'Kompleksowy przewodnik po podstawach programowania w C.',
        topics: ['Składnia', 'Zarządzanie pamięcią', 'Biblioteka standardowa'],
        link: 'https://pisanie.dev/wprowadzenie-do-c/',
        language: 'polish'
      }
    ]
  },

  // Aplikacje
  applications: {
    title: 'Projekty',
    description: 'Projekty i implementacje kodu, które opracowałem w celu rozwiązania różnych wyzwań.',
    entries: [
      {
        title: 'TypeScript z komponentami blokowymi Vuetify 3',
        description: 'Budowanie interfejsów opartych na blokach z TypeScript i Vuetify 3.',
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
          'Architektura komponentów',
          'Integracja TypeScript',
          'Responsywny design',
          'Integracja WebAssembly',
          'Narzędzia Monorepo',
          'Testowanie i linting'
        ],
        link: 'https://pisanie.dev/ts-vuetify3-blocks-vm/'
      },
      {
        title: 'Projekty 3D Thingiverse',
        description: 'Kolekcja moich autorskich modeli 3D do druku opublikowanych na platformie Thingiverse.',
        technologies: [
          'Blender',
          'Modelowanie 3D',
          'Ultimaker',
          'Druk 3D'
        ],
        topics: [
          'Funkcjonalne przedmioty domowe i gadżety',
          'Kreatywne rozwiązania codziennych problemów',
          'Projekty open-source dla społeczności',
          'Zoptymalizowane pod kątem druku 3D FDM'
        ],
        link: 'https://www.thingiverse.com/asuracodes/designs'
      },
      {
        title: 'Seria Laboratoriów MQTT z Mosquitto i Go',
        description: 'Ustrukturyzowana seria 18 samodzielnych laboratoriów do nauki MQTT przy użyciu brokera Eclipse Mosquitto i języka Go. Laboratoria stopniowo obejmują podstawy wymiany wiadomości, jakość usługi (QoS), trwałość sesji, mostkowanie brokerów, bezpieczeństwo TLS, topologie wysokiej dostępności oraz integrację zewnętrznego uwierzytelniania.',
        technologies: [
          'Go',
          'Eclipse Mosquitto',
          'Paho MQTT',
          'Docker',
          'Docker Compose',
          'PowerShell'
        ],
        topics: [
          'Wzorce komunikacji MQTT',
          'Jakość usługi (QoS)',
          'Trwałość sesji',
          'Bezpieczeństwo TLS/SSL',
          'Mostkowanie i topologie brokerów',
          'Uwierzytelnianie i listy ACL',
          'MQTT v5',
          'WebSockets'
        ],
        link: 'https://github.com/Asura-Codes/mosquitto-go-explorations'
      },
      {
        title: 'Laboratorium NATS i JetStream',
        description: 'Kolekcja 30 samodzielnych laboratoriów eksplorujących NATS i JetStream wykraczając poza podstawowe zastosowania. Tematy obejmują rozproszone transakcje, źródłowanie zdarzeń, odtwarzanie po awarii, wielodostosowalność, obserwowalność oraz interoperacyjność z MQTT.',
        technologies: [
          'Go',
          'NATS',
          'JetStream',
          'Docker',
          'Docker Compose',
          'PowerShell'
        ],
        topics: [
          'Trwałość i deduplikacja w JetStream',
          'Rozproszone transakcje (wzorzec Saga)',
          'Źródłowanie zdarzeń',
          'Odtwarzanie po awarii i replikacja strumieni',
          'Wielodostosowalność i bezpieczeństwo',
          'Rozproszone śledzenie (OpenTelemetry)',
          'Interoperacyjność z MQTT'
        ],
        link: 'https://github.com/Asura-Codes/nats-jetstream-laboratory'
      },
      {
        title: 'Zaawansowane Systemy Rozproszone z ZeroMQ i Go',
        description: 'Zbiór 24 samodzielnych laboratoriów eksplorujących zaawansowane wzorce systemów rozproszonych z ZeroMQ i Go, obejmujący rzeczywiste scenariusze: od potoków danych o wysokiej częstotliwości i orkiestracji mikroserwisów po bezpieczeństwo transportu i konsensus rozproszony.',
        technologies: [
          'Go',
          'ZeroMQ',
          'libzmq',
          'Docker',
          'Docker Compose',
          'PowerShell'
        ],
        topics: [
          'Zaawansowane wzorce komunikacji (XPUB/XSUB, ROUTER-DEALER)',
          'Niezawodność i przerywnik obwodu',
          'Bezpieczeństwo transportu (Curve25519 / Ironhouse)',
          'Konsensus rozproszony i wybór lidera',
          'Sieciowanie bez kopiowania (Zero-Copy)',
          'Równoważenie obciążenia i przełączanie awaryjne'
        ],
        link: 'https://github.com/Asura-Codes/go-zeromq-labs'
      },
      {
        title: 'Laboratorium MCU',
        description: 'Wieloplatformowe środowisko do tworzenia oprogramowania mikrokontrolerów z szablonami budowania, przestrzeniami roboczymi VS Code oraz DevContainerem zawierającym preinstalowane toolchainy (ESP-IDF, Pico SDK, Zephyr). Buduj w kontenerze, programuj na Windows i korzystaj z zadań, skryptów i wariantów OpenOCD.',
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
          'Szablony firmware (ESP32, RP2040, STM32, nRF)',
          'Budowanie w DevContainer i powtarzalne toolchainy',
          'Flashowanie i przepływy pracy OpenOCD',
          'Monitor szeregowy i debugowanie (GDB)',
          'Zadania specyficzne dla platformy'
        ],
        link: 'https://github.com/Asura-Codes/mcu-lab'
      },
      {
        title: 'Analizator protokołu FT232RL (Synchronous Bit-Bang)',
        description: 'Narzędzie w C++, które zamienia breakout FT232RL w analizator protokołów. Używa synchronizowanego trybu bit-bang dla deterministycznego taktowania i obsługuje I2C, SPI, UART oraz protokoły wyższego poziomu. Zawiera CLI, REST API, automatyczne wykrywanie pinów oraz narzędzia do przechwytywania i dekodowania.',
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
          'Synchronizowany tryb bit-bang',
          'Automatyczne wykrywanie pinów',
          'Przechwytywanie i dekodowanie SPI/I2C/UART',
          'CLI i REST API',
          'Budowanie z vcpkg i wieloplatformowe konfiguracje'
        ],
        link: 'https://github.com/Asura-Codes/ft232rl-protocol-probe'
      }
    ]
  },

  // Mapa języków dla flag i nazw
  languages: {
    english: { name: 'Angielski', flag: '🇬🇧' },
    polish: { name: 'Polski', flag: '🇵🇱' },
    spanish: { name: 'Hiszpański', flag: '🇪🇸' },
    german: { name: 'Niemiecki', flag: '🇩🇪' },
    french: { name: 'Francuski', flag: '🇫🇷' }
    // Dodaj więcej w razie potrzeby
  },

  // Wspólne
  viewResource: 'Zobacz zasób',
  viewProject: 'Zobacz projekt',
  viewOnGitHub: 'Zobacz na GitHub'
};
