import { sobreData } from "../data/sobre";

function Sobre() {
  return (
    <section id="sobre" className="mx-auto max-w-6xl px-6 py-20">
      <div className="grid gap-10 lg:grid-cols-[1fr_1.2fr]">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-400">
            Sobre mim
          </p>
          <h2 className="mt-4 text-3xl font-bold sm:text-4xl">
            {sobreData.titulo}
          </h2>
        </div>

        <div className="space-y-5 text-slate-300 leading-8">
          {sobreData.textos.map((texto, index) => (
            <p key={index}>{texto}</p>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Sobre;
