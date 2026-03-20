import Reveal from "./Reveal";

export default function Contato() {
  return (
    <section id="contato" className="py-24 px-6">
      <Reveal>
        <div className="max-w-6xl mx-auto bg-gray-900/50 backdrop-blur rounded-3xl p-10 border border-gray-800">

          <Reveal>
            <h2 className="text-4xl font-bold mb-6 text-center">
              Equipe do Projeto
            </h2>
          </Reveal>

          <Reveal delay={0.2}>
            <p className="text-gray-400 mb-10 text-lg text-center max-w-2xl mx-auto">
              Este projeto foi desenvolvido como parte do curso técnico, com foco
              na aplicação prática de tecnologia para resolver problemas reais no
              ambiente educacional, utilizando automação e sistemas inteligentes.
            </p>
          </Reveal>

          {/* EQUIPE */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">

            {[
              {
                nome: "Seu Nome",
                funcao: "Desenvolvimento do sistema"
              },
              {
                nome: "Nome do Integrante",
                funcao: "Hardware e montagem"
              },
              {
                nome: "Nome do Integrante",
                funcao: "Documentação e testes"
              }
            ].map((membro, i) => (
              <Reveal key={i} delay={i * 0.15}>
                <div className="bg-gray-800 p-6 rounded-2xl text-center hover:-translate-y-2 transition">
                  
                  <h3 className="text-lg font-semibold">
                    {membro.nome}
                  </h3>

                  <p className="text-gray-400 text-sm mt-2">
                    {membro.funcao}
                  </p>

                </div>
              </Reveal>
            ))}

          </div>

          {/* INFO EXTRA */}
          <Reveal delay={0.5}>
            <div className="bg-gray-800 p-6 rounded-2xl text-center">

              <p className="text-gray-300 mb-2">
                Curso Técnico — 2026
              </p>

              <p className="text-gray-400 text-sm">
                Projeto voltado à modernização do controle de presença utilizando RFID.
              </p>

            </div>
          </Reveal>

        </div>
      </Reveal>
    </section>
  );
}