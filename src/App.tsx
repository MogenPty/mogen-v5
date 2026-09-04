import { useEffect, type ReactNode } from "react";
import { HashRouter, Link, Route, Routes, useLocation } from "react-router-dom";
import { motion, useReducedMotion } from "framer-motion";
import { ThemeProvider } from "./theme";
import {
  AmbientBackground,
  Footer,
  Header,
  btnPrimary,
} from "./components/chrome";
import { Icon } from "./components/icons";
import { Home } from "./pages/Home";
import { Services } from "./pages/Services";
import { ServiceDetail } from "./pages/ServiceDetail";
import { About } from "./pages/About";
import { Faq } from "./pages/Faq";
import { Contact } from "./pages/Contact";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function PageShell({ children }: { children: ReactNode }) {
  const { pathname } = useLocation();
  const reduce = useReducedMotion();
  return (
    <motion.main
      key={pathname}
      initial={reduce ? false : { opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className="flex-1"
    >
      {children}
    </motion.main>
  );
}

function NotFound() {
  return (
    <div className="mx-auto max-w-7xl px-5 py-28 text-center sm:px-8">
      <p className="font-mono text-[12px] uppercase tracking-[0.24em] text-pine">
        {"// 404"}
      </p>
      <h1 className="mt-4 font-display text-6xl font-extrabold tracking-tight sm:text-8xl">
        Lost the plot<span className="text-gold">.</span>
      </h1>
      <p className="mx-auto mt-6 max-w-md text-lg text-soft">
        That page isn't registered anywhere — probably never was. Let's get
        you back to solid ground.
      </p>
      <Link to="/" className={`${btnPrimary} mt-10`}>
        Back to home
        <Icon name="arrowRight" size={16} />
      </Link>
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <HashRouter>
        <ScrollToTop />
        <div className="noise flex min-h-screen flex-col">
          <AmbientBackground />
          <Header />
          <PageShell>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/services" element={<Services />} />
              <Route path="/services/:slug" element={<ServiceDetail />} />
              <Route path="/about" element={<About />} />
              <Route path="/faq" element={<Faq />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </PageShell>
          <Footer />
        </div>
      </HashRouter>
    </ThemeProvider>
  );
}
