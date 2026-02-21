import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '../../components/design-system/Card';
import { Button } from '../../components/design-system/Button';
import { Badge, getStatusBadgeVariant, getStatusLabel } from '../../components/design-system/Badge';
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from '../../components/design-system/Table';
import { letterRequests } from '../../lib/mock-data';

export function ValidateLetter() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Validasi Surat</h1>
        <p className="text-muted-foreground mt-1">Tinjau dan setujui pengajuan surat dari anggota</p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Antrian Pengajuan Surat ({letterRequests.length})</CardTitle>
          <CardDescription>Daftar pengajuan surat yang menunggu persetujuan</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Nama Anggota</TableHead>
                <TableHead>No. Anggota</TableHead>
                <TableHead>Jenis Surat</TableHead>
                <TableHead>Tujuan</TableHead>
                <TableHead>Tanggal Ajukan</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Aksi</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {letterRequests.map((request) => (
                <TableRow key={request.id}>
                  <TableCell className="font-medium">{request.memberName}</TableCell>
                  <TableCell>{request.memberNumber}</TableCell>
                  <TableCell>{request.letterType}</TableCell>
                  <TableCell>{request.destination}</TableCell>
                  <TableCell>{new Date(request.requestDate).toLocaleDateString('id-ID')}</TableCell>
                  <TableCell>
                    <Badge variant={getStatusBadgeVariant(request.status)}>
                      {getStatusLabel(request.status)}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <Button size="sm" variant="outline">Tinjau</Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}
