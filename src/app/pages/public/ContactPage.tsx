import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '../../components/design-system/Card';
import { Input, Textarea } from '../../components/design-system/Input';
import { Button } from '../../components/design-system/Button';
import { Alert } from '../../components/design-system/Alert';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';

export function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen bg-secondary py-12 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Hubungi Kami</h1>
          <p className="text-muted-foreground">
            Ada pertanyaan? Kami siap membantu Anda
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Contact Info */}
          <div className="space-y-4">
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-start gap-3">
                  <div className="h-10 w-10 rounded-lg bg-accent text-accent-foreground flex items-center justify-center flex-shrink-0">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Email</h4>
                    <p className="text-sm text-muted-foreground">info@itla.id</p>
                    <p className="text-sm text-muted-foreground">admin@itla.id</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="flex items-start gap-3">
                  <div className="h-10 w-10 rounded-lg bg-accent text-accent-foreground flex items-center justify-center flex-shrink-0">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Telepon</h4>
                    <p className="text-sm text-muted-foreground">(021) 1234-5678</p>
                    <p className="text-sm text-muted-foreground">+62 812-3456-7890</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="flex items-start gap-3">
                  <div className="h-10 w-10 rounded-lg bg-accent text-accent-foreground flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Alamat</h4>
                    <p className="text-sm text-muted-foreground">
                      Jl. Contoh No. 123<br />
                      Jakarta Pusat 10110<br />
                      Indonesia
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="flex items-start gap-3">
                  <div className="h-10 w-10 rounded-lg bg-accent text-accent-foreground flex items-center justify-center flex-shrink-0">
                    <Clock className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Jam Operasional</h4>
                    <p className="text-sm text-muted-foreground">
                      Senin - Jumat: 09:00 - 17:00<br />
                      Sabtu - Minggu: Tutup
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle>Kirim Pesan</CardTitle>
                <CardDescription>
                  Isi formulir di bawah ini dan kami akan merespons secepatnya
                </CardDescription>
              </CardHeader>
              <CardContent>
                {submitted && (
                  <Alert variant="success" className="mb-4">
                    Pesan Anda telah terkirim. Kami akan menghubungi Anda segera!
                  </Alert>
                )}
                
                <form onSubmit={handleSubmit} className="space-y-4">
                  <Input
                    label="Nama Lengkap"
                    name="name"
                    placeholder="Masukkan nama Anda"
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
                    label="Subjek"
                    name="subject"
                    placeholder="Tentang apa pesan Anda?"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                  />

                  <Textarea
                    label="Pesan"
                    name="message"
                    placeholder="Tulis pesan Anda di sini..."
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                  />

                  <Button type="submit" className="w-full">
                    Kirim Pesan
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
