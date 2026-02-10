import React from 'react';
import { BookOpen, CheckCircle } from 'lucide-react';
import { profile } from '../data/profile';
import { skills } from '../data/skills';

const About = () => {
    return (
        <section id="about" className="py-20 bg-slate-800/50">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid md:grid-cols-2 gap-12 items-start">
                    <div>
                        <h2 className="text-3xl font-bold mb-6 text-white flex items-center gap-3">
                            <BookOpen className="text-blue-400" />
                            關於我
                        </h2>
                        <div className="space-y-4 text-slate-300 leading-relaxed mb-8">
                            <p>
                                擁有多年環境監測專案管理經驗，不僅具備專案管理的嚴謹度，更結合了自學的 AI 與 No-Code 技術。
                            </p>
                            <p>
                                我擅長使用 <strong>n8n, Make, Zapier</strong> 等工具，串接 Google Workspace、Line Bot 與各種 API。從業務報價系統到個人行事曆助手，我致力於解決重複性工作的痛點。
                            </p>
                            <p>
                                現為 AI 自動化顧問與講師，協助企業導入自動化流程，提升效率並降低人力成本。
                            </p>
                        </div>

                        {/* Core Strength Icons */}
                        <div className="grid grid-cols-2 gap-4">
                            <div className="flex items-center gap-3 bg-slate-900/50 p-3 rounded-lg border border-slate-700/50">
                                <CheckCircle className="text-green-500 flex-shrink-0" size={20} />
                                <span className="text-slate-200 text-sm">n8n 進階認證專家</span>
                            </div>
                            <div className="flex items-center gap-3 bg-slate-900/50 p-3 rounded-lg border border-slate-700/50">
                                <CheckCircle className="text-green-500 flex-shrink-0" size={20} />
                                <span className="text-slate-200 text-sm">客製化 Bot 開發</span>
                            </div>
                            <div className="flex items-center gap-3 bg-slate-900/50 p-3 rounded-lg border border-slate-700/50">
                                <CheckCircle className="text-green-500 flex-shrink-0" size={20} />
                                <span className="text-slate-200 text-sm">企業內訓講師</span>
                            </div>
                            <div className="flex items-center gap-3 bg-slate-900/50 p-3 rounded-lg border border-slate-700/50">
                                <CheckCircle className="text-green-500 flex-shrink-0" size={20} />
                                <span className="text-slate-200 text-sm">API 系統串接</span>
                            </div>
                        </div>
                    </div>

                    {/* Skills Grid */}
                    <div id="skills" className="space-y-4">
                        <h3 className="text-2xl font-bold mb-4 text-white">技術堆疊</h3>
                        {skills.map((skill, index) => (
                            <div key={index} className="bg-slate-900 border border-slate-700 p-4 rounded-xl hover:border-blue-500/50 transition-colors group">
                                <div className="flex items-start justify-between">
                                    <div className="flex items-center gap-3 mb-2">
                                        <div className="p-2 bg-slate-800 rounded-lg group-hover:bg-blue-500/20 group-hover:text-blue-400 transition-colors">
                                            <skill.icon size={20} />
                                        </div>
                                        <div>
                                            <h3 className="font-semibold text-white text-lg">{skill.name}</h3>
                                            <p className="text-xs text-blue-400">{skill.level}</p>
                                        </div>
                                    </div>
                                </div>
                                <p className="text-slate-400 text-sm mt-1 pl-12">{skill.details}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
