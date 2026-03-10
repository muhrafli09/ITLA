import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '../../components/design-system/Card';
import { Button } from '../../components/design-system/Button';
import { Badge, getStatusBadgeVariant, getStatusLabel } from '../../components/design-system/Badge';
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from '../../components/design-system/Table';
import { Modal } from '../../components/design-system/Modal';
import { Textarea } from '../../components/design-system/Input';
import { payments } from '../../lib/mock-data';
import { formatCurrency } from '../../lib/utils';
import { CheckCircle, XCircle } from 'lucide-react';

export function ValidatePayment() {
  const [selectedPayment, setSelectedPayment] = useState<any>(null);
  const [rejectionReason, setRejectionReason] = useState('');

  const handleApprove = () => {
    alert(`Pembayaran dari ${selectedPayment.memberName} telah divalidasi!`);
    setSelectedPayment(null);
  };

  const handleReject = () => {
    if (!rejectionReason.trim()) {
      alert('Silakan masukkan alasan penolakan');
      return;
    }
    alert(`Pembayaran dari ${selectedPayment.memberName} telah ditolak. Alasan: ${rejectionReason}`);
    setSelectedPayment(null);
    setRejectionReason('');
  };

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
                    <Button size="sm" variant="outline" onClick={() => setSelectedPayment(payment)}>
                      Tinjau
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      {selectedPayment && (
        <Modal
          isOpen={true}
          onClose={() => setSelectedPayment(null)}
          title="Detail Pembayaran"
          size="lg"
        >
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-sm text-muted-foreground">Nama Anggota</p>
                <p className="font-medium">{selectedPayment.memberName}</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">No. Anggota</p>
                <p className="font-medium">{selectedPayment.memberNumber}</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Nominal</p>
                <p className="font-medium">{formatCurrency(selectedPayment.amount)}</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Periode</p>
                <p className="font-medium">{selectedPayment.period}</p>
              </div>
            </div>

            <div className="border-t border-border pt-4">
              <h4 className="font-medium mb-3">Aksi Validasi</h4>
              
              <Textarea
                label="Alasan Penolakan (jika ditolak)"
                placeholder="Jelaskan alasan penolakan..."
                value={rejectionReason}
                onChange={(e) => setRejectionReason(e.target.value)}
                rows={3}
              />

              <div className="flex gap-3 mt-4">
                <Button
                  variant="destructive"
                  onClick={handleReject}
                  className="flex-1"
                >
                  <XCircle className="mr-2 h-4 w-4" />
                  Tolak
                </Button>
                <Button onClick={handleApprove} className="flex-1">
                  <CheckCircle className="mr-2 h-4 w-4" />
                  Validasi
                </Button>
              </div>
            </div>
          </div>
        </Modal>
      )}
    </div>
  );
}
