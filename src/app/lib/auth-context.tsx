import React, { createContext, useContext, useState, ReactNode } from 'react';

type UserRole = 'guest' | 'member' | 'admin';
type MemberStatus = 'MENUNGGU_VERIFIKASI' | 'DITOLAK' | 'AKTIF' | 'NONAKTIF' | 'KEDALUWARSA';

interface User {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  memberStatus?: MemberStatus;
  membershipExpiry?: string;
  registrationDate?: string;
  rejectionReason?: string;
}

interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
  register: (data: any) => Promise<void>;
  updateUserStatus: (status: MemberStatus, expiryDate?: string) => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(() => {
    // Check localStorage for persisted user
    const stored = localStorage.getItem('itla_user');
    return stored ? JSON.parse(stored) : null;
  });

  const login = async (email: string, password: string) => {
    // Mock login - check predefined users
    if (email === 'admin@itla.id' && password === 'admin123') {
      const adminUser: User = {
        id: 'admin-1',
        name: 'Admin ITLA',
        email: 'admin@itla.id',
        role: 'admin',
      };
      setUser(adminUser);
      localStorage.setItem('itla_user', JSON.stringify(adminUser));
    } else if (email === 'anggota@test.com' && password === 'test123') {
      const memberUser: User = {
        id: 'member-1',
        name: 'Budi Santoso',
        email: 'anggota@test.com',
        role: 'member',
        memberStatus: 'AKTIF',
        membershipExpiry: '2026-12-31',
        registrationDate: '2025-01-15',
      };
      setUser(memberUser);
      localStorage.setItem('itla_user', JSON.stringify(memberUser));
    } else if (email === 'pending@test.com' && password === 'test123') {
      const pendingUser: User = {
        id: 'member-2',
        name: 'Siti Nurhaliza',
        email: 'pending@test.com',
        role: 'member',
        memberStatus: 'MENUNGGU_VERIFIKASI',
        registrationDate: '2026-02-15',
      };
      setUser(pendingUser);
      localStorage.setItem('itla_user', JSON.stringify(pendingUser));
    } else {
      throw new Error('Email atau kata sandi salah');
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('itla_user');
  };

  const register = async (data: any) => {
    // Mock registration - create pending user
    const newUser: User = {
      id: `member-${Date.now()}`,
      name: data.name,
      email: data.email,
      role: 'member',
      memberStatus: 'MENUNGGU_VERIFIKASI',
      registrationDate: new Date().toISOString().split('T')[0],
    };
    setUser(newUser);
    localStorage.setItem('itla_user', JSON.stringify(newUser));
  };

  const updateUserStatus = (status: MemberStatus, expiryDate?: string) => {
    if (user) {
      const updatedUser = { 
        ...user, 
        memberStatus: status,
        ...(expiryDate && { membershipExpiry: expiryDate })
      };
      setUser(updatedUser);
      localStorage.setItem('itla_user', JSON.stringify(updatedUser));
    }
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, register, updateUserStatus }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within AuthProvider');
  }
  return context;
}
