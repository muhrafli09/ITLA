import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '../../components/design-system/Card';
import { Input, Textarea } from '../../components/design-system/Input';
import { Button } from '../../components/design-system/Button';
import { Alert } from '../../components/design-system/Alert';
import { useAuth } from '../../lib/auth-context';

export function MemberProfile() {
  const { user } = useAuth();
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    name: user?.name || '',
    email: user?.email || '',
    phone: '081234567890',
    address: 'Jakarta, Indonesia',
    education: 'S1 Sastra Inggris',
    specialization: 'Terjemahan Teknis',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsEditing(false);
    alert('Profil berhasil diperbarui!');
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Profil Saya</h1>
          <p className="text-muted-foreground mt-1">Kelola informasi profil Anda</p>
        </div>
        {!isEditing && (
          <Button onClick={() => setIsEditing(true)}>Edit Profil</Button>
        )}
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Informasi Pribadi</CardTitle>
          <CardDescription>Data pribadi dan kontak Anda</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <Input
              label="Nama Lengkap"
              name="name"
              value={formData.name}
              onChange={handleChange}
              disabled={!isEditing}
              required
            />

            <Input
              label="Email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              disabled={!isEditing}
              required
            />

            <Input
              label="Nomor Telepon"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              disabled={!isEditing}
              required
            />

            <Textarea
              label="Alamat"
              name="address"
              value={formData.address}
              onChange={handleChange}
              disabled={!isEditing}
              required
              rows={3}
            />

            <Input
              label="Pendidikan Terakhir"
              name="education"
              value={formData.education}
              onChange={handleChange}
              disabled={!isEditing}
              required
            />

            <Input
              label="Spesialisasi"
              name="specialization"
              value={formData.specialization}
              onChange={handleChange}
              disabled={!isEditing}
              required
            />

            {isEditing && (
              <>
                <Alert variant="warning">
                  Perubahan data akan ditinjau oleh admin sebelum disetujui.
                </Alert>

                <div className="flex gap-3">
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => setIsEditing(false)}
                    className="flex-1"
                  >
                    Batal
                  </Button>
                  <Button type="submit" className="flex-1">
                    Simpan Perubahan
                  </Button>
                </div>
              </>
            )}
          </form>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Keamanan</CardTitle>
          <CardDescription>Kelola kata sandi dan keamanan akun</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-4">
            <Input
              label="Kata Sandi Lama"
              type="password"
              placeholder="Masukkan kata sandi lama"
            />
            <Input
              label="Kata Sandi Baru"
              type="password"
              placeholder="Masukkan kata sandi baru"
            />
            <Input
              label="Konfirmasi Kata Sandi"
              type="password"
              placeholder="Konfirmasi kata sandi baru"
            />
            <Button onClick={() => alert('Kata sandi berhasil diubah!')}>Simpan Kata Sandi Baru</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
