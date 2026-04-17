import type { Project } from '../data/projects';

const categoryColor: Record<Project['category'], string> = {
  'Web App': 'bg-blue-50 text-blue-600',
  'AI Tool': 'bg-purple-50 text-purple-600',
  'Automation': 'bg-amber-50 text-amber-700',
  'CLI Tool': 'bg-stone-100 text-stone-600',
};

const statusLabel: Record<NonNullable<Project['status']>, string> = {
  live: 'Live',
  'in-progress': 'In Progress',
  planning: 'Planning',
};

const statusColor: Record<NonNullable<Project['status']>, string> = {
  live: 'bg-green-50 text-green-700',
  'in-progress': 'bg-amber-50 text-amber-700',
  planning: 'bg-stone-100 text-stone-500',
};

const LinkButton = ({ link, title }: { link: Project['link']; title: string }) => {
  if (link.type === 'live') {
    return (
      <a
        href={link.url}
        target="_blank"
        rel="noopener noreferrer"
        className="btn-primary text-xs py-1.5 px-3"
        aria-label={`Open ${title}`}
      >
        View Live
        <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
          <path d="M2.5 9.5L9.5 2.5M9.5 2.5H4.5M9.5 2.5V7.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </a>
    );
  }
  if (link.type === 'github') {
    if (link.private) {
      return (
        <span className="inline-flex items-center gap-1.5 text-dim text-xs font-medium select-none">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
            <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
          </svg>
          Private repo
        </span>
      );
    }
    return (
      <a
        href={link.url}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-1.5 text-muted hover:text-ink text-xs font-medium transition-colors"
        aria-label={`View ${title} on GitHub`}
      >
        <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
        </svg>
        GitHub
        <svg width="10" height="10" viewBox="0 0 12 12" fill="none">
          <path d="M2.5 9.5L9.5 2.5M9.5 2.5H4.5M9.5 2.5V7.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </a>
    );
  }
  return null;
};

const ProjectCard = ({ project }: { project: Project }) => (
  <article className="project-card flex flex-col">
    <div className="flex items-start justify-between gap-3 mb-4">
      <div className="flex items-center gap-2 flex-wrap">
        <span className={`text-xs font-semibold px-2.5 py-0.5 rounded-full ${categoryColor[project.category]}`}>
          {project.category}
        </span>
        {project.status && (
          <span className={`text-xs font-medium px-2.5 py-0.5 rounded-full ${statusColor[project.status]}`}>
            {statusLabel[project.status]}
          </span>
        )}
      </div>
    </div>

    <h3 className="text-lg font-bold text-ink mb-1 tracking-tight">{project.title}</h3>
    <p className="text-sm font-medium text-accent mb-3">{project.tagline}</p>
    <p className="text-sm text-muted leading-relaxed flex-1 mb-5">{project.description}</p>

    <div className="flex items-center justify-between gap-3 mt-auto pt-4 border-t border-border">
      <div className="flex flex-wrap gap-1.5">
        {project.stack.slice(0, 3).map((tech) => (
          <span key={tech} className="tag">{tech}</span>
        ))}
        {project.stack.length > 3 && (
          <span className="tag" title={project.stack.slice(3).join(', ')}>
            +{project.stack.length - 3}
          </span>
        )}
      </div>
      <LinkButton link={project.link} title={project.title} />
    </div>
  </article>
);

export default ProjectCard;
