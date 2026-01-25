import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Bot, Cpu, Network } from 'lucide-react';

const Hero = () => {
    return (
        <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black pt-20">
            {/* Background Effects */}
            <div className="absolute inset-0 z-0">
                <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
                <div className="absolute top-0 -right-4 w-72 h-72 bg-cyan-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
                <div className="absolute -bottom-8 left-20 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
            </div>

            <div className="container mx-auto px-6 relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="max-w-4xl mx-auto"
                >
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gray-900/50 border border-gray-800 text-cyan-400 text-sm mb-6 backdrop-blur-sm">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
                        </span>
                        Tiên phong công nghệ AI
                    </div>

                    <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                        Thấu hiểu doanh nghiệp
                        <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600">
                            Nâng tầm với AI
                        </span>
                    </h1>

                    <p className="text-gray-400 text-lg md:text-xl mb-8 max-w-2xl mx-auto leading-relaxed">
                        Mang tới cho doanh nghiệp vừa và nhỏ các giải pháp ứng dụng AI với chi phí rẻ nhất,
                        giúp doanh nghiệp làm chủ hạ tầng và bứt phá doanh thu.
                    </p>

                    <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
                        <a
                            href="#products"
                            className="group px-8 py-3 rounded-full bg-white text-black font-bold hover:bg-gray-200 transition-all flex items-center gap-2"
                        >
                            Khám phá giải pháp
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </a>
                        <a
                            href="#contact"
                            className="px-8 py-3 rounded-full border border-gray-700 hover:border-cyan-500 hover:text-cyan-400 transition-all text-gray-300"
                        >
                            Liên hệ tư vấn
                        </a>
                    </div>
                </motion.div>

                {/* Floating Icons */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1, duration: 1 }}
                    className="absolute top-1/4 left-10 hidden lg:block opacity-30 pointer-events-none"
                >
                    <Bot size={48} className="text-gray-800 animate-bounce delay-700" />
                </motion.div>
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.2, duration: 1 }}
                    className="absolute bottom-1/4 right-10 hidden lg:block opacity-30 pointer-events-none"
                >
                    <Cpu size={48} className="text-gray-800 animate-bounce delay-100" />
                </motion.div>

            </div>
        </section>
    );
};

export default Hero;
