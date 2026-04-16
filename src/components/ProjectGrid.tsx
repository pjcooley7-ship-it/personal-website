import { useState } from 'react';
import { projects } from '../data/projects';
import type { Project } from '../data/projects';
import ProjectCard from './ProjectCard';

const categories: Array<Project['category'] | 'All'> = [
  'All', 'Web App', 'AI Tool', 'Automation', 'CLI Tool',
];

const ProjectGrid = () => {
  const [active, setActive] = useState<Project['category'] | 'All'>('All');

  const filtered = active === 'All'
    ? projects
    : projects.filter((p) => p.category === active);

  return (
    <section className="max-w-5xl mx-auto px-6 pb-24">
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-sm font-semibold text-dim uppercase tracking-widest">
          Projects
        </h2>
        <div className="flex gap-1.5 flex-wrap justify-end">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`text-xs font-medium px-3 py-1.5 rounded-full transition-colors ${
                active === cat
                  ? 'bg-accent text-white'
                  : 'bg-white text-muted border border-border hover:border-accent hover:text-accent'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {filtered.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
};

export default ProjectGrid;
