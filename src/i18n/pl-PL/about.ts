// Tłumaczenia strony „O mnie”
export default {
  title: 'O mnie',

  jobTitle: 'Software Engineer',
  jobSubtitle:
    'Projektuję i buduję oprogramowanie, które łączy przemysłowy sprzęt z nowoczesnymi systemami. Głównie C++, TypeScript, Python i Go. Skupiam się na niezawodności, wydajności i kodzie, który kolejna osoba będzie w stanie utrzymać.',

  aboutMe: 'O mnie',
  aboutIntro:
    'Moja praca obejmuje kod niskopoziomowy, przemysłowe SCADA, aplikacje webowe i eksperymenty z lokalnymi LLM. Lubię rozumieć, jak coś działa, i upraszczać to.',
  aboutJourney:
    'Przez lata pracowałem przy automatyzacji przemysłowej, akwizycji danych w czasie rzeczywistym, wizualizacjach SCADA i middleware’ie, który to wszystko spina. Każdy projekt utwierdził mnie w przekonaniu, że jasna architektura i utrzymywalny kod są ważniejsze niż podążanie za trendami.',

  areasTitle: 'Obszary, w których pracuję',

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
    { name: 'mdi-memory', title: 'Systemy niskopoziomowe' },
    { name: 'mdi-cogs', title: 'CMake, vcpkg' },
  ],

  // Knowledge Cards as an array
  knowledgeCards: [
    {
      id: 'systemArchitecture',
      title: 'Architektura systemów',
      description:
        'Projektuję systemy dla elektrowni i obiektów przemysłowych: rozproszone, sterowane zdarzeniami i na tyle modularne, żeby dało się je zrozumieć. Niezawodność i wydajność są ważniejsze niż sprytne sztuczki.',
      benefits: 'Umiejętności techniczne:',
      benefitsDesc:
        'C++17/20, Go, programowanie sterowane zdarzeniami, projektowanie mikroserwisów, programowanie współbieżne, architektury pamięci współdzielonej, konteneryzacja Docker',
      icon: 'mdi-hexagon-multiple',
    },
    {
      id: 'dataEngineering',
      title: 'Zarządzanie danymi',
      description:
        'Buduję potoki, które zbierają, przetwarzają i przechowują przemysłowe dane szeregów czasowych. Skupiam się na szybkim dostępie, solidnej integralności i magazynie, który wytrzymuje obciążenie.',
      benefits: 'Umiejętności techniczne:',
      benefitsDesc:
        'Projektowanie baz danych (SQL i NoSQL), niestandardowe mechanizmy pamięci mapowanej w plikach, obsługa danych szeregów czasowych, wielowątkowe wzorce dostępu do danych, MongoDB, SQLite, ObjectBox',
      icon: 'mdi-database',
    },
    {
      id: 'uiDevelopment',
      title: 'Rozwój interfejsów',
      description:
        'Piszę interfejsy desktopowe i webowe, które pozwalają operatorom pracować ze złożonymi danymi przemysłowymi. Qt, Vue i wystarczająco dużo MFC, żeby docenić nowoczesne narzędzia.',
      benefits: 'Umiejętności techniczne:',
      benefitsDesc:
        'Qt, MFC, Vue.js, implementacje Model-View-Controller, rozwój aplikacji wieloplatformowych, BCGControlBar Pro, internacjonalizacja (i18n)',
      icon: 'mdi-monitor-dashboard',
    },
    {
      id: 'communicationProtocols',
      title: 'Systemy komunikacyjne',
      description:
        'Łączę urządzenia terenowe, backendy i interfejsy przez MQTT, ZeroMQ, WebSockety, REST i protokoły przemysłowe takie jak Modbus, IEC104 i Siemens S7.',
      benefits: 'Umiejętności techniczne:',
      benefitsDesc:
        'MQTT, ZeroMQ, WebSockety, REST API, protokoły przemysłowe (Modbus, IEC104, Siemens S7), sieci TCP/IP, bezpieczne projektowanie API (JWT)',
      icon: 'mdi-access-point-network',
    },
    {
      id: 'systemIntegration',
      title: 'Integracja systemów',
      description:
        'Duża część mojej pracy znajduje się pomiędzy warstwami: tłumaczenie protokołów, konwersja formatów binarnych i pisanie middleware’u, żeby systemy legacy mogły integrować się z nowymi rozwiązaniami.',
      benefits: 'Umiejętności techniczne:',
      benefitsDesc:
        'Integracja C#/.NET z kodem natywnym, systemy wielojęzyczne (C++/Go/C#), deserializacja binarna, konwersja kodowania znaków, rozwój bramek API',
      icon: 'mdi-puzzle',
    },
  ],

  socialTitle: 'Znajdź mnie online',
  contactTitle: 'Zostaw mi wiadomość',

  nameLabel: 'Imię',
  messageLabel: 'Wiadomość',
  submitButton: 'Wyślij wiadomość',
  thankYouMessage: 'Dziękuję za twoją wiadomość!',
  errorMessage: 'Wystąpił błąd. Spróbuj ponownie później.',
  redirectInfo:
    'Po kliknięciu zostaniesz przekierowany do Google Forms, aby dokończyć wysyłanie wiadomości.',
};
