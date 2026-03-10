import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '../../components/design-system/Card';
import { Button } from '../../components/design-system/Button';
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from '../../components/design-system/Table';
import { Modal } from '../../components/design-system/Modal';
import { Input, Textarea } from '../../components/design-system/Input';
import { Edit2, Plus, Trash2, Eye, X } from 'lucide-react';

export function ManageContent() {
    const [pages, setPages] = useState([
        { id: 1, title: 'Landing Page', lastModified: '2026-02-15', status: 'Published' },
        { id: 2, title: 'FAQ', lastModified: '2026-02-10', status: 'Published' },
        { id: 3, title: 'Tentang ITLA', lastModified: '2026-01-20', status: 'Draft' },
        { id: 4, title: 'Kebijakan Privasi', lastModified: '2026-01-05', status: 'Published' },
    ]);

    const [isEditOpen, setIsEditOpen] = useState(false);
    const [selectedPage, setSelectedPage] = useState<any>(null);
    const [formData, setFormData] = useState({ title: '', content: '', status: 'Draft' });

    const handleCreate = () => {
        setSelectedPage(null);
        setFormData({ title: '', content: '', status: 'Draft' });
        setIsEditOpen(true);
    };

    const handleEdit = (page: any) => {
        setSelectedPage(page);
        setFormData({ title: page.title, content: '', status: page.status });
        setIsEditOpen(true);
    };

    const handleSave = () => {
        if (!formData.title.trim()) {
            alert('Judul halaman tidak boleh kosong');
            return;
        }

        if (selectedPage) {
            setPages(pages.map(p => p.id === selectedPage.id ? { ...p, title: formData.title, status: formData.status } : p));
            alert('Halaman berhasil diperbarui!');
        } else {
            const newPage = {
                id: Math.max(...pages.map(p => p.id), 0) + 1,
                title: formData.title,
                lastModified: new Date().toISOString().split('T')[0],
                status: formData.status
            };
            setPages([...pages, newPage]);
            alert('Halaman baru berhasil dibuat!');
        }
        setIsEditOpen(false);
    };

    const handleDelete = (id: number) => {
        if (confirm('Apakah Anda yakin ingin menghapus halaman ini?')) {
            setPages(pages.filter(p => p.id !== id));
            alert('Halaman berhasil dihapus!');
        }
    };

    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-3xl font-bold">Kelola Konten</h1>
                    <p className="text-muted-foreground mt-1">Atur konten halaman statis dan CMS</p>
                </div>
                <Button onClick={handleCreate}>
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
                                                <Button variant="ghost" size="icon" title="Edit" onClick={() => handleEdit(page)}>
                                                    <Edit2 className="h-4 w-4" />
                                                </Button>
                                                <Button variant="ghost" size="icon" className="text-destructive" title="Hapus" onClick={() => handleDelete(page.id)}>
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

            {isEditOpen && (
                <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
                    <Card className="w-full max-w-2xl">
                        <CardHeader className="flex flex-row items-center justify-between">
                            <CardTitle>{selectedPage ? 'Edit Halaman' : 'Buat Halaman Baru'}</CardTitle>
                            <Button variant="ghost" size="icon" onClick={() => setIsEditOpen(false)}>
                                <X className="h-4 w-4" />
                            </Button>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <Input
                                label="Judul Halaman"
                                value={formData.title}
                                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                                placeholder="Masukkan judul halaman"
                            />
                            <Textarea
                                label="Konten"
                                value={formData.content}
                                onChange={(e) => setFormData({ ...formData, content: e.target.value })}
                                placeholder="Masukkan konten halaman"
                                rows={6}
                            />
                            <div>
                                <label className="text-sm font-medium mb-1.5 block">Status</label>
                                <select
                                    value={formData.status}
                                    onChange={(e) => setFormData({ ...formData, status: e.target.value })}
                                    className="w-full p-2 border border-border rounded-md bg-transparent"
                                >
                                    <option>Draft</option>
                                    <option>Published</option>
                                </select>
                            </div>
                            <div className="flex gap-2">
                                <Button variant="outline" className="flex-1" onClick={() => setIsEditOpen(false)}>
                                    Batal
                                </Button>
                                <Button className="flex-1" onClick={handleSave}>
                                    Simpan
                                </Button>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            )}
        </div>
    );
}
