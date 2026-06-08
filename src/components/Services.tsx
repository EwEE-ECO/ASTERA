import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import {
  Globe,
  Bot,
  Zap,
  Database,
} from 'lucide-react'

const services = [
  {
    num: '01', title: 'Веб-разработка',
    description: 'Современные сайты и веб-приложения, которые работают быстро, выглядят дорого и приносят реальные заявки.',
    items: ['Лендинги', 'Корпоративные сайты', 'Многостраничные сайты', 'Веб-приложения'],
    icon: Globe, price: 'от 5 000 ₽',
  },
  {
    num: '02', title: 'Telegram-боты',
    description: 'Умные боты для записи клиентов, обработки заявок и полной автоматизации бизнес-процессов.',
    items: ['Боты для записи', 'Обработка заявок', 'Автоматизация', 'Чат-боты'],
    icon: Bot, price: 'от 7 000 ₽',
  },
  {
    num: '03', title: 'Автоматизация',
    description: 'Интеграция сервисов, API, платежных систем и бизнес-инструментов в единую работающую систему.',
    items: ['Интеграции API', 'Платежные системы', 'CRM-связки', 'Сбор данных'],
    icon: Zap, price: 'от 10 000 ₽',
  },
  {
    num: '04', title: 'Парсинг данных',
    description: 'Сбор, мониторинг и структурирование информации из открытых источников для аналитики и бизнес-решений.',
    items: ['Мониторинг цен', 'Сбор контента', 'Аналитика рынка', 'Автообработка'],
    icon: Database, price: 'от 5 000 ₽',
  },
]

function ServiceSection({ service, index: _index }: { service: typeof services[0]; index: number }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-20%' })
  const Icon = service.icon

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : {}}
      transition={{ duration: 0.6 }}
      className="relative min-h-screen flex items-center border-t border-[#1E1E1E] overflow-hidden"
    >
      <div className="absolute inset-0 bg-black pointer-events-none" />
      <div className="relative w-full px-6 lg:px-16 xl:px-24 py-20 md:py-0">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div>
            <motion.span
              initial={{ y: 40, opacity: 0 }}
              animate={isInView ? { y: 0, opacity: 1 } : {}}
              transition={{ duration: 0.8, ease: [0.44, 0, 0, 1], delay: 0.1 }}
              className="service-number block mb-6"
            >
              {service.num}
            </motion.span>
            <motion.h2
              initial={{ y: 30, opacity: 0 }}
              animate={isInView ? { y: 0, opacity: 1 } : {}}
              transition={{ duration: 0.8, ease: [0.44, 0, 0, 1], delay: 0.2 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6"
            >
              {service.title}
            </motion.h2>
            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={isInView ? { y: 0, opacity: 1 } : {}}
              transition={{ duration: 0.8, ease: [0.44, 0, 0, 1], delay: 0.3 }}
              className="text-base md:text-lg text-[#8A8A8A] leading-relaxed mb-8 max-w-md"
            >
              {service.description}
            </motion.p>
            <motion.ul
              initial={{ y: 20, opacity: 0 }}
              animate={isInView ? { y: 0, opacity: 1 } : {}}
              transition={{ duration: 0.8, ease: [0.44, 0, 0, 1], delay: 0.4 }}
              className="space-y-3 mb-10"
            >
              {service.items.map((item) => (
                <li key={item} className="flex items-center gap-3 text-sm text-[#8A8A8A]">
                  <span className="h-px w-6 bg-white/20" />
                  {item}
                </li>
              ))}
            </motion.ul>
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={isInView ? { y: 0, opacity: 1 } : {}}
              transition={{ duration: 0.8, ease: [0.44, 0, 0, 1], delay: 0.5 }}
            >
              <a
                href="#cta"
                className="inline-flex items-center gap-2 text-sm font-medium text-white group"
              >
                Заказать
                <svg className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </a>
            </motion.div>
          </div>

          <motion.div
            initial={{ x: 60, opacity: 0 }}
            animate={isInView ? { x: 0, opacity: 1 } : {}}
            transition={{ duration: 1, ease: [0.44, 0, 0, 1], delay: 0.3 }}
            className="hidden lg:block"
          >
            <div className="relative animate-[float_5s_ease-in-out_infinite]">
              <div className="device-laptop rounded-xl border border-[#1E1E1E] bg-black overflow-hidden shadow-2xl">
                <div className="h-5 bg-black border-b border-[#1E1E1E] flex items-center px-3 gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-white/10" />
                  <span className="w-2 h-2 rounded-full bg-white/10" />
                  <span className="w-2 h-2 rounded-full bg-white/10" />
                  <div className="ml-3 h-3 w-32 rounded bg-white/5" />
                </div>
                <div className="aspect-[16/10] p-6 flex items-center justify-center">
                  <div className="text-center">
                    <Icon className="w-12 h-12 text-white/20 mx-auto mb-4" strokeWidth={1} />
                    <div className="space-y-2 max-w-xs mx-auto">
                      <div className="h-2 w-3/4 rounded bg-white/5 mx-auto" />
                      <div className="h-2 w-1/2 rounded bg-white/5 mx-auto" />
                      <div className="h-2 w-2/3 rounded bg-white/5 mx-auto" />
                    </div>
                    <div className="mt-6 flex gap-2 justify-center">
                      <span className="h-1.5 w-12 rounded-full bg-white/10" />
                      <span className="h-1.5 w-8 rounded-full bg-white/5" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-3 -right-3 px-4 py-2 rounded-full border border-[#1E1E1E] bg-[#000000] text-xs text-[#8A8A8A] shadow-xl">
                {service.price}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  )
}

export default function Services() {
  return (
    <section id="services" className="scroll-mt-20">
      {services.map((service, i) => (
        <ServiceSection key={service.num} service={service} index={i} />
      ))}
    </section>
  )
}
