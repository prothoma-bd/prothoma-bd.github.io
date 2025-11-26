import React from 'react';
import { GlassCard } from '../Layout/GlassCard';

interface HeroProps {
    name: string;
    title: string;
    summary: string;
    email: string;
    image?: string;
}

export const Hero: React.FC<HeroProps> = ({ name, title, summary, email, image }) => {
    return (
        <section className="relative min-h-[90vh] flex items-center justify-center py-20 px-4">
            <GlassCard className="max-w-6xl w-full flex flex-col md:flex-row items-center gap-12 relative overflow-hidden border-white/5 bg-white/5 backdrop-blur-xl">
                {/* Decorative elements */}
                <div className="absolute top-0 right-0 w-96 h-96 bg-neon-purple/20 blur-[100px] rounded-full -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-cyan-glow/10 blur-[80px] rounded-full translate-y-1/2 -translate-x-1/2 pointer-events-none"></div>

                <div className="relative z-10 flex-1 text-center md:text-left space-y-8">
                    <div className="space-y-4">
                        <div className="inline-block px-4 py-1 rounded-full border border-cyan-glow/30 bg-cyan-glow/10 backdrop-blur-sm">
                            <span className="text-cyan-glow font-mono tracking-widest text-sm uppercase font-bold">{title}</span>
                        </div>
                        <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tight leading-tight">
                            {name.split(' ')[0]} <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-purple to-cyan-glow">
                                {name.split(' ').slice(1).join(' ')}
                            </span>
                        </h1>
                    </div>

                    <p className="text-gray-300 text-lg leading-relaxed max-w-xl mx-auto md:mx-0 border-l-2 border-neon-purple/50 pl-6">
                        {summary}
                    </p>

                    <div className="flex flex-wrap gap-6 justify-center md:justify-start pt-4">
                        <a href={`mailto:${email}`} className="btn-primary group relative overflow-hidden">
                            <span className="relative z-10">Get in Touch</span>
                            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                        </a>
                        <a href="#projects" className="px-8 py-3 rounded-full border border-white/20 hover:bg-white/10 hover:border-white/40 transition-all text-white font-medium backdrop-blur-sm">
                            View Portfolio
                        </a>
                    </div>
                </div>

                {image && (
                    <div className="relative z-10 w-72 h-72 md:w-96 md:h-96 shrink-0 group">
                        <div className="absolute inset-0 bg-gradient-to-tr from-neon-purple to-cyan-glow rounded-full blur-2xl opacity-40 group-hover:opacity-60 transition-opacity duration-500 animate-pulse-slow"></div>
                        <div className="relative w-full h-full rounded-full p-1 bg-gradient-to-tr from-white/20 to-white/5 overflow-hidden">
                            <img
                                src={image}
                                alt={name}
                                className="w-full h-full object-cover rounded-full border-4 border-deep-space shadow-2xl transition-all duration-500"
                            />
                        </div>
                    </div>
                )}
            </GlassCard>
        </section>
    );
};
