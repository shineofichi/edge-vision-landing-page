import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Smartphone, Star } from 'lucide-react';

const Hero = () => {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black pt-20">
            {/* Background Effects */}
            <div className="absolute inset-0 z-0">
                <div className="absolute top-10 -left-10 w-96 h-96 bg-cyan-900 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
                <div className="absolute top-20 -right-10 w-96 h-96 bg-blue-900 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
                <div className="absolute -bottom-10 left-1/3 w-96 h-96 bg-purple-900 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
            </div>

            <div className="container mx-auto px-6 relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="max-w-4xl mx-auto"
                >
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-950/30 border border-cyan-500/30 text-cyan-400 text-sm font-medium mb-8 backdrop-blur-md">
                        <Smartphone className="w-4 h-4" />
                        Sản phẩm chiến lược từ Edge Vision
                    </div>

                    <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                        Good Work
                        <span className="block text-3xl md:text-5xl mt-4 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                            Hệ Sinh Thái AI Quản Trị Toàn Diện
                        </span>
                    </h1>

                    <p className="text-gray-400 text-lg md:text-xl mb-10 max-w-3xl mx-auto leading-relaxed">
                        Chuyển đổi số dễ dàng hơn bao giờ hết. Tự động hóa quy trình, tối ưu nguồn nhân lực,
                        và quản lý doanh nghiệp thông minh chỉ với một nền tảng duy nhất.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                        <a
                            href="https://play.google.com/store/apps/details?id=com.evgoodwork&hl=vi"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-full sm:w-auto px-8 py-4 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold hover:shadow-lg hover:shadow-cyan-500/30 transition-all flex items-center justify-center gap-2 group"
                        >
                            Tải App Ngay
                            <ArrowDown className="w-5 h-5 group-hover:translate-y-1 transition-transform" />
                        </a>
                        <a
                            href="/#contact"
                            className="w-full sm:w-auto px-8 py-4 rounded-full border border-gray-700 hover:border-cyan-500 hover:text-cyan-400 transition-all text-gray-300 font-semibold flex items-center justify-center"
                        >
                            Liên hệ tư vấn
                        </a>
                    </div>

                    <div className="mt-8 text-gray-400">
                        Trang chủ sản phẩm:{' '}
                        <a
                            href="https://goodwork.io.vn/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-cyan-400 hover:text-cyan-300 transition-colors font-medium hover:underline inline-flex items-center gap-1"
                        >
                            goodwork.io.vn
                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                            </svg>
                        </a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
