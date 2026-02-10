import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navigation = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <nav className="fixed w-full z-50 bg-slate-900/90 backdrop-blur-md border-b border-slate-800">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex-shrink-0 font-bold text-xl tracking-wider text-blue-400">
                        ZN STUDIO
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-8">
                            <a href="#home" className="hover:text-blue-400 transition-colors px-3 py-2 rounded-md text-sm font-medium">首頁</a>
                            <a href="#about" className="hover:text-blue-400 transition-colors px-3 py-2 rounded-md text-sm font-medium">關於我</a>
                            <a href="#skills" className="hover:text-blue-400 transition-colors px-3 py-2 rounded-md text-sm font-medium">專業技能</a>
                            <a href="#experience" className="hover:text-blue-400 transition-colors px-3 py-2 rounded-md text-sm font-medium">經歷與認證</a>
                            <a href="#portfolio" className="hover:text-blue-400 transition-colors px-3 py-2 rounded-md text-sm font-medium">精選案例</a>
                            <a href="#contact" className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-full text-sm font-medium transition-colors">聯絡諮詢</a>
                        </div>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden">
                        <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-slate-300 hover:text-white p-2">
                            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="md:hidden bg-slate-800 border-b border-slate-700">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        <a href="#home" onClick={() => setIsMenuOpen(false)} className="block hover:bg-slate-700 px-3 py-2 rounded-md text-base font-medium">首頁</a>
                        <a href="#about" onClick={() => setIsMenuOpen(false)} className="block hover:bg-slate-700 px-3 py-2 rounded-md text-base font-medium">關於我</a>
                        <a href="#experience" onClick={() => setIsMenuOpen(false)} className="block hover:bg-slate-700 px-3 py-2 rounded-md text-base font-medium">經歷與認證</a>
                        <a href="#portfolio" onClick={() => setIsMenuOpen(false)} className="block hover:bg-slate-700 px-3 py-2 rounded-md text-base font-medium">精選案例</a>
                        <a href="#contact" onClick={() => setIsMenuOpen(false)} className="block text-blue-400 font-bold px-3 py-2 rounded-md text-base">聯絡諮詢</a>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navigation;
