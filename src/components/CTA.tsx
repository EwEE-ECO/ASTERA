import { useState } from 'react'
import { motion } from 'framer-motion'
import { Send, Mail } from 'lucide-react'

export default function CTA() {
  const [flying, setFlying] = useState(false)

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault()
    setFlying(true)
    setTimeout(() => {
      window.open('https://t.me/ASTERA_WEB', '_blank')
      setFlying(false)
    }, 1000)
  }

  return (
    <section id="cta" className="relative py-20 md:py-32 scroll-mt-20 border-t border-[#1E1E1E]">
      <div className="w-full px-6 lg:px-16 xl:px-24">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.9, ease: [0.44, 0, 0, 1] }}
          className="relative rounded-3xl border border-[#1E1E1E] bg-black p-8 md:p-12 lg:p-16 overflow-hidden"
        >
          <div className="relative max-w-2xl">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.44, 0, 0, 1], delay: 0.1 }}
              className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight"
            >
              Готовы начать?
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.44, 0, 0, 1], delay: 0.2 }}
              className="mt-4 md:mt-6 text-base md:text-lg text-[#8A8A8A] leading-relaxed"
            >
              Напишите нам в Telegram &mdash; обсудим вашу задачу и предложим оптимальное решение. Без спама и пустых созвонов.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.44, 0, 0, 1], delay: 0.3 }}
              className="mt-8 md:mt-10 flex flex-col sm:flex-row items-start gap-4"
            >
              <motion.a
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                href="https://t.me/ASTERA_WEB"
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleClick}
                className="group relative inline-flex items-center gap-3 rounded-full bg-white px-8 py-3.5 text-sm font-semibold text-[#000000] transition-all duration-300 hover:bg-white/90 active:scale-95 overflow-hidden"
              >
                <span className="absolute inset-0 w-1/3 h-full bg-gradient-to-r from-transparent via-white/40 to-transparent -skew-x-12 animate-[shimmer_2s_ease-in-out_infinite]" />
                <span className={`relative inline-flex items-center gap-3 transition-all duration-300 ${flying ? 'opacity-0 translate-x-4' : ''}`}>
                  <Send size={16} />
                  Написать в Telegram
                </span>
                <span className={`absolute inset-0 flex items-center justify-center transition-all duration-300 ${flying ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'}`}>
                  <Send size={18} className="rotate-45" />
                </span>
              </motion.a>

              <motion.a
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                href="mailto:BordWorks@yandex.ru"
                className="inline-flex items-center gap-3 rounded-full border border-[#1E1E1E] px-8 py-3.5 text-sm font-medium text-white transition-all duration-300 hover:bg-white/5 hover:border-white/20 active:scale-95"
              >
                <Mail size={16} />
                BordWorks@yandex.ru
              </motion.a>

              <motion.a
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                href="https://vk.com/club239375315"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 rounded-full border border-[#1E1E1E] px-8 py-3.5 text-sm font-medium text-white transition-all duration-300 hover:bg-white/5 hover:border-white/20 active:scale-95"
              >
                <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor">
                  <path d="M15.684 0H8.316C2.491 0 0 2.491 0 8.316v7.368C0 21.509 2.491 24 8.316 24h7.368C21.509 24 24 21.509 24 15.684V8.316C24 2.491 21.509 0 15.684 0zm3.692 17.123h-1.744c-.66 0-.864-.516-2.052-1.704-1.032-.972-1.488-1.104-1.74-1.104-.36 0-.456.144-.456.552v1.512c0 .384-.12.6-1.128.6-1.668 0-3.516-1.02-4.812-2.928-1.848-2.664-2.328-4.632-2.328-5.052 0-.216.096-.408.552-.408h1.74c.408 0 .564.18.732.612.804 2.184 2.148 4.092 2.7 4.092.204 0 .3-.108.3-.708v-2.52c-.06-1.248-.732-1.356-.732-1.8 0-.216.168-.408.432-.408h2.748c.36 0 .48.18.48.588v3.168c0 .36.144.48.228.48.192 0 .336-.12.672-.456.972-1.104 1.668-2.808 1.668-2.808.084-.204.276-.408.684-.408h1.74c.516 0 .636.264.516.624-.204.672-2.256 3.816-2.256 3.816-.18.3-.24.444 0 .78.168.264.744.72 1.128 1.164.7.708 1.236 1.308 1.236 1.704.012.468-.252.708-.768.708z" />
                </svg>
                VK
              </motion.a>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
