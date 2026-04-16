import type { Projeto } from "../types/projeto";

type ProjectCardProps = {
  projeto: Projeto;
};

function ProjectCard({ projeto }: ProjectCardProps) {
  return (
    <article className="group rounded-3xl border border-white/10 bg-white/5 p-6 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/40 hover:bg-white/10">
      <div className="mb-5 flex h-44 items-center justify-center rounded-2xl border border-white/10 bg-gradient-to-br from-cyan-500/10 to-slate-800">
        <span className="text-sm uppercase tracking-[0.25em] text-slate-400 group-hover:text-cyan-300">
          Projeto
        </span>
      </div>

      <h3 className="text-xl font-semibold">{projeto.titulo}</h3>

      <p className="mt-4 leading-7 text-slate-300">{projeto.descricao}</p>

      <div className="mt-5 flex flex-wrap gap-2">
        {projeto.techs.map((tech) => (
          <span
            key={tech}
            className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 text-xs font-medium text-cyan-300"
          >
            {tech}
          </span>
        ))}
      </div>

      <div className="mt-6 flex gap-3">
        <a
          href={projeto.github}
          target="_blank"
          rel="noreferrer"
          className="rounded-lg bg-cyan-500 px-4 py-2 text-sm font-semibold text-slate-950 transition hover:bg-cyan-400"
        >
          GitHub
        </a>
        {/* <a
          href={projeto.demo}
          target="_blank"
          rel="noreferrer"
          className="rounded-lg border border-white/15 px-4 py-2 text-sm font-semibold transition hover:border-cyan-400 hover:text-cyan-400"
        >
          Demo
        </a> */}
      </div>
    </article>
  );
}

export default ProjectCard;
