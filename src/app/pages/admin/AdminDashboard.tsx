import React from 'react';
import { useNavigate } from 'react-router';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '../../components/design-system/Card';
import { Badge } from '../../components/design-system/Badge';
import { 
  UserCheck, 
  Wallet, 
  FileCheck, 
  Shield, 
  Flag,
  Users,
  TrendingUp,
  Clock
} from 'lucide-react';
import { 
  registrations, 
  payments, 
  letterRequests, 
  whiteningRequests, 
  forumReports 
} from '../../lib/mock-data';

export function AdminDashboard() {
  const navigate = useNavigate();

  const stats = [
    {
      icon: Users,
      label: 'Total Anggota',
      value: '1,234',
      trend: '+12%',
      color: 'bg-blue-500',
    },
    {
      icon: UserCheck,
      label: 'Anggota Aktif',
      value: '987',
      trend: '+8%',
      color: 'bg-green-500',
    },
    {
      icon: Clock,
      label: 'Menunggu Verifikasi',
      value: registrations.length.toString(),
      trend: null,
      color: 'bg-yellow-500',
    },
    {
      icon: TrendingUp,
      label: 'Pendaftaran Bulan Ini',
      value: '45',
      trend: '+23%',
      color: 'bg-purple-500',
    },
  ];

  const queues = [
    {
      title: 'Verifikasi Pendaftaran',
      count: registrations.length,
      icon: UserCheck,
      path: '/admin/verifikasi-pendaftaran',
      color: 'text-blue-600 bg-blue-50',
    },
    {
      title: 'Validasi Pembayaran',
      count: payments.length,
      icon: Wallet,
      path: '/admin/validasi-pembayaran',
      color: 'text-green-600 bg-green-50',
    },
    {
      title: 'Validasi Surat',
      count: letterRequests.length,
      icon: FileCheck,
      path: '/admin/validasi-surat',
      color: 'text-purple-600 bg-purple-50',
    },
    {
      title: 'Tinjau Pemutihan',
      count: whiteningRequests.length,
      icon: Shield,
      path: '/admin/tinjau-pemutihan',
      color: 'text-yellow-600 bg-yellow-50',
    },
    {
      title: 'Laporan Forum',
      count: forumReports.length,
      icon: Flag,
      path: '/admin/moderasi-forum',
      color: 'text-red-600 bg-red-50',
    },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Dashboard Admin</h1>
        <p className="text-muted-foreground mt-1">Kelola dan pantau aktivitas ITLA Pusat</p>
      </div>

      {/* Stats Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <Card key={index}>
              <CardContent className="pt-6">
                <div className="flex items-center justify-between mb-4">
                  <div className={`h-10 w-10 rounded-lg ${stat.color} text-white flex items-center justify-center`}>
                    <Icon className="h-5 w-5" />
                  </div>
                  {stat.trend && (
                    <span className="text-xs text-green-600 font-medium">{stat.trend}</span>
                  )}
                </div>
                <p className="text-2xl font-bold mb-1">{stat.value}</p>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Queues */}
      <Card>
        <CardHeader>
          <CardTitle>Antrian Operasional</CardTitle>
          <CardDescription>Item yang memerlukan tindakan admin</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {queues.map((queue, index) => {
              const Icon = queue.icon;
              return (
                <button
                  key={index}
                  onClick={() => navigate(queue.path)}
                  className="text-left p-4 rounded-lg border border-border hover:border-accent hover:shadow-md transition-all"
                >
                  <div className="flex items-start justify-between mb-3">
                    <div className={`h-10 w-10 rounded-lg ${queue.color} flex items-center justify-center`}>
                      <Icon className="h-5 w-5" />
                    </div>
                    <Badge variant={queue.count > 0 ? 'pending' : 'default'}>
                      {queue.count}
                    </Badge>
                  </div>
                  <h3 className="font-medium mb-1">{queue.title}</h3>
                  <p className="text-sm text-muted-foreground">
                    {queue.count > 0 ? `${queue.count} item menunggu` : 'Tidak ada item'}
                  </p>
                </button>
              );
            })}
          </div>
        </CardContent>
      </Card>

      {/* Recent Activity */}
      <Card>
        <CardHeader>
          <CardTitle>Aktivitas Terbaru</CardTitle>
          <CardDescription>Riwayat aktivitas sistem</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {[
              { action: 'Pendaftaran baru dari Dewi Kartika', time: '5 menit yang lalu', type: 'new' },
              { action: 'Pembayaran divalidasi untuk Andi Wijaya', time: '1 jam yang lalu', type: 'success' },
              { action: 'Surat rekomendasi disetujui untuk Budi Santoso', time: '2 jam yang lalu', type: 'success' },
              { action: 'Laporan forum baru', time: '3 jam yang lalu', type: 'warning' },
            ].map((activity, index) => (
              <div key={index} className="flex items-center gap-3 py-2 border-b border-border last:border-0">
                <div className={`h-2 w-2 rounded-full ${
                  activity.type === 'new' ? 'bg-blue-500' :
                  activity.type === 'success' ? 'bg-green-500' :
                  'bg-yellow-500'
                }`} />
                <div className="flex-1">
                  <p className="text-sm">{activity.action}</p>
                  <p className="text-xs text-muted-foreground">{activity.time}</p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
