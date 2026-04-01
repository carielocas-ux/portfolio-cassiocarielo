type SectionTitleProps = {
  eyebrow: string;
  title: string;
};

function SectionTitle({ eyebrow, title }: SectionTitleProps) {
  return (
    <>
      <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-400">
        {eyebrow}
      </p>
      <h2 className="mt-4 text-3xl font-bold sm:text-4xl">{title}</h2>
    </>
  );
}

export default SectionTitle;
