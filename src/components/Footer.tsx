import { Send, Mail } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="border-t border-[#1E1E1E] py-12 md:py-16">
      <div className="w-full px-6 lg:px-16 xl:px-24">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 sm:gap-12">
          <div className="sm:col-span-2 lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <svg viewBox="0 0 20 20" className="h-4 w-4 text-white" fill="currentColor">
                <path d="M10 1L12.5 7.5L19 10L12.5 12.5L10 19L7.5 12.5L1 10L7.5 7.5L10 1Z" />
              </svg>
              <span className="text-sm font-semibold text-white tracking-wide">
                ASTERA
              </span>
            </div>
            <p className="text-sm text-[#8A8A8A] leading-relaxed max-w-xs">
              Студия цифровых решений. Создаём сайты, ботов и автоматизацию
              для бизнеса.
            </p>
          </div>

          <div>
            <h4 className="text-xs font-semibold text-white mb-4 uppercase tracking-wider">
              Контакты
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="https://t.me/ASTERA_WEB"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2 text-sm text-[#8A8A8A] hover:text-white transition-colors duration-300"
                >
                  <Send size={12} />
                  Telegram
                </a>
              </li>
              <li>
                <a
                  href="mailto:BordWorks@yandex.ru"
                  className="group inline-flex items-center gap-2 text-sm text-[#8A8A8A] hover:text-white transition-colors duration-300"
                >
                  <Mail size={12} />
                  BordWorks@yandex.ru
                </a>
              </li>
              <li>
                <a
                  href="https://vk.com/club239375315"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2 text-sm text-[#8A8A8A] hover:text-white transition-colors duration-300"
                >
                  <svg viewBox="0 0 24 24" className="w-3 h-3" fill="currentColor">
                    <path d="M15.684 0H8.316C2.491 0 0 2.491 0 8.316v7.368C0 21.509 2.491 24 8.316 24h7.368C21.509 24 24 21.509 24 15.684V8.316C24 2.491 21.509 0 15.684 0zm3.692 17.123h-1.744c-.66 0-.864-.516-2.052-1.704-1.032-.972-1.488-1.104-1.74-1.104-.36 0-.456.144-.456.552v1.512c0 .384-.12.6-1.128.6-1.668 0-3.516-1.02-4.812-2.928-1.848-2.664-2.328-4.632-2.328-5.052 0-.216.096-.408.552-.408h1.74c.408 0 .564.18.732.612.804 2.184 2.148 4.092 2.7 4.092.204 0 .3-.108.3-.708v-2.52c-.06-1.248-.732-1.356-.732-1.8 0-.216.168-.408.432-.408h2.748c.36 0 .48.18.48.588v3.168c0 .36.144.48.228.48.192 0 .336-.12.672-.456.972-1.104 1.668-2.808 1.668-2.808.084-.204.276-.408.684-.408h1.74c.516 0 .636.264.516.624-.204.672-2.256 3.816-2.256 3.816-.18.3-.24.444 0 .78.168.264.744.72 1.128 1.164.7.708 1.236 1.308 1.236 1.704.012.468-.252.708-.768.708z"/>
                  </svg>
                  VK
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-semibold text-white mb-4 uppercase tracking-wider">
              Услуги
            </h4>
            <ul className="space-y-3">
              <li><a href="#services" className="text-sm text-[#8A8A8A] hover:text-white transition-colors duration-300">Веб-разработка</a></li>
              <li><a href="#services" className="text-sm text-[#8A8A8A] hover:text-white transition-colors duration-300">Telegram-боты</a></li>
              <li><a href="#services" className="text-sm text-[#8A8A8A] hover:text-white transition-colors duration-300">Автоматизация</a></li>
              <li><a href="#services" className="text-sm text-[#8A8A8A] hover:text-white transition-colors duration-300">Парсинг данных</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 md:mt-16 pt-6 border-t border-[#1E1E1E] flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-xs text-[#8A8A8A]">&copy; {new Date().getFullYear()} ASTERA. Все права защищены.</p>
          <p className="text-xs text-[#8A8A8A]">Сделано с вниманием к деталям.</p>
        </div>
      </div>
    </footer>
  )
}
