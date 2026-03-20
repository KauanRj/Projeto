import { motion } from "framer-motion";

export default function Hero() {

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
    <section className="min-h-screen flex items-center justify-center text-center px-6 bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950">

      <div className="max-w-3xl">

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl md:text-6xl font-bold mb-6 leading-tight"
        >
          Controle de Presença com{" "}
          <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
            RFID
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-gray-400 text-lg mb-8"
        >
          Um sistema inteligente que automatiza o registro de presença em salas de aula,
          eliminando chamadas manuais e trazendo mais eficiência, organização e tecnologia
          para o ambiente escolar.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="flex justify-center gap-4 flex-wrap"
        >
          {/* BOTÃO DEMO */}
          <button
            onClick={() => scrollToSection("demo")}
            className="bg-blue-500 px-6 py-3 rounded-xl hover:scale-105 hover:bg-blue-600 transition shadow-lg shadow-blue-500/20"
          >
            Ver demonstração
          </button>

          {/* BOTÃO SOBRE */}
          <button
            onClick={() => scrollToSection("sobre")}
            className="border border-gray-600 px-6 py-3 rounded-xl hover:bg-gray-800 transition"
          >
            Entender projeto
          </button>
        </motion.div>

      </div>
    </section>
  );
}