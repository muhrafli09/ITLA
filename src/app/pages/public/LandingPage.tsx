import React from 'react';
import { useNavigate } from 'react-router';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '../../components/design-system/Card';
import { Button } from '../../components/design-system/Button';
import { CheckCircle2, Users, FileText, Calendar, ArrowRight, ShieldCheck, Clock, ChevronRight } from 'lucide-react';
import { announcements, events } from '../../lib/mock-data';
import { formatDate } from '../../lib/utils';

export function LandingPage() {
  const navigate = useNavigate();

  const benefits = [
    {
      icon: CheckCircle2,
      badge: "Resmi",
      title: 'Sertifikat Keanggotaan',
      description: 'Dapatkan sertifikat resmi sebagai anggota ITLA yang diakui secara nasional',
    },
    {
      icon: FileText,
      badge: "Kredibel",
      title: 'Surat Rekomendasi',
      description: 'Ajukan surat rekomendasi untuk keperluan visa, pekerjaan, atau kegiatan profesional',
    },
    {
      icon: Users,
      badge: "Komunitas",
      title: 'Networking & Forum',
      description: 'Akses ke direktori anggota dan forum diskusi untuk memperluas jaringan',
    },
    {
      icon: Calendar,
      badge: "Eksklusif",
      title: 'Event & Pelatihan',
      description: 'Diskon khusus untuk seminar, workshop, dan pelatihan resmi ITLA',
    },
  ];

  const howItWorks = [
    { step: '1', title: 'Pendaftaran Akun', time: '5 Menit', description: 'Isi formulir pendaftaran secara online dan lengkapi dokumen yang diperlukan dengan aman.' },
    { step: '2', title: 'Proses Verifikasi', time: '1-2 Hari Kerja', description: 'Tim admin ITLA Pusat akan meninjau dan memverifikasi data serta kelengkapan dokumen Anda.' },
    { step: '3', title: 'Keanggotaan Aktif', time: 'Instan', description: 'Setelah disetujui, akun Anda aktif dan dapat langsung menikmati seluruh manfaat layanan ITLA.' },
  ];

  return (
    <div className="min-h-screen bg-[#F8F9FA] text-foreground font-sans">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-white border-b border-border/40">
        {/* Subtle mesh/radial gradient background */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-[20%] -right-[10%] w-[70%] h-[70%] rounded-full bg-primary/5 blur-[120px]" />
          <div className="absolute -bottom-[20%] -left-[10%] w-[60%] h-[60%] rounded-full bg-blue-500/5 blur-[100px]" />
        </div>

        <div className="container mx-auto px-4 py-24 md:py-32 relative z-10 max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="text-left space-y-8">
              <div className="flex items-center gap-4 mb-6">
                <img src="/logo.png" alt="ITLA Logo" className="h-16 w-auto" />
              </div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium">
                <span>Integrity – Transparency – Loyalty – Accountability</span>
              </div>

              <div className="space-y-4">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 leading-[1.15]">
                  Indonesia Tour Leader Association <br />
                  <span className="text-primary">ITLA</span>
                </h1>
                <p className="text-lg md:text-xl text-slate-600 max-w-[600px] leading-relaxed">
                  Rumah bersama bagi para tour leader dari seluruh penjuru Indonesia dan mancanegara untuk tumbuh, berbagi, dan berkontribusi bagi pariwisata yang berkualitas dan berkelanjutan.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button
                  size="lg"
                  onClick={() => navigate('/daftar')}
                  className="h-14 px-8 text-base font-semibold shadow-lg shadow-primary/20 hover:shadow-primary/30 transition-all hover:-translate-y-0.5"
                >
                  Daftar Anggota
                  <ArrowRight className="h-5 w-5 ml-2" />
                </Button>
              </div>

              {/* Trust Indicators */}
              <div className="flex items-center gap-6 pt-6 border-t border-border/50">
                <div className="flex items-center gap-2">
                  <div className="text-sm font-medium text-slate-600">
                    <span className="text-slate-900 font-bold">1.000+</span> Anggota Terdaftar
                  </div>
                </div>
                <div className="w-1 h-1 rounded-full bg-slate-300" />
                <div className="flex flex-col">
                  <span className="text-sm font-bold text-slate-900 flex items-center gap-1"><ShieldCheck className="w-4 h-4 text-green-600" /> Terverifikasi</span>
                  <span className="text-xs text-slate-500">Proses Cepat & Resmi</span>
                </div>
              </div>
            </div>

            {/* Right Content - Visual */}
            <div className="relative hidden lg:block">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-slate-200/50 border border-slate-100 bg-white p-2">
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-transparent opacity-50 z-10 rounded-2xl" />
                <img
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop"
                  alt="Kegiatan Profesional"
                  className="w-full h-auto rounded-xl object-cover object-center relative z-0 aspect-[4/3]"
                />

                {/* Floating Element */}
                <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-xl border border-border/50 z-20 flex items-center gap-4 transition-transform hover:-translate-y-1">
                  <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-slate-900">100% Kredibel</div>
                    <div className="text-xs text-slate-500">Sertifikasi Resmi</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 bg-[#F8F9FA]">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 tracking-tight">Manfaat Menjadi Anggota</h2>
            <p className="text-slate-600 text-lg">
              Bergabunglah bersama kami dan nikmati berbagai fasilitas eksklusif untuk mendukung karir profesional Anda.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 xl:gap-8">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <Card key={index} className="bg-white border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group overflow-hidden rounded-xl border">
                  <CardContent className="p-8">
                    <div className="flex justify-between items-start mb-6">
                      <div className="h-14 w-14 rounded-full bg-primary/10 text-primary flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors duration-300 shadow-inner">
                        <Icon className="h-7 w-7" />
                      </div>
                      <span className="text-xs font-semibold px-3 py-1 rounded-full bg-slate-100 text-slate-600 group-hover:bg-primary/10 group-hover:text-primary transition-colors">
                        {benefit.badge}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-3">{benefit.title}</h3>
                    <p className="text-base text-slate-600 leading-relaxed">{benefit.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-24 bg-white border-y border-border/40">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center max-w-2xl mx-auto mb-20">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 tracking-tight">Cara Bergabung</h2>
            <p className="text-slate-600 text-lg">
              Tiga langkah sederhana untuk menjadi bagian dari keanggotaan Ikatan Penerjemah Indonesia.
            </p>
          </div>

          <div className="relative max-w-5xl mx-auto">
            {/* Horizontal Connector Line (Hidden on mobile) */}
            <div className="hidden md:block absolute top-[44px] left-[15%] right-[15%] h-[2px] bg-slate-100">
              <div className="absolute top-0 left-0 h-full bg-primary/30 w-full" />
            </div>

            <div className="grid md:grid-cols-3 gap-12 relative">
              {howItWorks.map((item, index) => (
                <div key={item.step} className="relative z-10 flex flex-col items-center text-center group mt-8 md:mt-0">
                  <div className="w-24 h-24 rounded-full bg-white border-4 border-slate-50 shadow-lg shadow-slate-200/50 flex items-center justify-center text-3xl font-black text-slate-300 mb-6 group-hover:border-primary group-hover:text-primary transition-all duration-300">
                    {item.step}
                  </div>
                  <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-500 bg-slate-100 px-3 py-1 rounded-full mb-4 group-hover:bg-primary/10 group-hover:text-primary transition-colors">
                    <Clock className="w-3.5 h-3.5" />
                    {item.time}
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
                  <p className="text-base text-slate-600 leading-relaxed max-w-[280px]">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Announcements Section */}
      <section className="py-24 bg-[#F8F9FA]">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="flex flex-col sm:flex-row items-center justify-between mb-12 gap-6">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-2 tracking-tight">Pengumuman Terbaru</h2>
              <p className="text-slate-600">Berita dan pembaruan terkini dari portal resmi ITLA Pusat.</p>
            </div>
            <Button variant="outline" className="group border-slate-300" onClick={() => navigate('/pengumuman')}>
              Lihat Semua Pengumuman
              <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {announcements.map((announcement) => (
              <Card key={announcement.id} className="bg-white border-slate-100 shadow-sm hover:shadow-lg transition-all duration-300 rounded-xl overflow-hidden group cursor-pointer flex flex-col border" onClick={() => navigate('/pengumuman')}>
                <CardHeader className="bg-white border-b border-slate-50 pb-4">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-bold tracking-wider uppercase text-primary bg-primary/10 px-3 py-1 rounded-md">
                      {announcement.category}
                    </span>
                    <span className="text-xs text-slate-500 font-medium">
                      {formatDate(announcement.date)}
                    </span>
                  </div>
                  <CardTitle className="text-lg font-bold text-slate-900 group-hover:text-primary transition-colors line-clamp-2 leading-snug">
                    {announcement.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-4 flex-1">
                  <CardDescription className="text-slate-600 line-clamp-3 text-base">
                    {announcement.excerpt}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Events Section */}
      <section className="py-24 bg-white border-t border-border/40">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="flex flex-col sm:flex-row items-center justify-between mb-12 gap-6">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-2 tracking-tight">Event Mendatang</h2>
              <p className="text-slate-600">Jadwal kegiatan resmi untuk anggota</p>
            </div>
            <Button variant="outline" className="group border-slate-300" onClick={() => navigate('/event')}>
              Lihat Semua Event
              <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>

          <div className="space-y-6">
            {events.map((event) => (
              <Card key={event.id} className="bg-white border border-slate-100 shadow-sm hover:shadow-md transition-all duration-300 rounded-xl group overflow-hidden">
                <CardHeader className="p-6">
                  <div className="flex flex-col md:flex-row md:items-start justify-between gap-6">
                    <div className="flex-1">
                      <CardTitle className="text-xl font-bold text-slate-900 group-hover:text-primary transition-colors mb-2">{event.title}</CardTitle>
                      <CardDescription className="text-slate-600 text-base mb-4 line-clamp-2">{event.description}</CardDescription>
                      <div className="flex flex-wrap items-center gap-4 text-sm font-medium text-slate-600 bg-slate-50 py-2 px-3 rounded-lg border border-slate-100 w-fit">
                        <span className="flex items-center gap-1.5"><Calendar className="w-4 h-4 text-primary" /> {formatDate(event.date)}</span>
                        <span className="w-1 h-1 rounded-full bg-slate-300 hidden sm:block" />
                        <span className="flex items-center gap-1.5 text-slate-500">📍 {event.location}</span>
                      </div>
                    </div>
                    {event.registrationOpen && (
                      <Button className="shrink-0 w-full md:w-auto shadow-sm shadow-primary/20 hover:-translate-y-0.5 transition-transform" onClick={() => navigate('/event')}>
                        Daftar Event
                      </Button>
                    )}
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#1a2332] text-white py-16 border-t border-primary/20">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
            <div className="space-y-4">
              <div className="flex items-center gap-3 mb-6">
                <img src="/logo.png" alt="ITLA Logo" className="h-12 w-auto" />
                <h4 className="font-bold text-xl tracking-tight">ITLA Pusat</h4>
              </div>
              <p className="text-slate-400 text-sm leading-relaxed max-w-xs">
                Platform resmi Ikatan Penerjemah Indonesia untuk layanan keanggotaan dan informasi kegiatan secara nasional.
              </p>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-6 text-white tracking-tight">Navigasi Utama</h4>
              <ul className="space-y-3 text-sm text-slate-400">
                <li><a href="/pengumuman" className="hover:text-white hover:translate-x-1 transition-all inline-block">Pengumuman & Berita</a></li>
                <li><a href="/event" className="hover:text-white hover:translate-x-1 transition-all inline-block">Jadwal Event</a></li>
                <li><a href="/kontak" className="hover:text-white hover:translate-x-1 transition-all inline-block">Hubungi Kami</a></li>
                <li><a href="/faq" className="hover:text-white hover:translate-x-1 transition-all inline-block">Pusat Bantuan (FAQ)</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-6 text-white tracking-tight">Layanan Anggota</h4>
              <ul className="space-y-3 text-sm text-slate-400">
                <li><a href="/daftar" className="hover:text-white hover:translate-x-1 transition-all inline-block">Pendaftaran Baru</a></li>
                <li><a href="/masuk" className="hover:text-white hover:translate-x-1 transition-all inline-block">Login Portal</a></li>
                <li><a href="/status-pendaftaran" className="hover:text-white hover:translate-x-1 transition-all inline-block">Cek Status Registrasi</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-6 text-white tracking-tight">Kontak Resmi</h4>
              <ul className="space-y-4 text-sm text-slate-400">
                <li className="flex items-start gap-3">
                  <div className="mt-1 bg-white/10 p-1.5 rounded-md"><FileText className="w-4 h-4 text-white" /></div>
                  <div>
                    <div className="text-white font-medium mb-0.5">Email</div>
                    <span>info@itla.id</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="mt-1 bg-white/10 p-1.5 rounded-md"><ShieldCheck className="w-4 h-4 text-white" /></div>
                  <div>
                    <div className="text-white font-medium mb-0.5">Telepon</div>
                    <span>(021) 1234-5678</span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between text-sm text-slate-500">
            <p>© {new Date().getFullYear()} ITLA Pusat. Hak cipta dilindungi.</p>
            <div className="flex gap-4 mt-4 md:mt-0">
              <a href="#" className="hover:text-white transition-colors">Syarat & Ketentuan</a>
              <span className="text-slate-700">|</span>
              <a href="#" className="hover:text-white transition-colors">Kebijakan Privasi</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
