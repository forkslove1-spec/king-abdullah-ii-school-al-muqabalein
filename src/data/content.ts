export type Slide =
  | { id: string; type: 'image'; src: string; alt: string; caption: string }
  | { id: string; type: 'video'; src: string; poster: string; alt: string; caption: string }

const asset = (path: string) => `${import.meta.env.BASE_URL}${path.replace(/^\//, '')}`

export const school = {
  name: 'Amman Crest Academy',
  shortName: 'Crest',
  tagline: 'Curiosity with character. Learning with purpose.',
  city: 'Amman, Jordan',
  email: 'admissions@ammancrest.academy',
  phone: '+962 6 555 0140',
  address: 'Abdoun Boulevard, Amman 11183, Jordan',
}

/** Full slideshow loop ≈ 30s (5 slides × 6s). */
export const SLIDE_MS = 6000

export const media = {
  campusDawn: asset('media/campus-dawn.jpg'),
  campusLife: asset('media/campus-life.jpg'),
  lab: asset('media/lab.jpg'),
  arts: asset('media/arts.jpg'),
  athletics: asset('media/athletics.jpg'),
  classroom: asset('media/classroom.jpg'),
  courtyard: asset('media/courtyard.jpg'),
  family: asset('media/family.jpg'),
  building: asset('media/building.jpg'),
}

export const slides: Slide[] = [
  {
    id: 'campus-dawn',
    type: 'image',
    src: media.campusDawn,
    alt: 'Modern campus buildings at sunrise',
    caption: 'A campus designed for discovery',
  },
  {
    id: 'campus-life',
    type: 'video',
    src: 'https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4',
    poster: media.campusLife,
    alt: 'Students walking across campus',
    caption: 'Everyday energy across our halls',
  },
  {
    id: 'lab',
    type: 'image',
    src: media.lab,
    alt: 'Students collaborating in a science lab',
    caption: 'Hands-on science and inquiry',
  },
  {
    id: 'arts',
    type: 'image',
    src: media.arts,
    alt: 'Creative arts studio with natural light',
    caption: 'Studios for makers and storytellers',
  },
  {
    id: 'athletics',
    type: 'image',
    src: media.athletics,
    alt: 'Athletics on a sunlit field',
    caption: 'Sport, stamina, and team spirit',
  },
]

export const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/academics', label: 'Academics' },
  { to: '/admissions', label: 'Admissions' },
  { to: '/campus', label: 'Campus' },
  { to: '/news', label: 'News' },
  { to: '/contact', label: 'Contact' },
]

export const dashboardCards = [
  {
    title: 'Academic Excellence',
    body: 'IB-inspired pathways with bilingual strength in English and Arabic.',
    to: '/academics',
    metric: '18:1',
    metricLabel: 'student–teacher',
  },
  {
    title: 'Admissions Open',
    body: 'Rolling applications for the new academic year across KG–Grade 12.',
    to: '/admissions',
    metric: 'KG–12',
    metricLabel: 'full continuum',
  },
  {
    title: 'Campus Life',
    body: 'Athletics, arts, robotics, and community service woven into every week.',
    to: '/campus',
    metric: '40+',
    metricLabel: 'clubs & teams',
  },
  {
    title: 'Jordan & Beyond',
    body: 'A globally minded community rooted in Amman, connected worldwide.',
    to: '/about',
    metric: '35+',
    metricLabel: 'nationalities',
  },
]

export const programs = [
  {
    title: 'Early Years',
    ages: 'Ages 3–5',
    summary: 'Play-rich learning that builds language, curiosity, and confidence.',
  },
  {
    title: 'Primary School',
    ages: 'Grades 1–5',
    summary: 'Foundational literacy, numeracy, and inquiry across the sciences and arts.',
  },
  {
    title: 'Middle School',
    ages: 'Grades 6–8',
    summary: 'Project-based learning with digital fluency and character education.',
  },
  {
    title: 'Senior School',
    ages: 'Grades 9–12',
    summary: 'University preparation with advanced STEM, humanities, and leadership.',
  },
]

export const newsItems = [
  {
    date: '2026-10-12',
    title: 'Crest Robotics wins regional STEM challenge',
    excerpt: 'Our senior team brought home gold with an autonomous navigation prototype.',
  },
  {
    date: '2026-09-28',
    title: 'Open House weekend draws record families',
    excerpt: 'Hundreds of visitors toured labs, studios, and the new learning commons.',
  },
  {
    date: '2026-09-05',
    title: 'New arts wing opens for the autumn term',
    excerpt: 'Purpose-built spaces for music, theatre, and visual arts are now live.',
  },
]

export const values = [
  {
    title: 'Integrity',
    body: 'We act with honesty and accountability in every classroom and corridor.',
  },
  {
    title: 'Curiosity',
    body: 'Questions are celebrated. Discovery is the daily rhythm of learning.',
  },
  {
    title: 'Belonging',
    body: 'Every student is seen, supported, and challenged to grow.',
  },
]
