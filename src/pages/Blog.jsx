import { useEffect, useMemo, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link, useSearchParams } from 'react-router-dom';
import BlogCard from '../components/BlogCard.jsx';

// 👉 Puedes mover esto a un JSON o a fetch más adelante
const INITIAL_POSTS = [
  {
    title: 'Automatizando Nmap + VPN para HTB',
    slug: 'htb-automation-nmap',
    date: '2025-05-05',
    readMins: 7,
    tags: ['Automation','Bash','HTB'],
    excerpt: 'Script sencillo para conectar la VPN y lanzar escaneos Nmap con perfiles predefinidos.',
    cover: '',
    // Si más adelante haces páginas internas: usa `/blog/htb-automation-nmap`
    url: '/blog/htb-automation-nmap'
  },
  {
    title: 'Forense 101: Flujo rápido con Autopsy',
    slug: 'forense-101-autopsy',
    date: '2025-04-18',
    readMins: 6,
    tags: ['Forensics','Windows','Autopsy'],
    excerpt: 'Cómo organizar un análisis express de imagen de disco para hallazgos rápidos.',
    cover: '',
    url: '/blog/forense-101-autopsy'
  },
  {
    title: 'Master your focus: Master your Focus Notes',
    slug: 'master-your-focus',
    date: '2025-09-01',
    readMins: 10,
    tags: ['Books','Focus','Motivation'],
    excerpt: 'My notes from "Master your Focus" book by Thibaut Meurisse.',
    cover: '',
    url: '/blog/master-your-focus'
  },
  {
    title: 'Dopamine Detox: Dopamine Detox Notes',
    slug: 'dopamine-detox',
    date: '2025-09-01',
    readMins: 10,
    tags: ['Books','Focus','Motivation'],
    excerpt: 'My notes from "Dopamine Detox" book by Thibaut Meurisse.',
    cover: '',
    url: '/blog/dopamine-detox'
  },
  {
    title: 'My setup',
    slug: 'setup',
    date: '2025-09-01',
    readMins: 10,
    tags: ['Hardware'],
    excerpt: 'Devices I use, hardware, PC... .',
    cover: '',
    url: '/blog/setup'
  },
  {
    title: 'My CV',
    slug: 'cv',
    date: '2025-09-01',
    readMins: 3,
    tags: ['CV'],
    excerpt: 'Take a look at my CV.',
    cover: '',
    url: '/blog/CVPage'
  }
];

export default function Blog() {
  // ---- Estado guiado por query params ----
  const [searchParams, setSearchParams] = useSearchParams();
  const [q, setQ] = useState(searchParams.get('q') || '');
  const [tag, setTag] = useState(searchParams.get('tag') || 'all');
  const [sort, setSort] = useState(searchParams.get('sort') || 'newest'); // newest | oldest | longest | shortest
  const [view, setView] = useState(searchParams.get('view') || 'grid'); // grid | list
  const [page, setPage] = useState(parseInt(searchParams.get('page') || '1', 10));
  const perPage = 6;

  // ---- Sincroniza estado -> URL ----
  useEffect(() => {
    const next = {};
    if (q) next.q = q;
    if (tag !== 'all') next.tag = tag;
    if (sort !== 'newest') next.sort = sort;
    if (view !== 'grid') next.view = view;
    if (page !== 1) next.page = String(page);
    setSearchParams(next, { replace: true });
  }, [q, tag, sort, view, page, setSearchParams]);

  // ---- Datos derivados ----
  const allTags = useMemo(
    () => Array.from(new Set(INITIAL_POSTS.flatMap(p => p.tags))).sort(),
    []
  );

  const filteredSorted = useMemo(() => {
    const query = q.trim().toLowerCase();
    let out = INITIAL_POSTS.filter(p => {
      const matchesQ =
        !query ||
        p.title.toLowerCase().includes(query) ||
        p.excerpt.toLowerCase().includes(query) ||
        p.tags.join(' ').toLowerCase().includes(query);
      const matchesTag = tag === 'all' || p.tags.includes(tag);
      return matchesQ && matchesTag;
    });

    switch (sort) {
      case 'oldest':
        out.sort((a, b) => a.date.localeCompare(b.date));
        break;
      case 'longest':
        out.sort((a, b) => b.readMins - a.readMins);
        break;
      case 'shortest':
        out.sort((a, b) => a.readMins - b.readMins);
        break;
      default:
        out.sort((a, b) => b.date.localeCompare(a.date));
    }
    return out;
  }, [q, tag, sort]);

  const { pageItems, totalPages } = useMemo(() => {
    const start = (page - 1) * perPage;
    const end = start + perPage;
    const totalPages = Math.max(1, Math.ceil(filteredSorted.length / perPage));
    return { pageItems: filteredSorted.slice(start, end), totalPages };
  }, [filteredSorted, page]);

  // Corrige page si se va de rango al cambiar filtros
  useEffect(() => {
    const t = Math.max(1, Math.ceil(filteredSorted.length / perPage));
    if (page > t) setPage(1);
  }, [filteredSorted.length, page]);

  return (
    <>
      <Helmet>
        <title>Blog | Sergio Morales</title>
        <meta name="description" content="Artículos, libros y notas sobre ciberseguridad." />
      </Helmet>

      <main className="max-w-6xl mx-auto px-6 pt-6 md:pt-10 pb-20">
        {/* Header */}
        <header className="mb-10">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Blog</h1>
          <p className="mt-3 text-gray-600 dark:text-gray-300 max-w-2xl">
            Artículos, libros y notas sobre ciberseguridad.
          </p>

          {/* Breadcrumbs */}
          <nav aria-label="Breadcrumb" className="mt-4 text-sm text-gray-500 dark:text-gray-400">
            <ol className="flex items-center gap-2">
              <li><Link className="hover:underline" to="/">Inicio</Link></li>
              <li>/</li>
              <li aria-current="page" className="text-gray-700 dark:text-gray-200">Blog</li>
            </ol>
          </nav>
        </header>

        {/* Controles */}
        <section className="mb-8">
          <div className="flex flex-col md:flex-row gap-4 md:items-center">
            <div className="flex-1">
              <label htmlFor="search" className="sr-only">Buscar</label>
              <input
                id="search"
                type="search"
                placeholder="Buscar por título, resumen o etiqueta…"
                className="w-full rounded-lg border bg-white/70 dark:bg-[#0B0B0F] dark:border-gray-800 px-4 py-2 focus:outline-none focus:ring focus:ring-blue-500/30"
                value={q}
                onChange={(e) => { setQ(e.target.value); setPage(1); }}
              />
            </div>

            <div className="flex items-center gap-3">
              <label htmlFor="sort" className="sr-only">Orden</label>
              <select
                id="sort"
                className="rounded-lg border bg-white/70 dark:bg-[#0B0B0F] dark:border-gray-800 px-3 py-2"
                value={sort}
                onChange={(e) => { setSort(e.target.value); setPage(1); }}
              >
                <option value="newest">Más recientes</option>
                <option value="oldest">Más antiguas</option>
                <option value="longest">Más largas (lectura)</option>
                <option value="shortest">Más cortas (lectura)</option>
              </select>

              <button
                type="button"
                className="px-3 py-2 rounded-lg border dark:border-gray-800"
                onClick={() => setView((v) => (v === 'grid' ? 'list' : 'grid'))}
              >
                Vista: <span className="font-medium">{view === 'grid' ? 'Grid' : 'Lista'}</span>
              </button>
            </div>
          </div>

          {/* Tags */}
          <div className="mt-4 flex flex-wrap gap-2">
            <TagButton
              name="Todos"
              active={tag === 'all'}
              onClick={() => { setTag('all'); setPage(1); }}
            />
            {allTags.map((t) => (
              <TagButton
                key={t}
                name={t}
                active={tag === t}
                onClick={() => { setTag(t); setPage(1); }}
              />
            ))}
          </div>
        </section>

        {/* Conteo */}
        <div className="text-sm text-gray-500 dark:text-gray-400 mb-4">
          {filteredSorted.length} artículo{filteredSorted.length === 1 ? '' : 's'} · página {page} de {totalPages}
        </div>

        {/* Grid/List */}
        <section
          className={
            view === 'grid'
              ? 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'
              : 'space-y-4'
          }
        >
          {pageItems.length === 0 ? (
            <div className="text-gray-500 dark:text-gray-400">
              No hay resultados. Prueba con otro término o etiqueta.
            </div>
          ) : (
            pageItems.map((p) => (
              <BlogCard key={p.slug} post={p} view={view} />
            ))
          )}
        </section>

        {/* Paginación */}
        {totalPages > 1 && (
          <div className="mt-10 flex items-center justify-between">
            <button
              className="px-4 py-2 rounded-lg border dark:border-gray-800 disabled:opacity-40"
              disabled={page <= 1}
              onClick={() => setPage((n) => Math.max(1, n - 1))}
            >
              ← Anterior
            </button>
            <div className="text-sm text-gray-500 dark:text-gray-400">
              Página {page} / {totalPages}
            </div>
            <button
              className="px-4 py-2 rounded-lg border dark:border-gray-800 disabled:opacity-40"
              disabled={page >= totalPages}
              onClick={() => setPage((n) => n + 1)}
            >
              Siguiente →
            </button>
          </div>
        )}
      </main>
    </>
  );
}

function TagButton({ name, active, onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`px-3 py-1 text-sm rounded-full border dark:border-gray-800 ${
        active ? 'bg-gray-900 text-white dark:bg-white dark:text-black' : ''
      }`}
    >
      {name}
    </button>
  );
}
