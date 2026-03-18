import Reveal from "./Reveal";

export default function Sobre() {
  return (
    <section id="sobre" className="py-24 px-6 bg-gray-950">

      <div className="max-w-5xl mx-auto text-center">

        <Reveal>
          <h2 className="text-4xl font-bold mb-6">
            Sobre o Projeto
          </h2>
        </Reveal>

        <Reveal delay={0.2}>
          <p className="text-gray-400 mb-12 max-w-3xl mx-auto text-lg">
            O projeto surgiu a partir da necessidade de modernizar o processo de
            chamada em sala de aula, que muitas vezes consome tempo e está sujeito
            a erros. Utilizando a tecnologia RFID, o sistema permite que cada aluno
            registre sua presença apenas aproximando um cartão do leitor.
          </p>
        </Reveal>

        <div className="grid md:grid-cols-3 gap-6">

          {[
            {
              titulo: "Problema",
              desc: "Chamadas manuais são lentas, tomam tempo de aula e podem gerar erros no registro de presença."
            },
            {
              titulo: "Solução",
              desc: "Um sistema automatizado com RFID que registra presença de forma rápida, prática e confiável."
            },
            {
              titulo: "Impacto",
              desc: "Mais tempo para ensino, menos erros e um ambiente educacional mais moderno."
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

      </div>
    </section>
  );
}