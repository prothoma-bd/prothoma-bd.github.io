import React from 'react';
import { GlassCard } from '../Layout/GlassCard';

interface Project {
    name: string;
    description: string;
    technologies: string[];
    link?: string;
}

interface ProjectsProps {
    projects: Project[];
}

export const Projects: React.FC<ProjectsProps> = ({ projects }) => {
    return (
        <section id="projects" className="py-20 px-4">
            <div className="max-w-7xl mx-auto space-y-16">
                <div className="text-center space-y-4">
                    <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-neon-purple to-cyan-glow inline-block">
                        Featured Projects
                    </h2>
                    <div className="h-1 w-24 mx-auto bg-gradient-to-r from-neon-purple to-cyan-glow rounded-full"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <GlassCard key={index} className="flex flex-col h-full group hover:-translate-y-2 transition-transform duration-300 border-white/5 hover:border-neon-purple/30 hover:shadow-[0_0_30px_rgba(176,38,255,0.1)]">
                            <div className="mb-4">
                                <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-neon-purple transition-colors">{project.name}</h3>
                                <div className="h-0.5 w-12 bg-cyan-glow/50 rounded-full mb-4 group-hover:w-full transition-all duration-500"></div>
                            </div>

                            <p className="text-gray-400 mb-6 flex-grow leading-relaxed text-sm">
                                {project.description}
                            </p>

                            <div className="space-y-6 mt-auto">
                                <div className="flex flex-wrap gap-2">
                                    {project.technologies.map((tech, i) => (
                                        <span key={i} className="px-3 py-1 text-xs font-medium rounded-full bg-white/5 text-cyan-glow border border-white/10">
                                            {tech}
                                        </span>
                                    ))}
                                </div>

                                {project.link && (
                                    <a
                                        href={project.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center text-sm font-bold text-white hover:text-cyan-glow transition-colors uppercase tracking-wider"
                                    >
                                        View Project
                                        <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                        </svg>
                                    </a>
                                )}
                            </div>
                        </GlassCard>
                    ))}
                </div>
            </div>
        </section>
    );
};
