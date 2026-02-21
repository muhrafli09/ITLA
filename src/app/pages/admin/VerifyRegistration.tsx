import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '../../components/design-system/Card';
import { Button } from '../../components/design-system/Button';
import { Badge, getStatusBadgeVariant, getStatusLabel } from '../../components/design-system/Badge';
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell, TableEmptyState } from '../../components/design-system/Table';
import { Modal, ConfirmModal } from '../../components/design-system/Modal';
import { Input, Textarea } from '../../components/design-system/Input';
import { registrations } from '../../lib/mock-data';

export function VerifyRegistration() {
  const [selectedRegistration, setSelectedRegistration] = useState<any>(null);
  const [showRejectModal, setShowRejectModal] = useState(false);
  const [rejectionReason, setRejectionReason] = useState('');
  const [expiryDate, setExpiryDate] = useState('2027-02-28');

  const handleApprove = () => {
    alert(`Pendaftaran ${selectedRegistration.name} disetujui dengan masa berlaku hingga ${expiryDate}`);
    setSelectedRegistration(null);
  };

  const handleReject = () => {
    alert(`Pendaftaran ${selectedRegistration.name} ditolak. Alasan: ${rejectionReason}`);
    setShowRejectModal(false);
    setSelectedRegistration(null);
    setRejectionReason('');
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Verifikasi Pendaftaran</h1>
        <p className="text-muted-foreground mt-1">Tinjau dan verifikasi pendaftaran anggota baru</p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Antrian Pendaftaran ({registrations.length})</CardTitle>
          <CardDescription>Daftar pendaftaran yang menunggu verifikasi</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Nama</TableHead>
                <TableHead>Email</TableHead>
                <TableHead>Telepon</TableHead>
                <TableHead>Tanggal Daftar</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Aksi</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {registrations.length > 0 ? (
                registrations.map((reg) => (
                  <TableRow key={reg.id}>
                    <TableCell className="font-medium">{reg.name}</TableCell>
                    <TableCell>{reg.email}</TableCell>
                    <TableCell>{reg.phone}</TableCell>
                    <TableCell>{new Date(reg.date).toLocaleDateString('id-ID')}</TableCell>
                    <TableCell>
                      <Badge variant={getStatusBadgeVariant(reg.status)}>
                        {getStatusLabel(reg.status)}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => setSelectedRegistration(reg)}
                      >
                        Tinjau
                      </Button>
                    </TableCell>
                  </TableRow>
                ))
              ) : (
                <TableEmptyState message="Tidak ada pendaftaran yang menunggu verifikasi" />
              )}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      {/* Detail Modal */}
      {selectedRegistration && (
        <Modal
          isOpen={true}
          onClose={() => setSelectedRegistration(null)}
          title="Detail Pendaftaran"
          size="lg"
        >
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-sm text-muted-foreground">Nama Lengkap</p>
                <p className="font-medium">{selectedRegistration.name}</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Email</p>
                <p className="font-medium">{selectedRegistration.email}</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Telepon</p>
                <p className="font-medium">{selectedRegistration.phone}</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Tanggal Daftar</p>
                <p className="font-medium">{new Date(selectedRegistration.date).toLocaleDateString('id-ID')}</p>
              </div>
            </div>

            <div className="border-t border-border pt-4">
              <h4 className="font-medium mb-3">Aksi Verifikasi</h4>
              
              <div className="mb-4">
                <Input
                  label="Masa Berlaku Keanggotaan"
                  type="date"
                  value={expiryDate}
                  onChange={(e) => setExpiryDate(e.target.value)}
                />
              </div>

              <div className="flex gap-3">
                <Button
                  variant="destructive"
                  onClick={() => setShowRejectModal(true)}
                  className="flex-1"
                >
                  Tolak
                </Button>
                <Button onClick={handleApprove} className="flex-1">
                  Setujui
                </Button>
              </div>
            </div>
          </div>
        </Modal>
      )}

      {/* Reject Modal */}
      <Modal
        isOpen={showRejectModal}
        onClose={() => setShowRejectModal(false)}
        title="Tolak Pendaftaran"
        size="md"
      >
        <div className="space-y-4">
          <Textarea
            label="Alasan Penolakan"
            placeholder="Jelaskan alasan penolakan..."
            value={rejectionReason}
            onChange={(e) => setRejectionReason(e.target.value)}
            required
            rows={4}
          />

          <div className="flex gap-3">
            <Button variant="outline" onClick={() => setShowRejectModal(false)} className="flex-1">
              Batal
            </Button>
            <Button variant="destructive" onClick={handleReject} className="flex-1">
              Konfirmasi Penolakan
            </Button>
          </div>
        </div>
      </Modal>
    </div>
  );
}
