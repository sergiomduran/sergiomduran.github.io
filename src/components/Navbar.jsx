import { useEffect, useState, useRef } from "react";
import { NavLink, useLocation } from "react-router-dom";
import ThemeToggle from "./ThemeToggle.jsx";

const links = [
  { to: "/", label: "Home", end: true },
  { to: "/projects", label: "Projects" },
  { to: "/blog", label: "Blog" },
  { to: "/writeups", label: "Writeups" },
  { to: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const loc = useLocation();
  const menuRef = useRef(null);
  const btnRef = useRef(null);

  useEffect(() => setOpen(false), [loc.pathname]);

  useEffect(() => {
    function onClickOutside(e) {
      if (
        open &&
        menuRef.current &&
        !menuRef.current.contains(e.target) &&
        btnRef.current &&
        !btnRef.current.contains(e.target)
      ) {
        setOpen(false);
      }
    }
    document.addEventListener("pointerdown", onClickOutside);
    return () => document.removeEventListener("pointerdown", onClickOutside);
  }, [open]);

  useEffect(() => {
    document.documentElement.style.overflow = open ? "hidden" : "";
    return () => (document.documentElement.style.overflow = "");
  }, [open]);

  const linkClasses = ({ isActive }) =>
    `px-3 py-2 rounded-full text-sm transition
     ${isActive ? "font-semibold" : "text-gray-600 dark:text-gray-300"}
     hover:bg-gray-100 dark:hover:bg-gray-800`;

  return (
    <header className="sticky top-0 z-50 backdrop-blur bg-white/90 dark:bg-black/30 border-b border-gray-200 dark:border-gray-800">
      <nav
        className="relative flex items-center justify-between 
                   max-w-7xl mx-auto h-16 
                   px-3 sm:px-4 md:px-6 lg:px-8"
      >
        {/* Logo */}
        <NavLink to="/" className="font-bold text-base md:text-lg whitespace-nowrap">
          Sergio&nbsp;Morales
        </NavLink>

        {/* Links centrados (desktop) */}
        <div className="hidden md:flex items-center gap-4 lg:gap-6 absolute left-1/2 -translate-x-1/2">
          {links.map((l) => (
            <NavLink key={l.to} to={l.to} end={l.end} className={linkClasses}>
              {l.label}
            </NavLink>
          ))}
        </div>

        {/* Toggle + Hamburger */}
        <div className="flex items-center gap-2">
          <div className="hidden md:block">
            <ThemeToggle />
          </div>
          <button
            ref={btnRef}
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="md:hidden inline-flex items-center justify-center w-9 h-9 rounded-lg
                       hover:bg-gray-100 dark:hover:bg-gray-800 transition"
            aria-label="Abrir menú"
            aria-expanded={open}
            aria-controls="mobile-menu"
          >
            <svg
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.75"
              strokeLinecap="round"
            >
              <path d="M4 7h16M4 12h16M4 17h16" />
            </svg>
          </button>
        </div>
      </nav>

      {/* Menú móvil */}
      <div
        id="mobile-menu"
        ref={menuRef}
        className={`md:hidden overflow-hidden border-t border-gray-200 dark:border-gray-800
          bg-white/95 dark:bg-[#0B0B0F]/95 backdrop-blur
          transition-[max-height,opacity] duration-200
          ${open ? "max-h-[70vh] opacity-100" : "max-h-0 opacity-0"}`}
      >
        <div className="px-4 py-6 sm:px-6">
          <div className="flex flex-col items-center gap-3 text-center">
            {links.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                end={l.end}
                className={({ isActive }) =>
                  `block px-4 py-2 rounded-xl text-sm w-full max-w-xs
                   ${isActive ? "font-semibold" : "text-gray-700 dark:text-gray-300"}
                   hover:bg-gray-100 dark:hover:bg-gray-800`
                }
              >
                {l.label}
              </NavLink>
            ))}
            <div className="pt-4">
              <ThemeToggle />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
