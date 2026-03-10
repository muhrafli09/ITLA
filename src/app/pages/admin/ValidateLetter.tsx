import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '../../components/design-system/Card';
import { Button } from '../../components/design-system/Button';
import { Badge, getStatusBadgeVariant, getStatusLabel } from '../../components/design-system/Badge';
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from '../../components/design-system/Table';
import { Modal } from '../../components/design-system/Modal';
import { Textarea } from '../../components/design-system/Input';
import { letterRequests } from '../../lib/mock-data';
import { CheckCircle, XCircle } from 'lucide-react';

export function ValidateLetter() {
  const [selectedRequest, setSelectedRequest] = useState<any>(null);
  const [rejectionReason, setRejectionReason] = useState('');

  const handleApprove = () => {
    alert(`Surat untuk ${selectedRequest.memberName} telah disetujui!`);
    setSelectedRequest(null);
  };

  const handleReject = () => {
    if (!rejectionReason.trim()) {
      alert('Silakan masukkan alasan penolakan');
      return;
    }
    alert(`Surat untuk ${selectedRequest.memberName} telah ditolak. Alasan: ${rejectionReason}`);
    setSelectedRequest(null);
    setRejectionReason('');
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Validasi Surat</h1>
        <p className="text-muted-foreground mt-1">Tinjau dan setujui pengajuan surat dari anggota</p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Antrian Pengajuan Surat ({letterRequests.length})</CardTitle>
          <CardDescription>Daftar pengajuan surat yang menunggu persetujuan</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Nama Anggota</TableHead>
                <TableHead>No. Anggota</TableHead>
                <TableHead>Jenis Surat</TableHead>
                <TableHead>Tujuan</TableHead>
                <TableHead>Tanggal Ajukan</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Aksi</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {letterRequests.map((request) => (
                <TableRow key={request.id}>
                  <TableCell className="font-medium">{request.memberName}</TableCell>
                  <TableCell>{request.memberNumber}</TableCell>
                  <TableCell>{request.letterType}</TableCell>
                  <TableCell>{request.destination}</TableCell>
                  <TableCell>{new Date(request.requestDate).toLocaleDateString('id-ID')}</TableCell>
                  <TableCell>
                    <Badge variant={getStatusBadgeVariant(request.status)}>
                      {getStatusLabel(request.status)}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <Button size="sm" variant="outline" onClick={() => setSelectedRequest(request)}>
                      Tinjau
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      {selectedRequest && (
        <Modal
          isOpen={true}
          onClose={() => setSelectedRequest(null)}
          title="Detail Pengajuan Surat"
          size="lg"
        >
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-sm text-muted-foreground">Nama Anggota</p>
                <p className="font-medium">{selectedRequest.memberName}</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">No. Anggota</p>
                <p className="font-medium">{selectedRequest.memberNumber}</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Jenis Surat</p>
                <p className="font-medium">{selectedRequest.letterType}</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Tujuan</p>
                <p className="font-medium">{selectedRequest.destination || '-'}</p>
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
                  Setujui
                </Button>
              </div>
            </div>
          </div>
        </Modal>
      )}
    </div>
  );
}
