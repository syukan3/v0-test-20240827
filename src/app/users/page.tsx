'use client';

import { useState } from 'react';
import { PencilIcon } from 'lucide-react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import SubHeader from '@/components/SubHeader';
import UserFilterSidebar from '@/components/UserFilterSidebar';
import { initialUsers } from '@/data/sampleUsers'; // 修正箇所

interface User {
  id: string;
  name: string;
  status: 'active' | 'inactive';
  email: string;
  userType: string;
  facility: string;
  role: string;
  group: string;
  isAdmin: boolean;
}

export default function UsersPage() {
  const [users, setUsers] = useState<User[]>(initialUsers || []); // 修正箇所
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const router = useRouter();

  const handleAdd = () => {
    router.push('/users/new');
  };

  const handleFilter = () => {
    setIsFilterOpen(true);
  };

  const handleApplyFilter = (filters: any) => {
    const filteredUsers = initialUsers.filter(user => {
      return (
        (!filters.name || user.name.toLowerCase().includes(filters.name.toLowerCase())) &&
        (!filters.status || user.status === filters.status) &&
        (!filters.facility || user.facility.toLowerCase().includes(filters.facility.toLowerCase()))
      );
    });
    setUsers(filteredUsers);
  };

  return (
    <div className="flex flex-col h-full">
      <SubHeader
        title="ユーザー 一覧"
        showAddButton={true}
        showFilterButton={true}
        onAdd={handleAdd}
        onFilter={handleFilter}
      />
      <div className="flex-1 overflow-auto p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {users.map((user) => (
            <div
              key={user.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 relative"
            >
              <Link
                href={`/users/${user.id}`}
                className="block"
              >
                <div className="p-4">
                  <h2 className="text-xl font-semibold text-gray-800">{user.name}</h2>
                  <p className="text-sm text-gray-600">施設: {user.facility}</p>
                  <p className="text-sm text-gray-600">ロール: {user.role}</p>
                  <span className={`mt-2 inline-block px-2 py-1 rounded-full text-xs ${user.status === 'active' ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'}`}>
                    {user.status === 'active' ? '有効' : '無効'}
                  </span>
                </div>
              </Link>
              <Link
                href={`/users/${user.id}/edit`}
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
      <UserFilterSidebar
        isOpen={isFilterOpen}
        onClose={() => setIsFilterOpen(false)}
        onApplyFilter={handleApplyFilter}
      />
    </div>
  );
}