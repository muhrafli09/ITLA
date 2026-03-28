import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '../../components/design-system/Card';
import { Input, Textarea } from '../../components/design-system/Input';
import { Button } from '../../components/design-system/Button';
import { Alert } from '../../components/design-system/Alert';
import { useAuth } from '../../lib/auth-context';

export function RegisterPage() {
  const navigate = useNavigate();
  const { register } = useAuth();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    birthDate: '',
    education: '',
    specialization: '',
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      await register(formData);
      navigate('/status-pendaftaran');
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-secondary py-12 px-4">
      <div className="max-w-2xl mx-auto">
        <Card>
          <CardHeader>
            <CardTitle>Daftar Anggota ITLA Pusat</CardTitle>
            <CardDescription>
              Lengkapi formulir di bawah ini untuk mendaftar sebagai anggota ITLA
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <Alert variant="info">
                Setelah mengisi formulir, data Anda akan diverifikasi oleh tim admin. 
                Anda akan menerima notifikasi melalui email.
              </Alert>

              <div className="space-y-4">
                <h4 className="font-medium">Data Pribadi</h4>
                
                <Input
                  label="Nama Lengkap"
                  name="name"
                  placeholder="Masukkan nama lengkap"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />

                <Input
                  label="Email"
                  name="email"
                  type="email"
                  placeholder="nama@email.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />

                <Input
                  label="Nomor Telepon"
                  name="phone"
                  type="tel"
                  placeholder="081234567890"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />

                <Input
                  label="Tanggal Lahir"
                  name="birthDate"
                  type="date"
                  value={formData.birthDate}
                  onChange={handleChange}
                  required
                />

                <Textarea
                  label="Alamat Lengkap"
                  name="address"
                  placeholder="Masukkan alamat lengkap"
                  value={formData.address}
                  onChange={handleChange}
                  required
                  rows={3}
                />
              </div>

              <div className="space-y-4">
                <h4 className="font-medium">Data Profesional</h4>
                
                <Input
                  label="Pendidikan Terakhir"
                  name="education"
                  placeholder="Contoh: S1 Pariwisata, D3 Perhotelan"
                  value={formData.education}
                  onChange={handleChange}
                  required
                />

                <Input
                  label="Spesialisasi Tour Leader"
                  name="specialization"
                  placeholder="Contoh: Wisata Budaya, Wisata Alam, City Tour"
                  value={formData.specialization}
                  onChange={handleChange}
                  required
                />

                <div>
                  <label className="block mb-2 text-sm">
                    Dokumen Pendukung (Opsional)
                  </label>
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
                    Format: PDF, JPG, PNG (Max 5MB)
                  </p>
                </div>
              </div>

              <div className="flex gap-3">
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => navigate('/')}
                  className="flex-1"
                >
                  Batal
                </Button>
                <Button type="submit" className="flex-1" disabled={loading}>
                  {loading ? 'Mengirim...' : 'Kirim Pendaftaran'}
                </Button>
              </div>

              <p className="text-xs text-center text-muted-foreground">
                Dengan mendaftar, Anda menyetujui syarat dan ketentuan ITLA Pusat
              </p>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
