import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Sobre from "./components/Sobre";
import Funcionamento from "./components/Funcionamento";
import Tecnologias from "./components/Tecnologias";
import Beneficios from "./components/Beneficios";
import Demo from "./components/Demo";
import Contato from "./components/Contato";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="bg-gray-950 text-white">
      <Navbar />
      <Hero />
      <Sobre />
      <Funcionamento />
      <Tecnologias />
      <Beneficios />
      <Demo />
      <Contato />
      <Footer />
    </div>
  );
}