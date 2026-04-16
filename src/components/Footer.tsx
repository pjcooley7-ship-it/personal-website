const Footer = () => (
  <footer className="border-t border-border">
    <div className="max-w-5xl mx-auto px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
      <p className="text-sm text-dim">
        Built with React + Vite + Tailwind · Deployed on Vercel
      </p>
      <div className="flex items-center gap-6">
        <a
          href="https://github.com/pjcooley7-ship-it"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-muted hover:text-ink transition-colors"
        >
          GitHub
        </a>
        <a
          href="https://linkedin.com/in/pjcooley"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-muted hover:text-ink transition-colors"
        >
          LinkedIn
        </a>
      </div>
    </div>
  </footer>
);

export default Footer;
