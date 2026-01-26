import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, MapPin, Phone, Mail, CheckCircle, AlertCircle, Loader2 } from 'lucide-react';

const Contact = () => {
    const [status, setStatus] = useState('idle'); // idle, sending, success, error

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('sending');

        const formData = new FormData(e.target);
        const data = Object.fromEntries(formData.entries());

        try {
            const response = await fetch("https://formsubmit.co/ajax/support@edgevision.io.vn", {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify(data)
            });

            if (response.ok) {
                setStatus('success');
                e.target.reset();
            } else {
                setStatus('error');
            }
        } catch (error) {
            setStatus('error');
            console.error("Form error:", error);
        }
    };

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
                                    <p className="text-gray-400 text-sm">support@edgevision.io.vn</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="p-3 bg-gray-900 rounded-lg text-cyan-400">
                                    <Phone size={24} />
                                </div>
                                <div>
                                    <h4 className="font-semibold text-white">Hotline</h4>
                                    <p className="text-gray-400 text-sm">+84 383 341 242</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="bg-gray-900/30 p-8 rounded-2xl border border-gray-800 relative overflow-hidden">
                        <AnimatePresence>
                            {status === 'success' && (
                                <motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0 }}
                                    className="absolute inset-0 bg-gray-900/95 backdrop-blur-sm flex flex-col items-center justify-center z-20 text-center p-6"
                                >
                                    <CheckCircle className="text-green-500 w-16 h-16 mb-4" />
                                    <h3 className="text-2xl font-bold text-white mb-2">Đã gửi thành công!</h3>
                                    <p className="text-gray-400 mb-6">Cảm ơn bạn đã liên hệ. Chúng tôi sẽ phản hồi sớm nhất.</p>
                                    <button
                                        onClick={() => setStatus('idle')}
                                        className="px-6 py-2 bg-gray-800 hover:bg-gray-700 rounded-lg text-white font-medium transition-colors"
                                    >
                                        Gửi tin nhắn khác
                                    </button>
                                </motion.div>
                            )}
                        </AnimatePresence>

                        <form onSubmit={handleSubmit} className="space-y-4">
                            {/* Formsubmit Configuration Hidden Fields handled via AJAX body mostly, but keeping clean structure */}
                            <input type="hidden" name="_subject" value="Liên hệ mới từ Landing Page AI" />
                            <input type="hidden" name="_captcha" value="false" />
                            <input type="hidden" name="_template" value="table" />

                            <div>
                                <label className="block text-sm font-medium text-gray-400 mb-1">Họ và tên</label>
                                <input type="text" name="name" required disabled={status === 'sending'} className="w-full bg-gray-950 border border-gray-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan-500 transition-colors disabled:opacity-50" placeholder="Nguyễn Văn A" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-400 mb-1">Email</label>
                                <input type="email" name="email" required disabled={status === 'sending'} className="w-full bg-gray-950 border border-gray-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan-500 transition-colors disabled:opacity-50" placeholder="email@example.com" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-400 mb-1">Tin nhắn</label>
                                <textarea name="message" required rows="4" disabled={status === 'sending'} className="w-full bg-gray-950 border border-gray-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan-500 transition-colors disabled:opacity-50" placeholder="Nội dung cần tư vấn..."></textarea>
                            </div>

                            {status === 'error' && (
                                <div className="flex items-center gap-2 text-red-400 text-sm bg-red-900/20 p-3 rounded-lg border border-red-900/50">
                                    <AlertCircle size={16} />
                                    Có lỗi xảy ra. Vui lòng thử lại sau.
                                </div>
                            )}

                            <button
                                type="submit"
                                disabled={status === 'sending'}
                                className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold py-3 rounded-lg hover:shadow-lg hover:shadow-cyan-500/25 transition-all flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                            >
                                {status === 'sending' ? (
                                    <>Đang gửi... <Loader2 size={18} className="animate-spin" /></>
                                ) : (
                                    <>Gửi Tin Nhắn <Send size={18} /></>
                                )}
                            </button>
                        </form>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Contact;
