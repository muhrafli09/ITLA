import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '../../components/design-system/Card';
import { Button } from '../../components/design-system/Button';
import { Badge } from '../../components/design-system/Badge';
import { Alert } from '../../components/design-system/Alert';
import { useAuth } from '../../lib/auth-context';
import { forumTopics } from '../../lib/mock-data';
import { MessageSquare, Eye, Plus, ArrowLeft, Send, CheckCircle } from 'lucide-react';

interface ForumComment {
  id: number;
  user: string;
  content: string;
  date: string;
}

export function Forum() {
  const { user } = useAuth();
  const isActive = user?.memberStatus === 'AKTIF';
  const [selectedTopic, setSelectedTopic] = useState<number | null>(null);
  const [comment, setComment] = useState('');
  const [comments, setComments] = useState<ForumComment[]>([
    {
      id: 1,
      user: 'Budi Santoso',
      content: 'Tips yang sangat berguna! Saya sudah mencoba dan hasilnya luar biasa.',
      date: '2026-02-18',
    },
    {
      id: 2,
      user: 'Siti Aminah',
      content: 'Terima kasih atas sharing-nya. Sangat membantu untuk project saya.',
      date: '2026-02-17',
    },
  ]);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSaveComment = () => {
    if (!comment.trim()) {
      alert('Komentar tidak boleh kosong');
      return;
    }

    const newComment: ForumComment = {
      id: comments.length + 1,
      user: user?.name || 'Anda',
      content: comment,
      date: new Date().toLocaleDateString('id-ID'),
    };

    setComments([...comments, newComment]);
    setComment('');
    setShowSuccess(true);
    setTimeout(() => setShowSuccess(false), 3000);
  };

  // View Detail Forum
  if (selectedTopic) {
    const topic = forumTopics.find(t => t.id === selectedTopic);

    return (
      <div className="space-y-6">
        <Button variant="outline" onClick={() => setSelectedTopic(null)}>
          <ArrowLeft className="h-4 w-4 mr-2" />
          Kembali ke Daftar Forum
        </Button>

        {/* Detail Forum */}
        <Card>
          <CardHeader>
            <CardTitle>{topic?.podul}</CardTitle>
            <CardDescription className="mt-2">
              <div className="flex items-center gap-4 text-sm">
                <span>Dibuat oleh: {topic?.user_id}</span>
                <span>•</span>
                <span>{new Date().toLocaleDateString('id-ID')}</span>
              </div>
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">{topic?.deskripsi}</p>
          </CardContent>
        </Card>

        {/* Daftar Komentar */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Komentar ({comments.length})</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {comments.length === 0 ? (
              <p className="text-muted-foreground text-center py-4">Belum ada komentar</p>
            ) : (
              comments.map((cmt) => (
                <div key={cmt.id} className="p-4 bg-muted rounded-lg space-y-2">
                  <div className="flex justify-between items-start">
                    <p className="font-medium">{cmt.user}</p>
                    <span className="text-xs text-muted-foreground">{cmt.date}</span>
                  </div>
                  <p className="text-sm">{cmt.content}</p>
                </div>
              ))
            )}
          </CardContent>
        </Card>

        {/* Form Isi Komentar */}
        {isActive ? (
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Isi Komentar</CardTitle>
              <CardDescription>Bagikan pendapat Anda tentang topik ini</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {showSuccess && (
                <Alert variant="success">
                  <CheckCircle className="h-4 w-4 mr-2" />
                  Komentar berhasil disimpan!
                </Alert>
              )}

              <textarea
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                placeholder="Tulis komentar Anda di sini..."
                className="w-full p-3 border border-input rounded-lg min-h-[120px] focus:outline-none focus:ring-2 focus:ring-primary"
              />

              <Button onClick={handleSaveComment} className="w-full">
                <Send className="h-4 w-4 mr-2" />
                Kirim Komentar
              </Button>
            </CardContent>
          </Card>
        ) : (
          <Alert variant="warning">
            Anda harus menjadi anggota aktif untuk dapat mengirim komentar. Silakan perpanjang keanggotaan Anda.
          </Alert>
        )}
      </div>
    );
  }

  // View Daftar Forum
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Forum Tour Leader</h1>
        <p className="text-muted-foreground mt-1">Diskusi dan berbagi pengalaman dengan sesama tour leader</p>
      </div>

      {!isActive && (
        <Alert variant="warning">
          Anda hanya dapat membaca forum. Aktifkan keanggotaan untuk dapat membuat posting dan komentar.
        </Alert>
      )}

      {/* Daftar Forum Diskusi */}
      <div className="space-y-3">
        {forumTopics.map((topic) => (
          <Card
            key={topic.id}
            className="hover:shadow-md transition-shadow cursor-pointer"
            onClick={() => setSelectedTopic(topic.id)}
          >
            <CardContent className="pt-6">
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1 space-y-2">
                  <h3 className="font-semibold text-lg hover:text-primary">{topic.podul}</h3>
                  <p className="text-sm text-muted-foreground">{topic.deskripsi}</p>
                  <div className="flex items-center gap-4 text-xs text-muted-foreground pt-2">
                    <span>Dibuat oleh: User {topic.dibuat_oleh}</span>
                    <span>•</span>
                    <span>{new Date().toLocaleDateString('id-ID')}</span>
                  </div>
                </div>
                <div className="flex flex-col items-end gap-2">
                  <Badge variant="secondary">Buka</Badge>
                  <div className="flex items-center gap-3 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <MessageSquare className="h-4 w-4" />
                      <span>Komentar</span>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
