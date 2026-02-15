'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '@/lib/firebase';
import { TeamMember } from '@/types';

const MOCK_TEAM: TeamMember[] = [
    {
        id: '1',
        name: 'Faith',
        role: 'Lead Facilitator',
        imageUrl: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Faith',
        bio: 'Experienced educator passionate about transformative learning.',
    },
    {
        id: '2',
        name: 'Regina',
        role: 'Operations Manager',
        imageUrl: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Regina',
        bio: 'Ensuring smooth delivery of all our programs across regions.',
    },
    {
        id: '3',
        name: 'Emmanuel',
        role: 'Tech Lead',
        imageUrl: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Emmanuel',
        bio: 'Building the digital infrastructure for modern education.',
    },
    {
        id: '4',
        name: 'Jackline',
        role: 'Curriculum Developer',
        imageUrl: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Jackline',
        bio: 'Designing curriculum that meets international standards.',
    },
];

export default function TeamGrid() {
    const [team, setTeam] = useState<TeamMember[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchTeam() {
            try {
                // Build safe-guard: only try to fetch if we have valid config
                // In a real app we'd just try specific collection
                if (!process.env.NEXT_PUBLIC_FIREBASE_API_KEY) {
                    console.warn('Firebase config missing, using mock data');
                    setTeam(MOCK_TEAM);
                    setLoading(false);
                    return;
                }

                const querySnapshot = await getDocs(collection(db, 'team_members'));
                const members: TeamMember[] = [];
                querySnapshot.forEach((doc) => {
                    members.push({ id: doc.id, ...doc.data() } as TeamMember);
                });

                if (members.length === 0) {
                    setTeam(MOCK_TEAM); // Fallback if DB is empty
                } else {
                    setTeam(members);
                }
            } catch (error) {
                console.error('Error fetching team:', error);
                setTeam(MOCK_TEAM); // Fallback on error
            } finally {
                setLoading(false);
            }
        }

        fetchTeam();
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
