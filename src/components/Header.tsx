function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a
          href="#inicio"
          className="text-lg font-bold tracking-wide text-cyan-400"
        >
          Cassio Carielo
        </a>

        <nav className="hidden gap-6 text-sm md:flex">
          <a href="#inicio" className="transition hover:text-cyan-400">
            Início
          </a>
          <a href="#sobre" className="transition hover:text-cyan-400">
            Sobre
          </a>
          <a href="#tecnologias" className="transition hover:text-cyan-400">
            Tecnologias
          </a>
          <a href="#projetos" className="transition hover:text-cyan-400">
            Projetos
          </a>
          <a href="#contato" className="transition hover:text-cyan-400">
            Contato
          </a>
        </nav>
      </div>
    </header>
  );
}

export default Header;
