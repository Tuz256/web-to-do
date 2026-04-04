// import { useState } from "react";

// function App() {

//   const [columns, setColumns] = useState({
//     todo: {
//       name: "Yapılacak",
//       items: [
//         { id: "1", content: "A" },
//         { id: "2", content: "B" },
//       ]
//     },
//     inProgress: {
//       name: "Yapılıyor",
//       items: [
//         { id: "3", content: "C" },
//       ]
//     },
//     done: {
//       name: "Bitmiş",
//       items: [
//         { id: "4", content: "D" },
//       ]
//     },
//   });

//   const [newTask, setNewTask] = useState("");
//   const [draggedItem, setDraggedItem] = useState(null);

//   const addNewTask = () => {
//     if (newTask.trim() === "") return;

//     const updatedColumns = { ...columns.todo };

//     updatedColumns.items.push({
//       id: Date.now().toString(),
//       content: newTask,
//     })

//     setColumns(updatedColumns);
//     setNewTask("");
//   }

//   const removeTask = (columnId, taskId) => {
//     const updatedColumns = { ...columns };

//     updatedColumns[columnId].items = updatedColumns[columnId].items.
//       filter((item) => item.id !== taskId);

//     setColumns(updatedColumns);
//   }

//   const handleDragStart = (columnId, item) => {
//     setDraggedItem({ columnId, item });
//   }

//   const handleDragOver = (e) => {
//     e.preventDefault();
//   }

//   const handleDrop = (e, columnId) => {
//     e.preventDefault();

//     if (!draggedItem) return;

//     const { columnId: sourceColumnId, item } = draggedItem;

//     if (sourceColumnId === columnId) return;

//     const updatedColumns = { ...columns };

//     updatedColumns[sourceColumnId].items = updatedColumns
//     [sourceColumnId].items.filter((i) => i.id != item.id);

//     updatedColumns[columnId].items.push(item);

//     setColumns(updatedColumns);
//     setDraggedItem(null);
//   }

//   const columnStyles = {

//   }

//   return (
//     <>

//     </>
//   );
// }

// export default App;



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

import { useState, useEffect, useRef } from "react";
// import { TbArrowBigUpFilled } from "react-icons/tb";


// const NAV_LINKS = ["HAKKIMDA", "PROJELER"/*, "CV", "İLETİŞİM"*/];

const NAV_LINKS = [
  // { label: "HAKKIMDA", id: "About" },
  // { label: "PROJELER", id: "Projects" },
  // { label: "CV", id: "Cv" },
  // { label: "İLETİŞİM", id: "Contact" },
];

const PROJECTS = [
  {
    id: 1,
    title: "Bisiklet Yol Bilgisayarı",
    description: "Bisikletler için ESP32 üzerine geliştirilmiş bir yol bilgisayarı.",
    tags: ["C / C++", "TFT", "ESP32", "Arduino", "Embedded"],
    color: "#c8f0d0",
    emoji: "🚴‍♂️",
  },
  // {
  //   id: 2,
  //   title: "Hava Durumu Uygulaması",
  //   description: "OpenWeather API ile anlık hava ve 7 günlük tahmin sunar.",
  //   tags: ["React", "API", "PWA", "CSS"],
  //   color: "#c8e0f0",
  //   emoji: "🌤️",
  // },
  // {
  //   id: 3,
  //   title: "Görev Yönetim Aracı",
  //   description: "Sürükle-bırak özellikli Kanban panosu.",
  //   tags: ["React", "DnD", "Firebase", "Tailwind"],
  //   color: "#f0e4c8",
  //   emoji: "📋",
  // },
  // {
  //   id: 4,
  //   title: "Blog CMS",
  //   description: "Markdown destekli kişisel blog platformu.",
  //   tags: ["Next.js", "Markdown", "SEO", "Vercel"],
  //   color: "#f0c8d8",
  //   emoji: "📝",
  // },
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

function Projects() {
  const [ref, inView] = useInView();

  return (
    <section id="Projects" ref={ref} style={{ padding: "7rem 2rem", background: "#ffffff05" }}>
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        <h2 style={{
          fontFamily: theme.fonts.heading,
          fontSize: "clamp(2rem,4vw,2.75rem)",
          color: "#fff",
          marginBottom: "1.5rem"
        }}> Projelerim
        </h2>

        <div
          style={{
            display: "flex", justifySelf: "center",
            width: "320px", height: "320px",
            gap: "1.5rem",
            opacity: inView ? 1 : 0,
            transform: inView ? "none" : "translateY(40px)",
            transition: "all 0.8s ease",
          }}
        >
          {PROJECTS.map((p, i) => (
            <ProjectCard key={p.id} project={p} delay={i * 0.1} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project, delay }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
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
  const [active, setActive] = useState("HAKKIMDA");

  useEffect(() => {
    const link = document.createElement("link");
    link.rel = "preconnect";
    link.href = "https://fonts.googleapis.com";
    document.head.appendChild(link);

    const link2 = document.createElement("link");
    link2.rel = "stylesheet";
    link2.href = "https://fonts.googleapis.com/css2?family=Playfair+Display:wght@600;700&family=DM+Sans:wght@400;500;600;700&display=swap";
    document.head.appendChild(link2);

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
      overflowX: "hidden"
    }}>
      <Navbar active={active} setActive={setActive} />
      <Projects />
      <Footer />
    </div>
  );
}