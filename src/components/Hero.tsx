const Hero = () => (
  <section className="max-w-5xl mx-auto px-6 pt-16 pb-20">
    <div className="badge mb-6">
      <span>✦</span> CPA × AI Builder
    </div>
    <h1 className="text-4xl sm:text-5xl font-bold text-ink leading-tight tracking-tight max-w-2xl mb-6">
      Building small things<br />to solve real problems.
    </h1>
    <p className="text-lg text-muted leading-relaxed max-w-xl">
      I'm a CPA and revenue operations leader at{' '}
      <span className="text-ink font-medium">Wolt</span>, based in Zurich. By day I build
      AI tools that automate the slow parts of finance — close monitoring, flux commentary,
      monthly reporting. Outside work, I'm tackling a different list: the everyday
      frictions that pile up as a new parent and expat — tracking returns across six
      countries, planning group travel, stripping food blogs down to just the recipe.
    </p>
    <p className="text-base text-dim mt-4 max-w-xl">
      I set a goal to ship 12 apps in 2026 using AI as a collaborator, not a shortcut —
      and I'm writing honestly about the process on my{' '}
      <a
        href="https://pjcooley0.substack.com"
        target="_blank"
        rel="noopener noreferrer"
        className="text-accent hover:text-accent-dark underline underline-offset-2 transition-colors"
      >
        Substack
      </a>
      .
    </p>
  </section>
);

export default Hero;
