import Reveal from "./Reveal";

export default function Funcionamento() {
  return (
    <section id="funcionamento" className="py-24 px-6">
      <Reveal>
        <div className="max-w-6xl mx-auto bg-gray-900/50 backdrop-blur rounded-3xl p-10 border border-gray-800">

          <Reveal>
            <h2 className="text-4xl font-bold mb-6 text-center">
              Como o Sistema Funciona
            </h2>
          </Reveal>

          <Reveal delay={0.2}>
            <p className="text-gray-400 mb-12 max-w-2xl mx-auto text-lg text-center">
              O sistema utiliza tecnologia RFID (Identificação por Rádio Frequência)
              para registrar automaticamente a presença dos alunos, eliminando a necessidade
              de chamadas manuais e tornando o processo mais rápido e confiável.
            </p>
          </Reveal>

          {/* PASSOS */}
          <div className="grid md:grid-cols-4 gap-6">

            {[
              {
                titulo: "Cartão RFID",
                desc: "Cada aluno recebe um cartão único, contendo um identificador exclusivo vinculado ao sistema."
              },
              {
                titulo: "Leitura",
                desc: "Ao aproximar o cartão do sensor RC522, a leitura é realizada de forma instantânea e sem contato físico."
              },
              {
                titulo: "Processamento",
                desc: "Os dados capturados são enviados para o sistema, onde são validados e associados ao aluno correspondente."
              },
              {
                titulo: "Registro",
                desc: "A presença é registrada automaticamente com data e horário, ficando disponível para consulta e análise."
              }
            ].map((item, i) => (
              <Reveal key={i} delay={i * 0.15}>
                <div className="bg-gray-800 p-6 rounded-2xl hover:-translate-y-2 hover:shadow-lg transition">
                  <h3 className="text-xl font-semibold mb-3">
                    {item.titulo}
                  </h3>
                  <p className="text-gray-400 text-sm">
                    {item.desc}
                  </p>
                </div>
              </Reveal>
            ))}

          </div>

          {/* NOVA PARTE */}
          <Reveal delay={0.5}>
            <div className="mt-16 text-center">

              <h3 className="text-2xl font-semibold mb-4">
                Vantagens do Processo
              </h3>

              <p className="text-gray-400 max-w-2xl mx-auto mb-8">
                O funcionamento automatizado do sistema garante maior eficiência e reduz
                significativamente problemas comuns no controle de presença tradicional.
              </p>

              <div className="grid md:grid-cols-3 gap-6">

                {[
                  "Registro em poucos segundos",
                  "Eliminação de erros manuais",
                  "Armazenamento automático dos dados",
                  "Maior organização das informações",
                  "Facilidade na consulta de presença",
                  "Escalável para diferentes ambientes"
                ].map((item, i) => (
                  <Reveal key={i} delay={i * 0.1}>
                    <div className="bg-gray-800 p-4 rounded-xl text-gray-300 text-sm hover:scale-105 transition">
                      {item}
                    </div>
                  </Reveal>
                ))}

              </div>

            </div>
          </Reveal>

        </div>
      </Reveal>
    </section>
  );
}