import React from 'react';
import { GlassCard } from '../Layout/GlassCard';

interface EducationItem {
    institution: string;
    degree: string;
    year: string;
}

interface EducationProps {
    education: EducationItem[];
}

export const Education: React.FC<EducationProps> = ({ education }) => {
    return (
        <section id="education" className="py-20 px-4">
            <div className="max-w-4xl mx-auto space-y-16">
                <div className="text-center space-y-4">
                    <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-neon-purple to-cyan-glow inline-block">
                        Education
                    </h2>
                    <div className="h-1 w-24 mx-auto bg-gradient-to-r from-neon-purple to-cyan-glow rounded-full"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {education.map((edu, index) => (
                        <GlassCard key={index} className="border-l-4 border-l-neon-purple hover:bg-white/10 transition-colors border-t-0 border-r-0 border-b-0 rounded-l-none">
                            <h3 className="text-xl font-bold text-white mb-2">{edu.institution}</h3>
                            <p className="text-cyan-glow font-medium mb-1">{edu.degree}</p>
                            <p className="text-gray-400 text-sm">{edu.year}</p>
                        </GlassCard>
                    ))}
                </div>
            </div>
        </section>
    );
};
