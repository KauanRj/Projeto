import { useState } from "react";
import { motion } from "framer-motion";
import Reveal from "./Reveal";

export default function Demo() {
  const [status, setStatus] = useState<"idle" | "loading" | "success">("idle");

  const [aluno, setAluno] = useState({
    nome: "",
    hora: "",
    situacao: "",
  });

  const [matricula, setMatricula] = useState("");

  const bancoAlunos: Record<string, string> = {
    "1234": "João Silva",
    "5678": "Maria Souza",
    "9999": "Pedro Lima",
  };

  // RFID
  const simularLeitura = () => {
    setStatus("loading");

    setTimeout(() => {
      setAluno({
        nome: "João Silva",
        hora: "07:10",
        situacao: "Presente",
      });

      setStatus("success");
    }, 1500);
  };

  // KEYPAD
  const enviarMatricula = () => {
    if (!matricula) return;

    setStatus("loading");

    setTimeout(() => {
      const nome = bancoAlunos[matricula];

      if (!nome) {
        setAluno({
          nome: "Não encontrado",
          hora: "--:--",
          situacao: "Inválido",
        });
        setStatus("success");
        return;
      }

      setAluno({
        nome,
        hora: "07:15",
        situacao: "Presente",
      });

      setStatus("success");
      setMatricula("");
    }, 1200);
  };

  // RESET
  const resetarSimulacao = () => {
    setStatus("idle");
    setAluno({
      nome: "",
      hora: "",
      situacao: "",
    });
    setMatricula("");
  };

  return (
    <section id="demo" className="py-24 px-6">
      <Reveal>
        <div className="max-w-6xl mx-auto bg-gray-900/50 backdrop-blur rounded-3xl p-10 border border-gray-800">

          <Reveal>
            <h2 className="text-4xl font-bold mb-6 text-center">
              Demonstração do Sistema
            </h2>
          </Reveal>

          <Reveal delay={0.2}>
            <p className="text-gray-400 mb-12 text-lg text-center">
              Simule o funcionamento do sistema utilizando leitura por RFID ou entrada manual via teclado.
            </p>
          </Reveal>

          <Reveal delay={0.3}>
            <div className="bg-gray-900 p-8 rounded-2xl shadow-lg">

              <div className="grid md:grid-cols-2 gap-6">

                {/* RFID */}
                <div className="text-center">
                  <p className="text-gray-400 mb-4">
                    Leitura RFID
                  </p>

                  <button
                    onClick={simularLeitura}
                    className="bg-blue-500 px-6 py-3 rounded-xl hover:bg-blue-600 hover:scale-105 transition shadow-lg shadow-blue-500/20"
                  >
                    Simular cartão
                  </button>
                </div>

                {/* KEYPAD */}
                <div className="text-center">
                  <p className="text-gray-400 mb-4">
                    Entrada manual (Keypad)
                  </p>

                  <div className="flex gap-2 justify-center">
                    <input
                      value={matricula}
                      onChange={(e) => setMatricula(e.target.value)}
                      placeholder="Digite a matrícula"
                      className="bg-gray-800 px-4 py-2 rounded-lg text-white outline-none border border-gray-700 focus:border-blue-500"
                    />

                    <button
                      onClick={enviarMatricula}
                      className="bg-green-500 px-4 py-2 rounded-lg hover:bg-green-600 transition"
                    >
                      Enviar
                    </button>
                  </div>
                </div>

              </div>

              {/* STATUS */}
              <div className="mt-8 text-center">

                {status === "loading" && (
                  <p className="text-yellow-400 animate-pulse">
                    Processando dados...
                  </p>
                )}

                {status === "success" && (
                  <>
                    <div
                      className={`p-4 rounded-xl font-semibold space-y-2 ${
                        aluno.situacao === "Inválido"
                          ? "bg-gray-800 text-red-400"
                          : "bg-gray-800 text-green-400"
                      }`}
                    >
                      <p>
                        {aluno.situacao === "Inválido"
                          ? "✖ Matrícula não encontrada"
                          : "✔ Registro realizado"}
                      </p>
                      <p>Aluno: {aluno.nome}</p>
                      <p>Horário: {aluno.hora}</p>
                      <p>Status: {aluno.situacao}</p>
                    </div>

                    {/* BOTÃO RESET PREMIUM */}
                    <motion.button
                      onClick={resetarSimulacao}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="mt-4 inline-flex items-center gap-2 bg-gray-700 px-4 py-2 rounded-lg hover:bg-gray-600 transition"
                    >
                      🔄 Reiniciar Simulação
                    </motion.button>
                  </>
                )}

              </div>

            </div>
          </Reveal>

          {/* DASHBOARD */}
          <Reveal delay={0.5}>
            <div className="mt-12">

              <h3 className="text-2xl font-semibold mb-6 text-center">
                Registro de Presença (Hoje)
              </h3>

              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">

                  <thead>
                    <tr className="text-gray-400 border-b border-gray-700">
                      <th className="p-3">Aluno</th>
                      <th className="p-3">Status</th>
                      <th className="p-3">Horário</th>
                    </tr>
                  </thead>

                  <tbody>

                    <tr className="border-b border-gray-800">
                      <td className="p-3">Maria Souza</td>
                      <td className="p-3 text-yellow-400">Atrasado</td>
                      <td className="p-3">08:05</td>
                    </tr>

                    <tr className="border-b border-gray-800">
                      <td className="p-3">Pedro Lima</td>
                      <td className="p-3 text-red-400">Falta</td>
                      <td className="p-3">—</td>
                    </tr>

                    {status === "success" && aluno.situacao !== "Inválido" && (
                      <tr className="border-b border-gray-800">
                        <td className="p-3">{aluno.nome}</td>
                        <td className="p-3 text-green-400">{aluno.situacao}</td>
                        <td className="p-3">{aluno.hora}</td>
                      </tr>
                    )}

                  </tbody>

                </table>
              </div>

            </div>
          </Reveal>

        </div>
      </Reveal>
    </section>
  );
}