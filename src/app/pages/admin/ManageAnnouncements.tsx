import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '../../components/design-system/Card';
import { Button } from '../../components/design-system/Button';
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from '../../components/design-system/Table';
import { Badge } from '../../components/design-system/Badge';
import { Plus, Megaphone, Calendar, Send, MoreHorizontal } from 'lucide-react';

export function ManageAnnouncements() {
    const [announcements] = useState([
        {
            id: 1,
            title: 'Pemeliharaan Sistem Terjadwal',
            category: 'Info',
            target: 'Semua Pengguna',
            date: '2026-02-25',
            status: 'Scheduled'
        },
        {
            id: 2,
            title: 'Pendaftaran Kompetisi ITLA 2026',
            category: 'Event',
            target: 'Mahasiswa',
            date: '2026-02-20',
            status: 'Active'
        },
        {
            id: 3,
            title: 'Update Kurikulum Sertifikasi',
            category: 'Penting',
            target: 'Anggota Profesional',
            date: '2026-02-18',
            status: 'Active'
        },
    ]);

    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-3xl font-bold">Kelola Pengumuman</h1>
                    <p className="text-muted-foreground mt-1">Publikasikan informasi penting kepada anggota</p>
                </div>
                <Button>
                    <Plus className="mr-2 h-4 w-4" />
                    Buat Pengumuman
                </Button>
            </div>

            <div className="grid md:grid-cols-4 gap-4">
                <Card className="flex flex-col items-center justify-center py-6 text-center">
                    <p className="text-3xl font-bold text-blue-600">12</p>
                    <p className="text-sm text-muted-foreground">Aktif</p>
                </Card>
                <Card className="flex flex-col items-center justify-center py-6 text-center">
                    <p className="text-3xl font-bold text-yellow-600">2</p>
                    <p className="text-sm text-muted-foreground">Terjadwal</p>
                </Card>
                <Card className="flex flex-col items-center justify-center py-6 text-center">
                    <p className="text-3xl font-bold text-green-600">45</p>
                    <p className="text-sm text-muted-foreground">Terkirim</p>
                </Card>
                <Card className="flex flex-col items-center justify-center py-6 text-center">
                    <p className="text-3xl font-bold text-gray-600">8</p>
                    <p className="text-sm text-muted-foreground">Draft</p>
                </Card>
            </div>

            <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0">
                    <div>
                        <CardTitle>Riwayat Pengumuman</CardTitle>
                        <CardDescription>Semua pesan yang telah atau akan dipublikasikan</CardDescription>
                    </div>
                    <div className="flex gap-2">
                        <Button variant="outline" size="sm">Filter</Button>
                        <Button variant="outline" size="sm">Export</Button>
                    </div>
                </CardHeader>
                <CardContent>
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead>Judul</TableHead>
                                <TableHead>Kategori</TableHead>
                                <TableHead>Target</TableHead>
                                <TableHead>Tanggal</TableHead>
                                <TableHead>Status</TableHead>
                                <TableHead className="text-right">Aksi</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {announcements.map((ann) => (
                                <TableRow key={ann.id}>
                                    <TableCell className="font-medium">
                                        <div className="flex items-center gap-2">
                                            <Megaphone className="h-4 w-4 text-blue-500" />
                                            {ann.title}
                                        </div>
                                    </TableCell>
                                    <TableCell>
                                        <Badge variant="outline">{ann.category}</Badge>
                                    </TableCell>
                                    <TableCell>{ann.target}</TableCell>
                                    <TableCell>
                                        <div className="flex items-center gap-1 text-sm">
                                            <Calendar className="h-3 w-3" />
                                            {ann.date}
                                        </div>
                                    </TableCell>
                                    <TableCell>
                                        <Badge variant={ann.status === 'Active' ? 'default' : 'warning'}>
                                            {ann.status}
                                        </Badge>
                                    </TableCell>
                                    <TableCell className="text-right">
                                        <Button variant="ghost" size="icon">
                                            <MoreHorizontal className="h-4 w-4" />
                                        </Button>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </CardContent>
            </Card>

            <div className="grid md:grid-cols-2 gap-6">
                <Card>
                    <CardHeader>
                        <CardTitle>Broadcast Cepat</CardTitle>
                        <CardDescription>Kirim pesan singkat via email/push notification</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div className="space-y-2">
                            <label className="text-sm font-medium">Target Audiens</label>
                            <select className="w-full p-2 border border-border rounded-md bg-transparent">
                                <option>Semua Anggota</option>
                                <option>Anggota Aktif</option>
                                <option>Menunggu Pembayaran</option>
                            </select>
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm font-medium">Pesan</label>
                            <textarea
                                className="w-full p-2 border border-border rounded-md bg-transparent"
                                rows={3}
                                placeholder="Tulis pesan singkat..."
                            />
                        </div>
                        <Button className="w-full">
                            <Send className="mr-2 h-4 w-4" />
                            Kirim Sekarang
                        </Button>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader>
                        <CardTitle>Template Pengumuman</CardTitle>
                        <CardDescription>Gunakan template yang sudah ada</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-2">
                        {[
                            'Verifikasi Keanggotaan Berhasil',
                            'Konfirmasi Pembayaran Iuran',
                            'Undangan Musyawarah Nasional',
                            'Peringatan Masa Berlaku Habis'
                        ].map((template, i) => (
                            <button key={i} className="w-full text-left p-2 hover:bg-muted rounded text-sm flex justify-between items-center transition-colors">
                                {template}
                                <Plus className="h-3 w-3 text-muted-foreground" />
                            </button>
                        ))}
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
