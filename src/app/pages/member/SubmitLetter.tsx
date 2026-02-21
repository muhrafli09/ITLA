import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '../../components/design-system/Card';
import { Input, Textarea, Select } from '../../components/design-system/Input';
import { Button } from '../../components/design-system/Button';
import { Alert } from '../../components/design-system/Alert';
import { Badge, getStatusBadgeVariant, getStatusLabel } from '../../components/design-system/Badge';
import { useAuth } from '../../lib/auth-context';
import { FileText, CheckCircle, XCircle, Clock } from 'lucide-react';

export function SubmitLetter() {
  const navigate = useNavigate();
  const { user } = useAuth();
  const [activeTab, setActiveTab] = useState<'new' | 'history'>('new');
  const [formData, setFormData] = useState({
    letterType: 'visa',
    destination: '',
    purpose: '',
    notes: '',
  });

  if (!user) return null;

  const isActive = user.memberStatus === 'AKTIF';

  const letterTypes = [
    { value: 'visa', label: 'Surat Rekomendasi Visa' },
    { value: 'membership', label: 'Surat Keterangan Anggota' },
    { value: 'activity', label: 'Surat Rekomendasi Kegiatan' },
    { value: 'other', label: 'Lainnya' },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Mock submission
    alert('Pengajuan surat berhasil dikirim!');
    setFormData({ letterType: 'visa', destination: '', purpose: '', notes: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Mock history data
  const letterHistory = [
    {
      id: '1',
      type: 'Surat Rekomendasi Visa',
      destination: 'Jepang',
      requestDate: '2026-02-20',
      status: 'DIAJUKAN',
    },
  ];

  if (!isActive) {
    return (
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold">Ajukan Surat</h1>
          <p className="text-muted-foreground mt-1">Ajukan surat rekomendasi atau keterangan</p>
        </div>

        <Alert variant="warning" title="Akses Terbatas">
          Anda harus memiliki keanggotaan aktif untuk mengajukan surat.
          <Button 
            className="mt-3" 
            size="sm"
            onClick={() => navigate('/anggota/perpanjang')}
          >
            Perpanjang / Aktifkan Keanggotaan
          </Button>
        </Alert>

        <Card>
          <CardContent className="pt-6">
            <div className="text-center py-12 text-muted-foreground">
              <FileText className="h-16 w-16 mx-auto mb-4 opacity-50" />
              <p>Layanan pengajuan surat tidak tersedia</p>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Ajukan Surat</h1>
        <p className="text-muted-foreground mt-1">Ajukan surat rekomendasi atau keterangan</p>
      </div>

      {/* Tabs */}
      <div className="border-b border-border">
        <div className="flex gap-6">
          <button
            onClick={() => setActiveTab('new')}
            className={`pb-3 px-1 border-b-2 transition-colors ${
              activeTab === 'new'
                ? 'border-accent text-accent'
                : 'border-transparent text-muted-foreground hover:text-foreground'
            }`}
          >
            Ajukan Baru
          </button>
          <button
            onClick={() => setActiveTab('history')}
            className={`pb-3 px-1 border-b-2 transition-colors ${
              activeTab === 'history'
                ? 'border-accent text-accent'
                : 'border-transparent text-muted-foreground hover:text-foreground'
            }`}
          >
            Riwayat Pengajuan
          </button>
        </div>
      </div>

      {/* New Letter Form */}
      {activeTab === 'new' && (
        <Card>
          <CardHeader>
            <CardTitle>Formulir Pengajuan Surat</CardTitle>
            <CardDescription>Lengkapi formulir di bawah ini untuk mengajukan surat</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <Select
                label="Jenis Surat"
                name="letterType"
                options={letterTypes}
                value={formData.letterType}
                onChange={handleChange}
                required
              />

              <Input
                label="Tujuan Negara / Institusi"
                name="destination"
                placeholder="Contoh: Jepang, Universitas ABC"
                value={formData.destination}
                onChange={handleChange}
                required
              />

              <Textarea
                label="Keperluan / Tujuan"
                name="purpose"
                placeholder="Jelaskan keperluan surat ini..."
                value={formData.purpose}
                onChange={handleChange}
                required
                rows={4}
              />

              <Textarea
                label="Catatan Tambahan (Opsional)"
                name="notes"
                placeholder="Informasi tambahan yang perlu diketahui admin..."
                value={formData.notes}
                onChange={handleChange}
                rows={3}
              />

              <div>
                <label className="block mb-2 text-sm">Dokumen Pendukung (Opsional)</label>
                <input
                  type="file"
                  className="block w-full text-sm text-muted-foreground
                    file:mr-4 file:py-2 file:px-4
                    file:rounded-lg file:border-0
                    file:text-sm file:font-medium
                    file:bg-accent file:text-accent-foreground
                    hover:file:bg-accent/90 file:cursor-pointer"
                  accept=".pdf,.jpg,.jpeg,.png"
                  multiple
                />
                <p className="mt-1 text-xs text-muted-foreground">
                  Format: PDF, JPG, PNG (Max 5MB per file)
                </p>
              </div>

              <Alert variant="info">
                Pengajuan surat biasanya diproses dalam 2-5 hari kerja. Anda akan menerima notifikasi setelah surat disetujui.
              </Alert>

              <div className="flex gap-3">
                <Button type="button" variant="outline" onClick={() => navigate('/anggota')} className="flex-1">
                  Batal
                </Button>
                <Button type="submit" className="flex-1">
                  Kirim Pengajuan
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      )}

      {/* History */}
      {activeTab === 'history' && (
        <Card>
          <CardHeader>
            <CardTitle>Riwayat Pengajuan Surat</CardTitle>
            <CardDescription>Daftar surat yang pernah Anda ajukan</CardDescription>
          </CardHeader>
          <CardContent>
            {letterHistory.length > 0 ? (
              <div className="space-y-3">
                {letterHistory.map((letter) => (
                  <div key={letter.id} className="p-4 rounded-lg border border-border">
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex-1">
                        <h4 className="font-medium mb-1">{letter.type}</h4>
                        <p className="text-sm text-muted-foreground">Tujuan: {letter.destination}</p>
                        <p className="text-xs text-muted-foreground mt-1">
                          Diajukan: {new Date(letter.requestDate).toLocaleDateString('id-ID')}
                        </p>
                      </div>
                      <Badge variant={getStatusBadgeVariant(letter.status)}>
                        {getStatusLabel(letter.status)}
                      </Badge>
                    </div>
                    <Button size="sm" variant="outline">
                      Lihat Detail
                    </Button>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-12 text-muted-foreground">
                <FileText className="h-16 w-16 mx-auto mb-4 opacity-50" />
                <p>Belum ada riwayat pengajuan</p>
              </div>
            )}
          </CardContent>
        </Card>
      )}
    </div>
  );
}
