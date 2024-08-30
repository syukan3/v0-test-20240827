'use client';

import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const Advertisement: React.FC = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const container = containerRef.current;
        if (!canvas || !container) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        const updateCanvasSize = () => {
            const rect = container.getBoundingClientRect();
            canvas.width = rect.width;
            canvas.height = rect.height;
        };

        updateCanvasSize();
        window.addEventListener('resize', updateCanvasSize);

        const particles: Particle[] = [];

        class Particle {
            x: number;
            y: number;
            size: number;
            speedX: number;
            speedY: number;
            trail: { x: number; y: number }[];

            constructor() {
                this.x = Math.random() * (canvas?.width ?? 0);
                this.y = Math.random() * (canvas?.height ?? 0);
                this.size = Math.random() * 2 + 0.1;
                this.speedX = Math.random() * 0.5 - 0.25;
                this.speedY = Math.random() * 0.5 - 0.25;
                this.trail = [];
            }

            update() {
                this.trail.push({ x: this.x, y: this.y });
                if (this.trail.length > 5) {
                    this.trail.shift();
                }

                this.x += this.speedX;
                this.y += this.speedY;

                if (this.x < 0 || this.x > (canvas?.width ?? 0)) this.speedX *= -1;
                if (this.y < 0 || this.y > (canvas?.height ?? 0)) this.speedY *= -1;

                if (this.size > 0.1) this.size -= 0.01;
            }

            draw() {
                if (!ctx) return;

                ctx.fillStyle = 'rgba(255, 255, 255, 0.7)';
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.fill();

                // 軌道を描画
                ctx.strokeStyle = 'rgba(255, 255, 255, 0.3)';
                ctx.beginPath();
                this.trail.forEach((point, index) => {
                    if (index === 0) {
                        ctx.moveTo(point.x, point.y);
                    } else {
                        ctx.lineTo(point.x, point.y);
                    }
                });
                ctx.stroke();
            }
        }

        function handleParticles() {
            for (let i = 0; i < particles.length; i++) {
                particles[i].update();
                particles[i].draw();

                if (particles[i].size <= 0.1) {
                    particles.splice(i, 1);
                    i--;
                }
            }
        }

        function animate() {
            if (!ctx || !canvas) return;
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            if (particles.length < 1000) {
                for (let i = 0; i < 50; i++) {
                    particles.push(new Particle());
                }
            }
            handleParticles();
            requestAnimationFrame(animate);
        }

        animate();

        return () => {
            cancelAnimationFrame(animate);
            window.removeEventListener('resize', updateCanvasSize);
        };
    }, []);

    return (
        <div className="w-full max-w-6xl mx-auto px-4 py-8">
            <motion.div
                ref={containerRef}
                className="relative bg-gradient-to-br from-gray-800 via-gray-900 to-black rounded-xl shadow-2xl overflow-hidden"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none" />
                <div className="relative z-20 flex flex-col items-center p-8 md:p-12 text-center">
                    <motion.h1
                        className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6"
                        initial={{ y: -50, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.2, duration: 0.5 }}
                    >
                        <span className="text-blue-400">●○ファンド</span>で<br />
                        未来への投資を
                    </motion.h1>

                    <motion.p
                        className="text-xl md:text-2xl text-gray-300 mb-8"
                        initial={{ y: 50, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.4, duration: 0.5 }}
                    >
                        非上場株への投資機会
                    </motion.p>

                    <motion.button
                        className="px-8 py-4 bg-blue-500 text-white text-xl font-semibold rounded-full shadow-lg hover:bg-blue-600 transition-colors flex items-center space-x-2"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <span>詳細を確認する</span>
                        <ArrowRight className="w-5 h-5" />
                    </motion.button>

                    <motion.div
                        className="mt-8 flex items-center space-x-4 text-gray-400"
                        initial={{ y: 50, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.6, duration: 0.5 }}
                    >
                        <span className="text-sm">プロフェッショナルな運用</span>
                        <span className="text-sm">限定的な投資機会</span>
                    </motion.div>
                </div>
            </motion.div>
        </div>
    );
};

export default Advertisement;