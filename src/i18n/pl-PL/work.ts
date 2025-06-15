// Work page translations
export default {
  title: 'Moja Praca',
  projectsTitle: 'Projekty',
  experienceTitle: 'Doświadczenie',

  // Page details
  pageTitle: 'Tworzenie Oprogramowania Przemysłowego',
  pageSubtitle: 'Solidne oprogramowanie dla systemów danych, automatyki i infrastruktury krytycznej',
  btnDetails: 'Szczegóły',
  btnClose: 'Zamknij',
  keyFeatures: 'Kluczowe funkcje:',
  technologiesUsed: 'Wykorzystane technologie:',
  projectSize: 'Rozmiar projektu:',

  // Project size definitions
  sizes: {
    large: 'Duży',
    medium: 'Średni',
    small: 'Mały'
  },

  // Size tooltips for better context
  sizeTooltips: {
    large: 'Złożony projekt o szerokim zakresie i wielu komponentach',
    medium: 'Umiarkowana złożoność z wyważonym nakładem pracy',
    small: 'Projekt o zawężonym zakresie i określonym celu'
  },

  // Rating scale explanation
  difficultyScale: 'Ocena złożoności projektu (1-3)',

  // Size not specified indicators
  sizeNotSpecified: 'Rozmiar nieokreślony',
  sizeNotSpecifiedTooltip: 'Informacja o rozmiarze projektu nie jest dostępna',

  // Categories
  categories: {
    softwareFramework: 'Framework Programowy',
    dataSystems: 'Systemy Danych',
    iotEdge: 'IoT i Edge',
    apiIntegration: 'API i Integracja',
    modernization: 'Modernizacja',
    realTimeSystems: 'Systemy Czasu Rzeczywistego',
    industrialSolutions: 'Rozwiązania Przemysłowe'
  },

  // Projects
  projects: [
    {
      title: "System SCADA",
      tech: "C++20, Qt 6, Architektura Sterowana Zdarzeniami",
      keywords: "Sterowanie w Czasie Rzeczywistym, MQTT, ZeroMQ, Zarządzanie Alarmami, Bezpieczeństwo Wątków",
      description: "Pomogłem stworzyć modułowy system sterowania i monitorowania automatyki przemysłowej. System niezawodnie obsługuje sygnały binarne i analogowe dzięki architekturze opartej na zdarzeniach. Posiada narzędzia do zarządzania alarmami, dynamicznej konfiguracji i wizualizacji procesów przemysłowych.",
      size: "large",
      keyFeatures: [
        { title: "Architektura Sterowana Zdarzeniami", desc: "Aby zapewnić niezawodność systemu, pracowałem nad przetwarzaniem sygnałów przy użyciu walidacji, parsowania i kolejkowania." },
        { title: "Komunikacja w Czasie Rzeczywistym", desc: "Wdrożenie protokołów MQTT i ZeroMQ w celu ułatwienia komunikacji między urządzeniami terenowymi a serwerami zaplecza." },
        { title: "Dynamiczna Konfiguracja", desc: "Przyczyniłem się do opracowania funkcji umożliwiającej ładowanie konfiguracji bez przerywania pracy systemu z pamięci współdzielonej i plików projektu." },
        { title: "Zarządzanie Alarmami", desc: "Opracowałem logikę wykorzystującą konfigurowalne progi i zmiany stanu do identyfikowania nieprawidłowych warunków i ostrzegania użytkowników." }
      ],
      technologies: "C++20, Qt 6 (Widgets, Core, Network, SQL, Charts), BCGControlBar Pro, Boost (asio, serialization, fusion, interprocess, thread), Poco, MQTT (mosquitto), ZeroMQ, nlohmann::json, MongoDB C++ Driver, CMake, vcpkg"
    },
    {
      title: "System Akwizycji i Archiwizacji Danych dla Elektrowni",
      tech: "C++20, Boost, Pamięć Współdzielona, Pamięć Mapowana w Pliku",
      keywords: "Akwizycja Danych, Indeksowanie, Bezpieczeństwo Wątków, Elektrownia",
      description: "Przyczyniłem się do stworzenia systemu opartego na C++20 do gromadzenia i przechowywania danych pomiarowych z elektrowni. System został zaprojektowany tak, aby działał dobrze zarówno w trybie czasu rzeczywistego, jak i historycznym, zachowując integralność danych.",
      size: "large",
      keyFeatures: [
        { title: "Akwizycja Danych", desc: "Opracowano interfejsy z czujnikami elektrowni i systemami sterowania w celu skutecznego gromadzenia pomiarów analogowych i cyfrowych." },
        { title: "Architektura Pamięci Współdzielonej", desc: "Współdzielona pamięć umożliwia jednoczesny dostęp do danych przez kilka procesów (pozyskiwanie, archiwizacja i wizualizacja)." },
        { title: "Rozwiązanie Archiwizacji", desc: "Dane szeregów czasowych były przechowywane przy użyciu metody mapowania plików, aby ułatwić szybkie wyszukiwanie według okresu czasu." },
        { title: "Integralność Danych", desc: "Dodano funkcje odzyskiwania danych i dodatkowe procedury walidacji, aby pomóc w ochronie ważnych danych operacyjnych." }
      ],
      technologies: "C++20, Boost (Interprocess, Asio, DateTime), Poco (Net, Util), ZeroMQ (cppzmq), MQTT (Paho), nlohmann::json, Niestandardowa pamięć mapowana w pliku, CMake"
    },
    {
      title: "Rozproszony System SCADA",
      tech: "C++20, Go, Docker, Mikroserwisy",
      keywords: "Modernizacja Danych Starszych Systemów, Konteneryzacja, Bezpieczne API, SQLite, ObjectBox",
      description: "Przyczyniłem się do rozwoju platformy komunikacyjnej, która łączy współczesne i starsze systemy. Obejmowało to backend oparty na Poco oraz usługę C++ do obsługi starszych danych, z naciskiem na zapewnienie dobrej współpracy komponentów.",
      size: "large",
      keyFeatures: [
        { title: "Obsługa Starszych Danych", desc: "Opracowałem program C++20 do tłumaczenia kodowania znaków w starszych plikach danych przemysłowych i konwersji ich do bardziej współczesnych formatów." },
        { title: "Podejście Mikroserwisowe", desc: "Pomoc w podziale platformy na odrębne usługi kontenerowe do komunikacji, przechowywania i funkcji podstawowych." },
        { title: "Rozwój API", desc: "Opracowanie interfejsów API RESTful z obsługą WebSocket do aktualizacji w czasie rzeczywistym i uwierzytelniania przy użyciu JWT i kluczy API." },
        { title: "Rozwiązania Przechowywania", desc: "Aby osiągnąć równowagę między wymaganiami dotyczącymi elastyczności i wydajności, do rejestrowania zdarzeń użyto ObjectBox, a do ustawień konfiguracyjnych SQLite." }
      ],
      technologies: "Go (Gin), C++20, Docker, SQLite, ObjectBox, REST API, WebSockets, JWT, Poco, nlohmann::json, OpenAPI/Swagger"
    },
    {
      title: "Edytor Graficzny do Schematów SCADA",
      tech: "C++17, Qt, Boost, Architektura Model-Widok",
      keywords: "Framework Przemysłowy, Architektura Komponentowa, Wieloplatformowość",
      description: "Opracowałem edytor graficzny do interfejsów przemysłowych systemów sterowania. Dzięki intuicyjnemu podejściu do projektowania aplikacja pomaga operatorom w tworzeniu wizualnych reprezentacji ich urządzeń i procesów.",
      size: "medium",
      keyFeatures: [
        { title: "Interaktywna Edycja", desc: "Opracowałem narzędzia do tworzenia i modyfikowania modeli wizualnych, które umożliwiają konfigurację właściwości, grupowanie i manipulowanie." },
        { title: "Serializacja Danych", desc: "Do implementacji ładowania i zapisywania opartego na XML użyto Boost. Dane projektu będą zachowywane między sesjami dzięki PropertyTree." },
        { title: "Obsługa Wielu Platform", desc: "Pomogłem w zapewnieniu niezawodnego działania programu zarówno na specjalistycznych platformach wbudowanych, jak i systemach Windows." },
        { title: "Czysta Architektura", desc: "Wykorzystano wzorce projektowe Model-View, aby podzielić problemy i ułatwić utrzymanie kodu." }
      ],
      technologies: "C++17, Qt (Widgets, Signals & Slots), Boost (Bimap, MPL, Serialization, Lexical_Cast, Algorithm), CMake, vcpkg"
    },
    {
      title: "Warstwa Pośrednia API dla Łączenia REST i Protokołu Własnościowego",
      tech: ".NET Framework, C#, Interoperacyjność Natywna",
      keywords: "Most REST, Protokół Własnościowy, Komunikacja z Urządzeniami",
      description: "Stworzyłem rozwiązanie typu middleware, które łączy nowoczesne aplikacje internetowe ze specjalistycznymi systemami przemysłowymi wykorzystującymi własne protokoły. API tłumaczy standardowe żądania REST na konkretne metody komunikacji wymagane przez sprzęt.",
      size: "small",
      keyFeatures: [
        { title: "Integracja Natywna", desc: "Wykorzystałem P/Invoke do połączenia kodu .NET z istniejącymi bibliotekami urządzeń C++, co pozwala na wydajną wymianę danych." },
        { title: "Konfigurowalne Połączenia", desc: "Opracowałem system do zarządzania ustawieniami połączeń za pomocą pliku Web.config, co pozwala na elastyczne wdrażanie w różnych środowiskach." },
        { title: "Mapowanie Struktur Danych", desc: "Opracowano reprezentacje natywnych struktur danych w języku C# z odpowiednim marshallingiem w celu zachowania kompatybilności." },
        { title: "Zoptymalizowana Obsługa Danych", desc: "Wdrożono przetwarzanie wsadowe sygnałów w celu poprawy wydajności podczas pracy z dużymi zbiorami danych." }
      ],
      technologies: ".NET Framework 4.8, C#, ASP.NET Web API, P/Invoke, Microsoft SQL Server, MariaDB/MySQL, Web.config"
    },
    {
      title: "Narzędzie do Eksploracji Baz Danych",
      tech: "C++20, MFC, BCGControlBar Pro, SQLite",
      keywords: "Zarządzanie Bazami Danych, Edytor SQL, Wizualizacja Danych, Architektura MDI",
      description: "Opracowałem aplikację desktopową ułatwiającą interakcję z bazą danych SQLite. Dzięki interfejsowi umożliwiającemu pracę z wieloma widokami bazy danych jednocześnie, narzędzie to oferuje łatwą w użyciu metodę przeglądania danych, uruchamiania zapytań i wizualizacji wyników.",
      size: "medium",
      keyFeatures: [
        { title: "Interfejs Wielodokumentowy", desc: "Opracowałem interfejs, który umożliwia użytkownikom manipulowanie wynikami zapytań, tabelami i wykresami w różnych oknach aplikacji." },
        { title: "Menedżer Połączeń z Bazą Danych", desc: "Opracowałem funkcje do przechowywania i kontrolowania konfiguracji połączeń z bazą danych w celu ułatwienia dostępu do różnych źródeł danych." },
        { title: "Edytor Zapytań SQL", desc: "Aby poprawić wydajność pisania zapytań, dodano edytor kodu z przydatnymi funkcjami, takimi jak podświetlanie składni i sugestie." },
        { title: "Elastyczna Architektura", desc: "Aby poprawić łatwość konserwacji, kod został uporządkowany w taki sposób, aby podzielić dostęp do danych, logikę biznesową i komponenty interfejsu użytkownika." }
      ],
      technologies: "C++20, MFC (Microsoft Foundation Classes), BCGControlBar Pro, SQLite, WinSock, Visual Studio 2022"
    },
    {
      title: "Modularna Platforma Akwizycji Danych",
      tech: "C++17/20, Node.js, Vue.js, Docker, Mikroserwisy",
      keywords: "Integracja Protokołów, Edge Computing, Mikroserwisy, Frontend SPA, DevOps",
      description: "Pomogłem opracować system, który gromadzi i analizuje dane z maszyn przemysłowych. Platforma łączy wiele technologii, zapewniając nowoczesny interfejs monitorowania i wszechstronne rozwiązanie, które można dostosować do różnych wymagań pomiarowych.",
      size: "large",
      keyFeatures: [
        { title: "Projekt Rozproszony", desc: "Pomogłem wdrożyć system współdziałających usług kontenerowych, które komunikują się ze sobą za pośrednictwem ZeroMQ." },
        { title: "Integracja ze Sprzętem", desc: "Opracowano adaptery protokołów C++ do łączenia się z różnymi typami urządzeń przemysłowych za pomocą standardowych i unikalnych protokołów." },
        { title: "Usługi Backendowe", desc: "Opracowałem serwer Node.js, który oferuje API konfiguracji i dostępu do danych z odpowiednimi kontrolami bezpieczeństwa." },
        { title: "Interfejs Użytkownika", desc: "Za pomocą Vue.js opracowano oparty na przeglądarce pulpit nawigacyjny, który wyświetla dane w czasie rzeczywistym i umożliwia zarządzanie systemem." }
      ],
      technologies: "C++17/20, Node.js (TypeScript, Express), Vue.js, Pinia, Bootstrap-Vue, ECharts, SQLite, MongoDB, RethinkDB, ZeroMQ, Docker, Snap7, libmodbus, JWT, WebSockets"
    }
  ]
};
