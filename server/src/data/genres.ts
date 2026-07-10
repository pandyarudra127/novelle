export interface Genre {
  name: string
  slug: string
  icon: string
  description: string
  children?: Genre[]
}

export const genres: Genre[] = [
  {
    name: 'Fiction',
    slug: 'fiction',
    icon: '📖',
    description: 'Literary works created from the imagination',
    children: [
      { name: 'Literary Fiction', slug: 'literary-fiction', icon: '📚', description: 'Character-driven works of artistic merit' },
      { name: 'Historical Fiction', slug: 'historical-fiction', icon: '🏛️', description: 'Fiction set in the past' },
      { name: 'Short Stories', slug: 'short-stories', icon: '📝', description: 'Brief fictional narratives' },
    ],
  },
  {
    name: 'Non-Fiction',
    slug: 'non-fiction',
    icon: '📰',
    description: 'Factual and informative works',
    children: [
      { name: 'Biography', slug: 'biography', icon: '👤', description: 'Accounts of people\'s lives' },
      { name: 'Memoir', slug: 'memoir', icon: '📓', description: 'Personal narratives' },
      { name: 'History', slug: 'history', icon: '📜', description: 'Study of past events' },
      { name: 'Science', slug: 'science', icon: '🔬', description: 'Scientific topics for general readers' },
      { name: 'Philosophy', slug: 'philosophy', icon: '🤔', description: 'Study of fundamental questions' },
      { name: 'Psychology', slug: 'psychology', icon: '🧠', description: 'Study of mind and behavior' },
      { name: 'True Crime', slug: 'true-crime', icon: '🔍', description: 'Real criminal cases' },
      { name: 'Essays', slug: 'essays', icon: '✍️', description: 'Short analytical compositions' },
    ],
  },
  {
    name: 'Fantasy',
    slug: 'fantasy',
    icon: '🐉',
    description: 'Fiction involving magical or supernatural elements',
    children: [
      { name: 'Epic Fantasy', slug: 'epic-fantasy', icon: '⚔️', description: 'Large-scale fantasy worlds' },
      { name: 'Urban Fantasy', slug: 'urban-fantasy', icon: '🏙️', description: 'Fantasy set in modern cities' },
      { name: 'Dark Fantasy', slug: 'dark-fantasy', icon: '🌑', description: 'Fantasy with horror elements' },
      { name: 'Romantic Fantasy', slug: 'romantic-fantasy', icon: '💕', description: 'Fantasy centered on romance' },
    ],
  },
  {
    name: 'Science Fiction',
    slug: 'science-fiction',
    icon: '🚀',
    description: 'Fiction based on imagined future science or technology',
    children: [
      { name: 'Hard Sci-Fi', slug: 'hard-sci-fi', icon: '🔧', description: 'Scientifically accurate sci-fi' },
      { name: 'Space Opera', slug: 'space-opera', icon: '🌌', description: 'Dramatic space adventures' },
      { name: 'Cyberpunk', slug: 'cyberpunk', icon: '💻', description: 'High-tech dystopian futures' },
      { name: 'Dystopian', slug: 'dystopian', icon: '🏚️', description: 'Oppressive societal futures' },
      { name: 'Time Travel', slug: 'time-travel', icon: '⏰', description: 'Stories involving time travel' },
    ],
  },
  {
    name: 'Mystery',
    slug: 'mystery',
    icon: '🔎',
    description: 'Fiction about solving crimes or puzzles',
    children: [
      { name: 'Cozy Mystery', slug: 'cozy-mystery', icon: '🏡', description: 'Lighthearted mysteries' },
      { name: 'Hardboiled', slug: 'hardboiled', icon: '🕵️', description: 'Gritty crime fiction' },
      { name: 'Police Procedural', slug: 'police-procedural', icon: '🚔', description: 'Realistic police work' },
    ],
  },
  {
    name: 'Thriller',
    slug: 'thriller',
    icon: '😱',
    description: 'Suspenseful fiction designed to thrill',
    children: [
      { name: 'Psychological Thriller', slug: 'psychological-thriller', icon: '🧩', description: 'Mind-bending suspense' },
      { name: 'Political Thriller', slug: 'political-thriller', icon: '🏛️', description: 'Political intrigue' },
      { name: 'Legal Thriller', slug: 'legal-thriller', icon: '⚖️', description: 'Courtroom suspense' },
    ],
  },
  {
    name: 'Romance',
    slug: 'romance',
    icon: '❤️',
    description: 'Fiction centered on romantic relationships',
    children: [
      { name: 'Contemporary Romance', slug: 'contemporary-romance', icon: '💑', description: 'Modern love stories' },
      { name: 'Historical Romance', slug: 'historical-romance', icon: '👗', description: 'Romance set in the past' },
      { name: 'Romantic Comedy', slug: 'romantic-comedy', icon: '😂', description: 'Humorous romance' },
      { name: 'Erotica', slug: 'erotica', icon: '🔥', description: 'Sexually explicit romance' },
    ],
  },
  {
    name: 'Horror',
    slug: 'horror',
    icon: '👻',
    description: 'Fiction designed to frighten or unsettle',
    children: [
      { name: 'Supernatural Horror', slug: 'supernatural-horror', icon: '👹', description: 'Otherworldly terror' },
      { name: 'Gothic Horror', slug: 'gothic-horror', icon: '🏰', description: 'Atmospheric, dark settings' },
      { name: 'Cosmic Horror', slug: 'cosmic-horror', icon: '🌠', description: 'Existential dread' },
    ],
  },
  {
    name: 'Young Adult',
    slug: 'young-adult',
    icon: '🧑',
    description: 'Books written for teenage readers',
    children: [
      { name: 'YA Fantasy', slug: 'ya-fantasy', icon: '🐉', description: 'Fantasy for teens' },
      { name: 'YA Contemporary', slug: 'ya-contemporary', icon: '🏫', description: 'Modern teen life' },
      { name: 'YA Romance', slug: 'ya-romance', icon: '💌', description: 'Teen romance' },
    ],
  },
  {
    name: 'Children\'s Books',
    slug: 'childrens-books',
    icon: '🧸',
    description: 'Books for young readers',
    children: [
      { name: 'Picture Books', slug: 'picture-books', icon: '🎨', description: 'Illustrated books for early readers' },
      { name: 'Middle Grade', slug: 'middle-grade', icon: '📙', description: 'Books for ages 8-12' },
      { name: 'Chapter Books', slug: 'chapter-books', icon: '📗', description: 'Early reader chapters' },
    ],
  },
  {
    name: 'Comics & Graphic Novels',
    slug: 'comics-graphic-novels',
    icon: '💬',
    description: 'Sequential art storytelling',
    children: [
      { name: 'Superhero', slug: 'superhero', icon: '🦸', description: 'Superhero stories' },
      { name: 'Manga', slug: 'manga', icon: '🇯🇵', description: 'Japanese comics' },
      { name: 'Graphic Memoir', slug: 'graphic-memoir', icon: '📖', description: 'Autobiographical comics' },
    ],
  },
  {
    name: 'Self-Improvement',
    slug: 'self-improvement',
    icon: '🌱',
    description: 'Books focused on personal growth',
    children: [
      { name: 'Self-Help', slug: 'self-help', icon: '💪', description: 'Personal development guides' },
      { name: 'Business', slug: 'business', icon: '💼', description: 'Business and entrepreneurship' },
      { name: 'Productivity', slug: 'productivity', icon: '⏱️', description: 'Efficiency and habits' },
    ],
  },
  {
    name: 'Poetry',
    slug: 'poetry',
    icon: '🎭',
    description: 'Literary works in verse',
    children: [
      { name: 'Classic Poetry', slug: 'classic-poetry', icon: '📜', description: 'Traditional poetry' },
      { name: 'Modern Poetry', slug: 'modern-poetry', icon: '✨', description: 'Contemporary verse' },
    ],
  },
  {
    name: 'Classics',
    slug: 'classics',
    icon: '🏺',
    description: 'Enduring works of literary merit',
  },
]

export function getAllGenreSlugs(): string[] {
  const slugs: string[] = []
  function collect(g: Genre[]) {
    for (const genre of g) {
      slugs.push(genre.slug)
      if (genre.children) collect(genre.children)
    }
  }
  collect(genres)
  return slugs
}

export function getGenreBySlug(slug: string): Genre | undefined {
  function find(g: Genre[]): Genre | undefined {
    for (const genre of g) {
      if (genre.slug === slug) return genre
      if (genre.children) {
        const found = find(genre.children)
        if (found) return found
      }
    }
    return undefined
  }
  return find(genres)
}
