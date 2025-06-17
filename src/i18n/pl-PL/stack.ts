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
      id: 'cppLibraries',
      title: 'Biblioteki i Frameworki C++',
      skills: [
        {
          id: 'qt',
          name: 'Qt (Widgets, Signals/Slots)',
          description: 'Wieloplatformowy GUI, wizualizacja i interakcja użytkownika dla przemysłowych paneli sterowania',
          subSkills: [
            { id: 'qtCore', name: 'QtCore', description: 'Podstawowa funkcjonalność nie-GUI: pętla zdarzeń, sygnały/sloty, kontenery, wątki' },
            { id: 'qtGui', name: 'QtGui', description: 'Grafika 2D, obrazowanie, czcionki i integracja z systemem okienkowym' },
            { id: 'qtWidgets', name: 'QtWidgets', description: 'Tradycyjne widżety desktopowe i kontrolki UI' },
            { id: 'qtNetwork', name: 'QtNetwork', description: 'Sieci: gniazda TCP/UDP, HTTP, SSL i protokoły sieciowe' },
            { id: 'qtTest', name: 'QtTest', description: 'Framework do testów jednostkowych aplikacji Qt' },
            { id: 'qtConcurrent', name: 'QtConcurrent', description: 'Wysokopoziomowe API do programowania równoległego' },
            { id: 'qtSql', name: 'QtSql', description: 'Integracja z bazami SQL i funkcje podobne do ORM' },
            { id: 'qtXml', name: 'QtXml', description: 'Parsowanie i manipulacja XML' },
            { id: 'qtSvg', name: 'QtSvg', description: 'Renderowanie i obsługa SVG' },
            { id: 'qtMultimedia', name: 'QtMultimedia', description: 'Obsługa audio, wideo i multimediów' },
            { id: 'qtCharts', name: 'QtCharts', description: 'Wykresy i wizualizacja danych' },
            { id: 'qtSerialPort', name: 'QtSerialPort', description: 'Komunikacja przez port szeregowy' },
            { id: 'qtWebSockets', name: 'QtWebSockets', description: 'Obsługa protokołu WebSocket' },
            { id: 'qtWebEngine', name: 'QtWebEngine', description: 'Renderowanie treści webowych z użyciem silnika Chromium' }
          ]
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
          description: 'Wątki, sieci, serwery HTTP/WebSocket, integracja MQTT i abstrakcja bazy danych',
          subSkills: [
            { id: 'pocoNet', name: 'Poco::Net', description: 'Sieci, HTTP, WebSocket, TCP/UDP, SMTP, FTP i obsługa SSL' },
            { id: 'pocoData', name: 'Poco::Data', description: 'Abstrakcja bazy danych i funkcje podobne do ORM dla baz SQL' },
            { id: 'pocoUtil', name: 'Poco::Util', description: 'Narzędzia aplikacyjne, konfiguracja i parsowanie linii poleceń' },
            { id: 'pocoJSON', name: 'Poco::JSON', description: 'Parsowanie, serializacja i manipulacja JSON' },
            { id: 'pocoXML', name: 'Poco::XML', description: 'Parsowanie XML i manipulacja DOM' },
            { id: 'pocoMQTT', name: 'Poco::MQTT', description: 'Obsługa protokołu MQTT dla IoT i komunikacji' },
            { id: 'pocoFoundation', name: 'Poco::Foundation', description: 'Klasy podstawowe: wątki, system plików, logowanie, zdarzenia i narzędzia' },
            { id: 'pocoCrypto', name: 'Poco::Crypto', description: 'Kryptografia, SSL i zarządzanie certyfikatami' },
            { id: 'pocoZip', name: 'Poco::Zip', description: 'Tworzenie i rozpakowywanie archiwów ZIP' },
          ]
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
          id: 'libiconv',
          name: 'libiconv',
          description: 'Standardowa biblioteka C do konwersji zestawów znaków (np. CP852 do UTF-8)'
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
          description: 'Zaawansowane komponenty UI dla aplikacji MFC, w tym wstążki i panele dokowalne',
          subSkills: [
            { id: 'customization', name: 'Dostosowywanie', description: 'Zaawansowane techniki dostosowywania komponentów BCGControlBar' },
            { id: 'ribbonIntegration', name: 'Integracja wstążek', description: 'Tworzenie i zarządzanie wstążkami w aplikacjach MFC' },
            { id: 'dockablePanels', name: 'Panele dokowalne', description: 'Implementacja i zarządzanie panelami dokowalnymi' },
            { id: 'controlBar', name: 'Control Bar', description: 'Rozwój i dostosowywanie pasków narzędzi i menu' },
            { id: 'themeCustomization', name: 'Dostosowywanie motywów', description: 'Tworzenie niestandardowych motywów dla komponentów BCG' },
            { id: 'eventHandling', name: 'Obsługa zdarzeń', description: 'Zarządzanie zdarzeniami i komunikacją między komponentami' },
            { id: 'accessibility', name: 'Dostępność', description: 'Zapewnienie dostępności komponentów zgodnie z wytycznymi' }
          ]
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
          id: 'arrow',
          name: 'Apache Arrow',
          description: 'Kolumnowy format analityki w pamięci i wymiany danych',
          subSkills: [
            { id: 'dataTransformation', name: 'Transformacja danych', description: 'Przekształcanie danych do formatu kolumnowego' },
            { id: 'performanceOptimization', name: 'Optymalizacja wydajności', description: 'Zwiększanie wydajności zapytań i operacji na danych' },
            { id: 'integration', name: 'Integracja', description: 'Integracja z istniejącymi systemami i strumieniami danych' }
          ]
        },
        {
          id: 'cppzmq',
          name: 'cppzmq',
          description: 'C++ binding do biblioteki komunikatów ZeroMQ'
        },
        {
          id: 'duckdb',
          name: 'DuckDB',
          description: 'Wbudowany system zarządzania bazą danych SQL OLAP',
          subSkills: [
            { id: 'sqlQueries', name: 'Zapytania SQL', description: 'Pisanie i optymalizacja zapytań SQL dla DuckDB' },
            { id: 'dataImportExport', name: 'Import/Eksport danych', description: 'Importowanie i eksportowanie danych z/do DuckDB' },
            { id: 'performanceTuning', name: 'Strojenie wydajności', description: 'Optymalizacja wydajności bazy danych DuckDB' }
          ]
        },
        {
          id: 'fmt',
          name: 'fmt',
          description: 'Nowoczesna biblioteka formatowania dla C++'
        },
        {
          id: 'gtest',
          name: 'GoogleTest (gtest)',
          description: 'Framework do testów jednostkowych dla C++'
        },
        {
          id: 'libbson',
          name: 'libbson',
          description: 'Biblioteka BSON do binarnej serializacji JSON'
        },
        {
          id: 'libuv',
          name: 'libuv',
          description: 'Wieloplatformowa biblioteka asynchronicznego I/O'
        },
        {
          id: 'libwebsockets',
          name: 'libwebsockets',
          description: 'Lekka biblioteka C dla WebSockets'
        },
        {
          id: 'mosquitto',
          name: 'Mosquitto',
          description: 'Broker MQTT i biblioteka klienta C/C++'
        },
        {
          id: 'protobuf',
          name: 'Protobuf',
          description: 'Biblioteka serializacji Google Protocol Buffers'
        },
        {
          id: 'pthreads',
          name: 'pthreads',
          description: 'Wątki POSIX do obsługi wielowątkowości'
        },
        {
          id: 'python3',
          name: 'Python3 (C++ API)',
          description: 'Osadzanie i rozszerzanie Pythona w aplikacjach C++'
        },
        {
          id: 'rapidjson',
          name: 'RapidJSON',
          description: 'Szybki parser/generator JSON dla C++'
        },
        {
          id: 'snappy',
          name: 'Snappy',
          description: 'Szybka biblioteka kompresji/dekompresji od Google'
        },
        {
          id: 'spdlog',
          name: 'spdlog',
          description: 'Szybka biblioteka logowania dla C++'
        },
        {
          id: 'utf8proc',
          name: 'utf8proc',
          description: 'Biblioteka przetwarzania UTF-8 dla Unicode'
        },
        {
          id: 'zlib',
          name: 'zlib',
          description: 'Biblioteka kompresji strumieni danych'
        },
        {
          id: 'zstd',
          name: 'Zstandard (zstd)',
          description: 'Szybki algorytm kompresji od Facebooka'
        }
      ]
    },
    {
      id: 'nodePackages',
      title: 'Pakiety Node.js',
      description: 'Kluczowe pakiety i biblioteki Node.js używane do frontendu, backendu, narzędzi, bezpieczeństwa i narzędzi developerskich.',
      skills: [
        {
          id: 'coreFramework',
          name: 'Podstawowy Framework i Zarządzanie Stanem',
          subSkills: [
            { id: 'vue', name: 'vue', description: 'Progresywny framework JavaScript do budowy interfejsów użytkownika.' },
            { id: 'vueRouter', name: 'vue-router', description: 'Oficjalny router dla Vue.js, umożliwiający nawigację między stronami.' },
            { id: 'pinia', name: 'pinia', description: 'Biblioteka do zarządzania stanem w aplikacjach Vue.js.' }
          ]
        },
        {
          id: 'uiVisualization',
          name: 'UI i Wizualizacja',
          subSkills: [
            { id: 'bootstrapVue', name: 'bootstrap-vue', description: 'Komponenty Bootstrap dla Vue.js.' },
            { id: 'vueSidebarMenu', name: 'vue-sidebar-menu', description: 'Menu boczne dla aplikacji Vue.js.' },
            { id: 'vueNotification', name: 'vue-notification', description: 'System powiadomień dla Vue.js.' },
            { id: 'vueEcharts', name: 'vue-echarts', description: 'Biblioteka wykresów ECharts dla Vue.js.' }
          ]
        },
        {
          id: 'utilitiesHttp',
          name: 'Narzędzia i HTTP',
          subSkills: [
            { id: 'axios', name: 'axios', description: 'Klient HTTP oparty na Promise dla przeglądarki i Node.js.' },
            { id: 'lodash', name: 'lodash', description: 'Biblioteka narzędziowa do manipulacji danymi i programowania funkcyjnego.' }
          ]
        },
        {
          id: 'buildTools',
          name: 'Narzędzia Build i Pakowanie',
          subSkills: [
            { id: 'vite', name: 'vite', description: 'Nowoczesny system budowania frontendu.' },
            { id: 'archiver', name: 'archiver', description: 'Moduł do tworzenia archiwów (zip, tar, itp.).' }
          ]
        },
        {
          id: 'typeSafetyLinting',
          name: 'Bezpieczeństwo Typów i Lintowanie',
          subSkills: [
            { id: 'typescript', name: 'typescript', description: 'Typowany nadzbiór JavaScript zapewniający bezpieczeństwo typów.' },
            { id: 'eslint', name: 'eslint', description: 'Linter JavaScript do kontroli jakości kodu.' },
            { id: 'eslintPluginVue', name: 'eslint-plugin-vue', description: 'Plugin ESLint dla stylu i dobrych praktyk Vue.js.' }
          ]
        },
        {
          id: 'coreServer',
          name: 'Podstawowe i Serwerowe Biblioteki',
          subSkills: [
            { id: 'express', name: 'express', description: 'Minimalistyczny framework webowy dla Node.js.' },
            { id: 'bodyParser', name: 'body-parser', description: 'Middleware do parsowania ciał żądań HTTP.' },
            { id: 'cors', name: 'cors', description: 'Middleware Express do obsługi CORS.' },
            { id: 'morgan', name: 'morgan', description: 'Middleware do logowania żądań HTTP.' },
            { id: 'nocache', name: 'nocache', description: 'Wyłącza cache po stronie klienta w Express.' },
            { id: 'multer', name: 'multer', description: 'Middleware do obsługi uploadu plików (multipart/form-data).' },
            { id: 'requestIp', name: 'request-ip', description: 'Middleware do pobierania adresu IP klienta.' }
          ]
        },
        {
          id: 'securityValidation',
          name: 'Bezpieczeństwo i Walidacja',
          subSkills: [
            { id: 'ajv', name: 'ajv', description: 'Walidator schematów JSON dla obiektów JavaScript.' },
            { id: 'ajvCli', name: 'ajv-cli', description: 'Interfejs CLI dla walidatora Ajv.' },
            { id: 'bcryptjs', name: 'bcryptjs', description: 'Biblioteka do haszowania haseł.' },
            { id: 'expressJwt', name: 'express-jwt', description: 'Middleware JWT do autoryzacji w Express.' },
            { id: 'expressJwtPermissions', name: 'express-jwt-permissions', description: 'Middleware do uprawnień JWT w Express.' },
            { id: 'expressUnless', name: 'express-unless', description: 'Warunkowe pomijanie middleware w Express.' },
            { id: 'expressValidator', name: 'express-validator', description: 'Middleware do walidacji danych żądania.' },
            { id: 'jsonwebtoken', name: 'jsonwebtoken', description: 'Implementacja JSON Web Tokens.' }
          ]
        },
        {
          id: 'databaseData',
          name: 'Bazy Danych i Przetwarzanie Danych',
          subSkills: [
            { id: 'betterSqlite3', name: 'better-sqlite3', description: 'Szybka i prosta biblioteka SQLite3 dla Node.js.' },
            { id: 'mongodb', name: 'mongodb', description: 'Oficjalny sterownik MongoDB dla Node.js.' },
            { id: 'bson', name: 'bson', description: 'Parser i serializator BSON.' },
            { id: 'ioredis', name: 'ioredis', description: 'Zaawansowany klient Redis dla Node.js.' },
            { id: 'rethinkdbTs', name: 'rethinkdb-ts', description: 'Sterownik RethinkDB dla TypeScript/Node.js.' }
          ]
        },
        {
          id: 'serializationMessaging',
          name: 'Serializacja i Komunikacja',
          subSkills: [
            { id: 'msgpack', name: '@msgpack/msgpack', description: 'Szybka implementacja MessagePack dla JavaScript.' },
            { id: 'ws', name: 'ws', description: 'Prosta biblioteka WebSocket dla Node.js.' },
            { id: 'zeromq', name: 'zeromq', description: 'Wysokowydajna biblioteka komunikatów asynchronicznych.' }
          ]
        },
        {
          id: 'utilities',
          name: 'Narzędzia',
          subSkills: [
            { id: 'axios', name: 'axios', description: 'Klient HTTP oparty na Promise.' },
            { id: 'bluebird', name: 'bluebird', description: 'Rozbudowana biblioteka Promise.' },
            { id: 'csv', name: 'csv', description: 'Parsowanie i generowanie CSV dla Node.js.' },
            { id: 'dotenv', name: 'dotenv', description: 'Ładowanie zmiennych środowiskowych z pliku .env.' },
            { id: 'lodash', name: 'lodash', description: 'Biblioteka narzędziowa dla JavaScript.' },
            { id: 'moduleAlias', name: 'module-alias', description: 'Tworzenie aliasów modułów w Node.js.' },
            { id: 'sprintfJs', name: 'sprintf-js', description: 'Implementacja sprintf dla formatowania tekstu.' }
          ]
        },
        {
          id: 'pdfArchive',
          name: 'Generowanie PDF i Archiwów',
          subSkills: [
            { id: 'archiver', name: 'archiver', description: 'Moduł do tworzenia archiwów.' },
            { id: 'jspdf', name: 'jspdf', description: 'Biblioteka do generowania PDF w JavaScript.' },
            { id: 'jspdfAutotable', name: 'jspdf-autotable', description: 'Plugin do jsPDF do generowania tabel w PDF.' },
            { id: 'pdfkit', name: 'pdfkit', description: 'Biblioteka do generowania dokumentów PDF dla Node.js.' },
            { id: 'pdfkitTable', name: 'pdfkit-table', description: 'Plugin do generowania tabel dla PDFKit.' }
          ]
        },
        {
          id: 'devTools',
          name: 'Narzędzia Developerskie i Skrypty',
          subSkills: [
            { id: 'copyfiles', name: 'copyfiles', description: 'Łatwe kopiowanie plików w skryptach npm.' },
            { id: 'httpServer', name: 'http-server', description: 'Prosty serwer HTTP z linii poleceń.' },
            { id: 'nodemon', name: 'nodemon', description: 'Monitoruje zmiany i automatycznie restartuje aplikacje Node.js.' },
            { id: 'rimraf', name: 'rimraf', description: 'Głębokie usuwanie plików (rm -rf) dla Node.js.' },
            { id: 'tsNode', name: 'ts-node', description: 'Środowisko uruchomieniowe TypeScript dla Node.js.' },
            { id: 'tsNodeDev', name: 'ts-node-dev', description: 'Narzędzie developerskie TypeScript/Node.js z auto-restartem.' },
            { id: 'tsconfigPaths', name: 'tsconfig-paths', description: 'Ładowanie mapowań ścieżek TypeScript w czasie rzeczywistym.' }
          ]
        },
        {
          id: 'typescriptTypes',
          name: 'TypeScript i Typy',
          subSkills: [
            { id: 'typescript', name: 'typescript', description: 'Język TypeScript dla bezpieczeństwa typów.' },
            { id: 'types', name: '@types/*', description: 'Definicje typów TypeScript dla bibliotek JavaScript.' }
          ]
        },
        {
          id: 'quasarNode',
          name: 'Quasar Framework',
          subSkills: [
            { id: 'quasar', name: 'quasar', description: 'Framework UI dla Vue.js do responsywnych aplikacji webowych i mobilnych.' }
          ]
        }
      ]
    },
    {
      id: 'pythonPackages',
      title: 'Pakiety Pythona',
      description: 'Kluczowe pakiety i biblioteki Pythona używane do backendu, skryptów, testowania, automatyzacji i integracji sprzętowej.',
      skills: [
        {
          id: 'envMgmt',
          name: 'Zarządzanie środowiskiem i zależnościami',
          subSkills: [
            { id: 'pip', name: 'pip', description: 'Instalator pakietów dla Pythona.' },
            { id: 'setuptools', name: 'setuptools', description: 'System budowania i zarządzania pakietami dla projektów Pythona.' },
            { id: 'wheel', name: 'wheel', description: 'Format paczek binarnych dla Pythona.' },
            { id: 'pycWheel', name: 'pyc-wheel', description: 'Obsługa wheel dla skompilowanych rozszerzeń Pythona.' },
            { id: 'virtualenv', name: 'virtualenv', description: 'Narzędzie do tworzenia izolowanych środowisk Pythona.' },
            { id: 'venv', name: 'venv', description: 'Moduł standardowy do tworzenia środowisk wirtualnych.' }
          ]
        },
        {
          id: 'lintingFormatting',
          name: 'Lintowanie i formatowanie',
          subSkills: [
            { id: 'pylint', name: 'pylint', description: 'Statyczna analiza kodu Python.' },
            { id: 'mypy', name: 'mypy', description: 'Opcjonalne statyczne typowanie dla Pythona.' }
          ]
        },
        {
          id: 'testing',
          name: 'Testowanie i pokrycie',
          subSkills: [
            { id: 'pytest', name: 'pytest', description: 'Framework do testowania w Pythonie.' },
            { id: 'pytestQt', name: 'pytest-qt', description: 'Wsparcie pytest dla aplikacji PyQt i PySide.' },
            { id: 'coverage', name: 'coverage', description: 'Pomiar pokrycia kodu testami.' },
            { id: 'py', name: 'py', description: 'Biblioteka do wykrywania kodu i testów w Pythonie.' }
          ]
        },
        {
          id: 'webFrameworks',
          name: 'Frameworki webowe',
          subSkills: [
            { id: 'flask', name: 'flask', description: 'Mikroframework webowy dla Pythona.' },
            { id: 'flaskCors', name: 'flask-cors', description: 'Obsługa CORS dla Flask.' },
            { id: 'fastapi', name: 'FastAPI', description: 'Nowoczesny, szybki framework do budowy API.' },
            { id: 'gevent', name: 'gevent', description: 'Biblioteka sieciowa oparta na korutynach.' }
          ]
        },
        {
          id: 'dataScience',
          name: 'Data science i wizualizacja',
          subSkills: [
            { id: 'numpy', name: 'numpy', description: 'Podstawowa biblioteka do obliczeń naukowych.' },
            { id: 'pandas', name: 'pandas', description: 'Narzędzie do analizy i manipulacji danymi.' },
            { id: 'scipy', name: 'scipy', description: 'Biblioteka do obliczeń naukowych i technicznych.' },
            { id: 'matplotlib', name: 'matplotlib', description: 'Biblioteka do tworzenia wykresów i wizualizacji.' },
            { id: 'jupyter', name: 'jupyter', description: 'Interaktywne notatniki do obliczeń.' },
            { id: 'notebook', name: 'notebook', description: 'Serwer interaktywnych notatników Jupyter.' },
          ]
        },
        {
          id: 'database',
          name: 'Bazy danych i ORM',
          subSkills: [
            { id: 'rethinkdb', name: 'rethinkdb', description: 'Sterownik Pythona dla RethinkDB.' },
            { id: 'redis', name: 'redis', description: 'Klient Pythona dla bazy Redis.' }
          ]
        },
        {
          id: 'excel',
          name: 'Excel i Office',
          subSkills: [
            { id: 'openpyxl', name: 'openpyxl', description: 'Odczyt/zapis plików Excel xlsx/xlsm/xltx/xltm.' },
          ]
        },
        {
          id: 'networking',
          name: 'Sieci i komunikacja',
          subSkills: [
            { id: 'requests', name: 'requests', description: 'Biblioteka HTTP dla Pythona.' },
            { id: 'paramiko', name: 'paramiko', description: 'Biblioteka SSH2 dla Pythona.' },
            { id: 'ping3', name: 'ping3', description: 'Czysta implementacja ICMP ping w Pythonie 3.' }
          ]
        },
        {
          id: 'hardware',
          name: 'Sprzęt i IoT',
          subSkills: [
            { id: 'smbus2', name: 'smbus2', description: 'Interfejs SMBus/I2C dla Pythona.' },
            { id: 'rpiGpio', name: 'rpi.gpio', description: 'Interfejs GPIO dla Raspberry Pi.' }
          ]
        },
        {
          id: 'gui',
          name: 'GUI i desktop',
          subSkills: [
            { id: 'pyqt5', name: 'pyqt5', description: 'Powiązania Pythona z Qt5.' }
          ]
        },
        {
          id: 'packaging',
          name: 'Pakowanie i dystrybucja',
          subSkills: [
            { id: 'pyinstaller', name: 'pyinstaller', description: 'Tworzenie samodzielnych plików wykonywalnych z aplikacji Pythona.' }
          ]
        },
        {
          id: 'parsing',
          name: 'Parsowanie i web scraping',
          subSkills: [
            { id: 'lxml', name: 'lxml', description: 'Wydajna biblioteka do przetwarzania XML i HTML.' },
            { id: 'htmlgenerator', name: 'htmlgenerator', description: 'Generowanie HTML w Pythonie.' }
          ]
        },
        {
          id: 'utilities',
          name: 'Narzędzia i inne',
          subSkills: [
            { id: 'pythonDateutil', name: 'python-dateutil', description: 'Rozszerzenia do standardowego modułu datetime.' },
            { id: 'invoke', name: 'invoke', description: 'Narzędzie i biblioteka do wykonywania zadań w Pythonie.' }
          ]
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
