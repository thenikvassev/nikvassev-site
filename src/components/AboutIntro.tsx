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
            I&apos;m a multi-time exited tech founder and the Co-founder and
            Managing Director of Storyline Pros. In my ten years in B2B I&apos;ve
            built startups that generated tens of millions in revenue, including
            a health tech exit, and I&apos;ve helped hundreds of tech startups as
            a brand strategist and growth marketer. I write for
            Entrepreneur.com, and before that I wrote for Forbes.
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
