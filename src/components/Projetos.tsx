import SectionTitle from "./SectionTitle";
import ProjectCard from "./ProjectCard";
import { projetos } from "../data/projetos";

function Projetos() {
  return (
    <section id="projetos" className="mx-auto max-w-6xl px-6 py-20">
      <SectionTitle eyebrow="Projetos" title="Alguns trabalhos em destaque" />

      <div className="mt-10 grid gap-6 lg:grid-cols-3">
        {projetos.map((projeto) => (
          <ProjectCard key={projeto.titulo} projeto={projeto} />
        ))}
      </div>
    </section>
  );
}

export default Projetos;
