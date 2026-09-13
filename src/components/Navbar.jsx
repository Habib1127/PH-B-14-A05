import { useState } from "react";

const NAV_LINKS = ["Home", "Technologies", "Projects", "About", "Contact"];

function BrandMark() {
  return (
    <a href="#top" className="flex items-center gap-2 shrink-0">
      <span className="grid h-9 w-9 place-items-center rounded-xl bg-brand-gradient font-display text-lg font-extrabold text-white">
        D
      </span>
      <span className="font-display text-lg font-bold tracking-tight text-white">
        Dev <span className="text-brand-gradient">Stack</span>
      </span>
    </a>
  );
}

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-ink-950/80 backdrop-blur-md">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
        {/* Mobile: hamburger left */}
        <button
          className="rounded-lg p-2 text-white lg:hidden"
          aria-label="Toggle menu"
          onClick={() => setOpen((o) => !o)}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path
              d="M4 6h16M4 12h16M4 18h16"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </button>

        {/* Brand: left on desktop, center on mobile */}
        <div className="lg:flex-1">
          <BrandMark />
        </div>

        {/* Center nav links - desktop only */}
        <ul className="hidden items-center gap-8 lg:flex">
          {NAV_LINKS.map((link) => (
            <li key={link}>
              <a
                href={`#${link.toLowerCase()}`}
                className="text-sm font-medium text-white/70 transition hover:text-white"
              >
                {link}
              </a>
            </li>
          ))}
        </ul>

        {/* Right: auth buttons */}
        <div className="flex flex-1 items-center justify-end gap-3">
          <button className="hidden text-sm font-medium text-white/80 hover:text-white sm:inline-block">
            Sign In
          </button>
          <button className="rounded-full bg-brand-gradient px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-pink-500/20 transition hover:opacity-90">
            Sign Up
          </button>
        </div>
      </nav>

      {/* Mobile dropdown */}
      {open && (
        <div className="border-t border-white/10 bg-ink-950 px-5 py-4 lg:hidden">
          <ul className="flex flex-col gap-3">
            {NAV_LINKS.map((link) => (
              <li key={link}>
                <a
                  href={`#${link.toLowerCase()}`}
                  onClick={() => setOpen(false)}
                  className="block py-1 text-sm font-medium text-white/80"
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
