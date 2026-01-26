import React from 'react';
import { motion } from 'framer-motion';

const Team = () => {
    const members = [
        { name: "Hoàng Tiến Đức", role: "CEO", img: "members/hoang-tien-duc.png" },
        { name: "Nguyễn Duy Thăng", role: "Fullstack Developer", img: "members/nguyen-duy-thang.png" },
        { name: "Trương Tuấn Anh", role: "Mobile Developer", img: "members/truong-tuan-anh.png" },
        { name: "Đỗ Danh Phương", role: "AI Researcher", img: "members/do-danh-phuong.png" },
        { name: "Hoàng Mạnh Đoàn", role: "AI Researcher", img: "members/hoang-manh-doan.png" },
        { name: "Ngô Xuân Lộc", role: "AI Researcher", img: "members/ngo-xuan-loc.png" },
    ];

    return (
        <section id="team" className="py-20 bg-black text-white">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl font-bold mb-4">Đội Ngũ Phát Triển</h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        6 thành viên tâm huyết, giàu kinh nghiệm trong lĩnh vực AI và phát triển phần mềm.
                    </p>
                </motion.div>

                <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
                    {members.map((member, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-gray-900/50 rounded-2xl p-6 text-center border border-gray-800 hover:border-cyan-500/50 hover:bg-gray-800/50 transition-all duration-300"
                        >
                            <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden border-2 border-gray-700 bg-gray-800">
                                <img src={member.img} alt={member.name} className="w-full h-full object-cover" />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-1">{member.name}</h3>
                            <p className="text-cyan-400 text-sm font-medium">{member.role}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Team;
