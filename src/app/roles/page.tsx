'use client';

import { useState } from 'react';
import { PencilIcon } from 'lucide-react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import SubHeader from '@/components/SubHeader';
import RoleFilterSidebar from '@/components/RoleFilterSidebar';
import { sampleRoles } from '@/data/sampleRoles';

interface Role {
  id: string;
  name: string;
  facility: string;
}

export default function RolesPage() {
  const [roles, setRoles] = useState<Role[]>(sampleRoles);
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const router = useRouter();

  const handleAdd = () => {
    router.push('/roles/new');
  };

  const handleFilter = () => {
    setIsFilterOpen(true);
  };

  const handleApplyFilter = (filters: any) => {
    const filteredRoles = sampleRoles.filter(role => {
      return (
        (!filters.name || role.name.toLowerCase().includes(filters.name.toLowerCase())) &&
        (!filters.facility || role.facility.toLowerCase().includes(filters.facility.toLowerCase()))
      );
    });
    setRoles(filteredRoles);
  };

  return (
    <div className="flex flex-col h-full">
      <SubHeader
        title="ロール 一覧"
        showAddButton={true}
        showFilterButton={true}
        onAdd={handleAdd}
        onFilter={handleFilter}
      />
      <div className="flex-1 overflow-auto p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {roles.map((role) => (
            <div
              key={role.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 relative"
            >
              <Link
                href={`/roles/${role.id}`}
                className="block"
              >
                <div className="p-4">
                  <h2 className="text-xl font-semibold text-gray-800">{role.name}</h2>
                  <p className="text-sm text-gray-600">施設: {role.facility}</p>
                </div>
              </Link>
              <Link
                href={`/roles/${role.id}/edit`}
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
      <RoleFilterSidebar
        isOpen={isFilterOpen}
        onClose={() => setIsFilterOpen(false)}
        onApplyFilter={handleApplyFilter}
      />
    </div>
  );
}