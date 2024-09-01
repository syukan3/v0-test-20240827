'use client';

import { useState } from 'react';
import { PencilIcon } from 'lucide-react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import SubHeader from '@/components/SubHeader';
import GroupFilterSidebar from '@/components/GroupFilterSidebar';

interface Group {
  id: string;
  name: string;
  status: 'active' | 'inactive';
  facility: string;
  layout: string;
}

export const initialGroups: Group[] = [ // initialGroupsをエクスポート
  {
    id: '1',
    name: 'グループA',
    status: 'active',
    facility: '施設A',
    layout: 'レイアウトA',
  },
  {
    id: '2',
    name: 'グループB',
    status: 'inactive',
    facility: '施設B',
    layout: 'レイアウトB',
  },
  {
    id: '3',
    name: 'グループC',
    status: 'active',
    facility: '施設C',
    layout: 'レイアウトC',
  },
];

export default function GroupsPage() {
  const [groups, setGroups] = useState<Group[]>(initialGroups);
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const router = useRouter();

  const handleAdd = () => {
    router.push('/groups/new');
  };

  const handleFilter = () => {
    setIsFilterOpen(true);
  };

  const handleApplyFilter = (filters: { name: string; status: string; facility: string }) => {
    // フィルタロジックを実装
    const filteredGroups = initialGroups.filter(group => {
      return (
        (filters.name === '' || group.name.includes(filters.name)) &&
        (filters.status === '' || group.status === filters.status) &&
        (filters.facility === '' || group.facility.includes(filters.facility))
      );
    });
    setGroups(filteredGroups);
  };

  return (
    <div className="flex flex-col h-full">
      <SubHeader
        title="グループ 一覧"
        showAddButton={true}
        showFilterButton={true}
        onAdd={handleAdd}
        onFilter={handleFilter}
      />
      <div className="flex-1 overflow-auto p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {groups.map((group) => (
            <div
              key={group.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 relative"
            >
              <Link
                href={`/groups/${group.id}`}
                className="block"
              >
                <div className="p-4">
                  <h2 className="text-xl font-semibold text-gray-800">{group.name}</h2>
                  <p className="text-sm text-gray-600">施設: {group.facility}</p>
                  <p className="text-sm text-gray-600">レイアウト: {group.layout}</p>
                  <span className={`mt-2 inline-block px-2 py-1 rounded-full text-xs ${group.status === 'active' ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'}`}>
                    {group.status === 'active' ? '有効' : '無効'}
                  </span>
                </div>
              </Link>
              <Link
                href={`/groups/${group.id}/edit`}
                className="absolute bottom-2 right-2 p-2 text-gray-600 hover:bg-gray-100 transition-colors duration-200 rounded-full flex items-center justify-center"
                aria-label="編集"
              >
                <PencilIcon className="h-5 w-5" />
              </Link>
            </div>
          ))}
        </div>
      </div>
      <GroupFilterSidebar
        isOpen={isFilterOpen}
        onClose={() => setIsFilterOpen(false)}
        onApplyFilter={handleApplyFilter}
      />
    </div>
  );
}