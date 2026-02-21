import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '../../components/design-system/Card';
import { Input } from '../../components/design-system/Input';
import { Badge } from '../../components/design-system/Badge';
import { members } from '../../lib/mock-data';
import { Search, MapPin } from 'lucide-react';

export function MemberDirectory() {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredMembers = members.filter(member =>
    member.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    member.specialization.toLowerCase().includes(searchTerm.toLowerCase()) ||
    member.city.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Direktori Anggota</h1>
        <p className="text-muted-foreground mt-1">Temukan dan terhubung dengan anggota ITLA lainnya</p>
      </div>

      <Card>
        <CardContent className="pt-6">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Cari nama, spesialisasi, atau kota..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
        </CardContent>
      </Card>

      <div className="grid md:grid-cols-2 gap-4">
        {filteredMembers.map((member) => (
          <Card key={member.id}>
            <CardHeader>
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <CardTitle className="text-base mb-1">{member.name}</CardTitle>
                  <p className="text-sm text-muted-foreground mb-2">{member.memberNumber}</p>
                  <p className="text-sm text-foreground mb-2">{member.specialization}</p>
                  <div className="flex items-center gap-1 text-sm text-muted-foreground">
                    <MapPin className="h-3 w-3" />
                    <span>{member.city}</span>
                  </div>
                </div>
                <Badge variant="active">{member.status}</Badge>
              </div>
            </CardHeader>
          </Card>
        ))}
      </div>

      {filteredMembers.length === 0 && (
        <Card>
          <CardContent className="pt-6">
            <div className="text-center py-12 text-muted-foreground">
              <p>Tidak ada anggota yang ditemukan</p>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
