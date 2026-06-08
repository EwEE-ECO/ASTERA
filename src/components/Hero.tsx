import { motion } from 'framer-motion'

const ease = [0.44, 0, 0, 1] as const

const textVars = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, ease, delay: i * 0.08 },
  }),
}

export default function Hero() {
  return (
    <section className="relative overflow-hidden scroll-mt-20 min-h-screen">
      <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: 'url(/ASTERA/hero-bg.png)' }} />
      <div className="absolute inset-0 bg-black/60" />
      <div className="relative w-full min-h-screen flex items-center px-6 lg:px-16 xl:px-24">
        <div className="w-full max-w-3xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-40px' }}
          >
            <motion.span custom={0} variants={textVars} className="block text-xs font-medium tracking-[0.2em] uppercase text-[#8A8A8A] mb-6">
              Цифровая навигационная система
            </motion.span>
            <motion.h1 custom={1} variants={textVars} className="text-[clamp(40px,5vw,96px)] font-extrabold tracking-tight text-white leading-[0.9] mb-6">
              Ваш цифровой
              <br />
              ориентир
              <br />
              для бизнеса
            </motion.h1>
            <motion.p custom={2} variants={textVars} className="text-base md:text-lg text-[#8A8A8A] max-w-md leading-relaxed mb-10">
              Создаём сайты, ботов и системы автоматизации, которые помогают
              бизнесу работать эффективнее и получать больше заявок.
            </motion.p>
            <motion.div custom={3} variants={textVars} className="flex flex-col sm:flex-row gap-3">
              <a
                href="#cta"
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-[#000000] transition-all duration-300 hover:bg-white/90 active:scale-95"
              >
                Обсудить проект
                <svg className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </a>
              <a
                href="#services"
                className="group inline-flex items-center justify-center gap-2 rounded-full border border-[#1E1E1E] px-6 py-3 text-sm font-medium text-white transition-all duration-300 hover:bg-white/5 active:scale-95"
              >
                Наши услуги
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
