import React from 'react';
import { motion } from 'framer-motion';
import { Send, MapPin, Phone, Mail } from 'lucide-react';

const Contact = () => {
    return (
        <section id="contact" className="py-20 bg-zinc-950 text-white relative">
            <div className="container mx-auto px-6 max-w-5xl">
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="grid grid-cols-1 md:grid-cols-2 gap-12"
                >
                    <div>
                        <h2 className="text-4xl font-bold mb-6">Liên Hệ Với Chúng Tôi</h2>
                        <p className="text-gray-400 mb-8 leading-relaxed">
                            Sẵn sàng tư vấn giải pháp AI phù hợp nhất cho doanh nghiệp của bạn.
                            Hãy để lại thông tin, chúng tôi sẽ phản hồi trong vòng 24h.
                        </p>

                        <div className="space-y-6">
                            <div className="flex items-start gap-4">
                                <div className="p-3 bg-gray-900 rounded-lg text-cyan-400">
                                    <MapPin size={24} />
                                </div>
                                <div>
                                    <h4 className="font-semibold text-white">Địa chỉ</h4>
                                    <p className="text-gray-400 text-sm">Hà Nội, Việt Nam</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="p-3 bg-gray-900 rounded-lg text-cyan-400">
                                    <Mail size={24} />
                                </div>
                                <div>
                                    <h4 className="font-semibold text-white">Email</h4>
                                    <p className="text-gray-400 text-sm">contact@edgevision.ai</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="p-3 bg-gray-900 rounded-lg text-cyan-400">
                                    <Phone size={24} />
                                </div>
                                <div>
                                    <h4 className="font-semibold text-white">Hotline</h4>
                                    <p className="text-gray-400 text-sm">+84 90 123 4567</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="bg-gray-900/30 p-8 rounded-2xl border border-gray-800">
                        <form className="space-y-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-400 mb-1">Họ và tên</label>
                                <input type="text" className="w-full bg-gray-950 border border-gray-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan-500 transition-colors" placeholder="Nguyễn Văn A" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-400 mb-1">Email</label>
                                <input type="email" className="w-full bg-gray-950 border border-gray-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan-500 transition-colors" placeholder="email@example.com" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-400 mb-1">Tin nhắn</label>
                                <textarea rows="4" className="w-full bg-gray-950 border border-gray-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan-500 transition-colors" placeholder="Nội dung cần tư vấn..."></textarea>
                            </div>
                            <button className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold py-3 rounded-lg hover:shadow-lg hover:shadow-cyan-500/25 transition-all flex items-center justify-center gap-2">
                                Gửi Tin Nhắn <Send size={18} />
                            </button>
                        </form>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Contact;
