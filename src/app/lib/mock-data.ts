// Mock data untuk aplikasi ITLA Pusat - Indonesian Tour Leaders Association

export const users = [
  {
    id: 1,
    nama: 'Andi Wijaya',
    email: 'andi@example.com',
    password: 'hashed_password',
    role: 'anggota',
  },
  {
    id: 2,
    nama: 'Linda Suryani',
    email: 'linda@example.com',
    password: 'hashed_password',
    role: 'anggota',
  },
  {
    id: 3,
    nama: 'Budi Santoso',
    email: 'budi@example.com',
    password: 'hashed_password',
    role: 'anggota',
  },
  {
    id: 4,
    nama: 'Siti Nurhaliza',
    email: 'siti@example.com',
    password: 'hashed_password',
    role: 'anggota',
  },
  {
    id: 5,
    nama: 'Admin ITLA',
    email: 'admin@itla.com',
    password: 'hashed_password',
    role: 'admin',
  },
];

export const jenis_kegiatan = [
  {
    id: 1,
    nama: 'Seminar Pariwisata',
  },
  {
    id: 2,
    nama: 'Workshop & Pelatihan',
  },
  {
    id: 3,
    nama: 'Rapat Anggota',
  },
  {
    id: 4,
    nama: 'Networking Event',
  },
];

export const jenis_surat = [
  {
    id: 1,
    nama: 'Surat Rekomendasi',
  },
  {
    id: 2,
    nama: 'Surat Keterangan Anggota',
  },
];

export const anggota = [
  {
    id: 1,
    user_id: 1,
    no_ktp: '1234567890123456',
    no_hp: '081234567890',
    alamat: 'Jl. Merdeka No. 123, Jakarta',
    tanggal_bergabung: '2025-01-15',
    masa_berlaku: '2026-01-15',
    status_keaktifan: 'aktif',
  },
  {
    id: 2,
    user_id: 2,
    no_ktp: '1234567890123457',
    no_hp: '081234567891',
    alamat: 'Jl. Sudirman No. 456, Surabaya',
    tanggal_bergabung: '2024-06-20',
    masa_berlaku: '2025-06-20',
    status_keaktifan: 'aktif',
  },
  {
    id: 3,
    user_id: 3,
    no_ktp: '1234567890123458',
    no_hp: '081234567892',
    alamat: 'Jl. Ahmad Yani No. 789, Bandung',
    tanggal_bergabung: '2023-03-10',
    masa_berlaku: '2024-03-10',
    status_keaktifan: 'tidak_aktif',
  },
  {
    id: 4,
    user_id: 4,
    no_ktp: '1234567890123459',
    no_hp: '081234567893',
    alamat: 'Jl. Gatot Subroto No. 321, Medan',
    tanggal_bergabung: '2026-02-18',
    masa_berlaku: null,
    status_keaktifan: 'menunggu_validasi',
  },
];

export const kegiatan = [
  {
    id: 1,
    jenis_kegiatan_id: 1,
    judul: 'Seminar Nasional Tour Leader Indonesia 2026',
    deskripsi: 'Seminar dengan tema "Inovasi Pariwisata Indonesia di Era Digital untuk Tour Leader Profesional"',
    tanggal_mulai: '2026-03-20',
    tanggal_selesai: '2026-03-20',
    lokasi: 'Hotel Grand Sahid Jaya, Jakarta',
    kuota: 100,
    status: 'dibuka',
    dibuat_oleh: 5,
  },
  {
    id: 2,
    jenis_kegiatan_id: 2,
    judul: 'Workshop Komunikasi Efektif untuk Tour Leader',
    deskripsi: 'Workshop intensif mengenai teknik komunikasi efektif dengan wisatawan domestik dan mancanegara',
    tanggal_mulai: '2026-04-15',
    tanggal_selesai: '2026-04-15',
    lokasi: 'Bali Tourism Training Center',
    kuota: 50,
    status: 'dibuka',
    dibuat_oleh: 5,
  },
  {
    id: 3,
    jenis_kegiatan_id: 3,
    judul: 'Rapat Anggota Tahunan ITLA 2026',
    deskripsi: 'Rapat anggota tahunan dan pemilihan pengurus periode 2026-2028',
    tanggal_mulai: '2026-05-10',
    tanggal_selesai: '2026-05-10',
    lokasi: 'Gedung ITLA Pusat, Jakarta',
    kuota: 200,
    status: 'ditutup',
    dibuat_oleh: 5,
  },
  {
    id: 4,
    jenis_kegiatan_id: 2,
    judul: 'Pelatihan Manajemen Destinasi Wisata',
    deskripsi: 'Pelatihan komprehensif tentang pengelolaan dan promosi destinasi wisata Indonesia',
    tanggal_mulai: '2026-06-12',
    tanggal_selesai: '2026-06-13',
    lokasi: 'Yogyakarta Convention Center',
    kuota: 75,
    status: 'dibuka',
    dibuat_oleh: 5,
  },
  {
    id: 5,
    jenis_kegiatan_id: 1,
    judul: 'Seminar Sustainable Tourism untuk Tour Leader',
    deskripsi: 'Membahas praktik pariwisata berkelanjutan dan peran tour leader dalam menjaga lingkungan',
    tanggal_mulai: '2026-07-08',
    tanggal_selesai: '2026-07-08',
    lokasi: 'Bandung Creative Hub',
    kuota: 80,
    status: 'akan_dibuka',
    dibuat_oleh: 5,
  },
];

export const peserta_kegiatan = [
  {
    id: 1,
    kegiatan_id: 1,
    anggota_id: 1,
    status: 'disetujui',
    status_pembayaran: 'disetujui',
    is_hadir: true,
    tanggal_proses: '2026-02-16',
  },
  {
    id: 2,
    kegiatan_id: 1,
    anggota_id: 2,
    status: 'menunggu_validasi',
    status_pembayaran: 'menunggu_validasi',
    is_hadir: false,
    tanggal_proses: null,
  },
  {
    id: 3,
    kegiatan_id: 2,
    anggota_id: 3,
    status: 'ditolak',
    status_pembayaran: 'ditolak',
    is_hadir: false,
    tanggal_proses: '2026-02-14',
  },
];

export const pembayaran = [
  {
    id: 1,
    anggota_id: 1,
    tipe: 'perpanjangan_keanggotaan',
    jumlah: 500000,
    metode: 'transfer_bank',
    nama_pengrim: 'Andi Wijaya',
    bank_pengrim: 'BCA',
    bukti_bayar: 'bukti_001.jpg',
    status: 'disetujui',
    catatan_admin: 'Pembayaran valid',
    tanggal_validasi: '2026-02-16',
    created_at: '2026-02-15',
  },
  {
    id: 2,
    anggota_id: 2,
    tipe: 'perpanjangan_keanggotaan',
    jumlah: 250000,
    metode: 'transfer_bank',
    nama_pengrim: 'Linda Suryani',
    bank_pengrim: 'Mandiri',
    bukti_bayar: 'bukti_002.jpg',
    status: 'menunggu_validasi',
    catatan_admin: null,
    tanggal_validasi: null,
    created_at: '2026-02-17',
  },
  {
    id: 3,
    anggota_id: 3,
    tipe: 'perpanjangan_keanggotaan',
    jumlah: 500000,
    metode: 'transfer_bank',
    nama_pengrim: 'Budi Santoso',
    bank_pengrim: 'BNI',
    bukti_bayar: 'bukti_003.jpg',
    status: 'menunggu_validasi',
    catatan_admin: null,
    tanggal_validasi: null,
    created_at: '2026-02-18',
  },
];

export const pengajuan_surat = [
  {
    id: 1,
    anggota_id: 1,
    jenis_surat_id: 1,
    file_pendukung: 'dokumen_001.pdf',
    nomor_surat: 'ITLA/2026/001',
    status: 'disetujui',
    catatan_admin: 'Surat siap diambil',
    tanggal_proses: '2026-02-16',
    created_at: '2026-02-14',
  },
  {
    id: 2,
    anggota_id: 2,
    jenis_surat_id: 2,
    file_pendukung: null,
    nomor_surat: null,
    status: 'menunggu_validasi',
    catatan_admin: null,
    tanggal_proses: null,
    created_at: '2026-02-17',
  },
  {
    id: 3,
    anggota_id: 3,
    jenis_surat_id: 1,
    file_pendukung: 'dokumen_003.pdf',
    nomor_surat: null,
    status: 'menunggu_validasi',
    catatan_admin: null,
    tanggal_proses: null,
    created_at: '2026-02-18',
  },
];

export const pemutihan = [
  {
    id: 1,
    anggota_id: 3,
    alasan: 'Kendala finansial akibat pandemi',
    status: 'disetujui',
    catatan_admin: 'Disetujui dengan syarat',
    tanggal_proses: '2026-02-17',
    created_at: '2026-02-15',
  },
  {
    id: 2,
    anggota_id: 2,
    alasan: 'Kesulitan ekonomi',
    status: 'menunggu_validasi',
    catatan_admin: null,
    tanggal_proses: null,
    created_at: '2026-02-16',
  },
];

export const berita = [
  {
    id: 1,
    judul: 'Pentingnya Sertifikasi Tour Leader Profesional',
    isi: 'Artikel tentang manfaat sertifikasi profesional bagi tour leader dalam meningkatkan kualitas layanan pariwisata',
    gambar: 'berita_001.jpg',
    dibuat_oleh: 5,
    created_at: '2026-02-01',
  },
  {
    id: 2,
    judul: 'Tren Pariwisata Indonesia 2026',
    isi: 'Analisis tren industri pariwisata Indonesia dan peluang bagi tour leader profesional',
    gambar: 'berita_002.jpg',
    dibuat_oleh: 5,
    created_at: '2026-02-10',
  },
  {
    id: 3,
    judul: 'Panduan Etika Tour Leader Profesional',
    isi: 'Standar etika dan profesionalisme dalam praktik tour leader Indonesia',
    gambar: 'berita_003.jpg',
    dibuat_oleh: 5,
    created_at: '2026-02-12',
  },
];

export const forum = [
  {
    id: 1,
    podul: 'Tips Memandu Wisatawan Asing',
    deskripsi: 'Diskusi tentang tips dan trik memandu wisatawan asing dengan efektif sebagai tour leader profesional',
    user_id: 5,
    dibuat_oleh: 5,
    created_at: '2026-02-01',
  },
  {
    id: 2,
    podul: 'Rekomendasi Destinasi Wisata Terbaik',
    deskripsi: 'Berbagi rekomendasi destinasi wisata terbaik di Indonesia untuk tour leader',
    user_id: 5,
    dibuat_oleh: 5,
    created_at: '2026-02-05',
  },
  {
    id: 3,
    podul: 'Cara Menentukan Tarif Tour Leader',
    deskripsi: 'Panduan menentukan tarif tour leader yang kompetitif dan profesional',
    user_id: 5,
    dibuat_oleh: 5,
    created_at: '2026-02-08',
  },
];

export const forumTopics = forum;

export const forum_komentar = [
  {
    id: 1,
    forum_id: 1,
    user_id: 2,
    komentar: 'Tips yang sangat berguna untuk meningkatkan kualitas layanan tour leader saya!',
    created_at: '2026-02-10',
    updated_at: '2026-02-10',
  },
  {
    id: 2,
    forum_id: 2,
    user_id: 1,
    komentar: 'Saya merekomendasikan Borobudur dan Prambanan sebagai destinasi utama untuk tour wisata budaya',
    created_at: '2026-02-12',
    updated_at: '2026-02-12',
  },
  {
    id: 3,
    forum_id: 1,
    user_id: 3,
    komentar: 'Komentar spam yang dihapus',
    created_at: '2026-02-13',
    updated_at: '2026-02-13',
  },
];

export const forum_laporan = [
  {
    id: 1,
    forum_id: 1,
    user_id: 2,
    komentar: 'Spam/Iklan tidak relevan',
  },
  {
    id: 2,
    forum_id: 2,
    user_id: 1,
    komentar: 'Konten tidak sesuai dengan topik',
  },
  {
    id: 3,
    forum_id: 3,
    user_id: 3,
    komentar: 'Bahasa kasar dan tidak sopan',
  },
];

export const user_profile = [
  {
    id: 1,
    user_id: 1,
    foto_profil: 'profil_001.jpg',
    bio: 'Tour leader berpengalaman di bidang wisata budaya dan sejarah Indonesia',
    keahlian: 'Wisata Budaya, Wisata Sejarah, Bahasa Inggris, Bahasa Mandarin',
    pengalaman_tahun: 5,
    spesialisasi: 'Wisata Budaya & Sejarah',
    destinasi_keahlian: 'Yogyakarta, Solo, Borobudur',
    bahasa: 'Indonesia, Inggris, Mandarin',
  },
  {
    id: 2,
    user_id: 2,
    foto_profil: 'profil_002.jpg',
    bio: 'Spesialis tour leader wisata alam dan petualangan',
    keahlian: 'Wisata Alam, Hiking, Diving, Bahasa Inggris, Bahasa Jepang',
    pengalaman_tahun: 8,
    spesialisasi: 'Wisata Alam & Petualangan',
    destinasi_keahlian: 'Bali, Lombok, Raja Ampat',
    bahasa: 'Indonesia, Inggris, Jepang',
  },
  {
    id: 3,
    user_id: 3,
    foto_profil: null,
    bio: 'Tour leader umum dengan fokus wisata kota',
    keahlian: 'Wisata Kota, City Tour, Bahasa Inggris',
    pengalaman_tahun: 2,
    spesialisasi: 'Wisata Kota',
    destinasi_keahlian: 'Jakarta, Bandung, Surabaya',
    bahasa: 'Indonesia, Inggris',
  },
];

export const faqs = [
  {
    id: '1',
    question: 'Bagaimana cara menjadi anggota ITLA Pusat?',
    answer: 'Anda dapat mendaftar melalui halaman Daftar Anggota, mengisi formulir lengkap dengan data tour leader, dan mengunggah dokumen yang diperlukan. Setelah itu, tim admin akan melakukan verifikasi.',
  },
  {
    id: '2',
    question: 'Berapa biaya keanggotaan ITLA?',
    answer: 'Biaya keanggotaan adalah Rp 500.000 per tahun. Anda juga dapat memilih pembayaran untuk periode 6 bulan dengan biaya Rp 250.000.',
  },
  {
    id: '3',
    question: 'Apa saja manfaat menjadi anggota ITLA Pusat?',
    answer: 'Manfaat termasuk: sertifikat keanggotaan profesional tour leader, akses ke direktori tour leader, pengajuan surat rekomendasi, forum diskusi pariwisata eksklusif, diskon event dan workshop pariwisata, serta networking dengan tour leader profesional lainnya.',
  },
  {
    id: '4',
    question: 'Apakah ITLA menyediakan program sertifikasi BNSP?',
    answer: 'Ya, ITLA Pusat menyelenggarakan program sertifikasi kompetensi tour leader sesuai standar BNSP (Badan Nasional Sertifikasi Profesi) untuk meningkatkan profesionalisme anggota.',
  },
  {
    id: '5',
    question: 'Bagaimana cara mengikuti event dan pelatihan ITLA?',
    answer: 'Anggota dapat mendaftar event melalui portal member atau menghubungi sekretariat. Event rutin meliputi workshop, seminar, dan pelatihan pengembangan kompetensi tour leader.',
  },
];

export const announcements = [
  {
    id: 1,
    title: 'Pembukaan Pendaftaran Anggota Baru 2026',
    excerpt: 'ITLA Pusat membuka pendaftaran anggota baru periode 2026. Dapatkan benefit eksklusif untuk pendaftar awal.',
    category: 'Pendaftaran',
    date: '2026-02-24',
  },
  {
    id: 2,
    title: 'Workshop Tour Leader - Problematika Saat Bertugas',
    excerpt: 'Seringkali dalam setiap menjalankan tugasnya, Tour Leader menjumpai berbagai problematika. Workshop khusus untuk membahas solusi praktis.',
    category: 'Workshop',
    date: '2026-03-04',
  },
  {
    id: 3,
    title: 'ITLA Pusat Dorong Peningkatan Kualitas Tour Leader Profesional',
    excerpt: 'ITLA Pusat mendorong peningkatan kualitas tour leader serta memperkuat kolaborasi komunitas untuk memajukan pariwisata Indonesia.',
    category: 'Pengembangan',
    date: '2026-02-24',
  },
];

export const events = [
  {
    id: 1,
    title: 'Workshop Tour Leader - Problematika Saat Bertugas',
    description: 'Seringkali dalam setiap menjalankan tugasnya, Tour Leader menjumpai berbagai problematika. Workshop khusus membahas solusi praktis.',
    date: '2026-03-04',
    location: 'ASTINDO Training Center Pusat Bisnis Thamrin City',
    registrationOpen: true,
  },
  {
    id: 2,
    title: 'One Stop Training in Ramadhan Season - Serve with Integrity, Lead with Innovation',
    description: 'Saatnya jadi Tour Leader the next level dengan pelatihan komprehensif di bulan Ramadhan.',
    date: '2026-03-07',
    location: 'ITLA Virtual Hall',
    registrationOpen: true,
  },
  {
    id: 3,
    title: 'Sertifikasi BNSP Tour Leader Profesional',
    description: 'Program sertifikasi kompetensi tour leader sesuai standar BNSP untuk meningkatkan profesionalisme.',
    date: '2026-03-15',
    location: 'Bandung Tourism Training Center',
    registrationOpen: true,
  },
];

// Alias exports untuk kompatibilitas
export const registrations = anggota.map(a => {
  const user = users.find(u => u.id === a.user_id);
  return {
    id: a.id,
    name: user?.nama || 'Unknown',
    email: user?.email || '',
    phone: a.no_hp,
    date: a.tanggal_bergabung,
    status: a.status_keaktifan === 'aktif' ? 'MENUNGGU_VALIDASI' : a.status_keaktifan.toUpperCase(),
    ...a
  };
});

export const whiteningRequests = pemutihan.map(p => {
  const member = anggota.find(a => a.id === p.anggota_id);
  const user = users.find(u => u.id === member?.user_id);
  return {
    id: p.id,
    memberName: user?.nama || 'Unknown',
    memberNumber: `ITLA-${String(p.anggota_id).padStart(4, '0')}`,
    reason: p.alasan,
    status: p.status.toUpperCase(),
    requestDate: p.created_at || '2026-02-01',
    ...p
  };
});

export const payments = pembayaran.map(pay => {
  const member = anggota.find(a => a.id === pay.anggota_id);
  const user = users.find(u => u.id === member?.user_id);
  return {
    id: pay.id,
    memberName: user?.nama || 'Unknown',
    memberNumber: `ITLA-${String(pay.anggota_id).padStart(4, '0')}`,
    amount: pay.jumlah,
    period: pay.tipe === 'perpanjangan_keanggotaan' ? '12 Bulan' : '6 Bulan',
    uploadDate: pay.created_at || '2026-02-01',
    status: pay.status === 'menunggu_validasi' ? 'MENUNGGU_VALIDASI' : pay.status.toUpperCase(),
    proofImage: pay.bukti_bayar,
    ...pay
  };
});

export const forumReports = forum_laporan.map(fl => {
  const user = users.find(u => u.id === fl.user_id);
  const forumPost = forum.find(f => f.id === fl.forum_id);
  return {
    id: fl.id,
    reporter: user?.nama || 'Unknown',
    reporterName: user?.nama || 'Unknown',
    contentType: 'Forum Diskusi',
    contentTitle: forumPost?.podul || 'Unknown',
    forumTitle: forumPost?.podul || 'Unknown',
    reason: fl.komentar,
    reportDate: '2026-02-18',
    status: 'BELUM_DITINJAU',
    ...fl
  };
});

export const letterRequests = pengajuan_surat.map(ps => {
  const member = anggota.find(a => a.id === ps.anggota_id);
  const user = users.find(u => u.id === member?.user_id);
  const jenis = jenis_surat.find(j => j.id === ps.jenis_surat_id);
  return {
    id: ps.id,
    memberName: user?.nama || 'Unknown',
    memberNumber: `ITLA-${String(ps.anggota_id).padStart(4, '0')}`,
    letterType: jenis?.nama || 'Unknown',
    destination: 'Kedutaan Besar',
    requestDate: ps.created_at || '2026-02-01',
    status: ps.status === 'menunggu_validasi' ? 'MENUNGGU_VALIDASI' : ps.status.toUpperCase(),
    ...ps
  };
});

export const members = anggota.map(a => ({
  ...a,
  name: users.find(u => u.id === a.user_id)?.nama || 'Unknown',
  email: users.find(u => u.id === a.user_id)?.email || '',
}));
