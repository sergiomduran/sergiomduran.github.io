import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import useActiveSection from "../hooks/useActiveSection";
import { motion, useReducedMotion } from "framer-motion"; // 👈 nuevo

const toc = [
  { id: "about", label: "About" },
  { id: "projects", label: "Featured Projects" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
];

const projects = [
  { title: "Forensic Lab", desc: "Malware analysis & forensic investigation environment.", to: "https://github.com/sergiomduran/TFC-Laboratorio-Forense", cover: "/images/4ly3nzz-spyro2.png" },
  { title: "HTB Automation Tool", desc: "Automates VPN connection & Nmap profiles for HTB.", to: "https://github.com/sergiomduran/htbscan", cover: "/images/4ly3nzz-spyro2.png" },
  { title: "HTB Writeups (80+)", desc: "Methodology & notes for Hack The Box machines.", to: "/writeups", cover: "/images/4ly3nzz-spyro2.png" },
];

const skills = ["Bash","Python","Go","JavaScript","Web Pentesting","Network Pentesting","Exploit Dev","Docker","Kubernetes","SQL","NoSQL","Splunk","Wazuh","Fortinet","Linux","Nmap","Burp","ZAP"];

// ── Variants (animaciones reutilizables) ───────────────────────────────────────
const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut", delay } },
});
const stagger = {
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
};
const inView = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

function ProjectCard({ title, desc, to, cover, i = 0 }) {
  return (
    <motion.div
      variants={inView}
      whileHover={{ y: -4 }}
      className="group"
    >
      <Link
        to={to}
        className="flex flex-col sm:flex-row gap-4 rounded-2xl border border-gray-200 dark:border-gray-800
                   bg-white dark:bg-[#0B0B0F] p-3 hover:border-gray-300 dark:hover:border-gray-700
                   transition"
      >
        <div className="sm:w-56 h-36 rounded-xl overflow-hidden border border-gray-200 dark:border-gray-800 bg-gray-100 dark:bg-gray-900">
          {cover && (
            <img
              src={cover}
              alt={title}
              className="w-full h-full object-cover group-hover:scale-[1.02] transition"
              loading="lazy"
              decoding="async"
              sizes="(min-width:1024px) 14rem, 100vw"
            />
          )}
        </div>
        <div className="min-w-0">
          <h3 className="font-semibold text-lg">{title}</h3>
          <p className="mt-1 text-sm text-gray-600 dark:text-gray-300 line-clamp-2">{desc}</p>
          <span className="mt-2 inline-flex items-center gap-1 text-sm text-blue-600">
            View project <span aria-hidden>→</span>
          </span>
        </div>
      </Link>
    </motion.div>
  );
}

export default function Home() {
  const activeId = useActiveSection(toc.map(t => t.id));
  const reduce = useReducedMotion();

  return (
    <>
      <Helmet>
        <title>Sergio Morales</title>
        <meta name="description" content="Pentesting · Forensics · Automation — Portfolio y notas de Sergio Morales." />
        <link rel="canonical" href="https://tu-dominio.com/" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Sergio Morales — Cybersecurity" />
        <meta property="og:description" content="Pentesting · Forensics · Automation." />
        <meta property="og:url" content="https://tu-dominio.com/" />
        <meta property="og:image" content="https://tu-dominio.com/og-image.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Sergio Morales" />
        <meta name="twitter:description" content="Pentesting · Forensics · Automation." />
        <meta name="twitter:image" content="https://tu-dominio.com/og-image.jpg" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            name: "Sergio Morales",
            url: "https://tu-dominio.com/",
            jobTitle: "Cybersecurity Engineering Student",
            sameAs: ["https://www.linkedin.com/in/tu-perfil","https://github.com/4ly3nzz","mailto:smoralesduran4@gmail.com"],
          })}
        </script>
      </Helmet>

      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 md:pt-10 pb-12">
        {/* HERO animado */}
        <motion.header
          initial="hidden"
          animate="show"
          variants={stagger}
          className="mb-16 flex flex-col-reverse lg:flex-row items-center gap-10"
        >
          {/* Texto */}
          <div className="flex-1 text-center lg:text-left">
            <motion.p variants={fadeUp(0)} className="text-sm tracking-wide text-gray-500 dark:text-gray-400 mb-2">
              Cybersecurity Engineering Student
            </motion.p>

            <motion.h1
              variants={fadeUp(0.05)}
              className="text-[2.5rem] md:text-[3.25rem] font-light tracking-tight leading-[1.1]"
              aria-label="Hello, Sergio here. Cybersecurity Engineering Student"
            >
              Hello, <span className="font-medium">Sergio</span> here
            </motion.h1>

            <motion.p variants={fadeUp(0.1)} className="mt-4 text-lg text-gray-600 dark:text-gray-300 max-w-xl">
              Pentesting · Forensics · Automation. Sharing projects, writeups and practical notes focused on methodology and real-world risk reduction.
            </motion.p>

            <motion.div variants={fadeUp(0.15)} className="mt-6 flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
              <Link
                to="/blog"
                className="px-5 py-2 rounded-full text-sm font-medium bg-gray-900 text-white
                           dark:bg-white dark:text-black transition hover:opacity-90"
              >
                Read Blog
              </Link>
              <Link
                to="/contact"
                className="px-5 py-2 rounded-full text-sm border border-gray-200 dark:border-gray-700
                           hover:bg-gray-100 dark:hover:bg-gray-800 transition"
              >
                Contact
              </Link>
            </motion.div>
            <motion.p
              variants={fadeUp(0.2)}
              className="mt-3 text-sm text-gray-500 dark:text-gray-400 text-center lg:text-left"
            >
              <Link to="/blog/CVPage" className="underline decoration-gray-300 dark:decoration-gray-700 underline-offset-4 hover:decoration-gray-500">
                View CV →
              </Link>
            </motion.p>
          </div>

          {/* Foto con tilt sutil */}
          <motion.div
            variants={fadeUp(0.1)}
            className="flex-1 flex justify-center"
            whileHover={!reduce ? { rotateZ: -1.5, scale: 1.02 } : {}}
            transition={{ type: "spring", stiffness: 200, damping: 15 }}
          >
            <img
              src="/images/IMG_20241026_151139_671_20241026_172205_00002.jpg"
              alt="Sergio Morales"
              className="w-40 h-40 md:w-52 md:h-52 object-cover rounded-full border-4 border-gray-200 dark:border-gray-700 shadow-lg"
              loading="lazy"
              decoding="async"
              sizes="(min-width:1024px) 13rem, 10rem"
            />
          </motion.div>
        </motion.header>

        {/* GRID principal */}
        <div className="grid grid-cols-1 lg:grid-cols-[220px,1fr] gap-8">
          {/* TOC sticky (sin animación) */}
          <aside className="hidden lg:block">
            <nav
              aria-label="Índice de secciones"
              className="sticky top-24 rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-[#0B0B0F] p-4"
            >
              <p className="text-xs font-semibold text-gray-500 dark:text-gray-400 mb-3">Índice</p>
              <ul className="space-y-1">
                {toc.map((item) => (
                  <li key={item.id}>
                    <a
                      href={`#${item.id}`}
                      className={`block px-2 py-1 rounded-lg text-sm transition
                        ${activeId === item.id
                          ? "bg-gray-900 text-white dark:bg-white dark:text-black"
                          : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"}`}
                      aria-current={activeId === item.id ? "true" : undefined}
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </aside>

          {/* CONTENIDO con reveals on-scroll */}
          <section className="space-y-14">
            {/* ABOUT */}
            <motion.section
              id="about"
              className="scroll-mt-28"
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              variants={inView}
            >
              <h2 className="text-2xl md:text-3xl font-semibold mb-3">About</h2>
              <div className="prose dark:prose-invert max-w-none">
                <p>
                  I focus on penetration testing, web security, and digital forensics.
                  I participate in CTFs, build automation tooling, and document methodology.
                  My goal is to design pragmatic security solutions that reduce real-world risk.
                </p>
                <blockquote><p className="text-base">“Secure by design, validated by exploitation.”</p></blockquote>
              </div>
            </motion.section>

            {/* PROJECTS */}
            <section id="projects" className="scroll-mt-28">
              <div className="flex items-end justify-between mb-4">
                <h2 className="text-2xl md:text-3xl font-semibold">Featured Projects</h2>
                <Link to="/projects" className="text-sm text-blue-600 hover:underline">Ver todos →</Link>
              </div>

              <motion.div
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.15 }}
                variants={{ show: { transition: { staggerChildren: 0.08 } } }}
                className="space-y-4"
              >
                {projects.map((p, i) => (
                  <ProjectCard key={p.title} {...p} i={i} />
                ))}
              </motion.div>
            </section>

            {/* SKILLS (chips en cascada) */}
            <section id="skills" className="scroll-mt-28">
              <h2 className="text-2xl md:text-3xl font-semibold mb-3">Skills</h2>
              <motion.ul
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.2 }}
                variants={{ show: { transition: { staggerChildren: 0.03 } } }}
                className="flex flex-wrap gap-2"
              >
                {skills.map((s) => (
                  <motion.li
                    key={s}
                    variants={inView}
                    className="px-2.5 py-1 rounded-full text-xs border border-gray-200 dark:border-gray-800
                               bg-white dark:bg-[#0B0B0F] text-gray-700 dark:text-gray-300"
                    whileHover={!useReducedMotion ? { y: -2 } : {}}
                  >
                    {s}
                  </motion.li>
                ))}
              </motion.ul>
            </section>

            {/* EXPERIENCE (reveal sutil) */}
            <motion.section
              id="experience"
              className="scroll-mt-28"
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
            >
              <h2 className="text-2xl md:text-3xl font-semibold mb-5">Experience</h2>

              {[
                {
                  period: "2023 – Present",
                  title: "Cybersecurity Projects",
                  org: "Personal / Freelance",
                  summary:
                    "Development of penetration testing tooling and repeatable workflows. Focus on web & network exploitation and post-exploitation automation.",
                  bullets: [
                    "Built Nmap profiles + HTB VPN auto-connect (−60% setup time).",
                    "Standardized recon → exploit → report pipeline.",
                  ],
                  tags: ["Pentesting", "Automation", "Reporting"],
                  links: [{ label: "Repo", href: "#" }],
                },
                {
                  period: "2022 – Present",
                  title: "CTF Player",
                  org: "Hack The Box / TryHackMe",
                  summary:
                    "Active participation in CTFs. Emphasis on AD, Kerberos, LFI→RCE and privilege escalation paths.",
                  bullets: [
                    "80+ HTB writeups documentados con metodología.",
                    "150+ PortSwigger labs completados.",
                  ],
                  tags: ["AD/Kerberos", "LFI→RCE", "Privilege Escalation"],
                  links: [{ label: "Writeups", href: "/writeups" }],
                },
              ].map((item, i, arr) => (
                <motion.article
                  key={item.title}
                  variants={inView}
                  className="relative pl-8 pb-8"
                >
                  {i !== arr.length - 1 && (
                    <span className="absolute left-3 top-4 bottom-0 w-px bg-gray-200 dark:bg-gray-800" aria-hidden="true" />
                  )}
                  <span className="absolute left-2 top-3 inline-flex h-3.5 w-3.5 items-center justify-center rounded-full bg-gray-900 dark:bg-white" aria-hidden="true">
                    <span className="h-1.5 w-1.5 rounded-full bg-white dark:bg-gray-900" />
                  </span>

                  <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                    <time className="text-xs font-medium text-gray-500 dark:text-gray-400" dateTime={item.period.replace(/\s+/g, "")}>
                      {item.period}
                    </time>
                    <span className="text-sm text-gray-400">•</span>
                    <h3 className="text-base md:text-lg font-semibold">
                      {item.title} <span className="font-normal text-gray-500 dark:text-gray-400">— {item.org}</span>
                    </h3>
                  </div>

                  <p className="mt-1 text-sm text-gray-700 dark:text-gray-300">{item.summary}</p>

                  {item.bullets?.length > 0 && (
                    <ul className="mt-2 space-y-1.5">
                      {item.bullets.map((b) => (
                        <li key={b} className="flex gap-2 text-sm text-gray-700 dark:text-gray-300">
                          <span className="mt-[6px] h-1.5 w-1.5 rounded-full bg-gray-400 dark:bg-gray-500" />
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  )}

                  <div className="mt-3 flex flex-wrap items-center gap-2">
                    {item.tags?.map((t) => (
                      <span key={t} className="px-2 py-0.5 rounded-full text-xs border border-gray-200 dark:border-gray-800 bg-white dark:bg-[#0B0B0F] text-gray-700 dark:text-gray-300">
                        {t}
                      </span>
                    ))}
                    {item.links?.map((l) => (
                      <a key={l.href} href={l.href} className="ml-1 text-xs inline-flex items-center gap-1 text-blue-600 hover:underline transition">
                        {l.label} <span aria-hidden>↗</span>
                      </a>
                    ))}
                  </div>
                </motion.article>
              ))}
            </motion.section>

            {/* CTA final */}
            <motion.section
              className="border-t border-gray-200 dark:border-gray-800 pt-6"
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.25 }}
              variants={inView}
            >
              <div className="rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-[#0B0B0F] p-6 text-center">
                <h3 className="text-xl font-semibold">¿Hablamos?</h3>
                <p className="mt-1 text-gray-600 dark:text-gray-300">
                  Abierto a prácticas, proyectos y colaboración en seguridad.
                </p>
                <div className="mt-4">
                  <Link
                    to="/contact"
                    className="px-4 py-2 rounded-full text-sm font-medium bg-gray-900 text-white dark:bg-white dark:text-black transition hover:opacity-90"
                  >
                    Contacto
                  </Link>
                </div>
              </div>
            </motion.section>
          </section>
        </div>
      </main>
    </>
  );
}
