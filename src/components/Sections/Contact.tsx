import React from 'react';
import { GlassCard } from '../Layout/GlassCard';

interface ContactProps {
    email: string;
    phone: string;
    location: string;
}

export const Contact: React.FC<ContactProps> = ({ email, phone, location }) => {
    return (
        <section id="contact" className="py-20 px-4">
            <GlassCard className="max-w-4xl mx-auto text-center space-y-8 py-16 border-neon-purple/30 bg-gradient-to-b from-white/5 to-neon-purple/5">
                <h2 className="text-4xl font-bold text-white">Ready to Collaborate?</h2>
                <p className="text-gray-300 max-w-xl mx-auto text-lg">
                    I'm currently open to new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
                </p>

                <div className="flex flex-col md:flex-row justify-center items-center gap-8 pt-8">
                    <a href={`mailto:${email}`} className="btn-primary text-lg px-10 py-4 shadow-[0_0_20px_rgba(176,38,255,0.3)] hover:shadow-[0_0_30px_rgba(176,38,255,0.5)] transition-shadow">
                        Say Hello
                    </a>

                    <div className="flex flex-col items-center md:items-start gap-3 text-gray-400 bg-black/20 p-6 rounded-xl border border-white/5">
                        <div className="flex items-center gap-3">
                            <span className="text-cyan-glow text-xl">📍</span>
                            <span>{location}</span>
                        </div>
                        <div className="flex items-center gap-3">
                            <span className="text-cyan-glow text-xl">📱</span>
                            <span>{phone}</span>
                        </div>
                        <div className="flex items-center gap-3">
                            <span className="text-cyan-glow text-xl">✉️</span>
                            <span>{email}</span>
                        </div>
                    </div>
                </div>
            </GlassCard>
        </section>
    );
};
