import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '../../components/design-system/Card';
import { Button } from '../../components/design-system/Button';
import { Badge } from '../../components/design-system/Badge';
import { Alert } from '../../components/design-system/Alert';
import { Calendar, MapPin, Users, CheckCircle, Clock } from 'lucide-react';

interface Event {
  id: string;
  title: string;
  description: string;
  date: string;
  location: string;
  capacity: number;
  registered: number;
  status: 'PUBLISHED' | 'ONGOING' | 'COMPLETED';
}

export function RegisterEvent() {
  const [events, setEvents] = useState<Event[]>([
    {
      id: '1',
      title: 'Seminar Nasional Tour Leader Indonesia 2026',
      description: 'Seminar dengan tema "Inovasi Pariwisata Indonesia di Era Digital untuk Tour Leader Profesional". Pembicara dari praktisi industri pariwisata terkemuka.',
      date: '2026-03-20',
      location: 'Hotel Grand Sahid Jaya, Jakarta',
      capacity: 100,
      registered: 67,
      status: 'PUBLISHED',
    },
    {
      id: '2',
      title: 'Workshop Komunikasi Efektif untuk Tour Leader',
      description: 'Workshop intensif mengenai teknik komunikasi efektif dengan wisatawan domestik dan mancanegara. Materi mencakup bahasa tubuh, storytelling, dan crisis management.',
      date: '2026-04-15',
      location: 'Bali Tourism Training Center',
      capacity: 50,
      registered: 32,
      status: 'PUBLISHED',
    },
    {
      id: '3',
      title: 'Pelatihan Manajemen Destinasi Wisata',
      description: 'Pelatihan komprehensif tentang pengelolaan dan promosi destinasi wisata Indonesia untuk tour leader profesional.',
      date: '2026-06-12',
      location: 'Yogyakarta Convention Center',
      capacity: 75,
      registered: 45,
      status: 'PUBLISHED',
    },
  ]);

  const [registeredEvents, setRegisteredEvents] = useState<string[]>([]);
  const [showSuccess, setShowSuccess] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');

  const handleRegister = (eventId: string, eventTitle: string) => {
    if (registeredEvents.includes(eventId)) {
      alert('Anda sudah terdaftar di kegiatan ini');
      return;
    }

    setRegisteredEvents([...registeredEvents, eventId]);
    setSuccessMessage(`Anda berhasil mendaftar di "${eventTitle}"`);
    setShowSuccess(true);
    setTimeout(() => setShowSuccess(false), 3000);
  };

  const handleUnregister = (eventId: string) => {
    setRegisteredEvents(registeredEvents.filter(id => id !== eventId));
  };

  const getAvailableSeats = (event: Event) => event.capacity - event.registered;
  const isEventFull = (event: Event) => getAvailableSeats(event) <= 0;

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Daftar Kegiatan</h1>
        <p className="text-muted-foreground mt-1">Daftar dan ikuti seminar serta workshop yang tersedia</p>
      </div>

      {showSuccess && (
        <Alert variant="success">
          <CheckCircle className="h-4 w-4 mr-2" />
          {successMessage}
        </Alert>
      )}

      <div className="grid gap-6">
        {events.map((event) => {
          const isRegistered = registeredEvents.includes(event.id);
          const isFull = isEventFull(event);
          const availableSeats = getAvailableSeats(event);

          return (
            <Card key={event.id} className={isFull && !isRegistered ? 'opacity-75' : ''}>
              <CardContent className="pt-6">
                <div className="grid md:grid-cols-3 gap-6">
                  {/* Info Kegiatan */}
                  <div className="md:col-span-2 space-y-4">
                    <div>
                      <div className="flex items-start justify-between mb-2">
                        <h2 className="text-2xl font-bold">{event.title}</h2>
                        {isRegistered && (
                          <Badge variant="active">
                            <CheckCircle className="h-3 w-3 mr-1" />
                            Terdaftar
                          </Badge>
                        )}
                      </div>
                      <p className="text-muted-foreground">{event.description}</p>
                    </div>

                    <div className="grid grid-cols-3 gap-4 pt-4 border-t border-border">
                      <div className="flex items-center gap-2">
                        <Calendar className="h-5 w-5 text-accent" />
                        <div>
                          <p className="text-xs text-muted-foreground">Tanggal</p>
                          <p className="font-medium">{new Date(event.date).toLocaleDateString('id-ID', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="h-5 w-5 text-accent" />
                        <div>
                          <p className="text-xs text-muted-foreground">Lokasi</p>
                          <p className="font-medium">{event.location}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <Users className="h-5 w-5 text-accent" />
                        <div>
                          <p className="text-xs text-muted-foreground">Peserta</p>
                          <p className="font-medium">{event.registered}/{event.capacity}</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Aksi Pendaftaran */}
                  <div className="flex flex-col justify-between">
                    <div className="space-y-2">
                      {isFull && !isRegistered ? (
                        <Alert variant="warning">
                          <Clock className="h-4 w-4 mr-2" />
                          Kegiatan ini sudah penuh
                        </Alert>
                      ) : (
                        <div className="p-4 bg-muted rounded-lg">
                          <p className="text-sm text-muted-foreground mb-1">Tempat Tersedia</p>
                          <p className="text-2xl font-bold text-accent">{availableSeats}</p>
                          <p className="text-xs text-muted-foreground">dari {event.capacity} tempat</p>
                        </div>
                      )}
                    </div>

                    <div className="space-y-2">
                      {isRegistered ? (
                        <Button
                          variant="outline"
                          className="w-full"
                          onClick={() => handleUnregister(event.id)}
                        >
                          Batalkan Pendaftaran
                        </Button>
                      ) : (
                        <Button
                          className="w-full"
                          disabled={isFull}
                          onClick={() => handleRegister(event.id, event.title)}
                        >
                          Daftar Sekarang
                        </Button>
                      )}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {registeredEvents.length > 0 && (
        <Card>
          <CardHeader>
            <CardTitle>Kegiatan Saya ({registeredEvents.length})</CardTitle>
            <CardDescription>Daftar kegiatan yang sudah Anda daftarkan</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              {events
                .filter(e => registeredEvents.includes(e.id))
                .map(event => (
                  <div key={event.id} className="p-3 bg-muted rounded-lg flex justify-between items-center">
                    <div>
                      <p className="font-medium">{event.title}</p>
                      <p className="text-sm text-muted-foreground">{new Date(event.date).toLocaleDateString('id-ID')}</p>
                    </div>
                    <Badge variant="active">Terdaftar</Badge>
                  </div>
                ))}
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
