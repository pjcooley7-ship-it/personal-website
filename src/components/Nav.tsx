const Nav = () => (
  <nav className="max-w-5xl mx-auto px-6 py-5 flex items-center justify-between">
    <span className="text-2xl font-bold text-ink tracking-tight">PJ Cooley</span>
    <div className="flex items-center gap-5">
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
    </div>
  </nav>
);

export default Nav;
