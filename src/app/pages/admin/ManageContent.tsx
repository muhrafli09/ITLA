import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '../../components/design-system/Card';
import { Button } from '../../components/design-system/Button';
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from '../../components/design-system/Table';
import { Edit2, Plus, Trash2, Eye } from 'lucide-react';

export function ManageContent() {
    const [pages] = useState([
        { id: 1, title: 'Landing Page', lastModified: '2026-02-15', status: 'Published' },
        { id: 2, title: 'FAQ', lastModified: '2026-02-10', status: 'Published' },
        { id: 3, title: 'Tentang ITLA', lastModified: '2026-01-20', status: 'Draft' },
        { id: 4, title: 'Kebijakan Privasi', lastModified: '2026-01-05', status: 'Published' },
    ]);

    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-3xl font-bold">Kelola Konten</h1>
                    <p className="text-muted-foreground mt-1">Atur konten halaman statis dan CMS</p>
                </div>
                <Button>
                    <Plus className="mr-2 h-4 w-4" />
                    Halaman Baru
                </Button>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
                <Card className="md:col-span-2">
                    <CardHeader>
                        <CardTitle>Daftar Halaman</CardTitle>
                        <CardDescription>Manajemen halaman-halaman utama situs</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <Table>
                            <TableHeader>
                                <TableRow>
                                    <TableHead>Judul Halaman</TableHead>
                                    <TableHead>Terakhir Diubah</TableHead>
                                    <TableHead>Status</TableHead>
                                    <TableHead className="text-right">Aksi</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {pages.map((page) => (
                                    <TableRow key={page.id}>
                                        <TableCell className="font-medium">{page.title}</TableCell>
                                        <TableCell>{page.lastModified}</TableCell>
                                        <TableCell>
                                            <span className={`inline-flex items-center px-2 py-0.5 rounded text-xs font-medium ${page.status === 'Published' ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'
                                                }`}>
                                                {page.status}
                                            </span>
                                        </TableCell>
                                        <TableCell className="text-right">
                                            <div className="flex justify-end gap-2">
                                                <Button variant="ghost" size="icon" title="Lihat">
                                                    <Eye className="h-4 w-4" />
                                                </Button>
                                                <Button variant="ghost" size="icon" title="Edit">
                                                    <Edit2 className="h-4 w-4" />
                                                </Button>
                                                <Button variant="ghost" size="icon" className="text-destructive" title="Hapus">
                                                    <Trash2 className="h-4 w-4" />
                                                </Button>
                                            </div>
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader>
                        <CardTitle>Pengaturan CMS</CardTitle>
                        <CardDescription>Konfigurasi global konten</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div className="p-4 rounded-lg bg-muted border border-border">
                            <h4 className="font-medium mb-1">Backup Konten</h4>
                            <p className="text-sm text-muted-foreground mb-3">Unduh cadangan seluruh konten situs dalam format JSON.</p>
                            <Button variant="outline" size="sm" className="w-full">Unduh Backup</Button>
                        </div>

                        <div className="p-4 rounded-lg bg-muted border border-border">
                            <h4 className="font-medium mb-1">Optimasi Gambar</h4>
                            <p className="text-sm text-muted-foreground mb-3">Mulai proses optimasi manual untuk semua gambar di server.</p>
                            <Button variant="outline" size="sm" className="w-full">Jalankan Optimasi</Button>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
