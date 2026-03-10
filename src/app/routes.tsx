import { createBrowserRouter } from 'react-router';

// Layouts
import { PublicLayout } from './components/layout/PublicLayout';
import { MemberLayout } from './components/layout/MemberLayout';
import { AdminLayout } from './components/layout/AdminLayout';

// Public Pages
import { LandingPage } from './pages/public/LandingPage';
import { LoginPage } from './pages/public/LoginPage';
import { RegisterPage } from './pages/public/RegisterPage';
import { RegistrationStatusPage } from './pages/public/RegistrationStatusPage';
import { FAQPage } from './pages/public/FAQPage';
import { AnnouncementsPage } from './pages/public/AnnouncementsPage';
import { EventsPage } from './pages/public/EventsPage';
import { ContactPage } from './pages/public/ContactPage';

// Member Pages
import { MemberDashboard } from './pages/member/MemberDashboard';
import { StatusCenter } from './pages/member/StatusCenter';
import { MemberProfile } from './pages/member/MemberProfile';
import { SubmitLetter } from './pages/member/SubmitLetter';
import { RenewMembership } from './pages/member/RenewMembership';
import { MemberAnnouncements } from './pages/member/MemberAnnouncements';
import { Forum } from './pages/member/Forum';

// Admin Pages
import { AdminDashboard } from './pages/admin/AdminDashboard';
import { VerifyRegistration } from './pages/admin/VerifyRegistration';
import { ValidatePayment } from './pages/admin/ValidatePayment';
import { ValidateLetter } from './pages/admin/ValidateLetter';
import { ManageContent } from './pages/admin/ManageContent';
import { UserManagement } from './pages/admin/UserManagement';
import { ModerateForum } from './pages/admin/ModerateForum';

export const router = createBrowserRouter([
  {
    path: '/',
    Component: PublicLayout,
    children: [
      { index: true, Component: LandingPage },
      { path: 'masuk', Component: LoginPage },
      { path: 'daftar', Component: RegisterPage },
      { path: 'status-pendaftaran', Component: RegistrationStatusPage },
      { path: 'faq', Component: FAQPage },
      { path: 'pengumuman', Component: AnnouncementsPage },
      { path: 'event', Component: EventsPage },
      { path: 'kontak', Component: ContactPage },
    ],
  },
  {
    path: '/anggota',
    Component: MemberLayout,
    children: [
      { index: true, Component: MemberDashboard },
      { path: 'pusat-status', Component: StatusCenter },
      { path: 'profil', Component: MemberProfile },
      { path: 'ajukan-surat', Component: SubmitLetter },
      { path: 'perpanjang', Component: RenewMembership },
      { path: 'pengumuman', Component: MemberAnnouncements },
      { path: 'forum', Component: Forum },
    ],
  },
  {
    path: '/admin',
    Component: AdminLayout,
    children: [
      { index: true, Component: AdminDashboard },
      { path: 'verifikasi-pendaftaran', Component: VerifyRegistration },
      { path: 'validasi-pembayaran', Component: ValidatePayment },
      { path: 'validasi-surat', Component: ValidateLetter },
      { path: 'kelola-konten', Component: ManageContent },
      { path: 'kelola-anggota', Component: UserManagement },
      { path: 'moderasi-forum', Component: ModerateForum },
    ],
  },
]);
