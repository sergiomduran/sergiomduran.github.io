import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './layouts/Layout.jsx';
import Home from './pages/Home.jsx';
import Projects from './pages/Projects.jsx';
import Blog from './pages/Blog.jsx';
import Writeups from './pages/Writeups.jsx';
import Contact from './pages/Contact.jsx';
import DopamineDetox from './pages/blog/DopamineDetox.jsx';

export default function App() {
  console.log('[App] render');
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/writeups" element={<Writeups />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog/dopamine-detox" element={<DopamineDetox />} />
          <Route path="*" element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
