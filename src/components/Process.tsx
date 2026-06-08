import { motion } from 'framer-motion'

const steps = [
  { num: '01', title: 'Обсуждаем задачу', desc: 'Знакомимся с вашим бизнесом, разбираем текущие процессы и формулируем цели проекта.' },
  { num: '02', title: 'Формируем решение', desc: 'Предлагаем оптимальный подход, стек технологий и структуру будущего продукта.' },
  { num: '03', title: 'Согласовываем стоимость', desc: 'Прозрачно называем цену без скрытых платежей и неожиданных доплат.' },
  { num: '04', title: 'Заключаем договор', desc: 'Оформляем официальные документы, согласовываем сроки и этапы работ.' },
  { num: '05', title: 'Получаем предоплату', desc: 'Работаем с поэтапной оплатой, фиксируем каждый этап документально.' },
  { num: '06', title: 'Разрабатываем проект', desc: 'Создаём продукт, держим вас в курсе процесса и оперативно вносим правки.' },
  { num: '07', title: 'Демонстрируем результат', desc: 'Показываем готовую работу, проводим финальное согласование.' },
  { num: '08', title: 'Передаём готовый продукт', desc: 'Отдаём все исходники, доступы и документацию. Остаёмся на связи.' },
]

const ease = [0.44, 0, 0, 1] as const

const cardVars = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease, delay: i * 0.06 },
  }),
}

export default function Process() {
  return (
    <section id="process" className="relative py-20 md:py-32 scroll-mt-20 border-t border-[#1E1E1E]">
      <div className="w-full px-6 lg:px-16 xl:px-24">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-40px' }}
          className="max-w-2xl mb-16"
        >
          <motion.span variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } }} className="text-xs font-medium tracking-[0.2em] uppercase text-[#8A8A8A]">
            Процесс
          </motion.span>
          <motion.h2 variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.44, 0, 0, 1], delay: 0.1 } } }} className="mt-4 text-4xl sm:text-5xl font-bold text-white leading-tight">
            Как мы работаем
          </motion.h2>
          <motion.p variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.44, 0, 0, 1], delay: 0.2 } } }} className="mt-4 text-base md:text-lg text-[#8A8A8A] leading-relaxed">
            Прозрачная система: от обсуждения до передачи готового продукта. Без сюрпризов и пустых обещаний.
          </motion.p>
        </motion.div>

        <div className="relative grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, i) => (
            <motion.div
              key={step.num}
              custom={i}
              variants={cardVars}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-40px' }}
              whileHover={{ scale: 1.02, borderColor: 'rgba(255,255,255,0.2)' }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              className="group relative rounded-2xl border border-[#1E1E1E] p-5 md:p-6 bg-black"
            >
              <div className="flex items-center gap-3 mb-3">
                <span className="text-xl font-bold text-white/10 transition-colors duration-300 group-hover:text-white/30">
                  {step.num}
                </span>
                <div className="h-px flex-1 bg-white/5" />
              </div>
              <h3 className="text-sm md:text-base font-semibold text-white mb-2">{step.title}</h3>
              <p className="text-xs md:text-sm text-[#8A8A8A] leading-relaxed">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
