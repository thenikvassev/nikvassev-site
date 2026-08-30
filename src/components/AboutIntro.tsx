const stats = [
  { value: "7-FIGURE", label: "Tech exit" },
  { value: "$10M+", label: "In sales" },
  { value: "$20M+", label: "Capital raised" },
  { value: "50+", label: "Startups mentored" },
] as const;

export function AboutIntro() {
  return (
    <section id="about" className="nv nv-about" aria-labelledby="about-heading">
      <div className="nv-about-inner">
        <div>
          <p className="nv-eyebrow">Introduction</p>
          <h2 id="about-heading">About Me</h2>
          <p className="nv-about-bio">
            I&apos;m a brand strategist, serial founder and growth marketer. I
            help entrepreneurs build high-impact companies through brand
            strategy, growth marketing and AI systems.
          </p>
        </div>
        <div className="nv-stats">
          {stats.map((stat) => (
            <article key={stat.value} className="nv-stat">
              <strong>{stat.value}</strong>
              <span>{stat.label}</span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
