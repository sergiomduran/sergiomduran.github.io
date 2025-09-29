// src/pages/blog/CVPage.jsx
import { Helmet } from "react-helmet-async";

const cvData = {
  name: "Sergio Morales Durán",
  headline: "Cybersecurity — Pentesting & Blue Team",
  location: "Madrid, Spain",
  email: "smoralesduran4@gmail.com",
  linkedin: "https://www.linkedin.com/in/sergio-morales-durán",
  pdfUrl: "/cv/Sergio-Morales-Duran-CV.pdf",
  summary: `Cybersecurity enthusiast with professional training in penetration testing. Hands-on experience in lab environments and CTFs, developing strong skills in reconnaissance, manual exploitation, and automation. Proficient with tools such as Nmap, Burp Suite, Metasploit, and Linux systems. Passionate about problem-solving and continuous learning.`,
  sections: {
    experience: [
      { title: "Systems & Security Administrator", company: "AFI", location: "Madrid, Spain", period: "Jan 2025 – Jun 2025",
        bullets: ["Managed SIEM platforms (Splunk, Fortinet) and resolved security incidents.","Documented network infrastructure using NetBox.","Administered virtual machines with VMware vSphere."]},
      { title: "CTF Player & Penetration Tester", company: "Hack The Box", location: "Madrid, Spain", period: "Jul 2023 – Present",
        bullets: ["Documented vulnerabilities and exploits in public writeups.","Successfully exploited 80+ vulnerable machines in simulated environments."]},
      { title: "IT Support Assistant", company: "Abalia", location: "Madrid, Spain", period: "Jul 2023 – Sep 2023",
        bullets: ["Installed and maintained IT equipment.","Handled hardware inventory and troubleshooting."]},
      { title: "Web Administrator", company: "Datasystem", location: "Madrid, Spain", period: "Apr 2023 – Jun 2023",
        bullets: ["Managed CMS platforms (WordPress, Prestashop, Joomla).","Improved SEO and configured technical aspects of websites."]},
    ],
    education: [
      { degree: "B.Sc. in Cybersecurity Engineering", school: "UNIR — Universidad Internacional de La Rioja", location: "Madrid, Spain", period: "In progress" },
      { degree: "Advanced Vocational Training in Network Systems Administration & Cybersecurity", school: "Universidad Europea de Madrid", location: "Madrid, Spain", period: "2025" },
      { degree: "Intermediate Vocational Training in Microcomputer Systems & Networking", school: "IES El Cañaveral", location: "Madrid, Spain", period: "2023" },
    ],
    certifications: [
      { name: "CPTS – Certified Penetration Tester Specialist", org: "Hack The Box", year: "In progress" },
      { name: "eCPPTv3 – Certified Professional Penetration Tester", org: "INE Security", year: "2025" },
      { name: "eWPTv2 – Web Application Penetration Tester", org: "INE Security", year: "2025" },
      { name: "eJPTv2 – Junior Penetration Tester", org: "INE Security", year: "2023" },
    ],
    skills: {
      "Penetration Testing": ["Manual Exploitation", "Information Gathering", "Reconnaissance"],
      Systems: ["Linux", "Active Directory", "Network Auditing & Pen Testing"],
      Tools: ["Nmap", "Burp Suite", "Metasploit", "Splunk", "Fortinet SIEM"],
      "Programming & Scripting": ["Python", "Bash"],
      Languages: ["Spanish (Native)", "English (B1)"],
    },
    projects: [
      { name: "Forensic Lab (Final Project)", blurb: "Forensic analysis environment using Python automations and virtual machines.", tech: ["Autopsy","Cuckoo","Wazuh","FTK","Python","QEMU"] },
      { name: "CTF Automation – Hack The Box", blurb: "Tool that automates the initial reconnaissance workflow for HTB CTF challenges.", tech: ["Python","OpenVPN","Nmap","Bash","Linux"] },
    ],
  },
};

// ——— UI helpers ———
function Divider() {
  return <div className="my-8 border-t border-[color:var(--rule)]" />;
}

function Section({ title, children }) {
  return (
    <section className="scroll-mt-24">
      <h2 className="text-sm font-semibold tracking-wider text-[color:var(--ink-strong)] uppercase">
        {title}
      </h2>
      <div className="mt-4">{children}</div>
    </section>
  );
}

function Bullets({ items }) {
  return (
    <ul className="mt-2 space-y-1.5">
      {items.map((it, i) => (
        <li key={i} className="flex gap-2 text-[15px] leading-7 text-[color:var(--ink)]">
          <span className="mt-[10px] h-[3px] w-[12px] rounded bg-[color:var(--rule)]" aria-hidden />
          <span>{it}</span>
        </li>
      ))}
    </ul>
  );
}

export default function CVPage() {
  const s = cvData.sections;

  return (
    <div className="min-h-screen bg-[color:var(--page)]">
      <Helmet>
        <title>{cvData.name} | Curriculum Vitae</title>
        <meta name="description" content={`${cvData.name} CV — ${cvData.headline}`} />
        <link rel="canonical" href="/blog/cv" />
      </Helmet>

      <main className="max-w-2xl mx-auto px-5 md:px-6 lg:px-0 py-10 md:py-14">
        {/* Header simple, sin cajas */}
        <header>
          <h1 className="text-[34px] md:text-[40px] font-semibold tracking-tight text-[color:var(--ink-strong)]">
            {cvData.name}
          </h1>
          <p className="mt-1 text-[16px] text-[color:var(--ink-soft)]">{cvData.headline}</p>

          <div className="mt-3 flex flex-wrap items-center gap-x-3 gap-y-1 text-[14px] text-[color:var(--ink-muted)]">
            <span>{cvData.location}</span>
            <span aria-hidden>•</span>
            <a className="hover:underline" href={`mailto:${cvData.email}`}>{cvData.email}</a>
            <span aria-hidden>•</span>
            <a className="hover:underline" href={cvData.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
          </div>

          {/* Acciones mínimas */}
          <div className="mt-4 flex gap-2 print:hidden">
            {cvData.pdfUrl && (
              <a
                href={cvData.pdfUrl}
                className="inline-flex items-center text-xs px-3 py-1.5 rounded-full border
                           border-[color:var(--rule)] hover:bg-[color:var(--card-hover)]
                           text-[color:var(--ink)]"
              >
                Download PDF
              </a>
            )}
            <button
              onClick={() => window.print()}
              className="inline-flex items-center text-xs px-3 py-1.5 rounded-full border
                         border-[color:var(--rule)] hover:bg-[color:var(--card-hover)]
                         text-[color:var(--ink)]"
            >
              Print
            </button>
          </div>
        </header>

        <Divider />

        {/* Summary */}
        <section>
          <p className="text-[15.5px] leading-7 text-[color:var(--ink)]">
            {cvData.summary}
          </p>
        </section>

        <Divider />

        {/* Experience */}
        <Section title="Professional Experience">
          <ul className="space-y-6">
            {s.experience.map((exp, idx) => (
              <li key={idx}>
                <div className="flex flex-wrap items-baseline gap-x-2">
                  <h3 className="text-[16px] font-semibold text-[color:var(--ink-strong)]">
                    {exp.title}
                  </h3>
                  <span className="text-[color:var(--ink-muted)]">— {exp.company}</span>
                </div>
                <div className="text-[13.5px] text-[color:var(--ink-muted)]">
                  {exp.location} | {exp.period}
                </div>
                <Bullets items={exp.bullets} />
              </li>
            ))}
          </ul>
        </Section>

        <Divider />

        {/* Education */}
        <Section title="Education">
          <ul className="space-y-3">
            {s.education.map((ed, idx) => (
              <li key={idx}>
                <div className="flex flex-wrap items-baseline gap-x-2">
                  <h3 className="text-[16px] font-semibold text-[color:var(--ink-strong)]">{ed.degree}</h3>
                  <span className="text-[color:var(--ink-muted)]">— {ed.school}</span>
                </div>
                <div className="text-[13.5px] text-[color:var(--ink-muted)]">{ed.location} | {ed.period}</div>
              </li>
            ))}
          </ul>
        </Section>

        <Divider />

        {/* Certifications */}
        <Section title="Certifications">
          <ul className="space-y-1">
            {s.certifications.map((c, i) => (
              <li key={i} className="text-[15px] leading-7 text-[color:var(--ink)]">
                {c.name} <span className="text-[color:var(--ink-muted)]">({c.org}, {c.year})</span>
              </li>
            ))}
          </ul>
        </Section>

        <Divider />

        {/* Skills */}
        <Section title="Technical Skills">
          <div className="grid sm:grid-cols-2 gap-6">
            {Object.entries(s.skills).map(([k, v]) => (
              <div key={k}>
                <h4 className="text-[13px] font-medium text-[color:var(--ink-strong)]">{k}</h4>
                <p className="mt-1 text-[15px] leading-7 text-[color:var(--ink)]">{v.join(", ")}</p>
              </div>
            ))}
          </div>
        </Section>

        <Divider />

        {/* Projects */}
        <Section title="Key Projects">
          <ul className="space-y-4">
            {s.projects.map((p, i) => (
              <li key={i}>
                <h3 className="text-[16px] font-semibold text-[color:var(--ink-strong)]">{p.name}</h3>
                <p className="text-[15px] leading-7 text-[color:var(--ink)]">{p.blurb}</p>
                <p className="text-[12.5px] text-[color:var(--ink-muted)]">Technologies: {p.tech.join(", ")}</p>
              </li>
            ))}
          </ul>
        </Section>

        {/* Variables y print */}
        <style>{`
          :root {
            --page: #ffffff;
            --ink: #374151;
            --ink-strong: #111827;
            --ink-soft: #4b5563;
            --ink-muted: #6b7280;
            --rule: rgba(17,24,39,0.12);
            --card-hover: #f8f9fb;
          }
          .dark {
            --page: #0b0b0f;
            --ink: #e5e7eb;
            --ink-strong: #f9fafb;
            --ink-soft: #d1d5db;
            --ink-muted: #b6bdc7;
            --rule: rgba(229,231,235,0.16);
            --card-hover: rgba(255,255,255,0.03);
          }
          @media print {
            body { -webkit-print-color-adjust: exact; print-color-adjust: exact; }
            main { padding: 0 !important; }
            a { color: black; text-decoration: none; }
          }
        `}</style>
      </main>
    </div>
  );
}
