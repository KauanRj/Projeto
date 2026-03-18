import Reveal from "./Reveal";

export default function Beneficios() {
  return (
    <section id="beneficios" className="py-24 px-6 bg-gray-900">

      <div className="max-w-5xl mx-auto text-center">

        <Reveal>
          <h2 className="text-4xl font-bold mb-6">
            Benefícios do Sistema
          </h2>
        </Reveal>

        <Reveal delay={0.2}>
          <p className="text-gray-400 mb-12 max-w-2xl mx-auto text-lg">
            A implementação do sistema traz melhorias significativas para o ambiente escolar.
          </p>
        </Reveal>

        <div className="grid md:grid-cols-3 gap-6">

          {[
            "Redução do tempo de chamada",
            "Maior precisão nos registros",
            "Melhor organização dos dados",
            "Menos erros humanos",
            "Mais tempo para ensino",
            "Ambiente mais moderno"
          ].map((item, i) => (
            <Reveal key={i} delay={i * 0.1}>
              <div
                className="bg-gray-800 p-6 rounded-2xl hover:-translate-y-2 transition"
              >
                {item}
              </div>
            </Reveal>
          ))}

        </div>

      </div>
    </section>
  );
}