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

  const periods = [
    { months: 6, price: 250000, label: '6 Bulan' },
    { months: 12, price: 500000, label: '12 Bulan', popular: true },
  ];

  const selectedPrice = periods.find(p => p.months === selectedPeriod)?.price || 500000;

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Perpanjang Keanggotaan</h1>
        <p className="text-muted-foreground mt-1">Pilih periode perpanjangan dan lakukan pembayaran</p>
      </div>

      {/* Period Selection */}
      <Card>
        <CardHeader>
          <CardTitle>Pilih Periode Perpanjangan</CardTitle>
          <CardDescription>Pilih durasi perpanjangan keanggotaan Anda</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-4">
            {periods.map((period) => (
              <button
                key={period.months}
                onClick={() => setSelectedPeriod(period.months)}
                className={`p-6 rounded-lg border-2 transition-all text-left relative ${
                  selectedPeriod === period.months
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

      {/* Payment Info */}
      {showPaymentInfo && (
        <>
          <Card>
            <CardHeader>
              <CardTitle>Informasi Pembayaran</CardTitle>
              <CardDescription>Transfer ke rekening berikut</CardDescription>
            </CardHeader>
            <CardContent>
              <Alert variant="info" className="mb-4">
                Nominal yang harus ditransfer: <strong>{formatCurrency(selectedPrice)}</strong>
              </Alert>

              <div className="space-y-4">
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
                Pastikan nominal transfer sesuai dengan jumlah yang tertera untuk mempercepat verifikasi.
              </Alert>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Upload Bukti Pembayaran</CardTitle>
              <CardDescription>Upload bukti transfer Anda</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <label className="block mb-2 text-sm">Bukti Transfer</label>
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
                    Format: JPG, PNG, PDF (Max 2MB)
                  </p>
                </div>

                <Button className="w-full">
                  <Upload className="h-4 w-4 mr-2" />
                  Kirim Bukti Pembayaran
                </Button>

                <Alert variant="success">
                  Setelah upload, pembayaran Anda akan divalidasi oleh admin dalam 1-2 hari kerja.
                </Alert>
              </div>
            </CardContent>
          </Card>
        </>
      )}
    </div>
  );
}
