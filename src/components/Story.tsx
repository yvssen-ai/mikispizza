import { Reveal, StaggerGroup, staggerItem } from './Reveal'
import { Counter } from './Counter'
import { stats } from '../data/menu'
import storyImage from '../assets/images/miki-margherita.jpg'
import { motion } from 'framer-motion'

export function Story() {
  return (
    <section id="story" className="relative overflow-hidden bg-miki-black px-5 py-20 sm:px-8 sm:py-28">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-10 lg:grid-cols-2 lg:items-center lg:gap-16">
        <Reveal y={40} className="relative">
          <div className="relative overflow-hidden rounded-3xl">
            <img
              src={storyImage}
              alt="Fresh margherita pizza, made the Miki's Pizza way"
              className="aspect-[4/5] w-full object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-miki-black/50 via-transparent to-transparent" />
          </div>
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute -bottom-6 -right-4 rounded-2xl bg-miki-gold px-5 py-4 shadow-xl sm:-right-8"
          >
            <p className="font-display text-2xl font-bold text-miki-black">300°C</p>
            <p className="font-body text-xs text-miki-black/80">oven heat</p>
          </motion.div>
        </Reveal>

        <div>
          <Reveal>
            <p className="font-display text-sm font-semibold uppercase tracking-[0.3em] text-miki-gold-light">
              // 03 — Our Story
            </p>
            <h2 className="mt-3 font-display text-4xl font-semibold text-miki-cream sm:text-5xl">
              The Secret Behind Our Dough
            </h2>
            <p className="mt-4 font-body text-miki-cream/65">
              Miki's Pizza started with one idea: bring real Italian flavor to Avenue Mall
              El Rehab. So we proof our dough for a full day, fire it hot and fast, and
              pile on toppings we'd want to eat ourselves. No shortcuts, no soggy middles —
              just fresh, flavorful, fantastic pizza, because Italians do it better.
            </p>
          </Reveal>

          <StaggerGroup className="mt-10 grid grid-cols-2 gap-6 sm:grid-cols-4 lg:grid-cols-2">
            {stats.map((stat) => (
              <motion.div key={stat.label} variants={staggerItem}>
                <p className="font-display text-3xl font-bold text-miki-gold-light sm:text-4xl">
                  <Counter value={stat.value} suffix={stat.suffix} />
                </p>
                <p className="mt-1 font-body text-sm text-miki-cream/55">{stat.label}</p>
              </motion.div>
            ))}
          </StaggerGroup>
        </div>
      </div>
    </section>
  )
}
