import { Routes, Route } from 'react-router-dom';
import Layout from './layouts/Layout.jsx';
import Home from './pages/Home.jsx';
import Projects from './pages/Projects.jsx';
import Blog from './pages/Blog.jsx';
import Writeups from './pages/Writeups.jsx';
import Contact from './pages/Contact.jsx';
import DopamineDetox from './pages/blog/DopamineDetox.jsx';
import CVPage from './pages/blog/CVPage.jsx'; // 👈 añadido

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/writeups" element={<Writeups />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blog/dopamine-detox" element={<DopamineDetox />} />
        <Route path="/blog/CVPage" element={<CVPage />} /> {/* 👈 tu CV */}
        <Route path="*" element={<Home />} />
      </Route>
    </Routes>
  );
}
