

import { onAuthStateChanged } from 'firebase/auth';
import React, { createContext, useContext, useEffect, useState, type ReactNode } from 'react';
import { auth } from '../services/firebaseConfig';

type AuthContextType = {
    signed: boolean;
    loading?: boolean;
    user: UserProps | null;
    handleInfoUser: (user: UserProps) => void;
}

interface UserProps {
    uid: string;
    name?: string | null;
    email: string | null;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
};



const AuthProvider = ({ children }: { children: ReactNode }) => {

    const [user, setUser] = useState<UserProps | null>(null);
    const [loading, setLoading] = useState(true);


    const handleInfoUser = ({ name, email, uid }: UserProps) => {

        setUser({
            uid,
            name,
            email
        })

    }
    useEffect(() => {
        const unsub = onAuthStateChanged(auth, (user) => {
            if (user) {
                const { displayName, email, uid } = user;
                setUser({
                    uid,
                    name: displayName,
                    email
                });

            } else {
                setUser(null);
            }
            setLoading(false);
        });
        return () => unsub();
    }, []);

    return (
        <AuthContext.Provider value={{ signed: !!user, loading, user, handleInfoUser }}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;