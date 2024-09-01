'use client';

import { useState } from 'react';
import { PencilIcon } from 'lucide-react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import SubHeader from '@/components/SubHeader';
import PermissionFilterSidebar from '@/components/PermissionFilterSidebar';
import { samplePermissions, Permission } from '@/data/samplePermissions';

export default function PermissionsPage() {
  const [permissions, setPermissions] = useState<Permission[]>(samplePermissions);
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const router = useRouter();

  const handleAdd = () => {
    router.push('/permissions/new');
  };

  const handleFilter = () => {
    setIsFilterOpen(true);
  };

  const handleApplyFilter = (filters: any) => {
    const filteredPermissions = samplePermissions.filter(permission => {
      return (
        (!filters.name || permission.name.toLowerCase().includes(filters.name.toLowerCase())) &&
        (!filters.status || permission.status === filters.status) &&
        (!filters.role || permission.role.toLowerCase().includes(filters.role.toLowerCase()))
      );
    });
    setPermissions(filteredPermissions);
  };

  return (
    <div className="flex flex-col h-full">
      <SubHeader
        title="権限 一覧"
        showAddButton={true}
        showFilterButton={true}
        onAdd={handleAdd}
        onFilter={handleFilter}
      />
      <div className="flex-1 overflow-auto p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {permissions.map((permission) => (
            <div
              key={permission.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 relative"
            >
              <Link
                href={`/permissions/${permission.id}`}
                className="block"
              >
                <div className="p-4">
                  <h2 className="text-xl font-semibold text-gray-800">{permission.name}</h2>
                  <p className="text-sm text-gray-600">ロール: {permission.role}</p>
                  <p className="text-sm text-gray-600">アクセスレベル: {permission.accessLevel}</p>
                  <span className={`mt-2 inline-block px-2 py-1 rounded-full text-xs ${permission.status === 'active' ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'}`}>
                    {permission.status === 'active' ? '有効' : '無効'}
                  </span>
                </div>
              </Link>
              <Link
                href={`/permissions/${permission.id}/edit`}
                className="absolute bottom-2 right-2 p-2 text-gray-600 hover:bg-gray-100 transition-colors duration-200 rounded-full flex items-center justify-center"
                aria-label="編集"
              >
                <PencilIcon className="h-5 w-5" />
              </Link>
            </div>
          ))}
        </div>
      </div>
      {isFilterOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={() => setIsFilterOpen(false)}
        />
      )}
      <PermissionFilterSidebar
        isOpen={isFilterOpen}
        onClose={() => setIsFilterOpen(false)}
        onApplyFilter={handleApplyFilter}
      />
    </div>
  );
}