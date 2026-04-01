import TechCard from "./TechCard";
import SectionTitle from "./SectionTitle";
import { tecnologias } from "../data/tecnologias";

function Tecnologias() {
  return (
    <section
      id="tecnologias"
      className="border-t border-white/10 bg-white/[0.02]"
    >
      <div className="mx-auto max-w-6xl px-6 py-20">
        <SectionTitle
          eyebrow="Tecnologias"
          title="Ferramentas e stacks que utilizo"
        />

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {tecnologias.map((tech) => (
            <TechCard key={tech} nome={tech} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Tecnologias;
