import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '../../components/design-system/Card';
import { Badge } from '../../components/design-system/Badge';
import { CheckCircle2, Users, Award, Target, Eye, Heart } from 'lucide-react';
import { FadeIn } from '../../components/ui/FadeIn';
import { AnimatedCounter } from '../../components/ui/AnimatedCounter';
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
} from '@/components/animate-ui/components/headless/accordion';

export function AboutPage() {
  const achievements = [
    { number: '427+', label: 'Anggota Aktif' },
    { number: '1300+', label: 'Sertifikat Terbit' },
    { number: '2009', label: 'Tahun Berdiri' },
    { number: '12+', label: 'Mitra Strategis' },
  ];

  const values = [
    {
      icon: CheckCircle2,
      title: 'Integrity',
      description: 'Menjunjung tinggi kejujuran dan integritas dalam setiap tindakan dan keputusan organisasi.'
    },
    {
      icon: Eye,
      title: 'Transparency',
      description: 'Menjalankan organisasi dengan transparansi penuh kepada seluruh anggota dan stakeholder.'
    },
    {
      icon: Heart,
      title: 'Loyalty',
      description: 'Membangun loyalitas dan komitmen yang kuat terhadap profesi tour leader dan industri pariwisata.'
    },
    {
      icon: Award,
      title: 'Accountability',
      description: 'Bertanggung jawab penuh atas setiap program dan layanan yang diberikan kepada anggota.'
    },
  ];

  return (
    <div className="min-h-screen bg-secondary py-12 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Hero Section */}
        <FadeIn>
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-4 mb-6">
              <img src="/logo.png" alt="ITLA Logo" className="h-20 w-auto" />
              <div className="text-left">
                <h1 className="text-4xl font-bold text-slate-900">ITLA Pusat</h1>
                <p className="text-lg text-slate-600">Indonesian Tour Leaders Association</p>
              </div>
            </div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              <span>Integrity – Transparency – Loyalty – Accountability</span>
            </div>
            <p className="text-xl text-slate-700 max-w-3xl mx-auto leading-relaxed">
              Wadah profesional tour leader pertama dan utama di Indonesia yang berdedikasi untuk meningkatkan standar industri pariwisata melalui pendidikan, pelatihan, advokasi, dan kolaborasi.
            </p>
          </div>
        </FadeIn>

        {/* Stats */}
        <div className="grid md:grid-cols-4 gap-6 mb-16">
          {achievements.map((stat, index) => (
            <FadeIn key={index} delay={index * 150}>
              <Card className="text-center">
                <CardContent className="pt-8 pb-6">
                  <AnimatedCounter end={parseInt(stat.number.replace(/\D/g, ''))} suffix={stat.number.includes('+') ? '+' : ''} className="text-3xl font-bold text-primary mb-2" />
                  <div className="text-sm text-slate-600">{stat.label}</div>
                </CardContent>
              </Card>
            </FadeIn>
          ))}
        </div>

        {/* Vision & Mission */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          <FadeIn delay={200} direction="left">
            <Card>
              <CardHeader>
                <div className="flex items-center gap-3 mb-4">
                  <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <Eye className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-2xl">Visi</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-slate-700 leading-relaxed text-lg">
                  Menjadi organisasi profesi tour leader terdepan di Indonesia yang menghasilkan tour leader berkualitas tinggi, profesional, dan berdaya saing global untuk memajukan industri pariwisata Indonesia.
                </p>
              </CardContent>
            </Card>
          </FadeIn>

          <FadeIn delay={400} direction="right">
            <Card>
              <CardHeader>
                <div className="flex items-center gap-3 mb-4">
                  <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <Target className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-2xl">Misi</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-slate-700">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>Menyelenggarakan program sertifikasi dan pelatihan berkualitas tinggi</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>Membangun jaringan profesional tour leader di seluruh Indonesia</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>Mengadvokasi kepentingan dan hak-hak tour leader profesional</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>Meningkatkan standar pelayanan pariwisata Indonesia</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </FadeIn>
        </div>

        {/* Values */}
        <Card className="mb-16">
          <CardHeader>
            <CardTitle className="text-2xl text-center mb-4">Nilai-Nilai Organisasi</CardTitle>
            <CardDescription className="text-center text-lg">
              Empat pilar utama yang menjadi fondasi ITLA Pusat dalam menjalankan misi organisasi
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, index) => {
                const Icon = value.icon;
                return (
                  <div key={index} className="text-center p-6 rounded-lg bg-slate-50 hover:bg-slate-100 transition-colors">
                    <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                      <Icon className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-3">{value.title}</h3>
                    <p className="text-sm text-slate-600 leading-relaxed">{value.description}</p>
                  </div>
                );
              })}
            </div>
          </CardContent>
        </Card>

        {/* About Organization */}
        <Card className="mb-16">
          <CardHeader>
            <CardTitle className="text-2xl">Tentang ITLA Pusat</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold mb-3">Sejarah Singkat</h3>
              <p className="text-slate-700 leading-relaxed">
                Indonesian Tour Leaders Association (ITLA) Pusat didirikan pada tahun 2009 sebagai respons terhadap kebutuhan akan organisasi profesi yang dapat mewadahi dan mengembangkan kompetensi tour leader di Indonesia. Sejak berdiri, ITLA telah menjadi pionir dalam standardisasi profesi tour leader dan berkontribusi signifikan dalam pengembangan industri pariwisata Indonesia.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-3">Fokus Utama</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="flex items-start gap-3">
                  <Badge variant="active" className="mt-1">Sertifikasi</Badge>
                  <div>
                    <h4 className="font-medium mb-1">Program Sertifikasi BNSP</h4>
                    <p className="text-sm text-slate-600">Menyelenggarakan program sertifikasi kompetensi tour leader sesuai standar nasional</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Badge variant="active" className="mt-1">Pelatihan</Badge>
                  <div>
                    <h4 className="font-medium mb-1">Pengembangan Kompetensi</h4>
                    <p className="text-sm text-slate-600">Workshop dan pelatihan berkelanjutan untuk meningkatkan keterampilan profesional</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Badge variant="active" className="mt-1">Networking</Badge>
                  <div>
                    <h4 className="font-medium mb-1">Jaringan Profesional</h4>
                    <p className="text-sm text-slate-600">Memfasilitasi kolaborasi dan networking antar tour leader profesional</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Badge variant="active" className="mt-1">Advokasi</Badge>
                  <div>
                    <h4 className="font-medium mb-1">Perlindungan Profesi</h4>
                    <p className="text-sm text-slate-600">Mengadvokasi hak dan kepentingan tour leader di berbagai forum</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-3">Kemitraan Strategis</h3>
              <p className="text-slate-700 leading-relaxed mb-4">
                ITLA Pusat menjalin kerjasama dengan berbagai institusi pemerintah, lembaga pendidikan, dan asosiasi industri pariwisata untuk memperkuat ekosistem pariwisata Indonesia.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                {['Kemenparekraf', 'BNSP', 'ASITA', 'ASTINDO', 'HPI', 'GIPI', 'Poltekpar NHI', 'STIEPAR YAPARI'].map((partner, index) => (
                  <div key={index} className="p-3 bg-slate-50 rounded-lg">
                    <span className="text-sm font-medium text-slate-700">{partner}</span>
                  </div>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Contact Info */}
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">Informasi Kontak</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <h4 className="font-semibold mb-2">Alamat Sekretariat</h4>
                <p className="text-slate-600 text-sm">
                  Jl. Anyer No. 10, Kebon Waru<br />
                  Kec. Batununggal, Kota Jakarta<br />
                  Jl. Teknologi No. 123, SCBD<br />
                  Jakarta Selatan, Indonesia
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Kontak</h4>
                <p className="text-slate-600 text-sm">
                  Telepon: (021) 1234-5678<br />
                  Email: info@itla.or.id<br />
                  Website: www.itla.or.id
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Media Sosial</h4>
                <p className="text-slate-600 text-sm">
                  Instagram: @itlajabar<br />
                  Facebook: ITLA Pusat<br />
                  LinkedIn: Indonesian Tour Leaders Association
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}