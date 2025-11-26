import React from 'react';

export const Background: React.FC = () => {
    return (
        <div className="fixed inset-0 -z-10 bg-gradient-to-br from-deep-space via-deep-space-mid to-deep-space-end overflow-hidden">
            {/* Mesh Gradient / Orbs */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
                <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-neon-purple/20 rounded-full blur-[100px] animate-float"></div>
                <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-cyan-glow/20 rounded-full blur-[100px] animate-float" style={{ animationDelay: '-3s' }}></div>
                <div className="absolute top-[40%] left-[40%] w-[30%] h-[30%] bg-blue-500/10 rounded-full blur-[80px] animate-pulse-slow"></div>
            </div>

            {/* Grid Overlay (Optional, using CSS) */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_100%)]"></div>
        </div>
    );
};
