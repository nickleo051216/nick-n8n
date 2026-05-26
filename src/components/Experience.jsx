import React from 'react';
import { Award, Mic, GraduationCap, MapPin, Users, ChevronDown, ChevronUp, Camera, X } from 'lucide-react';
import { certifications, experiences, education, trainings } from '../data/profile';

// 演講照片對應
const experiencePhotos = {
    "2026-02/07": [
        { src: 'images/teaching-0207.jpg', alt: 'n8n 基礎教學陪跑實戰班' },
        { src: 'images/teaching-0207-2.jpg', alt: 'n8n 基礎教學陪跑實戰班 合照' },
    ],
    "2025-12/20": [
        { src: 'images/teaching-1220-1.jpg', alt: '首場自辦 n8n 工作坊' },
        { src: 'images/teaching-1220-2.jpg', alt: '首場自辦 n8n 工作坊 合照' },
    ],
    "2025-11/22": [
        { src: 'images/forum-1122-group.jpg', alt: 'n8n 台北企業應用論壇 大合照' },
    ],
    "2025-09/26": [
        { src: 'images/meetup-0926-talk.jpg', alt: 'Taiwan n8n User Group 演講現場' },
        { src: 'images/meetup-0926-banner.jpg', alt: 'n8n Taipei Meetup 活動看板' },
        { src: 'images/meetup-0926-vip.jpg', alt: 'n8n VIP 識別證 — 知名 n8n AI 作家 Nick 老師' },
    ],
};

const Experience = () => {
    const [expandedIdx, setExpandedIdx] = React.useState(null);
    const [lightbox, setLightbox] = React.useState(null);

    return (
        <section id="experience" className="py-20 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

            {/* Speaking Experience - Full Width */}
            <div className="mb-16">
                <h2 className="text-3xl font-bold mb-2 text-white flex items-center gap-3">
                    <Mic className="text-red-500" />
                    演講與教學經歷
                </h2>
                <p className="text-slate-400 mb-8">累計 9 場以上的演講與教學活動，影響超過 800 位學員</p>

                <div className="space-y-4">
                    {experiences.map((exp, i) => (
                        <div
                            key={i}
                            className="bg-slate-800 border border-slate-700 rounded-xl overflow-hidden hover:border-slate-600 transition-all cursor-pointer"
                            onClick={() => setExpandedIdx(expandedIdx === i ? null : i)}
                        >
                            <div className="p-5 flex flex-col sm:flex-row sm:items-center gap-3">
                                <div className="flex items-center gap-3 flex-shrink-0">
                                    <span className="text-blue-400 font-bold text-sm bg-blue-500/10 px-3 py-1 rounded-full border border-blue-500/20 whitespace-nowrap">
                                        {exp.year}/{exp.date}
                                    </span>
                                    <span className={`text-xs px-2 py-0.5 rounded-full ${exp.location === '實體'
                                            ? 'bg-green-500/10 text-green-400 border border-green-500/20'
                                            : 'bg-purple-500/10 text-purple-400 border border-purple-500/20'
                                        }`}>
                                        {exp.location}
                                    </span>
                                </div>
                                <div className="flex-grow min-w-0">
                                    <h3 className="text-lg font-bold text-white truncate">{exp.title}</h3>
                                    <p className="text-slate-400 text-sm truncate">
                                        <span className="text-slate-500 mr-1">主題:</span>
                                        {exp.topic}
                                    </p>
                                </div>
                                <div className="flex items-center gap-3 flex-shrink-0">
                                    {exp.audience && (
                                        <span className="text-xs text-slate-400 flex items-center gap-1 whitespace-nowrap">
                                            <Users size={14} /> {exp.audience}
                                        </span>
                                    )}
                                    <span className="text-slate-500 text-sm whitespace-nowrap">{exp.role}</span>
                                    {expandedIdx === i ? <ChevronUp size={16} className="text-slate-500" /> : <ChevronDown size={16} className="text-slate-500" />}
                                </div>
                            </div>

                            {expandedIdx === i && exp.highlights && (
                                <div className="px-5 pb-5 border-t border-slate-700/50 pt-4">
                                    {exp.organizer && (
                                        <p className="text-slate-400 text-sm mb-3 flex items-center gap-1">
                                            <MapPin size={14} className="text-slate-500" /> {exp.organizer}
                                        </p>
                                    )}
                                    <ul className="space-y-2">
                                        {exp.highlights.map((h, j) => (
                                            <li key={j} className="text-slate-300 text-sm flex items-start gap-2">
                                                <span className="text-blue-400 mt-1 flex-shrink-0">▸</span>
                                                {h}
                                            </li>
                                        ))}
                                    </ul>

                                    {/* 教學現場照片 */}
                                    {experiencePhotos[`${exp.year}-${exp.date}`] && (
                                        <div className="mt-4 pt-4 border-t border-slate-700/30">
                                            <p className="text-slate-400 text-xs mb-3 flex items-center gap-1">
                                                <Camera size={12} /> 活動紀錄
                                            </p>
                                            <div className="grid grid-cols-2 gap-3">
                                                {experiencePhotos[`${exp.year}-${exp.date}`].map((photo, pi) => (
                                                    <div
                                                        key={pi}
                                                        className="rounded-lg overflow-hidden border border-slate-700/50 cursor-pointer hover:border-blue-500/50 transition-colors"
                                                        onClick={(e) => { e.stopPropagation(); setLightbox(`${import.meta.env.BASE_URL}${photo.src}`); }}
                                                    >
                                                        <img
                                                            src={`${import.meta.env.BASE_URL}${photo.src}`}
                                                            alt={photo.alt}
                                                            className="w-full h-32 sm:h-40 object-cover hover:scale-105 transition-transform duration-300"
                                                        />
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    )}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>

            {/* Certifications & Education */}
            <div className="grid md:grid-cols-2 gap-12">

                {/* Certifications */}
                <div>
                    <h2 className="text-2xl font-bold mb-8 text-white flex items-center gap-3">
                        <Award className="text-yellow-500" />
                        專業認證
                    </h2>
                    <div className="space-y-6">
                        {certifications.map((cert, i) => {
                            const certImage = cert.title.includes('Level 2')
                                ? 'images/cert-n8n-level2.png'
                                : cert.title.includes('Level 1')
                                    ? 'images/cert-n8n-level1.png'
                                    : cert.title.includes('生成式 AI')
                                        ? 'images/cert-iii-genai.png'
                                        : cert.title.includes('嘉惠學子')
                                            ? 'images/cert-soochow.png'
                                            : null;
                            return (
                                <div key={i} className="flex gap-4 relative">
                                    <div className="flex-shrink-0 mt-1">
                                        <div className="w-8 h-8 rounded-full bg-slate-800 border border-slate-600 flex items-center justify-center text-yellow-500">
                                            <Award size={16} />
                                        </div>
                                        {i !== certifications.length - 1 && (
                                            <div className="w-0.5 h-full bg-slate-800 absolute left-4 top-8 -z-10"></div>
                                        )}
                                    </div>
                                    <div className="flex-grow">
                                        <h3 className="text-lg font-bold text-white">{cert.title}</h3>
                                        <div className="flex items-center gap-2 text-sm text-slate-400 mb-2">
                                            <span>{cert.issuer}</span>
                                            <span>•</span>
                                            <span>{cert.date}</span>
                                        </div>
                                        <p className="text-slate-400 text-sm leading-relaxed">{cert.desc}</p>
                                        {certImage && (
                                            <div
                                                className="mt-3 rounded-lg overflow-hidden border border-slate-700/50 cursor-pointer hover:border-yellow-500/50 transition-colors inline-block"
                                                onClick={() => setLightbox(`${import.meta.env.BASE_URL}${certImage}`)}
                                            >
                                                <img
                                                    src={`${import.meta.env.BASE_URL}${certImage}`}
                                                    alt={cert.title}
                                                    className="h-28 w-auto object-cover hover:scale-105 transition-transform duration-300"
                                                />
                                            </div>
                                        )}
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                    {/* Training */}
                    <div className="mt-8 p-4 bg-slate-800/50 rounded-xl border border-slate-700/50">
                        <h4 className="text-sm font-semibold text-slate-300 mb-3">📚 職訓局課程 (2024-2025)</h4>
                        <div className="flex flex-wrap gap-2">
                            {trainings.map((t, i) => (
                                <span key={i} className="text-xs bg-slate-900 text-slate-400 px-2 py-1 rounded-md">
                                    {t}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Education */}
                <div>
                    <h2 className="text-2xl font-bold mb-8 text-white flex items-center gap-3">
                        <GraduationCap className="text-blue-400" />
                        學歷
                    </h2>
                    {education.map((edu, i) => (
                        <div key={i} className="bg-slate-800 border border-slate-700 rounded-xl p-6">
                            <h3 className="text-xl font-bold text-white mb-1">{edu.school}</h3>
                            <p className="text-slate-300 mb-2">{edu.department}</p>
                            <span className="text-blue-400 text-sm">{edu.period}</span>
                        </div>
                    ))}

                    {/* Stats */}
                    <div className="mt-8 grid grid-cols-2 gap-4">
                        <div className="bg-gradient-to-br from-blue-600/20 to-blue-500/5 rounded-xl p-5 border border-blue-500/20 text-center">
                            <div className="text-3xl font-bold text-blue-400 mb-1">33+</div>
                            <div className="text-slate-400 text-sm">自動化作品</div>
                        </div>
                        <div className="bg-gradient-to-br from-red-600/20 to-red-500/5 rounded-xl p-5 border border-red-500/20 text-center">
                            <div className="text-3xl font-bold text-red-400 mb-1">9+</div>
                            <div className="text-slate-400 text-sm">演講場次</div>
                        </div>
                        <div className="bg-gradient-to-br from-green-600/20 to-green-500/5 rounded-xl p-5 border border-green-500/20 text-center">
                            <div className="text-3xl font-bold text-green-400 mb-1">800+</div>
                            <div className="text-slate-400 text-sm">影響學員</div>
                        </div>
                        <div className="bg-gradient-to-br from-yellow-600/20 to-yellow-500/5 rounded-xl p-5 border border-yellow-500/20 text-center">
                            <div className="text-3xl font-bold text-yellow-400 mb-1">5</div>
                            <div className="text-slate-400 text-sm">專業認證</div>
                        </div>
                    </div>
                </div>

            </div>

            {/* Lightbox Modal */}
            {lightbox && (
                <div
                    className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4 cursor-pointer"
                    onClick={() => setLightbox(null)}
                >
                    <button
                        className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors"
                        onClick={() => setLightbox(null)}
                    >
                        <X size={32} />
                    </button>
                    <img
                        src={lightbox}
                        alt="放大檢視"
                        className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl"
                        onClick={(e) => e.stopPropagation()}
                    />
                </div>
            )}
        </section>
    );
};

export default Experience;
