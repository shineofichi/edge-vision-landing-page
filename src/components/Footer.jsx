import React from 'react';
import { Github, Twitter, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-black py-12 border-t border-gray-900">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-center bg-gray-900/30 p-8 rounded-2xl border border-gray-800">
                    <div className="mb-6 md:mb-0">
                        <h2 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent mb-2">
                            Edge Vision
                        </h2>
                        <p className="text-gray-400 text-sm max-w-xs">
                            Empowering SMEs with affordable, sovereign AI solutions.
                        </p>
                    </div>

                    <div className="flex gap-6">
                        {/* <a href="#" className="p-2 bg-gray-800 rounded-full text-gray-400 hover:text-cyan-400 hover:bg-gray-700 transition-all">
                            <Github size={20} />
                        </a> */}
                        {/* <a href="#" className="p-2 bg-gray-800 rounded-full text-gray-400 hover:text-cyan-400 hover:bg-gray-700 transition-all">
                            <Twitter size={20} />
                        </a> */}
                        <a href="https://www.linkedin.com/company/edge-vision-vn/" target="_blank" rel="noopener noreferrer" className="p-2 bg-gray-800 rounded-full text-gray-400 hover:text-cyan-400 hover:bg-gray-700 transition-all">
                            <Linkedin size={20} />
                        </a>
                        <a href="mailto:support@edgevision.io.vn" className="p-2 bg-gray-800 rounded-full text-gray-400 hover:text-cyan-400 hover:bg-gray-700 transition-all">
                            <Mail size={20} />
                        </a>
                    </div>
                </div>

                <div className="mt-8 text-center text-gray-600 text-xs">
                    &copy; {new Date().getFullYear()} Edge Vision. All rights reserved.
                </div>
            </div>
        </footer>
    );
};

export default Footer;
