import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '../../components/design-system/Card';
import { Button } from '../../components/design-system/Button';
import { Alert } from '../../components/design-system/Alert';
import { Badge } from '../../components/design-system/Badge';
import { formatCurrency } from '../../lib/utils';
import { CreditCard, Upload, CheckCircle } from 'lucide-react';

export function RenewMembership() {
  const [selectedPeriod, setSelectedPeriod] = useState(12);
  const [showPaymentInfo, setShowPaymentInfo] = useState(false);
  const [uploaded, setUploaded] = useState(false);

  // Sesuai DOKUMENTASI.md seksion 4.2: pilih periode 1 / 6 / 12 bulan
  const periods = [
    { months: 1, price: 50000, label: '1 Bulan' },
    { months: 6, price: 250000, label: '6 Bulan' },
    { months: 12, price: 500000, label: '12 Bulan', popular: true },
  ];

  const selectedPrice = periods.find(p => p.months === selectedPeriod)?.price || 500000;

  const handleSubmit = () => {
    setUploaded(true);
  };

  if (uploaded) {
    return (
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold">Perpanjang Keanggotaan</h1>
          <p className="text-muted-foreground mt-1">Bukti pembayaran berhasil dikirim</p>
        </div>
        <Card>
          <CardContent className="pt-10 pb-10">
            <div className="text-center space-y-4">
              <div className="h-16 w-16 rounded-full bg-green-100 flex items-center justify-center mx-auto">
                <CheckCircle className="h-8 w-8 text-green-600" />
              </div>
              <h2 className="text-xl font-semibold">Bukti Pembayaran Terkirim</h2>
              <p className="text-muted-foreground max-w-sm mx-auto">
                Pembayaran Anda sedang diverifikasi oleh admin. Status keanggotaan akan diperbarui dalam 1–2 hari kerja.
              </p>
              <Badge variant="pending">MENUNGGU_VALIDASI</Badge>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Perpanjang Keanggotaan</h1>
        <p className="text-muted-foreground mt-1">Pilih periode perpanjangan dan lakukan pembayaran</p>
      </div>

      {/* Langkah 1: Pilih Periode */}
      <Card>
        <CardHeader>
          <CardTitle>Langkah 1 — Pilih Periode</CardTitle>
          <CardDescription>Pilih durasi perpanjangan keanggotaan Anda</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-3 gap-4">
            {periods.map((period) => (
              <button
                key={period.months}
                onClick={() => { setSelectedPeriod(period.months); setShowPaymentInfo(false); }}
                className={`p-6 rounded-lg border-2 transition-all text-left relative ${selectedPeriod === period.months
                    ? 'border-accent bg-accent/5'
                    : 'border-border hover:border-accent/50'
                  }`}
              >
                {period.popular && (
                  <Badge variant="active" className="absolute top-3 right-3">
                    Populer
                  </Badge>
                )}
                <h3 className="font-semibold text-lg mb-2">{period.label}</h3>
                <p className="text-2xl font-bold text-accent mb-1">
                  {formatCurrency(period.price)}
                </p>
                <p className="text-sm text-muted-foreground">
                  {formatCurrency(period.price / period.months)}/bulan
                </p>
              </button>
            ))}
          </div>

          <Button
            className="w-full mt-6"
            onClick={() => setShowPaymentInfo(true)}
          >
            Lanjutkan ke Pembayaran
          </Button>
        </CardContent>
      </Card>

      {/* Langkah 2: Info Pembayaran */}
      {showPaymentInfo && (
        <>
          <Card>
            <CardHeader>
              <CardTitle>Langkah 2 — Informasi Pembayaran</CardTitle>
              <CardDescription>Transfer ke rekening berikut</CardDescription>
            </CardHeader>
            <CardContent>
              <Alert variant="info" className="mb-4">
                Nominal yang harus ditransfer: <strong>{formatCurrency(selectedPrice)}</strong> untuk periode {periods.find(p => p.months === selectedPeriod)?.label}
              </Alert>

              <div className="space-y-3">
                <div className="p-4 bg-muted rounded-lg">
                  <p className="text-sm text-muted-foreground mb-1">Bank BCA</p>
                  <p className="font-mono text-lg font-semibold">1234567890</p>
                  <p className="text-sm">a.n. ITLA Pusat</p>
                </div>
                <div className="p-4 bg-muted rounded-lg">
                  <p className="text-sm text-muted-foreground mb-1">Bank Mandiri</p>
                  <p className="font-mono text-lg font-semibold">9876543210</p>
                  <p className="text-sm">a.n. ITLA Pusat</p>
                </div>
              </div>

              <Alert variant="warning" className="mt-4">
                Pastikan nominal transfer sesuai dengan jumlah yang tertera untuk mempercepat proses validasi.
              </Alert>
            </CardContent>
          </Card>

          {/* Langkah 3: Upload Bukti */}
          <Card>
            <CardHeader>
              <CardTitle>Langkah 3 — Upload Bukti Pembayaran</CardTitle>
              <CardDescription>Upload bukti transfer untuk divalidasi admin</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <label className="block mb-2 text-sm font-medium">Bukti Transfer</label>
                  <input
                    type="file"
                    className="block w-full text-sm text-muted-foreground
                      file:mr-4 file:py-2 file:px-4
                      file:rounded-lg file:border-0
                      file:text-sm file:font-medium
                      file:bg-accent file:text-accent-foreground
                      hover:file:bg-accent/90 file:cursor-pointer"
                    accept="image/*,.pdf"
                  />
                  <p className="mt-1 text-xs text-muted-foreground">
                    Format: JPG, PNG, PDF (Maks. 2MB)
                  </p>
                </div>

                <Button className="w-full" onClick={handleSubmit}>
                  <Upload className="h-4 w-4 mr-2" />
                  Kirim Bukti Pembayaran
                </Button>

                <Alert variant="info">
                  Setelah upload, pembayaran akan divalidasi oleh admin dalam 1–2 hari kerja.
                  Status keanggotaan Anda akan berubah menjadi <strong>AKTIF</strong> setelah divalidasi.
                </Alert>
              </div>
            </CardContent>
          </Card>
        </>
      )}
    </div>
  );
}
