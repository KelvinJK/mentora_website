'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '@/lib/firebase';
import { TeamMember } from '@/types';

const MOCK_TEAM: TeamMember[] = [
    {
        id: '1',
        name: 'Regina Mlay',
        role: 'Chief Executive Officer (CEO)',
        imageUrl: '/images/team/regina.jpg',
        bio: 'Vision, Strategy & Ecosystem Leadership. Leads Mentora’s overall direction, partnerships, and national scaling strategy.',
    },
    {
        id: '2',
        name: 'Faith Mwasabwite',
        role: 'Chief Technology Officer (CTO)',
        imageUrl: '/images/team/faith.jpg',
        bio: 'AI & Platform Architecture Lead. Responsible for Mentora’s core technology, AI systems, and platform scalability.',
    },
    {
        id: '3',
        name: 'Emmanuel Silayo',
        role: 'Head of Engineering',
        imageUrl: '/images/team/emmanuel.jpg',
        bio: 'Oversees the development lifecycle, ensuring the platform architecture is robust, scalable, and secure.',
    },
    {
        id: '4',
        name: 'Simon Flavian',
        role: 'Head of Product & Learning Design',
        imageUrl: '/images/team/simon.jpg',
        bio: 'Curriculum & Pedagogical Intelligence. Ensures Mentora aligns deeply with Tanzania’s CBC and delivers real classroom value.',
    },
    {
        id: '5',
        name: 'Angel Msechu',
        role: 'Operations & Growth Manager',
        imageUrl: '/images/team/angel.jpg',
        bio: 'Systems, Implementation & Scaling. Turns strategy into execution and ensures Mentora runs efficiently across pilots, schools, and partners.',
    },
    {
        id: '6',
        name: 'Christina Haule',
        role: 'Communications & Community Lead',
        imageUrl: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Christina',
        bio: 'Brand, Teacher Engagement & Adoption. Builds Mentora’s public presence and teacher loyalty.',
    },
];

export default function TeamGrid() {
    const [team, setTeam] = useState<TeamMember[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // PERF FIX: Using static data directly for instant loading. 
        // Firestore fetch removed to prevent "loading..." delays.
        setTeam(MOCK_TEAM);
        setLoading(false);
    }, []);

    if (loading) {
        return <div className="text-center py-20">Loading team...</div>;
    }

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member) => (
                <div key={member.id} className="bg-white rounded-xl shadow-lg shadow-purple-100 p-6 hover:-translate-y-2 transition-transform duration-300 flex flex-col items-center text-center">
                    <div className="w-32 h-32 rounded-full bg-gradient-to-br from-fuchsia-100 to-violet-100 mb-4 overflow-hidden relative">
                        <Image
                            src={member.imageUrl}
                            alt={member.name}
                            fill
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            className="object-cover"
                        />
                    </div>
                    <h3 className="text-xl font-bold text-slate-800">{member.name}</h3>
                    <p className="text-fuchsia-600 font-medium mb-2">{member.role}</p>
                    <p className="text-slate-500 text-sm">{member.bio}</p>
                </div>
            ))}
        </div>
    );
}
