import Navbar from '../components/Navbar.jsx';
import Footer from '../components/Footer.jsx';
import { Outlet } from 'react-router-dom';

export default function Layout() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-gray-900 dark:bg-[#0B0B0F] dark:text-gray-100 transition-colors">
      {/* Navbar arriba */}
      <Navbar />

      {/* Main que crece y empuja el footer */}
      <main className="flex-grow max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Outlet />
      </main>

      {/* Footer siempre abajo */}
      <Footer />
    </div>
  );
}
