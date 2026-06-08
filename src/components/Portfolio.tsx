import { useState, useRef } from 'react'
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { projects } from '../data/projects'

const slideVariants = {
  enter: (dir: number) => ({ x: dir > 0 ? 200 : -200, opacity: 0 }),
  center: { x: 0, opacity: 1 },
  exit: (dir: number) => ({ x: dir > 0 ? -200 : 200, opacity: 0 }),
}

function ParallaxImage({ src, alt }: { src: string; alt: string }) {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })
  const y = useTransform(scrollYProgress, [0, 1], ['-10%', '10%'])

  return (
    <div ref={ref} className="aspect-[16/10] bg-black overflow-hidden relative">
      <motion.img
        src={src}
        alt={alt}
        style={{ y }}
        className="w-full h-full object-cover will-change-transform"
      />
    </div>
  )
}

export default function Portfolio() {
  const [[activeIndex, dir], setState] = useState([0, 0])

  const goTo = (index: number) => {
    const next = (((index % projects.length) + projects.length) % projects.length)
    setState([next, next > activeIndex ? 1 : -1])
  }

  const project = projects[activeIndex]

  return (
    <section
      id="portfolio"
      className="relative min-h-screen py-20 md:py-32 overflow-hidden scroll-mt-20 border-t border-[#1E1E1E]"
    >
      <div className="w-full px-6 lg:px-16 xl:px-24 h-full">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-40px' }}
          className="max-w-2xl mb-16"
        >
          <motion.span
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.44, 0, 0, 1] } } }}
            className="text-xs font-medium tracking-[0.2em] uppercase text-[#8A8A8A]"
          >
            Портфолио
          </motion.span>
          <motion.h2
            variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.44, 0, 0, 1], delay: 0.1 } } }}
            className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight"
          >
            Наши проекты
          </motion.h2>
          <motion.p
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.44, 0, 0, 1], delay: 0.2 } } }}
            className="mt-4 text-base md:text-lg text-[#8A8A8A] leading-relaxed"
          >
            Реальные проекты, которые мы разработали и запустили.
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-8 lg:gap-12 items-center">
          <div className="lg:col-span-2 order-2 lg:order-1">
            <AnimatePresence mode="wait" custom={dir}>
              <motion.div
                key={activeIndex}
                custom={dir}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.5, ease: [0.44, 0, 0, 1] }}
              >
                <span className="text-7xl sm:text-8xl lg:text-9xl font-extrabold text-white/[0.02] block leading-none mb-4 select-none">
                  {String(activeIndex + 1).padStart(2, '0')}
                </span>
                <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">
                  {project.title}
                </h3>
                <p className="text-sm md:text-base text-[#8A8A8A] leading-relaxed mb-6">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[11px] px-3 py-1 rounded-full border border-[#1E1E1E] text-[#8A8A8A]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>

            <div className="flex items-center gap-4">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => goTo(activeIndex - 1)}
                className="w-9 h-9 rounded-full border border-[#1E1E1E] flex items-center justify-center text-[#8A8A8A] hover:text-white hover:border-white/20 transition-colors duration-300"
                aria-label="Назад"
              >
                <ChevronLeft size={16} />
              </motion.button>
              <span className="text-sm text-[#8A8A8A]">
                {String(activeIndex + 1).padStart(2, '0')} / {String(projects.length).padStart(2, '0')}
              </span>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => goTo(activeIndex + 1)}
                className="w-9 h-9 rounded-full border border-[#1E1E1E] flex items-center justify-center text-[#8A8A8A] hover:text-white hover:border-white/20 transition-colors duration-300"
                aria-label="Вперёд"
              >
                <ChevronRight size={16} />
              </motion.button>
            </div>
          </div>

          <div className="lg:col-span-3 order-1 lg:order-2">
            <div className="relative animate-[float-slow_7s_ease-in-out_infinite]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeIndex}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.5, ease: [0.44, 0, 0, 1] }}
                  className="device-laptop rounded-xl border border-[#1E1E1E] bg-black overflow-hidden shadow-2xl"
                >
                  <div className="h-5 bg-black border-b border-[#1E1E1E] flex items-center px-3 gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-white/10" />
                    <span className="w-2 h-2 rounded-full bg-white/10" />
                    <span className="w-2 h-2 rounded-full bg-white/10" />
                  </div>
                  <ParallaxImage src={project.image} alt={project.title} />
                </motion.div>
              </AnimatePresence>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="absolute -bottom-4 -left-2 md:-left-6 max-w-[200px] md:max-w-xs px-4 py-3 rounded-xl border border-[#1E1E1E] bg-black shadow-xl"
              >
                <p className="text-xs md:text-sm text-[#8A8A8A] leading-relaxed italic">
                  &ldquo;{project.quote}&rdquo;
                </p>
              </motion.div>
            </div>
          </div>
        </div>

        <div className="flex justify-start gap-2 mt-12 order-3">
          {projects.map((_, index) => (
            <motion.button
              key={index}
              whileHover={{ scale: 1.3 }}
              whileTap={{ scale: 0.8 }}
              onClick={() => goTo(index)}
              className="rounded-full transition-all duration-500"
              style={{
                width: index === activeIndex ? 32 : 6,
                height: 6,
                backgroundColor: index === activeIndex ? '#FFFFFF' : 'rgba(255,255,255,0.15)',
              }}
              aria-label={`Проект ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
