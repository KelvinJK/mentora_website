'use client';

import { createContext, useContext, useEffect, useState, ReactNode } from 'react';
import { User, onAuthStateChanged } from 'firebase/auth';
import { auth, db } from '@/lib/firebase';
import { MentoraUser } from '@/types';
import { initializeUserRecord } from '@/lib/userUtils';
import { doc, onSnapshot } from 'firebase/firestore';

interface AuthContextType {
  user: User | null;
  mentoraUser: MentoraUser | null;
  loading: boolean;
}

const AuthContext = createContext<AuthContextType>({
  user: null,
  mentoraUser: null,
  loading: true,
});

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [mentoraUser, setMentoraUser] = useState<MentoraUser | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribeAuth = onAuthStateChanged(auth, async (currentUser) => {
      setUser(currentUser);
      
      if (currentUser) {
        // Subscribe to MentoraUser document in Firestore to catch tier upgrades instantly
        const userRef = doc(db, 'users', currentUser.uid);
        const unsubscribeDoc = onSnapshot(userRef, (docSnap) => {
          if (docSnap.exists()) {
            const data = docSnap.data() as MentoraUser;
            setMentoraUser({
              ...data,
              trialStartDate: data.trialStartDate?.toDate ? data.trialStartDate.toDate() : data.trialStartDate,
              subscriptionExpiresAt: data.subscriptionExpiresAt?.toDate ? data.subscriptionExpiresAt.toDate() : data.subscriptionExpiresAt,
            });
            setLoading(false);
          } else {
            // User authenticated but no Firestore document — create it with a trial
            initializeUserRecord(currentUser).then((newUser) => {
              setMentoraUser(newUser);
              setLoading(false);
            }).catch(() => {
              setMentoraUser(null);
              setLoading(false);
            });
          }
        });
        
        return () => unsubscribeDoc();
      } else {
        setMentoraUser(null);
        setLoading(false);
      }
    });

    return () => unsubscribeAuth();
  }, []);

  return (
    <AuthContext.Provider value={{ user, mentoraUser, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
