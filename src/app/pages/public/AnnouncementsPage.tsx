import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '../../components/design-system/Card';
import { Badge } from '../../components/design-system/Badge';
import { announcements } from '../../lib/mock-data';
import { formatDate } from '../../lib/utils';
import { Megaphone } from 'lucide-react';

export function AnnouncementsPage() {
  return (
    <div className="min-h-screen bg-secondary py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <div className="h-16 w-16 rounded-full bg-accent text-accent-foreground flex items-center justify-center mx-auto mb-4">
            <Megaphone className="h-8 w-8" />
          </div>
          <h1 className="text-4xl font-bold mb-4">Pengumuman</h1>
          <p className="text-muted-foreground">
            Informasi terbaru dan pengumuman penting dari ITLA Pusat
          </p>
        </div>

        <div className="space-y-4">
          {announcements.map((announcement) => (
            <Card key={announcement.id}>
              <CardHeader>
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <Badge variant="default">{announcement.category}</Badge>
                      <span className="text-sm text-muted-foreground">
                        {formatDate(announcement.date)}
                      </span>
                    </div>
                    <CardTitle className="mb-2">{announcement.title}</CardTitle>
                    <CardDescription className="text-base">
                      {announcement.excerpt}
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <button className="text-accent hover:underline text-sm">
                  Baca selengkapnya →
                </button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
