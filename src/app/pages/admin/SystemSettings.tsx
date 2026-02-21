import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '../../components/design-system/Card';
import { Button } from '../../components/design-system/Button';
import { Input } from '../../components/design-system/Input';
import { Settings, Bell, Shield, Database, Globe, Save } from 'lucide-react';

export function SystemSettings() {
    return (
        <div className="space-y-6">
            <div>
                <h1 className="text-3xl font-bold">Pengaturan Sistem</h1>
                <p className="text-muted-foreground mt-1">Konfigurasi parameter dan kebijakan ITLA</p>
            </div>

            <div className="grid lg:grid-cols-4 gap-6">
                <div className="lg:col-span-1 space-y-2">
                    <button className="w-full text-left p-3 rounded-lg bg-accent text-accent-foreground font-medium flex items-center gap-2">
                        <Settings className="h-4 w-4" /> Umum
                    </button>
                    <button className="w-full text-left p-3 rounded-lg hover:bg-muted transition-colors flex items-center gap-2 text-muted-foreground">
                        <Bell className="h-4 w-4" /> Notifikasi
                    </button>
                    <button className="w-full text-left p-3 rounded-lg hover:bg-muted transition-colors flex items-center gap-2 text-muted-foreground">
                        <Shield className="h-4 w-4" /> Keamanan
                    </button>
                    <button className="w-full text-left p-3 rounded-lg hover:bg-muted transition-colors flex items-center gap-2 text-muted-foreground">
                        <Database className="h-4 w-4" /> Integrasi & API
                    </button>
                    <button className="w-full text-left p-3 rounded-lg hover:bg-muted transition-colors flex items-center gap-2 text-muted-foreground">
                        <Globe className="h-4 w-4" /> Lokalisasi
                    </button>
                </div>

                <div className="lg:col-span-3 space-y-6">
                    <Card>
                        <CardHeader>
                            <CardTitle>Pengaturan Umum</CardTitle>
                            <CardDescription>Informasi dasar organisasi ITLA</CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div className="grid md:grid-cols-2 gap-4">
                                <Input label="Nama Organisasi" defaultValue="ITLA Pusat" />
                                <Input label="Email Kontak" defaultValue="kontak@itla.id" />
                                <Input label="Biaya Pendaftaran (Rp)" defaultValue="250,000" type="number" />
                                <Input label="Biaya Iuran Tahunan (Rp)" defaultValue="500,000" type="number" />
                            </div>
                            <div className="space-y-1.5">
                                <label className="text-sm font-medium">Alamat Kantor</label>
                                <textarea
                                    className="w-full p-2 border border-border rounded-md bg-transparent"
                                    rows={3}
                                    defaultValue="Jl. Teknologi No. 123, SCBD, Jakarta Selatan"
                                />
                            </div>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader>
                            <CardTitle>Kebijakan Keanggotaan</CardTitle>
                            <CardDescription>Aturan aktivasi dan pemutihan anggota</CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div className="flex items-center justify-between p-3 border border-border rounded-lg">
                                <div>
                                    <p className="font-medium text-sm">Verifikasi Otomatis</p>
                                    <p className="text-xs text-muted-foreground">Setujui pendaftaran secara otomatis setelah pembayaran divalidasi</p>
                                </div>
                                <div className="h-6 w-11 bg-muted rounded-full relative cursor-pointer">
                                    <div className="absolute left-1 top-1 h-4 w-4 bg-white rounded-full shadow-sm" />
                                </div>
                            </div>

                            <div className="flex items-center justify-between p-3 border border-border rounded-lg">
                                <div>
                                    <p className="font-medium text-sm">Masa Tenggang (Grace Period)</p>
                                    <p className="text-xs text-muted-foreground">Jumlah hari anggota tetap aktif setelah masa berlaku habis</p>
                                </div>
                                <div className="w-20">
                                    <Input type="number" defaultValue="30" size="sm" />
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    <div className="flex justify-end gap-3">
                        <Button variant="outline">Batal</Button>
                        <Button>
                            <Save className="mr-2 h-4 w-4" />
                            Simpan Perubahan
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
}
