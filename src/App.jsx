// import React, { useEffect, useState } from "react";

// const theme = {
//   fonts: {
//     heading: "'Playfair Display', Georgia, serif",
//     body: "'DM Sans', sans-serif"
//   },

//   colors: {
//     bg: "#181822",
//     bgNavBar: "#0a0a0eeb",
//     brandColor: "#d900ff",
//     brandColor2: "#7fffd4",
//   },
// }

// const styles = {
//   main: {
//     background: theme.colors.bg,
//     minHeight: "100vh",
//     border: "none",
//     overflowX: "hidden"
//   },

//   footer: {
//     padding: "2rem",
//     borderTop: "1px solid rgba(255,255,255,0.06)",
//     textAlign: "center",
//     fontFamily: theme.fonts.body,
//     fontSize: "0.8rem",
//     color: "#ffffff40",
//   }
// }

// const NAV_LINKS = [
//   // { label: "HAKKIMDA", id: "About" },
//   // { label: "PROJELER", id: "Projects" },
//   // { label: "CV", id: "Cv" },
//   // { label: "İLETİŞİM", id: "Contact" },
// ];

// function Navbar({ active, setActive }) {
//   const [scrolled, setScrolled] = useState(false);
//   const [menuOpen, setMenuOpen] = useState(false);

//   useEffect(() => {
//     const onScroll = () => setScrolled(window.scrollY > 40);
//     window.addEventListener("scroll", onScroll);
//     return () => window.removeEventListener("scroll", onScroll);
//   }, []);

//   const handleNav = (link) => {
//     setActive(link.label);
//     setMenuOpen(false);

//     document.getElementById(link.id)?.scrollIntoView({
//       behavior: "smooth",
//     });
//   };

//   return (
//     <nav style={{
//       position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
//       padding: "0 2rem",
//       background: scrolled ? theme.colors.bgNavBar : "transparent",
//       backdropFilter: scrolled ? "blur(12px)" : "none",
//       // borderBottom: "2px solid rgba(255,255,255,0.06)",
//       transition: "all 0.35s ease",
//       display: "flex", alignItems: "center", justifyContent: "space-between",
//       height: "64px",
//     }}>
//       <span style={{
//         fontFamily: theme.fonts.heading,
//         fontSize: "1.25rem",
//         fontWeight: 700,
//         color: "#fff",
//         letterSpacing: "0.02em",
//       }}>
//         KA<span style={{ color: theme.colors.brandColor }}>.</span>
//       </span>

//       {/* Desktop */}
//       <div style={{ display: "flex", gap: "2rem" }} className="desktop-nav">

//         {NAV_LINKS.map((link) => (
//           <button
//             key={link.id}
//             onClick={() => handleNav(link)}
//             style={{
//               background: "none",
//               border: "none",
//               cursor: "pointer",
//               fontFamily: theme.fonts.body,
//               fontSize: "0.875rem",
//               letterSpacing: "0.08em",
//               textTransform: "uppercase",
//               color: active === link.label ? theme.colors.brandColor : "#ffffffa6",
//               transition: "color 0.2s",
//               padding: "0.25rem 0",
//               borderBottom:
//                 active === link.label
//                   ? `1px solid ${theme.colors.brandColor}`
//                   : "1px solid transparent",
//             }}
//           >
//             {link.label}
//           </button>
//         ))}
//       </div>

//       {/* Mobile hamburger */}
//       <button onClick={() => setMenuOpen(v => !v)} style={{
//         display: "none", background: "none", border: "none", cursor: "pointer",
//         color: "#fff", fontSize: "1.5rem",
//       }} className="mobile-menu-btn">
//         {menuOpen ? "✕" : "☰"}
//       </button>

//       {menuOpen && (
//         <div style={{
//           position: "absolute", top: "64px", left: 0, right: 0,
//           background: "#0a0a0ef7", padding: "1.5rem",
//           display: "flex", flexDirection: "column", gap: "1.25rem",
//         }}>

//           {NAV_LINKS.map((link) => (
//             <button
//               key={link.id}
//               onClick={() => handleNav(link)}
//               style={{
//                 background: "none",
//                 border: "none",
//                 cursor: "pointer",
//                 fontFamily: theme.fonts.body,
//                 fontSize: "1rem",
//                 color: active === link.label ? theme.colors.brandColor : "#fff",
//                 textAlign: "left",
//               }}
//             >
//               {link.label}
//             </button>
//           ))}
//         </div>
//       )}

//       <style>{`
//         @media (max-width: 640px) {
//           .desktop-nav { display: none !important; }
//           .mobile-menu-btn { display: block !important; }
//         }
//       `}</style>
//     </nav>
//   );
// }

// function Footer() {
//   return (
//     <footer style={{
//       padding: "2rem",
//       borderTop: "1px solid rgba(255,255,255,0.06)",
//       textAlign: "center",
//       fontFamily: theme.fonts.body,
//       fontSize: "0.8rem",
//       color: "#ffffff40",
//     }}>
//       © {new Date().getFullYear()} Kerem Andaç Vatansever · Tüm hakları saklıdır.
//     </footer>
//   );
// }

// export default function App() {
//   const [input, setInput] = useState("");
//   const [column, setColumn] = useState("todo");

//   const [data, setData] = useState({
//     todo: [],
//     progress: [
//       { id: 1, text: "ProgressR1" },
//       { id: 2, text: "ProgressR2" },
//       { id: 3, text: "ProgressR3" },
//     ],
//     done: [{ id: 4, text: "DoneR1" }],
//   });

//   const [dragItem, setDragItem] = useState(null);

//   const columns = [
//     { key: "todo", title: "To Do", color: "blue" },
//     { key: "progress", title: "In Progress", color: "orange" },
//     { key: "done", title: "Done", color: "green" },
//   ];

//   // ADD
//   const addInput = () => {
//     if (!input) return;

//     const newItem = {
//       id: Date.now(),
//       text: input,
//     };

//     setData({
//       ...data,
//       [column]: [...data[column], newItem],
//     });

//     setInput("");
//   };

//   // DRAG START
//   const handleDragStart = (item, fromCol) => {
//     setDragItem({ item, fromCol });
//   };

//   //  DROP
//   const handleDrop = (toCol) => {
//     if (!dragItem) return;

//     const { item, fromCol } = dragItem;
//     console.log("toCol dragItem ", "item ", item + " " + "fromCol ", fromCol);

//     if (fromCol === toCol) {
//       setDragItem(null);
//       return;
//     }
//     const source = data[fromCol].filter((i) => i.id !== item.id);
//     const target = [...data[toCol], item];
//     setData({
//       ...data,
//       [fromCol]: source,
//       [toCol]: target,
//     });
//     setDragItem(null);
//   };

//   //  DELETE
//   const deleteInput = (col, id) => {
//     const updated = data[col].filter((i) => i.id !== id);
//     setData({ ...data, [col]: updated });
//   };

//   // STYLES
//   const container = {
//     background: "linear-gradient(35deg, #240731 30%, #131b45 100%)",
//     height: "100vh",
//     // padding: "20px",
//     color: "white",
//   };

//   const inputBox = {
//     display: "flex",
//     justifyContent: "center",
//     marginBottom: "20px",
//   };

//   const columnStyle = {
//     flex: 1,
//     margin: "10px",
//     background: "lightblue",
//     borderRadius: "8px",
//     padding: "10px",
//     minHeight: "250px",
//   };

//   const card = {
//     background: "gray",
//     padding: "10px",
//     marginTop: "10px",
//     display: "flex",
//     justifyContent: "space-between",
//     cursor: "grab",
//     border: "5px solid red",
//   };

//   return (
//     <div style={{
//       background: "linear-gradient(35deg, #240731 30%, #131b45 100%)",
//       color: "white",
//       padding: "7rem 2rem",
//       maxWidth: "1100px",
//       margin: "0 auto",
//     }}>
//       <Navbar />
//       {/* INPUT + SELECT */}
//       <div style={inputBox}>
//         <input
//           value={input}
//           onChange={(e) => setInput(e.target.value)}
//           placeholder="Add a task..."
//           style={{ padding: "10px", width: "200px" }}
//         />

//         <select
//           value={column}
//           onChange={(e) => setColumn(e.target.value)}
//           style={{ padding: "10px", marginLeft: "10px" }}
//         >
//           <option value="todo">To Do</option>
//           <option value="progress">In Progress</option>
//           <option value="done">Done</option>
//         </select>

//         <button
//           onClick={addInput}
//           style={{
//             padding: "10px",
//             marginLeft: "10px",
//             background: "orange",
//             border: "none",
//             cursor: "pointer",
//           }}
//         >
//           Add
//         </button>
//       </div>

//       <div style={{ display: "flex" }}>
//         {columns.map((col) => (
//           <div
//             key={col.key}
//             style={columnStyle}
//             onDragOver={(e) => e.preventDefault()}
//             onDrop={() => handleDrop(col.key)}
//           >
//             <div style={{ background: col.color, padding: "10px" }}>
//               {col.title} ({data[col.key].length})
//             </div>

//             {data[col.key].map((item) => {
//               console.log(" Raj1 col.key.toUpperCase()", col.key, ":", item);

//               return (
//                 <div
//                   key={item.id}
//                   style={card}
//                   draggable
//                   onDragStart={() => handleDragStart(item, col.key)}
//                 >
//                   {item.text}
//                   <span
//                     onClick={() => deleteInput(col.key, item.id)}
//                     style={{ cursor: "pointer" }}
//                   >
//                     ❌
//                   </span>
//                 </div>
//               );
//             })}
//           </div>
//         ))}
//       </div>

//       <Footer />
//     </div>
//   );
// }

// ----------------------------------------------------------------

// import { useState, useEffect, useRef } from "react";
// // import { TbArrowBigUpFilled } from "react-icons/tb";


// // const NAV_LINKS = ["HAKKIMDA", "PROJELER"/*, "CV", "İLETİŞİM"*/];

// const NAV_LINKS = [
//   // { label: "HAKKIMDA", id: "About" },
//   // { label: "PROJELER", id: "Projects" },
//   // { label: "CV", id: "Cv" },
//   // { label: "İLETİŞİM", id: "Contact" },
// ];

// const PROJECTS = [
//   {
//     id: 1,
//     title: "Bisiklet Yol Bilgisayarı",
//     description: "Bisikletler için ESP32 üzerine geliştirilmiş bir yol bilgisayarı.",
//     tags: ["C / C++", "TFT", "ESP32", "Arduino", "Embedded"],
//     color: "#c8f0d0",
//     emoji: "🚴‍♂️",
//   },
// ];

// const theme = {
//   fonts: {
//     heading: "'Playfair Display', Georgia, serif",
//     body: "'DM Sans', sans-serif"
//   },

//   colors: {
//     bg: "#181822",
//     bgNavBar: "#0a0a0eeb",
//     brandColor: "#d900ff",
//     brandColor2: "#7fffd4",
//   },
// }

// const styles = {
//   main: {
//     background: theme.colors.bg,
//     minHeight: "100vh",
//     border: "none",
//     overflowX: "hidden"
//   },

//   footer: {
//     padding: "2rem",
//     borderTop: "1px solid rgba(255,255,255,0.06)",
//     textAlign: "center",
//     fontFamily: theme.fonts.body,
//     fontSize: "0.8rem",
//     color: "#ffffff40",
//   }
// }

// function useInView(threshold = 0.15) {
//   const ref = useRef(null);
//   const [inView, setInView] = useState(false);

//   useEffect(() => {
//     const obs = new IntersectionObserver(
//       ([e]) => { if (e.isIntersecting) setInView(true); },
//       { threshold }
//     );
//     if (ref.current) obs.observe(ref.current);
//     return () => obs.disconnect();
//   }, [threshold]);

//   return [ref, inView];
// }

// function Navbar({ active, setActive }) {
//   const [scrolled, setScrolled] = useState(false);
//   const [menuOpen, setMenuOpen] = useState(false);

//   useEffect(() => {
//     const onScroll = () => setScrolled(window.scrollY > 40);
//     window.addEventListener("scroll", onScroll);
//     return () => window.removeEventListener("scroll", onScroll);
//   }, []);

//   const handleNav = (link) => {
//     setActive(link.label);
//     setMenuOpen(false);

//     document.getElementById(link.id)?.scrollIntoView({
//       behavior: "smooth",
//     });
//   };

//   return (
//     <nav style={{
//       position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
//       padding: "0 2rem",
//       background: scrolled ? theme.colors.bgNavBar : "transparent",
//       backdropFilter: scrolled ? "blur(12px)" : "none",
//       // borderBottom: "2px solid rgba(255,255,255,0.06)",
//       transition: "all 0.35s ease",
//       display: "flex", alignItems: "center", justifyContent: "space-between",
//       height: "64px",
//     }}>
//       <span style={{
//         fontFamily: theme.fonts.heading,
//         fontSize: "1.25rem",
//         fontWeight: 700,
//         color: "#fff",
//         letterSpacing: "0.02em",
//       }}>
//         KA<span style={{ color: theme.colors.brandColor }}>.</span>
//       </span>

//       {/* Desktop */}
//       <div style={{ display: "flex", gap: "2rem" }} className="desktop-nav">

//         {NAV_LINKS.map((link) => (
//           <button
//             key={link.id}
//             onClick={() => handleNav(link)}
//             style={{
//               background: "none",
//               border: "none",
//               cursor: "pointer",
//               fontFamily: theme.fonts.body,
//               fontSize: "0.875rem",
//               letterSpacing: "0.08em",
//               textTransform: "uppercase",
//               color: active === link.label ? theme.colors.brandColor : "#ffffffa6",
//               transition: "color 0.2s",
//               padding: "0.25rem 0",
//               borderBottom:
//                 active === link.label
//                   ? `1px solid ${theme.colors.brandColor}`
//                   : "1px solid transparent",
//             }}
//           >
//             {link.label}
//           </button>
//         ))}
//       </div>

//       {/* Mobile hamburger */}
//       <button onClick={() => setMenuOpen(v => !v)} style={{
//         display: "none", background: "none", border: "none", cursor: "pointer",
//         color: "#fff", fontSize: "1.5rem",
//       }} className="mobile-menu-btn">
//         {menuOpen ? "✕" : "☰"}
//       </button>

//       {menuOpen && (
//         <div style={{
//           position: "absolute", top: "64px", left: 0, right: 0,
//           background: "#0a0a0ef7", padding: "1.5rem",
//           display: "flex", flexDirection: "column", gap: "1.25rem",
//         }}>

//           if (NAV_LINKS.length === 0) return;

//           {NAV_LINKS.map((link) => (
//             <button
//               key={link.id}
//               onClick={() => handleNav(link)}
//               style={{
//                 background: "none",
//                 border: "none",
//                 cursor: "pointer",
//                 fontFamily: theme.fonts.body,
//                 fontSize: "1rem",
//                 color: active === link.label ? theme.colors.brandColor : "#fff",
//                 textAlign: "left",
//               }}
//             >
//               {link.label}
//             </button>
//           ))}
//         </div>
//       )}

//       <style>{`
//         @media (max-width: 640px) {
//           .desktop-nav { display: none !important; }
//           .mobile-menu-btn { display: block !important; }
//         }
//       `}</style>
//     </nav>
//   );
// }

// function Projects() {
//   const [ref, inView] = useInView();

//   return (
//     <section id="Projects" ref={ref} style={{ padding: "7rem 2rem", background: "#ffffff05" }}>
//       <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
//         <h2 style={{
//           fontFamily: theme.fonts.heading,
//           fontSize: "clamp(2rem,4vw,2.75rem)",
//           color: "#fff",
//           marginBottom: "1.5rem"
//         }}> Projelerim
//         </h2>

//         <div
//           style={{
//             display: "flex", justifySelf: "center",
//             width: "320px", height: "320px",
//             gap: "1.5rem",
//             opacity: inView ? 1 : 0,
//             transform: inView ? "none" : "translateY(40px)",
//             transition: "all 0.8s ease",
//           }}
//         >
//           {PROJECTS.map((p, i) => (
//             <ProjectCard key={p.id} project={p} delay={i * 0.1} />
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

// function ProjectCard({ project, delay }) {
//   const [hovered, setHovered] = useState(false);

//   return (
//     <div
//       onMouseEnter={() => setHovered(true)}
//       onMouseLeave={() => setHovered(false)}
//       style={{
//         background: hovered ? "rgba(255,255,255,0.04)" : "rgba(255,255,255,0.02)",
//         border: `1px solid ${hovered ? "rgba(127,255,212,0.3)" : "rgba(255,255,255,0.08)"}`,
//         borderRadius: "12px", padding: "1.75rem",
//         cursor: "pointer",
//         transform: hovered ? "translateY(-6px)" : "none",
//         transition: "all 0.3s ease",
//         animationDelay: `${delay}s`,
//       }}
//     >
//       <div
//         style={{
//           width: "48px", height: "48px", borderRadius: "10px",
//           background: project.color,
//           marginBottom: "0.75rem",
//           marginLeft: "auto",
//           display: "flex", alignItems: "center", justifyContent: "center",
//           fontSize: "1.4rem",
//         }}>
//         {project.emoji}
//       </div>

//       <h3 style={{
//         color: "#fff",
//         marginTop: "0rem",
//         marginBottom: "1rem"
//       }}>
//         {project.title}
//       </h3>

//       <p style={{
//         color: "rgba(255,255,255,0.6)",
//         fontSize: "0.9rem",
//         marginBottom: "1rem",
//         textAlign: "left"
//       }}>
//         {project.description}
//       </p>

//       <div style={{
//         display: "flex",
//         flexWrap: "wrap",
//         gap: "0.4rem"
//       }}>
//         {project.tags.map((tag) => (
//           <span
//             key={tag}
//             style={{
//               padding: "0.25rem 0.6rem",
//               background: "#00ffaa14",
//               border: "1px solid #7fffd426",
//               borderRadius: "4px",
//               fontFamily: theme.fonts.body,
//               fontSize: "0.72rem", color: theme.colors.brandColor,
//               letterSpacing: "0.08em",
//             }}
//           >
//             {tag}
//           </span>
//         ))}
//       </div>
//     </div>
//   );
// }

// function Footer() {
//   return (
//     <footer style={{
//       padding: "2rem",
//       borderTop: "1px solid rgba(255,255,255,0.06)",
//       textAlign: "center",
//       fontFamily: theme.fonts.body,
//       fontSize: "0.8rem",
//       color: "#ffffff40",
//     }}>
//       © {new Date().getFullYear()} Kerem Andaç Vatansever · Tüm hakları saklıdır.
//     </footer>
//   );
// }

// export default function App() {
//   const [active, setActive] = useState("HAKKIMDA");

//   useEffect(() => {
//     const link = document.createElement("link");
//     link.rel = "preconnect";
//     link.href = "https://fonts.googleapis.com";
//     document.head.appendChild(link);

//     const link2 = document.createElement("link");
//     link2.rel = "stylesheet";
//     link2.href = "https://fonts.googleapis.com/css2?family=Playfair+Display:wght@600;700&family=DM+Sans:wght@400;500;600;700&display=swap";
//     document.head.appendChild(link2);

//     document.body.style.margin = "0";
//     document.body.style.background = theme.colors.bg;

//     document.body.style.color = "#fff";
//     document.body.style.overflowX = "hidden";
//   }, []);

//   return (
//     <div style={{
//       background: theme.colors.bg,
//       minHeight: "100vh",
//       border: "none",
//       overflowX: "hidden"
//     }}>
//       <Navbar active={active} setActive={setActive} />
//       <Projects />
//       <Footer />
//     </div>
//   );
// }


// -------------------------------------------------------------------

// Komponentlere ayır!

import { useState, useEffect, useRef } from "react";

const NAV_LINKS = [
  { label: "ANA SAYFA", id: "Main" },
];

const columns = [
  { id: 'todo', title: 'Yapılacak', color: '#6366f1' },
  { id: 'inProgress', title: 'Devam Ediyor', color: '#f59e0b' },
  { id: 'done', title: 'Tamamlandı', color: '#10b981' }
];


const theme = {
  fonts: {
    heading: "'Playfair Display', Georgia, serif",
    body: "'DM Sans', sans-serif"
  },

  colors: {
    bg: "#181822",
    bgNavBar: "#0a0a0eeb",
    brandColor: "#d900ff",
    brandColor2: "#7fffd4",
  },
}

const styles = {
  main: {
    background: theme.colors.bg,
    minHeight: "100vh",
    border: "none",
    overflowX: "hidden"
  },

  footer: {
    padding: "2rem",
    borderTop: "1px solid rgba(255,255,255,0.06)",
    textAlign: "center",
    fontFamily: theme.fonts.body,
    fontSize: "0.8rem",
    color: "#ffffff40",
  }
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

        {NAV_LINKS.map((link) => (
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
        ))}
      </div>

      {/* Mobile hamburger */}
      <button onClick={() => setMenuOpen(v => !v)} style={{
        display: "none", background: "none", border: "none", cursor: "pointer",
        color: "#fff", fontSize: "1.5rem",
      }} className="mobile-menu-btn">
        {menuOpen ? "✕" : "☰"}
      </button>

      {menuOpen && (
        <div style={{
          position: "absolute", top: "64px", left: 0, right: 0,
          background: "#0a0a0ef7", padding: "1.5rem",
          display: "flex", flexDirection: "column", gap: "1.25rem",
        }}>

          if (NAV_LINKS.length === 0) return;

          {NAV_LINKS.map((link) => (
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
          ))}
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

function KanbanTable() {
  const [ref, inView] = useInView();

  return (
    <section id="KanbanTable" ref={ref} style={{ padding: "7rem 2rem", background: "#ffffff05" }}>
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        <h2 style={{
          fontFamily: theme.fonts.heading,
          fontSize: "clamp(2rem,4vw,2.75rem)",
          color: "#fff",
          marginBottom: "1.5rem"
        }}> Projelerim
        </h2>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '1.5rem'
        }}>
          {COLUMNS.map(column => (
            <div
              key={column.id}
              className="column"
              onDragOver={handleDragOver}
              onDrop={() => handleDrop(column.id)}
            >
              <div className="column-header">
                <div
                  className="column-indicator"
                  style={{ background: column.color }}
                />
                <h2 className="column-title">{column.title}</h2>
                <span className="column-count">
                  {getTasksByStatus(column.id).length}
                </span>
              </div>

              <div>
                {getTasksByStatus(column.id).length === 0 ? (
                  <div className="empty-state">
                    <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    <p>Henüz görev yok</p>
                  </div>
                ) : (
                  getTasksByStatus(column.id).map(task => (
                    <div
                      key={task.id}
                      className="task-card"
                      draggable
                      onDragStart={() => handleDragStart(task)}
                      onMouseEnter={() => setHoveredTask(task.id)}
                      onMouseLeave={() => setHoveredTask(null)}
                    >
                      <div className="task-title">{task.title}</div>
                      {task.description && (
                        <div className="task-preview">{task.description}</div>
                      )}

                      {hoveredTask === task.id && (
                        <div className="tooltip">
                          <div className="tooltip-date">
                            📅 {task.createdAt}
                          </div>
                          <div className="tooltip-description">
                            {task.description || 'Açıklama eklenmemiş'}
                          </div>
                        </div>
                      )}
                    </div>
                  ))
                )}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

function Column({ project, delay }) {
  const [hovered, setHovered] = useState(false);
  const handleClick = () => {
    if (!project.link) return;
    window.open(project.link, "_blank");
  };

  return (
    <div
      onClick={handleClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: hovered ? "rgba(255,255,255,0.04)" : "rgba(255,255,255,0.02)",
        border: `1px solid ${hovered ? "rgba(127,255,212,0.3)" : "rgba(255,255,255,0.08)"}`,
        borderRadius: "12px", padding: "1.75rem",
        cursor: "pointer",
        transform: hovered ? "translateY(-6px)" : "none",
        transition: "all 0.3s ease",
        animationDelay: `${delay}s`,
      }}
    >
      <div
        style={{
          width: "48px", height: "48px", borderRadius: "10px",
          background: project.color,
          marginBottom: "0.75rem",
          marginLeft: "auto",
          display: "flex", alignItems: "center", justifyContent: "center",
          fontSize: "1.4rem",
        }}>
        {project.emoji}
      </div>

      <h3 style={{
        color: "#fff",
        marginTop: "0rem",
        marginBottom: "1rem"
      }}>
        {project.title}
      </h3>

      <p style={{
        color: "rgba(255,255,255,0.6)",
        fontSize: "0.9rem",
        marginBottom: "1rem",
        textAlign: "left"
      }}>
        {project.description}
      </p>

      <div style={{
        display: "flex",
        flexWrap: "wrap",
        gap: "0.4rem"
      }}>
        {project.tags.map((tag) => (
          <span
            key={tag}
            style={{
              padding: "0.25rem 0.6rem",
              background: "#00ffaa14",
              border: "1px solid #7fffd426",
              borderRadius: "4px",
              fontFamily: theme.fonts.body,
              fontSize: "0.72rem", color: theme.colors.brandColor,
              letterSpacing: "0.08em",
            }}
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}

function Footer() {
  return (
    <footer style={styles.footer}>
      © {new Date().getFullYear()} Kerem Andaç Vatansever · Tüm hakları saklıdır.
    </footer>
  );
}

export default function App() {
  const [tasks, setTasks] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [newTask, setNewTask] = useState({ title: '', description: '' });
  const [draggedTask, setDraggedTask] = useState(null);
  const [hoveredTask, setHoveredTask] = useState(null);

  // const columns = [
  //   { id: 'todo', title: 'Yapılacak', color: '#6366f1' },
  //   { id: 'inProgress', title: 'Devam Ediyor', color: '#f59e0b' },
  //   { id: 'done', title: 'Tamamlandı', color: '#10b981' }
  // ];

  const addTask = () => {
    if (newTask.title.trim()) {
      const task = {
        id: Date.now(),
        title: newTask.title,
        description: newTask.description,
        status: 'todo',
        createdAt: new Date().toLocaleString('tr-TR')
      };
      setTasks([task, ...tasks]);
      setNewTask({ title: '', description: '' });
      setShowModal(false);
    }
  };

  const handleDragStart = (task) => {
    setDraggedTask(task);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (status) => {
    if (draggedTask) {
      setTasks(tasks.map(task =>
        task.id === draggedTask.id ? { ...task, status } : task
      ));
      setDraggedTask(null);
    }
  };

  const getTasksByStatus = (status) => {
    return tasks.filter(task => task.status === status);
  };

  return (

    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      padding: '2rem',
      fontFamily: '"Outfit", system-ui, sans-serif'
    }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700&display=swap');

        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        .add-button {
          background: white;
          color: #667eea;
          border: none;
          padding: 0.875rem 1.75rem;
          border-radius: 12px;
          font-size: 1rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
          font-family: 'Outfit', sans-serif;
        }

        .add-button:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
          background: linear-gradient(135deg, #ffffff 0%, #f8f9ff 100%);
        }

        .modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.5);
          backdrop-filter: blur(4px);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 1000;
          animation: fadeIn 0.2s ease;
        }

        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        .modal {
          background: white;
          padding: 2rem;
          border-radius: 20px;
          width: 90%;
          max-width: 500px;
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
          animation: slideUp 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }

        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .modal h2 {
          margin-bottom: 1.5rem;
          color: #1f2937;
          font-size: 1.75rem;
          font-weight: 700;
        }

        .input-group {
          margin-bottom: 1.25rem;
        }

        .input-group label {
          display: block;
          margin-bottom: 0.5rem;
          color: #4b5563;
          font-weight: 500;
          font-size: 0.9rem;
        }

        .input-group input,
        .input-group textarea {
          width: 100%;
          padding: 0.875rem;
          border: 2px solid #e5e7eb;
          border-radius: 10px;
          font-size: 1rem;
          font-family: 'Outfit', sans-serif;
          transition: all 0.2s;
        }

        .input-group input:focus,
        .input-group textarea:focus {
          outline: none;
          border-color: #667eea;
          box-shadow: 0 0 0 3px rgba(102, 110, 234, 0.1);
        }

        .input-group textarea {
          resize: vertical;
          min-height: 100px;
        }

        .modal-buttons {
          display: flex;
          gap: 0.75rem;
          margin-top: 1.5rem;
        }

        .modal-buttons button {
          flex: 1;
          padding: 0.875rem;
          border: none;
          border-radius: 10px;
          font-size: 1rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.2s;
          font-family: 'Outfit', sans-serif;
        }

        .btn-primary {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
        }

        .btn-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 16px rgba(102, 110, 234, 0.4);
        }

        .btn-secondary {
          background: #f3f4f6;
          color: #6b7280;
        }

        .btn-secondary:hover {
          background: #e5e7eb;
        }

        .column {
          background: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(10px);
          border-radius: 16px;
          padding: 1.5rem;
          min-height: 600px;
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
          transition: all 0.3s;
        }

        .column-header {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          margin-bottom: 1.5rem;
          padding-bottom: 1rem;
          border-bottom: 2px solid #f3f4f6;
        }

        .column-indicator {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          animation: pulse 2s infinite;
        }

        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }

        .column-title {
          font-size: 1.25rem;
          font-weight: 700;
          color: #1f2937;
        }

        .column-count {
          margin-left: auto;
          background: #f3f4f6;
          color: #6b7280;
          padding: 0.25rem 0.75rem;
          border-radius: 20px;
          font-size: 0.875rem;
          font-weight: 600;
        }

        .task-card {
          background: white;
          border-radius: 12px;
          padding: 1.25rem;
          margin-bottom: 1rem;
          cursor: grab;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          border: 2px solid transparent;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
          position: relative;
        }

        .task-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 12px 24px rgba(0, 0, 0, 0.12);
          border-color: #e5e7eb;
        }

        .task-card:active {
          cursor: grabbing;
          transform: rotate(2deg);
        }

        .task-title {
          font-size: 1.1rem;
          font-weight: 600;
          color: #1f2937;
          margin-bottom: 0.5rem;
          line-height: 1.4;
        }

        .task-preview {
          color: #6b7280;
          font-size: 0.875rem;
          line-height: 1.5;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        .tooltip {
          position: absolute;
          bottom: calc(100% + 12px);
          left: 50%;
          transform: translateX(-50%);
          background: #1f2937;
          color: white;
          padding: 1rem;
          border-radius: 10px;
          width: 280px;
          z-index: 100;
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.3);
          animation: tooltipIn 0.2s ease;
          pointer-events: none;
        }

        @keyframes tooltipIn {
          from {
            opacity: 0;
            transform: translateX(-50%) translateY(4px);
          }
          to {
            opacity: 1;
            transform: translateX(-50%) translateY(0);
          }
        }

        .tooltip::after {
          content: '';
          position: absolute;
          top: 100%;
          left: 50%;
          transform: translateX(-50%);
          border: 6px solid transparent;
          border-top-color: #1f2937;
        }

        .tooltip-date {
          font-size: 0.75rem;
          color: #9ca3af;
          margin-bottom: 0.5rem;
          font-weight: 500;
        }

        .tooltip-description {
          font-size: 0.875rem;
          line-height: 1.5;
          color: #e5e7eb;
        }

        .empty-state {
          text-align: center;
          padding: 3rem 1rem;
          color: #9ca3af;
        }

        .empty-state svg {
          width: 64px;
          height: 64px;
          margin: 0 auto 1rem;
          opacity: 0.3;
        }

        .empty-state p {
          font-size: 0.9rem;
          font-weight: 500;
        }
      `}</style>

      <div style={{
        maxWidth: '1400px',
        margin: '0 auto'
      }}>
        <div style={{
          marginBottom: '2rem',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}>
          <h1 style={{
            color: 'white',
            fontSize: '2.5rem',
            fontWeight: '700',
            textShadow: '0 2px 10px rgba(0, 0, 0, 0.2)'
          }}>
            Görev Yönetimi
          </h1>
          <button
            className="add-button"
            onClick={() => setShowModal(true)}
          >
            + Yeni Görev
          </button>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '1.5rem'
        }}>
          {columns.map(column => (
            <div
              key={column.id}
              className="column"
              onDragOver={handleDragOver}
              onDrop={() => handleDrop(column.id)}
            >
              <div className="column-header">
                <div
                  className="column-indicator"
                  style={{ background: column.color }}
                />
                <h2 className="column-title">{column.title}</h2>
                <span className="column-count">
                  {getTasksByStatus(column.id).length}
                </span>
              </div>

              <div>
                {getTasksByStatus(column.id).length === 0 ? (
                  <div className="empty-state">
                    <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    <p>Henüz görev yok</p>
                  </div>
                ) : (
                  getTasksByStatus(column.id).map(task => (
                    <div
                      key={task.id}
                      className="task-card"
                      draggable
                      onDragStart={() => handleDragStart(task)}
                      onMouseEnter={() => setHoveredTask(task.id)}
                      onMouseLeave={() => setHoveredTask(null)}
                    >
                      <div className="task-title">{task.title}</div>
                      {task.description && (
                        <div className="task-preview">{task.description}</div>
                      )}

                      {hoveredTask === task.id && (
                        <div className="tooltip">
                          <div className="tooltip-date">
                            📅 {task.createdAt}
                          </div>
                          <div className="tooltip-description">
                            {task.description || 'Açıklama eklenmemiş'}
                          </div>
                        </div>
                      )}
                    </div>
                  ))
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {showModal && (
        <div className="modal-overlay" onClick={() => setShowModal(false)}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <h2>Yeni Görev Ekle</h2>
            <div className="input-group">
              <label>Başlık *</label>
              <input
                type="text"
                placeholder="Görev başlığı giriniz..."
                value={newTask.title}
                onChange={(e) => setNewTask({ ...newTask, title: e.target.value })}
                autoFocus
              />
            </div>
            <div className="input-group">
              <label>Açıklama</label>
              <textarea
                placeholder="Görev detaylarını giriniz..."
                value={newTask.description}
                onChange={(e) => setNewTask({ ...newTask, description: e.target.value })}
              />
            </div>
            <div className="modal-buttons">
              <button
                className="btn-secondary"
                onClick={() => setShowModal(false)}
              >
                İptal
              </button>
              <button
                className="btn-primary"
                onClick={addTask}
              >
                Ekle
              </button>
            </div>
          </div>
        </div>
      )}
    </div>

    // <div style={styles.main}>
    //   <Navbar />
    //   <KanbanTable />
    //   <Footer />
    // </div >

  );
}
