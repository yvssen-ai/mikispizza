import { motion } from 'framer-motion'
import heroVideoMp4 from '../assets/video/miki-hero.mp4'
import heroVideoWebm from '../assets/video/miki-hero.webm'
import heroPoster from '../assets/video/miki-hero-poster.jpg'

const prefersReducedMotion =
  typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches

const toppings = [
  { icon: '🍅', from: { x: -160, y: -120 }, settle: { x: -120, y: -40 }, delay: 0.4, rotate: -18 },
  { icon: '🧀', from: { x: 180, y: -140 }, settle: { x: 130, y: -70 }, delay: 0.55, rotate: 14 },
  { icon: '🌿', from: { x: -200, y: 120 }, settle: { x: -140, y: 90 }, delay: 0.7, rotate: -10 },
  { icon: '🍄', from: { x: 200, y: 140 }, settle: { x: 145, y: 110 }, delay: 0.85, rotate: 16 },
  { icon: '🫒', from: { x: 0, y: -200 }, settle: { x: 10, y: -120 }, delay: 1.0, rotate: 8 },
]

export function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-[100svh] items-end overflow-hidden bg-miki-black pt-24"
    >
      <video
        autoPlay={!prefersReducedMotion}
        muted
        loop
        playsInline
        poster={heroPoster}
        className="absolute inset-0 h-full w-full object-cover object-center opacity-70"
        aria-hidden="true"
      >
        <source src={heroVideoMp4} type="video/mp4" />
        <source src={heroVideoWebm} type="video/webm" />
      </video>
      <div className="absolute inset-0 bg-gradient-to-t from-miki-black via-miki-black/60 to-miki-black/20" />
      <div className="absolute inset-0 bg-gradient-to-r from-miki-black/70 via-transparent to-miki-black/40" />

      {/* steam wisps */}
      <div className="pointer-events-none absolute left-1/2 top-[30%] hidden -translate-x-1/2 sm:block">
        <span className="animate-steam absolute h-16 w-8 rounded-full bg-white/30 blur-xl [animation-delay:0s]" />
        <span className="animate-steam absolute left-10 h-20 w-8 rounded-full bg-white/20 blur-xl [animation-delay:1.3s]" />
        <span className="animate-steam absolute -left-8 h-14 w-6 rounded-full bg-white/20 blur-xl [animation-delay:2.6s]" />
      </div>

      {/* flying topping accents */}
      <div className="pointer-events-none absolute left-1/2 top-[38%] hidden -translate-x-1/2 -translate-y-1/2 sm:block">
        {toppings.map((t, i) => (
          <motion.span
            key={i}
            initial={{ x: t.from.x, y: t.from.y, opacity: 0, scale: 0.4, rotate: t.rotate * 3 }}
            animate={{
              x: t.settle.x,
              y: t.settle.y,
              opacity: 1,
              scale: 1,
              rotate: t.rotate,
            }}
            transition={{ delay: t.delay, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="absolute text-3xl drop-shadow-[0_4px_12px_rgba(0,0,0,0.5)] md:text-4xl"
          >
            <motion.span
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4 + i * 0.4, repeat: Infinity, ease: 'easeInOut', delay: 1.6 }}
              className="block"
            >
              {t.icon}
            </motion.span>
          </motion.span>
        ))}
      </div>

      <div className="relative z-10 mx-auto w-full max-w-6xl px-5 pb-16 sm:px-8 sm:pb-24">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.6 }}
          className="mb-3 font-display text-sm font-semibold uppercase tracking-[0.3em] text-miki-gold-light"
        >
          Avenue Mall El Rehab · Wood-Fired Daily
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="font-display text-5xl font-semibold leading-[0.95] text-miki-cream sm:text-6xl md:text-7xl lg:text-8xl"
        >
          Italians
          <br />
          do it <span className="text-miki-gold-light">better.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mt-5 max-w-md font-body text-base text-miki-cream/75 sm:text-lg"
        >
          Hand-tossed dough, real mozzarella, and toppings piled on without apology.
          Order in, build your own, or swing by the mall.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.55, duration: 0.6 }}
          className="mt-8 flex flex-col gap-3 sm:flex-row"
        >
          <a
            href="#order"
            className="rounded-full bg-miki-gold px-7 py-3.5 text-center font-display font-semibold text-miki-black shadow-[0_8px_30px_-8px_rgba(240,168,60,0.7)] transition-transform active:scale-95 sm:hover:scale-105"
          >
            Order Now
          </a>
          <a
            href="#build"
            className="rounded-full border border-miki-cream/30 px-7 py-3.5 text-center font-display font-semibold text-miki-cream transition-colors active:scale-95 sm:hover:border-miki-cream/70"
          >
            Build Your Own
          </a>
        </motion.div>
      </div>
    </section>
  )
}
