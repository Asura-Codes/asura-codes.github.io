// Home page translations
export default {
  title: 'Witaj w moim portfolio',
  jobTitle: 'Programista Full-Stack',
  jobSubtitle: 'Pracuję z systemami, które muszą działać stabilnie pod obciążeniem, w czasie rzeczywistym i często na styku współczesnego oprogramowania i przestarzałej infrastruktury. Chociaż projektuję rozwiązania w Go i .NET, moimi najsilniejszymi językami programowania są C++, TypeScript i Python. Niezależnie od tego, czy opracowuję przemysłowy system wizualizacji, aplikację internetową czy archiwum danych, interesuje mnie jakość, wydajność i przejrzystość.',
  aboutMe: 'O mnie',
  aboutIntro: 'Jako programista lubię rozwiązywać problemy techniczne i tworzyć rozwiązania, na których ludzie mogą polegać. Moje doświadczenie obejmuje zarówno architekturę systemów niskiego poziomu, jak i nowoczesne technologie internetowe.',
  aboutJourney: 'W trakcie mojej kariery zawodowej miałem okazję pracować nad ważnymi projektami z zakresu automatyki przemysłowej i systemów czasu rzeczywistego. Niezależnie od tego, czy zajmowałem się projektowaniem systemów SCADA, wdrażaniem rozwiązań do gromadzenia danych, czy tworzeniem przyjaznych dla użytkownika interfejsów, każdy projekt nauczył mnie czegoś nowego i pomógł mi się rozwijać.',
  areasTitle: 'Obszary, w których miałem okazję pracować',
  contactMe: 'Kontakt',

  // Technology icons shown in the header
  technologyIcons: [
    { name: 'mdi-language-cpp', title: 'C++17/20' },
    { name: 'mdi-widgets', title: 'Qt 6 Framework' },
    { name: 'mdi-language-go', title: 'Go' },
    { name: 'mdi-docker', title: 'Docker' },
    { name: 'mdi-language-python', title: 'Python' },
    { name: 'mdi-nodejs', title: 'Node.js' },
    { name: 'mdi-vuejs', title: 'Vue.js' },
    { name: 'mdi-database', title: 'MongoDB, SQLite' },
    { name: 'mdi-code-json', title: 'JSON/APIs' },
    { name: 'mdi-lightning-bolt', title: 'MQTT, ZeroMQ' },
    { name: 'mdi-memory', title: 'Systemy Niskopoziomowe' },
    { name: 'mdi-cogs', title: 'CMake, vcpkg' }
  ],

  // Knowledge Cards as an array
  knowledgeCards: [
    {
      id: 'systemArchitecture',
      title: 'Architektura Systemów',
      description: 'Pracowałem nad skalowalnymi, modułowymi systemami elektrowni. Zajmuję się systemami rozproszonymi, mikrousługami i architekturą sterowaną zdarzeniami, które stawiają na pierwszym miejscu niezawodność i wydajność w środowiskach o znaczeniu krytycznym.',
      benefits: 'Umiejętności Techniczne:',
      benefitsDesc: 'C++17/20, Go, programowanie sterowane zdarzeniami, projektowanie mikroserwisów, programowanie współbieżne, architektury pamięci współdzielonej, konteneryzacja Docker',
      icon: 'mdi-hexagon-multiple'
    },
    {
      id: 'dataEngineering',
      title: 'Zarządzanie Danymi',
      description: 'Stworzyłem i wdrożyłem systemy do gromadzenia, przetwarzania i przechowywania danych przemysłowych z seriami czasowymi. Moje rozwiązania obejmują efektywne metody przechowywania zarówno bieżących, jak i historycznych danych, a także zapewniają wysoką integralność danych.',
      benefits: 'Umiejętności Techniczne:',
      benefitsDesc: 'Projektowanie baz danych (SQL i NoSQL), niestandardowe mechanizmy pamięci mapowanej w plikach, obsługa danych szeregów czasowych, wielowątkowe wzorce dostępu do danych, MongoDB, SQLite, ObjectBox',
      icon: 'mdi-database'
    },
    {
      id: 'uiDevelopment',
      title: 'Rozwój Interfejsów',
      description: 'Wykorzystywałem technologie desktopowe i internetowe do tworzenia interfejsów graficznych dla systemów przemysłowych. Interfejsy te umożliwiają operatorom przeglądanie skomplikowanych procesów, konfigurowanie systemów i pracę z danymi pochodzącymi z urządzeń.',
      benefits: 'Umiejętności Techniczne:',
      benefitsDesc: 'Qt, MFC, Vue.js, implementacje Model-View-Controller, rozwój aplikacji wieloplatformowych, BCGControlBar Pro, internacjonalizacja (i18n)',
      icon: 'mdi-monitor-dashboard'
    },
    {
      id: 'communicationProtocols',
      title: 'Systemy Komunikacyjne',
      description: 'Wykorzystywałem różne protokoły komunikacyjne do wysyłania i odbierania danych w czasie rzeczywistym w środowisku przemysłowym. Dbam o to, aby urządzenia terenowe, usługi zaplecza i interfejsy użytkownika mogły współpracować w bezpieczny i wydajny sposób.',
      benefits: 'Umiejętności Techniczne:',
      benefitsDesc: 'MQTT, ZeroMQ, WebSockety, REST API, protokoły przemysłowe (Modbus, IEC104, Siemens S7), sieci TCP/IP, bezpieczne projektowanie API (JWT)',
      icon: 'mdi-access-point-network'
    },
    {
      id: 'systemIntegration',
      title: 'Integracja Systemów',
      description: 'Specjalizuję się w łączeniu starych systemów przemysłowych z nowymi technologiami. W ramach mojej pracy integracyjnej konwertuję formaty binarne, tłumaczę protokoły i tworzę komponenty pośredniczące, które mogą ze sobą współpracować.',
      benefits: 'Umiejętności Techniczne:',
      benefitsDesc: 'Integracja C#/.NET z kodem natywnym, systemy wielojęzyczne (C++/Go/C#), deserializacja binarna, konwersja kodowania znaków, rozwój bramek API',
      icon: 'mdi-puzzle'
    }
  ]
};
