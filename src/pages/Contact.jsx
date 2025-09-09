import { Helmet } from 'react-helmet-async';
import { MdEmail } from 'react-icons/md';
import { FaLinkedin, FaGithub, FaDiscord } from 'react-icons/fa';
import ContactItem from '../components/ContactItem.jsx';

export default function Contact() {
  return (
    <>
      <Helmet>
        <title>Contact | Sergio Morales</title>
        <meta
          name="description"
          content="Ponte en contacto con Sergio Morales para proyectos de ciberseguridad, pentesting y automatización."
        />
      </Helmet>

      {/* Header */}
      <header className="pt-6 md:pt-10 px-6 max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Contact</h1>
        <p className="mt-2 text-lg text-gray-600 dark:text-gray-300">Let's connect.</p>
        <p className="mt-4 text-base text-gray-500 dark:text-gray-400">
          Connect with me through any of these platforms.
        </p>
      </header>

      {/* Main */}
      <main className="max-w-4xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <ContactItem
            href="mailto:smoralesduran4@gmail.com"
            icon={<MdEmail className="w-6 h-6 text-red-600" />}
            title="Email"
            subtitle="smoralesduran4@gmail.com"
          />

          <ContactItem
            href="https://www.linkedin.com/in/sergio-morales-durán"
            icon={<FaLinkedin className="w-6 h-6 text-blue-600" />}
            title="LinkedIn"
            subtitle="/in/sergio-morales-durán"
          />

          <ContactItem
            href="https://github.com/sergiomduran"
            icon={<FaGithub className="w-6 h-6 text-gray-800 dark:text-gray-200" />}
            title="GitHub"
            subtitle="@sergiomduran"
          />

          <ContactItem
            href="https://discord.gg/tu-invite"
            icon={<FaDiscord className="w-6 h-6 text-indigo-600" />}
            title="Discord"
            subtitle="Join Server"
          />
        </div>
      </main>
    </>
  );
}
