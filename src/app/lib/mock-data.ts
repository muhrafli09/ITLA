// Mock data untuk aplikasi ITLA Pusat

export const announcements = [
  {
    id: '1',
    title: 'Perpanjangan Keanggotaan 2026',
    excerpt: 'Batas waktu perpanjangan keanggotaan tahun 2026 diperpanjang hingga 31 Maret 2026.',
    date: '2026-02-15',
    category: 'Keanggotaan',
  },
  {
    id: '2',
    title: 'Program Pemutihan Tunggakan',
    excerpt: 'ITLA Pusat membuka program pemutihan tunggakan untuk anggota yang belum melakukan perpanjangan.',
    date: '2026-02-10',
    category: 'Keanggotaan',
  },
  {
    id: '3',
    title: 'Sistem Baru Pengajuan Surat',
    excerpt: 'Proses pengajuan surat kini lebih cepat dengan sistem online yang telah diperbaharui.',
    date: '2026-02-05',
    category: 'Layanan',
  },
];

export const events = [
  {
    id: '1',
    title: 'Seminar Nasional Penerjemahan 2026',
    date: '2026-03-20',
    location: 'Hotel Grand Sahid Jaya, Jakarta',
    description: 'Seminar dengan tema "Masa Depan Penerjemahan di Era Digital"',
    registrationOpen: true,
  },
  {
    id: '2',
    title: 'Workshop Terjemahan Hukum',
    date: '2026-04-15',
    location: 'Online via Zoom',
    description: 'Workshop intensif mengenai teknik terjemahan dokumen hukum',
    registrationOpen: true,
  },
  {
    id: '3',
    title: 'Rapat Anggota Tahunan 2026',
    date: '2026-05-10',
    location: 'Gedung ITLA Pusat, Jakarta',
    description: 'Rapat anggota tahunan dan pemilihan pengurus periode 2026-2028',
    registrationOpen: false,
  },
];

export const members = [
  {
    id: '1',
    name: 'Budi Santoso',
    memberNumber: 'ITLA-2025-001',
    specialization: 'Terjemahan Teknis',
    city: 'Jakarta',
    status: 'AKTIF',
  },
  {
    id: '2',
    name: 'Siti Aminah',
    memberNumber: 'ITLA-2024-045',
    specialization: 'Terjemahan Hukum',
    city: 'Surabaya',
    status: 'AKTIF',
  },
  {
    id: '3',
    name: 'Ahmad Fauzi',
    memberNumber: 'ITLA-2023-112',
    specialization: 'Terjemahan Medis',
    city: 'Bandung',
    status: 'AKTIF',
  },
  {
    id: '4',
    name: 'Rina Wulandari',
    memberNumber: 'ITLA-2025-023',
    specialization: 'Terjemahan Sastra',
    city: 'Yogyakarta',
    status: 'AKTIF',
  },
];

export const registrations = [
  {
    id: '1',
    name: 'Dewi Kartika',
    email: 'dewi.kartika@email.com',
    phone: '081234567890',
    date: '2026-02-18',
    status: 'MENUNGGU_VERIFIKASI',
  },
  {
    id: '2',
    name: 'Rudi Hermawan',
    email: 'rudi.h@email.com',
    phone: '081234567891',
    date: '2026-02-17',
    status: 'MENUNGGU_VERIFIKASI',
  },
];

export const payments = [
  {
    id: '1',
    memberName: 'Andi Wijaya',
    memberNumber: 'ITLA-2024-067',
    amount: 500000,
    period: '12 Bulan',
    uploadDate: '2026-02-19',
    status: 'MENUNGGU_VALIDASI',
  },
  {
    id: '2',
    memberName: 'Linda Suryani',
    memberNumber: 'ITLA-2023-089',
    amount: 250000,
    period: '6 Bulan',
    uploadDate: '2026-02-18',
    status: 'MENUNGGU_VALIDASI',
  },
];

export const letterRequests = [
  {
    id: '1',
    memberName: 'Budi Santoso',
    memberNumber: 'ITLA-2025-001',
    letterType: 'Surat Rekomendasi Visa',
    destination: 'Jepang',
    requestDate: '2026-02-20',
    status: 'DIAJUKAN',
  },
  {
    id: '2',
    memberName: 'Siti Aminah',
    memberNumber: 'ITLA-2024-045',
    letterType: 'Surat Keterangan Anggota',
    destination: '-',
    requestDate: '2026-02-19',
    status: 'DIAJUKAN',
  },
];

export const whiteningRequests = [
  {
    id: '1',
    memberName: 'Agus Budiman',
    memberNumber: 'ITLA-2022-034',
    lastActive: '2024-12-31',
    reason: 'Kendala finansial akibat pandemi',
    requestDate: '2026-02-18',
    status: 'MENUNGGU_TINJAUAN',
  },
];

export const forumReports = [
  {
    id: '1',
    reporter: 'Siti Aminah',
    contentType: 'Posting',
    contentTitle: 'Promosi jasa terjemahan murah',
    reason: 'Spam/Iklan tidak relevan',
    reportDate: '2026-02-20',
    status: 'BELUM_DITINJAU',
  },
];

export const forumTopics = [
  {
    id: '1',
    title: 'Tips Terjemahan Dokumen Teknis',
    author: 'Budi Santoso',
    date: '2026-02-15',
    replies: 12,
    views: 156,
  },
  {
    id: '2',
    title: 'Rekomendasi Software CAT',
    author: 'Ahmad Fauzi',
    date: '2026-02-14',
    replies: 8,
    views: 89,
  },
  {
    id: '3',
    title: 'Cara Menentukan Tarif Terjemahan',
    author: 'Rina Wulandari',
    date: '2026-02-12',
    replies: 24,
    views: 234,
  },
];

export const faqs = [
  {
    id: '1',
    question: 'Bagaimana cara menjadi anggota ITLA?',
    answer: 'Anda dapat mendaftar melalui halaman Daftar Anggota, mengisi formulir lengkap, dan mengunggah dokumen yang diperlukan. Setelah itu, tim admin akan melakukan verifikasi.',
  },
  {
    id: '2',
    question: 'Berapa biaya keanggotaan ITLA?',
    answer: 'Biaya keanggotaan adalah Rp 500.000 per tahun. Anda juga dapat memilih pembayaran untuk periode 6 bulan dengan biaya Rp 250.000.',
  },
  {
    id: '3',
    question: 'Apa saja manfaat menjadi anggota ITLA?',
    answer: 'Manfaat termasuk: sertifikat keanggotaan, akses ke direktori anggota, pengajuan surat rekomendasi, forum diskusi eksklusif, diskon event dan workshop, serta networking dengan penerjemah profesional.',
  },
  {
    id: '4',
    question: 'Bagaimana cara perpanjang keanggotaan?',
    answer: 'Login ke dashboard anggota, pilih menu Perpanjang Keanggotaan, pilih periode perpanjangan, lakukan pembayaran sesuai instruksi, dan upload bukti pembayaran.',
  },
  {
    id: '5',
    question: 'Apa itu program pemutihan?',
    answer: 'Program pemutihan adalah program khusus bagi anggota yang keanggotaannya sudah tidak aktif untuk dapat mengaktifkan kembali tanpa membayar tunggakan, dengan syarat dan ketentuan tertentu.',
  },
];
