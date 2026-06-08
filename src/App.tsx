import { useEffect } from 'react'
import Lenis from 'lenis'
import { setLenis } from './lib/lenis'
import Header from './components/Header'
import Hero from './components/Hero'
import Services from './components/Services'
import Portfolio from './components/Portfolio'
import Advantages from './components/Advantages'
import Process from './components/Process'
import Reviews from './components/Reviews'
import CTA from './components/CTA'
import Footer from './components/Footer'
import BackToTop from './components/BackToTop'

export default function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    })

    setLenis(lenis)

    function raf(time: number) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }
    requestAnimationFrame(raf)

    return () => lenis.destroy()
  }, [])

  useEffect(() => {
    const handleAnchor = () => {
      const hash = window.location.hash
      if (hash) {
        const el = document.querySelector(hash)
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' })
        }
      }
    }
    handleAnchor()
    window.addEventListener('hashchange', handleAnchor)
    return () => window.removeEventListener('hashchange', handleAnchor)
  }, [])

  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      <main>
        <Hero />
        <Services />
        <Portfolio />
        <Advantages />
        <Process />
        <Reviews />
        <CTA />
      </main>
      <Footer />
      <BackToTop />
    </div>
  )
}
