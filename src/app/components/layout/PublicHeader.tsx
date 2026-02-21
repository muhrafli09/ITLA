import React from 'react';
import { Link, useNavigate } from 'react-router';
import { Button } from '../design-system/Button';
import { useAuth } from '../../lib/auth-context';

export function PublicHeader() {
  const navigate = useNavigate();
  const { user } = useAuth();

  return (
    <header className="sticky top-0 z-40 w-full border-b border-border bg-background/95 backdrop-blur">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-lg bg-primary flex items-center justify-center text-primary-foreground font-bold">
              I
            </div>
            <span className="font-semibold text-lg">ITLA Pusat</span>
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            <Link to="/" className="text-sm hover:text-primary transition-colors">
              Beranda
            </Link>
            <Link to="/pengumuman" className="text-sm hover:text-primary transition-colors">
              Pengumuman
            </Link>
            <Link to="/event" className="text-sm hover:text-primary transition-colors">
              Event
            </Link>
            <Link to="/kontak" className="text-sm hover:text-primary transition-colors">
              Kontak
            </Link>
            <Link to="/faq" className="text-sm hover:text-primary transition-colors">
              FAQ
            </Link>
          </nav>

          {/* CTA Buttons */}
          <div className="flex items-center gap-3">
            {user ? (
              <Button onClick={() => navigate(user.role === 'admin' ? '/admin' : '/anggota')}>
                {user.role === 'admin' ? 'Dashboard Admin' : 'Dashboard Anggota'}
              </Button>
            ) : (
              <>
                <Button variant="outline" size="sm" onClick={() => navigate('/masuk')}>
                  Masuk
                </Button>
                <Button size="sm" onClick={() => navigate('/daftar')}>
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
