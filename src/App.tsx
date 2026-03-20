import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Sobre from "./components/Sobre";
import Funcionamento from "./components/Funcionamento";
import Tecnologias from "./components/Tecnologias";
import Beneficios from "./components/Beneficios";
import Demo from "./components/Demo";
import Contato from "./components/Contato";
import Footer from "./components/Footer";
import ScrollProgress from "./components/ScrollProgress";
import MouseGlow from "./components/MouseGlow";
import BackToTop from "./components/BackToTop";

export default function App() {
  return (
    <div className="text-white min-h-screen bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950">

      <ScrollProgress />

      <MouseGlow />

      <Navbar />
      <Hero />
      <Sobre />
      <Funcionamento />
      <Tecnologias />
      <Beneficios />
      <Demo />
      <Contato />

      <BackToTop />

      <Footer />

    </div>
  );
}