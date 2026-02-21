import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router';
import {
  LayoutDashboard,
  CheckCircle,
  User,
  FileText,
  CreditCard,
  Bell,
  LogOut,
  UserCheck,
  Wallet,
  FileCheck,
  Settings,
  Users,
} from 'lucide-react';
import { useAuth } from '../../lib/auth-context';
import { Button } from '../design-system/Button';
import { cn } from '../../lib/utils';

interface SidebarProps {
  type: 'member' | 'admin';
}

export function Sidebar({ type }: SidebarProps) {
  const location = useLocation();
  const navigate = useNavigate();
  const { user, logout } = useAuth();

  // Anggota: Dashboard, Pusat Status, Profil, Ajukan Surat, Perpanjang, Pengumuman
  const memberLinks = [
    { to: '/anggota', icon: LayoutDashboard, label: 'Dashboard' },
    { to: '/anggota/pusat-status', icon: CheckCircle, label: 'Pusat Status' },
    { to: '/anggota/profil', icon: User, label: 'Profil' },
    { to: '/anggota/ajukan-surat', icon: FileText, label: 'Ajukan Surat' },
    { to: '/anggota/perpanjang', icon: CreditCard, label: 'Perpanjang' },
    { to: '/anggota/pengumuman', icon: Bell, label: 'Pengumuman' },
  ];

  // Admin: Dashboard, Verifikasi Pendaftaran, Validasi Pembayaran, Validasi Surat, Kelola Konten
  const adminLinks = [
    { to: '/admin', icon: LayoutDashboard, label: 'Dashboard' },
    { to: '/admin/verifikasi-pendaftaran', icon: UserCheck, label: 'Verifikasi Pendaftaran' },
    { to: '/admin/validasi-pembayaran', icon: Wallet, label: 'Validasi Pembayaran' },
    { to: '/admin/validasi-surat', icon: FileCheck, label: 'Validasi Surat' },
    { to: '/admin/kelola-anggota', icon: Users, label: 'Kelola Anggota' },
    { to: '/admin/kelola-konten', icon: Settings, label: 'Kelola Konten' },
  ];

  const links = type === 'member' ? memberLinks : adminLinks;

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <aside className="w-64 h-screen bg-sidebar text-sidebar-foreground border-r border-sidebar-border flex flex-col sticky top-0">
      {/* Logo */}
      <div className="p-6 border-b border-sidebar-border">
        <Link to="/" className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-lg bg-sidebar-primary flex items-center justify-center text-sidebar-primary-foreground font-bold">
            I
          </div>
          <div className="flex flex-col">
            <span className="font-semibold">ITLA Pusat</span>
            <span className="text-xs text-sidebar-foreground/70">
              {type === 'admin' ? 'Admin' : 'Anggota'}
            </span>
          </div>
        </Link>
      </div>

      {/* User Info */}
      {user && (
        <div className="p-4 border-b border-sidebar-border">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-full bg-sidebar-accent flex items-center justify-center">
              <User className="h-5 w-5" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium truncate">{user.name}</p>
              <p className="text-xs text-sidebar-foreground/70 truncate">{user.email}</p>
            </div>
          </div>
        </div>
      )}

      {/* Navigation */}
      <nav className="flex-1 overflow-y-auto p-4">
        <ul className="space-y-1">
          {links.map((link) => {
            const isActive = location.pathname === link.to;
            const Icon = link.icon;

            return (
              <li key={link.to}>
                <Link
                  to={link.to}
                  className={cn(
                    'flex items-center gap-3 px-3 py-2 rounded-lg text-sm transition-colors',
                    isActive
                      ? 'bg-sidebar-primary text-sidebar-primary-foreground'
                      : 'hover:bg-sidebar-accent text-sidebar-foreground/90 hover:text-sidebar-foreground'
                  )}
                >
                  <Icon className="h-5 w-5 flex-shrink-0" />
                  <span>{link.label}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* Logout */}
      <div className="p-4 border-t border-sidebar-border">
        <Button
          variant="ghost"
          className="w-full justify-start text-sidebar-foreground hover:bg-sidebar-accent"
          onClick={handleLogout}
        >
          <LogOut className="h-5 w-5 mr-3" />
          Keluar
        </Button>
      </div>
    </aside>
  );
}
