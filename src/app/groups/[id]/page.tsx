'use client';

import { notFound, useRouter } from 'next/navigation';
import { initialGroups } from '../page'; // initialGroupsをインポート
import SubHeader from '@/components/SubHeader';

interface GroupDetailProps {
  params: { id: string };
}

export default function GroupDetail({ params }: GroupDetailProps) {
  const group = initialGroups.find(group => group.id === params.id);
  const router = useRouter();

  if (!group) {
    notFound();
  }

  const handleEdit = () => {
    router.push(`/groups/${params.id}/edit`);
  };

  const handleDelete = () => {
    // 削除の処理を実装
    console.log('Delete group:', params.id);
  };

  return (
    <div className="flex flex-col h-full">
      <SubHeader
        title="グループ 詳細"
        showEditAndDeleteButtons={true}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />
      <div className="flex-1 overflow-auto p-6">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="p-6">
            <h1 className="text-3xl font-bold mb-4 text-gray-800">{group.name}</h1>
            <p className="text-gray-600 mb-2">施設:</p>
            <p className="text-gray-700">{group.facility}</p>
            <p className="text-gray-600 mb-2 mt-4">レイアウト:</p>
            <p className="text-gray-700">{group.layout}</p>
            <p className="text-gray-600 mb-2 mt-4">ステータス:</p>
            <span className={`inline-block px-2 py-1 rounded-full text-xs ${group.status === 'active' ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'}`}>
              {group.status === 'active' ? '有効' : '無効'}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}