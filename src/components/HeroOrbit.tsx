import { useState, useEffect } from 'react'
import { ArrowRight, ShoppingCart, Coffee, Bot, Heart, Smartphone, Palette, BarChart3, Link as LinkIcon } from 'lucide-react'

interface CardData {
  icon: React.ElementType
  title: string
  price: string
  status: 'В работе' | 'Завершён'
}

const cards: CardData[] = [
  { icon: ShoppingCart, title: 'Интернет-магазин одежды', price: '18 000 ₽', status: 'В работе' },
  { icon: Coffee,       title: 'Лендинг кофейни',        price: '5 000 ₽',  status: 'Завершён' },
  { icon: Bot,          title: 'Telegram-бот доставки',   price: '3 000 ₽',  status: 'В работе' },
  { icon: Heart,        title: 'CRM стоматологии',        price: '12 000 ₽', status: 'В работе' },
  { icon: Smartphone,   title: 'Мобильное приложение',    price: '20 000 ₽', status: 'Завершён' },
  { icon: Palette,      title: 'Редизайн сайта',          price: '8 000 ₽',  status: 'Завершён' },
  { icon: BarChart3,    title: 'Дашборд аналитики',       price: '9 000 ₽',  status: 'В работе' },
  { icon: LinkIcon,     title: 'Интеграция 1С',           price: '6 000 ₽',  status: 'Завершён' },
]

function getConfig(w: number) {
  if (w < 768) return { count: 0, radius: 0,       mobile: true } as const
  if (w < 1024) return { count: 5, radius: 240, mobile: false } as const
  return { count: 8, radius: 320, mobile: false } as const
}

export default function HeroOrbit() {
  const [cfg, setCfg] = useState(() => getConfig(typeof window !== 'undefined' ? window.innerWidth : 1024))

  useEffect(() => {
    const onResize = () => setCfg(getConfig(window.innerWidth))
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  const { count, radius, mobile } = cfg
  const visible = cards.slice(0, count || 3)

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-black">
      {/* ─── ORBIT (z-1) ─── */}
      <div className="hero__orbit relative" style={{ height: 600, width: '100%', zIndex: 1 }}>
        {/* Ротатор - анимированная орбита */}
        {!mobile && (
          <div
            className="hero__orbit-rotator absolute inset-0"
            style={{
              animation: 'orbit-spin 50s linear infinite',
              transformOrigin: 'center',
            }}
          >
            {visible.map((card, i) => {
              const angleRad = (i * 2 * Math.PI) / count
              const x = radius * Math.sin(angleRad)
              const y = -radius * Math.cos(angleRad)
              const Icon = card.icon
              const active = card.status === 'В работе'

              return (
                <div
                  key={i}
                  className="orbit-card"
                  style={{
                    position: 'absolute',
                    left: `calc(50% + ${x}px)`,
                    top: `calc(50% + ${y}px)`,
                    zIndex: 2,
                  }}
                >
                  <div
                    className="orbit-card-inner"
                    style={{
                      animation: 'orbit-counter-spin 50s linear infinite',
                      transform: 'translate(-50%, -50%)',
                      width: 220,
                    }}
                  >
                    <div
                      style={{
                        background: 'rgba(255,255,255,0.05)',
                        backdropFilter: 'blur(10px)',
                        WebkitBackdropFilter: 'blur(10px)',
                        border: '1px solid rgba(255,255,255,0.1)',
                        borderRadius: 14,
                        padding: 14,
                        boxShadow: '0 8px 32px rgba(0,0,0,0.3)',
                      }}
                    >
                      <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: 8 }}>
                        <Icon size={20} className="text-white/80" strokeWidth={1.5} />
                        <span
                          style={{
                            fontSize: 10,
                            fontWeight: 500,
                            padding: '2px 8px',
                            borderRadius: 999,
                            background: active ? 'rgba(255,255,255,0.1)' : 'rgba(255,255,255,0.05)',
                            color: active ? 'rgba(255,255,255,0.7)' : 'rgba(255,255,255,0.4)',
                          }}
                        >
                          {card.status}
                        </span>
                      </div>
                      <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.85)', fontWeight: 500, lineHeight: 1.3, margin: 0 }}>
                        {card.title}
                      </p>
                      <p style={{ fontSize: 11, color: 'rgba(255,255,255,0.4)', margin: '6px 0 0' }}>
                        {card.price}
                      </p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        )}

        {/* ─── ЛОГОТИП В ЦЕНТРЕ (z-5) ─── */}
        <div
          className="hero__center"
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            zIndex: 5,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <div
            style={{
              width: 150,
              height: 150,
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              animation: 'logo-pulse 3s ease-in-out infinite',
              background: 'rgba(255,255,255,0.02)',
            }}
          >
            <svg viewBox="0 0 32 32" width={64} height={64} fill="white">
              <path d="M16 2L20.5 11.5L30 16L20.5 20.5L16 30L11.5 20.5L2 16L11.5 11.5L16 2Z" />
            </svg>
          </div>
        </div>

        {/* ─── МОБИЛЬНЫЕ КАРТОЧКИ ─── */}
        {mobile && (
          <div
            style={{
              position: 'absolute',
              bottom: 20,
              left: '50%',
              transform: 'translateX(-50%)',
              display: 'flex',
              gap: 10,
              zIndex: 5,
            }}
          >
            {visible.map((card, i) => {
              const Icon = card.icon
              return (
                <div
                  key={i}
                  style={{
                    background: 'rgba(255,255,255,0.05)',
                    backdropFilter: 'blur(10px)',
                    WebkitBackdropFilter: 'blur(10px)',
                    border: '1px solid rgba(255,255,255,0.1)',
                    borderRadius: 14,
                    padding: 12,
                    width: 160,
                  }}
                >
                  <Icon size={16} className="text-white/80" strokeWidth={1.5} />
                  <p style={{ fontSize: 12, color: 'rgba(255,255,255,0.85)', fontWeight: 500, margin: '6px 0 2px', lineHeight: 1.2 }}>
                    {card.title}
                  </p>
                  <p style={{ fontSize: 10, color: 'rgba(255,255,255,0.4)', margin: 0 }}>{card.price}</p>
                </div>
              )
            })}
          </div>
        )}
      </div>

      {/* ─── ТЕКСТ ПОД ОРБИТОЙ (z-10) ─── */}
      <div style={{ zIndex: 10, position: 'relative', marginTop: 80, textAlign: 'center', padding: '0 24px' }}>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold text-white leading-tight mx-auto" style={{ maxWidth: 720 }}>
          Создаём сайты, которые приносят деньги
        </h1>
        <p className="text-white/50 text-lg sm:text-xl leading-relaxed mx-auto" style={{ maxWidth: 560, marginTop: 20 }}>
          Разработка сайтов, ботов и автоматизация для малого и среднего бизнеса
        </p>
        <a
          href="#cta"
          className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 px-8 py-4 text-base font-medium text-white transition-all duration-300 hover:bg-white/5 hover:border-white/40 active:scale-95"
          style={{ marginTop: 32 }}
        >
          Обсудить проект
          <ArrowRight className="h-5 w-5" />
        </a>
      </div>
    </section>
  )
}
