import Reveal from "./Reveal";

export default function Sobre() {
  return (
    <section id="sobre" className="py-24 px-6">
      <Reveal>
        <div className="max-w-6xl mx-auto bg-gray-900/50 backdrop-blur rounded-3xl p-10 border border-gray-800">

          <Reveal>
            <h2 className="text-4xl font-bold mb-6 text-center">
              Sobre o Projeto
            </h2>
          </Reveal>

          <Reveal delay={0.2}>
            <p className="text-gray-400 mb-8 max-w-3xl mx-auto text-lg text-center">
              Este projeto foi desenvolvido com o objetivo de modernizar o controle
              de presença em ambientes educacionais. O método tradicional de chamada
              manual, além de consumir tempo de aula, está sujeito a erros e falta de organização.
            </p>
          </Reveal>

          <Reveal delay={0.3}>
            <p className="text-gray-400 mb-12 max-w-3xl mx-auto text-lg text-center">
              Utilizando a tecnologia RFID, o sistema permite que cada aluno registre
              sua presença de forma automática, apenas aproximando um cartão do leitor,
              garantindo rapidez, precisão e melhor gestão das informações.
            </p>
          </Reveal>

          {/* CARDS */}
          <div className="grid md:grid-cols-3 gap-6">

            {[
              {
                titulo: "Problema",
                desc: "O processo tradicional de chamada é lento, consome tempo de aula e pode gerar falhas no registro, impactando diretamente a organização e o controle de presença."
              },
              {
                titulo: "Solução",
                desc: "O sistema RFID automatiza completamente o processo, permitindo que a presença seja registrada em segundos, sem necessidade de intervenção manual."
              },
              {
                titulo: "Impacto",
                desc: "Com a automação, há redução de erros, ganho de tempo para ensino e maior organização dos dados, tornando o ambiente mais eficiente e tecnológico."
              }
            ].map((item, i) => (
              <Reveal key={i} delay={i * 0.15}>
                <div className="bg-gray-900 p-6 rounded-2xl hover:-translate-y-2 transition shadow-lg">
                  <h3 className="text-xl font-semibold mb-3">{item.titulo}</h3>
                  <p className="text-gray-400 text-sm">{item.desc}</p>
                </div>
              </Reveal>
            ))}

          </div>

          {/* NOVA PARTE */}
          <Reveal delay={0.5}>
            <div className="mt-16 text-center">

              <h3 className="text-2xl font-semibold mb-4">
                Onde pode ser aplicado
              </h3>

              <p className="text-gray-400 max-w-2xl mx-auto mb-6">
                Embora o foco inicial seja o ambiente escolar, o sistema pode ser
                adaptado para diversas situações que exigem controle de presença
                ou acesso.
              </p>

              <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-300">
                <span className="bg-gray-800 px-4 py-2 rounded-lg">Escolas</span>
                <span className="bg-gray-800 px-4 py-2 rounded-lg">Faculdades</span>
                <span className="bg-gray-800 px-4 py-2 rounded-lg">Empresas</span>
                <span className="bg-gray-800 px-4 py-2 rounded-lg">Eventos</span>
              </div>

            </div>
          </Reveal>

        </div>
      </Reveal>
    </section>
  );
}