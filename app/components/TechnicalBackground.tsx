'use client';

import { useState } from 'react';

export default function TechnicalBackground() {
    // Generate 3D geometric shapes positions
    const [geometricShapes] = useState(() => {
        if (typeof window === 'undefined') return [];
        return Array.from({ length: 8 }).map((_, i) => ({
            id: i,
            left: Math.random() * 100,
            top: Math.random() * 100,
            size: 150 + Math.random() * 200,
            rotation: Math.random() * 360,
            opacity: 0.03 + Math.random() * 0.05,
            delay: Math.random() * 3,
            duration: 8 + Math.random() * 4,
        }));
    });

    return (
        <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
            {/* Base gradient background - Light mode: clean white, Dark mode: deep purple/blue */}
            <div className="absolute inset-0 bg-white dark:bg-gradient-to-br dark:from-slate-950 dark:via-indigo-950 dark:to-slate-950"></div>

            {/* Light mode: Subtle dots pattern */}
            <div className="absolute inset-0 dark:hidden opacity-30">
                <div
                    className="absolute inset-0"
                    style={{
                        backgroundImage: `radial-gradient(circle, rgba(0,0,0,0.1) 1px, transparent 1px)`,
                        backgroundSize: '20px 20px',
                    }}
                ></div>
            </div>

            {/* Dark mode: Subtle radial gradients for depth */}
            <div className="absolute inset-0 hidden dark:block opacity-40">
                <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top_right,rgba(120,119,198,0.15),transparent_50%)]"></div>
                <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(ellipse_at_bottom_left,rgba(120,119,198,0.15),transparent_50%)]"></div>
                <div className="absolute top-1/2 left-1/2 w-full h-full bg-[radial-gradient(ellipse_at_center,rgba(99,102,241,0.1),transparent_70%)]"></div>
            </div>

            {/* Light mode: Subtle geometric shapes */}
            {geometricShapes.map((shape) => (
                <div
                    key={shape.id}
                    className="absolute rounded-lg blur-3xl animate-pulse dark:hidden"
                    style={{
                        left: `${shape.left}%`,
                        top: `${shape.top}%`,
                        width: `${shape.size}px`,
                        height: `${shape.size}px`,
                        background: `linear-gradient(135deg, rgba(34,197,94,${shape.opacity * 0.3}), rgba(59,130,246,${shape.opacity * 0.2}))`,
                        transform: `rotate(${shape.rotation}deg)`,
                        animationDelay: `${shape.delay}s`,
                        animationDuration: `${shape.duration}s`,
                    }}
                />
            ))}

            {/* Dark mode: 3D Geometric Shapes - Blurred polygons */}
            {geometricShapes.map((shape) => (
                <div
                    key={`dark-${shape.id}`}
                    className="absolute rounded-lg blur-3xl animate-pulse hidden dark:block"
                    style={{
                        left: `${shape.left}%`,
                        top: `${shape.top}%`,
                        width: `${shape.size}px`,
                        height: `${shape.size}px`,
                        background: `linear-gradient(135deg, rgba(99,102,241,${shape.opacity}), rgba(139,92,246,${shape.opacity * 0.5}))`,
                        transform: `rotate(${shape.rotation}deg)`,
                        animationDelay: `${shape.delay}s`,
                        animationDuration: `${shape.duration}s`,
                    }}
                />
            ))}

            {/* Dark mode: Large 3D gradient orbs for depth */}
            <div className="absolute top-0 left-0 w-full h-full hidden dark:block">
                <div className="absolute top-1/4 right-1/4 w-[600px] h-[600px] bg-indigo-900/20 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-1/4 left-1/4 w-[700px] h-[700px] bg-slate-800/25 rounded-full blur-3xl animate-pulse delay-1000"></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-900/20 rounded-full blur-3xl animate-pulse delay-500"></div>
                <div className="absolute top-3/4 right-1/3 w-[400px] h-[400px] bg-indigo-800/15 rounded-full blur-3xl animate-pulse delay-700"></div>
            </div>

            {/* Light mode: Subtle green accent glow */}
            <div className="absolute top-1/3 left-1/4 w-[300px] h-[300px] bg-green-500/5 rounded-full blur-3xl animate-pulse delay-300 dark:hidden"></div>
            <div className="absolute bottom-1/3 right-1/4 w-[250px] h-[250px] bg-blue-500/5 rounded-full blur-3xl animate-pulse delay-1500 dark:hidden"></div>

            {/* Dark mode: Subtle cyan accent glow */}
            <div className="absolute top-1/3 left-1/4 w-[300px] h-[300px] bg-cyan-500/5 rounded-full blur-3xl animate-pulse delay-300 hidden dark:block"></div>
            <div className="absolute bottom-1/3 right-1/4 w-[250px] h-[250px] bg-cyan-500/5 rounded-full blur-3xl animate-pulse delay-1500 hidden dark:block"></div>
        </div>
    );
}
