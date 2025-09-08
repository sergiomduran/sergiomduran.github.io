import { Link } from 'react-router-dom';

export default function ProjectCard({ title, desc, to = '#' }) {
  const isExternal = to.startsWith('http');
  return (
    <article className="card border rounded-2xl p-6 bg-white dark:bg-[#0B0B0F] dark:border-gray-800">
      <h3 className="font-semibold mb-2">{title}</h3>
      <p className="text-gray-600 dark:text-gray-300 text-sm mb-3">{desc}</p>
      {isExternal ? (
        <a href={to} target="_blank" rel="noreferrer" className="text-blue-600 hover:underline text-sm">
          View Project →
        </a>
      ) : (
        <Link to={to} className="text-blue-600 hover:underline text-sm">
          View Project →
        </Link>
      )}
    </article>
  );
}
