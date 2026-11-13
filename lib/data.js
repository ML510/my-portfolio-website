export const NAV_LINKS = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'services', label: 'Services' },
  { id: 'portfolio', label: 'Portfolio' },
  { id: 'contact', label: 'Contact' },
];

export const TYPED_STRINGS = ['Mahesh Lakshan', 'Programmer', 'Designer', 'YouTuber'];

export const HOME_ICONS = [
  'fa-brands fa-html5',
  'fa-brands fa-css3-alt',
  'fa-brands fa-js',
  'fa-brands fa-react',
];

export const STATS = [
  { value: 5, suffix: '+', label: 'Years Experience' },
  { value: 120, suffix: '+', label: 'Projects Done' },
  { value: 98, suffix: '%', label: 'Client Satisfaction' },
];

export const ABOUT_INFO = [
  { label: 'Name:', value: 'Mahesh Lakshan' },
  { label: 'Email:', value: 'mr.mahesh.303@gmail.com' },
  { label: 'From:', value: 'Colombo, Sri Lanka' },
  { label: 'Freelance:', value: 'Available', available: true },
];

export const SKILL_GROUPS = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML5', icon: 'fa-brands fa-html5', percent: 95 },
      { name: 'CSS3 / SASS', icon: 'fa-brands fa-css3-alt', percent: 90 },
      { name: 'JavaScript', icon: 'fa-brands fa-js', percent: 88 },
      { name: 'React.js', icon: 'fa-brands fa-react', percent: 82 },
    ],
  },
  {
    title: 'Backend & Tools',
    skills: [
      { name: 'Node.js', icon: 'fa-brands fa-node-js', percent: 78 },
      { name: 'MongoDB', icon: 'fa-solid fa-database', percent: 72 },
      { name: 'Git & GitHub', icon: 'fa-brands fa-git-alt', percent: 88 },
      { name: 'Figma', icon: 'fa-brands fa-figma', percent: 80 },
    ],
  },
];

export const SERVICES = [
  {
    icon: 'fa-solid fa-code',
    title: 'Web Development',
    description:
      'Building fast, scalable, and responsive websites using modern technologies and best practices.',
    features: ['HTML, CSS, JavaScript', 'React / Angular', 'Performance Optimization'],
  },
  {
    icon: 'fa-solid fa-palette',
    title: 'UI/UX Design',
    description:
      'Creating beautiful, user-centered designs that convert visitors into loyal customers.',
    features: ['Wireframing & Prototyping', 'Figma Design', 'Design Systems'],
    featured: true,
  },
  {
    icon: 'fa-solid fa-mobile-screen',
    title: 'Mobile Development',
    description:
      'Creating high-performance and user-friendly mobile applications that provide seamless experiences across Android and iOS devices.',
    features: ['Native App Development', 'Cross-Platform Solutions', 'Pixel Perfect Design'],
  },
];

export const PROJECT_FILTERS = [
  { key: 'all', label: 'All' },
  { key: 'web', label: 'Web' },
  { key: 'app', label: 'App' },
  { key: 'design', label: 'Design' },
];

export const PROJECTS = [
  {
    category: 'web',
    icon: 'fa-solid fa-laptop-code',
    tag: 'Web Development',
    title: 'E-Commerce Platform',
    description: 'A full-featured online shopping platform with cart, payments, and admin panel.',
    demo: '#',
    github: '#',
  },
  {
    category: 'app',
    icon: 'fa-solid fa-mobile-screen-button',
    tag: 'App Design',
    title: 'Task Management App',
    description:
      'Productivity application with real-time collaboration and analytics dashboard.',
    demo: '#',
    github: '#',
  },
  {
    category: 'design',
    icon: 'fa-solid fa-pen-nib',
    tag: 'UI Design',
    title: 'SaaS Landing Page',
    description:
      'Modern SaaS product landing page with animations and conversion-focused design.',
    demo: '#',
    github: '#',
  },
  {
    category: 'web',
    icon: 'fa-solid fa-chart-line',
    tag: 'Web Development',
    title: 'Analytics Dashboard',
    description: 'Data visualization dashboard with interactive charts and real-time updates.',
    demo: '#',
    github: '#',
  },
  {
    category: 'app',
    icon: 'fa-solid fa-comments',
    tag: 'App',
    title: 'Chat Application',
    description:
      'Real-time messaging app built with WebSocket, supporting group chats and file sharing.',
    demo: '#',
    github: '#',
  },
  {
    category: 'design',
    icon: 'fa-solid fa-store',
    tag: 'Design',
    title: 'Restaurant Website',
    description:
      'Elegant restaurant website with online reservation system and menu showcase.',
    demo: '#',
    github: '#',
  },
];

export const CONTACT = {
  email: 'mr.mahesh.303@gmail.com',
  phone: '+94 786704375',
  phoneHref: 'tel:+94786704375',
  location: 'Colombo, Sri Lanka',
};

export const SOCIALS = [
  { href: 'https://github.com/ML510', icon: 'fa-brands fa-github', label: 'GitHub' },
  {
    href: 'https://www.linkedin.com/in/mahesh-lakshan-203a153b4/',
    icon: 'fa-brands fa-linkedin-in',
    label: 'LinkedIn',
  },
];

// EmailJS values are public, client-side identifiers. Override them with
// NEXT_PUBLIC_EMAILJS_* env vars if you ever rotate them.
export const EMAILJS = {
  serviceId: process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID ?? 'service_dmtfbmu',
  templateId: process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID ?? 'template_ejangvq',
  publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY ?? 'aMNQZ4GWQ-G9533tc',
  toEmail: process.env.NEXT_PUBLIC_EMAILJS_TO_EMAIL ?? 'mr.mahesh.303@gmail.com',
};
