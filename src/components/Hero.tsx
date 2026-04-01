import { heroData } from "../data/hero";

function Hero() {
  return (
    <section
      id="inicio"
      className="relative overflow-hidden border-b border-white/10"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(34,211,238,0.12),transparent_35%)]" />

      <div className="relative mx-auto grid min-h-[92vh] max-w-6xl items-center gap-12 px-6 py-20 lg:grid-cols-2">
        <div>
          <span className="inline-block rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
            {heroData.badge}
          </span>

          <h1 className="mt-6 text-4xl font-bold leading-tight sm:text-5xl md:text-6xl">
            {heroData.titulo}{" "}
            <span className="text-cyan-400">{heroData.destaque}</span>
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            {heroData.descricao}
          </p>

          <p className="mt-4 max-w-2xl text-base leading-7 text-slate-400">
            {heroData.descricaoSecundaria}
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#projetos"
              className="rounded-xl bg-cyan-500 px-6 py-3 font-semibold text-slate-950 transition hover:scale-[1.02] hover:bg-cyan-400"
            >
              Ver projetos
            </a>

            <a
              href="#contato"
              className="rounded-xl border border-white/15 px-6 py-3 font-semibold transition hover:border-cyan-400 hover:text-cyan-400"
            >
              Entrar em contato
            </a>
          </div>

          <div className="mt-10 flex flex-wrap gap-3">
            {heroData.techs.map((item) => (
              <span
                key={item}
                className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-200"
              >
                {item}
              </span>
            ))}
          </div>
        </div>

        {/* mantém a parte direita igual */}
      </div>
    </section>
  );
}

export default Hero;
