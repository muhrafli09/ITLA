import React from 'react';
import { Outlet } from 'react-router';
import { PublicHeader } from './PublicHeader';

export function PublicLayout() {
  return (
    <div className="min-h-screen bg-background">
      <PublicHeader />
      <Outlet />
    </div>
  );
}
