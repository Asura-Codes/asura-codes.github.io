// Stack page translations - Structured version with skillCards array
export default {
  title: 'Mój Stos Technologiczny',
  frontendTitle: 'Frontend',
  backendTitle: 'Backend',
  databaseTitle: 'Bazy danych',
  toolsTitle: 'Narzędzia i DevOps',

  // Szczegóły strony
  pageTitle: 'Stos Technologiczny i Ekspertyza',
  introduction: 'Jako programista moim głównym celem jest tworzenie niezawodnych, wydajnych rozwiązań. Pracowałem nad tworzeniem wieloplatformowych interfejsów graficznych, architekturą sterowaną zdarzeniami, systemami pamięci współdzielonej oraz nowoczesnym językiem C++ (C++20/17). Miałem okazję wdrożyć skuteczne rozwiązania w zakresie archiwizacji danych oraz stworzyć systemy rozproszone z możliwością komunikacji w czasie rzeczywistym. Poniżej przedstawiam zarys moich kluczowych kompetencji i stosowanych technologii. Umiejętności te doskonaliłem podczas realizacji różnych projektów związanych z tworzeniem oprogramowania, takich jak rozproszone systemy sterowania, aplikacje wieloplatformowe oraz rozwiązania do gromadzenia i archiwizacji danych.',

  skillCards: [
    {
      id: 'coreLanguages',
      title: 'Podstawowe Języki Programowania',
      skills: [
        {
          id: 'cpp',
          name: 'C++20 / C++17',
          description: 'Wysokowydajne, bezpieczne typowo, współczesne programowanie systemowe'
        },
        {
          id: 'csharp',
          name: 'C#',
          description: 'Natywne interop, projektowanie API i integracja',
          subSkills: [
            {
              id: 'aspNetWebApi',
              name: 'ASP.NET Web API',
              description: 'Tworzenie usług RESTful'
            }
          ]
        },
        {
          id: 'typescript',
          name: 'TypeScript / JavaScript',
          description: 'Rozwój aplikacji full-stack, w tym SPA (Vue 2/3, Quasar, Bootstrap) i usługi backendowe Node.js'
        },
        {
          id: 'python',
          name: 'Python',
          description: 'Usługi backendowe do ogólnego automatyzowania skryptów, symulacji'
        },
        {
          id: 'nodejs',
          name: 'Node.js',
          description: 'Rozwój backendu dla mikrousług, aplikacji działających w czasie rzeczywistym i usług API, zwłaszcza dla platform Internetu rzeczy'
        },
        {
          id: 'golang',
          name: 'Go (Golang)',
          description: 'Rozwój backendu dla systemów rozproszonych i architektury mikroserwisów'
        }
      ]
    },
    {
      id: 'frameworks',
      title: 'Kluczowe Frameworki i Biblioteki',
      skills: [
        {
          id: 'qt',
          name: 'Qt (Widgets, Signals/Slots)',
          description: 'Wieloplatformowy GUI, wizualizacja i interakcja użytkownika dla przemysłowych paneli sterowania'
        },
        {
          id: 'boost',
          name: 'Biblioteki Boost',
          subSkills: [
            {
              id: 'asio',
              name: 'boost::asio',
              description: 'Asynchroniczne I/O, sieci i korutyny'
            },
            {
              id: 'serialization',
              name: 'boost::serialization',
              description: 'Serializacja obiektów i konstrukcja stosu kontenerów STL'
            },
            {
              id: 'interprocess',
              name: 'boost::interprocess',
              description: 'Pamięć współdzielona i synchronizacja międzyprocesowa'
            },
            {
              id: 'fusion',
              name: 'boost::fusion, boost::mpl',
              description: 'Heterogeniczne kontenery i metaprogramowanie'
            },
            {
              id: 'thread',
              name: 'boost::thread / boost::mutex',
              description: 'Wątki i prymitywy synchronizacji'
            },
            {
              id: 'container',
              name: 'boost::container',
              description: 'Kontenery kompatybilne ze STL'
            },
            {
              id: 'bimap',
              name: 'Boost.Bimap',
              description: 'Dwukierunkowe mapy dla wydajnych wyszukiwań klucz-wartość'
            },
            {
              id: 'lexicalCast',
              name: 'Boost.Lexical_Cast',
              description: 'Bezpieczne konwersje typów między ciągami znaków a innymi typami'
            },
            {
              id: 'algorithm',
              name: 'Boost.Algorithm',
              description: 'Zbiór ogólnych algorytmów dla C++'
            },
            {
              id: 'multiIndex',
              name: 'boost::multi_index',
              description: 'Kontenery z wieloma kryteriami wyszukiwania i sortowania'
            },
            {
              id: 'propertyTree',
              name: 'Boost.PropertyTree',
              description: 'Przechowywanie i manipulowanie danymi hierarchicznymi, szczególnie serializacja XML'
            },
            {
              id: 'dateTime',
              name: 'Boost.DateTime',
              description: 'Manipulacja i obliczenia dat i czasu'
            }
          ]
        },
        {
          id: 'json',
          name: 'nlohmann::json',
          description: 'Nowoczesne parsowanie i serializacja JSON w C++'
        },
        {
          id: 'poco',
          name: 'Framework Poco',
          description: 'Wątki, sieci, serwery HTTP/WebSocket, integracja MQTT i abstrakcja bazy danych'
        },
        {
          id: 'messaging',
          name: 'Systemy Komunikacyjne',
          subSkills: [
            {
              id: 'zeromq',
              name: 'ZeroMQ (zmq, cppzmq)',
              description: 'Wysokowydajne asynchroniczne komunikaty z wzorcami jak DEALER/ROUTER'
            },
            {
              id: 'mqtt',
              name: 'MQTT (mosqpp, Paho)',
              description: 'Protokół komunikacyjny publikuj/subskrybuj z integracją Mosquitto C++'
            }
          ]
        },
        {
          id: 'mongodb',
          name: 'Sterownik MongoDB C++ (mongocxx)',
          description: 'Integracja z bazą danych NoSQL'
        },
        {
          id: 'openssl',
          name: 'OpenSSL',
          description: 'Bezpieczna komunikacja i asynchroniczne operacje kryptograficzne'
        },
        {
          id: 'iconvpp',
          name: 'iconvpp',
          description: 'Konwersje kodowania znaków dla integracji z systemami legacy (CP852 do UTF-8)'
        },
        {
          id: 'sqlite',
          name: 'SQLite z Poco Data',
          description: 'Wbudowana baza danych z funkcjami podobnymi do ORM dla zarządzania konfiguracją'
        },
        {
          id: 'mfc',
          name: 'MFC (Microsoft Foundation Classes)',
          description: 'Rozwój aplikacji desktopowych Windows z architekturą MDI'
        },
        {
          id: 'bcgControlBar',
          name: 'BCGControlBar Pro',
          description: 'Zaawansowane komponenty UI dla aplikacji MFC, w tym wstążki i panele dokowalne'
        },
        {
          id: 'objectBox',
          name: 'ObjectBox',
          description: 'Wysokowydajne logowanie zdarzeń i wbudowana baza danych'
        },
        {
          id: 'rethinkDb',
          name: 'RethinkDB',
          description: 'Opcjonalna baza danych NoSQL dla aplikacji czasu rzeczywistego'
        },
        {
          id: 'eCharts',
          name: 'ECharts',
          description: 'Biblioteka wizualizacji danych dla pulpitów nawigacyjnych'
        },
        {
          id: 'snap7',
          name: 'Snap7',
          description: 'Biblioteka protokołu Siemens S7 do komunikacji przemysłowej'
        },
        {
          id: 'libmodbus',
          name: 'libmodbus',
          description: 'Biblioteka protokołu Modbus TCP dla urządzeń przemysłowych'
        },
        {
          id: 'proster',
          name: 'Proster',
          description: 'Niestandardowy protokół do integracji sprzętu przemysłowego'
        },
        {
          id: 'fabric',
          name: 'Fabric (Python)',
          description: 'Skrypty automatyzacji do wdrażania i zarządzania usługami'
        },
        {
          id: 'systemd',
          name: 'systemd',
          description: 'Zarządzanie usługami w środowiskach Linux'
        },
        {
          id: 'bootstrapVue',
          name: 'Bootstrap-Vue',
          description: 'Framework frontendowy do responsywnego projektowania w aplikacjach Vue.js'
        },
        {
          id: 'pinia',
          name: 'Pinia',
          description: 'Biblioteka zarządzania stanem dla aplikacji Vue.js'
        },
        {
          id: 'expressJs',
          name: 'Express.js',
          description: 'Framework webowy dla Node.js, używany do budowania API'
        },
        {
          id: 'socketIo',
          name: 'Socket.IO',
          description: 'Biblioteka do komunikacji dwukierunkowej w czasie rzeczywistym'
        },
        {
          id: 'ginGolang',
          name: 'Gin (Go)',
          description: 'Framework HTTP dla budowania API w Go'
        }
      ]
    },
    {
      id: 'architecture',
      title: 'Umiejętności Architektoniczne i Techniczne',
      skills: [
        {
          id: 'eventDriven',
          name: 'Architektura Sterowana Zdarzeniami',
          description: 'Projektowanie i wdrażanie systemów, które skutecznie obsługują, filtrują i przetwarzają sygnały analogowe i binarne, nazywane jest architekturą sterowaną zdarzeniami'
        },
        {
          id: 'realTime',
          name: 'Komunikacja w Czasie Rzeczywistym',
          description: 'Wykorzystanie protokołów komunikacyjnych do szybkiego gromadzenia danych, wysyłania poleceń i odbierania powiadomień o zdarzeniach'
        },
        {
          id: 'multithreading',
          name: 'Wielowątkowość i Współbieżność',
          description: 'Wykorzystanie muteksów, blokad zakresu, zmiennych warunkowych i operacji atomowych do zarządzania zasobami w sposób bezpieczny dla wątków'
        },
        {
          id: 'sharedMemory',
          name: 'Architektura Pamięci Współdzielonej',
          description: 'Wdrażanie wysokowydajnych segmentów pamięci współdzielonej, aby umożliwić wielu procesom szybki i współbieżny dostęp do danych w czasie rzeczywistym, znane jest jako architektura pamięci współdzielonej'
        },
        {
          id: 'fileMapped',
          name: 'Pamięć Mapowana na Plik',
          description: 'Indeksowanie niestandardowe mapowane na pliki w celu efektywnej archiwizacji znacznych ilości danych szeregów czasowych nazywane jest przechowywaniem mapowanym na pliki.'
        },
        {
          id: 'dynamicConfig',
          name: 'Dynamiczna Konfiguracja',
          description: 'Możliwość ładowania i zarządzania informacjami konfiguracyjnymi z plików projektu i pamięci współdzielonej'
        },
        {
          id: 'eventManagement',
          name: 'Zarządzanie Zdarzeniami i Alarmami',
          description: 'Wykorzystanie zaawansowanej logiki do identyfikacji stanów alarmowych na podstawie progów i przejść między stanami nazywane jest zarządzaniem zdarzeniami i alarmami'
        },
        {
          id: 'serialization',
          name: 'Serializacja i Konwersja Danych',
          description: 'Konwersja i serializacja danych, w tym deseryalizacja binarna i mapowanie struktur C, to procesy, które przekształcają stare dane binarne w współczesne dane strukturalne'
        },
        {
          id: 'protocol',
          name: 'Integracja Protokółów',
          description: 'Obsługa wielu protokołów (Modbus, Siemens, IEC104, SNMP, OPC UA) oraz tworzenie protokołów niestandardowych to przykłady integracji protokołów'
        },
        {
          id: 'dataIntegrity',
          name: 'Integralność i Odzyskiwanie Danych',
          description: 'Odzyskiwanie danych i integralność Metody odzyskiwania, tworzenia kopii zapasowych i walidacji danych w aplikacjach o znaczeniu krytycznym'
        },
        {
          id: 'crossPlatform',
          name: 'Rozwój Wieloplatformowy',
          description: 'Projektowanie kodu dla platform wbudowanych (Compute Module), Linux i Windows'
        },
        {
          id: 'microservices',
          name: 'Architektura Mikroserwisów',
          description: 'Projektowanie luźno powiązanych usług, z których każda jest zawarta w Dockerze w celu zapewnienia skalowalności i łatwości konserwacji, znane jest jako architektura mikrousług'
        },
        {
          id: 'secureApis',
          name: 'Projektowanie Bezpiecznych API',
          description: 'Wdrażanie interfejsów API RESTful z uwierzytelnianiem JWT i zabezpieczeniami klucza API znane jest jako "bezpieczne projektowanie API"'
        },
        {
          id: 'modelView',
          name: 'Architektura Model-Widok',
          description: 'Modele danych, widoki i logika kontrolera są oddzielone w architekturze model-widok w celu poprawy łatwości konserwacji.'
        },
        {
          id: 'nativeInterop',
          name: 'Natywna Interoperacyjność',
          description: 'Wywoływanie natywnych funkcji C++ z zarządzanego kodu C# przy użyciu P/Invoke (DllImport)'
        }
      ]
    },
    {
      id: 'build',
      title: 'Budowa, Narzędzia i DevOps',
      skills: [
        {
          id: 'cmake',
          name: 'CMake',
          description: 'Wieloplatformowy system budowania i konfiguracji projektu'
        },
        {
          id: 'vcpkg',
          name: 'vcpkg',
          description: 'Menedżer pakietów C++ do instalowania i zarządzania zależnościami'
        },
        {
          id: 'vs',
          name: 'Visual Studio 2022',
          description: 'Główne IDE do rozwoju w C++/C#'
        },
        {
          id: 'platformSpecific',
          name: 'Integracja Specyficzna dla Platformy',
          description: 'Doświadczenie z Windows API w zakresie zarządzania plikami i procesami, wątkowaniem i rejestrowaniem zdarzeń'
        },
        {
          id: 'docker',
          name: 'Docker',
          description: 'Konteneryzacja dla spójnego wdrażania i izolacji usług'
        },
        {
          id: 'devcontainers',
          name: 'VS Code Devcontainers',
          description: 'Spójne i odtwarzalne środowiska programistyczne przy użyciu Dockera'
        },
        {
          id: 'swagger',
          name: 'Swagger/OpenAPI',
          description: 'Dokumentacja i specyfikacja API'
        },
        {
          id: 'cicd',
          name: 'Potoki CI/CD',
          description: 'Ciągła integracja i wdrażanie'
        },
        {
          id: 'powershell',
          name: 'PowerShell',
          description: 'Skrypty dla środowisk Windows i automatyzacji'
        },
        {
          id: 'make',
          name: 'Make',
          description: 'Narzędzie automatyzacji budowania dla środowisk Linux/Unix'
        }
      ]
    },
    {
      id: 'domain',
      title: 'Wiedza branżowa',
      skills: [
        {
          id: 'softwareArch',
          name: 'Architektura Oprogramowania',
          description: 'Tworzenie niezawodnych, modułowych systemów do kontroli i monitorowania w czasie rzeczywistym'
        },
        {
          id: 'dataAcquisition',
          name: 'Akwizycja Danych',
          description: 'Projektowanie wysokowydajnych systemów do niezawodnego gromadzenia, przetwarzania i długoterminowej archiwizacji danych pomiarowych nazywane jest akwizycją danych'
        },
        {
          id: 'appDev',
          name: 'Rozwój Aplikacji',
          description: 'Tworzenie aplikacji to proces wdrażania rozwiązań'
        },
        {
          id: 'legacy',
          name: 'Modernizacja Systemów Legacy',
          description: 'Konwersja starszych plików danych do współczesnych, ustrukturyzowanych formatów z tłumaczeniem kodowania znaków nazywana jest modernizacją systemu'
        },
        {
          id: 'visualization',
          name: 'Narzędzia Wizualizacji',
          description: 'Opracowywanie edytorów graficznych do wizualizacji danych, paneli sterowania i diagramów procesów'
        },
        {
          id: 'secure',
          name: 'Bezpieczne Systemy',
          description: 'Wdrażanie zabezpieczonych przed manipulacją, bezpiecznych magazynów danych, spełniających standardy audytu i zgodności'
        },
        {
          id: 'crossPlatformDev',
          name: 'Rozwój Wieloplatformowy',
          description: 'Tworzenie wieloplatformowych systemów wizualizacji i sterowania'
        },
        {
          id: 'dataManagement',
          name: 'Zarządzanie Danymi',
          description: 'Specjalistyczne systemy do gromadzenia i śledzenia danych'
        },
        {
          id: 'industrialProtocols',
          name: 'Integracja Protokołów Przemysłowych',
          description: 'Doświadczenie w integracji sprzętu i protokołów komunikacji przemysłowej'
        },
        {
          id: 'databaseSystems',
          name: 'Projektowanie Systemów Bazodanowych',
          description: 'Projektowanie systemów baz danych obejmuje tworzenie interfejsów zapytań i narzędzi do eksploracji baz danych'
        }
      ]
    },
    {
      id: 'projects',
      title: 'Kluczowe Projekty',
      skills: [
        {
          id: 'scada',
          name: 'System SCADA',
          description: 'wykorzystano C++20 do stworzenia modułowego systemu sterowania i monitorowania automatyki przemysłowej działającego w czasie rzeczywistym. Funkcje obejmują obsługę danych bezpieczną dla wątków, dynamiczną konfigurację, zarządzanie alarmami, architekturę przetwarzania sygnałów sterowaną zdarzeniami, komunikację w czasie rzeczywistym poprzez MQTT i ZeroMQ oraz graficzny interfejs użytkownika (GUI) oparty na Qt z możliwościami wizualizacji'
        },
        {
          id: 'dataAcquisition',
          name: 'System Akwizycji i Archiwizacji Danych',
          description: 'opracowano system C++20 do gromadzenia, analizowania i przechowywania danych pomiarowych elektrowni w dłuższym okresie czasu. Solidne procedury integralności danych, pamięć mapowana na pliki do archiwizacji danych szeregów czasowych, architektura pamięci współdzielonej do równoczesnego dostępu do danych oraz dokładne indeksowanie do szybkiego wyszukiwania w zakresie czasu'
        },
        {
          id: 'distributed',
          name: 'Rozproszony System SCADA',
          description: 'zaprojektowano skalowalną platformę wykorzystującą backend Go i usługę pozyskiwania danych C++20. Niektóre z najważniejszych funkcji to: deseryalizacja binarna do modernizacji starszych danych, konteneryzacja Docker do architektury mikrousług, JWT do bezpiecznych interfejsów API, SQLite i ObjectBox do wbudowanej pamięci oraz OpenAPI/Swagger do automatycznej dokumentacji'
        },
        {
          id: 'visualization',
          name: 'Edytor Graficzny dla Schematów SCADA',
          description: 'opracowano wieloplatformowy edytor graficzny C++17 dla przemysłowych interfejsów sterowania. Program zawiera edytor modeli do tworzenia diagramów procesów i paneli sterowania, a także Boost do serializacji XML. Architektura Model-View, PropertyTree i kompatybilność wieloplatformowa'
        },
        {
          id: 'middleware',
          name: 'Middleware API dla Łączenia Protokołów',
          description: 'opracowano oprogramowanie pośredniczące A.NET Web API pomiędzy interfejsami RESTful a protokołami zastrzeżonymi jako oprogramowanie pośredniczące API do mostkowania protokołów. Wśród funkcji znajdują się dynamiczna konfiguracja, marshalling struktur danych, zoptymalizowane przetwarzanie wsadowe, solidne zarządzanie zasobami oraz natywna interoperacyjność C++ poprzez P/Invoke'
        },
        {
          id: 'databaseTool',
          name: 'Narzędzie do Eksploracji Baz Danych',
          description: 'przy użyciu MFC stworzono aplikację desktopową C++20 dla systemu Windows do zarządzania bazami danych SQLite. Narzędzie zawiera funkcje wizualizacji danych, zarządzanie połączeniami z bazami danych, zintegrowany edytor SQL, interfejs Multi-Document Interface do wielu widoków oraz zaawansowane elementy interfejsu użytkownika poprzez BCGControlBar Pro'
        },
        {
          id: 'modularPlatform',
          name: 'Modularna Platforma Akwizycji Danych',
          description: 'zaprojektowano system gromadzenia danych przemysłowych oparty na mikrousługach. Rozwiązanie obejmuje integrację wielu protokołów (S7, Modbus, Proster), warstwę API TypeScript/Express.js, pamięć MongoDB i SQLite, usługi C++, Node.js i Python oraz pulpit nawigacyjny Vue.js z wizualizacją w czasie rzeczywistym'
        }
      ]
    },
    {
      id: 'softSkills',
      title: 'Umiejętności miękkie i metodologia',
      skills: [
        {
          id: 'cleanCode',
          name: 'Czysty, Łatwy do Utrzymania Kod',
          description: 'Kod źródłowy jest podzielony na odrębne moduły zgodnie z najlepszymi praktykami dotyczącymi rozdzielenia zagadnień'
        },
        {
          id: 'modernCpp',
          name: 'Nowoczesne C++ Funkcje',
          description: 'Biegłość w wykorzystywaniu inteligentnych wskaźników, bezpieczeństwa typów, constexpr i innych współczesnych funkcji języka C++ w celu zwiększenia bezpieczeństwa kodu'
        },
        {
          id: 'modular',
          name: 'Modularna Architektura',
          description: 'Projektowanie rozszerzalnych systemów, które można modyfikować w celu dostosowania do nowych potrzeb, znane jest jako architektura modułowa'
        },
        {
          id: 'reliability',
          name: 'Skupienie na Niezawodności',
          description: 'Wdrażanie kompleksowych procedur obsługi błędów, rejestrowania i odzyskiwania systemu jest podstawą niezawodności'
        },
        {
          id: 'performance',
          name: 'Optymalizacja Wydajności',
          description: 'Doświadczenie w zakresie systemów o niskim opóźnieniu i wysokiej wydajności dla aplikacji działających w czasie rzeczywistym'
        },
        {
          id: 'ux',
          name: 'Doświadczenie Użytkownika',
          description: 'Tworzenie przyjaznych dla użytkownika interfejsów dla zaawansowanych programów komputerowych'
        },
        {
          id: 'learning',
          name: 'Ciągłe Uczenie się',
          description: 'Dostosowywanie się do najlepszych praktyk i nowych technologii w szybko zmieniających się ekosystemach'
        },
        {
          id: 'crossDisciplinary',
          name: 'Integracja Międzydyscyplinarna',
          description: 'Zdolność do współpracy między różnymi platformami i językami programowania w celu tworzenia spójnych rozwiązań nazywana jest integracją międzydyscyplinarną'
        }
      ]
    }
  ]
};
