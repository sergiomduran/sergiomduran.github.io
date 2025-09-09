import { MdEmail } from 'react-icons/md';
import { FaLinkedin, FaGithub, FaDiscord } from 'react-icons/fa';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="py-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center gap-6 text-gray-600 dark:text-gray-400">
        
        {/* Social icons */}
        <div className="flex items-center gap-8">
          <a
            href="mailto:smoralesduran4@gmail.com"
            className="transition-colors transform transition-transform duration-200 ease-out hover:scale-110 hover:text-gray-900 dark:hover:text-gray-200"
            aria-label="Email"
          >
            <MdEmail className="w-6 h-6" />
          </a>
          <a
            href="https://www.linkedin.com/in/sergio-morales-durán"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors transform transition-transform duration-200 ease-out hover:scale-110 hover:text-gray-900 dark:hover:text-gray-200"
            aria-label="LinkedIn"
          >
            <FaLinkedin className="w-6 h-6" />
          </a>
          <a
            href="https://github.com/sergiomduran"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors transform transition-transform duration-200 ease-out hover:scale-110 hover:text-gray-900 dark:hover:text-gray-200"
            aria-label="GitHub"
          >
            <FaGithub className="w-6 h-6" />
          </a>
          <a
            href="https://discord.gg/tu-invite"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors transform transition-transform duration-200 ease-out hover:scale-110 hover:text-gray-900 dark:hover:text-gray-200"
            aria-label="Discord"
          >
            <FaDiscord className="w-6 h-6" />
          </a>
        </div>

        {/* Copy */}
        <p className="text-sm text-center">
          © {year} Sergio Morales. All rights reserved
        </p>
      </div>
    </footer>
  );
}
