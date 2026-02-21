import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '../../components/design-system/Card';
import { Button } from '../../components/design-system/Button';
import { Badge } from '../../components/design-system/Badge';
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell, TableEmptyState } from '../../components/design-system/Table';
import { Modal } from '../../components/design-system/Modal';
import { forumReports } from '../../lib/mock-data';
import { AlertTriangle, ShieldCheck, Trash2 } from 'lucide-react';

export function ModerateForum() {
    const [selectedReport, setSelectedReport] = useState<any>(null);

    const handleDismiss = () => {
        alert(`Laporan #${selectedReport.id} diabaikan.`);
        setSelectedReport(null);
    };

    const handleTakeAction = () => {
        alert(`Tindakan diambil untuk laporan #${selectedReport.id}. Konten telah dihapus.`);
        setSelectedReport(null);
    };

    return (
        <div className="space-y-6">
            <div>
                <h1 className="text-3xl font-bold">Moderasi Forum</h1>
                <p className="text-muted-foreground mt-1">Pantau dan tindak lanjuti laporan konten forum</p>
            </div>

            <Card>
                <CardHeader>
                    <CardTitle>Laporan Masuk ({forumReports.length})</CardTitle>
                    <CardDescription>Konten yang dilaporkan oleh pengguna</CardDescription>
                </CardHeader>
                <CardContent>
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead>Pelapor</TableHead>
                                <TableHead>Tipe</TableHead>
                                <TableHead>Judul Konten</TableHead>
                                <TableHead>Alasan Laporan</TableHead>
                                <TableHead>Status</TableHead>
                                <TableHead>Aksi</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {forumReports.length > 0 ? (
                                forumReports.map((report) => (
                                    <TableRow key={report.id}>
                                        <TableCell>{report.reporter}</TableCell>
                                        <TableCell>{report.contentType}</TableCell>
                                        <TableCell className="max-w-xs truncate">{report.contentTitle}</TableCell>
                                        <TableCell>{report.reason}</TableCell>
                                        <TableCell>
                                            <Badge variant={report.status === 'BELUM_DITINJAU' ? 'warning' : 'success'}>
                                                {report.status.replace('_', ' ')}
                                            </Badge>
                                        </TableCell>
                                        <TableCell>
                                            <Button
                                                size="sm"
                                                variant="outline"
                                                onClick={() => setSelectedReport(report)}
                                            >
                                                Tinjau
                                            </Button>
                                        </TableCell>
                                    </TableRow>
                                ))
                            ) : (
                                <TableEmptyState message="Tidak ada laporan konten baru" />
                            )}
                        </TableBody>
                    </Table>
                </CardContent>
            </Card>

            {/* Detail Modal */}
            {selectedReport && (
                <Modal
                    isOpen={true}
                    onClose={() => setSelectedReport(null)}
                    title="Detail Laporan Forum"
                    size="lg"
                >
                    <div className="space-y-4">
                        <div className="flex items-center gap-2 p-3 bg-red-50 text-red-700 rounded-md border border-red-100">
                            <AlertTriangle className="h-5 w-5" />
                            <p className="text-sm font-medium">Laporan: {selectedReport.reason}</p>
                        </div>

                        <div className="space-y-2">
                            <p className="text-sm font-medium">Konten yang dilaporkan ({selectedReport.contentType}):</p>
                            <div className="p-4 bg-muted rounded-lg italic font-medium">
                                {selectedReport.contentTitle}
                            </div>
                            <p className="text-xs text-muted-foreground">Dilaporkan pada: {selectedReport.reportDate}</p>
                        </div>

                        <div className="border-t border-border pt-4 flex gap-3">
                            <Button
                                variant="outline"
                                onClick={handleDismiss}
                                className="flex-1"
                            >
                                <ShieldCheck className="mr-2 h-4 w-4" />
                                Abaikan Laporan
                            </Button>
                            <Button
                                variant="destructive"
                                onClick={handleTakeAction}
                                className="flex-1"
                            >
                                <Trash2 className="mr-2 h-4 w-4" />
                                Hapus Konten
                            </Button>
                        </div>
                    </div>
                </Modal>
            )}
        </div>
    );
}
