import Reveal from "./Reveal";

export default function Tecnologias() {
  return (
    <section id="tecnologias" className="py-24 px-6">
      
      <Reveal>
        <div className="max-w-6xl mx-auto bg-gray-900/50 backdrop-blur rounded-3xl p-10 border border-gray-800">

          <Reveal>
            <h2 className="text-4xl font-bold mb-6 text-center">
              Tecnologias Utilizadas
            </h2>
          </Reveal>

          <Reveal delay={0.2}>
            <p className="text-gray-400 mb-12 max-w-2xl mx-auto text-lg text-center">
              O sistema integra diferentes componentes de hardware e software
              para realizar o controle de presença de forma automatizada,
              segura e eficiente.
            </p>
          </Reveal>

          {/* HARDWARE */}
          <Reveal delay={0.3}>
            <h3 className="text-2xl font-semibold mb-6 text-center">
              Hardware
            </h3>
          </Reveal>

          <div className="grid md:grid-cols-3 gap-6 mb-12">

            {[
              {
                nome: "Arduino UNO / ESP32",
                desc: "Responsável por controlar todo o sistema. Realiza a leitura dos sensores e pode enviar os dados via Wi-Fi (no caso do ESP32)."
              },
              {
                nome: "RFID RC522",
                desc: "Leitor responsável por identificar os cartões dos alunos por radiofrequência, sem necessidade de contato físico."
              },
              {
                nome: "Display OLED / LCD",
                desc: "Utilizado para exibir mensagens em tempo real, como confirmação de presença ou erros de leitura."
              },
              {
                nome: "RTC DS3231",
                desc: "Módulo de relógio em tempo real que garante precisão na data e horário do registro de presença."
              },
              {
                nome: "Keypad Matricial",
                desc: "Permite a entrada manual de dados, como matrícula do aluno, funcionando como alternativa ao RFID."
              },
              {
                nome: "Módulo SD / Wi-Fi",
                desc: "Responsável por armazenar os registros localmente ou enviar os dados para um sistema online."
              },
              {
                nome: "Power Bank",
                desc: "Fonte de energia portátil que garante autonomia e mobilidade para o sistema."
              },
              {
                nome: "Jumpers e Resistores",
                desc: "Componentes essenciais para conexão e funcionamento correto do circuito eletrônico."
              }
            ].map((tech, i) => (
              <Reveal key={i} delay={i * 0.1}>
                <div className="bg-gray-900 p-6 rounded-2xl hover:-translate-y-2 transition shadow-lg">
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

          {/* SOFTWARE */}
          <Reveal delay={0.5}>
            <h3 className="text-2xl font-semibold mb-6 text-center">
              Software
            </h3>
          </Reveal>

          <div className="grid md:grid-cols-3 gap-6">

            {[
              {
                nome: "React",
                desc: "Responsável pela interface do sistema, permitindo visualização dos dados de forma clara e interativa."
              },
              {
                nome: "TypeScript",
                desc: "Garante maior organização e segurança no desenvolvimento do código da aplicação."
              },
              {
                nome: "Banco de Dados",
                desc: "Utilizado para armazenar os registros de presença, podendo ser local (SD) ou online (servidor/planilha)."
              }
            ].map((tech, i) => (
              <Reveal key={i} delay={i * 0.15}>
                <div className="bg-gray-900 p-6 rounded-2xl hover:-translate-y-2 transition shadow-lg">
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
      </Reveal>
    </section>
  );
}