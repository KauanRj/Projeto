import Reveal from "./Reveal";

export default function Tecnologias() {
  return (
    <section id="tecnologias" className="py-24 px-6 bg-gray-950">

      <div className="max-w-5xl mx-auto text-center">

        <Reveal>
          <h2 className="text-4xl font-bold mb-6">
            Tecnologias Utilizadas
          </h2>
        </Reveal>

        <Reveal delay={0.2}>
          <p className="text-gray-400 mb-12 max-w-2xl mx-auto text-lg">
            O projeto combina hardware e software para criar um sistema completo
            de automação de presença.
          </p>
        </Reveal>

        <div className="grid md:grid-cols-3 gap-6">

          {[
            {
              nome: "Arduino",
              desc: "Responsável pela leitura e envio dos dados do sensor RFID."
            },
            {
              nome: "RFID RC522",
              desc: "Sensor que identifica os cartões por aproximação."
            },
            {
              nome: "React + TypeScript",
              desc: "Interface moderna e interativa do sistema."
            }
          ].map((tech, i) => (
            <Reveal key={i} delay={i * 0.15}>
              <div
                className="bg-gray-900 p-6 rounded-2xl hover:-translate-y-2 transition shadow-lg"
              >
                <h3 className="text-xl font-semibold mb-3">
                  {tech.nome}
                </h3>
                <p className="text-gray-400 text-sm">
                  {tech.desc}
                </p>
              </div>
            </Reveal>
          ))}

        </div>

      </div>
    </section>
  );
}