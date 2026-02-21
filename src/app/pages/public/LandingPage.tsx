import React from 'react';
import { useNavigate } from 'react-router';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '../../components/design-system/Card';
import { Button } from '../../components/design-system/Button';
import { CheckCircle, Users, FileText, Calendar, ArrowRight } from 'lucide-react';
import { announcements, events } from '../../lib/mock-data';
import { formatDate } from '../../lib/utils';

export function LandingPage() {
  const navigate = useNavigate();

  const benefits = [
    {
      icon: CheckCircle,
      title: 'Sertifikat Keanggotaan',
      description: 'Dapatkan sertifikat resmi sebagai anggota ITLA yang diakui secara nasional',
    },
    {
      icon: FileText,
      title: 'Surat Rekomendasi',
      description: 'Ajukan surat rekomendasi untuk keperluan visa, pekerjaan, atau kegiatan profesional',
    },
    {
      icon: Users,
      title: 'Networking',
      description: 'Akses ke direktori anggota dan forum diskusi untuk memperluas jaringan profesional',
    },
    {
      icon: Calendar,
      title: 'Event Eksklusif',
      description: 'Diskon khusus untuk seminar, workshop, dan pelatihan yang diselenggarakan ITLA',
    },
  ];

  const howItWorks = [
    { step: '1', title: 'Daftar', description: 'Isi formulir pendaftaran dan upload dokumen yang diperlukan' },
    { step: '2', title: 'Verifikasi', description: 'Tim admin akan memverifikasi data dan dokumen Anda' },
    { step: '3', title: 'Aktif', description: 'Akun Anda aktif dan dapat mengakses semua layanan ITLA' },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary to-primary/80 text-primary-foreground">
        <div className="container mx-auto px-4 py-20">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Selamat Datang di ITLA Pusat
            </h1>
            <p className="text-lg md:text-xl mb-8 text-primary-foreground/90">
              Ikatan Penerjemah Indonesia - Platform resmi untuk penerjemah profesional di Indonesia
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                variant="accent"
                onClick={() => navigate('/daftar')}
              >
                Daftar Anggota
                <ArrowRight className="h-5 w-5 ml-2" />
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
                onClick={() => navigate('/masuk')}
              >
                Masuk
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Manfaat Menjadi Anggota</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <Card key={index}>
                  <CardContent className="pt-6">
                    <div className="h-12 w-12 rounded-lg bg-accent text-accent-foreground flex items-center justify-center mb-4">
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3 className="font-semibold mb-2">{benefit.title}</h3>
                    <p className="text-sm text-muted-foreground">{benefit.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Cara Bergabung</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {howItWorks.map((item) => (
              <div key={item.step} className="text-center">
                <div className="h-16 w-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Announcements Section */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold">Pengumuman Terbaru</h2>
            <Button variant="ghost" onClick={() => navigate('/pengumuman')}>
              Lihat Semua
            </Button>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {announcements.map((announcement) => (
              <Card key={announcement.id}>
                <CardHeader>
                  <div className="text-xs text-accent mb-2">{announcement.category}</div>
                  <CardTitle className="text-base">{announcement.title}</CardTitle>
                  <CardDescription>{announcement.excerpt}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-xs text-muted-foreground">{formatDate(announcement.date)}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Events Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold">Event Mendatang</h2>
            <Button variant="ghost" onClick={() => navigate('/event')}>
              Lihat Semua
            </Button>
          </div>
          <div className="space-y-4 max-w-3xl mx-auto">
            {events.map((event) => (
              <Card key={event.id}>
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <CardTitle>{event.title}</CardTitle>
                      <CardDescription className="mt-2">{event.description}</CardDescription>
                      <div className="flex items-center gap-4 mt-3 text-sm text-muted-foreground">
                        <span>📅 {formatDate(event.date)}</span>
                        <span>📍 {event.location}</span>
                      </div>
                    </div>
                    {event.registrationOpen && (
                      <Button size="sm" variant="accent">Daftar</Button>
                    )}
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h4 className="font-semibold mb-4">ITLA Pusat</h4>
              <p className="text-sm text-primary-foreground/80">
                Ikatan Penerjemah Indonesia
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Menu</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="/pengumuman" className="hover:text-accent transition-colors">Pengumuman</a></li>
                <li><a href="/event" className="hover:text-accent transition-colors">Event</a></li>
                <li><a href="/kontak" className="hover:text-accent transition-colors">Kontak</a></li>
                <li><a href="/faq" className="hover:text-accent transition-colors">FAQ</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Layanan</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="/daftar" className="hover:text-accent transition-colors">Daftar Anggota</a></li>
                <li><a href="/masuk" className="hover:text-accent transition-colors">Masuk</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Kontak</h4>
              <ul className="space-y-2 text-sm text-primary-foreground/80">
                <li>Email: info@itla.id</li>
                <li>Telp: (021) 1234-5678</li>
                <li>Jakarta, Indonesia</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center text-sm text-primary-foreground/80">
            © 2026 ITLA Pusat. Hak cipta dilindungi.
          </div>
        </div>
      </footer>
    </div>
  );
}
