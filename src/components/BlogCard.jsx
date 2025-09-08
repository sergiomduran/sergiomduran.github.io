import { Link } from 'react-router-dom';

export default function BlogCard({ post, view = 'grid' }) {
  const dateStr = new Date(post.date).toLocaleDateString('es-ES', {
    year: 'numeric', month: 'short', day: '2-digit'
  });

  const Wrapper = post.url?.startsWith('http') ? 'a' : Link;
  const wrapperProps = post.url?.startsWith('http')
    ? { href: post.url, target: '_blank', rel: 'noreferrer' }
    : { to: post.url || '#' };

  const containerCls =
    view === 'grid'
      ? 'card border rounded-xl p-5 bg-white dark:bg-[#0B0B0F] dark:border-gray-800'
      : 'card border rounded-xl p-5 bg-white dark:bg-[#0B0B0F] dark:border-gray-800';

  return (
    <article className={containerCls}>
      {/* Meta */}
      <div className="flex items-center justify-between text-xs text-gray-500 dark:text-gray-400 mb-2">
        <time dateTime={post.date}>{dateStr}</time>
        <span>{post.readMins} min read</span>
      </div>

      {/* Title */}
      <h3 className="text-lg font-semibold mb-1">
        <Wrapper className="hover:underline" {...wrapperProps}>
          {post.title}
        </Wrapper>
      </h3>

      {/* Excerpt */}
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
