import React from 'react';
import { motion } from 'framer-motion';
import { Smartphone, BarChart3, ShieldCheck, ExternalLink } from 'lucide-react';

const Products = () => {
    const products = [
        {
            title: "Good Work",
            description: "Phần mềm quản lý doanh nghiệp toàn diện sử dụng trí tuệ nhân tạo. Tự động hóa quy trình, tối ưu chi phí và nâng cao hiệu suất.",
            icon: <Smartphone className="w-12 h-12 text-cyan-400" />,
            link: "/goodwork",
            link2: "https://goodwork.io.vn/",
            features: ["Quản lý nhân sự", "Tự động hóa báo cáo", "Chấm công AI"],
            highlight: true
        },
        {
            title: "AI Consultant",
            description: "Giải pháp tư vấn AI chuyên sâu cho doanh nghiệp SME, giúp xây dựng lộ trình chuyển đổi số hiệu quả.",
            icon: <BarChart3 className="w-12 h-12 text-purple-400" />,
            link: "#",
            features: ["Phân tích dữ liệu", "Dự báo xu hướng", "Tối ưu vận hành"],
            highlight: false
        },
        {
            title: "Secure Infrastructure",
            description: "Hạ tầng bảo mật cao cấp, giúp doanh nghiệp làm chủ dữ liệu của mình mà không phụ thuộc bên thứ 3.",
            icon: <ShieldCheck className="w-12 h-12 text-blue-400" />,
            link: "#",
            features: ["Bảo mật 2 lớp", "Lưu trữ nội bộ", "Quyền riêng tư tuyệt đối"],
            highlight: false
        }
    ];

    return (
        <section id="products" className="py-20 bg-zinc-950 text-white relative overflow-hidden">
            {/* Background Gradient */}
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-black to-zinc-900 opacity-50 z-0"></div>

            <div className="container mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl font-bold mb-4">Sản Phẩm & Giải Pháp</h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        Các ứng dụng AI thiết thực giúp doanh nghiệp vận hành thông minh hơn.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {products.map((product, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                            className={`p-8 rounded-2xl border ${product.highlight ? 'border-cyan-500/50 bg-gradient-to-b from-gray-900 to-gray-900/50 shadow-lg shadow-cyan-900/20' : 'border-gray-800 bg-gray-900/30 hover:bg-gray-800/50'} transition-all group`}
                        >
                            <div className="mb-6 p-4 rounded-full bg-gray-800/50 w-fit group-hover:scale-110 transition-transform duration-300">
                                {product.icon}
                            </div>
                            <h3 className="text-2xl font-bold mb-3 group-hover:text-cyan-400 transition-colors">{product.title}</h3>
                            <p className="text-gray-400 mb-6 text-sm leading-relaxed">{product.description}</p>

                            <ul className="mb-8 space-y-2">
                                {product.features.map((feature, i) => (
                                    <li key={i} className="flex items-center text-sm text-gray-300">
                                        <span className="w-1.5 h-1.5 rounded-full bg-cyan-500 mr-2"></span>
                                        {feature}
                                    </li>
                                ))}
                                {product.link2 && (
                                    <li>
                                        <a
                                            href={product.link2}
                                            target={product.link2.startsWith('http') ? "_blank" : "_self"}
                                            rel="noopener noreferrer"
                                            className={`inline-flex items-center gap-2 text-sm font-semibold ${product.highlight ? 'text-cyan-400 hover:text-cyan-300' : 'text-gray-400 hover:text-white'}`}
                                        >
                                            Trang chủ <ExternalLink size={16} />
                                        </a>
                                    </li>
                                )}
                            </ul>

                            <a
                                href={product.link}
                                target={product.link.startsWith('http') ? "_blank" : "_self"}
                                rel="noopener noreferrer"
                                className={`inline-flex items-center gap-2 text-sm font-semibold ${product.highlight ? 'text-cyan-400 hover:text-cyan-300' : 'text-gray-400 hover:text-white'}`}
                            >
                                Xem chi tiết <ExternalLink size={16} />
                            </a>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Products;
