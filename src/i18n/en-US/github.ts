// Github page translations
export default {
  title: 'My Creative Projects & Original Content',
  description: 'Explore the projects and resources I have crafted to express my creativity and passion for technology.',

  // Sections
  sections: {
    articles: 'Articles & Resources',
    applications: 'Projects'
  },

  // Articles
  articles: {
    title: 'Articles & Resources',
    description: 'Comprehensive articles and easy-to-use reference manuals for a range of development methodologies and technologies.',
    entries: [
      {
        title: 'Remote GDB for Raspberry Pi',
        description: 'Configure remote debugging with GDB for Raspberry Pi Compute Module 4.',
        topics: ['Environment Setup', 'Configuration', 'Troubleshooting'],
        link: 'https://pisanie.dev/cheetsheets/RemoteGDB/%C5%9Brodowisko-i-konfiguracja.html',
        language: 'Polish'
      },
      {
        title: 'Introduction to C Programming',
        description: 'Comprehensive guide to C programming fundamentals.',
        topics: ['Syntax', 'Memory Management', 'Standard Library'],
        link: 'https://pisanie.dev/wprowadzenie-do-c/',
        language: 'Polish'
      }
    ]
  },

  // Applications
  applications: {
    title: 'Projects',
    description: "Projects and code implementations I've developed to solve various challenges.",
    entries: [
      {
        title: 'TypeScript with Vuetify 3 Block Components',
        description: 'Building block-based interfaces with TypeScript and Vuetify 3.',
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
          'Component Architecture',
          'TypeScript Integration',
          'Responsive Design',
          'WebAssembly Integration',
          'Monorepo Tooling',
          'Testing & Linting'
        ],
        link: 'https://pisanie.dev/ts-vuetify3-blocks-vm/'
      },
      {
        title: 'Thingiverse 3D Designs',
        description: 'Collection of my original 3D printable designs and models published on Thingiverse.',
        technologies: [
          'Blender',
          '3D Modeling',
          'Ultimaker',
          '3D Printing'
        ],
        topics: [
          'Functional household items and gadgets',
          'Creative solutions for everyday problems',
          'Open-source designs for community use',
          'Optimized for FDM 3D printing'
        ],
        link: 'https://www.thingiverse.com/asuracodes/designs'
      }
    ]
  },

  // Common
  viewResource: 'View Resource',
  viewProject: 'View Project',
  viewOnGitHub: 'View on GitHub',

  // Language map for flags and names
  languages: {
    english: { name: 'English', flag: '🇬🇧' },
    polish: { name: 'Polish', flag: '🇵🇱' },
    spanish: { name: 'Spanish', flag: '🇪🇸' },
    german: { name: 'German', flag: '🇩🇪' },
    french: { name: 'French', flag: '🇫🇷' }
    // Add more as needed
  }
};
