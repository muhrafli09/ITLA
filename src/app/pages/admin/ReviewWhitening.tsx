import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '../../components/design-system/Card';
import { Button } from '../../components/design-system/Button';
import { Badge, getStatusBadgeVariant } from '../../components/design-system/Badge';
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell, TableEmptyState } from '../../components/design-system/Table';
import { Modal } from '../../components/design-system/Modal';
import { Textarea } from '../../components/design-system/Input';
import { whiteningRequests } from '../../lib/mock-data';

export function ReviewWhitening() {
    const [selectedRequest, setSelectedRequest] = useState<any>(null);
    const [showRejectModal, setShowRejectModal] = useState(false);
    const [rejectionReason, setRejectionReason] = useState('');

    const handleApprove = () => {
        alert(`Permohonan pemutihan ${selectedRequest.memberName} disetujui.`);
        setSelectedRequest(null);
    };

    const handleReject = () => {
        alert(`Permohonan pemutihan ${selectedRequest.memberName} ditolak. Alasan: ${rejectionReason}`);
        setShowRejectModal(false);
        setSelectedRequest(null);
        setRejectionReason('');
    };

    return (
        <div className="space-y-6">
            <div>
                <h1 className="text-3xl font-bold">Tinjau Pemutihan</h1>
                <p className="text-muted-foreground mt-1">Tinjau permohonan pemutihan keanggotaan</p>
            </div>

            <Card>
                <CardHeader>
                    <CardTitle>Antrian Pemutihan ({whiteningRequests.length})</CardTitle>
                    <CardDescription>Daftar permohonan pemutihan yang menunggu tinjauan</CardDescription>
                </CardHeader>
                <CardContent>
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead>Nama</TableHead>
                                <TableHead>Alasan</TableHead>
                                <TableHead>Tanggal Pengajuan</TableHead>
                                <TableHead>Status</TableHead>
                                <TableHead>Aksi</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {whiteningRequests.length > 0 ? (
                                whiteningRequests.map((req) => (
                                    <TableRow key={req.id}>
                                        <TableCell className="font-medium">{req.memberName}</TableCell>
                                        <TableCell className="max-w-xs truncate">{req.reason}</TableCell>
                                        <TableCell>{new Date(req.requestDate).toLocaleDateString('id-ID')}</TableCell>
                                        <TableCell>
                                            <Badge variant={getStatusBadgeVariant(req.status)}>
                                                {req.status.replace('_', ' ')}
                                            </Badge>
                                        </TableCell>
                                        <TableCell>
                                            <Button
                                                size="sm"
                                                variant="outline"
                                                onClick={() => setSelectedRequest(req)}
                                            >
                                                Tinjau
                                            </Button>
                                        </TableCell>
                                    </TableRow>
                                ))
                            ) : (
                                <TableEmptyState message="Tidak ada permohonan pemutihan yang menunggu tinjauan" />
                            )}
                        </TableBody>
                    </Table>
                </CardContent>
            </Card>

            {/* Detail Modal */}
            {selectedRequest && (
                <Modal
                    isOpen={true}
                    onClose={() => setSelectedRequest(null)}
                    title="Detail Permohonan Pemutihan"
                    size="lg"
                >
                    <div className="space-y-4">
                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <p className="text-sm text-muted-foreground">Nama Pemohon</p>
                                <p className="font-medium">{selectedRequest.memberName}</p>
                            </div>
                            <div>
                                <p className="text-sm text-muted-foreground">Tanggal Pengajuan</p>
                                <p className="font-medium">{new Date(selectedRequest.requestDate).toLocaleDateString('id-ID')}</p>
                            </div>
                        </div>

                        <div>
                            <p className="text-sm text-muted-foreground">Alasan Pemutihan</p>
                            <p className="p-3 bg-muted rounded-md mt-1">{selectedRequest.reason}</p>
                        </div>

                        <div className="border-t border-border pt-4 flex gap-3">
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
                </Modal>
            )}

            {/* Reject Modal */}
            <Modal
                isOpen={showRejectModal}
                onClose={() => setShowRejectModal(false)}
                title="Tolak Permohonan"
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
