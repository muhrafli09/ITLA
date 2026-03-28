import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '../../components/design-system/Card';
import { Button } from '../../components/design-system/Button';
import { Alert } from '../../components/design-system/Alert';
import { Input, Textarea } from '../../components/design-system/Input';

export function Whitening() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Program Pemutihan</h1>
        <p className="text-muted-foreground mt-1">Aktifkan kembali keanggotaan yang tidak aktif</p>
      </div>

      <Alert variant="info" title="Tentang Program Pemutihan">
        Program pemutihan memungkinkan tour leader yang keanggotaannya sudah tidak aktif untuk mengaktifkan kembali tanpa membayar tunggakan, dengan syarat tertentu.
      </Alert>

      <Card>
        <CardHeader>
          <CardTitle>Syarat & Ketentuan</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="list-disc list-inside space-y-2 text-sm text-muted-foreground">
            <li>Keanggotaan terakhir tidak lebih dari 2 tahun</li>
            <li>Tidak memiliki tunggakan lainnya</li>
            <li>Melampirkan surat pernyataan kesediaan aktif kembali</li>
            <li>Membayar biaya aktivasi sebesar Rp 250.000</li>
          </ul>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Ajukan Pemutihan</CardTitle>
          <CardDescription>Isi formulir di bawah untuk mengajukan pemutihan</CardDescription>
        </CardHeader>
        <CardContent>
          <form className="space-y-4">
            <Textarea
              label="Alasan Pengajuan"
              placeholder="Jelaskan alasan Anda ingin mengaktifkan kembali keanggotaan..."
              rows={4}
              required
            />

            <div>
              <label className="block mb-2 text-sm">Dokumen Pendukung</label>
              <input
                type="file"
                className="block w-full text-sm text-muted-foreground
                  file:mr-4 file:py-2 file:px-4
                  file:rounded-lg file:border-0
                  file:text-sm file:font-medium
                  file:bg-accent file:text-accent-foreground
                  hover:file:bg-accent/90 file:cursor-pointer"
                accept=".pdf"
              />
            </div>

            <Button className="w-full">Kirim Pengajuan</Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
