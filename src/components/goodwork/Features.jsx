import React from 'react';
import { motion } from 'framer-motion';
import { Users, Fingerprint, FileSpreadsheet, Headset, ArrowRight } from 'lucide-react';

const Features = () => {
    const features = [
        {
            title: "Quản Lý Nhân Sự (HRM)",
            description: "Số hóa quy trình tuyển dụng, đào tạo, và đánh giá năng lực KPI/OKR. Mọi thông tin nhân sự được quản lý tập trung trên một ứng dụng duy nhất.",
            icon: <Users className="w-10 h-10 text-blue-400" />,
            color: "from-blue-500/20 to-blue-500/0",
            border: "border-blue-500/20"
        },
        {
            title: "Chấm Công Bằng AI FaceID",
            description: "Tích hợp công nghệ AI nhận diện khuôn mặt tiên tiến. Chấm công nhanh chóng, chính xác tuyệt đối, ngăn chặn gian lận.",
            icon: <Fingerprint className="w-10 h-10 text-cyan-400" />,
            color: "from-cyan-500/20 to-cyan-500/0",
            border: "border-cyan-500/20"
        },
        {
            title: "Báo Cáo Tự Động Hóa",
            description: "Tạo các báo cáo doanh thu, chi phí, và năng suất tự động dựa trên dữ liệu thời gian thực. Giúp sếp ra quyết định tức thì.",
            icon: <FileSpreadsheet className="w-10 h-10 text-purple-400" />,
            color: "from-purple-500/20 to-purple-500/0",
            border: "border-purple-500/20"
        },
        {
            title: "Quản Lý Khách Hàng (CRM)",
            description: "Chăm sóc khách hàng tự động, theo dõi hành trình mua hàng và tối ưu tỷ lệ chuyển đổi từ khách hàng tiềm năng.",
            icon: <Headset className="w-10 h-10 text-emerald-400" />,
            color: "from-emerald-500/20 to-emerald-500/0",
            border: "border-emerald-500/20"
        }
    ];

    return (
        <section className="py-24 bg-zinc-950 relative overflow-hidden text-white">
            <div className="container mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16 max-w-3xl mx-auto"
                >
                    <h2 className="text-4xl font-bold mb-6">Tính Năng Cốt Lõi</h2>
                    <p className="text-gray-400 text-lg">
                        Không chỉ là một phần mềm quản lý, Good Work là một hệ sinh thái mạnh mẽ
                        được thiết kế để đồng hành cùng sự phát triển của doanh nghiệp bạn.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className={`p-8 rounded-3xl border ${feature.border} bg-gradient-to-br ${feature.color} bg-zinc-900/50 backdrop-blur-sm group hover:scale-[1.02] transition-all duration-300`}
                        >
                            <div className="flex items-start gap-6">
                                <div className="p-4 rounded-2xl bg-zinc-950/50 shadow-inner group-hover:rotate-12 transition-transform duration-300">
                                    {feature.icon}
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold mb-3 text-gray-100">{feature.title}</h3>
                                    <p className="text-gray-400 leading-relaxed">
                                        {feature.description}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 }}
                    className="mt-16 text-center"
                >
                    <a href="https://goodwork.io.vn/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-cyan-400 font-semibold hover:text-cyan-300 transition-colors group">
                        Khám phá tất cả các tính năng
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                    </a>
                </motion.div>
            </div>
        </section>
    );
};

export default Features;
