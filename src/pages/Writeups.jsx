import { useEffect, useMemo, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link, useSearchParams } from 'react-router-dom';
import WriteupCard from '../components/WriteupCard.jsx';

// 👇 Datos de ejemplo (cámbialos/añade los tuyos)
// Si un writeup es interno, usa url como '/writeups/forest' y luego creas esa página.
// Si es externo (GitHub, etc.), deja la URL completa 'https://...'
const INITIAL_WRITEUPS = [
  {
    title: 'HTB: Active (Windows)',
    slug: 'htb-active-windows',
    date: '2025-08-12',
    readMins: 12,
    platform: 'HTB',
    os: 'Windows',
    difficulty: 'Medium',
    tags: ['Kerberos', 'AD', 'BloodHound', 'SMB'],
    excerpt: 'Enumeración AD y técnicas Kerberos. Paso a paso desde el reconocimiento hasta root.',
    url: 'https://github.com/red4ly3n/Active-HTB-WriteUp.git'
  },
  {
    title: 'HTB: Forest (Active Directory)',
    slug: 'htb-forest-ad',
    date: '2025-07-22',
    readMins: 15,
    platform: 'HTB',
    os: 'Windows',
    difficulty: 'Medium',
    tags: ['AS-REP Roasting', 'AD', 'Privilege Escalation'],
    excerpt: 'AS-REP Roasting y abuso de privilegios para dominio completo.',
    url: '/writeups/forest'
  },
  {
    title: 'HTB: Poison (Linux)',
    slug: 'htb-poison-linux',
    date: '2025-06-10',
    readMins: 9,
    platform: 'HTB',
    os: 'Linux',
    difficulty: 'Easy',
    tags: ['LFI', 'RCE', 'Cron'],
    excerpt: 'LFI → RCE, enumeración y cron mal configurado para escalar privilegios.',
    url: '/writeups/poison'
  },
  {
    title: 'TryHackMe: Simple CTF',
    slug: 'thm-simple-ctf',
    date: '2025-05-15',
    readMins: 7,
    platform: 'TryHackMe',
    os: 'Linux',
    difficulty: 'Easy',
    tags: ['WordPress', 'FTP', 'Hydra'],
    excerpt: 'Fuerza bruta ligera, enumeración web y escalada básica.',
    url: '/writeups/thm-simple-ctf'
  },
  {
    title: 'HTB: Optimum (Windows)',
    slug: 'htb-optimum',
    date: '2025-04-09',
    readMins: 8,
    platform: 'HTB',
    os: 'Windows',
    difficulty: 'Easy',
    tags: ['WebDAV', 'Metasploit', 'Privesc'],
    excerpt: 'Exploit de WebDAV vulnerable y escalada con binario inseguro.',
    url: '/writeups/optimum'
  },
  {
    title: 'Labs: AD Kerberos PKINIT',
    slug: 'labs-kerberos-pkinit',
    date: '2025-03-28',
    readMins: 11,
    platform: 'Labs',
    os: 'Windows',
    difficulty: 'Hard',
    tags: ['Kerberos', 'PKINIT', 'minikerberos'],
    excerpt: 'Autenticación Kerberos con PKINIT y abuso de tickets en laboratorio propio.',
    url: '/writeups/kerberos-pkinit'
  },
  {
    title: 'HTB: Bastion (Windows)',
    slug: 'htb-bastion',
    date: '2025-02-10',
    readMins: 14,
    platform: 'HTB',
    os: 'Windows',
    difficulty: 'Medium',
    tags: ['VHD', 'SAM', 'SYSTEM', 'SecretsDump'],
    excerpt: 'Montaje de VHD para extraer credenciales y pivoteo local.',
    url: '/writeups/bastion'
  },
  {
    title: 'VulnHub: DC-9',
    slug: 'vulnhub-dc9',
    date: '2025-01-21',
    readMins: 13,
    platform: 'VulnHub',
    os: 'Linux',
    difficulty: 'Medium',
    tags: ['SQLi', 'Hash Cracking', 'SUID'],
    excerpt: 'SQLi manual, escalada con SUID y cracking de credenciales.',
    url: '/writeups/dc9'
  }
];

export default function Writeups() {
  // ---- Estado controlado por query params ----
  const [searchParams, setSearchParams] = useSearchParams();
  const [q, setQ] = useState(searchParams.get('q') || '');
  const [tag, setTag] = useState(searchParams.get('tag') || 'all');
  const [sort, setSort] = useState(searchParams.get('sort') || 'newest'); // newest | oldest | longest | shortest
  const [view, setView] = useState(searchParams.get('view') || 'grid');   // grid | list
  const [page, setPage] = useState(parseInt(searchParams.get('page') || '1', 10));
  const [platform, setPlatform] = useState(searchParams.get('platform') || 'all'); // HTB, TryHackMe, VulnHub, Labs
  const [os, setOs] = useState(searchParams.get('os') || 'all');                     // Windows, Linux, Web
  const [diff, setDiff] = useState(searchParams.get('diff') || 'all');               // Easy, Medium, Hard, Insane
  const perPage = 6;

  // ---- Sincroniza estado -> URL ----
  useEffect(() => {
    const next = {};
    if (q) next.q = q;
    if (tag !== 'all') next.tag = tag;
    if (platform !== 'all') next.platform = platform;
    if (os !== 'all') next.os = os;
    if (diff !== 'all') next.diff = diff;
    if (sort !== 'newest') next.sort = sort;
    if (view !== 'grid') next.view = view;
    if (page !== 1) next.page = String(page);
    setSearchParams(next, { replace: true });
  }, [q, tag, platform, os, diff, sort, view, page, setSearchParams]);

  // ---- Tags únicas ----
  const allTags = useMemo(
    () => Array.from(new Set(INITIAL_WRITEUPS.flatMap(p => p.tags))).sort(),
    []
  );

  // ---- Filtrado + orden ----
  const filteredSorted = useMemo(() => {
    const query = q.trim().toLowerCase();
    let out = INITIAL_WRITEUPS.filter(p => {
      const matchesQ =
        !query ||
        p.title.toLowerCase().includes(query) ||
        p.excerpt.toLowerCase().includes(query) ||
        p.tags.join(' ').toLowerCase().includes(query);
      const matchesTag = tag === 'all' || p.tags.includes(tag);
      const matchesPlatform = platform === 'all' || p.platform === platform;
      const matchesOS = os === 'all' || p.os === os;
      const matchesDiff = diff === 'all' || p.difficulty === diff;
      return matchesQ && matchesTag && matchesPlatform && matchesOS && matchesDiff;
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
        out.sort((a, b) => b.date.localeCompare(a.date)); // newest
    }
    return out;
  }, [q, tag, platform, os, diff, sort]);

  // ---- Paginación ----
  const { pageItems, totalPages } = useMemo(() => {
    const start = (page - 1) * perPage;
    const end = start + perPage;
    const totalPages = Math.max(1, Math.ceil(filteredSorted.length / perPage));
    return { pageItems: filteredSorted.slice(start, end), totalPages };
  }, [filteredSorted, page]);

  // Mantener page en rango al cambiar filtros
  useEffect(() => {
    const t = Math.max(1, Math.ceil(filteredSorted.length / perPage));
    if (page > t) setPage(1);
  }, [filteredSorted.length, page]);

  return (
    <>
      <Helmet>
        <title>Writeups | Sergio Morales</title>
        <meta
          name="description"
          content="Writeups de máquinas y retos: HTB, AD, Linux, Windows, Web, Forense y más."
        />
      </Helmet>

      <main className="max-w-6xl mx-auto px-6 pt-6 md:pt-10 pb-20">
        {/* Header */}
        <header className="mb-10">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Writeups</h1>
          <p className="mt-3 text-gray-600 dark:text-gray-300 max-w-2xl">
            Índice de writeups de máquinas y retos. Filtra por plataforma, sistema operativo, dificultad y etiquetas.
          </p>

        {/* Breadcrumbs */}
          <nav aria-label="Breadcrumb" className="mt-4 text-sm text-gray-500 dark:text-gray-400">
            <ol className="flex items-center gap-2">
              <li><Link className="hover:underline" to="/">Inicio</Link></li>
              <li>/</li>
              <li aria-current="page" className="text-gray-700 dark:text-gray-200">Writeups</li>
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

            <div className="flex flex-wrap gap-3 items-center">
              <label htmlFor="platform" className="sr-only">Plataforma</label>
              <select
                id="platform"
                className="rounded-lg border bg-white/70 dark:bg-[#0B0B0F] dark:border-gray-800 px-3 py-2"
                value={platform}
                onChange={(e) => { setPlatform(e.target.value); setPage(1); }}
              >
                <option value="all">Plataforma: Todas</option>
                <option>HTB</option>
                <option>TryHackMe</option>
                <option>VulnHub</option>
                <option>Labs</option>
              </select>

              <label htmlFor="os" className="sr-only">Sistema Operativo</label>
              <select
                id="os"
                className="rounded-lg border bg-white/70 dark:bg-[#0B0B0F] dark:border-gray-800 px-3 py-2"
                value={os}
                onChange={(e) => { setOs(e.target.value); setPage(1); }}
              >
                <option value="all">SO: Todos</option>
                <option>Windows</option>
                <option>Linux</option>
                <option>Web</option>
              </select>

              <label htmlFor="diff" className="sr-only">Dificultad</label>
              <select
                id="diff"
                className="rounded-lg border bg-white/70 dark:bg-[#0B0B0F] dark:border-gray-800 px-3 py-2"
                value={diff}
                onChange={(e) => { setDiff(e.target.value); setPage(1); }}
              >
                <option value="all">Dificultad: Todas</option>
                <option>Easy</option>
                <option>Medium</option>
                <option>Hard</option>
                <option>Insane</option>
              </select>

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
                id="view-toggle"
                className="px-3 py-2 rounded-lg border dark:border-gray-800"
                type="button"
                onClick={() => setView(v => (v === 'grid' ? 'list' : 'grid'))}
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
          {filteredSorted.length} writeup{filteredSorted.length === 1 ? '' : 's'} · página {page} de {totalPages}
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
              No hay resultados. Prueba con otro término o filtro.
            </div>
          ) : (
            pageItems.map((p) => (
              <WriteupCard key={p.slug} post={p} view={view} />
            ))
          )}
        </section>

        {/* Paginación */}
        {totalPages > 1 && (
          <div className="mt-10 flex items-center justify-between">
            <button
              className="px-4 py-2 rounded-lg border dark:border-gray-800 disabled:opacity-40"
              disabled={page <= 1}
              onClick={() => setPage(n => Math.max(1, n - 1))}
            >
              ← Anterior
            </button>
            <div className="text-sm text-gray-500 dark:text-gray-400">
              Página {page} / {totalPages}
            </div>
            <button
              className="px-4 py-2 rounded-lg border dark:border-gray-800 disabled:opacity-40"
              disabled={page >= totalPages}
              onClick={() => setPage(n => n + 1)}
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
