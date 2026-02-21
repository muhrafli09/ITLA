import React from 'react';
import { useNavigate } from 'react-router';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '../../components/design-system/Card';
import { Button } from '../../components/design-system/Button';
import { Alert } from '../../components/design-system/Alert';
import { Badge, getStatusBadgeVariant, getStatusLabel } from '../../components/design-system/Badge';
import { Stepper } from '../../components/design-system/Stepper';
import { useAuth } from '../../lib/auth-context';
import { Clock, CheckCircle, XCircle } from 'lucide-react';

export function RegistrationStatusPage() {
  const navigate = useNavigate();
  const { user } = useAuth();

  if (!user) {
    return (
      <div className="min-h-screen bg-secondary flex items-center justify-center p-4">
        <Card className="max-w-md">
          <CardContent className="pt-6">
            <Alert variant="warning">
              Anda harus login untuk melihat status pendaftaran
            </Alert>
            <Button className="w-full mt-4" onClick={() => navigate('/masuk')}>
              Masuk
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  const steps = [
    { label: 'Diajukan', description: 'Pendaftaran diterima' },
    { label: 'Ditinjau Admin', description: 'Sedang diverifikasi' },
    { label: user.memberStatus === 'DITOLAK' ? 'Ditolak' : 'Disetujui', description: 'Hasil verifikasi' },
  ];

  const currentStep = 
    user.memberStatus === 'MENUNGGU_VERIFIKASI' ? 1 :
    user.memberStatus === 'DITOLAK' ? 2 :
    user.memberStatus === 'AKTIF' ? 3 : 1;

  return (
    <div className="min-h-screen bg-secondary py-12 px-4">
      <div className="max-w-3xl mx-auto space-y-6">
        {/* Status Card */}
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle>Status Pendaftaran</CardTitle>
                <CardDescription>Nomor Pendaftaran: {user.id}</CardDescription>
              </div>
              <Badge variant={getStatusBadgeVariant(user.memberStatus || '')}>
                {getStatusLabel(user.memberStatus || '')}
              </Badge>
            </div>
          </CardHeader>
          <CardContent>
            {/* Stepper */}
            <Stepper steps={steps} currentStep={currentStep} />

            {/* Status Messages */}
            <div className="mt-8 space-y-4">
              {user.memberStatus === 'MENUNGGU_VERIFIKASI' && (
                <Alert variant="info" title="Pendaftaran Sedang Diproses">
                  <p>Tim admin kami sedang meninjau pendaftaran Anda. Proses ini biasanya memakan waktu 1-3 hari kerja.</p>
                  <p className="mt-2">Anda akan menerima notifikasi melalui email setelah verifikasi selesai.</p>
                </Alert>
              )}

              {user.memberStatus === 'DITOLAK' && (
                <>
                  <Alert variant="error" title="Pendaftaran Ditolak">
                    <p>Maaf, pendaftaran Anda ditolak karena:</p>
                    <p className="mt-2 font-medium">{user.rejectionReason || 'Dokumen tidak lengkap atau tidak valid'}</p>
                  </Alert>
                  <div className="flex gap-3">
                    <Button variant="outline" onClick={() => navigate('/profil')}>
                      Perbaiki Data
                    </Button>
                    <Button onClick={() => navigate('/daftar')}>
                      Ajukan Ulang
                    </Button>
                  </div>
                </>
              )}

              {user.memberStatus === 'AKTIF' && (
                <>
                  <Alert variant="success" title="Pendaftaran Disetujui">
                    <p>Selamat! Pendaftaran Anda telah disetujui. Keanggotaan Anda aktif hingga {user.membershipExpiry}.</p>
                  </Alert>
                  <Button className="w-full" onClick={() => navigate('/anggota')}>
                    Masuk ke Dashboard Anggota
                  </Button>
                </>
              )}
            </div>
          </CardContent>
        </Card>

        {/* Timeline Card */}
        <Card>
          <CardHeader>
            <CardTitle>Riwayat Aktivitas</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex gap-3">
                <div className="flex flex-col items-center">
                  <div className="h-8 w-8 rounded-full bg-accent text-accent-foreground flex items-center justify-center">
                    <CheckCircle className="h-4 w-4" />
                  </div>
                  <div className="w-0.5 h-full bg-border min-h-[40px]"></div>
                </div>
                <div className="flex-1 pb-4">
                  <p className="font-medium">Pendaftaran Diterima</p>
                  <p className="text-sm text-muted-foreground">
                    {user.registrationDate ? new Date(user.registrationDate).toLocaleDateString('id-ID') : 'Hari ini'}
                  </p>
                </div>
              </div>

              {currentStep >= 1 && (
                <div className="flex gap-3">
                  <div className="flex flex-col items-center">
                    <div className="h-8 w-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center">
                      <Clock className="h-4 w-4" />
                    </div>
                    {currentStep >= 2 && <div className="w-0.5 h-full bg-border min-h-[40px]"></div>}
                  </div>
                  <div className="flex-1 pb-4">
                    <p className="font-medium">Sedang Ditinjau Admin</p>
                    <p className="text-sm text-muted-foreground">Dalam proses verifikasi</p>
                  </div>
                </div>
              )}

              {currentStep >= 2 && user.memberStatus === 'DITOLAK' && (
                <div className="flex gap-3">
                  <div className="flex flex-col items-center">
                    <div className="h-8 w-8 rounded-full bg-destructive text-destructive-foreground flex items-center justify-center">
                      <XCircle className="h-4 w-4" />
                    </div>
                  </div>
                  <div className="flex-1 pb-4">
                    <p className="font-medium">Pendaftaran Ditolak</p>
                    <p className="text-sm text-muted-foreground">Hari ini</p>
                  </div>
                </div>
              )}

              {currentStep >= 3 && user.memberStatus === 'AKTIF' && (
                <div className="flex gap-3">
                  <div className="flex flex-col items-center">
                    <div className="h-8 w-8 rounded-full bg-accent text-accent-foreground flex items-center justify-center">
                      <CheckCircle className="h-4 w-4" />
                    </div>
                  </div>
                  <div className="flex-1 pb-4">
                    <p className="font-medium">Pendaftaran Disetujui</p>
                    <p className="text-sm text-muted-foreground">Keanggotaan aktif</p>
                  </div>
                </div>
              )}
            </div>
          </CardContent>
        </Card>

        <Button variant="outline" className="w-full" onClick={() => navigate('/')}>
          Kembali ke Beranda
        </Button>
      </div>
    </div>
  );
}
