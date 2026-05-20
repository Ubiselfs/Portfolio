import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { data } from './data.js';
import Sidebar from './components/Sidebar.jsx';
import Navbar from './components/Navbar.jsx';
import About from './pages/About.jsx';
import Resume from './pages/Resume.jsx';
import Portfolio from './pages/Portfolio.jsx';
import Blog from './pages/Blog.jsx';
import Contact from './pages/Contact.jsx';

const pages = {
  About,
  Resume,
  Portfolio,
  Blog,
  Contact,
};

export default function App() {
  const [activePage, onPageChange] = useState('About');
  const ActivePage = pages[activePage];

  return (
    <main className="min-h-screen bg-ink-950 px-4 py-6 text-slate-100 sm:px-6 lg:px-8 lg:py-12">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-6 lg:grid lg:grid-cols-[330px_1fr] lg:items-start">
        <Sidebar profile={data.profile} />

        <section className="relative min-h-[720px] overflow-hidden rounded-[28px] border border-white/10 bg-ink-850 shadow-soft">
          <Navbar navItems={data.navigation} activePage={activePage} onPageChange={onPageChange} />

          <AnimatePresence mode="wait">
            <motion.div
              key={activePage}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.28, ease: 'easeOut' }}
              className="px-5 pb-8 pt-8 sm:px-8 lg:px-10 lg:pb-12"
            >
              <ActivePage />
            </motion.div>
          </AnimatePresence>
        </section>
      </div>
    </main>
  );
}
