import React from 'react';
import { ArrowRight, Globe, ExternalLink, Workflow, Bot, Database, Mail, Zap } from 'lucide-react';
import { profile } from '../data/profile';

const Hero = () => {
    return (
        <section id="home" className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 space-y-6">
                <div className="inline-block px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 text-sm font-medium border border-blue-500/20 mb-2">
                    🤖 AI Automation Consultant
                </div>
                <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                    讓繁瑣流程<br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">自動化運作</span>
                </h1>
                <p className="text-slate-400 text-lg md:text-xl max-w-lg leading-relaxed">
                    {profile.description}
                </p>

                {/* Quick Stats */}
                <div className="flex gap-6 pt-2">
                    <div className="text-center">
                        <div className="text-2xl font-bold text-blue-400">33+</div>
                        <div className="text-xs text-slate-500">自動化作品</div>
                    </div>
                    <div className="text-center">
                        <div className="text-2xl font-bold text-red-400">8+</div>
                        <div className="text-xs text-slate-500">演講場次</div>
                    </div>
                    <div className="text-center">
                        <div className="text-2xl font-bold text-green-400">800+</div>
                        <div className="text-xs text-slate-500">影響學員</div>
                    </div>
                </div>

                <div className="flex flex-wrap gap-4 pt-4">
                    <a href="#contact" className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-all shadow-lg shadow-blue-500/20">
                        預約諮詢 <ArrowRight size={18} />
                    </a>
                    <a href={profile.contact.website} target="_blank" rel="noreferrer" className="flex items-center gap-2 bg-slate-800 hover:bg-slate-700 text-slate-200 px-6 py-3 rounded-lg font-medium transition-all border border-slate-700">
                        官方網站 <Globe size={18} />
                    </a>
                    <a href={profile.contact.portaly} target="_blank" rel="noreferrer" className="flex items-center gap-2 bg-slate-800 hover:bg-slate-700 text-slate-200 px-6 py-3 rounded-lg font-medium transition-all border border-slate-700">
                        Portaly <ExternalLink size={18} />
                    </a>
                </div>
            </div>

            {/* Abstract Visual */}
            <div className="md:w-1/2 mt-12 md:mt-0 relative flex justify-center">
                <div className="relative w-80 h-80 md:w-96 md:h-96">
                    <div className="absolute inset-0 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
                    <div className="relative z-10 grid grid-cols-2 gap-4 p-4">
                        <div className="bg-slate-800/80 p-5 rounded-2xl border border-slate-700 backdrop-blur-sm transform translate-y-4 shadow-xl hover:border-blue-500/30 transition-colors">
                            <Workflow className="text-blue-400 mb-3" size={32} />
                            <p className="text-sm font-medium text-slate-200">n8n / Make</p>
                            <p className="text-xs text-slate-500">自動化流程</p>
                        </div>
                        <div className="bg-slate-800/80 p-5 rounded-2xl border border-slate-700 backdrop-blur-sm shadow-xl hover:border-green-500/30 transition-colors">
                            <Bot className="text-green-400 mb-3" size={32} />
                            <p className="text-sm font-medium text-slate-200">AI / GPT</p>
                            <p className="text-xs text-slate-500">智能整合</p>
                        </div>
                        <div className="bg-slate-800/80 p-5 rounded-2xl border border-slate-700 backdrop-blur-sm shadow-xl hover:border-purple-500/30 transition-colors">
                            <Database className="text-purple-400 mb-3" size={32} />
                            <p className="text-sm font-medium text-slate-200">數據整合</p>
                            <p className="text-xs text-slate-500">Supabase / Firebase</p>
                        </div>
                        <div className="bg-slate-800/80 p-5 rounded-2xl border border-slate-700 backdrop-blur-sm transform -translate-y-4 shadow-xl hover:border-yellow-500/30 transition-colors">
                            <Zap className="text-yellow-400 mb-3" size={32} />
                            <p className="text-sm font-medium text-slate-200">Line Bot</p>
                            <p className="text-xs text-slate-500">客製化開發</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
