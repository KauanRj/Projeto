import Reveal from "./Reveal";

export default function Contato() {
  return (
    <section id="contato" className="py-24 px-6 bg-gray-900">

      <div className="max-w-4xl mx-auto text-center">

        <Reveal>
          <h2 className="text-4xl font-bold mb-6">
            Equipe do Projeto
          </h2>
        </Reveal>

        <Reveal delay={0.2}>
          <p className="text-gray-400 mb-8 text-lg">
            Projeto desenvolvido como parte do curso técnico, com foco em inovação
            e aplicação de tecnologia no ambiente educacional.
          </p>
        </Reveal>

        <Reveal delay={0.3}>
          <div className="bg-gray-800 p-6 rounded-2xl">
            <p className="text-gray-300">
              Desenvolvido por alunos — 2026
            </p>
          </div>
        </Reveal>

      </div>
    </section>
  );
}