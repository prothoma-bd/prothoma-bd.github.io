import React from 'react';
import { GlassCard } from '../Layout/GlassCard';

interface SkillsProps {
    skills: string[];
}

export const Skills: React.FC<SkillsProps> = ({ skills }) => {
    return (
        <section id="skills" className="py-20 px-4 relative">
            <div className="max-w-6xl mx-auto space-y-16">
                <div className="text-center space-y-4 relative z-10">
                    <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-neon-purple to-cyan-glow inline-block">
                        Technical Arsenal
                    </h2>
                    <div className="h-1 w-24 mx-auto bg-gradient-to-r from-neon-purple to-cyan-glow rounded-full"></div>
                    <p className="text-gray-400 max-w-2xl mx-auto text-lg">
                        Tools and technologies I leverage to ensure quality and reliability.
                    </p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 relative z-10">
                    {skills.map((skill, index) => (
                        <GlassCard
                            key={index}
                            className="flex items-center justify-center p-6 text-center hover:bg-white/10 transition-all duration-300 group cursor-default border-white/5 hover:border-cyan-glow/30 hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(0,243,255,0.1)]"
                        >
                            <span className="text-gray-300 font-medium group-hover:text-cyan-glow transition-colors tracking-wide">
                                {skill}
                            </span>
                        </GlassCard>
                    ))}
                </div>
            </div>
        </section>
    );
};
