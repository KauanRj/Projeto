import Reveal from "./Reveal";

export default function Demo() {
  return (
    <section id="demo" className="py-24 px-6 bg-gray-950">

      <div className="max-w-4xl mx-auto text-center">

        <Reveal>
          <h2 className="text-4xl font-bold mb-6">
            Demonstração do Sistema
          </h2>
        </Reveal>

        <Reveal delay={0.2}>
          <p className="text-gray-400 mb-12 text-lg">
            Veja como o sistema funciona na prática ao registrar automaticamente
            a presença de um aluno.
          </p>
        </Reveal>

        <Reveal delay={0.3}>
          <div className="bg-gray-900 p-8 rounded-2xl shadow-lg">

            <p className="text-gray-400 mb-4">
              Simulação de leitura RFID:
            </p>

            <Reveal delay={0.4}>
              <div className="bg-gray-800 p-4 rounded-xl text-green-400 font-semibold">
                ✔ Cartão detectado — presença registrada com sucesso
              </div>
            </Reveal>

          </div>
        </Reveal>

      </div>
    </section>
  );
}