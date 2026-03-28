import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '../../components/design-system/Card';
import { Button } from '../../components/design-system/Button';
import { Badge } from '../../components/design-system/Badge';
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from '../../components/design-system/Table';
import { Modal } from '../../components/design-system/Modal';
import { Input, Textarea } from '../../components/design-system/Input';
import { Plus, Edit2, Trash2, Calendar, MapPin, Users } from 'lucide-react';

interface Event {
  id: string;
  title: string;
  description: string;
  date: string;
  location: string;
  capacity: number;
  registered: number;
  status: 'DRAFT' | 'PUBLISHED' | 'ONGOING' | 'COMPLETED';
}

export function ManageEvents() {
  const [events, setEvents] = useState<Event[]>([
    {
      id: '1',
      title: 'Seminar Nasional Tour Leader Indonesia 2026',
      description: 'Seminar dengan tema "Inovasi Pariwisata Indonesia di Era Digital untuk Tour Leader Profesional"',
      date: '2026-03-20',
      location: 'Hotel Grand Sahid Jaya, Jakarta',
      capacity: 100,
      registered: 67,
      status: 'PUBLISHED',
    },
    {
      id: '2',
      title: 'Workshop Komunikasi Efektif untuk Tour Leader',
      description: 'Workshop intensif mengenai teknik komunikasi efektif dengan wisatawan domestik dan mancanegara',
      date: '2026-04-15',
      location: 'Bali Tourism Training Center',
      capacity: 50,
      registered: 32,
      status: 'PUBLISHED',
    },
    {
      id: '3',
      title: 'Pelatihan Manajemen Destinasi Wisata',
      description: 'Pelatihan komprehensif tentang pengelolaan dan promosi destinasi wisata Indonesia',
      date: '2026-06-12',
      location: 'Yogyakarta Convention Center',
      capacity: 75,
      registered: 45,
      status: 'PUBLISHED',
    },
  ]);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingEvent, setEditingEvent] = useState<Event | null>(null);
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    date: '',
    location: '',
    capacity: '',
  });

  const handleOpenModal = (event?: Event) => {
    if (event) {
      setEditingEvent(event);
      setFormData({
        title: event.title,
        description: event.description,
        date: event.date,
        location: event.location,
        capacity: event.capacity.toString(),
      });
    } else {
      setEditingEvent(null);
      setFormData({ title: '', description: '', date: '', location: '', capacity: '' });
    }
    setIsModalOpen(true);
  };

  const handleSave = () => {
    if (!formData.title || !formData.date || !formData.location || !formData.capacity) {
      alert('Semua field harus diisi');
      return;
    }

    if (editingEvent) {
      setEvents(events.map(e => e.id === editingEvent.id ? {
        ...e,
        ...formData,
        capacity: parseInt(formData.capacity),
      } : e));
    } else {
      setEvents([...events, {
        id: Date.now().toString(),
        ...formData,
        capacity: parseInt(formData.capacity),
        registered: 0,
        status: 'DRAFT',
      }]);
    }
    setIsModalOpen(false);
  };

  const handleDelete = (id: string) => {
    if (confirm('Yakin ingin menghapus kegiatan ini?')) {
      setEvents(events.filter(e => e.id !== id));
    }
  };

  const getStatusBadge = (status: string) => {
    const variants: Record<string, any> = {
      DRAFT: 'secondary',
      PUBLISHED: 'active',
      ONGOING: 'warning',
      COMPLETED: 'success',
    };
    const labels: Record<string, string> = {
      DRAFT: 'Draft',
      PUBLISHED: 'Dipublikasikan',
      ONGOING: 'Sedang Berlangsung',
      COMPLETED: 'Selesai',
    };
    return <Badge variant={variants[status]}>{labels[status]}</Badge>;
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-start">
        <div>
          <h1 className="text-3xl font-bold">Manajemen Kegiatan Tour Leader</h1>
          <p className="text-muted-foreground mt-1">Kelola seminar dan workshop pariwisata</p>
        </div>
        <Button onClick={() => handleOpenModal()}>
          <Plus className="h-4 w-4 mr-2" />
          Tambah Kegiatan
        </Button>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Daftar Kegiatan ({events.length})</CardTitle>
          <CardDescription>Semua kegiatan yang telah dibuat</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Judul</TableHead>
                <TableHead>Tanggal</TableHead>
                <TableHead>Lokasi</TableHead>
                <TableHead>Peserta</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Aksi</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {events.map((event) => (
                <TableRow key={event.id}>
                  <TableCell className="font-medium">{event.title}</TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4 text-muted-foreground" />
                      {new Date(event.date).toLocaleDateString('id-ID')}
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <MapPin className="h-4 w-4 text-muted-foreground" />
                      {event.location}
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <Users className="h-4 w-4 text-muted-foreground" />
                      {event.registered}/{event.capacity}
                    </div>
                  </TableCell>
                  <TableCell>{getStatusBadge(event.status)}</TableCell>
                  <TableCell>
                    <div className="flex gap-2">
                      <Button size="sm" variant="outline" onClick={() => handleOpenModal(event)}>
                        <Edit2 className="h-4 w-4" />
                      </Button>
                      <Button size="sm" variant="destructive" onClick={() => handleDelete(event.id)}>
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

      {isModalOpen && (
        <Modal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          title={editingEvent ? 'Edit Kegiatan' : 'Tambah Kegiatan'}
          size="lg"
        >
          <div className="space-y-4">
            <Input
              label="Judul Kegiatan"
              placeholder="Masukkan judul kegiatan"
              value={formData.title}
              onChange={(e) => setFormData({ ...formData, title: e.target.value })}
            />
            <Textarea
              label="Deskripsi"
              placeholder="Jelaskan kegiatan ini"
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              rows={3}
            />
            <Input
              label="Tanggal"
              type="date"
              value={formData.date}
              onChange={(e) => setFormData({ ...formData, date: e.target.value })}
            />
            <Input
              label="Lokasi"
              placeholder="Masukkan lokasi kegiatan"
              value={formData.location}
              onChange={(e) => setFormData({ ...formData, location: e.target.value })}
            />
            <Input
              label="Kapasitas"
              type="number"
              placeholder="Jumlah peserta maksimal"
              value={formData.capacity}
              onChange={(e) => setFormData({ ...formData, capacity: e.target.value })}
            />
            <div className="flex gap-3 pt-4">
              <Button variant="outline" onClick={() => setIsModalOpen(false)} className="flex-1">
                Batal
              </Button>
              <Button onClick={handleSave} className="flex-1">
                Simpan
              </Button>
            </div>
          </div>
        </Modal>
      )}
    </div>
  );
}
