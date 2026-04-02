import theme from "./theme/theme";

import { useState, useEffect, useRef } from 'react';
import './App.css';

function useInView(threshold = 0.15) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setInView(true); },
      { threshold }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [threshold]);

  return [ref, inView];
}

function Navbar({ active, setActive }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNav = (link) => {
    setActive(link.label);
    setMenuOpen(false);

    document.getElementById(link.id)?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <nav style={{
      position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
      padding: "0 2rem",
      background: scrolled ? theme.colors.bgNavBar : "transparent",
      backdropFilter: scrolled ? "blur(12px)" : "none",
      // borderBottom: "2px solid rgba(255,255,255,0.06)",
      transition: "all 0.35s ease",
      display: "flex", alignItems: "center", justifyContent: "space-between",
      height: "64px",
    }}>
      <span style={{
        fontFamily: theme.fonts.heading,
        fontSize: "1.25rem",
        fontWeight: 700,
        color: "#fff",
        letterSpacing: "0.02em",
      }}>
        KA<span style={{ color: theme.colors.brandColor }}>.</span>
      </span>

      {/* Desktop */}
      <div style={{ display: "flex", gap: "2rem" }} className="desktop-nav">

        {/* {NAV_LINKS.map((link) => (
          <button
            key={link.id}
            onClick={() => handleNav(link)}
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              fontFamily: theme.fonts.body,
              fontSize: "0.875rem",
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              color: active === link.label ? theme.colors.brandColor : "#ffffffa6",
              transition: "color 0.2s",
              padding: "0.25rem 0",
              borderBottom:
                active === link.label
                  ? `1px solid ${theme.colors.brandColor}`
                  : "1px solid transparent",
            }}
          >
            {link.label}
          </button>
        ))} */}
      </div>

      {/* Mobile hamburger */}
      {/* <button onClick={() => setMenuOpen(v => !v)} style={{
        display: "none", background: "none", border: "none", cursor: "pointer",
        color: "#fff", fontSize: "1.5rem",
      }} className="mobile-menu-btn">
        {menuOpen ? "✕" : "☰"}
      </button> */}

      {menuOpen && (
        <div style={{
          position: "absolute", top: "64px", left: 0, right: 0,
          background: "#0a0a0ef7", padding: "1.5rem",
          display: "flex", flexDirection: "column", gap: "1.25rem",
        }}>

          {/* {NAV_LINKS.map((link) => (
            <button
              key={link.id}
              onClick={() => handleNav(link)}
              style={{
                background: "none",
                border: "none",
                cursor: "pointer",
                fontFamily: theme.fonts.body,
                fontSize: "1rem",
                color: active === link.label ? theme.colors.brandColor : "#fff",
                textAlign: "left",
              }}
            >
              {link.label}
            </button>
          ))} */}
        </div>
      )}

      <style>{`
        @media (max-width: 640px) {
          .desktop-nav { display: none !important; }
          .mobile-menu-btn { display: block !important; }
        }
      `}</style>
    </nav>
  );
}

function Columns() {
  const [ref, inView] = useInView();
  return (
    <section id="Columns" ref={ref} style={{
      padding: "7rem 2rem",
      // maxWidth: "1100px",
      height: "60vh",
      margin: "0 auto",
    }}>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr",
          gap: "10px",
        }}
      >
        <div id="todo" style={theme.todoStyle}>
          <h2>Yapılacak</h2>
        </div>

        <div id="doing" style={theme.doingStyle}>
          <h2>Yapılıyor</h2>
        </div>

        <div id="done" style={theme.doneStyle}>
          <h2>Bitti</h2>
        </div>
      </div>

    </section>
  );
}

function Footer() {
  return (
    <footer style={{
      padding: "2rem",
      borderTop: "1px solid rgba(255,255,255,0.06)",
      textAlign: "center",
      fontFamily: theme.fonts.body,
      fontSize: "0.8rem",
      color: "#ffffff40",
    }}>
      © {new Date().getFullYear()} Kerem Andaç Vatansever · Tüm hakları saklıdır.
    </footer>
  );
}

export default function App() {

  useEffect(() => {
    const link = document.createElement("link");
    link.rel = "preconnect";
    link.href = "https://fonts.googleapis.com";
    document.head.appendChild(link);

    document.body.style.margin = "0";
    document.body.style.background = theme.colors.bg;

    document.body.style.color = "#fff";
    document.body.style.overflowX = "hidden";
  }, []);

  return (
    <div style={{
      background: theme.colors.bg,
      minHeight: "100vh",
      border: "none",
      overflowX: "hidden",
    }}>
      <Navbar />
      <Columns />
      {/* <Main /> */}
      <Footer />
    </div>
  );

}
