import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const reviews = [
  {
    text: 'Сделали отличный лендинг за 3 дня. Клиенты пошли сразу после запуска. Очень довольны результатом.',
    author: 'Алексей',
    role: 'Владелец кофейни',
  },
  {
    text: 'Заказали Telegram-бота для записи клиентов. Теперь не нужно отвечать на звонки — всё автоматизировано.',
    author: 'Екатерина',
    role: 'Салон красоты',
  },
  {
    text: 'Профессиональный подход к делу. Всё чётко, в срок и по договорённости. Рекомендую.',
    author: 'Дмитрий',
    role: 'Автосервис',
  },
  {
    text: 'Сделали корпоративный сайт с нуля. Учли все наши пожелания. Сайт выглядит дорого и современно.',
    author: 'Мария',
    role: 'Онлайн-школа',
  },
]

export default function Reviews() {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % reviews.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative py-20 md:py-32 scroll-mt-20 border-t border-[#1E1E1E]">
      <div className="w-full px-6 lg:px-16 xl:px-24">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-40px' }}
          className="max-w-2xl mb-16"
        >
          <motion.span
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } }}
            className="text-xs font-medium tracking-[0.2em] uppercase text-[#8A8A8A]"
          >
            Отзывы
          </motion.span>
          <motion.h2
            variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.44, 0, 0, 1], delay: 0.1 } } }}
            className="mt-4 text-4xl sm:text-5xl font-bold text-white leading-tight"
          >
            Нам доверяют
          </motion.h2>
        </motion.div>

        <div className="relative max-w-2xl">
          <div className="relative min-h-[200px] flex items-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5, ease: 'easeInOut' }}
                className="w-full"
              >
                <div className="text-7xl text-white/[0.04] leading-none mb-4 font-serif">
                  &ldquo;
                </div>
                <p className="text-xl md:text-2xl text-white/80 leading-relaxed">
                  {reviews[current].text}
                </p>
                <div className="mt-8 flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white/60 text-sm font-medium">
                    {reviews[current].author[0]}
                  </div>
                  <div>
                    <div className="text-white font-medium">{reviews[current].author}</div>
                    <div className="text-[#8A8A8A] text-sm">{reviews[current].role}</div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="flex items-center gap-3 mt-8">
            {reviews.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrent(index)}
                className={`h-1.5 rounded-full transition-all duration-500 ${
                  index === current ? 'w-12 bg-white' : 'w-3 bg-white/20 hover:bg-white/40'
                }`}
                aria-label={`Отзыв ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
