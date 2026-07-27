import { Reveal } from './Reveal'

export function OrderCTA() {
  return (
    <section id="order" className="relative overflow-hidden bg-miki-charcoal px-5 py-24 sm:px-8 sm:py-32">
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-miki-gold animate-glow sm:h-96 sm:w-96" />

      <div className="relative mx-auto max-w-3xl text-center">
        <Reveal>
          <p className="font-display text-sm font-semibold uppercase tracking-[0.3em] text-miki-gold-light">
            // 04 — Order
          </p>
          <h2 className="mt-4 font-display text-4xl font-bold leading-[1.05] text-miki-cream sm:text-6xl">
            Because Italians <span className="text-miki-gold-light">do it better</span>
          </h2>
          <p className="mx-auto mt-5 max-w-md font-body text-miki-cream/65">
            Call in for delivery or pickup, or swing by Avenue Mall El Rehab and watch it
            come fresh out of the oven.
          </p>

          <div className="mt-9 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <a
              href="tel:+201276721944"
              className="w-full rounded-full bg-miki-gold px-8 py-4 text-center font-display font-semibold text-miki-black shadow-[0_10px_35px_-10px_rgba(240,168,60,0.8)] transition-transform active:scale-95 sm:w-auto sm:hover:scale-105"
            >
              Call to Order
            </a>
            <a
              href="#footer"
              className="w-full rounded-full border border-miki-cream/25 px-8 py-4 text-center font-display font-semibold text-miki-cream transition-colors active:scale-95 sm:w-auto sm:hover:border-miki-cream/60"
            >
              Find Us
            </a>
          </div>

          <p className="mt-8 font-body text-sm text-miki-cream/45">
            Open daily 12:00 — 00:00 · Avenue Mall El Rehab, 1st Floor
          </p>
        </Reveal>
      </div>
    </section>
  )
}
