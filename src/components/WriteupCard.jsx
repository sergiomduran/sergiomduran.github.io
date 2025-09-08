import { Link } from 'react-router-dom';

export default function WriteupCard({ post, view = 'grid' }) {
  const dateStr = new Date(post.date).toLocaleDateString('es-ES', {
    year: 'numeric', month: 'short', day: '2-digit'
  });

  const isExternal = post.url?.startsWith('http');
  const Wrapper = isExternal ? 'a' : Link;
  const wrapperProps = isExternal
    ? { href: post.url, target: '_blank', rel: 'noreferrer' }
    : { to: post.url || '#' };

  const cls = 'card border rounded-xl p-5 bg-white dark:bg-[#0B0B0F] dark:border-gray-800';

  return (
    <article className={cls}>
      {/* Meta superior */}
      <div className="flex items-center justify-between text-xs text-gray-500 dark:text-gray-400 mb-2">
        <time dateTime={post.date}>{dateStr}</time>
        <span>{post.readMins} min read</span>
      </div>

      {/* Título */}
      <h3 className="text-lg font-semibold mb-1">
        <Wrapper className="hover:underline" {...wrapperProps}>
          {post.title}
        </Wrapper>
      </h3>

      {/* Badges */}
      <div className="flex flex-wrap gap-2 text-xs mb-2">
        <span className="px-2 py-0.5 rounded-full border dark:border-gray-800">{post.platform}</span>
        <span className="px-2 py-0.5 rounded-full border dark:border-gray-800">{post.os}</span>
        <span className="px-2 py-0.5 rounded-full border dark:border-gray-800">{post.difficulty}</span>
      </div>

      {/* Resumen */}
      <p className="text-sm text-gray-600 dark:text-gray-300 mb-3">{post.excerpt}</p>

      {/* Tags */}
      <div className="flex flex-wrap gap-2 mb-3">
        {post.tags.map((t) => (
          <span key={t} className="px-2 py-0.5 text-xs rounded-full border dark:border-gray-800">
            {t}
          </span>
        ))}
      </div>

      {/* Leer más */}
      <Wrapper className="inline-block text-sm text-blue-600 hover:underline" {...wrapperProps}>
        Leer más →
      </Wrapper>
    </article>
  );
}
