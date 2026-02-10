import React, { useState } from 'react';
import { projects, categories } from '../data/projects';

const Portfolio = () => {
    const [activeCategory, setActiveCategory] = useState('all');

    const filteredProjects = activeCategory === 'all'
        ? projects
        : projects.filter(p => p.category === activeCategory);

    return (
        <section id="portfolio" className="py-20 bg-slate-800/30">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold mb-4 text-white">精選自動化案例</h2>
                    <p className="text-slate-400">從簡單的通知機器人到複雜的商業邏輯，以下是我實際部署的解決方案。</p>
                </div>

                {/* Filter Tabs */}
                <div className="flex flex-wrap justify-center gap-2 mb-10">
                    {categories.map(cat => (
                        <button
                            key={cat.id}
                            onClick={() => setActiveCategory(cat.id)}
                            className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${activeCategory === cat.id
                                    ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/25'
                                    : 'bg-slate-800 text-slate-400 hover:bg-slate-700 hover:text-white'
                                }`}
                        >
                            {cat.name}
                        </button>
                    ))}
                </div>

                {/* Projects Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredProjects.map((project) => (
                        <div key={project.id} className="bg-slate-800 rounded-xl overflow-hidden border border-slate-700 hover:border-slate-600 hover:transform hover:-translate-y-1 transition-all duration-300 shadow-xl">
                            <div className="p-6 h-full flex flex-col">
                                <div className="flex items-start justify-between mb-4">
                                    <div className="p-3 bg-slate-900 rounded-lg text-blue-400">
                                        <project.icon size={24} />
                                    </div>
                                    <span className="text-xs font-mono text-slate-500 border border-slate-700 px-2 py-1 rounded">
                                        Workflow
                                    </span>
                                </div>
                                <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                                <p className="text-slate-400 text-sm mb-6 flex-grow leading-relaxed">
                                    {project.description}
                                </p>
                                <div className="flex flex-wrap gap-2 mt-auto">
                                    {project.tags.map((tag, i) => (
                                        <span key={i} className="text-xs bg-slate-900 text-slate-300 px-2 py-1 rounded-md">
                                            #{tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Portfolio;
