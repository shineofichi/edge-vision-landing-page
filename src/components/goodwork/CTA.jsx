import React from 'react';
import { motion } from 'framer-motion';

const CTA = () => {
    return (
        <section className="py-20 bg-black relative overflow-hidden">
            {/* Background Gradient */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-cyan-900/20 rounded-full blur-3xl mix-blend-screen pointer-events-none"></div>

            <div className="container mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="max-w-4xl mx-auto bg-gradient-to-r from-zinc-900 to-zinc-950 border border-zinc-800 rounded-3xl p-10 md:p-16 text-center shadow-2xl relative overflow-hidden"
                >
                    <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10"></div>

                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 relative z-10">
                        Sẵn sàng để đưa doanh nghiệp của bạn lên tầm cao mới?
                    </h2>

                    <p className="text-gray-400 text-lg mb-10 relative z-10 max-w-2xl mx-auto">
                        Tải Good Work ngay hôm nay và trải nghiệm sức mạnh của AI trong quản trị doanh nghiệp.
                        Đội ngũ Edge Vision luôn sẵn sàng hỗ trợ bạn.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center relative z-10">
                        <a
                            href="https://play.google.com/store/apps/details?id=com.evgoodwork&hl=vi"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-8 py-4 rounded-full bg-cyan-500 hover:bg-cyan-400 text-black font-bold transition-all shadow-lg shadow-cyan-500/25"
                        >
                            Tải Ứng Dụng Good Work
                        </a>
                        <a
                            href="/#contact"
                            className="px-8 py-4 rounded-full bg-transparent border border-gray-600 hover:border-white text-white font-semibold transition-all"
                        >
                            Liên Hệ Tư Vấn
                        </a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default CTA;
