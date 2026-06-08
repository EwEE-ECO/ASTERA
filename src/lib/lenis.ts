import Lenis from 'lenis'

let instance: Lenis | null = null

export function setLenis(lenis: Lenis) {
  instance = lenis
}

export function getLenis(): Lenis | null {
  return instance
}
