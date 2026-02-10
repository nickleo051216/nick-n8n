import React from 'react';
import { Smartphone, Mail, Globe, Users } from 'lucide-react';
import { profile } from '../data/profile';

const Contact = () => {
    return (
        <section id="contact" className="py-20 border-t border-slate-800">
            <div className="max-w-5xl mx-auto px-4 text-center">
                <h2 className="text-3xl font-bold mb-6 text-white">準備好優化您的工作流程了嗎？</h2>
                <p className="text-slate-400 mb-10 text-lg">
                    無論是 n8n 教學、企業自動化導入，或是客製化 Bot 開發，歡迎隨時與我聯繫。
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                    <a href={profile.contact.line} target="_blank" rel="noreferrer" className="flex flex-col items-center p-6 bg-slate-800 rounded-xl border border-slate-700 hover:border-green-500/50 hover:bg-slate-800/80 transition-all group">
                        <div className="w-12 h-12 bg-[#06C755]/10 text-[#06C755] rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                            <Smartphone size={24} />
                        </div>
                        <h3 className="text-white font-medium mb-1">LINE 官方帳號</h3>
                        <p className="text-slate-500 text-sm">快速諮詢與互動</p>
                    </a>

                    <a href={profile.contact.lineCommunity} target="_blank" rel="noreferrer" className="flex flex-col items-center p-6 bg-slate-800 rounded-xl border border-slate-700 hover:border-green-500/50 hover:bg-slate-800/80 transition-all group">
                        <div className="w-12 h-12 bg-[#06C755]/10 text-[#06C755] rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                            <Users size={24} />
                        </div>
                        <h3 className="text-white font-medium mb-1">LINE 社群</h3>
                        <p className="text-slate-500 text-sm">加入 AI 學習社群</p>
                    </a>

                    <a href={profile.contact.threads} target="_blank" rel="noreferrer" className="flex flex-col items-center p-6 bg-slate-800 rounded-xl border border-slate-700 hover:border-white/50 hover:bg-slate-800/80 transition-all group">
                        <div className="w-12 h-12 bg-white/10 text-white rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                            <span className="font-bold text-xl">@</span>
                        </div>
                        <h3 className="text-white font-medium mb-1">Threads</h3>
                        <p className="text-slate-500 text-sm">@nickai216</p>
                    </a>

                    <a href={`mailto:${profile.contact.email}`} className="flex flex-col items-center p-6 bg-slate-800 rounded-xl border border-slate-700 hover:border-blue-500/50 hover:bg-slate-800/80 transition-all group">
                        <div className="w-12 h-12 bg-blue-500/10 text-blue-400 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                            <Mail size={24} />
                        </div>
                        <h3 className="text-white font-medium mb-1">Email</h3>
                        <p className="text-slate-500 text-sm">{profile.contact.email}</p>
                    </a>

                    <a href={profile.contact.website} target="_blank" rel="noreferrer" className="flex flex-col items-center p-6 bg-slate-800 rounded-xl border border-slate-700 hover:border-purple-500/50 hover:bg-slate-800/80 transition-all group">
                        <div className="w-12 h-12 bg-purple-500/10 text-purple-400 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                            <Globe size={24} />
                        </div>
                        <h3 className="text-white font-medium mb-1">ZN Studio</h3>
                        <p className="text-slate-500 text-sm">znstudio216.com</p>
                    </a>

                    <a href={`tel:${profile.contact.phone}`} className="flex flex-col items-center p-6 bg-slate-800 rounded-xl border border-slate-700 hover:border-orange-500/50 hover:bg-slate-800/80 transition-all group">
                        <div className="w-12 h-12 bg-orange-500/10 text-orange-400 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                            <Smartphone size={24} />
                        </div>
                        <h3 className="text-white font-medium mb-1">電話</h3>
                        <p className="text-slate-500 text-sm">{profile.contact.phone}</p>
                    </a>
                </div>

                <div className="mt-12 pt-8 border-t border-slate-800 text-slate-500 text-sm">
                    <p>&copy; 2025 ZN Studio. All rights reserved.</p>
                    <p className="mt-2">Built with ❤️ by Nick Chang | n8n + React</p>
                </div>
            </div>
        </section>
    );
};

export default Contact;
