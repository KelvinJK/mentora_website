'use client';

import { useState } from 'react';
import { Users, BookOpen, Lightbulb, X, ArrowRight, CheckCircle2, Quote } from 'lucide-react';

interface StoryContent {
    headline: string;
    intro: string;
    sections: { title: string; body: string }[];
    quote?: { text: string; author: string; role: string };
    keyTakeaways: string[];
}

interface Story {
    id: string;
    tag: string;
    title: string;
    summary: string;
    content: StoryContent;
    variant: 'fuchsia' | 'violet' | 'blue';
}

const stories: Story[] = [
    {
        id: 'digital-transformation',
        tag: 'CASE STUDY',
        title: 'Digital Transformation in Rural Schools',
        summary: 'How AI tools bridge the resource gap in underserved regions, bringing quality education to all.',
        variant: 'fuchsia',
        content: {
            headline: 'Bridging the Digital Divide: How Mentora Is Transforming Rural Classrooms',
            intro: 'In many rural schools across Tanzania, teachers face an uphill battle — limited resources, outdated materials, and overcrowded classrooms. Yet the desire to learn and the passion to teach remain as strong as ever. Mentora is stepping in to bridge that gap, one school at a time.',
            sections: [
                {
                    title: 'The Challenge',
                    body: 'Rural schools in regions like Dodoma, Singida, and Manyara have long struggled with a shortage of teaching materials, inconsistent curriculum delivery, and minimal access to professional development. Teachers often spend hours preparing lessons manually, leaving less time for actual student engagement. Many rely on handwritten notes, and textbook-to-student ratios remain alarmingly low.'
                },
                {
                    title: 'How Mentora Helps',
                    body: 'Mentora\'s AI-powered platform generates curriculum-aligned lesson plans in minutes, not hours. Teachers can access these plans on any device — even a basic smartphone — meaning that sophisticated teaching tools are no longer reserved for well-funded urban schools. Our offline-first approach ensures that even areas with limited internet connectivity can benefit from Mentora\'s resources.'
                },
                {
                    title: 'Real Impact on the Ground',
                    body: 'In a pilot across 12 rural primary schools in Arusha Region, Mentora reduced teachers\' lesson preparation time by over 60%. Student performance on standardized assessments improved by 23% within the first term of implementation. Perhaps most importantly, teacher confidence and job satisfaction saw a significant boost — educators felt empowered rather than overwhelmed.'
                }
            ],
            quote: {
                text: 'Before Mentora, I spent my evenings writing lesson plans by hand. Now I have more time for my family and I walk into class feeling prepared and confident every morning.',
                author: 'Mwalimu Happiness',
                role: 'Primary School Teacher, Monduli District'
            },
            keyTakeaways: [
                'AI-powered lesson plans reduce preparation time by over 60%',
                'Offline-first design works even in areas with limited connectivity',
                '23% improvement in student assessment scores within one term',
                'Increased teacher confidence and reduced burnout'
            ]
        }
    },
    {
        id: 'cbc-implementation',
        tag: 'PEDAGOGY',
        title: 'Implementing CBC Effectively',
        summary: 'A practical, step-by-step guide for teachers adapting to the new Competency Based Curriculum.',
        variant: 'violet',
        content: {
            headline: 'Navigating the CBC Shift: A Teacher\'s Practical Guide to Competency-Based Learning',
            intro: 'The transition to a Competency-Based Curriculum (CBC) represents one of the most significant shifts in Tanzanian education in decades. It moves away from rote memorization toward practical, skills-based learning. While the vision is transformative, many teachers find the transition challenging without proper guidance and tools.',
            sections: [
                {
                    title: 'Understanding CBC at Its Core',
                    body: 'CBC focuses on what students can do, not just what they know. It emphasizes critical thinking, creativity, collaboration, and communication — the skills students need for the modern world. However, shifting from content-heavy teaching to competency-based delivery requires a fundamental change in how lessons are designed, delivered, and assessed.'
                },
                {
                    title: 'Mentora\'s CBC Compliance Engine',
                    body: 'Mentora\'s platform automatically aligns every generated lesson plan with CBC standards. Teachers don\'t need to cross-reference curriculum documents manually — the AI handles the mapping for them. Each lesson includes clear learning outcomes, suggested activities that develop specific competencies, and assessment criteria that measure real understanding rather than memorization.'
                },
                {
                    title: 'Step-by-Step Classroom Strategies',
                    body: 'Start with an engaging hook — a real-world problem or question that relates to students\' daily lives. Build activities around group work and hands-on projects. Use formative assessments throughout the lesson (not just at the end) to gauge understanding. Let students demonstrate competencies through presentations, portfolios, and practical demonstrations rather than written tests alone.'
                },
                {
                    title: 'Continuous Professional Growth',
                    body: 'Mentora provides weekly micro-learning modules that help teachers build their CBC skills gradually. Each module takes just 15-20 minutes and covers a specific competency area, from designing project-based assessments to facilitating student-led discussions. Teachers can track their professional growth journey directly on the platform.'
                }
            ],
            quote: {
                text: 'CBC seemed overwhelming at first, but Mentora broke it down into manageable steps. Now I see the difference in my students — they are more engaged, more curious, and more confident in applying what they learn.',
                author: 'Mwalimu Joseph',
                role: 'Secondary School Teacher, Tanga Region'
            },
            keyTakeaways: [
                'CBC emphasizes skills and practical application over memorization',
                'Mentora auto-aligns lesson plans with CBC standards',
                'Formative assessment throughout lessons improves learning outcomes',
                'Weekly micro-learning modules support continuous teacher growth'
            ]
        }
    },
    {
        id: 'teacher-wellbeing',
        tag: 'IMPACT',
        title: 'Teacher Wellbeing & Efficiency',
        summary: 'Strategies for reducing burnout by automating administrative burdens and focusing on teaching.',
        variant: 'blue',
        content: {
            headline: 'Putting Teachers First: How Technology Can Restore Joy to Teaching',
            intro: 'Teaching is one of the most rewarding professions — but also one of the most demanding. In Tanzania, many teachers handle classes of 50 to 100 students, prepare lessons without adequate resources, and manage mountains of paperwork. The result? Burnout, frustration, and a loss of the passion that brought them to education in the first place.',
            sections: [
                {
                    title: 'The Burnout Crisis',
                    body: 'Research shows that over 40% of teachers in Sub-Saharan Africa experience significant levels of burnout. The causes are systemic: excessive administrative tasks, large class sizes, inadequate support, and limited professional development opportunities. When teachers are burned out, student outcomes suffer. It is a cycle that demands intervention.'
                },
                {
                    title: 'Reclaiming Time Through Automation',
                    body: 'Mentora automates the most time-consuming aspects of a teacher\'s workload. AI-generated lesson plans, automated grading rubrics, and pre-built assessment templates free up hours each week. Teachers report gaining back an average of 8-10 hours per week — time they can reinvest in meaningful student interactions, personal development, or simply resting and recharging.'
                },
                {
                    title: 'Building a Supportive Community',
                    body: 'Beyond tools, Mentora fosters a community of practice where teachers can share experiences, celebrate wins, and support each other through challenges. Our platform connects educators across regions, breaking the isolation that many rural teachers feel. Peer mentoring, shared lesson libraries, and collaborative planning features create a sense of belonging and shared purpose.'
                },
                {
                    title: 'Measuring What Matters',
                    body: 'Mentora tracks not just student outcomes but teacher wellbeing indicators. Schools using the platform can monitor workload distribution, identify teachers who may need additional support, and celebrate professional growth milestones. This data-driven approach to teacher welfare helps school administrators make informed decisions that protect their most valuable asset — their teachers.'
                }
            ],
            quote: {
                text: 'I used to dread Sunday evenings, knowing the pile of preparation work ahead. With Mentora, I actually look forward to the week. I feel like a teacher again, not an administrator.',
                author: 'Mwalimu Grace',
                role: 'Primary School Head Teacher, Kilimanjaro Region'
            },
            keyTakeaways: [
                'Teachers save 8-10 hours per week through AI automation',
                'Reduced administrative burden leads to higher job satisfaction',
                'Peer community features combat teacher isolation',
                'Data-driven wellbeing tracking helps school administrators provide support'
            ]
        }
    }
];

// Variant styles map — using explicit class names so Tailwind doesn't purge them
const variantStyles = {
    fuchsia: {
        iconBg: 'bg-fuchsia-50',
        iconHoverBg: 'group-hover:bg-fuchsia-100',
        iconTextColor: 'text-fuchsia-500',
        tagColor: 'text-fuchsia-600',
        hoverTextColor: 'group-hover:text-fuchsia-600',
        readMoreColor: 'text-fuchsia-600',
        readMoreHoverColor: 'group-hover:text-fuchsia-700',
        headerGradient: 'from-fuchsia-500 to-fuchsia-600',
        numberBg: 'bg-fuchsia-100',
        numberText: 'text-fuchsia-600',
        quoteBg: 'bg-fuchsia-50',
        quoteIcon: 'text-fuchsia-200',
        quoteAuthor: 'text-fuchsia-700',
        checkIcon: 'text-fuchsia-500',
    },
    violet: {
        iconBg: 'bg-violet-50',
        iconHoverBg: 'group-hover:bg-violet-100',
        iconTextColor: 'text-violet-500',
        tagColor: 'text-violet-600',
        hoverTextColor: 'group-hover:text-violet-600',
        readMoreColor: 'text-violet-600',
        readMoreHoverColor: 'group-hover:text-violet-700',
        headerGradient: 'from-violet-500 to-violet-600',
        numberBg: 'bg-violet-100',
        numberText: 'text-violet-600',
        quoteBg: 'bg-violet-50',
        quoteIcon: 'text-violet-200',
        quoteAuthor: 'text-violet-700',
        checkIcon: 'text-violet-500',
    },
    blue: {
        iconBg: 'bg-blue-50',
        iconHoverBg: 'group-hover:bg-blue-100',
        iconTextColor: 'text-blue-500',
        tagColor: 'text-blue-600',
        hoverTextColor: 'group-hover:text-blue-600',
        readMoreColor: 'text-blue-600',
        readMoreHoverColor: 'group-hover:text-blue-700',
        headerGradient: 'from-blue-500 to-blue-600',
        numberBg: 'bg-blue-100',
        numberText: 'text-blue-600',
        quoteBg: 'bg-blue-50',
        quoteIcon: 'text-blue-200',
        quoteAuthor: 'text-blue-700',
        checkIcon: 'text-blue-500',
    },
};

const iconMap = {
    fuchsia: <Users size={48} />,
    violet: <BookOpen size={48} />,
    blue: <Lightbulb size={48} />,
};

export default function ResourceStories() {
    const [selectedStory, setSelectedStory] = useState<Story | null>(null);

    return (
        <>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {stories.map((story) => {
                    const s = variantStyles[story.variant];
                    return (
                        <div
                            key={story.id}
                            onClick={() => setSelectedStory(story)}
                            className="group cursor-pointer bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 hover:-translate-y-1"
                        >
                            <div className={`aspect-video ${s.iconBg} rounded-xl overflow-hidden mb-6 relative flex items-center justify-center ${s.iconHoverBg} transition-colors`}>
                                <span className={s.iconTextColor}>{iconMap[story.variant]}</span>
                                <div className={`absolute bottom-4 left-4 bg-white px-3 py-1 rounded-full text-xs font-bold ${s.tagColor} shadow-sm`}>
                                    {story.tag}
                                </div>
                            </div>
                            <h3 className={`text-xl font-bold text-slate-800 mb-2 ${s.hoverTextColor} transition-colors`}>
                                {story.title}
                            </h3>
                            <p className="text-slate-500 text-sm mb-4 leading-relaxed">{story.summary}</p>
                            <div className={`flex items-center text-sm font-bold ${s.readMoreColor} ${s.readMoreHoverColor} transition-colors`}>
                                READ MORE <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                            </div>
                        </div>
                    );
                })}
            </div>

            {/* Story Modal */}
            {selectedStory && (() => {
                const s = variantStyles[selectedStory.variant];
                return (
                    <div
                        className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8"
                        onClick={() => setSelectedStory(null)}
                    >
                        {/* Backdrop */}
                        <div className="absolute inset-0 bg-black/60 backdrop-blur-sm animate-fade-in" />

                        {/* Modal Content */}
                        <div
                            className="relative bg-white rounded-3xl shadow-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto animate-slide-up"
                            onClick={(e) => e.stopPropagation()}
                        >
                            {/* Header */}
                            <div className={`sticky top-0 z-10 bg-gradient-to-r ${s.headerGradient} rounded-t-3xl p-8 text-white`}>
                                <button
                                    onClick={() => setSelectedStory(null)}
                                    className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center transition-colors"
                                >
                                    <X size={20} />
                                </button>
                                <div className="inline-flex items-center px-3 py-1 rounded-full bg-white/20 text-sm font-bold mb-4">
                                    {selectedStory.tag}
                                </div>
                                <h2 className="text-2xl md:text-3xl font-bold font-display leading-tight">
                                    {selectedStory.content.headline}
                                </h2>
                            </div>

                            {/* Body */}
                            <div className="p-8">
                                <p className="text-lg text-slate-600 leading-relaxed mb-8 border-l-4 border-fuchsia-200 pl-4 italic">
                                    {selectedStory.content.intro}
                                </p>

                                {selectedStory.content.sections.map((section, idx) => (
                                    <div key={idx} className="mb-8">
                                        <h3 className="text-xl font-bold text-slate-800 mb-3 flex items-center">
                                            <span className={`w-8 h-8 rounded-full ${s.numberBg} ${s.numberText} flex items-center justify-center text-sm font-bold mr-3 flex-shrink-0`}>
                                                {idx + 1}
                                            </span>
                                            {section.title}
                                        </h3>
                                        <p className="text-slate-600 leading-relaxed ml-11">{section.body}</p>
                                    </div>
                                ))}

                                {/* Quote */}
                                {selectedStory.content.quote && (
                                    <div className={`${s.quoteBg} rounded-2xl p-6 mb-8 relative`}>
                                        <Quote size={32} className={`${s.quoteIcon} absolute top-4 left-4`} />
                                        <p className="text-slate-700 italic text-lg leading-relaxed mb-4 pl-8 pt-4">
                                            &ldquo;{selectedStory.content.quote.text}&rdquo;
                                        </p>
                                        <div className="pl-8">
                                            <p className={`font-bold ${s.quoteAuthor}`}>{selectedStory.content.quote.author}</p>
                                            <p className="text-slate-500 text-sm">{selectedStory.content.quote.role}</p>
                                        </div>
                                    </div>
                                )}

                                {/* Key Takeaways */}
                                <div className="bg-slate-50 rounded-2xl p-6">
                                    <h4 className="font-bold text-slate-800 mb-4 text-lg">Key Takeaways</h4>
                                    <ul className="space-y-3">
                                        {selectedStory.content.keyTakeaways.map((takeaway, idx) => (
                                            <li key={idx} className="flex items-start">
                                                <CheckCircle2 size={20} className={`${s.checkIcon} mr-3 flex-shrink-0 mt-0.5`} />
                                                <span className="text-slate-600">{takeaway}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                );
            })()}
        </>
    );
}
