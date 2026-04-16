const Nav = () => (
  <nav className="max-w-5xl mx-auto px-6 pt-5 pb-3">
    <span className="text-2xl font-bold text-ink tracking-tight">PJ Cooley</span>
    <div className="flex gap-5 mt-3">
      <a
        href="https://github.com/pjcooley7-ship-it"
        target="_blank"
        rel="noopener noreferrer"
        className="text-sm text-muted font-medium hover:text-ink transition-colors"
      >
        GitHub
      </a>
      <a
        href="https://linkedin.com/in/pjcooley"
        target="_blank"
        rel="noopener noreferrer"
        className="text-sm text-muted font-medium hover:text-ink transition-colors"
      >
        LinkedIn
      </a>
      <a
        href="https://pjcooley0.substack.com"
        target="_blank"
        rel="noopener noreferrer"
        className="text-sm text-muted font-medium hover:text-ink transition-colors"
      >
        Substack
      </a>
    </div>
  </nav>
);

export default Nav;
