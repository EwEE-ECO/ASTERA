export interface Project {
  title: string
  description: string
  tags: string[]
  image: string
  quote: string
}

export const projects: Project[] = [
  {
    title: 'Барбершоп «Классика»',
    image: '/ASTERA/screenshots/classica.jpg',
    description:
      'Лендинг с каталогом услуг, прайсом и формой записи. Адаптивный дизайн, SEO-оптимизация, интеграция с Telegram для уведомлений о записях.',
    tags: ['HTML', 'CSS', 'JavaScript', 'Telegram API'],
    quote: 'Минимализм как классика',
  },
  {
    title: 'Stoming Clinic',
    image: '/ASTERA/screenshots/stoming.jpg',
    description:
      'Сайт стоматологической клиники с каталогом услуг, карточками врачей и онлайн-записью. Современный стек, акцент на скорость и UX.',
    tags: ['React', 'TypeScript', 'Tailwind', 'Next.js'],
    quote: 'Технологично и профессионально',
  },
  {
    title: 'DS-Motier',
    image: '/ASTERA/screenshots/ds-motier.jpg',
    description:
      'Open-source Discord бот для сборки серверов из DSL-шаблонов. Гибкая система конфигурации, модульная архитектура, поддержка плагинов.',
    tags: ['Python', 'Discord API', 'DSL', 'SQLite'],
    quote: 'Дерзко и функционально',
  },

]
