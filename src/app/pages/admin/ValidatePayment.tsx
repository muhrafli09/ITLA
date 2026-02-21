import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '../../components/design-system/Card';
import { Button } from '../../components/design-system/Button';
import { Badge, getStatusBadgeVariant, getStatusLabel } from '../../components/design-system/Badge';
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from '../../components/design-system/Table';
import { payments } from '../../lib/mock-data';
import { formatCurrency } from '../../lib/utils';

export function ValidatePayment() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Validasi Pembayaran</h1>
        <p className="text-muted-foreground mt-1">Verifikasi dan validasi bukti pembayaran anggota</p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Antrian Pembayaran ({payments.length})</CardTitle>
          <CardDescription>Daftar pembayaran yang menunggu validasi</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Nama Anggota</TableHead>
                <TableHead>No. Anggota</TableHead>
                <TableHead>Nominal</TableHead>
                <TableHead>Periode</TableHead>
                <TableHead>Tanggal Upload</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Aksi</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {payments.map((payment) => (
                <TableRow key={payment.id}>
                  <TableCell className="font-medium">{payment.memberName}</TableCell>
                  <TableCell>{payment.memberNumber}</TableCell>
                  <TableCell>{formatCurrency(payment.amount)}</TableCell>
                  <TableCell>{payment.period}</TableCell>
                  <TableCell>{new Date(payment.uploadDate).toLocaleDateString('id-ID')}</TableCell>
                  <TableCell>
                    <Badge variant={getStatusBadgeVariant(payment.status)}>
                      {getStatusLabel(payment.status)}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <Button size="sm" variant="outline">Tinjau</Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}
