import Reveal from "./Reveal";

export default function Funcionamento() {
  return (
    <section id="funcionamento" className="py-24 px-6 bg-gray-900">

      <div className="max-w-6xl mx-auto text-center">

        <Reveal>
          <h2 className="text-4xl font-bold mb-6">
            Como o Sistema Funciona
          </h2>
        </Reveal>

        <Reveal delay={0.2}>
          <p className="text-gray-400 mb-12 max-w-2xl mx-auto text-lg">
            O processo de registro de presença acontece de forma automática,
            rápida e eficiente, utilizando tecnologia de identificação por rádio frequência.
          </p>
        </Reveal>

        <div className="grid md:grid-cols-4 gap-6">

          {[
            {
              titulo: "Cartão RFID",
              desc: "Cada aluno possui um cartão único vinculado ao sistema."
            },
            {
              titulo: "Leitura",
              desc: "O sensor identifica o cartão ao aproximar do leitor."
            },
            {
              titulo: "Processamento",
              desc: "Os dados são enviados e processados automaticamente."
            },
            {
              titulo: "Registro",
              desc: "A presença é confirmada e armazenada no sistema."
            }
          ].map((item, i) => (
            <Reveal key={i} delay={i * 0.15}>
              <div
                className="bg-gray-800 p-6 rounded-2xl hover:-translate-y-2 hover:shadow-lg transition"
              >
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

      </div>
    </section>
  );
}