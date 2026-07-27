import logo from '../assets/images/miki-logo.jpg'

const socials = [
  { label: 'Instagram', href: '#' },
  { label: 'Facebook', href: '#' },
  { label: 'TikTok', href: '#' },
]

export function Footer() {
  return (
    <footer id="footer" className="bg-miki-black px-5 pb-10 pt-16 sm:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col gap-10 border-b border-miki-cream/10 pb-10 sm:flex-row sm:justify-between">
          <div className="flex items-start gap-3">
            <img src={logo} alt="Miki's Pizza" className="h-12 w-12 rounded-full object-cover" />
            <div>
              <p className="font-display text-lg font-semibold text-miki-cream">Miki's Pizza</p>
              <p className="mt-1 max-w-xs font-body text-sm text-miki-cream/55">
                Italians do it better. Wood-fired pizza, built your way.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:flex sm:gap-14">
            <div>
              <p className="font-display text-xs font-semibold uppercase tracking-[0.2em] text-miki-cream/40">
                Explore
              </p>
              <ul className="mt-3 space-y-2 font-body text-sm text-miki-cream/70">
                <li><a href="#menu" className="hover:text-miki-gold-light">Menu</a></li>
                <li><a href="#build" className="hover:text-miki-gold-light">Build Your Own</a></li>
                <li><a href="#story" className="hover:text-miki-gold-light">Our Story</a></li>
                <li><a href="#order" className="hover:text-miki-gold-light">Order</a></li>
              </ul>
            </div>
            <div>
              <p className="font-display text-xs font-semibold uppercase tracking-[0.2em] text-miki-cream/40">
                Visit
              </p>
              <ul className="mt-3 space-y-2 font-body text-sm text-miki-cream/70">
                <li>Avenue Mall El Rehab, 1st Floor</li>
                <li>Open daily 12:00–00:00</li>
                <li>
                  <a href="tel:+201276721944" className="hover:text-miki-gold-light">
                    +20 127 672 1944
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center gap-4 pt-6 sm:flex-row sm:justify-between">
          <p className="font-body text-xs text-miki-cream/40">
            © {new Date().getFullYear()} Miki's Pizza. All rights reserved.
          </p>
          <div className="flex gap-5">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                className="font-body text-xs text-miki-cream/50 hover:text-miki-gold-light"
              >
                {s.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
