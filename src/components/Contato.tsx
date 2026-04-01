import SectionTitle from "./SectionTitle";
import { contatos } from "../data/contato";

function Contato() {
  return (
    <section id="contato" className="border-t border-white/10 bg-white/[0.02]">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <SectionTitle eyebrow="Contato" title="Vamos nos conectar" />

        <p className="mt-6 max-w-2xl leading-7 text-slate-300">
          Estou construindo projetos para fortalecer meu portfólio e mostrar
          minha atuação como desenvolvedor Full Stack. Você pode me encontrar
          pelas plataformas abaixo.
        </p>

        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {contatos.map((contato) => (
            <a
              key={contato.nome}
              href={contato.url}
              target={contato.url.startsWith("http") ? "_blank" : undefined}
              rel={contato.url.startsWith("http") ? "noreferrer" : undefined}
              className="rounded-2xl border border-white/10 bg-slate-900/70 p-6 transition hover:border-cyan-400/40 hover:bg-slate-900"
            >
              <p className="text-sm text-slate-400">{contato.nome}</p>
              <p className="mt-2 text-lg font-semibold">{contato.descricao}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Contato;
