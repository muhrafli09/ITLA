import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '../../components/design-system/Card';
import { Badge } from '../../components/design-system/Badge';
import { announcements } from '../../lib/mock-data';
import { formatDate } from '../../lib/utils';

export function MemberAnnouncements() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Pengumuman</h1>
        <p className="text-muted-foreground mt-1">Informasi terbaru untuk anggota</p>
      </div>

      <div className="space-y-4">
        {announcements.map((announcement) => (
          <Card key={announcement.id}>
            <CardHeader>
              <div className="flex items-center gap-2 mb-2">
                <Badge variant="default">{announcement.category}</Badge>
                <span className="text-sm text-muted-foreground">{formatDate(announcement.date)}</span>
              </div>
              <CardTitle>{announcement.title}</CardTitle>
              <CardDescription className="text-base">{announcement.excerpt}</CardDescription>
            </CardHeader>
            <CardContent>
              <button className="text-accent hover:underline text-sm">Baca selengkapnya →</button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
