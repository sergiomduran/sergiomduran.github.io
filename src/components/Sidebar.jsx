import { Link } from 'react-router-dom';

export default function Sidebar() {
  return (
    <div
      className="flex flex-col items-center gap-5 sticky top-24
                 bg-white dark:bg-[#0B0B0F] p-6 rounded-xl border border-gray-200 dark:border-gray-800"
      aria-label="Perfil"
    >
      <img
        src="/images/IMG_20241026_151139_671_20241026_172205_00009.jpg"
        alt="Retrato de Sergio Morales"
        className="w-[120px] h-[120px] object-cover rounded-full border border-gray-300 dark:border-gray-700"
        width="120" height="120" loading="lazy" decoding="async"
      />

      <span className="block text-xs text-gray-600 dark:text-gray-400">
        Cybersecurity Engineering Student
      </span>

      <nav className="flex flex-col gap-1 w-full text-sm mt-2" aria-label="Enlaces sociales">
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"
           className="flex items-center gap-2 px-2 py-1 rounded-md text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800">
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M4.98 3.5c0 1.38-1.12 2.5-2.5 2.5S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM0 8h5v16H0V8zm7.5 0h4.78v2.24h.07c.66-1.25 2.27-2.57 4.67-2.57 5 0 5.92 3.28 5.92 7.55V24h-5v-7.69c0-1.84-.03-4.22-2.57-4.22-2.58 0-2.97 2.01-2.97 4.09V24h-5V8z"/></svg>
          LinkedIn
        </a>
        <a href="https://github.com" target="_blank" rel="noopener noreferrer"
           className="flex items-center gap-2 px-2 py-1 rounded-md text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800">
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 .5C5.73.5.5 5.73.5 12c0 5.1 3.29 9.43 7.84 10.96.57.11.78-.25.78-.56v-2.08c-3.19.69-3.86-1.54-3.86-1.54-.52-1.33-1.27-1.69-1.27-1.69-1.04-.71.08-.69.08-.69 1.15.08 1.76 1.18 1.76 1.18 1.02 1.75 2.68 1.25 3.33.96.1-.75.4-1.25.72-1.54-2.55-.29-5.23-1.28-5.23-5.71 0-1.26.45-2.3 1.18-3.11-.12-.29-.51-1.46.11-3.04 0 0 .96-.31 3.15 1.18a10.99 10.99 0 015.74 0c2.18-1.49 3.14-1.18 3.14-1.18.63 1.58.24 2.75.12 3.04.73.81 1.18 1.85 1.18 3.11 0 4.44-2.68 5.41-5.24 5.7.41.35.78 1.04.78 2.09v3.1c0 .31.2.67.79.56A11.505 11.505 0 0023.5 12C23.5 5.73 18.27.5 12 .5z"/></svg>
          GitHub
        </a>
        <a href="mailto:smoralesduran4@gmail.com"
           className="flex items-center gap-2 px-2 py-1 rounded-md text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800">
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M1.5 4.5v15h21v-15h-21zm10.5 9l-10-6v12h20v-12l-10 6zm0-2l10-6h-20l10 6z"/></svg>
          Email
        </a>
        <a href="https://www.hackthebox.com" target="_blank" rel="noopener noreferrer"
           className="flex items-center gap-2 px-2 py-1 rounded-md text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800">
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M22.67 6.45 13.04.55a1.85 1.85 0 0 0-1.88 0L1.53 6.45a1.9 1.9 0 0 0-.93 1.63v7.85c0 .68.36 1.31.93 1.64l9.63 5.9c.57.35 1.3.35 1.87 0l9.64-5.9c.57-.33.93-.96.93-1.64V8.08c0-.67-.36-1.3-.93-1.63z"/></svg>
          HackTheBox
        </a>
      </nav>

      <div className="mt-4 w-full text-sm">
        <p className="font-medium text-gray-800 dark:text-gray-200 mb-1">Pages</p>
        <Link to="/blog" className="block hover:underline text-blue-600">Blog</Link>
        <Link to="/writeups" className="block hover:underline text-blue-600">Writeups</Link>
        <Link to="/contact" className="block hover:underline text-blue-600">Contact</Link>
      </div>
    </div>
  );
}
