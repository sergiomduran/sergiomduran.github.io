export default function Footer() {
  return (
    <footer className="border-t border-gray-200 dark:border-gray-800 py-8 mt-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-sm text-gray-600 dark:text-gray-400">
        © {new Date().getFullYear()} Sergio Morales — Portfolio | React + Tailwind
      </div>
    </footer>
  );
}
