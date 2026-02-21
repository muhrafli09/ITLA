import React from 'react';
import { useNavigate } from 'react-router';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '../../components/design-system/Card';
import { Button } from '../../components/design-system/Button';
import { Badge, getStatusBadgeVariant, getStatusLabel } from '../../components/design-system/Badge';
import { Alert } from '../../components/design-system/Alert';
import { useAuth } from '../../lib/auth-context';
import { 
  CreditCard, 
  FileText, 
  User, 
  Upload,
  Calendar,
  CheckCircle,
  AlertCircle
} from 'lucide-react';

export function MemberDashboard() {
  const navigate = useNavigate();
  const { user } = useAuth();

  if (!user) return null;

  const isActive = user.memberStatus === 'AKTIF';
  const isPending = user.memberStatus === 'MENUNGGU_VERIFIKASI';
  const isInactive = user.memberStatus === 'NONAKTIF' || user.memberStatus === 'KEDALUWARSA';

  // Calculate days until expiry
  const daysUntilExpiry = user.membershipExpiry 
    ? Math.floor((new Date(user.membershipExpiry).getTime() - new Date().getTime()) / (1000 * 60 * 60 * 24))
    : null;

  const quickActions = [
    {
      icon: CreditCard,
      title: 'Perpanjang Keanggotaan',
      description: 'Perpanjang masa berlaku keanggotaan',
      onClick: () => navigate('/anggota/perpanjang'),
      disabled: isPending,
    },
    {
      icon: Upload,
      title: 'Upload Bukti Pembayaran',
      description: 'Upload bukti transfer pembayaran',
      onClick: () => navigate('/anggota/perpanjang'),
      disabled: isPending,
    },
    {
      icon: FileText,
      title: 'Ajukan Surat',
      description: 'Ajukan surat rekomendasi atau keterangan',
      onClick: () => navigate('/anggota/ajukan-surat'),
      disabled: !isActive,
    },
    {
      icon: User,
      title: 'Lengkapi Profil',
      description: 'Perbarui informasi profil Anda',
      onClick: () => navigate('/anggota/profil'),
      disabled: false,
    },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Dashboard</h1>
        <p className="text-muted-foreground mt-1">Selamat datang, {user.name}</p>
      </div>

      {/* Status Alerts */}
      {isPending && (
        <Alert variant="warning" title="Pendaftaran Menunggu Verifikasi">
          Akun Anda sedang dalam proses verifikasi oleh admin. Anda akan mendapat notifikasi melalui email setelah verifikasi selesai.
        </Alert>
      )}

      {isInactive && (
        <Alert variant="error" title="Keanggotaan Tidak Aktif">
          Keanggotaan Anda sudah tidak aktif. Perpanjang sekarang untuk mengakses semua layanan ITLA.
          <Button className="mt-3" size="sm" onClick={() => navigate('/anggota/perpanjang')}>
            Perpanjang Sekarang
          </Button>
        </Alert>
      )}

      {isActive && daysUntilExpiry && daysUntilExpiry <= 30 && (
        <Alert variant="warning" title="Keanggotaan Akan Berakhir">
          Keanggotaan Anda akan berakhir dalam {daysUntilExpiry} hari ({user.membershipExpiry}). 
          Perpanjang sekarang untuk menghindari gangguan layanan.
          <Button className="mt-3" size="sm" variant="accent" onClick={() => navigate('/anggota/perpanjang')}>
            Perpanjang Sekarang
          </Button>
        </Alert>
      )}

      {/* Membership Status Card */}
      <Card>
        <CardHeader>
          <div className="flex items-start justify-between">
            <div>
              <CardTitle>Status Keanggotaan</CardTitle>
              <CardDescription>Informasi keanggotaan Anda</CardDescription>
            </div>
            <Badge variant={getStatusBadgeVariant(user.memberStatus || '')}>
              {getStatusLabel(user.memberStatus || '')}
            </Badge>
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="flex items-start gap-3">
              <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
                <CheckCircle className="h-5 w-5 text-primary" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Status</p>
                <p className="font-medium">{getStatusLabel(user.memberStatus || '')}</p>
              </div>
            </div>

            {user.membershipExpiry && (
              <div className="flex items-start gap-3">
                <div className="h-10 w-10 rounded-lg bg-accent/10 flex items-center justify-center">
                  <Calendar className="h-5 w-5 text-accent" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Masa Berlaku</p>
                  <p className="font-medium">
                    {new Date(user.membershipExpiry).toLocaleDateString('id-ID', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}
                  </p>
                </div>
              </div>
            )}

            {user.registrationDate && (
              <div className="flex items-start gap-3">
                <div className="h-10 w-10 rounded-lg bg-muted flex items-center justify-center">
                  <User className="h-5 w-5 text-muted-foreground" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Tanggal Bergabung</p>
                  <p className="font-medium">
                    {new Date(user.registrationDate).toLocaleDateString('id-ID', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}
                  </p>
                </div>
              </div>
            )}
          </div>
        </CardContent>
      </Card>

      {/* Quick Actions */}
      <div>
        <h2 className="text-xl font-semibold mb-4">Aksi Cepat</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {quickActions.map((action, index) => {
            const Icon = action.icon;
            return (
              <Card 
                key={index}
                className={action.disabled ? 'opacity-50' : 'hover:shadow-md transition-shadow cursor-pointer'}
                onClick={action.disabled ? undefined : action.onClick}
              >
                <CardContent className="pt-6">
                  <div className="h-12 w-12 rounded-lg bg-accent text-accent-foreground flex items-center justify-center mb-4">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="font-medium mb-1">{action.title}</h3>
                  <p className="text-sm text-muted-foreground">{action.description}</p>
                  {action.disabled && (
                    <div className="mt-3 flex items-center gap-1 text-xs text-muted-foreground">
                      <AlertCircle className="h-3 w-3" />
                      <span>Tidak tersedia</span>
                    </div>
                  )}
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>

      {/* Recent Activities - Placeholder */}
      <Card>
        <CardHeader>
          <CardTitle>Aktivitas Terbaru</CardTitle>
          <CardDescription>Riwayat aktivitas Anda di ITLA Pusat</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="text-center py-8 text-muted-foreground">
            <p>Belum ada aktivitas</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
