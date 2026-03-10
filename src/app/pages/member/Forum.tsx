import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '../../components/design-system/Card';
import { Button } from '../../components/design-system/Button';
import { useAuth } from '../../lib/auth-context';
import { forumTopics } from '../../lib/mock-data';
import { MessageSquare, Eye, Plus, ArrowLeft } from 'lucide-react';

export function Forum() {
  const { user } = useAuth();
  const isActive = user?.memberStatus === 'AKTIF';
  const [selectedTopic, setSelectedTopic] = useState<string | null>(null);
  const [comment, setComment] = useState('');

  if (selectedTopic) {
    const topic = forumTopics.find(t => t.id === selectedTopic);
    return (
      <div className="space-y-6">
        <Button variant="outline" onClick={() => setSelectedTopic(null)} className="mb-4">
          <ArrowLeft className="h-4 w-4 mr-2" />
          Kembali ke Forum
        </Button>

        <Card>
          <CardHeader>
            <CardTitle>{topic?.title}</CardTitle>
            <div className="text-sm text-muted-foreground mt-2">
              <span>Oleh {topic?.author}</span>
              <span> • {new Date(topic?.date || '').toLocaleDateString('id-ID')}</span>
            </div>
          </CardHeader>
        </Card>

        {isActive && (
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Isi Komentar</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <textarea
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                placeholder="Tulis komentar Anda..."
                className="w-full p-3 border rounded-lg min-h-[120px] focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <Button onClick={() => {
                setComment('');
                alert('Komentar berhasil disimpan!');
              }}>
                Simpan Komentar
              </Button>
            </CardContent>
          </Card>
        )}
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Forum Diskusi</h1>
          <p className="text-muted-foreground mt-1">Diskusi dan berbagi dengan sesama anggota</p>
        </div>
        {isActive && (
          <Button>
            <Plus className="h-4 w-4 mr-2" />
            Buat Topik Baru
          </Button>
        )}
      </div>

      {!isActive && (
        <Card className="border-yellow-200 bg-yellow-50">
          <CardContent className="pt-6">
            <p className="text-sm text-yellow-800">
              Anda hanya dapat membaca forum. Aktifkan keanggotaan untuk dapat membuat posting dan komentar.
            </p>
          </CardContent>
        </Card>
      )}

      <div className="space-y-3">
        {forumTopics.map((topic) => (
          <Card key={topic.id} className="hover:shadow-md transition-shadow cursor-pointer" onClick={() => setSelectedTopic(topic.id)}>
            <CardHeader>
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1">
                  <CardTitle className="text-base mb-2">{topic.title}</CardTitle>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <span>{topic.author}</span>
                    <span>•</span>
                    <span>{new Date(topic.date).toLocaleDateString('id-ID')}</span>
                  </div>
                </div>
                <div className="flex flex-col items-end gap-2">
                  <div className="flex items-center gap-3 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <MessageSquare className="h-4 w-4" />
                      <span>{topic.replies}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Eye className="h-4 w-4" />
                      <span>{topic.views}</span>
                    </div>
                  </div>
                </div>
              </div>
            </CardHeader>
          </Card>
        ))}
      </div>
    </div>
  );
}
