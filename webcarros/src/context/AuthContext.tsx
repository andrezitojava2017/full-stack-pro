

import { onAuthStateChanged } from 'firebase/auth';
import React, { createContext, useEffect, useState, type ReactNode } from 'react';
import { auth } from '../services/firebaseConfig';

type AuthContextType = {
    signed: boolean;
    loading?: boolean;
}

interface UserProps {
    uid: string;
    name: string | null;
    email: string | null;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);


interface AuthProviderProps {
    children: ReactNode;
}

const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {

    const [user, setUser] = useState<UserProps | null>(null);
    const [loading, setLoading] = useState(true);

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
        <AuthContext.Provider value={{ signed: !!user }}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;