import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '../../components/design-system/Card';
import { Button } from '../../components/design-system/Button';
import { Badge } from '../../components/design-system/Badge';
import { events } from '../../lib/mock-data';
import { formatDate } from '../../lib/utils';
import { Calendar, MapPin } from 'lucide-react';

export function EventsPage() {
  return (
    <div className="min-h-screen bg-secondary py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <div className="h-16 w-16 rounded-full bg-accent text-accent-foreground flex items-center justify-center mx-auto mb-4">
            <Calendar className="h-8 w-8" />
          </div>
          <h1 className="text-4xl font-bold mb-4">Event & Kegiatan</h1>
          <p className="text-muted-foreground">
            Ikuti berbagai event, seminar, dan workshop yang diselenggarakan ITLA
          </p>
        </div>

        <div className="space-y-6">
          {events.map((event) => (
            <Card key={event.id}>
              <CardHeader>
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <div className="mb-3">
                      {event.registrationOpen ? (
                        <Badge variant="active">Pendaftaran Dibuka</Badge>
                      ) : (
                        <Badge variant="inactive">Segera Dibuka</Badge>
                      )}
                    </div>
                    <CardTitle className="mb-2">{event.title}</CardTitle>
                    <CardDescription className="text-base mb-4">
                      {event.description}
                    </CardDescription>
                    <div className="flex flex-col sm:flex-row gap-3 text-sm text-muted-foreground">
                      <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4" />
                        <span>{formatDate(event.date)}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="h-4 w-4" />
                        <span>{event.location}</span>
                      </div>
                    </div>
                  </div>
                  {event.registrationOpen && (
                    <Button variant="accent">Daftar Sekarang</Button>
                  )}
                </div>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
