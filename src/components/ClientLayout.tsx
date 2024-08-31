'use client';

import { useState } from 'react';
import Sidebar from "@/components/Sidebar";
import Header from "@/components/Header";

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);

  return (
    <div className="flex flex-col h-screen bg-gray-100">
      <Header isSidebarCollapsed={isSidebarCollapsed} setIsSidebarCollapsed={setIsSidebarCollapsed} />
      <div className="flex flex-1 overflow-hidden">
        <Sidebar isSidebarCollapsed={isSidebarCollapsed} />
        <main className="flex-1 overflow-auto bg-gray-100 p-6">
          {children}
        </main>
      </div>
    </div>
  );
}