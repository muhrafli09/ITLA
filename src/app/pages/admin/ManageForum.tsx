import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '../../components/design-system/Card';
import { Button } from '../../components/design-system/Button';
import { Badge } from '../../components/design-system/Badge';
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell, TableEmptyState } from '../../components/design-system/Table';
import { Modal } from '../../components/design-system/Modal';
import { Alert } from '../../components/design-system/Alert';
import { forumTopics } from '../../lib/mock-data';
import { Plus, Edit, Trash2, CheckCircle } from 'lucide-react';

interface ForumTopic {
  id: number;
  podul: string;
  deskripsi: string;
  dibuat_oleh: number;
  created_at: string;
}

export function ManageForum() {
  const [showModal, setShowModal] = useState(false);
  const [editingTopic, setEditingTopic] = useState<ForumTopic | null>(null);
  const [formData, setFormData] = useState({ podul: '', deskripsi: '' });
  const [showSuccess, setShowSuccess] = useState(false);
  const [topics, setTopics] = useState<ForumTopic[]>(forumTopics);

  const handleOpenCreate = () => {
    setEditingTopic(null);
    setFormData({ podul: '', deskripsi: '' });
    setShowModal(true);
  };

  const handleOpenEdit = (topic: ForumTopic) => {
    setEditingTopic(topic);
    setFormData({ podul: topic.podul, deskripsi: topic.deskripsi });
    setShowModal(true);
  };

  const handleSave = () => {
    if (!formData.podul.trim() || !formData.deskripsi.trim()) {
      alert('Judul dan deskripsi tidak boleh kosong');
      return;
    }

    if (editingTopic) {
      // Update existing topic
      setTopics(topics.map(t => 
        t.id === editingTopic.id 
          ? { ...t, podul: formData.podul, deskripsi: formData.deskripsi }
          : t
      ));
    } else {
      // Create new topic
      const newTopic: ForumTopic = {
        id: Math.max(...topics.map(t => t.id)) + 1,
        podul: formData.podul,
        deskripsi: formData.deskripsi,
        dibuat_oleh: 1, // Admin ID
        created_at: new Date().toISOString(),
      };
      setTopics([newTopic, ...topics]);
    }

    setShowModal(false);
    setShowSuccess(true);
    setTimeout(() => setShowSuccess(false), 3000);
  };

  const handleDelete = (id: number) => {
    if (confirm('Apakah Anda yakin ingin menghapus forum diskusi ini?')) {
      setTopics(topics.filter(t => t.id !== id));
      setShowSuccess(true);
      setTimeout(() => setShowSuccess(false), 3000);
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Manajemen Forum</h1>
          <p className="text-muted-foreground mt-1">Kelola topik forum diskusi</p>
        </div>
        <Button onClick={handleOpenCreate}>
          <Plus className="h-4 w-4 mr-2" />
          Buat Forum Baru
        </Button>
      </div>

      {showSuccess && (
        <Alert variant="success">
          <CheckCircle className="h-4 w-4 mr-2" />
          Forum diskusi berhasil {editingTopic ? 'diperbarui' : 'dibuat'}!
        </Alert>
      )}

      <Card>
        <CardHeader>
          <CardTitle>Daftar Forum Diskusi ({topics.length})</CardTitle>
          <CardDescription>Kelola semua topik forum diskusi</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Judul</TableHead>
                <TableHead>Deskripsi</TableHead>
                <TableHead>Dibuat Oleh</TableHead>
                <TableHead>Tanggal</TableHead>
                <TableHead>Aksi</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {topics.length > 0 ? (
                topics.map((topic) => (
                  <TableRow key={topic.id}>
                    <TableCell className="font-medium">{topic.podul}</TableCell>
                    <TableCell className="max-w-md truncate">{topic.deskripsi}</TableCell>
                    <TableCell>User {topic.dibuat_oleh}</TableCell>
                    <TableCell>{new Date(topic.created_at).toLocaleDateString('id-ID')}</TableCell>
                    <TableCell>
                      <div className="flex gap-2">
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={() => handleOpenEdit(topic)}
                        >
                          <Edit className="h-4 w-4" />
                        </Button>
                        <Button
                          size="sm"
                          variant="destructive"
                          onClick={() => handleDelete(topic.id)}
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))
              ) : (
                <TableEmptyState message="Belum ada forum diskusi" />
              )}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      {/* Modal Create/Edit */}
      {showModal && (
        <Modal
          isOpen={true}
          onClose={() => setShowModal(false)}
          title={editingTopic ? 'Edit Forum Diskusi' : 'Buat Forum Diskusi Baru'}
          size="lg"
        >
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-2">Judul Forum</label>
              <input
                type="text"
                value={formData.podul}
                onChange={(e) => setFormData({ ...formData, podul: e.target.value })}
                placeholder="Masukkan judul forum diskusi"
                className="w-full p-3 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Deskripsi</label>
              <textarea
                value={formData.deskripsi}
                onChange={(e) => setFormData({ ...formData, deskripsi: e.target.value })}
                placeholder="Masukkan deskripsi forum diskusi"
                className="w-full p-3 border border-input rounded-lg min-h-[120px] focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>

            <div className="flex gap-3 pt-4">
              <Button
                variant="outline"
                onClick={() => setShowModal(false)}
                className="flex-1"
              >
                Batal
              </Button>
              <Button
                onClick={handleSave}
                className="flex-1"
              >
                {editingTopic ? 'Simpan Perubahan' : 'Buat Forum'}
              </Button>
            </div>
          </div>
        </Modal>
      )}
    </div>
  );
}
