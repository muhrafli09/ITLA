import React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '../../lib/utils';

const badgeVariants = cva(
  'inline-flex items-center rounded-full px-3 py-1 text-xs font-medium',
  {
    variants: {
      variant: {
        pending: 'bg-[--status-pending-bg] text-[--status-pending] border border-[--status-pending]',
        approved: 'bg-[--status-approved-bg] text-[--status-approved] border border-[--status-approved]',
        rejected: 'bg-[--status-rejected-bg] text-[--status-rejected] border border-[--status-rejected]',
        active: 'bg-[--status-active-bg] text-[--status-active] border border-[--status-active]',
        inactive: 'bg-[--status-inactive-bg] text-[--status-inactive] border border-[--status-inactive]',
        default: 'bg-muted text-muted-foreground border border-border',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

export function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  );
}

// Helper function untuk mendapatkan variant berdasarkan status
export function getStatusBadgeVariant(status: string): 'pending' | 'approved' | 'rejected' | 'active' | 'inactive' | 'default' {
  const statusMap: Record<string, 'pending' | 'approved' | 'rejected' | 'active' | 'inactive'> = {
    'MENUNGGU_VERIFIKASI': 'pending',
    'MENUNGGU_VALIDASI': 'pending',
    'MENUNGGU_TINJAUAN': 'pending',
    'DIAJUKAN': 'pending',
    'DISETUJUI': 'approved',
    'AKTIF': 'active',
    'DITOLAK': 'rejected',
    'NONAKTIF': 'inactive',
    'KEDALUWARSA': 'inactive',
    'BELUM_DITINJAU': 'pending',
  };
  
  return statusMap[status] || 'default';
}

// Helper function untuk format label status
export function getStatusLabel(status: string): string {
  const labelMap: Record<string, string> = {
    'MENUNGGU_VERIFIKASI': 'Menunggu Verifikasi',
    'MENUNGGU_VALIDASI': 'Menunggu Validasi',
    'MENUNGGU_TINJAUAN': 'Menunggu Tinjauan',
    'DIAJUKAN': 'Diajukan',
    'DISETUJUI': 'Disetujui',
    'AKTIF': 'Aktif',
    'DITOLAK': 'Ditolak',
    'NONAKTIF': 'Nonaktif',
    'KEDALUWARSA': 'Kedaluwarsa',
    'BELUM_DITINJAU': 'Belum Ditinjau',
  };
  
  return labelMap[status] || status;
}
