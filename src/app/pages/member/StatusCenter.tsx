import React from 'react';
import { useNavigate } from 'react-router';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '../../components/design-system/Card';
import { Button } from '../../components/design-system/Button';
import { Alert } from '../../components/design-system/Alert';
import { Badge } from '../../components/design-system/Badge';
import { useAuth } from '../../lib/auth-context';
import { CheckCircle, Circle, AlertCircle, Clock, Upload, FileText, CreditCard } from 'lucide-react';

export function StatusCenter() {
  const navigate = useNavigate();
  const { user } = useAuth();

  if (!user) return null;

  const isActive = user.memberStatus === 'AKTIF';
  const daysUntilExpiry = user.membershipExpiry 
    ? Math.floor((new Date(user.membershipExpiry).getTime() - new Date().getTime()) / (1000 * 60 * 60 * 24))
    : null;

  const tasks = [
    {
      id: 'verify-email',
      title: 'Verifikasi Email',
      description: 'Konfirmasi alamat email Anda',
      completed: true,
      icon: CheckCircle,
    },
    {
      id: 'complete-profile',
      title: 'Lengkapi Profil',
      description: 'Isi semua informasi profil yang diperlukan',
      completed: false,
      icon: Circle,
      action: () => navigate('/anggota/profil'),
    },
    {
      id: 'upload-documents',
      title: 'Upload Dokumen',
      description: 'Upload dokumen pendukung keanggotaan',
      completed: false,
      icon: Upload,
      action: () => navigate('/anggota/profil'),
    },
    {
      id: 'payment-verification',
      title: 'Verifikasi Pembayaran',
      description: 'Upload bukti pembayaran untuk aktivasi',
      completed: isActive,
      icon: isActive ? CheckCircle : Clock,
      action: () => navigate('/anggota/perpanjang'),
    },
  ];

  const completedTasks = tasks.filter(t => t.completed).length;
  const progress = (completedTasks / tasks.length) * 100;

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Pusat Status</h1>
        <p className="text-muted-foreground mt-1">
          Pantau progress keanggotaan dan selesaikan tugas yang diperlukan
        </p>
      </div>

      {/* Reminders */}
      {!isActive && (
        <Alert variant="warning" title="Keanggotaan Belum Aktif">
          Selesaikan pembayaran dan upload bukti transfer untuk mengaktifkan keanggotaan Anda.
          <Button 
            className="mt-3" 
            size="sm" 
            variant="accent"
            onClick={() => navigate('/anggota/perpanjang')}
          >
            Perpanjang Sekarang
          </Button>
        </Alert>
      )}

      {isActive && daysUntilExpiry && daysUntilExpiry <= 30 && (
        <Alert variant="warning" title={`Keanggotaan Akan Berakhir dalam ${daysUntilExpiry} Hari`}>
          Perpanjang keanggotaan Anda sebelum {user.membershipExpiry} untuk menghindari gangguan layanan.
          <Button 
            className="mt-3" 
            size="sm" 
            variant="accent"
            onClick={() => navigate('/anggota/perpanjang')}
          >
            Perpanjang Sekarang
          </Button>
        </Alert>
      )}

      {isActive && daysUntilExpiry && daysUntilExpiry <= 7 && (
        <Alert variant="error" title={`Segera Berakhir! ${daysUntilExpiry} Hari Lagi`}>
          Keanggotaan Anda akan berakhir sangat segera. Perpanjang sekarang!
          <Button 
            className="mt-3" 
            size="sm"
            onClick={() => navigate('/anggota/perpanjang')}
          >
            Perpanjang Sekarang
          </Button>
        </Alert>
      )}

      {/* Progress Overview */}
      <Card>
        <CardHeader>
          <CardTitle>Progress Keanggotaan</CardTitle>
          <CardDescription>
            {completedTasks} dari {tasks.length} tugas selesai
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <div className="flex items-center justify-between text-sm">
              <span className="text-muted-foreground">Progress</span>
              <span className="font-medium">{Math.round(progress)}%</span>
            </div>
            <div className="w-full bg-muted rounded-full h-2.5">
              <div 
                className="bg-accent h-2.5 rounded-full transition-all"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Task List */}
      <Card>
        <CardHeader>
          <CardTitle>Daftar Tugas</CardTitle>
          <CardDescription>Selesaikan tugas berikut untuk akses penuh</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {tasks.map((task) => {
              const Icon = task.icon;
              return (
                <div 
                  key={task.id}
                  className="flex items-start gap-3 p-4 rounded-lg border border-border hover:bg-muted/50 transition-colors"
                >
                  <div className={`flex-shrink-0 ${task.completed ? 'text-accent' : 'text-muted-foreground'}`}>
                    <Icon className="h-5 w-5" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="font-medium mb-1">{task.title}</h4>
                    <p className="text-sm text-muted-foreground">{task.description}</p>
                  </div>
                  {task.completed ? (
                    <Badge variant="active">Selesai</Badge>
                  ) : task.action ? (
                    <Button size="sm" variant="outline" onClick={task.action}>
                      Mulai
                    </Button>
                  ) : null}
                </div>
              );
            })}
          </div>
        </CardContent>
      </Card>

      {/* Quick Actions */}
      <Card>
        <CardHeader>
          <CardTitle>Aksi Rekomendasi</CardTitle>
          <CardDescription>Berdasarkan status akun Anda</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-3 gap-4">
            <button 
              onClick={() => navigate('/anggota/perpanjang')}
              className="p-4 rounded-lg border border-border hover:border-accent hover:bg-accent/5 transition-all text-left"
            >
              <CreditCard className="h-6 w-6 text-accent mb-2" />
              <h4 className="font-medium mb-1">Perpanjang</h4>
              <p className="text-sm text-muted-foreground">Perpanjang keanggotaan</p>
            </button>

            <button 
              onClick={() => navigate('/anggota/profil')}
              className="p-4 rounded-lg border border-border hover:border-accent hover:bg-accent/5 transition-all text-left"
            >
              <Upload className="h-6 w-6 text-accent mb-2" />
              <h4 className="font-medium mb-1">Upload Dokumen</h4>
              <p className="text-sm text-muted-foreground">Lengkapi dokumen</p>
            </button>

            <button 
              onClick={() => navigate('/anggota/ajukan-surat')}
              className="p-4 rounded-lg border border-border hover:border-accent hover:bg-accent/5 transition-all text-left"
              disabled={!isActive}
            >
              <FileText className="h-6 w-6 text-accent mb-2" />
              <h4 className="font-medium mb-1">Ajukan Surat</h4>
              <p className="text-sm text-muted-foreground">Buat pengajuan baru</p>
            </button>
          </div>
        </CardContent>
      </Card>

      {/* Notifications History */}
      <Card>
        <CardHeader>
          <CardTitle>Riwayat Notifikasi</CardTitle>
          <CardDescription>Notifikasi terbaru untuk akun Anda</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {user.memberStatus === 'MENUNGGU_VERIFIKASI' ? (
              <div className="flex items-start gap-3 p-3 bg-yellow-50 rounded-lg">
                <AlertCircle className="h-5 w-5 text-yellow-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm font-medium text-yellow-900">Pendaftaran Sedang Diverifikasi</p>
                  <p className="text-xs text-yellow-700 mt-1">
                    Tim admin sedang memproses pendaftaran Anda. Mohon tunggu.
                  </p>
                  <p className="text-xs text-yellow-600 mt-1">
                    {user.registrationDate ? new Date(user.registrationDate).toLocaleDateString('id-ID') : 'Hari ini'}
                  </p>
                </div>
              </div>
            ) : (
              <div className="text-center py-8 text-muted-foreground">
                <p className="text-sm">Belum ada notifikasi</p>
              </div>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
