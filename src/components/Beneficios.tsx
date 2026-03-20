import Reveal from "./Reveal";

export default function Beneficios() {
  return (
    <section id="beneficios" className="py-24 px-6">
      <Reveal>
        <div className="max-w-6xl mx-auto bg-gray-900/50 backdrop-blur rounded-3xl p-10 border border-gray-800">

          <Reveal>
            <h2 className="text-4xl font-bold mb-6 text-center">
              Benefícios do Sistema
            </h2>
          </Reveal>

          <Reveal delay={0.2}>
            <p className="text-gray-400 mb-12 max-w-2xl mx-auto text-lg text-center">
              A implementação do sistema RFID traz diversas vantagens para o ambiente educacional,
              melhorando a eficiência, organização e confiabilidade no controle de presença.
            </p>
          </Reveal>

          <div className="grid md:grid-cols-3 gap-6">

            {[
              {
                titulo: "Agilidade",
                desc: "Redução significativa no tempo de chamada, permitindo que mais tempo seja dedicado ao ensino."
              },
              {
                titulo: "Precisão",
                desc: "Elimina erros humanos no registro de presença, garantindo dados mais confiáveis."
              },
              {
                titulo: "Organização",
                desc: "Os dados são armazenados automaticamente, facilitando consultas e análises futuras."
              },
              {
                titulo: "Automação",
                desc: "Processo totalmente automatizado, sem necessidade de intervenção manual do professor."
              },
              {
                titulo: "Controle",
                desc: "Maior controle e rastreabilidade da presença dos alunos em tempo real."
              },
              {
                titulo: "Modernização",
                desc: "Torna o ambiente escolar mais tecnológico e alinhado com soluções modernas."
              }
            ].map((item, i) => (
              <Reveal key={i} delay={i * 0.1}>
                <div className="bg-gray-800 p-6 rounded-2xl hover:-translate-y-2 transition shadow-lg">
                  
                  <h3 className="text-lg font-semibold mb-2">
                    {item.titulo}
                  </h3>

                  <p className="text-gray-400 text-sm">
                    {item.desc}
                  </p>

                </div>
              </Reveal>
            ))}

          </div>

          {/* EXTRA (DIFERENCIAL) */}
          <Reveal delay={0.5}>
            <div className="mt-16 text-center">

              <h3 className="text-2xl font-semibold mb-4">
                Comparação com o método tradicional
              </h3>

              <p className="text-gray-400 max-w-2xl mx-auto">
                Enquanto a chamada manual pode levar vários minutos e está sujeita a falhas,
                o sistema RFID realiza o registro em poucos segundos, com maior precisão
                e sem interromper o fluxo da aula.
              </p>

            </div>
          </Reveal>

        </div>
      </Reveal>
    </section>
  );
}