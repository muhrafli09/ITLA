import React from 'react';
import { Link, useNavigate, useLocation } from 'react-router';
import { Button } from '../design-system/Button';
import { useAuth } from '../../lib/auth-context';

export function PublicHeader() {
  const navigate = useNavigate();
  const location = useLocation();
  const { user } = useAuth();

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/50 bg-background/80 backdrop-blur-md shadow-sm transition-all duration-300">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="h-9 w-9 rounded-xl bg-primary flex items-center justify-center text-primary-foreground font-bold shadow-sm group-hover:bg-primary/90 transition-colors">
              I
            </div>
            <span className="font-bold text-lg tracking-tight text-slate-900 group-hover:text-primary transition-colors">ITLA Pusat</span>
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {[
              { path: '/', label: 'Beranda' },
              { path: '/pengumuman', label: 'Pengumuman' },
              { path: '/event', label: 'Event' },
              { path: '/kontak', label: 'Kontak' },
              { path: '/faq', label: 'FAQ' },
            ].map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-medium transition-all hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 rounded-sm ${isActive(link.path)
                    ? 'text-primary relative after:absolute after:-bottom-5 after:left-0 after:h-0.5 after:w-full after:bg-primary'
                    : 'text-slate-500 hover:text-slate-900'
                  }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* CTA Buttons */}
          <div className="flex items-center gap-3">
            {user ? (
              <Button onClick={() => navigate(user.role === 'admin' ? '/admin' : '/anggota')} className="shadow-sm font-medium hover:-translate-y-0.5 transition-transform bg-primary">
                {user.role === 'admin' ? 'Dashboard Admin' : 'Dashboard Anggota'}
              </Button>
            ) : (
              <>
                <Button variant="outline" size="sm" onClick={() => navigate('/masuk')} className="font-medium hover:bg-slate-50 border-slate-200 text-slate-700">
                  Masuk Sistem
                </Button>
                <Button size="sm" onClick={() => navigate('/daftar')} className="shadow-sm font-semibold hover:-translate-y-0.5 transition-transform bg-primary px-5">
                  Daftar Anggota
                </Button>
              </>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
