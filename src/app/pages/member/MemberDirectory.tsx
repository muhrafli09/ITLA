import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '../../components/design-system/Card';
import { Input } from '../../components/design-system/Input';
import { Badge } from '../../components/design-system/Badge';
import { user_profile, users, anggota } from '../../lib/mock-data';
import { Search, MapPin, Globe, Star } from 'lucide-react';

export function MemberDirectory() {
  const [searchTerm, setSearchTerm] = useState('');

  // Gabungkan data user, anggota, dan profil
  const memberProfiles = user_profile.map(profile => {
    const user = users.find(u => u.id === profile.user_id);
    const member = anggota.find(a => a.user_id === profile.user_id);
    return {
      id: profile.id,
      name: user?.nama || 'Unknown',
      memberNumber: `ITLA-${String(profile.user_id).padStart(4, '0')}`,
      spesialisasi: profile.spesialisasi || 'Tour Leader Umum',
      destinasi_keahlian: profile.destinasi_keahlian || 'Indonesia',
      bahasa: profile.bahasa || 'Indonesia',
      pengalaman_tahun: profile.pengalaman_tahun || 0,
      bio: profile.bio || '',
      status: member?.status_keaktifan === 'aktif' ? 'AKTIF' : 'NONAKTIF',
      alamat: member?.alamat || 'Indonesia'
    };
  });

  const filteredMembers = memberProfiles.filter(member =>
    member.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    member.spesialisasi.toLowerCase().includes(searchTerm.toLowerCase()) ||
    member.destinasi_keahlian.toLowerCase().includes(searchTerm.toLowerCase()) ||
    member.bahasa.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Direktori Tour Leader</h1>
        <p className="text-muted-foreground mt-1">Temukan dan terhubung dengan tour leader ITLA lainnya</p>
      </div>

      <Card>
        <CardContent className="pt-6">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Cari nama, spesialisasi, destinasi, atau bahasa..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
        </CardContent>
      </Card>

      <div className="grid md:grid-cols-2 gap-4">
        {filteredMembers.map((member) => (
          <Card key={member.id} className="hover:shadow-md transition-shadow">
            <CardHeader>
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <CardTitle className="text-base mb-1">{member.name}</CardTitle>
                  <p className="text-sm text-muted-foreground mb-2">{member.memberNumber}</p>
                  
                  <div className="space-y-2 mb-3">
                    <div className="flex items-center gap-2">
                      <Star className="h-3 w-3 text-primary" />
                      <span className="text-sm font-medium">{member.spesialisasi}</span>
                    </div>
                    
                    <div className="flex items-center gap-2">
                      <MapPin className="h-3 w-3 text-muted-foreground" />
                      <span className="text-sm text-muted-foreground">{member.destinasi_keahlian}</span>
                    </div>
                    
                    <div className="flex items-center gap-2">
                      <Globe className="h-3 w-3 text-muted-foreground" />
                      <span className="text-sm text-muted-foreground">{member.bahasa}</span>
                    </div>
                  </div>
                  
                  <p className="text-xs text-muted-foreground mb-2">
                    Pengalaman: {member.pengalaman_tahun} tahun
                  </p>
                  
                  {member.bio && (
                    <p className="text-xs text-muted-foreground line-clamp-2">{member.bio}</p>
                  )}
                </div>
                <Badge variant={member.status === 'AKTIF' ? 'active' : 'inactive'}>
                  {member.status}
                </Badge>
              </div>
            </CardHeader>
          </Card>
        ))}
      </div>

      {filteredMembers.length === 0 && (
        <Card>
          <CardContent className="pt-6">
            <div className="text-center py-12 text-muted-foreground">
              <p>Tidak ada tour leader yang ditemukan</p>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
