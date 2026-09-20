import { useState } from "react";

const NAV_LINKS = ["Home", "Technologies", "Projects", "About", "Contact"];

function BrandMark() {
  return (
    <a href="#top" className="flex items-center gap-2 shrink-0">
      <span className="grid h-9 w-9 place-items-center rounded-xl bg-brand-gradient font-display text-sm font-extrabold text-white">
        DS
      </span>
      <span className="font-display text-lg font-bold tracking-tight text-slate-900">
        Dev <span className="text-pink-500">Stack</span>
      </span>
    </a>
  );
}

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("Home");

  return (
    <header className="sticky top-0 z-50 border-b border-slate-100 bg-white/90 backdrop-blur-md">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
        {/* Mobile: hamburger left */}
        <button
          className="rounded-lg p-2 text-slate-700 lg:hidden"
          aria-label="Toggle menu"
          onClick={() => setOpen((o) => !o)}
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
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
                onClick={() => setActive(link)}
                className={`text-sm font-medium transition ${
                  active === link
                    ? "text-pink-500"
                    : "text-slate-500 hover:text-slate-900"
                }`}
              >
                {link}
              </a>
            </li>
          ))}
        </ul>

        {/* Right: auth buttons */}
        <div className="flex flex-1 items-center justify-end gap-4">
          <button className="hidden text-sm font-medium text-slate-600 hover:text-slate-900 sm:inline-block">
            Sign In
          </button>
          <button className="rounded-full bg-brand-gradient px-4 py-2 text-sm font-semibold text-white shadow-md shadow-pink-200 transition hover:opacity-90">
            Sign Up
          </button>
        </div>
      </nav>

      {/* Mobile dropdown */}
      {open && (
        <div className="border-t border-slate-100 bg-white px-5 py-4 lg:hidden">
          <ul className="flex flex-col gap-3">
            {NAV_LINKS.map((link) => (
              <li key={link}>
                <a
                  href={`#${link.toLowerCase()}`}
                  onClick={() => {
                    setActive(link);
                    setOpen(false);
                  }}
                  className={`block py-1 text-sm font-medium ${
                    active === link ? "text-pink-500" : "text-slate-600"
                  }`}
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
