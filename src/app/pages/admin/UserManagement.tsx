import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '../../components/design-system/Card';
import { Button } from '../../components/design-system/Button';
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from '../../components/design-system/Table';
import { Badge } from '../../components/design-system/Badge';
import { Search, Filter, Mail, UserMinus, UserPlus, MoreVertical, Edit, Trash2, X } from 'lucide-react';
import { Input } from '../../components/design-system/Input';

export function UserManagement() {
    const [users, setUsers] = useState([
        { id: '1', name: 'Andi Wijaya', email: 'andi@example.com', role: 'Anggota', status: 'Active', joined: '2025-10-12' },
        { id: '2', name: 'Dewi Kartika', email: 'dewi@example.com', role: 'Anggota', status: 'Pending', joined: '2026-02-21' },
        { id: '3', name: 'Budi Santoso', email: 'budi@example.com', role: 'Admin', status: 'Active', joined: '2024-05-15' },
        { id: '4', name: 'Siti Aminah', email: 'siti@example.com', role: 'Anggota', status: 'Expired', joined: '2023-11-20' },
    ]);

    const [selectedUser, setSelectedUser] = useState<typeof users[0] | null>(null);
    const [isEditOpen, setIsEditOpen] = useState(false);
    const [editForm, setEditForm] = useState({ name: '', email: '', role: '', status: '' });

    const handleEdit = (user: typeof users[0]) => {
        setSelectedUser(user);
        setEditForm({ name: user.name, email: user.email, role: user.role, status: user.status });
        setIsEditOpen(true);
    };

    const handleSaveEdit = () => {
        if (selectedUser) {
            setUsers(users.map(u => u.id === selectedUser.id ? { ...u, ...editForm } : u));
            setIsEditOpen(false);
            alert('Data pengguna berhasil diperbarui!');
        }
    };

    const handleDelete = (userId: string) => {
        if (confirm('Apakah Anda yakin ingin menghapus pengguna ini?')) {
            setUsers(users.filter(u => u.id !== userId));
            alert('Pengguna berhasil dihapus!');
        }
    };

    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-3xl font-bold">Kelola Pengguna</h1>
                    <p className="text-muted-foreground mt-1">Manajemen seluruh anggota dan administrator ITLA</p>
                </div>
                <Button>
                    <UserPlus className="mr-2 h-4 w-4" />
                    Tambah Admin
                </Button>
            </div>

            <div className="flex gap-4 items-end">
                <div className="flex-1">
                    <Input
                        label="Cari Anggota"
                        placeholder="Nama, email, atau nomor ID..."
                        icon={<Search className="h-4 w-4" />}
                    />
                </div>
                <div className="w-48">
                    <label className="text-sm font-medium mb-1.5 block">Status</label>
                    <select className="w-full p-2 border border-border rounded-md bg-transparent">
                        <option>Semua Status</option>
                        <option>Aktif</option>
                        <option>Pending</option>
                        <option>Expired</option>
                    </select>
                </div>
                <Button variant="outline">
                    <Filter className="mr-2 h-4 w-4" />
                    Filter
                </Button>
            </div>

            <Card>
                <CardHeader>
                    <CardTitle>Daftar Pengguna</CardTitle>
                    <CardDescription>Menampilkan {users.length} pengguna terdaftar</CardDescription>
                </CardHeader>
                <CardContent>
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead>Nama</TableHead>
                                <TableHead>Role</TableHead>
                                <TableHead>Status</TableHead>
                                <TableHead>Bergabung</TableHead>
                                <TableHead className="text-right">Aksi</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {users.map((user) => (
                                <TableRow key={user.id}>
                                    <TableCell>
                                        <div className="flex flex-col">
                                            <span className="font-medium">{user.name}</span>
                                            <span className="text-xs text-muted-foreground">{user.email}</span>
                                        </div>
                                    </TableCell>
                                    <TableCell>
                                        <Badge variant="outline">{user.role}</Badge>
                                    </TableCell>
                                    <TableCell>
                                        <Badge
                                            variant={
                                                user.status === 'Active' ? 'success' :
                                                    user.status === 'Pending' ? 'warning' : 'destructive'
                                            }
                                        >
                                            {user.status}
                                        </Badge>
                                    </TableCell>
                                    <TableCell>{user.joined}</TableCell>
                                    <TableCell className="text-right">
                                        <div className="flex justify-end gap-2">
                                            <Button variant="ghost" size="icon" title="Edit" onClick={() => handleEdit(user)}>
                                                <Edit className="h-4 w-4" />
                                            </Button>
                                            <Button variant="ghost" size="icon" className="text-destructive" title="Hapus" onClick={() => handleDelete(user.id)}>
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

            {isEditOpen && selectedUser && (
                <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
                    <Card className="w-full max-w-md">
                        <CardHeader className="flex flex-row items-center justify-between">
                            <CardTitle>Edit Pengguna</CardTitle>
                            <Button variant="ghost" size="icon" onClick={() => setIsEditOpen(false)}>
                                <X className="h-4 w-4" />
                            </Button>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <Input
                                label="Nama"
                                value={editForm.name}
                                onChange={(e) => setEditForm({ ...editForm, name: e.target.value })}
                            />
                            <Input
                                label="Email"
                                type="email"
                                value={editForm.email}
                                onChange={(e) => setEditForm({ ...editForm, email: e.target.value })}
                            />
                            <div>
                                <label className="text-sm font-medium mb-1.5 block">Role</label>
                                <select
                                    value={editForm.role}
                                    onChange={(e) => setEditForm({ ...editForm, role: e.target.value })}
                                    className="w-full p-2 border border-border rounded-md bg-transparent"
                                >
                                    <option>Anggota</option>
                                    <option>Admin</option>
                                </select>
                            </div>
                            <div>
                                <label className="text-sm font-medium mb-1.5 block">Status</label>
                                <select
                                    value={editForm.status}
                                    onChange={(e) => setEditForm({ ...editForm, status: e.target.value })}
                                    className="w-full p-2 border border-border rounded-md bg-transparent"
                                >
                                    <option>Active</option>
                                    <option>Pending</option>
                                    <option>Expired</option>
                                </select>
                            </div>
                            <div className="flex gap-2">
                                <Button variant="outline" className="flex-1" onClick={() => setIsEditOpen(false)}>
                                    Batal
                                </Button>
                                <Button className="flex-1" onClick={handleSaveEdit}>
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
