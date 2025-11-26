import React from 'react';
import { GlassCard } from '../Layout/GlassCard';

interface ExperienceItem {
    company: string;
    role: string;
    duration: string;
    description: string;
}

interface ExperienceProps {
    experience: ExperienceItem[];
}

export const Experience: React.FC<ExperienceProps> = ({ experience }) => {
    return (
        <section id="experience" className="py-20 px-4">
            <div className="max-w-4xl mx-auto space-y-16">
                <div className="text-center space-y-4">
                    <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-neon-purple to-cyan-glow inline-block">
                        Professional Journey
                    </h2>
                    <div className="h-1 w-24 mx-auto bg-gradient-to-r from-neon-purple to-cyan-glow rounded-full"></div>
                </div>

                <div className="relative border-l-2 border-white/10 ml-4 md:ml-12 space-y-12 pb-12">
                    {experience.map((exp, index) => (
                        <div key={index} className="relative pl-8 md:pl-12 group">
                            {/* Timeline Dot */}
                            <div className="absolute top-6 left-[-9px] w-4 h-4 rounded-full bg-deep-space border-2 border-cyan-glow shadow-[0_0_10px_rgba(0,243,255,0.5)] group-hover:bg-cyan-glow transition-colors duration-300"></div>

                            <GlassCard className="border-white/5 hover:border-cyan-glow/30 transition-all duration-300 hover:bg-white/10 hover:-translate-y-1">
                                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 gap-2">
                                    <div>
                                        <h3 className="text-xl font-bold text-white group-hover:text-cyan-glow transition-colors">{exp.role}</h3>
                                        <p className="text-neon-purple font-medium text-lg">{exp.company}</p>
                                    </div>
                                    <span className="px-4 py-1.5 rounded-full bg-white/5 text-xs font-bold text-gray-300 border border-white/10 whitespace-nowrap shadow-inner">
                                        {exp.duration}
                                    </span>
                                </div>
                                <p className="text-gray-400 text-sm leading-relaxed border-l-2 border-white/5 pl-4">
                                    {exp.description}
                                </p>
                            </GlassCard>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
