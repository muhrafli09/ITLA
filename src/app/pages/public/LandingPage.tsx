import React from 'react';
import { useNavigate } from 'react-router';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '../../components/design-system/Card';
import { Button } from '../../components/design-system/Button';
import { CheckCircle2, Users, FileText, Calendar, ArrowRight, ShieldCheck, Clock, ChevronRight } from 'lucide-react';
import { announcements, events } from '../../lib/mock-data';
import { formatDate } from '../../lib/utils';
import { SlidingNumber } from '@/components/animate-ui/primitives/texts/sliding-number';
import { FadeIn } from '../../components/ui/FadeIn';
import { Typewriter } from '../../components/ui/Typewriter';
import { AnimatedCard } from '../../components/ui/AnimatedCard';
import { InstagramLogo } from '../../components/ui/InstagramLogo';
import { RadialIntro } from '@/components/animate-ui/RadialIntro';

export function LandingPage() {
  const navigate = useNavigate();

  const benefits = [
    {
      icon: CheckCircle2,
      badge: "Sertifikasi",
      title: 'Sertifikasi & Pelatihan',
      description: 'Program sertifikasi kompetensi sesuai standar BNSP untuk meningkatkan profesionalisme tour leader',
    },
    {
      icon: Users,
      badge: "Komunitas",
      title: 'Komunitas Profesional',
      description: 'Bergabung dengan 427+ anggota aktif dan bangun jaringan dengan sesama profesional pariwisata',
    },
    {
      icon: Calendar,
      badge: "Event",
      title: 'Event & Workshop',
      description: 'Ikuti berbagai event, webinar, dan workshop untuk pengembangan pengetahuan dan keterampilan',
    },
    {
      icon: FileText,
      badge: "Digital",
      title: 'Pustaka Digital',
      description: 'Akses SOP, pedoman, studi kasus, dan riset terbaru untuk mendukung profesi Anda',
    },
  ];

  const partnerLogos = [
    { id: 1, name: 'Kemenparekraf', src: '/Kemenparekraf.png' },
    { id: 2, name: 'Kemenaker', src: '/Kemenaker.png' },
    { id: 3, name: 'Kemenlu', src: '/Kemenlu.svg' },
    { id: 4, name: 'BNSP', src: '/BNSP.png' },
    { id: 5, name: 'Poltekpar NHI', src: '/Poltekpar%20NHI.webp' },
    { id: 6, name: 'Politeknik Bandung', src: '/Politeknik%20Bandung.png' },
    { id: 7, name: 'STIEPAR YAPARI', src: '/STIEPAR%20YAPARI.webp' },
    { id: 8, name: 'ASITA', src: '/Asita.webp' },
    { id: 9, name: 'GIPI', src: '/Gipi.jpg' },
    { id: 10, name: 'HPI', src: '/HPI.webp' },
    { id: 11, name: 'ASPPI', src: '/ASPPI.png' },
    { id: 12, name: 'ASTINDO', src: '/Astindo.png' },
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
              <FadeIn delay={0} direction="up" className="flex items-center gap-4 mb-6">
                <img src="/logo.png" alt="ITLA Logo" className="h-16 w-auto animate-in fade-in zoom-in duration-700" />
              </FadeIn>
              <FadeIn delay={300} direction="up">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium animate-pulse">
                  <span>Integrity – Transparency – Loyalty – Accountability</span>
                </div>
              </FadeIn>

              <div className="space-y-4">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 leading-[1.15]">
                  <Typewriter 
                    text="Wadah Insan TOUR LEADER Profesional Indonesia" 
                    delay={500}
                    speed={80}
                  />
                </h1>
                <FadeIn delay={2000} direction="up">
                  <p className="text-lg md:text-xl text-slate-600 max-w-[600px] leading-relaxed">
                    ITLA adalah badan profesional pertama dan utama untuk pemimpin perjalanan wisata di Indonesia. Kami berdedikasi untuk meningkatkan standar industri pariwisata melalui pendidikan, pelatihan, advokasi, dan kolaborasi.
                  </p>
                </FadeIn>
              </div>

              <FadeIn delay={2500} direction="up">
                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <Button
                    size="lg"
                    onClick={() => navigate('/daftar')}
                    className="h-14 px-8 text-base font-semibold shadow-lg shadow-primary/20 hover:shadow-primary/30 transition-all hover:-translate-y-0.5 relative overflow-hidden group"
                  >
                    <span className="relative z-10 flex items-center">Daftar Anggota
                    <ArrowRight className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" /></span>
                    <div className="absolute inset-0 bg-primary/20 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    onClick={() => navigate('/event')}
                    className="h-14 px-8 text-base font-semibold hover:bg-primary/5 transition-colors"
                  >
                    Lihat Event
                  </Button>
                </div>
              </FadeIn>

              {/* Trust Indicators */}
              <FadeIn delay={3000} direction="up">
                <div className="flex items-center gap-6 pt-6 border-t border-border/50 animate-in fade-in slide-in-from-bottom-4 duration-700">
                  <div className="flex items-center gap-2">
                    <div className="text-sm font-medium text-slate-600">
                      <span className="text-slate-900 font-bold"><SlidingNumber number={427} inView inViewOnce />+</span> Anggota Aktif
                    </div>
                  </div>
                  <div className="w-1 h-1 rounded-full bg-slate-300" />
                  <div className="flex flex-col">
                    <span className="text-sm font-bold text-slate-900 flex items-center gap-1"><ShieldCheck className="w-4 h-4 text-green-600 animate-pulse" /> Sertifikasi BNSP</span>
                    <span className="text-xs text-slate-500">Event Rutin & Kemitraan Strategis</span>
                  </div>
                </div>
              </FadeIn>
            </div>

            {/* Right Content - Visual */}
            <FadeIn delay={1000} direction="right" className="relative hidden lg:block">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-slate-200/50 border border-slate-100 bg-white p-2 animate-in fade-in zoom-in duration-700">
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-transparent opacity-50 z-10 rounded-2xl" />
                <img
                  src="/hero-image.jpg"
                  alt="Kegiatan Profesional"
                  className="w-full h-auto rounded-xl object-cover object-center relative z-0 aspect-[4/3]"
                />

                {/* Floating Element */}
                <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-xl border border-border/50 z-20 flex items-center gap-4 transition-all hover:-translate-y-1 hover:shadow-2xl animate-in fade-in slide-in-from-bottom-8 duration-700 delay-300">
                  <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                    <CheckCircle2 className="w-6 h-6 animate-pulse" />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-slate-900">100% Kredibel</div>
                    <div className="text-xs text-slate-500">Sertifikasi Resmi</div>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 bg-[#F8F9FA]">
        <div className="container mx-auto px-4 max-w-7xl">
          <FadeIn delay={100} direction="up" className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 tracking-tight">Layanan & Keuntungan</h2>
            <p className="text-slate-600 text-lg">
              Mengapa Bergabung dengan ITLA - ITLA menyediakan berbagai layanan dan keuntungan untuk meningkatkan kompetensi dan profesionalisme tour leader Indonesia.
            </p>
          </FadeIn>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 xl:gap-8">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <AnimatedCard key={index} delay={index * 150} direction="up" className="bg-white border-slate-100 shadow-sm group overflow-hidden rounded-xl border hover:shadow-xl transition-all">
                  <CardContent className="p-8">
                    <div className="flex justify-between items-start mb-6">
                      <div className="h-14 w-14 rounded-full bg-primary/10 text-primary flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors duration-300 shadow-inner group-hover:shadow-lg group-hover:scale-110">
                        <Icon className="h-7 w-7" />
                      </div>
                      <span className="text-xs font-semibold px-3 py-1 rounded-full bg-slate-100 text-slate-600 group-hover:bg-primary/10 group-hover:text-primary transition-colors">
                        {benefit.badge}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-primary transition-colors">{benefit.title}</h3>
                    <p className="text-base text-slate-600 leading-relaxed">{benefit.description}</p>
                  </CardContent>
                </AnimatedCard>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-24 bg-white border-y border-border/40">
        <div className="container mx-auto px-4 max-w-7xl">
          <FadeIn delay={100} direction="up" className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 tracking-tight">Dipercaya oleh Institusi & Asosiasi</h2>
            <p className="text-slate-600 text-lg">
              ITLA Pusat bangga menjalin kerjasama dengan berbagai institusi pemerintah, pendidikan, dan asosiasi industri pariwisata.
            </p>
          </FadeIn>

          <div className="flex justify-center">
            <RadialIntro orbitItems={partnerLogos} stageSize={500} imageSize={70} />
          </div>

          {/* Stats */}
          <div className="grid md:grid-cols-4 gap-8 mt-16 pt-16 border-t border-border/40">
            <FadeIn delay={100} direction="up">
              <div className="text-center p-6 rounded-lg bg-slate-50 border border-slate-100 transition-all hover:shadow-md hover:bg-white hover:scale-105 group">
                <div className="text-4xl font-bold text-primary mb-2 group-hover:text-primary/80 transition-colors">
                  <SlidingNumber number={427} inView inViewOnce />+
                </div>
                <div className="text-sm text-slate-600 font-medium">Anggota Aktif</div>
              </div>
            </FadeIn>
            <FadeIn delay={200} direction="up">
              <div className="text-center p-6 rounded-lg bg-slate-50 border border-slate-100 transition-all hover:shadow-md hover:bg-white hover:scale-105 group">
                <div className="text-4xl font-bold text-primary mb-2 group-hover:text-primary/80 transition-colors">
                  <SlidingNumber number={6} inView inViewOnce />
                </div>
                <div className="text-sm text-slate-600 font-medium">Event Bulan Ini</div>
              </div>
            </FadeIn>
            <FadeIn delay={300} direction="up">
              <div className="text-center p-6 rounded-lg bg-slate-50 border border-slate-100 transition-all hover:shadow-md hover:bg-white hover:scale-105 group">
                <div className="text-4xl font-bold text-primary mb-2 group-hover:text-primary/80 transition-colors">
                  <SlidingNumber number={1300} inView inViewOnce />+
                </div>
                <div className="text-sm text-slate-600 font-medium">Sertifikat Terbit</div>
              </div>
            </FadeIn>
            <FadeIn delay={400} direction="up">
              <div className="text-center p-6 rounded-lg bg-slate-50 border border-slate-100 transition-all hover:shadow-md hover:bg-white hover:scale-105 group">
                <div className="text-4xl font-bold text-primary mb-2 group-hover:text-primary/80 transition-colors">
                  <SlidingNumber number={2009} inView inViewOnce />
                </div>
                <div className="text-sm text-slate-600 font-medium">Tahun Berdiri</div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Announcements Section */}
      <section className="py-24 bg-[#F8F9FA]">
        <div className="container mx-auto px-4 max-w-7xl">
          <FadeIn delay={100} direction="up" className="flex flex-col sm:flex-row items-center justify-between mb-12 gap-6">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-2 tracking-tight">Pengumuman Terbaru</h2>
              <p className="text-slate-600">Berita dan pembaruan terkini dari ITLA Pusat.</p>
            </div>
            <Button variant="outline" className="group border-slate-300" onClick={() => navigate('/pengumuman')}>
              Lihat Semua Pengumuman
              <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
            </Button>
          </FadeIn>

          <div className="grid md:grid-cols-3 gap-8">
            {announcements.map((announcement, index) => (
              <AnimatedCard key={announcement.id} delay={index * 150} direction="up" className="bg-white border-slate-100 shadow-sm rounded-xl overflow-hidden group cursor-pointer flex flex-col border" onClick={() => navigate('/pengumuman')}>
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
              </AnimatedCard>
            ))}
          </div>
        </div>
      </section>

      {/* Events Section */}
      <section className="py-24 bg-white border-t border-border/40">
        <div className="container mx-auto px-4 max-w-4xl">
          <FadeIn delay={100} direction="up" className="flex flex-col sm:flex-row items-center justify-between mb-12 gap-6">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-2 tracking-tight">Event Mendatang</h2>
              <p className="text-slate-600">Jadwal kegiatan resmi untuk anggota</p>
            </div>
            <Button variant="outline" className="group border-slate-300" onClick={() => navigate('/event')}>
              Lihat Semua Event
              <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
            </Button>
          </FadeIn>

          <div className="space-y-6">
            {events.map((event, index) => (
              <AnimatedCard key={event.id} delay={index * 200} direction="left" className="bg-white border border-slate-100 shadow-sm rounded-xl group overflow-hidden">
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
              </AnimatedCard>
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
                <div>
                  <h4 className="font-bold text-xl tracking-tight">ITLA</h4>
                  <p className="text-sm text-slate-400">Pusat</p>
                </div>
              </div>
              <p className="text-slate-400 text-sm leading-relaxed max-w-xs">
                Indonesian Tour Leaders Association - Wadah profesional tour leader Indonesia.
              </p>
              <div className="flex items-center gap-4 pt-4">
                <InstagramLogo size={40} />
              </div>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-6 text-white tracking-tight">Tautan</h4>
              <ul className="space-y-3 text-sm text-slate-400">
                <li><a href="/tentang" className="hover:text-white hover:translate-x-1 transition-all inline-block">Tentang Kami</a></li>
                <li><a href="/program" className="hover:text-white hover:translate-x-1 transition-all inline-block">Program</a></li>
                <li><a href="/event" className="hover:text-white hover:translate-x-1 transition-all inline-block">Event</a></li>
                <li><a href="/pengumuman" className="hover:text-white hover:translate-x-1 transition-all inline-block">Berita</a></li>
                <li><a href="/kerjasama" className="hover:text-white hover:translate-x-1 transition-all inline-block">Kerjasama</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-6 text-white tracking-tight">Layanan</h4>
              <ul className="space-y-3 text-sm text-slate-400">
                <li><a href="/sertifikasi" className="hover:text-white hover:translate-x-1 transition-all inline-block">Sertifikasi</a></li>
                <li><a href="/pelatihan" className="hover:text-white hover:translate-x-1 transition-all inline-block">Pelatihan</a></li>
                <li><a href="/pustaka" className="hover:text-white hover:translate-x-1 transition-all inline-block">Pustaka Digital</a></li>
                <li><a href="/forum" className="hover:text-white hover:translate-x-1 transition-all inline-block">Forum Komunitas</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-6 text-white tracking-tight">Kontak</h4>
              <ul className="space-y-4 text-sm text-slate-400">
                <li className="flex items-start gap-3">
                  <div className="mt-1 bg-white/10 p-1.5 rounded-md"><FileText className="w-4 h-4 text-white" /></div>
                  <div>
                    <div className="text-white font-medium mb-0.5">Alamat</div>
                    <span>Jl. Anyer No. 10, Kebon Waru, Kec. Batununggal, Kota Jakarta</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="mt-1 bg-white/10 p-1.5 rounded-md"><ShieldCheck className="w-4 h-4 text-white" /></div>
                  <div>
                    <div className="text-white font-medium mb-0.5">Kontak</div>
                    <span>(021) 1234-5678</span><br/>
                    <span>info@itla.or.id</span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between text-sm text-slate-500">
            <p>© 2009-{new Date().getFullYear()} Indonesian Tour Leaders Association - ITLA Pusat. All rights reserved.</p>
            <div className="flex gap-4 mt-4 md:mt-0">
              <span className="text-white font-medium">Integrity – Transparency – Loyalty – Accountability</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
