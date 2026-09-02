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
            Nik Vassev is a serial entrepreneur and brand strategist who turns
            startup narratives into category-dominating authority. Across his
            career building and exiting tech ventures, his companies have
            reached nine-figure valuations and closed tens of millions in
            enterprise deals with global institutions and Fortune 500 companies.
            Today, he translates that real-world track record into actionable
            systems for growth marketing, AI visibility and predictable growth
            for innovative startups.
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
