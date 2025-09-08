import { useTheme } from "../context/ThemeContext";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <button
      onClick={toggleTheme}
      aria-label="Cambiar tema"
      aria-pressed={isDark}
      className="
        relative inline-flex items-center justify-center
        px-2.5 py-1 rounded-full
        transition-all duration-200 ease-in-out
        hover:bg-gray-100/70 dark:hover:bg-gray-800/70
        active:scale-95
        focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/50
      "
    >
      <span className="sr-only">{isDark ? "Cambiar a modo claro" : "Cambiar a modo oscuro"}</span>

      {/* Contenedor para superponer iconos y hacer crossfade */}
      <span className="relative block w-5 h-5">
        {/* Sol (outline) */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className={`absolute inset-0 w-5 h-5 transition-opacity duration-200 ${
            isDark ? "opacity-0" : "opacity-100"
          }`}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="12" cy="12" r="4" />
          <path d="M12 3v2M12 19v2M21 12h-2M5 12H3M18.364 5.636l-1.414 1.414M7.05 16.95l-1.414 1.414M18.364 18.364l-1.414-1.414M7.05 7.05 5.636 5.636" />
        </svg>

        {/* Luna (outline) */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className={`absolute inset-0 w-5 h-5 transition-opacity duration-200 ${
            isDark ? "opacity-100" : "opacity-0"
          }`}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M21 12.8a9 9 0 1 1-9.8-9 7 7 0 0 0 9.8 9z" />
        </svg>
      </span>
    </button>
  );
}
