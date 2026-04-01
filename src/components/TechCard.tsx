type TechCardProps = {
  nome: string;
};

function TechCard({ nome }: TechCardProps) {
  return (
    <div className="rounded-2xl border border-white/10 bg-slate-900/70 p-5 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/40 hover:shadow-lg hover:shadow-cyan-950/20">
      <p className="text-lg font-semibold">{nome}</p>
    </div>
  );
}

export default TechCard;
