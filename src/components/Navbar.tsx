import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const links = [
  { id: "sobre", label: "Sobre" },
  { id: "funcionamento", label: "Funcionamento" },
  { id: "tecnologias", label: "Tecnologias" },
  { id: "beneficios", label: "Benefícios" },
  { id: "demo", label: "Demonstração" },
  { id: "contato", label: "Contato" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("");

  // detectar scroll (background)
     // SCROLL NAVBAR
useEffect(() => {
  const handleScroll = () => {
    setScrolled(window.scrollY > 20);
  };

  window.addEventListener("scroll", handleScroll);
  return () => window.removeEventListener("scroll", handleScroll);
}, []);

// ACTIVE SECTION
useEffect(() => {
  const sections = links.map((link) =>
    document.getElementById(link.id)
  );

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActive(entry.target.id);
        }
      });
    },
    {
      root: null,
      rootMargin: "-30% 0px -60% 0px",
      threshold: 0,
    }
  );

  sections.forEach((section) => {
    if (section) observer.observe(section);
  });

  return () => {
    sections.forEach((section) => {
      if (section) observer.unobserve(section);
    });
  };
}, []);

useEffect(() => {
  const handleScroll = () => {
    if (window.scrollY < 100) {
      setActive("");
    }
  };

  window.addEventListener("scroll", handleScroll);
  return () => window.removeEventListener("scroll", handleScroll);
}, []);
  // scroll suave
  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      window.scrollTo({
        top: section.offsetTop - 80,
        behavior: "smooth",
      });
    }
  };

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 w-full z-50 transition-all ${
        scrolled
          ? "bg-gray-950/90 backdrop-blur border-b border-gray-800 shadow-lg"
          : "bg-gray-950/80 backdrop-blur border-b border-gray-800"
      }`}
    >
      <div className="max-w-6xl mx-auto flex justify-between items-center p-4">

        <h1 className="text-xl font-bold text-blue-500">
          RFID System
        </h1>

        <div className="hidden md:flex gap-6 text-gray-300">

          {links.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollToSection(link.id)}
              className="relative group"
            >
              {/* TEXTO */}
              <span
                className={`transition ${
                  active === link.id ? "text-blue-500" : "group-hover:text-white"
                }`}
              >
                {link.label}
              </span>

              {/* UNDERLINE ANIMADO */}
              <span
                className={`absolute left-0 -bottom-1 h-[2px] bg-blue-500 transition-all duration-300 ${
                  active === link.id
                    ? "w-full"
                    : "w-0 group-hover:w-full"
                }`}
              />
            </button>
          ))}

        </div>

      </div>
    </motion.nav>
  );
}