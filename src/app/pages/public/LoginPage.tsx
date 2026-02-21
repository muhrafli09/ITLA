import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '../../components/design-system/Card';
import { Input } from '../../components/design-system/Input';
import { Button } from '../../components/design-system/Button';
import { Alert } from '../../components/design-system/Alert';
import { useAuth } from '../../lib/auth-context';

export function LoginPage() {
  const navigate = useNavigate();
  const { login } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      await login(email, password);
      // Redirect based on user role - handled by login function
      const stored = localStorage.getItem('itla_user');
      if (stored) {
        const user = JSON.parse(stored);
        navigate(user.role === 'admin' ? '/admin' : '/anggota');
      }
    } catch (err: any) {
      setError(err.message || 'Terjadi kesalahan');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-secondary flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <Card>
          <CardHeader>
            <CardTitle>Masuk ke ITLA Pusat</CardTitle>
            <CardDescription>Masukkan email dan kata sandi Anda untuk melanjutkan</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              {error && (
                <Alert variant="error">{error}</Alert>
              )}

              <Alert variant="info" title="Akun Demo">
                <div className="space-y-1 text-xs">
                  <p><strong>Admin:</strong> admin@itla.id / admin123</p>
                  <p><strong>Anggota Aktif:</strong> anggota@test.com / test123</p>
                  <p><strong>Anggota Pending:</strong> pending@test.com / test123</p>
                </div>
              </Alert>

              <Input
                label="Email"
                type="email"
                placeholder="nama@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />

              <Input
                label="Kata Sandi"
                type="password"
                placeholder="Masukkan kata sandi"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />

              <div className="flex items-center justify-between text-sm">
                <a href="#" className="text-accent hover:underline">
                  Lupa kata sandi?
                </a>
              </div>

              <Button type="submit" className="w-full" disabled={loading}>
                {loading ? 'Memproses...' : 'Masuk'}
              </Button>

              <div className="text-center text-sm text-muted-foreground">
                Belum punya akun?{' '}
                <button
                  type="button"
                  onClick={() => navigate('/daftar')}
                  className="text-accent hover:underline"
                >
                  Daftar di sini
                </button>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
