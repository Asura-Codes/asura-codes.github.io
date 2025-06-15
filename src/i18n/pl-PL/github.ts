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
