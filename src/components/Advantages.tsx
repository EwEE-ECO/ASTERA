import { motion, useInView } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'
import {
  Rocket,
  FileText,
  CreditCard,
  Headphones,
  Target,
  Cpu,
} from 'lucide-react'

const advantages = [
  { icon: Rocket, title: 'Быстрый запуск', description: 'Оперативно погружаемся в задачу и предлагаем работающее решение без затянутых согласований.' },
  { icon: FileText, title: 'Работа по договору', description: 'Все проекты оформляются официально. Вы получаете договор и закрывающие документы.' },
  { icon: CreditCard, title: 'Официальная оплата', description: 'Работаем через самозанятость. Предоставляем чек и полную прозрачность финансов.' },
  { icon: Headphones, title: 'Поддержка после запуска', description: 'Не бросаем проекты после сдачи. Обеспечиваем техническую поддержку и сопровождение.' },
  { icon: Target, title: 'Индивидуальный подход', description: 'Каждый проект разрабатывается под конкретные задачи бизнеса, а не по шаблону.' },
  { icon: Cpu, title: 'Современные технологии', description: 'Используем актуальный стек инструментов для быстрой и качественной разработки.' },
]

const stats = [
  { value: 7, suffix: '+', label: 'Видов услуг' },
  { value: 10, suffix: '+', label: 'Выполненных проектов' },
  { value: 100, suffix: '%', label: 'Вовлечённость в проект' },
  { value: 24, suffix: '/7', label: 'Поддержка клиентов' },
]

const ease = [0.44, 0, 0, 1] as const

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-40px' })
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!isInView) return
    const duration = 1500
    const steps = 60
    const increment = value / steps
    let current = 0
    const timer = setInterval(() => {
      current += increment
      if (current >= value) {
        setCount(value)
        clearInterval(timer)
      } else {
        setCount(Math.floor(current))
      }
    }, duration / steps)
    return () => clearInterval(timer)
  }, [isInView, value])

  return (
    <div ref={ref} className="text-5xl font-bold text-white tabular-nums tracking-tight">
      {count}{suffix}
    </div>
  )
}

const cardVars = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease, delay: i * 0.08 },
  }),
}

export default function Advantages() {
  return (
    <section id="advantages" className="relative py-20 md:py-32 scroll-mt-20 border-t border-[#1E1E1E]">
      <div className="w-full px-6 lg:px-16 xl:px-24">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-40px' }}
          className="max-w-2xl mb-20"
        >
          <motion.span variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } }} className="text-xs font-medium tracking-[0.2em] uppercase text-[#8A8A8A]">
            Преимущества
          </motion.span>
          <motion.h2 variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.44, 0, 0, 1], delay: 0.1 } } }} className="mt-4 text-4xl sm:text-5xl font-bold text-white leading-tight">
            Почему выбирают нас
          </motion.h2>
          <motion.p variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.44, 0, 0, 1], delay: 0.2 } } }} className="mt-4 text-base md:text-lg text-[#8A8A8A] leading-relaxed">
            Мы не обещаем невозможного. Мы делаем качественные продукты и честно сопровождаем клиентов на всех этапах.
          </motion.p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.8, ease }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-20 pb-20 border-b border-[#1E1E1E]"
        >
          {stats.map((stat) => (
            <div key={stat.label}>
              <Counter value={stat.value} suffix={stat.suffix} />
              <div className="text-sm text-[#8A8A8A] mt-2">{stat.label}</div>
            </div>
          ))}
        </motion.div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {advantages.map((adv, i) => {
            const Icon = adv.icon
            return (
              <motion.div
                key={adv.title}
                custom={i}
                variants={cardVars}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-40px' }}
                whileHover={{ scale: 1.02, borderColor: 'rgba(255,255,255,0.2)' }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                className="group relative rounded-2xl border border-[#1E1E1E] p-6 md:p-8 bg-black"
              >
                <motion.div
                  whileHover={{ rotate: [0, -10, 10, -5, 0] }}
                  transition={{ duration: 0.4 }}
                  className="mb-4 flex h-9 w-9 items-center justify-center rounded-lg border border-[#1E1E1E] text-white/60 group-hover:text-white group-hover:border-white/20 transition-all duration-500"
                >
                  <Icon className="h-4 w-4" />
                </motion.div>
                <h3 className="text-base md:text-lg font-semibold text-white mb-2">{adv.title}</h3>
                <p className="text-sm text-[#8A8A8A] leading-relaxed">{adv.description}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
