// Work page translations
export default {
  title: 'Moja Praca',
  projectsTitle: 'Projekty',
  experienceTitle: 'Doświadczenie',

  // Page details
  pageTitle: 'Tworzenie Oprogramowania Przemysłowego',
  pageSubtitle: 'Oprogramowanie dla systemów danych, automatyki i infrastruktury krytycznej',
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
      description: "Brałem udział w opracowaniu modułowego systemu sterowania i monitorowania automatyki przemysłowej. System niezawodnie obsługuje sygnały binarne i analogowe dzięki architekturze opartej na zdarzeniach. Posiada narzędzia do zarządzania alarmami, dynamicznej konfiguracji i wizualizacji procesów przemysłowych.",
      size: "large",
      keyFeatures: [
        { title: "Architektura Sterowana Zdarzeniami", desc: "Aby zapewnić niezawodność systemu, pracowałem nad przetwarzaniem sygnałów przy użyciu walidacji, parsowania i kolejkowania." },
        { title: "Komunikacja w Czasie Rzeczywistym", desc: "Wdrożyłem protokoły MQTT i ZeroMQ w celu ułatwienia komunikacji między urządzeniami terenowymi a serwerami zaplecza." },
        { title: "Dynamiczna Konfiguracja", desc: "Przyczyniłem się do opracowania funkcji umożliwiającej ładowanie konfiguracji bez przerywania pracy systemu z pamięci współdzielonej i plików projektu." },
        { title: "Zarządzanie Alarmami", desc: "Opracowałem logikę wykorzystującą konfigurowalne progi i zmiany stanu do identyfikowania nieprawidłowych warunków i ostrzegania użytkowników." },
        { title: "Bezpieczeństwo wątków", desc: "Wdrożyłem mechanizmy synchronizacji i algorytmy bez blokad, aby zapewnić integralność danych w środowiskach wielowątkowych." },
        { title: "Modułowa konstrukcja", desc: "System został zaprojektowany jako rozszerzalny, co pozwala na łatwe dodawanie nowych protokołów i funkcji." },
        { title: "Magazyn zdarzeń do audytu", desc: "Aby opracować niezmienną ścieżkę audytu do celów zgodności i analizy, wdrożyłem specjalny magazyn zdarzeń, który rejestruje wszystkie ważne zdarzenia systemowe, w tym działania operatorów, potwierdzenia alarmów i aktualizacje konfiguracji." },
        { title: "Integracja Syslog do scentralizowanego rejestrowania", desc: "W celu scentralizowanego monitorowania i rozwiązywania problemów zbudowałem usługę rejestrowania, która wykorzystuje protokół Syslog do przechwytywania i przekazywania komunikatów systemowych. Pozwala to na płynną integrację z narzędziami do zarządzania i analizy logów na poziomie przedsiębiorstwa." },
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
        { title: "Wydajne Składowanie Danych", desc: "Zaprojektowałem wysokowydajny system pamięci masowej, który optymalizuje operacje odczytu/zapisu przy zachowaniu integralności danych dotyczących pomiarów historycznych." },
        { title: "Akwizycja Danych", desc: "Opracowałem łączność z systemami Siemens, Modbus TCP i innymi systemami sterowania w celu skutecznego gromadzenia pomiarów analogowych i cyfrowych." },
        { title: "Architektura Pamięci Współdzielonej", desc: "Aby umożliwić jednoczesny dostęp do danych przez kilka procesów (pozyskiwanie, archiwizacja i wizualizacja), używam pamięci współdzielonej." },
        { title: "Rozwiązanie Archiwizacji", desc: "Dane szeregów czasowych przechowuję przy użyciu podejścia opartego na mapowaniu plików, aby ułatwić szybkie wyszukiwanie według okresu czasu." },
        { title: "Integralność Danych", desc: "Wprowadziłem dodatkowe procedury walidacji i funkcje odzyskiwania danych, aby pomóc chronić kluczowe dane operacyjne." },
        { title: "Modułowa konstrukcja", desc: "System został zaprojektowany jako rozszerzalny, co pozwala na łatwe dodawanie nowych protokołów i funkcji." },
        { title: "Optymalizacja wydajności", desc: "Wdrożyłem niestandardowe strategie indeksowania i buforowania, aby utrzymać prędkość pobierania danych poniżej milisekundy, nawet w przypadku milionów zarchiwizowanych pomiarów." },
        { title: "Dostęp do danych historycznych i real-time", desc: "Dostęp w czasie rzeczywistym i dostęp do danych historycznych”, desc: „System obsługuje zarówno pozyskiwanie danych w czasie rzeczywistym, jak i pobieranie danych historycznych, zapewniając kompleksowe możliwości monitorowania." },
        { title: "Kompatybilność między platformami", desc: "System został zaprojektowany do działania zarówno na platformach Windows, jak i Linux, zapewniając elastyczność wdrożenia." },
        { title: "Rozbudowane logowanie", desc: "Wdrożyłem szczegółowe mechanizmy logowania w celu śledzenia procesów pozyskiwania danych i wydajności systemu." },
        { title: "Usługi samonaprawiające się", desc: "Wdrożyłem mechanizm nadzorujący, który automatycznie restartuje usługi w przypadku ich awarii, zapewniając ciągłe pozyskiwanie danych nawet podczas nieoczekiwanych błędów." },
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
        { title: "Rozwój API", desc: "Opracowałem interfejs RESTful API z obsługą WebSocket do aktualizacji w czasie rzeczywistym i uwierzytelniania przy użyciu JWT i kluczy API." },
        { title: "Rozwiązania Przechowywania Danych", desc: "Aby osiągnąć równowagę między elastycznością a wymaganiami dotyczącymi wydajności, użyłem ObjectBox do rejestrowania zdarzeń i SQLite do ustawień konfiguracyjnych." },
        { title: "Real-Time", desc: "Wdrożyłem strumieniowanie danych na żywo oparte na protokole WebSocket, aby zapewnić operatorom natychmiastowy wgląd w zmiany w systemie i zdarzenia krytyczne." },
        { title: "Wdrożenie zabezpieczeń", desc: "Opracowałem kompleksowy model bezpieczeństwa z kontrolą dostępu opartą na rolach, szyfrowanymi kanałami komunikacji i rejestrowaniem audytowym w celu ochrony wrażliwych danych przemysłowych." },
        { title: "Konteneryzacja", desc: "Wdrożyłem rozwiązania wdrożeniowe oparte na Dockerze, aby zapewnić spójne działanie w środowiskach programistycznych, testowych i produkcyjnych, jednocześnie upraszczając skalowanie." },
        { title: "Integracja między systemami", desc: "Zbudowałem adaptery umożliwiające połączenie z wieloma przemysłowymi systemami sterowania, co pozwoliło na ujednolicenie monitorowania i sterowania w środowiskach technologii operacyjnej, które wcześniej były odizolowane." },
        { title: "Zarządzanie konfiguracją", desc: "Opracowałem scentralizowany system konfiguracji, który umożliwia administratorom zarządzanie ustawieniami rozproszonych komponentów z poziomu jednego interfejsu." },
        { title: "Pulpit monitorowania", desc: "Stworzyłem komponenty wizualizacyjne, które zapewniają aktualizacje statusu w czasie rzeczywistym oraz analizę trendów historycznych dla wskaźników operacyjnych." },
        { title: "Odporność na awarie", desc: "Wdrożyłem mechanizmy redundancji i protokoły przełączania awaryjnego, aby zapewnić ciągłość działania nawet w przypadku wystąpienia problemów z poszczególnymi usługami." },
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
        { title: "Interaktywna Edycja", desc: "Wykonałem narzędzia do tworzenia i edytowania modeli wizualnych, które umożliwiają konfigurację, grupowanie i manipulowanie właściwościami." },
        { title: "Serializacja Danych", desc: "Zaimplementowałem ładowanie i zapisywanie oparte na XML przy użyciu Boost. Dane projektu będą przechowywane przez cały czas trwania sesji PropertyTree." },
        { title: "Obsługa Wielu Platform", desc: "Pomogłem w zapewnieniu niezawodnego działania programu zarówno na specjalistycznych platformach wbudowanych, jak i systemach Windows." },
        { title: "Czysta Architektura", desc: "Wzorce projektowe Model-View, które wykorzystałem w celu rozdzielenia problemów i uproszczenia konserwacji kodu." },
        { title: "Projektowanie oparte na komponentach", desc: "Zrobiłem bibliotekę komponentów graficznych, które można używać wielokrotnie, żeby szybciej tworzyć schematy." },
        { title: "Płynne działanie", desc: "Aby schematy były responsywne, wdrożyłem system określania animacji i zmian stanu elementów graficznych w oparciu o aktualne warunki danych." },
        { title: "Optymalizacja renderowania", desc: "Nawet w przypadku dużych i skomplikowanych schematów skoncentrowałem się na usprawnieniu procesu renderowania, aby zapewnić płynną nawigację i interakcję." },
        { title: "Przyjazny interfejs użytkownika", desc: "Aby poprawić komfort użytkowania, dodałem interfejs typu „przeciągnij i upuść” do prostego umieszczania i konfigurowania komponentów." },
        { title: "Niestandardowe elementy graficzne", desc: "Dla reprezentacji komponentów przemysłowych opracowałem unikalne podklasy QGraphicsItem, umożliwiające specjalistyczny wygląd i zachowanie." },
        { title: "Nawigacja z funkcją powiększania i przesuwania", desc: "Aby ułatwić nawigację po schematach o dużej skali, dodałem do QGraphicsView funkcje płynnego powiększania i przesuwania." },
      ],
      technologies: "C++17, Qt (Widgets, Signals & Slots), Boost (Bimap, MPL, Serialization, Lexical_Cast, Algorithm), CMake, vcpkg"
    },
    {
      title: "Warstwa Pośrednia API dla Łączenia REST i Protokołu Własnościowego",
      tech: ".NET Framework, C#, Interoperacyjność Natywna",
      keywords: "Most REST, Protokół Własnościowy, Komunikacja z Urządzeniami",
      description: "Zaprojektowałem rozwiązanie typu middleware, które wykorzystuje zastrzeżone protokoły specjalistycznych systemów przemysłowych do łączenia ich z nowoczesnymi aplikacjami internetowymi. Interfejs API przekształca standardowe żądania REST na konkretne protokoły komunikacyjne wymagane przez sprzęt.",
      size: "small",
      keyFeatures: [
        { title: "Integracja Natywna", desc: "Wykorzystałem P/Invoke do połączenia kodu .NET z istniejącymi bibliotekami urządzeń C++, umożliwiając wydajną wymianę danych." },
        { title: "Konfigurowalne Połączenia", desc: "Skonstruowałem system do zarządzania ustawieniami połączeń poprzez Web.config w celu dostosowania do różnych środowisk." },
        { title: "Mapowanie Struktur Danych", desc: "Opracowałem reprezentacje natywnych struktur danych w języku C# z odpowiednim marshallingiem w celu zachowania kompatybilności." },
        { title: "Zoptymalizowana Obsługa Danych", desc: "Wdrożyłem przetwarzanie wsadowe sygnałów w celu poprawy wydajności podczas pracy z dużymi zbiorami danych." },
        { title: "Przetwarzanie asynchroniczne", desc: "Aby zapewnić klientom responsywne doświadczenie, zastosowałem wzorce asynchroniczne do zarządzania długotrwałymi operacjami urządzeń bez zakłócania działania API." },
        { title: "Solidna obsługa błędów", desc: "Przekształcając błędy urządzeń własnościowych na standardowe kody statusu HTTP i wdrażając dokładne rejestrowanie błędów, ułatwiłem klientom internetowym płynne radzenie sobie z problemami." },
        { title: "Interaktywna dokumentacja API", desc: "Do stworzenia dokumentacji API wykorzystano Swagger/OpenAPI, co zapewniło programistom korzystającym z punktów końcowych REST jasne, interaktywne instrukcje." },
        { title: "Bezpieczny dostęp do punktów końcowych", desc: "Aby chronić punkty końcowe API i zapewnić, że tylko autoryzowani klienci mogą komunikować się z podstawowymi systemami przemysłowymi, wdrożyłem uwierzytelnianie oparte na tokenach." },
        { title: "Monitorowanie stanu systemu", desc: "Wprowadziłem specjalny punkt końcowy do sprawdzania stanu, który potwierdza stan oprogramowania pośredniczącego i jego połączenie z podstawowym systemem własnościowym." },
        { title: "Buforowanie wydajności", desc: "Aby poprawić czas odpowiedzi na typowe zapytania i zmniejszyć obciążenie podstawowego systemu własnościowego, wdrożyłem warstwę buforowania do przechowywania często używanych danych." },
        { title: "Transformacja i normalizacja danych", desc: "Wdrożyłem logikę przekształcającą zastrzeżone formaty danych na standardowy format JSON, aby klienci internetowi mogli z nich łatwo korzystać. Aby przedstawiać informacje w sposób spójny i łatwy do zrozumienia, wymagało to zarządzania różnymi typami danych i kolejnością bajtów." },
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
        { title: "Interfejs Wielodokumentowy", desc: "Opracowałem interfejs, który umożliwia użytkownikom pracę z tabelami, wykresami i wynikami zapytań w różnych oknach aplikacji." },
        { title: "Menedżer Połączeń z Bazą Danych", desc: "Aby ułatwić dostęp do wielu źródeł danych, zaprojektowałem funkcje do przechowywania i zarządzania konfiguracjami połączeń z bazami danych." },
        { title: "Edytor Zapytań SQL", desc: "Dodałem edytor kodu z przydatnymi funkcjami, takimi jak podświetlanie składni i sugestie, aby zwiększyć wydajność pisania zapytań." },
        { title: "Elastyczna Architektura", desc: "Zorganizowałem kod tak, aby oddzielić interfejs użytkownika, logikę biznesową i komponenty dostępu do danych, aby ułatwić jego utrzymanie." },
        { title: "Wizualizacja danych", desc: "Aby pomóc użytkownikom dostrzec trendy i wzorce w ich danych, dodałem komponent wykresów do wyświetlania wyników zapytań." },
        { title: "Funkcja eksportu danych", desc: "Dodałem funkcję, która umożliwia eksportowanie danych z tabel i wyników zapytań do popularnych formatów, takich jak CSV i XML, w celu przeprowadzenia analizy zewnętrznej." },
        { title: "Widok drzewa schematu", desc: "Aby ułatwić użytkownikom nawigację po schematach baz danych, w tym tabelach, widokach i indeksach, opracowałem komponent widoku drzewa." },
        { title: "Zarządzanie transakcjami", desc: "Aby zachować integralność danych podczas skomplikowanych operacji, wprowadziłem kontrolki do ręcznego zarządzania transakcjami bazy danych (BEGIN, COMMIT, ROLLBACK)." },
      ],
      technologies: "C++20, MFC (Microsoft Foundation Classes), BCGControlBar Pro, SQLite, WinSock, Visual Studio 2022"
    },
    {
      title: "Modularna Platforma Akwizycji Danych",
      tech: "C++17/20, Node.js, Vue.js, Python3, Docker, Mikroserwisy",
      keywords: "Integracja Protokołów, Edge Computing, Mikroserwisy, Frontend SPA, DevOps",
      description: "Pomogłem opracować system, który gromadzi i analizuje dane z maszyn przemysłowych. Platforma łączy wiele technologii, zapewniając nowoczesny interfejs monitorowania i wszechstronne rozwiązanie, które można dostosować do różnych wymagań pomiarowych.",
      size: "large",
      keyFeatures: [
        { title: "Projekt Rozproszony", desc: "Wdrożyłem interoperacyjny system usług kontenerowych, który wykorzystuje ZeroMQ do komunikacji między sobą." },
        { title: "Integracja ze Sprzętem", desc: "Aby połączyć się z różnymi rodzajami urządzeń przemysłowych przy użyciu zarówno protokołów wspólnych, jak i zastrzeżonych, stworzyłem adaptery protokołów C++." },
        { title: "Usługi Backendowe", desc: "Opracowałem serwer Node.js, który zapewnia dostęp do danych i API konfiguracyjne z odpowiednimi zabezpieczeniami." },
        { title: "Interfejs Użytkownika", desc: "Korzystam z Vue.js, przeglądarkowego pulpitu nawigacyjnego zaprojektowanego w celu ułatwienia zarządzania systemem i wyświetlania danych w czasie rzeczywistym." },
        { title: "Zarządzanie konfiguracją", desc: "Aby umożliwić dynamiczne aktualizacje i ponowne ładowanie usług bez przestojów, opracowałem scentralizowany system konfiguracji kontrolowany przez REST API." },
        { title: "Środowisko symulacyjne", desc: "Aby umożliwić niezawodne tworzenie, testowanie i procesy CI/CD bez konieczności stosowania sprzętu fizycznego, opracowałem usługę symulacyjną, która naśladuje rzeczywiste zachowanie sprzętu." },
        { title: "DevOps i wdrażanie", desc: "Zapewniłem spójne i powtarzalne wdrożenia w różnych środowiskach poprzez wdrożenie konteneryzacji opartej na Dockerze i zautomatyzowanych skryptów kompilacji dla wszystkich usług." },
        { title: "Import/eksport danych", desc: "Za pomocą API stworzyłem wszechstronny system zarządzania danymi, który umożliwia importowanie i eksportowanie konfiguracji oraz danych pomiarowych w różnych formatach." },
        { title: "Wysokodostępny moduł równoważenia obciążenia", desc: "Dzięki automatycznemu przekierowywaniu ruchu z nieaktywnych węzłów udało mi się rozdzielić żądania między wiele serwerów za pomocą modułu równoważenia obciążenia Node.js, co zapewnia wysoką dostępność i odporność na awarie." },
        { title: "Serwery protokołów przemysłowych", desc: "Aby umożliwić systemowi udostępnianie danych zewnętrznym sterownikom PLC i systemom sterowania, opracowałem implementacje serwerowe dla Siemens S7, Modbus TCP i protokołów zastrzeżonych." },
        { title: "Wymiana danych o niskim opóźnieniu", desc: "W celu ułatwienia wymiany danych o bardzo niskim opóźnieniu między kluczowymi usługami C++ i Node.js, wykorzystałem pamięć współdzieloną do komunikacji międzyprocesowej." },
        { title: "Zautomatyzowane wdrażanie i zarządzanie", desc: "W celu zapewnienia wydajnych wdrożeń SSH opracowałem skrypty automatyzacji oparte na języku Python z wykorzystaniem Fabric, a do niezawodnego zarządzania usługami w środowisku produkcyjnym wykonałem instalator." },
        { title: "Transmisja danych w czasie rzeczywistym", desc: "Aby zapewnić szybkie aktualizacje o niskim opóźnieniu, wdrożyłem moduły wysyłające dane w wątku, które transmitują przetworzone dane do klientów za pośrednictwem UDP/Radio i przesyłają je do wewnętrznych kolejek." },
        { title: "Redundantni klienci", desc: "Aby zapewnić niezawodny odbiór danych nawet w trudnych warunkach sieciowych, zaprojektowałem klientów danych, którzy obsługują zarówno TCP, jak i UDP i mają opcjonalne tryby radio/UDP dla redundancji." },
        { title: "Bezpieczne zarządzanie użytkownikami i dostępem", desc: "Aby zabezpieczyć wrażliwe punkty końcowe API i konfiguracje systemu, wdrożyłem kompleksową warstwę zabezpieczeń, która obejmowała kontrolę dostępu opartą na rolach, zarządzanie użytkownikami i uwierzytelnianie." },
        { title: "Zaawansowane monitorowanie i wizualizacja", desc: "Oprócz narzędzia do podglądu pamięci współdzielonej służącego do diagnostyki niskopoziomowej, opracowałem internetowe pulpity nawigacyjne do monitorowania stanu systemu w czasie rzeczywistym, dzienników zdarzeń i danych pomiarowych." },
        { title: "Usługa automatycznego wykonywania zadań", desc: "W celu zautomatyzowania uruchamiania systemu zaprojektowałem usługę opartą na języku Python, która zarządzała bazami danych za pomocą narzędzi do tworzenia kopii zapasowych i przywracania danych, ładowała konfiguracje i inicjowała moduły sprzętowe." },
        { title: "Wtyczki Node.js C++", desc: "Aby wypełnić lukę między zasobami systemowymi niskiego poziomu a językiem JavaScript wysokiego poziomu, opracowałem natywne dodatki C++ dla Node.js przy użyciu `node-gyp`. Znacznie poprawiło to wydajność operacji wymagających intensywnego przetwarzania danych, umożliwiając bezpośredni, szybki dostęp do bibliotek protokołów przemysłowych i pamięci współdzielonej z back-endu Node.js." },
        { title: "Rozszerzenia Python C++ do automatyzacji", desc: "Aby udostępnić podstawowe funkcje usług C++ skryptom automatyzacji i zarządzania, opracowałem rozszerzenia C++ dla języka Python. Połączenie łatwości obsługi języka Python z szybkością języka C++ pozwoliło skryptom Python na skuteczną komunikację z pamięcią współdzieloną systemu i wykonywanie zadań konfiguracyjnych." },
        { title: "System kompilacji międzyplatformowej", desc: "Korzystając z CMake i skryptów powłoki, stworzyłem kompletny system kompilacji, który ułatwia kompilację krzyżową dla architektur ARM. Dzięki temu proces kompilacji jest spójny na wszystkich platformach i umożliwia wdrażanie usług C++ o krytycznym znaczeniu dla wydajności na urządzeniach wbudowanych." },
        { title: "Serializacja danych w wielu formatach", desc: "Wykorzystałem różne formaty, aby zaimplementować skuteczną serializację danych, takie jak MessagePack do małej, szybkiej komunikacji sieciowej, BSON do przechowywania baz danych oraz nlohmann/json do konfiguracji czytelnej dla człowieka. Ta elastyczność poprawiła wydajność i interoperacyjność całego systemu." },
        { title: "Dynamiczne generowanie raportów PDF", desc: "Korzystając z bibliotek takich jak `pdfkit`, opracowałem funkcję serwera, która umożliwia dynamiczne generowanie raportów PDF zawierających dane pomiarowe i stan systemu. Dzięki temu użytkownicy mogą eksportować profesjonalnie sformatowane dokumenty bezpośrednio z interfejsu internetowego w celu analizy i dokumentacji." }
      ],
      technologies: "C++17/20, Node.js (TypeScript, Express), Python3, Vue.js, Pinia, Bootstrap-Vue, ECharts, SQLite, MongoDB, RethinkDB, ZeroMQ, Docker, Snap7, libmodbus, JWT, WebSockets, Flask, Fabric, CMake"
    }
  ]
};
